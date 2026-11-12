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
 * - judul lalu paling banyak satu keterangan pendek; tidak ada subjudul,
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
  'Scent stirs memory, sets a mood and gives a product its character. Perfumers, evaluators, application specialists and regulatory experts work as one team, from the first brief to the finished product.',
];

/** Dua bidang kreasi. Id-nya ditaut mega-menu, footer dan tile beranda. */
export const PERFUMERY_AREAS: Passage[] = [
  {
    id: 'fine-fragrance',
    title: 'Fine Fragrance',
    body: 'Perfumes with a signature of their own, composed hand in hand with each brand.',
    caption: 'perfumer at work with a dropper',
    image: 'perfumer-dropper',
  },
  {
    id: 'consumer-fragrance',
    title: 'Consumer Fragrance',
    points: ['Personal care', 'Home care', 'Fabric care'],
    caption: 'amber glass bottles',
    image: 'amber-bottles',
  },
];

export const PERFUMERY_INNOVATION: { title: string; body: string }[] = [
  { title: 'Long-Lasting Freshness', body: 'Encapsulation and controlled release.' },
  { title: 'Bloom', body: 'Scent that opens at the right moment.' },
  { title: 'Malodour Control', body: 'Unwanted odours, neutralised.' },
  { title: 'Emotion & Wellbeing', body: 'Scent designed around mood.' },
  { title: 'Digital Creation', body: 'Data and AI at the perfumer’s side.' },
  { title: 'Mindful Design', body: 'Biodegradable, renewable, concentrated.' },
];

export const PERFUMERY_STEPS: { n: string; title: string }[] = [
  { n: '01', title: 'Brief' },
  { n: '02', title: 'Creation' },
  { n: '03', title: 'Application' },
  { n: '04', title: 'Compliance & Delivery' },
];

export const PERFUMERY_PALETTE: Passage = {
  id: 'palette',
  title: 'Our Palette',
  body: 'Essential oils, absolutes, resinoids and extracts, alongside fragrance molecules and specialty bases.',
  cta: 'Explore Ingredients',
  href: '/ingredients/',
  caption: 'dried flowers in glass vials',
  image: 'vials-dried-flowers',
};

export const PERFUMERY_CLOSING = 'Every fragrance begins with a conversation.';

/** Tile tab Perfumery di beranda (BusinessShowcase): bagian-bagian halaman ini. */
export const PERFUMERY_TILES: { label: string; href: string; image: ImageKey }[] = [
  { label: 'Fine Fragrance', href: '/perfumery/#fine-fragrance', image: 'perfumer-dropper' },
  { label: 'Consumer Fragrance', href: '/perfumery/#consumer-fragrance', image: 'amber-bottles' },
  { label: 'Fragrance Innovation', href: '/perfumery/#innovation', image: 'lab-flash-point' },
  { label: 'Our Palette', href: '/perfumery/#palette', image: 'vials-dried-flowers' },
];
