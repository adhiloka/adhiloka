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
  'Natural ingredients depend on healthy land and on the people who work it. Care for one is care for the other.',
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
    body: 'We work side by side with the people who grow and gather our ingredients.',
    caption: 'green hills beneath a volcano at dusk',
    image: 'tea-hills-dusk',
  },
  {
    id: 'continuity',
    title: 'Continuity',
    body: 'Relationships that last beyond one harvest.',
    caption: 'dried cloves in an open hand',
    image: 'cloves-in-hand',
  },
  {
    id: 'knowledge',
    title: 'Knowledge',
    body: 'Know-how learned in the field and handed down between generations.',
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
export type Step = { n: string; title: string };

export const SOURCING_CHAIN: Step[] = [
  { n: '01', title: 'The plant' },
  { n: '02', title: 'The harvest' },
  { n: '03', title: 'The selection' },
  { n: '04', title: 'The process' },
  { n: '05', title: 'The evaluation' },
  { n: '06', title: 'The journey' },
];

export const SOURCING_PASSAGES: Passage[] = [
  {
    id: 'source',
    title: 'Close to the Source',
    body: 'We stay close to the places where our ingredients grow.',
    caption: 'nutmeg fruit on the tree',
    image: 'nutmeg-on-tree',
  },
  {
    id: 'land',
    title: 'Land',
    body: 'Taking only what nature can give, so that plants recover and landscapes stay alive.',
    cta: 'Our Purpose',
    href: '/about/our-purpose/',
    caption: 'stream through a sunlit jungle',
    image: 'jungle-stream',
  },
];
