import type { ImageKey } from '../images';
import type { PageIntro, Passage } from './types';

/* Perfumery: SATU halaman, tanpa subhalaman (keputusan pemilik 12 Nov 2026:
 * subhalaman terlalu banyak dan isinya berulang). Susunannya mengikuti cara
 * rumah fragrance besar menerangkan perfumery mereka (rujukan tersimpan di
 * market-research/references/, "Web … - dsm-firmenich / Givaudan / IFF /
 * Robertet - 2026"):
 *
 *   Fine Fragrance · Consumer Fragrance   (dsm-firmenich, Givaudan, IFF)
 *   Fragrance Innovation                   (dsm-firmenich fragrance-innovation,
 *                                           Givaudan fragrance-performance,
 *                                           Robertet beyond-the-scent)
 *   How We Work                            (tim: perfumer, evaluator, aplikasi,
 *                                           regulasi; Robertet, IFF)
 *   Our Palette                            (naturals + molekul; IFF, Givaudan)
 *
 * Aturan naskah (pemilik, 12 Nov 2026): ditulis sebagai rumah fragrance
 * penuh, tidak disesuaikan dengan kondisi kita, tidak bersandar pada kata
 * "Indonesia" atau tema kedaerahan. Kalimatnya ditulis sendiri; tidak ada
 * kalimat, slogan atau nama dagang milik rujukan (NaturIA, Carto, Firgood…).
 * Tetap tanpa angka, tahun, nama orang, paten dan sertifikat. */

export const PERFUMERY_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'The art and science of scent',
  metaTitle: 'Perfumery',
  lede: 'Fragrance creation for fine fragrance, personal care, home care and fabric care.',
  description:
    'Adhiloka perfumery: fragrance creation for fine fragrance, personal care, home care and fabric care, backed by fragrance technology and a full palette of naturals and molecules.',
  image: 'white-blossom',
  caption: 'white blossom, close',
};

export const PERFUMERY_OPENING = [
  'Scent speaks before words do. It stirs memory, sets a mood and gives a product its character. Our perfumery turns that power into fragrances people return to.',
  'Perfumers, evaluators, application specialists and regulatory experts work as one team. They compose with a full palette of naturals and molecules, and they stay close to each client from the first brief to the finished product.',
];

/** Dua bidang kreasi. Id-nya ditaut mega-menu, footer dan tile beranda. */
export const PERFUMERY_AREAS: Passage[] = [
  {
    id: 'fine-fragrance',
    eyebrow: 'Fine Fragrance',
    title: 'Perfumes with a signature of their own',
    body: 'Fine fragrance is perfumery in its purest form. Our perfumers work hand in hand with each brand and turn an idea, a place or a feeling into a perfume that is recognised from the first breath. Every composition rests on ingredients chosen for their quality and on the time it takes to get a formula right.',
    points: [
      'Eau de parfum, eau de toilette and extrait',
      'Collections for established and emerging brands',
      'Signature scents for niche and independent houses',
    ],
    caption: 'perfumer at work with a dropper',
    image: 'perfumer-dropper',
  },
  {
    id: 'consumer-fragrance',
    eyebrow: 'Consumer Fragrance',
    title: 'Fragrance that performs in the product',
    body: 'A shampoo, a detergent or a candle has work to do, and its fragrance does that work with it. We create scents that stay true in the base, open at the right moment and last through use. Creation and application testing run side by side, so each fragrance is proven in the product it is made for.',
    points: [
      'Personal care: body, hair and skin',
      'Home care: surfaces, dishes and air',
      'Fabric care: wash, rinse and wear',
    ],
    caption: 'amber glass bottles',
    image: 'amber-bottles',
  },
];

export const PERFUMERY_INNOVATION_LEAD =
  'Science gives the perfumer more to work with. These are the technologies behind fragrances that last longer, perform better and feel right.';

export const PERFUMERY_INNOVATION: { title: string; body: string }[] = [
  {
    title: 'Long-Lasting Freshness',
    body: 'Encapsulation and controlled-release systems protect a fragrance in the product and release it over time, on skin, hair and fabric.',
  },
  {
    title: 'Bloom',
    body: 'Fragrances built to open at the moments that count: in the shower, in the wash, as a surface is wiped.',
  },
  {
    title: 'Malodour Control',
    body: 'Technologies that neutralise unwanted odours at the source and leave room for the fragrance itself.',
  },
  {
    title: 'Emotion & Wellbeing',
    body: 'Sensory and neuroscience research links scent to mood, so that a fragrance can calm, refresh or energise by design.',
  },
  {
    title: 'Digital Creation',
    body: 'Data and artificial intelligence support the perfumer, from exploring new accords to refining a formula.',
  },
  {
    title: 'Mindful Design',
    body: 'Biodegradable and renewable ingredients, concentrated formats and careful dosage, considered from the first trial.',
  },
];

export const PERFUMERY_STEPS: { n: string; title: string; body: string }[] = [
  { n: '01', title: 'Brief', body: 'We listen to the brand, the product and the people it is made for.' },
  { n: '02', title: 'Creation', body: 'Perfumers compose, and evaluators guide each trial towards the brief.' },
  { n: '03', title: 'Application', body: 'Every fragrance is tested in its base for stability, performance and bloom.' },
  { n: '04', title: 'Compliance & Delivery', body: 'Each formula is checked against the standards of its market, then compounded and delivered to specification.' },
];

export const PERFUMERY_PALETTE: Passage = {
  id: 'palette',
  eyebrow: 'Our Palette',
  title: 'Naturals and molecules, side by side',
  body: 'A perfumer is only as free as the palette allows. Ours brings essential oils, absolutes, resinoids and extracts together with fragrance molecules and specialty bases. We produce ingredients ourselves, so our perfumers know each material from the plant to the formula.',
  cta: 'Explore Ingredients',
  href: '/ingredients/',
  caption: 'dried flowers in glass vials',
  image: 'vials-dried-flowers',
};

export const PERFUMERY_CLOSING = 'Tell us about your next fragrance.';

/** Tile tab Perfumery di beranda (BusinessShowcase): bagian-bagian halaman ini. */
export const PERFUMERY_TILES: { label: string; href: string; image: ImageKey }[] = [
  { label: 'Fine Fragrance', href: '/perfumery/#fine-fragrance', image: 'perfumer-dropper' },
  { label: 'Consumer Fragrance', href: '/perfumery/#consumer-fragrance', image: 'amber-bottles' },
  { label: 'Fragrance Innovation', href: '/perfumery/#innovation', image: 'lab-flash-point' },
  { label: 'Our Palette', href: '/perfumery/#palette', image: 'vials-dried-flowers' },
];
