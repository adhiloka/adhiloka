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
  image: 'white-blossom',
  caption: 'white blossom, close',
};

export const PERFUMERY_OPENING = [
  'Scent stirs memory, sets a mood and gives a product its character. Perfumers, evaluators, application specialists and regulatory experts work as one team, from the first brief to the finished product, combining natural ingredients and fragrance molecules into compositions that perform in the bottle, on the skin and in the home.',
];

/** Dua bidang kreasi. Id-nya ditaut mega-menu, footer dan tile beranda. */
export const PERFUMERY_AREAS: Passage[] = [
  {
    id: 'fine-fragrance',
    title: 'Fine Fragrance',
    body: 'Perfumes with a signature of their own, composed hand in hand with each brand. Our perfumers listen first, to the story, the audience and the feeling the brand wants to leave, then build the fragrance through rounds of trials until it says exactly that. Natural materials sit at the heart of the work, giving depth and a sense of life that lasts on the skin.',
    caption: 'perfumer at work with a dropper',
    image: 'perfumer-dropper',
  },
  {
    id: 'consumer-fragrance',
    title: 'Consumer Fragrance',
    body: 'Fragrance is often the first thing people notice about a product, and the reason they choose it again. We create scents for personal care, home care and fabric care that stay true from the bottle to the shower, the washing machine or the living room, and that work within the base, the budget and the regulations of each market.',
    caption: 'reed diffuser in an amber glass bottle at home',
    image: 'reed-diffuser-home',
  },
];

export const PERFUMERY_INNOVATION: { title: string; body: string }[] = [
  {
    title: 'Long-Lasting Freshness',
    body: 'Encapsulation and controlled release keep a fragrance fresh long after use. Scent is held on skin, hair and fabric, then released with movement and touch through the day.',
  },
  {
    title: 'Bloom',
    body: 'A fragrance should open at the right moment: as a shampoo lathers, a candle warms or laundry is unfolded. We design and test for that moment, so the scent is noticed when it matters most.',
  },
  {
    title: 'Malodour Control',
    body: 'Unwanted odours in the home, on fabric and on the body are neutralised rather than covered up. The fragrance can then be enjoyed on a clean background.',
  },
  {
    title: 'Emotion & Wellbeing',
    body: 'Scent acts directly on mood. We study how fragrances are felt as well as smelled, and use that knowledge to create scents that calm, refresh or lift the spirit.',
  },
  {
    title: 'Digital Creation',
    body: 'Data and AI tools work at the perfumer’s side, suggesting directions, predicting performance and shortening trials. The creative decisions stay with the perfumer, who gains more time to make them.',
  },
  {
    title: 'Mindful Design',
    body: 'Fragrances built with biodegradable and renewable ingredients, and concentrated formats that use less material and less packaging. Responsibility is part of the formula from the first brief.',
  },
];

export const PERFUMERY_STEPS: { n: string; title: string; body: string }[] = [
  {
    n: '01',
    title: 'Brief',
    body: 'Every project starts with listening. We learn the brand, the product, the consumer and the market, and agree on direction, budget and timing before the first trial is made.',
  },
  {
    n: '02',
    title: 'Creation',
    body: 'Perfumers compose the first proposals and refine them over rounds of evaluation. Each trial is smelled, compared and adjusted until the fragrance says what the brief asked for.',
  },
  {
    n: '03',
    title: 'Application',
    body: 'A fragrance must work in the product as well as on the blotter. It is tested in the real base for stability, colour and performance over time, and the formula is adjusted where needed.',
  },
  {
    n: '04',
    title: 'Compliance & Delivery',
    body: 'Every formula is checked against the regulations of the markets where it will be sold. The approved fragrance is then produced, documented and delivered, ready for manufacture.',
  },
];

export const PERFUMERY_PALETTE: Passage = {
  id: 'palette',
  title: 'Our Palette',
  body: 'Essential oils, absolutes, resinoids and extracts, alongside fragrance molecules and specialty bases. Natural materials bring depth, texture and a sense of origin, while molecules bring lift, diffusion and stability. Together they give our perfumers a full palette to compose with, and the freedom to make each fragrance its own.',
  cta: 'Explore Ingredients',
  href: '/ingredients/',
  caption: 'dried flowers in glass vials',
  image: 'vials-dried-flowers',
};

export const PERFUMERY_CLOSING = 'Every fragrance begins with a conversation.';

/** Tile tab Perfumery di beranda (BusinessShowcase): bagian-bagian halaman ini. */
export const PERFUMERY_TILES: { label: string; href: string; image: ImageKey }[] = [
  { label: 'Fine Fragrance', href: '/perfumery/#fine-fragrance', image: 'perfumer-dropper' },
  { label: 'Consumer Fragrance', href: '/perfumery/#consumer-fragrance', image: 'reed-diffuser-home' },
  { label: 'Fragrance Innovation', href: '/perfumery/#innovation', image: 'lab-vials' },
  { label: 'Our Palette', href: '/perfumery/#palette', image: 'vials-dried-flowers' },
];
