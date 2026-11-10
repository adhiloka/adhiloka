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
  image: 'hero-benzoin-tears',
  caption: 'cinnamon bark',
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
    image: 'material-nutmeg',
  },
  {
    title: 'Technology',
    body: 'The methods that turn a plant into a perfumery ingredient.',
    href: '/ingredients/technology/',
    image: 'fragrance-resin',
  },
  {
    title: 'Ordering & Documents',
    body: 'Samples, documents and how to order.',
    href: '/ingredients/ordering/',
    image: 'material-patchouli',
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
  caption: 'whole nutmegs',
  image: 'material-nutmeg',
};

/* ── Technology ──────────────────────────────────────────────────────── */

export const TECHNOLOGY_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Technology',
  lede: 'Turning a plant into a perfumery ingredient takes method and patience. Each technique reveals a different side of the material.',
  description:
    'How natural perfumery ingredients are made: steam distillation, resinoid extraction, rectification and molecular distillation.',
  caption: 'dried rhizome slices',
  image: 'fragrance-resin',
};

export type Route = { name: string; applies: string; body: string };

/* Empat nama teknik disetujui pemilik untuk beranda (18 Okt 2026). Isinya
   menjelaskan tekniknya secara umum; tidak menyebut alat atau kapasitas. */
export const ROUTES: Route[] = [
  {
    name: 'Steam Distillation',
    applies: 'Leaves, roots and spices',
    body: 'Steam passes through the plant and carries its aromatic molecules with it. Once cooled, the essential oil separates from the water.',
  },
  {
    name: 'Resinoid Extraction',
    applies: 'Resins and balsams',
    body: 'The raw resin is dissolved, filtered and concentrated into a resinoid: a rich, pourable material that keeps the warmth of the resin.',
  },
  {
    name: 'Rectification',
    applies: 'Essential oils',
    body: 'A second, gentler distillation that refines an oil, clearing its colour and bringing its scent into focus.',
  },
  {
    name: 'Molecular Distillation',
    applies: 'Delicate oils and extracts',
    body: 'Distillation under deep vacuum and at low temperature, used to purify sensitive materials without harming their scent.',
  },
];

export const TECHNOLOGY_PASSAGES: Passage[] = [
  {
    id: 'selection',
    eyebrow: 'Selection',
    title: 'It begins with choosing well',
    body: 'A good ingredient starts with good raw material. Before anything is processed, it is sorted and assessed by eye, by hand and by nose, because no method can give back what the plant did not have.',
    points: [
      'Raw materials sorted before processing',
      'Assessed by eye, by hand and by nose',
      'Care from the very first step',
    ],
    caption: 'sorted benzoin resin tears',
    image: 'material-benzoin',
  },
  {
    id: 'quality',
    eyebrow: 'Quality',
    title: 'Checked before it leaves us',
    body: 'Every ingredient is evaluated before it is released, so that perfumers can rely on what they receive. The best proof is the material itself: ask us for a sample and judge for yourself.',
    points: [
      'Evaluated before release',
      'True to the character of the plant',
      'Samples on request',
    ],
    cta: 'Request a sample',
    href: '/contact/?kind=sample',
    caption: 'green leaves with dew',
    image: 'material-patchouli',
  },
];

/* ── Ordering & Documents ────────────────────────────────────────────── */

export const ORDERING_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ordering & Documents',
  lede: 'From the first sample to delivery, here is how to work with us.',
  description:
    'How to order natural ingredients from Adhiloka: samples, quotations, documents and delivery.',
  image: 'material-benzoin',
  caption: 'sorted benzoin resin tears',
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
