import type { ImageKey } from './images';
import type { Region } from './regions';
import data from './catalog-data.json';

export type Family = 'Resin' | 'Root' | 'Wood' | 'Leaf' | 'Spice' | 'Flower' | 'Citrus' | 'Herbal' | 'Gourmand';

export type Material = {
  slug: string;
  name: string;
  latin: string;
  family: Family;
  /** Negara asal; sengaja tidak lebih rinci dari ini. */
  origin: string;
  /** Wilayah penghasil, hanya untuk Ingredients Map (pengecualian aturan
   *  "asal ditulis Indonesia saja", keputusan pemilik 13 Nov 2026). Isinya
   *  sebaran tanaman yang umum diketahui, bukan lokasi pemasok. */
  regions: Region[];
  /** Bagian tanaman yang diolah. */
  part: string;
  /** Tiga nota aroma, dipisah " · ". */
  notes: string;
  /** Deskripsi olfaktif singkat; juga dipakai sebagai meta description. */
  note: string;
  /** "Perfumery usage". */
  usage: string;
  /** "Did you know?": satu fakta umum tentang tanamannya. */
  know: string;
  /** Keterangan isi foto yang sebenarnya, untuk alt. */
  shot: string;
  image?: ImageKey;
};

/* Sejak 13 Nov 2026 isi katalog datang dari master database produk
 * (catalog/Product master database.xlsx di vault, sheet Ingredients dan
 * Products) lewat `py scripts/export_products_site.py`, yang menulis
 * catalog-data.json. Jangan menyunting JSON-nya langsung: ubah Excel, lalu
 * ekspor ulang. Enam bahan inti (keputusan pemilik, 2 Okt 2026) tetap dengan
 * naskah 10 Nov 2026; bahan lain ditambahkan dari daftar produk natural yang
 * dibandingkan dengan Van Aroma (lihat decisions/2026-11-13 Natural range from
 * Van Aroma benchmark). Angka spesifikasi adalah nilai tipikal mutu itu, bukan
 * data lot dan bukan sertifikat. Tiap bahan punya halaman sendiri di
 * /ingredients/catalog/<slug>/, tiap produk di /ingredients/catalog/<slug>/<produk>/. */
export const MATERIALS: Material[] = data.ingredients.map((i) => ({
  slug: i.slug,
  name: i.name,
  latin: i.latin,
  family: i.family as Family,
  regions: i.regions as Region[],
  origin: 'Indonesia',
  part: i.part,
  notes: i.notes,
  note: i.note,
  usage: i.usage,
  know: i.know,
  shot: i.shot,
  image: i.image as ImageKey,
}));

/** Satu kode produk (6 digit, aturan Product code register). */
export type Product = {
  code: string;
  slug: string;
  name: string;
  ingredient: string;
  type: string;
  grade: string;
  process: string;
  solvent: string;
  appearance: string;
  colour: string;
  odour: string;
  notePos: string;
  sg: string;
  ri: string;
  rot: string;
  acid: string;
  constituents: string;
  other: string;
  solubility: string;
  flash: string;
  shelf: string;
  storage: string;
  origin: string;
  inci: string;
  cas: string;
  ec: string;
  fema: string;
  hs: string;
  apps: string;
  packaging: string;
  part: string;
};

export const PRODUCTS: Product[] = data.products as Product[];

/** Urutan tampil jenis produk (facet "Ingredient type"). */
export const PRODUCT_TYPES = [
  'Essential oil',
  'Rectified essential oil',
  'Molecular distilled oil',
  'Heart fraction',
  'Terpene fraction',
  'CO2 extract',
  'Absolute',
  'Resinoid',
  'Oleoresin',
  'Extract',
  'Liquid extract',
  'Dried spice',
];

export const productsOf = (slug: string) => PRODUCTS.filter((p) => p.ingredient === slug);
export const materialOf = (p: Product) => MATERIALS.find((m) => m.slug === p.ingredient)!;
export const productHref = (p: Product) => `/ingredients/catalog/${p.ingredient}/${p.slug}/`;

export const materialHref = (slug: string) => `/ingredients/catalog/${slug}/`;

export const FAMILY_FILTERS: { value: 'All' | Family; label: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'Resin', label: 'Resins' },
  { value: 'Root', label: 'Roots' },
  { value: 'Leaf', label: 'Leaf' },
  { value: 'Wood', label: 'Woods' },
  { value: 'Spice', label: 'Spices' },
  { value: 'Flower', label: 'Flowers' },
  { value: 'Citrus', label: 'Citrus' },
  { value: 'Herbal', label: 'Herbal' },
  { value: 'Gourmand', label: 'Gourmand' },
];

/** Warna kepala halaman bahan per keluarga (hero berwarna ala halaman produk
 *  dsm-firmenich). Semuanya cukup gelap untuk teks putih (kontras ≥ 4,5). */
export const FAMILY_COLOR: Record<Family, string> = {
  Resin: '#8a4f06',
  Root: '#5c6d68',
  Wood: '#6b4a2b',
  Leaf: '#026a5b',
  Spice: '#8f3b1b',
  Flower: '#7a4a5e',
  Citrus: '#6f6312',
  Herbal: '#3f5a2a',
  Gourmand: '#5b3a24',
};
