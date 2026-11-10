import type { ImageKey } from './images';

export type Family = 'Resin' | 'Root' | 'Wood' | 'Leaf' | 'Spice' | 'Flower' | 'Citrus';

export type Material = {
  slug: string;
  name: string;
  latin: string;
  family: Family;
  /** Negara asal; sengaja tidak lebih rinci dari ini. */
  origin: string;
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

/* Enam bahan inti (keputusan pemilik, 2 Okt 2026): benzoin dan nilam, plus
 * kayu manis Kerinci, akar wangi Jawa, cengkeh, pala & fuli.
 *
 * Sejak 10 Nov 2026 naskahnya asli tetapi sengaja umum (permintaan pemilik:
 * ringkas, tidak terlalu rinci): nama, nama botani, keluarga, bagian tanaman,
 * nota aroma dan pemakaian di parfum. Semuanya pengetahuan umum perfumery,
 * bukan data lot Adhiloka. Yang BELUM ditampilkan karena datanya belum ada:
 * bentuk yang dijual, grade, tabel spesifikasi, CAS, dokumen, MOQ, kemasan,
 * musim panen dan status regulasi. Halaman bahan mengarahkan semuanya ke
 * formulir kontak. Tambahkan field baru di sini bila datanya sudah pasti
 * (formulir data B2, D, K). Tiap bahan punya halaman sendiri di
 * /ingredients/catalog/<slug>/. */
export const MATERIALS: Material[] = [
  {
    slug: 'benzoin-sumatra',
    name: 'Benzoin Sumatra',
    latin: 'Styrax benzoin / S. paralleloneurum',
    family: 'Resin',
    origin: 'Indonesia',
    part: 'Resin',
    notes: 'Balsamic · Sweet · Warm',
    note: 'A warm, balsamic resin with sweet, vanilla-like and softly spicy facets.',
    usage: 'Brings warmth and roundness to amber, oriental and floral accords, and helps a fragrance last on the skin.',
    know: 'Benzoin is the resin of the Styrax tree, known in Indonesia as kemenyan.',
    shot: 'sorted benzoin tears',
    image: 'material-benzoin',
  },
  {
    slug: 'patchouli',
    name: 'Patchouli',
    latin: 'Pogostemon cablin',
    family: 'Leaf',
    origin: 'Indonesia',
    part: 'Leaves',
    notes: 'Earthy · Woody · Deep',
    note: 'Rich, earthy and woody, with a dark sweetness that deepens over time.',
    usage: 'A cornerstone of chypre, woody and oriental fragrances, valued for its depth and its staying power.',
    know: 'Patchouli leaves are dried before they are distilled, which helps release their scent.',
    shot: 'green leaves with dew',
    image: 'material-patchouli',
  },
  {
    slug: 'cinnamon-kerinci',
    name: 'Cinnamon Kerinci',
    latin: 'Cinnamomum burmannii',
    family: 'Spice',
    origin: 'Indonesia',
    part: 'Bark',
    notes: 'Spicy · Warm · Sweet',
    note: 'Warm, sweet and spicy, with all the comfort of cinnamon bark.',
    usage: 'Adds warmth and vibrancy to spicy, oriental and gourmand compositions.',
    know: 'This cinnamon takes its name from Kerinci, a highland region known for its cinnamon trees.',
    shot: 'rolled cinnamon bark',
    image: 'hero-benzoin-tears',
  },
  {
    slug: 'vetiver-java',
    name: 'Vetiver Java',
    latin: 'Chrysopogon zizanioides',
    family: 'Root',
    origin: 'Indonesia',
    part: 'Roots',
    notes: 'Woody · Earthy · Smoky',
    note: 'Deep, woody and earthy, with a dry, smoky edge.',
    usage: 'Gives structure and elegance to woody, aromatic and chypre fragrances.',
    know: 'Vetiver is a grass, but its scent lies in its roots.',
    shot: 'rhizomes, close',
    image: 'material-ginger',
  },
  {
    slug: 'clove',
    name: 'Clove',
    latin: 'Syzygium aromaticum',
    family: 'Spice',
    origin: 'Indonesia',
    part: 'Buds',
    notes: 'Spicy · Warm · Rich',
    note: 'Warm, rich and spicy, instantly recognisable.',
    usage: 'Brings a spicy accent to floral, oriental and woody accords, carnation notes above all.',
    know: 'Cloves are the dried flower buds of a tree native to the Maluku Islands of Indonesia.',
    shot: 'whole spices, close',
    image: 'material-nutmeg',
  },
  {
    slug: 'nutmeg-mace',
    name: 'Nutmeg & Mace',
    latin: 'Myristica fragrans',
    family: 'Spice',
    origin: 'Indonesia',
    part: 'Seed and aril',
    notes: 'Spicy · Fresh · Aromatic',
    note: 'A fresh, aromatic spice with a warm, gently sweet heart.',
    usage: 'Lifts the opening of woody, aromatic and spicy fragrances with a lively, natural warmth.',
    know: 'Nutmeg is the seed and mace the red aril around it: two spices from one fruit, native to the Banda Islands.',
    shot: 'whole nutmegs',
    image: 'material-nutmeg',
  },
];

export const materialHref = (slug: string) => `/ingredients/catalog/${slug}/`;

export const FAMILY_FILTERS: { value: 'All' | Family; label: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'Resin', label: 'Resins' },
  { value: 'Root', label: 'Roots' },
  { value: 'Leaf', label: 'Leaf' },
  { value: 'Spice', label: 'Spices' },
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
};
