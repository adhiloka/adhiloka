import type { ImageKey } from './images';
import type { BusinessKey } from './businesses';
import { SEAFOOD_CATEGORIES, SEAFOOD_ITEMS } from './seafood';
import { PACKAGING_CATEGORIES, PACKAGING_ITEMS } from './packaging';

/* Katalog lini Marine Delicacies dan Plastics (dulu Fisheries dan Polymers) (pemilik, 27 Nov 2026: "buat seperti
 * katalog Fragrance"). Bentuknya sama dengan katalog bahan: satu ITEM yang
 * dipahami orang awam (Grouper, Carrier Bags) berisi beberapa PRODUK berkode
 * 6 digit (jenis, bentuk, bahan, ukuran). Katalog tinggal di halaman lini
 * (#catalog); item punya halaman sendiri, tiap kode punya halaman spesifikasi.
 * Kode: kepala 1, lihat catalog/Product code register.md. */

export type LineKey = Exclude<BusinessKey, 'naturals'>;

/** `image`: foto salah satu item kategori ini yang mewakilinya (tile beranda). Kosong = item pertama. */
export type LineCategory = { key: string; label: string; body: string; image?: ImageKey };

export type LineProduct = {
  code: string;
  name: string;
  /** Bentuk atau bahan, tampil di daftar Products halaman item. */
  type: string;
  spec: [string, string][];
};

export type LineItem = {
  line: LineKey;
  slug: string;
  name: string;
  /** Nama dagang Indonesia. */
  local: string;
  /** Nama ilmiah (ikan) atau bahan (plastik). Kosong = tidak dicetak. */
  latin?: string;
  category: string;
  image: ImageKey;
  alt: string;
  /** Satu-dua kalimat untuk kartu dan kepala halaman. */
  note: string;
  /** Satu baris di kartu: jenis atau bahan yang ada. */
  range: string;
  usage: string;
  handling: [string, string][];
  products: LineProduct[];
};

export const LINE_CATALOG = {
  seafood: { base: '/marine-delicacies/', categories: SEAFOOD_CATEGORIES, items: SEAFOOD_ITEMS },
  packaging: { base: '/plastics/', categories: PACKAGING_CATEGORIES, items: PACKAGING_ITEMS },
} as const;

export const lineItemHref = (i: LineItem) => `${LINE_CATALOG[i.line].base}${i.slug}/`;
export const lineProductHref = (i: LineItem, p: LineProduct) => `${lineItemHref(i)}${p.code}/`;
/** Tab kategori di katalog halaman lini. */
export const lineCategoryHref = (line: LineKey, cat: string) => `${LINE_CATALOG[line].base}?cat=${cat}#catalog`;
export const categoryLabel = (line: LineKey, cat: string) => LINE_CATALOG[line].categories.find((c) => c.key === cat)?.label ?? cat;
export const categoryImage = (line: LineKey, cat: string): ImageKey =>
  LINE_CATALOG[line].categories.find((c) => c.key === cat)?.image ?? LINE_CATALOG[line].items.find((i) => i.category === cat)!.image;
export const lineItemsOf = (line: LineKey, cat: string) => (LINE_CATALOG[line].items as readonly LineItem[]).filter((i) => i.category === cat);
/** Semua kode lini, untuk formulir kontak dan pencarian. */
export const LINE_PRODUCTS = ([...SEAFOOD_ITEMS, ...PACKAGING_ITEMS] as LineItem[]).flatMap((i) => i.products.map((p) => ({ item: i, product: p })));

/** Nama lokal item, hanya bila beda dari namanya (Lobster / Lobster tidak dicetak dua kali). */
export const localOf = (i: { name: string; local?: string }) =>
  i.local && i.local.toLowerCase() !== i.name.toLowerCase() ? i.local : undefined;
