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
  'Resins, leaves, roots and spices have shaped perfumery for generations. We follow each one from the plant to the finished material, so that what reaches the perfumer keeps the character of where it grew. Our palette serves fine fragrance, personal care and home care.',
];

/* Lima halaman anak, urutan sama dengan menu (NAV di site.ts). Dipakai
   Discover More di hub dan Explore More di kaki tiap halaman anak. */
export const INGREDIENTS_CARDS: LinkCard[] = [
  { title: 'Natural Ingredients', href: '/ingredients/natural-ingredients/', image: 'spice-market-trays' },
  { title: 'Ingredient Catalog', href: '/ingredients/catalog/', image: 'spices-spoons' },
  { title: 'Ingredients Map', href: '/ingredients/map/', image: 'jungle-stream' },
  { title: 'Technology', href: '/ingredients/technology/', image: 'copper-still' },
  { title: 'Working With Us', href: '/ingredients/working-with-us/', image: 'cargo-ship' },
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
  Resin: 'Warm, balsamic materials tapped from the bark of living trees. Resins bring depth, sweetness and lasting power to amber, oriental and gourmand accords.',
  Root: 'Earthy, woody materials from roots that are dried and rested before processing. They give structure and elegance to the base of a fragrance.',
  Leaf: 'Green, deep and lasting materials distilled from dried leaves. They anchor chypre and woody compositions and grow richer as they dry down.',
  Spice: 'Warm, vivid materials from buds, seeds, barks, arils and rhizomes. Spices add brightness to an opening and warmth to the heart of a fragrance.',
  Wood: 'Barks, rhizomes and woody materials with a creamy or earthy depth. They give body and softness to the heart and base of a composition.',
  Flower: 'Floral oils distilled from fresh flowers and fragrant grasses. They bring radiance, creaminess and a natural floral heart.',
  Citrus: 'Fresh, zesty materials from leaves and grasses rich in citral and citronellal. They lift the opening and bring a clean, bright energy.',
  Herbal: 'Green, aromatic and camphoraceous materials from leaves and roots. They add freshness and a natural herbal character to fragrance and care products.',
  Gourmand: 'Vanilla, cocoa, coffee and tamarind with a creamy, roasted or tangy character. They bring natural depth to gourmand fragrances and flavours.',
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
  image: 'spice-market-trays',
  caption: 'cloves sorted on a drying rack',
};

export const NATURAL_CATALOG = {
  title: 'Ingredient Catalog',
  text: 'Every ingredient in our range, with its botanical name, olfactive profile and place in perfumery. Samples and specifications can be requested from each page.',
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
    'The Adhiloka ingredients catalog: essential oils, resinoids, absolutes, CO2 extracts and extracts from benzoin, patchouli, vetiver, clove, nutmeg, cinnamon and other Indonesian botanicals, each with its product code and typical specification.',
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
 * Tiap teknik: nama + satu paragraf tentang hasil dan gunanya (pemilik,
 * 13 Nov 2026: keterangan terlalu singkat). Cara kerja alatnya tetap TIDAK
 * diterangkan (koreksi pemilik 12 Nov). */

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
  {
    name: 'Steam Distillation',
    note: 'The classic route to essential oils from leaves, roots, woods, barks and spices. Each material is distilled on its own terms, for oils that are clear, true to the plant and the backbone of most natural palettes.',
  },
  {
    name: 'Solvent Extraction',
    note: 'Flowers and resins give their scent more fully to extraction than to steam. The concretes, absolutes and resinoids that result are rich and deep, and give a fragrance warmth and body.',
  },
  {
    name: 'Supercritical CO₂ Extraction',
    note: 'Carbon dioxide at low temperature gives extracts that stay remarkably close to the raw material. Delicate notes are kept intact and no solvent remains, a natural choice for clean formulas.',
  },
  {
    name: 'Molecular Distillation',
    note: 'A gentle refinement that lightens colour and removes unwanted facets from oils and absolutes. The material keeps its character and becomes easier to use in fine fragrance and delicate bases.',
  },
  {
    name: 'Fractional Distillation',
    note: 'An essential oil is a blend of many molecules. Fractionation lets us offer a single facet, a heart or a natural isolate on its own, for greater precision in the formula.',
  },
  {
    name: 'Cold Expression',
    note: 'Citrus oils are pressed from the peel without heat, which keeps their bright, sparkling freshness. They give the lift and radiance that open so many fragrances, from colognes to modern florals.',
  },
  {
    name: 'Infusion & Tincture',
    note: 'Some naturals are best steeped slowly in alcohol. Tinctures and infusions give soft, rounded materials with a texture of their own, prized in fine fragrance for their warmth and natural feel.',
  },
  {
    name: 'Co-Distillation',
    note: 'Two materials distilled together become one ingredient with a character of its own: a natural accord that neither could give alone.',
  },
  {
    name: 'Pyrogenation',
    note: 'Woods and resins heated in a closed vessel release dark, smoky and leathery notes. Used in small touches, these materials add depth and a tactile warmth to woody, amber and leather accords.',
  },
];

export const TECHNOLOGY_SCIENCE: Route[] = [
  {
    name: 'Headspace Analysis',
    note: 'The scent of a living flower is not the same as that of its oil. Headspace analysis captures the air around the plant, so perfumers can recreate nature as it is, without harvesting a thing.',
  },
  {
    name: 'Biotechnology',
    note: 'Fermentation turns renewable feedstocks into fragrance ingredients that nature makes only in tiny amounts. It opens new notes to the perfumer and eases the pressure on scarce natural resources.',
  },
  {
    name: 'Green Chemistry',
    note: 'Molecules and processes designed around renewable carbon, less energy and fewer steps. The ingredients that result are made to biodegrade, and still perform as they should in the formula.',
  },
  {
    name: 'Upcycling',
    note: 'By-products of the food and spice trades still hold valuable scent. Recovering it gives these materials a second life and adds new naturals to the palette with a lighter footprint.',
  },
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
    body: 'Every batch is checked against its specification before it leaves us, by analysis and by nose. Each delivery matches the one before, and travels with the documents its market asks for.',
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
  {
    n: '01',
    title: 'Enquiry',
    body: 'It starts with the ingredient and what it is for. The application, the market and the quantity in mind point us to the right material.',
  },
  {
    n: '02',
    title: 'Sample',
    body: 'We send a sample to try in your own formula. Your perfumers can judge the material before any commitment is made.',
  },
  {
    n: '03',
    title: 'Quotation',
    body: 'Once the sample is approved, we quote for the quantity you need. Price, packaging and timing come in one document.',
  },
  {
    n: '04',
    title: 'Order',
    body: 'Specification, quantity, documents and delivery terms are agreed together. We confirm them in writing and begin.',
  },
  {
    n: '05',
    title: 'Preparation',
    body: 'Your order is drawn from a batch that has passed evaluation and packed to suit the material. Its documents are prepared alongside.',
  },
  {
    n: '06',
    title: 'Delivery',
    body: 'We ship on the agreed terms and follow the goods until they arrive. After that, we stay in touch for the next order.',
  },
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
  {
    title: 'Packaging',
    body: 'From small containers for evaluation to drums for production, each material is packed to suit its nature. Every pack is labelled for safe handling and transport.',
  },
  {
    title: 'Quantities',
    body: 'We supply from sample sizes to regular production volumes. The minimum for each material is confirmed with the quotation.',
  },
  {
    title: 'Lead Time',
    body: 'Lead time depends on the material, the season and the quantity. We confirm it with each quotation and keep you informed until the goods are on their way.',
  },
  {
    title: 'Shipping',
    body: 'Terms and routes are agreed with each order. We prepare the shipment for its destination and follow it until it reaches you.',
  },
];
