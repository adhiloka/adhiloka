import type { ImageKey } from './images';
import type { BusinessKey } from './businesses';
import { SEAFOOD_CATEGORIES, SEAFOOD_PRODUCTS } from './seafood';
import { PACKAGING_CATEGORIES, PACKAGING_PRODUCTS } from './packaging';

/* Produk lini Seafood dan Plastics & Packaging (situs grup, 26 Nov 2026).
 * Bentuknya lebih sederhana dari katalog bahan (materials.ts): satu produk =
 * satu halaman, dikelompokkan per kategori. Dipakai LineCatalog dan
 * LineProductPage. Tanpa kode produk. */

/** `image`: foto salah satu produk kategori ini yang mewakilinya (tile beranda, kartu halaman lini). Kosong = produk pertama. */
export type LineCategory = { key: string; label: string; body: string; image?: ImageKey };

export type LineProduct = {
  line: Exclude<BusinessKey, 'naturals'>;
  slug: string;
  name: string;
  /** Nama ilmiah (seafood) atau nama kimia (resin). Kosong = tidak dicetak. */
  latin?: string;
  category: string;
  image: ImageKey;
  alt: string;
  /** Satu-dua kalimat untuk kartu dan kepala halaman. */
  note: string;
  /** Baris spesifikasi [label, nilai]; baris pertama "Forms"/"Grades" tampil di kartu. */
  spec: [string, string][];
  handling: [string, string][];
  hs: string;
};

export const LINE_CATALOG = {
  seafood: { base: '/marine-products/products/', categories: SEAFOOD_CATEGORIES, products: SEAFOOD_PRODUCTS },
  packaging: { base: '/polymers/products/', categories: PACKAGING_CATEGORIES, products: PACKAGING_PRODUCTS },
} as const;

export const lineProductHref = (p: LineProduct) => `${LINE_CATALOG[p.line].base}${p.slug}/`;
/** Kategori = jangkar di halaman Products (27 Nov 2026: tanpa tab penyaring). */
export const lineCategoryHref = (line: LineProduct['line'], cat: string) => `${LINE_CATALOG[line].base}#${cat}`;
/** Foto kategori = foto produk pertama kategori itu (konteksnya kategori, lihat tools/photo-usage.mjs). */
export const categoryImage = (line: LineProduct['line'], cat: string): ImageKey =>
  LINE_CATALOG[line].categories.find((c) => c.key === cat)?.image ?? LINE_CATALOG[line].products.find((p) => p.category === cat)!.image;
export const categoryLabel = (line: LineProduct['line'], cat: string) =>
  LINE_CATALOG[line].categories.find((c) => c.key === cat)?.label ?? cat;
/** Ringkasan untuk kartu: nilai baris spesifikasi pertama. */
export const cardLine = (p: LineProduct) => p.spec[0]?.[1] ?? '';
