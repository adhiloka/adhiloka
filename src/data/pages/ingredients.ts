import type { LinkCard, PageIntro, Passage } from './types';

/* Naskah Ingredients. Dipangkas 12 Nov 2026 (koreksi pemilik: terlalu banyak
 * menjelaskan, terlalu banyak tingkat judul). Aturannya di skill
 * adhiloka-voice, "Hierarki naskah situs": judul, lalu paling banyak satu
 * keterangan pendek yang tidak menjelaskan; tidak ada subjudul, tidak ada
 * kalimat pengantar di bawah judul, tidak ada ajakan "tell us…".
 * Tanpa angka, kapasitas, MOQ, lama kirim atau daftar dokumen "tersedia". */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const INGREDIENTS_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Natural ingredients for perfumery',
  metaTitle: 'Ingredients',
  lede: '',
  description:
    'Natural aromatic ingredients by Adhiloka: resins, leaves, roots and spices, selected and prepared for perfumery.',
  image: 'cloves-in-hand',
  caption: 'dried cloves in an open hand',
};

/* Juga dipakai katalog PDF (tools/pdf/build.mjs). */
export const INGREDIENTS_OPENING = [
  'Resins, leaves, roots and spices, followed from the plant to the finished material.',
];

/* Lima halaman anak, urutan sama dengan menu (NAV di site.ts). Dipakai
   Discover More di hub dan Explore More di kaki tiap halaman anak. */
export const INGREDIENTS_CARDS: LinkCard[] = [
  { title: 'Natural Ingredients', href: '/ingredients/natural-ingredients/', image: 'resin-pieces' },
  { title: 'Ingredient Catalog', href: '/ingredients/catalog/', image: 'nutmeg-mace' },
  { title: 'Ingredients Map', href: '/ingredients/map/', image: 'misty-hills' },
  { title: 'Technology', href: '/ingredients/technology/', image: 'copper-still' },
  { title: 'Working With Us', href: '/ingredients/working-with-us/', image: 'burlap-sacks' },
];

/* Lima langkah perjalanan bahan; hanya judul, tanpa keterangan. */
export type Milestone = { year: string; title: string };

export const INGREDIENTS_MILESTONES: Milestone[] = [
  { year: '01', title: 'Grown' },
  { year: '02', title: 'Gathered' },
  { year: '03', title: 'Processed' },
  { year: '04', title: 'Evaluated' },
  { year: '05', title: 'Delivered' },
];

export const INGREDIENTS_COLLECTIONS_BODY: Record<string, string> = {
  Resin: 'Warm and balsamic.',
  Root: 'Earthy and woody.',
  Leaf: 'Green, deep and lasting.',
  Spice: 'Warm and vivid.',
};

/* ── Natural Ingredients (13 Nov 2026) ───────────────────────────────── */
/* Pola halaman "Natural ingredients" Givaudan: pengantar singkat, keluarga
   bahan, lalu pintu ke katalog. Daftar produknya sendiri hanya di katalog. */

export const NATURAL_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Natural Ingredients',
  lede: '',
  description:
    'Natural ingredients by Adhiloka: essential oils, resinoids and extracts from resins, leaves, roots and spices.',
  image: 'cloves-sorting',
  caption: 'cloves sorted on a drying rack',
};

export const NATURAL_CATALOG = {
  title: 'Ingredient Catalog',
  text: 'Every ingredient, by family and by note.',
  cta: 'Explore the Catalog',
};

/* ── Ingredients Map (13 Nov 2026) ─────────────────────────────────── */

export const MAP_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ingredients Map',
  lede: '',
  description:
    'Where Adhiloka ingredients grow: resins, leaves, roots and spices from Sumatra, Java, Sulawesi and Maluku.',
  image: 'jungle-stream',
  caption: 'small stream in a sunlit forest',
};

export const INGREDIENTS_CLOSING = 'Natural ingredients for those who create with scent.';

/* ── Katalog ─────────────────────────────────────────────────────────── */

export const CATALOG_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ingredient Catalog',
  lede: '',
  description:
    'The Adhiloka ingredients catalog: benzoin, patchouli, cinnamon, vetiver, clove, nutmeg and mace.',
  caption: 'whole spices on wooden spoons',
  image: 'spices-spoons',
};

/* ── Technology ──────────────────────────────────────────────────────── */

/* Ditulis ulang 12 Nov 2026 (pemilik: teknologi kita lengkap, samakan dengan
 * rumah fragrance besar, jangan dikecilkan ke kondisi kita dan jangan
 * bersandar pada kata "Indonesia"). Daftar tekniknya mengikuti halaman
 * teknologi dsm-firmenich (extraction-technologies), ditambah yang disebut
 * Givaudan, IFF dan Robertet; rujukannya di market-research/references/
 * ("Web … - 2026"). Nama tekniknya nama umum industri; nama dagang dan
 * kalimat mereka tidak dipakai.
 *
 * Tiap teknik: nama + satu keterangan pendek tentang hasilnya. Cara kerja
 * alatnya TIDAK diterangkan (koreksi pemilik hari yang sama). */

export const TECHNOLOGY_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Technology',
  lede: '',
  description:
    'Adhiloka ingredient technology: steam distillation, solvent extraction, supercritical CO₂ extraction, molecular and fractional distillation, headspace analysis, biotechnology and green chemistry.',
  caption: 'copper distillation still',
  image: 'copper-still',
};

export type Route = { name: string; note: string };

/** Ekstraksi dan distilasi. Tiga yang pertama tampil di hub Ingredients,
 *  enam yang pertama jadi chip tile Technology di beranda. */
export const ROUTES: Route[] = [
  { name: 'Steam Distillation', note: 'Essential oils from leaves, roots, woods and spices.' },
  { name: 'Solvent Extraction', note: 'Concretes, absolutes and resinoids.' },
  { name: 'Supercritical CO₂ Extraction', note: 'Extracts close to the raw material.' },
  { name: 'Molecular Distillation', note: 'Clear, refined oils and absolutes.' },
  { name: 'Fractional Distillation', note: 'Fractions, hearts and isolates.' },
  { name: 'Cold Expression', note: 'Citrus oils, pressed without heat.' },
  { name: 'Infusion & Tincture', note: 'Naturals steeped in alcohol.' },
  { name: 'Co-Distillation', note: 'Two materials, one ingredient.' },
  { name: 'Pyrogenation', note: 'Smoky, leathery notes.' },
];

export const TECHNOLOGY_SCIENCE: Route[] = [
  { name: 'Headspace Analysis', note: 'The scent of the living plant.' },
  { name: 'Biotechnology', note: 'Ingredients from fermentation.' },
  { name: 'Green Chemistry', note: 'Renewable, biodegradable molecules.' },
  { name: 'Upcycling', note: 'By-products given a second life.' },
];

/* Jajaran produk: judul saja. (Pemilik, 12 Nov 2026: produk jauh lebih
   banyak daripada yang tampil di katalog situs.) */
export const TECHNOLOGY_RANGE: string[] = [
  'Essential Oils',
  'Absolutes',
  'Resinoids',
  'CO₂ Extracts',
  'Fractions & Isolates',
  'Specialty Bases',
];

export const TECHNOLOGY_PASSAGES: Passage[] = [
  {
    id: 'quality',
    title: 'Quality & Compliance',
    points: [
      'Gas chromatography and physical constants',
      'Olfactive evaluation of every batch',
      'Documentation for each market',
    ],
    cta: 'Working With Us',
    href: '/ingredients/working-with-us/',
    caption: 'flash point tester in a laboratory',
    image: 'lab-flash-point',
  },
];

/* ── Working With Us (dulu Ordering & Documents; nama diganti 13 Nov 2026) ── */

export const ORDERING_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Working With Us',
  metaTitle: 'Working With Us',
  lede: '',
  description:
    'How to order natural ingredients from Adhiloka: samples, quotations, documents and delivery.',
  image: 'cargo-ship',
  caption: 'container ship at sea',
};

export type OrderStep = { n: string; title: string; body: string };

/* Juga dipakai katalog PDF. */
export const ORDERING_STEPS: OrderStep[] = [
  { n: '01', title: 'Enquiry', body: 'Ingredient and intended use.' },
  { n: '02', title: 'Sample', body: 'For evaluation in your own work.' },
  { n: '03', title: 'Quotation', body: 'For the quantity you need.' },
  { n: '04', title: 'Order', body: 'Details agreed together.' },
  { n: '05', title: 'Preparation', body: 'Prepared and packed.' },
  { n: '06', title: 'Delivery', body: 'Shipped and followed until arrival.' },
];

/* Hanya untuk katalog PDF; di situs daftar dokumennya berdiri sendiri. */
export const ORDERING_DOCUMENTS_LEAD = 'Documents are confirmed with each order.';

/* Jenis dokumen yang biasa diminta pembeli. Sengaja TIDAK ditulis
   "tersedia": statusnya dikonfirmasi per pesanan (formulir data D2). */
export const ORDERING_DOCUMENTS: string[] = [
  'Product specification',
  'Certificate of Analysis',
  'Safety Data Sheet',
  'IFRA statement',
  'Allergen statement',
  'Certificate of Origin',
];

export const ORDERING_LOGISTICS: { title: string; body: string }[] = [
  { title: 'Packaging', body: 'To suit the material and the quantity.' },
  { title: 'Quantities', body: 'By ingredient.' },
  { title: 'Lead Time', body: 'Confirmed with each quotation.' },
  { title: 'Shipping', body: 'Agreed with each order.' },
];
