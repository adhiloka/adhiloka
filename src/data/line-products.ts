import type { ImageKey } from './images';
import type { BusinessKey } from './businesses';
import { SEAFOOD_CATEGORIES, SEAFOOD_ITEMS } from './seafood';
import { PACKAGING_CATEGORIES, PACKAGING_ITEMS, PACKAGING_COMPARE } from './packaging';

/* Katalog lini Fine Seafood dan Packaging & Plastic Solutions.
 * 28 Nov 2026 (pemilik): tanpa kode produk, bentuknya seperti Ingredient
 * Catalog. Satu ITEM = satu kartu dan satu halaman (seafood: satu spesies;
 * plastik: satu jenis kemasan), tidak ada lagi halaman per kode. Tab katalog =
 * kategori (seafood: kelompok spesies, Lobster, Sea Cucumber…). Plastik punya
 * tabel perbandingan (PACKAGING_COMPARE). */

export type LineKey = Exclude<BusinessKey, 'naturals'>;

/** `image`: foto salah satu item kategori ini yang mewakilinya (tile beranda). Kosong = item pertama. */
export type LineCategory = { key: string; label: string; body: string; image?: ImageKey };

export type LineItem = {
  line: LineKey;
  slug: string;
  name: string;
  /** Nama dagang Indonesia. */
  local?: string;
  /** Nama ilmiah (seafood). Kosong = tidak dicetak. */
  latin?: string;
  category: string;
  image: ImageKey;
  alt: string;
  /** Satu-dua kalimat untuk kartu dan kepala halaman. */
  note: string;
  usage: string;
  /** Tabel Specification di halaman item. */
  spec: [string, string][];
  handling: [string, string][];
};

export const LINE_CATALOG = {
  seafood: { base: '/fine-seafood/', categories: SEAFOOD_CATEGORIES, items: SEAFOOD_ITEMS, compare: null },
  packaging: { base: '/packaging-plastic-solutions/', categories: PACKAGING_CATEGORIES, items: PACKAGING_ITEMS, compare: PACKAGING_COMPARE },
} as const;

export const lineItemHref = (i: LineItem) => `${LINE_CATALOG[i.line].base}${i.slug}/`;
/** Tab kategori di katalog halaman lini. */
export const lineCategoryHref = (line: LineKey, cat: string) => `${LINE_CATALOG[line].base}?cat=${cat}#catalog`;
export const categoryLabel = (line: LineKey, cat: string) => LINE_CATALOG[line].categories.find((c) => c.key === cat)?.label ?? cat;
export const categoryImage = (line: LineKey, cat: string): ImageKey =>
  LINE_CATALOG[line].categories.find((c) => c.key === cat)?.image ?? LINE_CATALOG[line].items.find((i) => i.category === cat)!.image;
export const lineItemsOf = (line: LineKey, cat: string) => (LINE_CATALOG[line].items as readonly LineItem[]).filter((i) => i.category === cat);
/** Semua item lini, untuk formulir kontak dan pencarian. */
export const LINE_ITEMS = [...SEAFOOD_ITEMS, ...PACKAGING_ITEMS] as LineItem[];
export const specOf = (i: LineItem, key: string) => i.spec.find(([k]) => k === key)?.[1];

/** Nama lokal item, hanya bila beda dari namanya (Lobster / Lobster tidak dicetak dua kali). */
export const localOf = (i: { name: string; local?: string }) =>
  i.local && i.local.toLowerCase() !== i.name.toLowerCase() ? i.local : undefined;
