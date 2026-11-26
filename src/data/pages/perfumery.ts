import type { ImageKey } from '../images';
import type { PageIntro, Passage } from './types';

/* Perfumery: SATU halaman, tanpa subhalaman (keputusan pemilik 12 Nov 2026).
 * Susunannya mengikuti cara rumah fragrance besar menerangkan perfumery
 * mereka (rujukan di market-research/references/, "Web … - dsm-firmenich /
 * Givaudan / IFF / Robertet - 2026"):
 *
 *   Fine Fragrance · Consumer Fragrance · Fragrance Innovation · Our Palette
 *   (How We Work dilepas 27 Nov 2026, pemilik)
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
  image: 'hero-smelling-vial',
  focus: '50% 35%',
  caption: 'woman smelling a fragrance by the window',
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
    caption: 'perfumer blending with a pipette',
    image: 'hero-perfumer-blending',
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

/** Dua tile Perfumery di tab Products, Our Business beranda (BusinessShowcase).
 *  Chip = bentuk dan bidang yang biasa dikerjakan rumah fragrance; semuanya
 *  menuju bagian yang sama di halaman ini. */
export const PERFUMERY_TILES: { label: string; href: string; image: ImageKey; chips: string[] }[] = [
  {
    label: 'Fine Fragrance',
    href: '/perfumery/#fine-fragrance',
    image: 'hero-perfumer-blending',
    chips: ['Extrait de Parfum', 'Eau de Parfum', 'Eau de Toilette', 'Body & Hair Mist'],
  },
  {
    label: 'Consumer Fragrance',
    href: '/perfumery/#consumer-fragrance',
    image: 'reed-diffuser-home',
    chips: ['Personal Care', 'Home Care', 'Fabric Care'],
  },
];
