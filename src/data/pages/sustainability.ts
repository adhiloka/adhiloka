import type { LinkCard, PageIntro, Passage, Quote } from './types';

/* Naskah Sustainability. Dipangkas 12 Nov 2026 (koreksi pemilik: terlalu
 * banyak menjelaskan dan terlalu banyak tingkat judul; aturannya di skill
 * adhiloka-voice, "Hierarki naskah situs"). Tiap bagian: judul + paling
 * banyak dua kalimat. Tanpa angka, target, sertifikat, nama daerah atau
 * jumlah petani; semua itu menunggu formulir data F. */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const SUSTAINABILITY_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Caring for nature and its people',
  metaTitle: 'Sustainability',
  lede: '',
  description:
    'Sustainability at Adhiloka: respect for the land our natural ingredients come from, and lasting relationships with the people who grow them.',
  caption: 'rainforest seen from above',
  image: 'rainforest-aerial',
};

export const SUSTAINABILITY_OPENING = [
  'Natural ingredients depend on healthy land and on the people who work it. We buy from growers we know, respect the rhythm of each harvest and take only what the land can give, so the forests, fields and villages behind our ingredients can thrive for generations to come.',
];

export const SUSTAINABILITY_CARDS: LinkCard[] = [
  { title: 'Driving progress for people', href: '/sustainability/people/', image: 'rice-planting' },
  { title: 'Responsible Sourcing', href: '/sustainability/responsible-sourcing/', image: 'nutmeg-on-tree' },
];

export const SUSTAINABILITY_CLOSING = 'Good ingredients begin with respect, for nature and for people.';

/* ── Driving progress for people ─────────────────────────────────────── */

export const PEOPLE_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Driving progress for people',
  lede: '',
  description:
    'How Adhiloka works with growers and their communities: direct relationships, a long-term view and respect for local knowledge.',
  caption: 'planting rice by hand',
  image: 'rice-planting',
};

export const PEOPLE_PASSAGES: Passage[] = [
  {
    id: 'partnerships',
    title: 'Partnerships',
    body: 'We work side by side with the people who grow and gather our ingredients. Buying close to the source keeps the chain short, and lets us agree on price and quality face to face.',
    caption: 'green hills beneath a volcano at dusk',
    image: 'tea-hills-dusk',
  },
  {
    id: 'continuity',
    title: 'Continuity',
    body: 'Our relationships last beyond one harvest. Growers who can count on a buyer season after season can plan ahead and look after their land, and quality stays steady from year to year.',
    caption: 'dried cloves in an open hand',
    image: 'cloves-in-hand',
  },
  {
    id: 'knowledge',
    title: 'Knowledge',
    body: 'When to harvest, how to dry, how to tell good material by touch and smell: this is knowledge learned in the field and handed down between generations. We respect it, learn from it and help pass it on.',
    cta: 'Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    caption: 'cloves sorted by hand',
    image: 'cloves-sorting',
  },
];

export const PEOPLE_QUOTE: Quote = {
  text: 'Every ingredient carries the work of *many hands*. Each of them deserves *our respect*.',
  attribution: 'Adhiloka',
};

/* ── Responsible Sourcing ────────────────────────────────────────────── */

export const SOURCING_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Responsible Sourcing',
  lede: '',
  description:
    'Responsible sourcing at Adhiloka: staying close to the source, knowing where ingredients come from and caring for the land.',
  image: 'canopy-from-below',
  caption: 'tree canopy seen from below',
};

/* Rantai sumber: nomor dan judul saja. */
export type Step = { n: string; title: string; body: string };

export const SOURCING_CHAIN: Step[] = [
  {
    n: '01',
    title: 'The plant',
    body: 'It starts with the plant and the place it grows. Soil, climate and care shape the character of an ingredient long before harvest.',
  },
  {
    n: '02',
    title: 'The harvest',
    body: 'Each material is gathered in its season, by growers who know when a leaf, a bud or a resin is ready. Good timing shows in the finished ingredient.',
  },
  {
    n: '03',
    title: 'The selection',
    body: 'Raw material is sorted by hand and checked by eye and by nose. Only what meets the standard moves on to processing.',
  },
  {
    n: '04',
    title: 'The process',
    body: 'Distillation or extraction turns the raw material into an ingredient. The method is chosen to keep its natural character.',
  },
  {
    n: '05',
    title: 'The evaluation',
    body: 'Each batch is analysed and smelled against its reference before it is released, so that one delivery matches the next.',
  },
  {
    n: '06',
    title: 'The delivery',
    body: 'The finished ingredient is packed, documented and shipped, then followed until it arrives with the client.',
  },
];

export const SOURCING_PASSAGES: Passage[] = [
  {
    id: 'source',
    title: 'Close to the Source',
    body: 'We stay close to the places where our ingredients grow. We know the growers, the land and the season behind each material, and can say where it comes from.',
    caption: 'nutmeg fruit on the tree',
    image: 'nutmeg-on-tree',
  },
  {
    id: 'land',
    title: 'Land',
    body: 'We take only what nature can give, so that plants recover and landscapes stay alive. Resins are tapped with care for the tree, leaves and spices are harvested in season, and we favour material grown among the forest.',
    cta: 'Our Purpose',
    href: '/about/our-purpose/',
    caption: 'stream through a sunlit jungle',
    image: 'jungle-stream',
  },
];
