import type { ImageMetadata } from 'astro';
import manifest from './downloads.json';
import { MATERIALS } from './materials';

/* Berkas PDF yang bisa diunduh: satu katalog untuk semua bahan. Berkasnya
 * dibangun `npm run pdf` (tools/pdf/) dari materials.ts dan ditaruh di
 * public/downloads/; manifes downloads.json mencatat tautan, jumlah halaman
 * dan ukurannya, sampul kartunya di src/assets/downloads/.
 *
 * Lembar spesifikasi per bahan dilepas 10 Nov 2026: nilai spesifikasinya
 * belum ada, jadi halaman bahan menawarkan "Request the Specification" lewat
 * formulir kontak. `specDownload` tetap ada dan hidup lagi begitu
 * tools/pdf/build.mjs kembali mengisi `specs` di manifes. */

export type Download = {
  kind: string;
  title: string;
  sub: string;
  href: string;
  /** Nama berkas saat disimpan pengunjung. */
  filename: string;
  pages: number;
  bytes: number;
  thumb: ImageMetadata;
};

const thumbs = import.meta.glob<{ default: ImageMetadata }>('../assets/downloads/*.jpg', { eager: true });
const thumb = (name: string) => {
  const t = thumbs[`../assets/downloads/${name}.jpg`];
  if (!t) throw new Error(`Sampul ${name}.jpg belum ada; jalankan npm run pdf`);
  return t.default;
};

export const formatSize = (bytes: number) =>
  bytes >= 1024 * 1024 ? `${(bytes / 1024 / 1024).toFixed(1)} MB` : `${Math.round(bytes / 1024)} KB`;

export const downloadMeta = (d: Download) => `PDF · ${d.pages} pages · ${formatSize(d.bytes)}`;

export const CATALOG_DOWNLOAD: Download = {
  kind: 'Ingredients Catalog',
  title: `Ingredients Catalog ${manifest.edition}`,
  sub: 'Our range of natural ingredients from Indonesia',
  href: manifest.catalog.href,
  filename: `Adhiloka-Ingredients-Catalog-${manifest.edition}.pdf`,
  pages: manifest.catalog.pages,
  bytes: manifest.catalog.bytes,
  thumb: thumb(manifest.catalog.thumb),
};

type SpecEntry = { href: string; docNo: string; thumb: string; pages: number; bytes: number };
const specs = manifest.specs as Record<string, SpecEntry>;

export function specDownload(slug: string): Download | undefined {
  const s = specs[slug];
  const m = MATERIALS.find((x) => x.slug === slug);
  if (!s || !m) return undefined;
  return {
    kind: 'Product Specification',
    title: m.name,
    sub: `${s.docNo} · Rev. ${manifest.revision} · ${manifest.issued}`,
    href: s.href,
    filename: `Adhiloka-${s.docNo}-${m.name.replace(/[^A-Za-z]+/g, '-')}.pdf`,
    pages: s.pages,
    bytes: s.bytes,
    thumb: thumb(s.thumb),
  };
}
