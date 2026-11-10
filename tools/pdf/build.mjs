/* Membangun PDF unduhan dari data situs: `npm run pdf`.
 *
 *   public/downloads/adhiloka-ingredients-catalog.pdf        katalog semua bahan
 *   src/assets/downloads/catalog.jpg                          sampul untuk kartu unduhan
 *   src/data/downloads.json                                   manifes: tautan, halaman, ukuran
 *
 * HTML dari templates.mjs dicetak Chrome headless (--print-to-pdf), jadi tidak
 * ada dependensi baru. Jalankan ulang setiap kali materials.ts berubah; PDF
 * tidak dibangun otomatis saat `npm run build` karena Netlify tidak punya
 * Chrome. Hasilnya di-commit. */

import { execFileSync } from 'node:child_process';
import { existsSync, mkdirSync, readFileSync, rmSync, statSync, writeFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { build } from 'esbuild';
import sharp from 'sharp';
import { catalogHtml, EDITION, ISSUED, REVISION } from './templates.mjs';

const HERE = dirname(fileURLToPath(import.meta.url));
const ROOT = resolve(HERE, '../..');
const OUT = join(HERE, '.out');
const PUB = join(ROOT, 'public/downloads');
const THUMBS = join(ROOT, 'src/assets/downloads');

const CHROME = [
  process.env.CHROME_PATH,
  'C:/Program Files/Google/Chrome/Application/chrome.exe',
  'C:/Program Files (x86)/Microsoft/Edge/Application/msedge.exe',
  '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  '/usr/bin/google-chrome',
].find((p) => p && existsSync(p));
if (!CHROME) throw new Error('Chrome tidak ditemukan; set CHROME_PATH.');

// Data situs dibundel esbuild karena impor TS di src/ tanpa ekstensi berkas.
const bundle = await build({
  stdin: {
    contents: `export { MATERIALS } from './src/data/materials.ts';
               export { ORDERING_STEPS, ORDERING_DOCUMENTS, ORDERING_DOCUMENTS_LEAD, INGREDIENTS_OPENING } from './src/data/pages/ingredients.ts';`,
    resolveDir: ROOT,
    loader: 'ts',
  },
  bundle: true,
  format: 'esm',
  platform: 'node',
  write: false,
});
const { MATERIALS, ORDERING_STEPS, ORDERING_DOCUMENTS, ORDERING_DOCUMENTS_LEAD, INGREDIENTS_OPENING } = await import(
  'data:text/javascript;base64,' + Buffer.from(bundle.outputFiles[0].text).toString('base64')
);

rmSync(OUT, { recursive: true, force: true });
for (const d of [OUT, join(OUT, 'img'), PUB, THUMBS]) mkdirSync(d, { recursive: true });

/* Foto diperkecil dulu: Chrome menanam gambar pada resolusi aslinya. */
const imgFile = async (key, width) => {
  const ext = ['.jpg', '.png'].find((e) => existsSync(join(ROOT, 'src/assets/images', key + e)));
  if (!ext) throw new Error(`Gambar ${key} tidak ada`);
  const out = join(OUT, 'img', `${key}-${width}.jpg`);
  if (!existsSync(out)) {
    await sharp(join(ROOT, 'src/assets/images', key + ext))
      .resize({ width, withoutEnlargement: true })
      .jpeg({ quality: 78, mozjpeg: true })
      .toFile(out);
  }
  return pathToFileURL(out).href;
};

const assets = {
  lockup: pathToFileURL(join(ROOT, 'public/brand/adhiloka-lockup.svg')).href,
  lockupDark: pathToFileURL(join(ROOT, 'public/brand/adhiloka-lockup-dark.svg')).href,
};
const base = pathToFileURL(HERE).href + '/';
const withBase = (html) => html.replace('<head>', `<head>\n<base href="${base}">`);

const chrome = (args) =>
  execFileSync(
    CHROME,
    [
      '--headless=new',
      '--disable-gpu',
      '--no-first-run',
      '--hide-scrollbars',
      `--user-data-dir=${join(OUT, 'profile')}`,
      '--virtual-time-budget=8000',
      ...args,
    ],
    { stdio: 'pipe' },
  );

/** Cetak satu HTML ke PDF dan potret halaman pertamanya untuk sampul. */
async function render(name, html, pdfPath) {
  const htmlPath = join(OUT, `${name}.html`);
  writeFileSync(htmlPath, withBase(html));
  const url = pathToFileURL(htmlPath).href;
  chrome(['--no-pdf-header-footer', `--print-to-pdf=${pdfPath}`, url]);

  const png = join(OUT, `${name}.png`);
  chrome([`--screenshot=${png}`, '--window-size=794,1123', '--force-device-scale-factor=2', url]);
  await sharp(png).resize({ width: 900 }).jpeg({ quality: 82, mozjpeg: true }).toFile(join(THUMBS, `${name}.jpg`));

  return {
    pages: (html.match(/<section class="page/g) ?? []).length,
    bytes: statSync(pdfPath).size,
  };
}

const manifest = { edition: EDITION, issued: ISSUED, revision: REVISION, catalog: null, specs: {} };

// Katalog
{
  const img = {};
  for (const m of MATERIALS) img[m.slug] = await imgFile(m.image, 1400);
  const cover = await imgFile('material-benzoin', 1800);
  const file = 'adhiloka-ingredients-catalog.pdf';
  const html = catalogHtml({
    materials: MATERIALS,
    steps: ORDERING_STEPS,
    intro: INGREDIENTS_OPENING,
    docsLead: ORDERING_DOCUMENTS_LEAD,
    docs: ORDERING_DOCUMENTS,
    img: (m) => img[m.slug],
    cover,
    assets,
  });
  const r = await render('catalog', html, join(PUB, file));
  manifest.catalog = { href: `/downloads/${file}`, thumb: 'catalog', ...r };
  console.log(`katalog  ${r.pages} hlm  ${(r.bytes / 1024).toFixed(0)} KB`);
}

// Lembar spesifikasi per bahan dilepas 10 Nov 2026 (lihat templates.mjs);
// `specs` di manifes dibiarkan kosong supaya situs menawarkan permintaan
// spesifikasi lewat formulir kontak.

writeFileSync(join(ROOT, 'src/data/downloads.json'), JSON.stringify(manifest, null, 2) + '\n');
rmSync(join(OUT, 'profile'), { recursive: true, force: true });
console.log('selesai');
