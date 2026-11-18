import type { ImageKey } from '../images';
import type { PageIntro, Passage } from './types';

/* Perfumery: SATU halaman, tanpa subhalaman (keputusan pemilik 12 Nov 2026).
 * Susunannya mengikuti cara rumah fragrance besar menerangkan perfumery
 * mereka (rujukan di market-research/references/, "Web … - dsm-firmenich /
 * Givaudan / IFF / Robertet - 2026"):
 *
 *   Fine Fragrance · Consumer Fragrance · Fragrance Innovation ·
 *   How We Work · Our Palette
 *
 * Aturan naskah (pemilik, 12 Nov 2026):
 * - ditulis sebagai rumah fragrance penuh, tidak disesuaikan dengan kondisi
 *   kita, tidak bersandar pada kata "Indonesia";
 * - judul lalu satu paragraf (13 Nov 2026; dulu satu keterangan pendek); tidak ada subjudul,
 *   kalimat pengantar, atau butir yang mengulang paragraf (skill
 *   adhiloka-voice, "Hierarki naskah situs");
 * - kalimat ditulis sendiri; tanpa slogan dan nama dagang milik rujukan;
 *   tanpa angka, tahun, nama orang, paten dan sertifikat. */

export const PERFUMERY_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'The art and science of scent',
  metaTitle: 'Perfumery',
  lede: '',
  description:
    'Adhiloka perfumery: fragrance creation for fine fragrance, personal care, home care and fabric care, backed by fragrance technology and a full palette of naturals and molecules.',
  image: 'hero-perfumer-blending',
  focus: '50% 55%',
  caption: 'perfumer blending with a pipette',
};

export const PERFUMERY_OPENING = [
  'Scent stirs memory, sets a mood and gives a product its character. Our perfumers, evaluators and technical teams work as one, from the first brief to the finished fragrance, bringing naturals and molecules together in compositions people remember.',
];

/** Dua bidang kreasi. Id-nya ditaut mega-menu, footer dan tile beranda. */
export const PERFUMERY_AREAS: Passage[] = [
  {
    id: 'fine-fragrance',
    title: 'Fine Fragrance',
    body: 'Perfumes with a signature of their own, composed hand in hand with each brand. Our perfumers start from the story a brand wants to tell and refine the fragrance until it tells it. Naturals sit at the heart of the work, for depth and a sense of life on the skin.',
    caption: 'perfume bottles in a row',
    image: 'fine-fragrance-bottles',
  },
  {
    id: 'consumer-fragrance',
    title: 'Consumer Fragrance',
    body: 'Fragrance is often the first thing people notice about a product, and the reason they choose it again. We create scents for personal care, home care and fabric care that stay true in use and fit the base, the brief and the market.',
    caption: 'reed diffuser in an amber glass bottle at home',
    image: 'reed-diffuser-home',
  },
];

export const PERFUMERY_INNOVATION: { title: string; body: string }[] = [
  {
    title: 'Long-Lasting Freshness',
    body: 'Encapsulation and controlled release hold a fragrance on skin, hair and fabric, then let it go with movement and touch. Freshness lasts through the day.',
  },
  {
    title: 'Bloom',
    body: 'A fragrance should open at the right moment: as a shampoo lathers, a candle warms or laundry is unfolded. We design and test for that moment.',
  },
  {
    title: 'Malodour Control',
    body: 'Unwanted odours in the home, on fabric and on the body are neutralised rather than covered up. The fragrance is left to be enjoyed on a clean background.',
  },
  {
    title: 'Emotion & Wellbeing',
    body: 'Scent acts directly on mood. We study how a fragrance is felt as well as smelled, and create scents that calm, refresh or lift the spirit.',
  },
  {
    title: 'Digital Creation',
    body: 'Data and AI tools work at the perfumer’s side, suggesting directions and predicting performance. The creative decisions stay with the perfumer.',
  },
  {
    title: 'Mindful Design',
    body: 'Fragrances built with biodegradable and renewable ingredients, in concentrated formats that use less material and less packaging. Responsibility is part of the formula from the start.',
  },
];

export const PERFUMERY_STEPS: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Brief',
    body: 'Every project starts with listening. We get to know the brand, the product and the people it is made for, and agree on a direction before the first trial.',
  },
  {
    n: '02',
    title: 'Creation',
    body: 'Our perfumers compose the first proposals, then refine them with our evaluators, trial after trial, until the fragrance answers the brief.',
  },
  {
    n: '03',
    title: 'Application',
    body: 'A fragrance has to work in the product as well as on the blotter. We test it in the real base for stability and performance, and adjust the formula where needed.',
  },
  {
    n: '04',
    title: 'Compliance & Delivery',
    body: 'Every formula is checked against the regulations of the markets where it will be sold. Once approved, the fragrance is produced and delivered with its documents.',
  },
];

export const PERFUMERY_PALETTE: Passage = {
  id: 'palette',
  title: 'Our Palette',
  body: 'Essential oils, absolutes, resinoids and extracts sit alongside fragrance molecules and specialty bases. Naturals bring depth and a sense of origin, molecules bring lift and stability, and our perfumers are free to make each fragrance its own.',
  cta: 'Explore Ingredients',
  href: '/ingredients/',
  caption: 'dried flowers in glass vials',
  image: 'vials-dried-flowers',
};

export const PERFUMERY_CLOSING = 'Every fragrance begins with a conversation.';

/** Tile tab Perfumery di beranda (BusinessShowcase): bagian-bagian halaman ini. */
export const PERFUMERY_TILES: { label: string; href: string; image: ImageKey }[] = [
  { label: 'Fine Fragrance', href: '/perfumery/#fine-fragrance', image: 'fine-fragrance-bottles' },
  { label: 'Consumer Fragrance', href: '/perfumery/#consumer-fragrance', image: 'reed-diffuser-home' },
  { label: 'Fragrance Innovation', href: '/perfumery/#innovation', image: 'lab-vials' },
  { label: 'Our Palette', href: '/perfumery/#palette', image: 'vials-dried-flowers' },
];
