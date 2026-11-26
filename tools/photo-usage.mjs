#!/usr/bin/env node
/**
 * Daftar rumah foto situs (pemilik, 15 Nov 2026).
 *
 * Aturan: satu foto = satu konteks. Foto boleh muncul di beberapa tempat hanya
 * bila semuanya menunjuk hal yang sama: banner halaman X, panel menu ke X,
 * kartu yang menaut ke X, Explore More ke X; atau foto bahan yang tampil di
 * kartu katalog, halaman bahan dan produknya. Konteks berbeda = foto berbeda.
 *
 * Cara kerja: semua kunci di src/data/images.ts dicari sebagai string literal
 * di src/**.{ts,astro} (plus foto bahan di catalog-data.json). Tiap pemakaian
 * diberi konteks:
 *   - href di objek/elemen yang sama            → jalur tujuan, mis. /about/
 *   - objek *_INTRO / intro halaman (banner)    → jalur halaman itu
 *   - foto bahan (catalog-data.json)            → /ingredients/catalog/<slug>/
 *   - selain itu                                → blok: berkas + judul/label
 * Kunci dengan lebih dari satu konteks = PELANGGARAN, kecuali tercatat di
 * ALLOW di bawah beserta alasannya.
 *
 * Keluaran: PHOTOS.md (daftar lengkap: foto → tempat dipakai). Kode keluar 1
 * bila ada pelanggaran; `npm run build` menjalankannya lebih dulu.
 *   node tools/photo-usage.mjs          tulis PHOTOS.md, gagal bila melanggar
 *   node tools/photo-usage.mjs --report tulis PHOTOS.md, tanpa gagal
 */
import { readFileSync, writeFileSync, readdirSync, statSync } from 'node:fs';
import { join, relative, dirname, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const SRC = join(ROOT, 'src');
const rel = (p) => relative(ROOT, p).split(sep).join('/');

/* Pengecualian yang disengaja: kunci → alasan. Isi hanya bila konteksnya
   memang sama tetapi skrip tidak bisa melihatnya. */
const ALLOW = {};
/* Pemakaian yang bukan tampilan halaman (meta, gambar bagikan). */
const IGNORE = [/src\/layouts\/BaseLayout\.astro/];
/* Konteks yang sama dengan nama berbeda: blok di halaman ↔ tautan ke jangkarnya. */
const OWNER_CTX = { PERFUMERY_PALETTE: '/perfumery/#palette', ABOUT_MORE: '/sustainability/' };
/* Berkas produk lini → halaman Products-nya. */
const LINE_FILES = { 'src/data/seafood.ts': '/fisheries/products/', 'src/data/packaging.ts': '/polymers/products/' };

/* ── Kunci dan berkasnya ─────────────────────────────────────────────── */
const imagesTs = readFileSync(join(SRC, 'data/images.ts'), 'utf8');
const importOf = {};
for (const m of imagesTs.matchAll(/^import (\w+) from '\.\.\/assets\/images\/([^']+)';/gm)) importOf[m[1]] = m[2];
const keys = {};
for (const m of imagesTs.matchAll(/^\s+'([a-z0-9-]+)': (\w+),/gm)) keys[m[1]] = importOf[m[2]];
const notes = {};
for (const m of imagesTs.matchAll(/^ \*\s{2,}([a-z0-9-]+)\s{2,}(.+?)\s{2,}\[/gm)) notes[m[1]] = m[2].trim();

/* ── Berkas sumber ───────────────────────────────────────────────────── */
const walk = (d) =>
  readdirSync(d).flatMap((n) => {
    const p = join(d, n);
    return statSync(p).isDirectory() ? walk(p) : /\.(ts|astro)$/.test(n) ? [p] : [];
  });
// Halaman yang diparkir (awalan _) tidak terbit; tidak dihitung.
const files = walk(SRC).filter((p) => !p.endsWith(`data${sep}images.ts`) && !/[\\/]_[^\\/]+/.test(rel(p).replace(/^src\//, '')));

/* Nama objek intro → jalur halaman (dari `intro={NAME}` di src/pages). */
const pagePath = (p) => {
  let r = rel(p).replace(/^src\/pages/, '').replace(/\.astro$/, '').replace(/\/index$/, '');
  return `${r}/`.replace(/\/+/g, '/');
};
const introPage = {};
for (const p of files.filter((f) => rel(f).startsWith('src/pages/'))) {
  const s = readFileSync(p, 'utf8');
  for (const m of s.matchAll(/intro=\{(\w+)\}/g)) introPage[m[1]] = m[1] === 'intro' ? pagePath(p) : introPage[m[1]] ?? pagePath(p);
}

// Query dipertahankan: /contact/?kind=supplier adalah blok sendiri, bukan halaman Contact.
const norm = (h) => h;

/** Konteks satu pemakaian di posisi `pos` teks berkas: naik dari objek
 *  `{…}` terdalam ke induknya sampai ketemu href milik objek itu sendiri
 *  (bukan href anak-anaknya), lalu elemen `<Tag …>` .astro bila ada. */
function directText(text, open, close) {
  let out = '';
  let d = 0;
  for (let k = open + 1; k < close; k++) {
    const c = text[k];
    if (c === '{' || c === '[') d++;
    else if (c === '}' || c === ']') d--;
    else if (d === 0) out += c;
  }
  return out;
}
function enclosingOpen(text, pos) {
  let d = 0;
  for (let k = pos - 1; k >= 0; k--) {
    const c = text[k];
    if (c === '}' || c === ']') d++;
    else if (c === '{' || c === '[') {
      if (d === 0 && c === '{') return k;
      if (d > 0) d--;
    }
  }
  return -1;
}
function matchClose(text, open) {
  let d = 0;
  for (let k = open; k < text.length; k++) {
    const c = text[k];
    if (c === '{' || c === '[') d++;
    else if (c === '}' || c === ']') {
      d--;
      if (d === 0) return k;
    }
  }
  return text.length;
}
const hrefIn = (t) => t.match(/href(?:\s*:\s*|=)['"`]([^'"`$]+)['"`]/)?.[1];
const titleIn = (t) => t.match(/\b(?:title|label|name)(?:\s*:\s*\[?\s*|=)['"]([^'"]+)['"]/)?.[1];

function contextAt(text, pos, file) {
  let href;
  let title;
  let quote;
  let anchor;
  let prop;
  let full = '';
  let k = pos;
  for (let lvl = 0; lvl < 5; lvl++) {
    const open = enclosingOpen(text, k);
    if (open < 0) break;
    // `={` = ekspresi atribut .astro, bukan objek: berhenti, baca elemennya.
    if (/\w=$/.test(text.slice(Math.max(0, open - 3), open))) break;
    const direct = directText(text, open, matchClose(text, open));
    if (lvl === 0) {
      full = text.slice(open, matchClose(text, open));
      prop = text.slice(Math.max(0, open - 40), open).match(/(\w+)\s*:\s*$/)?.[1];
      anchor = direct.match(/\bid\s*:\s*'([\w-]+)'/)?.[1];
      if (/\btext\s*:/.test(direct) && /_QUOTE\b[^=]*=\s*$/.test(text.slice(Math.max(0, open - 60), open))) quote = true;
    }
    href = hrefIn(direct);
    title ??= titleIn(direct);
    if (href || quote) break;
    k = open;
  }
  if (!href && file.endsWith('.astro')) {
    // Elemen komponen yang memuat posisi ini.
    const lt = text.lastIndexOf('\n  <', pos);
    const tagStart = text.slice(0, pos).search(/<[A-Z][\w]*(?![\s\S]*<[A-Z])/);
    if (tagStart >= 0) {
      const end = text.indexOf('/>', pos);
      const el = text.slice(tagStart, end < 0 ? pos + 400 : end);
      href = hrefIn(el.replace(/\{[^}]*\}/g, ''));
      title ??= titleIn(el);
      const qv = el.startsWith('<QuoteSplit') ? el.match(/text=\{(\w+)\.text\}/)?.[1] : undefined;
      if (qv) return { ctx: `kutipan ${qv}`, how: `kutipan ${qv}`, lineNo: text.slice(0, pos).split('\n').length };
    }
    void lt;
  }
  const lineNo = text.slice(0, pos).split('\n').length;
  const before = text.slice(0, pos).split('\n');
  let owner;
  for (let j = before.length - 1; j >= 0; j--) {
    const m = before[j].match(/^(?:export )?const (\w+)/);
    if (m) {
      owner = m[1];
      break;
    }
  }
  /* Slide hero beranda (pemilik, 18 Nov 2026): fotonya = foto halaman yang
     ditautnya, jadi konteksnya jalur tujuan (href) seperti kartu lain. */
  if (owner === 'HERO_SLIDES' && !href) {
    const t = titleIn(full) ?? title;
    return { ctx: `hero beranda · ${t}`, how: `hero ${t}`, lineNo };
  }
  if (quote && owner) return { ctx: `kutipan ${owner}`, how: `kutipan ${owner}`, lineNo };
  if (owner === 'FAMILY_IMAGE' && prop) return { ctx: `/ingredients/catalog/?family=${prop}`, how: `keluarga ${prop}`, lineNo };
  if (OWNER_CTX[owner]) return { ctx: OWNER_CTX[owner], how: `blok ${owner}`, lineNo };
  /* Produk lini Fisheries / Polymers (27 Nov 2026): kategori adalah
     satuannya (tanpa kode produk), jadi foto produk dan foto wakil kategori
     berkonteks kategori itu: /…/products/#<kategori>. Tile beranda dan kartu
     halaman lini yang menaut ke jangkar itu memakai salah satu foto ini. */
  if (LINE_FILES[rel(file)]) {
    const cat = owner?.endsWith('_CATEGORIES') ? full.match(/\bkey\s*:\s*'([\w-]+)'/)?.[1] : full.match(/\bcategory\s*:\s*'([\w-]+)'/)?.[1];
    if (cat) return { ctx: `${LINE_FILES[rel(file)]}#${cat}`, how: `${owner?.endsWith('_CATEGORIES') ? 'kategori' : 'produk'} ${title ?? cat}`, lineNo };
  }
  if (anchor && rel(file) === 'src/data/pages/perfumery.ts') return { ctx: `/perfumery/#${anchor}`, how: `bagian ${title ?? anchor}`, lineNo };
  if (href) return { ctx: norm(href), how: `tautan ${href}`, lineNo };
  if (owner && (/_INTRO$/.test(owner) || owner === 'intro') && introPage[owner]) return { ctx: introPage[owner], how: `banner ${owner}`, lineNo };
  if (owner && /_INTRO$/.test(owner)) return { ctx: `intro:${owner}`, how: `banner ${owner} (halaman diparkir)`, lineNo };
  const where = rel(file).startsWith('src/pages/') ? pagePath(file) : rel(file);
  const name = title ?? owner ?? `baris ${lineNo}`;
  return { ctx: `blok ${where} · ${name}`, how: `blok ${name}`, lineNo };
}

const uses = Object.fromEntries(Object.keys(keys).map((k) => [k, []]));
const keyRe = new RegExp(`['"](${Object.keys(keys).join('|')})['"]`, 'g');
for (const f of files) {
  const text = readFileSync(f, 'utf8');
  for (const m of text.matchAll(keyRe)) {
    if (IGNORE.some((re) => re.test(rel(f)))) continue;
    const lineStart = text.lastIndexOf('\n', m.index) + 1;
    if (/^\s*(\*|\/\/|\/\*)/.test(text.slice(lineStart, m.index))) continue;
    const { ctx, how, lineNo } = contextAt(text, m.index, f);
    uses[m[1]].push({ at: `${rel(f)}:${lineNo}`, ctx, how });
  }
}

// Foto bahan dari master database.
const data = JSON.parse(readFileSync(join(SRC, 'data/catalog-data.json'), 'utf8'));
for (const ing of data.ingredients) {
  if (ing.image && uses[ing.image]) uses[ing.image].push({ at: 'catalog-data.json', ctx: `/ingredients/catalog/${ing.slug}/`, how: `bahan ${ing.name}` });
}

/* ── Ukuran (orientasi), dibaca dari kepala JPEG/PNG ─────────────────── */
function size(buf) {
  if (buf[0] === 0x89 && buf[1] === 0x50) return { w: buf.readUInt32BE(16), h: buf.readUInt32BE(20) };
  let o = 2;
  while (o < buf.length) {
    if (buf[o] !== 0xff) return null;
    const mk = buf[o + 1];
    const len = buf.readUInt16BE(o + 2);
    if (mk >= 0xc0 && mk <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(mk)) return { h: buf.readUInt16BE(o + 5), w: buf.readUInt16BE(o + 7) };
    o += 2 + len;
  }
  return null;
}
const dims = {};
for (const [k, f] of Object.entries(keys)) {
  try {
    dims[k] = size(readFileSync(join(SRC, 'assets/images', f)));
  } catch {
    dims[k] = null;
  }
}
const orient = (d) => (!d ? '?' : d.w / d.h > 1.15 ? 'mendatar' : d.h / d.w > 1.15 ? 'tegak' : 'persegi');

/* ── Laporan ─────────────────────────────────────────────────────────── */
// Kunci berbeda yang menunjuk berkas sama = satu foto.
const sameFile = (k) => Object.keys(keys).filter((o) => keys[o] === keys[k]);
const allUses = (k) => sameFile(k).flatMap((o) => uses[o]);
// Banner halaman yang diparkir (intro:…) tidak terbit; tidak dihitung.
const ctxs = (k) => [...new Set(allUses(k).map((u) => u.ctx).filter((c) => !c.startsWith('intro:')))];
const bad = Object.keys(keys).filter((k) => ctxs(k).length > 1 && !ALLOW[k] && sameFile(k)[0] === k);
const unused = Object.keys(keys).filter((k) => allUses(k).length === 0);

let md = `# Daftar foto situs\n\nDibuat otomatis oleh \`node tools/photo-usage.mjs\` (juga jalan saat \`npm run build\`). Jangan disunting tangan.\n\n`;
md += `Aturan (pemilik, 15 Nov 2026): satu foto = satu konteks. Foto yang sama boleh muncul di beberapa tempat hanya bila semuanya menunjuk hal yang sama (banner halaman, panel menu, kartu dan Explore More ke halaman itu; foto bahan di katalog dan halaman bahannya). Sebelum memakai foto untuk naskah, menu atau halaman baru, cari kuncinya di sini: kalau sudah punya rumah lain, pilih foto lain atau unduh yang baru.\n\n`;
md += bad.length ? `## Pelanggaran (${bad.length})\n\n${bad.map((k) => `- \`${k}\`: ${ctxs(k).map((c) => `\`${c}\``).join(', ')}`).join('\n')}\n\n` : `## Pelanggaran\n\nTidak ada.\n\n`;
md += `## Foto per rumah\n\n| Foto | Isi foto | Orientasi | Rumah (konteks) | Dipakai di |\n| --- | --- | --- | --- | --- |\n`;
for (const k of Object.keys(keys).sort()) {
  if (!uses[k].length) continue;
  const at = uses[k].map((u) => `${u.at} (${u.how})`).join('<br>');
  md += `| \`${k}\` | ${notes[k] ?? ''} | ${orient(dims[k])} | ${ctxs(k).map((c) => `\`${c}\``).join('<br>')} | ${at} |\n`;
}
md += `\n## Belum dipakai (bebas untuk konteks baru)\n\n${unused.map((k) => `- \`${k}\` · ${orient(dims[k])} · ${notes[k] ?? ''}`).join('\n') || 'Tidak ada.'}\n`;
writeFileSync(join(ROOT, 'PHOTOS.md'), md);

if (bad.length) {
  console.error(`FOTO | ${bad.length} foto dipakai di lebih dari satu konteks (lihat PHOTOS.md):`);
  for (const k of bad) console.error(`  ${k}: ${ctxs(k).join(' | ')}`);
  if (!process.argv.includes('--report')) process.exit(1);
} else {
  console.log(`FOTO | aman: ${Object.keys(keys).length - unused.length} foto terpakai, tiap foto satu konteks. PHOTOS.md diperbarui.`);
}
