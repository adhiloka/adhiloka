import type { LinkCard, PageIntro, Passage } from './types';

/* Naskah Ingredients, ditulis 10 Nov 2026 (permintaan pemilik: ringkas,
 * bergaya situs rumah fragrance). Tanpa angka, kapasitas, nama alat, MOQ,
 * lama kirim atau daftar dokumen "tersedia"; semua itu menunggu formulir
 * data C dan D. Yang ditulis di sini berlaku umum dan tidak mengikat angka. */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const INGREDIENTS_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Natural ingredients from Indonesia',
  metaTitle: 'Ingredients',
  lede: 'Resins, leaves, roots and spices from Indonesia, selected and prepared for perfumery.',
  description:
    'Natural aromatic ingredients from Indonesia by Adhiloka: resins, leaves, roots and spices, selected and prepared for perfumery.',
  image: 'cloves-in-hand',
  caption: 'dried cloves in an open hand',
};

export const INGREDIENTS_OPENING = [
  'Indonesia is home to some of the best-loved materials in perfumery. Our range brings together resins, leaves, roots and spices, each with a character shaped by the place where it grows.',
  'We follow every ingredient from the plant to the finished material, so that what reaches the perfumer is true to its origin and ready to create with.',
];

export const INGREDIENTS_CARDS: LinkCard[] = [
  {
    title: 'Ingredients Catalog',
    body: 'Explore our range of natural ingredients, family by family.',
    href: '/ingredients/catalog/',
    image: 'nutmeg-mace',
  },
  {
    title: 'Technology',
    body: 'From steam distillation to biotechnology: how our ingredients are made.',
    href: '/ingredients/technology/',
    image: 'copper-still',
  },
  {
    title: 'Ordering & Documents',
    body: 'Samples, documents and how to order.',
    href: '/ingredients/ordering/',
    image: 'burlap-sacks',
  },
];

/* Urutan hub mengikuti halaman Ingredients dsm-firmenich (23 Okt 2026):
 * Discover more → tonggak → Technologies → Collections → unduhan katalog.
 * Tonggaknya bukan tahun (sejarah belum ada datanya) melainkan lima langkah
 * perjalanan bahan, dari tanaman sampai ke perfumer. */

export type Milestone = { year: string; title: string; body: string };

export const INGREDIENTS_MILESTONES: Milestone[] = [
  { year: '01', title: 'Grown', body: 'Each ingredient begins as a plant, in the soil and climate that suit it best.' },
  { year: '02', title: 'Gathered', body: 'It is harvested in its season, by people who know when the moment is right.' },
  { year: '03', title: 'Processed', body: 'It is distilled or extracted by the method that respects its character.' },
  { year: '04', title: 'Evaluated', body: 'It is smelled and checked before it leaves us.' },
  { year: '05', title: 'Delivered', body: 'It is packed with care and sent to those who create with scent.' },
];

export const INGREDIENTS_TECH_LEAD =
  'Each plant asks for its own method. We choose the one that keeps its character intact.';

export const INGREDIENTS_COLLECTIONS_BODY: Record<string, string> = {
  Resin: 'Warm, balsamic notes that bring depth and comfort to a fragrance.',
  Root: 'Earthy, woody notes that give a fragrance its foundation.',
  Leaf: 'Deep, green and woody notes with a lasting presence.',
  Spice: 'Warm, vivid notes that bring a fragrance to life.',
};

export const INGREDIENTS_DOWNLOAD_TEXT = 'Our range of natural ingredients, in one document.';

export const INGREDIENTS_CLOSING = 'Looking for a natural ingredient? Tell us what you have in mind.';

/* ── Katalog ─────────────────────────────────────────────────────────── */

export const CATALOG_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ingredients Catalog',
  lede: 'Our range of natural aromatic ingredients from Indonesia.',
  description:
    'The Adhiloka ingredients catalog: benzoin, patchouli, cinnamon, vetiver, clove, nutmeg and mace from Indonesia.',
  caption: 'whole spices on wooden spoons',
  image: 'spices-spoons',
};

/* ── Technology ──────────────────────────────────────────────────────── */

/* Ditulis ulang 12 Nov 2026 (pemilik: teknologi kita lengkap, samakan dengan
 * rumah fragrance besar, jangan dikecilkan ke kondisi kita dan jangan
 * bersandar pada kata "Indonesia"). Daftar tekniknya mengikuti halaman
 * teknologi dsm-firmenich (extraction-technologies), ditambah yang disebut
 * Givaudan, IFF dan Robertet; rujukannya di market-research/references/
 * ("Web … - 2026"). Nama tekniknya nama umum industri. Nama dagang milik
 * mereka (Firgood, Vulcain, Naturome, cleanRscent, LMR…) dan kalimatnya tidak
 * dipakai. Tetap tanpa angka, kapasitas, tahun, paten dan sertifikat. */

export const TECHNOLOGY_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Technology',
  lede: 'The techniques that turn natural materials into perfumery ingredients.',
  description:
    'Adhiloka ingredient technology: steam distillation, solvent extraction, supercritical CO₂ extraction, molecular and fractional distillation, headspace analysis, biotechnology and green chemistry.',
  caption: 'copper distillation still',
  image: 'copper-still',
};

export const TECHNOLOGY_OPENING = [
  'Every natural material holds more than one scent, and the technique decides which one reaches the perfumer. We bring traditional methods and advanced technology together and choose the process that suits each material.',
  'Distillation, extraction, fractionation and bioscience each reveal a different facet. Together they give perfumers and flavourists a palette that is pure, consistent and ready to create with.',
];

export type Route = { name: string; applies: string; body: string };

/** Ekstraksi dan distilasi. Tiga yang pertama tampil di hub Ingredients,
 *  enam yang pertama jadi chip tile Technology di beranda. */
export const ROUTES: Route[] = [
  {
    name: 'Steam Distillation',
    applies: 'Essential oils',
    body: 'Steam passes through leaves, roots, woods and spices and carries their aromatic molecules with it. Once cooled, the essential oil separates from the water.',
  },
  {
    name: 'Solvent Extraction',
    applies: 'Concretes, absolutes and resinoids',
    body: 'Flowers, resins and gums are washed with a solvent that is then removed, leaving a concrete or a resinoid. A further step in alcohol gives the absolute, rich and true to the plant.',
  },
  {
    name: 'Supercritical CO₂ Extraction',
    applies: 'CO₂ extracts',
    body: 'Carbon dioxide under pressure moves through the material like a gas and dissolves like a liquid. It works at low temperature and leaves no residue, for extracts very close to the raw material.',
  },
  {
    name: 'Molecular Distillation',
    applies: 'Refined oils and absolutes',
    body: 'Distillation under deep vacuum and at low temperature. It lifts colour and heavy fractions out of an oil or an absolute and leaves a clear, precise ingredient.',
  },
  {
    name: 'Fractional Distillation',
    applies: 'Fractions, hearts and isolates',
    body: 'An oil is separated into its fractions, so that the heart of a material can be kept, one facet lifted or a single molecule isolated.',
  },
  {
    name: 'Cold Expression',
    applies: 'Citrus oils',
    body: 'The peel of fresh citrus fruit is pressed without heat and releases an oil as bright as the fruit itself.',
  },
  {
    name: 'Infusion & Tincture',
    applies: 'Infusions and tinctures',
    body: 'Natural materials rest in alcohol, warm or cold, until the liquid takes on their scent. One of the oldest methods in perfumery, and still the right one for certain materials.',
  },
  {
    name: 'Co-Distillation',
    applies: 'Co-extracts',
    body: 'Two materials are distilled or extracted together and yield a single ingredient that neither could give alone.',
  },
  {
    name: 'Pyrogenation',
    applies: 'Smoky and leathery notes',
    body: 'Oils and resinoids are heated under close control until their character changes, giving the smoky, leathery notes that warm a composition.',
  },
];

export const TECHNOLOGY_SCIENCE_LEAD =
  'Alongside extraction, science widens the palette and lightens its footprint.';

export const TECHNOLOGY_SCIENCE: Route[] = [
  {
    name: 'Headspace Analysis',
    applies: 'The scent of the living plant',
    body: 'The air around a flower or a fruit is captured and analysed without harming the plant. Its scent is then recreated note by note.',
  },
  {
    name: 'Biotechnology',
    applies: 'Ingredients from renewable carbon',
    body: 'Fermentation and bioconversion use micro-organisms and enzymes to produce fragrance ingredients, with steady quality all year round.',
  },
  {
    name: 'Green Chemistry',
    applies: 'Renewable molecules',
    body: 'Molecules designed to be efficient to make, safe to use and ready to biodegrade, following the principles of green chemistry.',
  },
  {
    name: 'Upcycling',
    applies: 'Upcycled ingredients',
    body: 'Wood chips, fruit peel and plant material left after distillation are given a second life as new ingredients.',
  },
];

/* "The catalog shows a selection": pemilik, 12 Nov 2026: jajaran produk jauh
   lebih banyak daripada yang tampil di katalog situs. */
export const TECHNOLOGY_RANGE_LEAD =
  'The catalog shows a selection of our range. Ask us about any material you need.';

export const TECHNOLOGY_RANGE: { title: string; body: string }[] = [
  { title: 'Essential Oils', body: 'Distilled from leaves, roots, woods, flowers and spices.' },
  { title: 'Absolutes', body: 'Flower and plant extracts of great depth, soluble in alcohol.' },
  { title: 'Resinoids', body: 'Resins, gums and balsams made ready for the formula.' },
  { title: 'CO₂ Extracts', body: 'Extracts with the freshness of the raw material.' },
  { title: 'Fractions & Isolates', body: 'Hearts, fractions and single molecules drawn from natural oils.' },
  { title: 'Specialty Bases', body: 'Naturals and molecules composed into ready-to-use building blocks.' },
];

export const TECHNOLOGY_PASSAGES: Passage[] = [
  {
    id: 'quality',
    eyebrow: 'Quality & Compliance',
    title: 'Measured, smelled and documented',
    body: 'Each batch is analysed in the laboratory and evaluated by nose before it is released. Our regulatory team follows fragrance standards and regional rules closely and prepares the documents each order requires.',
    points: [
      'Gas chromatography and physical constants',
      'Olfactive evaluation of every batch',
      'Documentation to the requirements of each market',
    ],
    cta: 'Ordering & Documents',
    href: '/ingredients/ordering/',
    caption: 'flash point tester in a laboratory',
    image: 'lab-flash-point',
  },
];

/* ── Ordering & Documents ────────────────────────────────────────────── */

export const ORDERING_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ordering & Documents',
  lede: 'From the first sample to delivery, here is how to work with us.',
  description:
    'How to order natural ingredients from Adhiloka: samples, quotations, documents and delivery.',
  image: 'cargo-ship',
  caption: 'container ship at sea',
};

export type OrderStep = { n: string; title: string; body: string };

export const ORDERING_STEPS: OrderStep[] = [
  { n: '01', title: 'Enquiry', body: 'Tell us which ingredient you are interested in and how you plan to use it.' },
  { n: '02', title: 'Sample', body: 'We send a sample, so that you can evaluate the material in your own work.' },
  { n: '03', title: 'Quotation', body: 'Once the material suits you, we prepare a quotation for the quantity you need.' },
  { n: '04', title: 'Order', body: 'You confirm the order and we agree the details together.' },
  { n: '05', title: 'Preparation', body: 'Your order is prepared and packed with care.' },
  { n: '06', title: 'Delivery', body: 'We ship your order and stay in touch until it arrives.' },
];

/* Dokumen yang biasa diminta pembeli. Sengaja TIDAK ditulis "tersedia":
   status tiap dokumen dikonfirmasi per pesanan (formulir data D2). */
export const ORDERING_DOCUMENTS_LEAD =
  'Every buyer works to different requirements. Tell us which documents yours calls for and we will confirm what can accompany your order.';

export const ORDERING_DOCUMENTS: string[] = [
  'Product specification',
  'Certificate of Analysis',
  'Safety Data Sheet',
  'IFRA statement',
  'Allergen statement',
  'Certificate of Origin',
];

export const ORDERING_LOGISTICS: { title: string; body: string }[] = [
  { title: 'Packaging', body: 'Chosen to suit the material and the quantity ordered.' },
  { title: 'Quantities', body: 'These depend on the ingredient. Tell us what you need.' },
  { title: 'Lead Time', body: 'Confirmed with every quotation.' },
  { title: 'Shipping', body: 'Terms and routes are agreed with each order.' },
];

export const ORDERING_FAQ: { q: string; a: string }[] = [
  {
    q: 'How do I request a sample?',
    a: 'Use the contact form or write to info@adhiloka.com, and tell us the ingredient and how you plan to use it.',
  },
  {
    q: 'Which documents can I receive?',
    a: 'Let us know what your work requires and we will confirm what can accompany your order.',
  },
  {
    q: 'How do I get a quotation?',
    a: 'Send us the ingredient and the quantity you need, and we will reply with a quotation.',
  },
  {
    q: 'Can you help me choose an ingredient?',
    a: 'Gladly. Tell us about your project and we will suggest where to begin.',
  },
];

export const ORDERING_CLOSING = 'Have a question about an order? We are glad to help.';
