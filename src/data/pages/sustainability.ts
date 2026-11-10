import type { LinkCard, PageIntro, Passage, Quote } from './types';

/* Naskah Sustainability, ditulis 10 Nov 2026 (permintaan pemilik: ringkas,
 * bergaya situs rumah fragrance). Tiga pilar beranda (Nature / People /
 * Communities) jadi benang merahnya. Tanpa angka, target, sertifikat, nama
 * daerah atau jumlah petani; semua itu menunggu formulir data F. Angka
 * sekilas ("What We Can Show") dilepas sampai ada yang bisa ditunjukkan. */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const SUSTAINABILITY_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Caring for nature and its people',
  metaTitle: 'Sustainability',
  lede: 'Our ingredients come from the living world. Looking after it, and after the people who tend it, is part of our work.',
  description:
    'Sustainability at Adhiloka: respect for the land our natural ingredients come from, and lasting relationships with the people who grow them.',
  caption: 'tree canopy seen from below',
  image: 'agroforest-canopy',
};

export const SUSTAINABILITY_OPENING = [
  'Natural ingredients depend on healthy land and on the knowledge of the people who work it. Without them there is nothing to distil, and nothing to create with.',
  'That is why we see care for nature and care for people as one and the same commitment. It shapes where our ingredients come from and how we work with those who grow them.',
];

export const SUSTAINABILITY_CARDS: LinkCard[] = [
  {
    title: 'Driving progress for people',
    body: 'Working side by side with the growers and communities behind each harvest.',
    href: '/sustainability/people/',
    image: 'material-patchouli',
  },
  {
    title: 'Responsible Sourcing',
    body: 'Respect for the plants and the land our ingredients come from.',
    href: '/sustainability/responsible-sourcing/',
    image: 'hero-benzoin-tears',
  },
];

export const SUSTAINABILITY_CLOSING = 'Good ingredients begin with respect, for nature and for people.';

/* ── Driving progress for people ─────────────────────────────────────── */

export const PEOPLE_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Driving progress for people',
  lede: 'Behind every ingredient are people whose knowledge and work make it possible. We want our relationships with them to be fair, and to last.',
  description:
    'How Adhiloka works with growers and their communities: direct relationships, a long-term view and respect for local knowledge.',
  caption: 'green leaves with dew',
  image: 'material-patchouli',
};

export const PEOPLE_PASSAGES: Passage[] = [
  {
    id: 'partnerships',
    eyebrow: 'Partnerships',
    title: 'Working side by side with growers',
    body: 'The people who grow and gather our ingredients know their plants better than anyone. We work with them directly wherever we can, listen to what they tell us, and value what they bring.',
    points: [
      'Direct relationships wherever possible',
      'Respect for local knowledge',
      'Fair dealings on both sides',
    ],
    caption: 'tree canopy seen from below',
    image: 'agroforest-canopy',
  },
  {
    id: 'continuity',
    eyebrow: 'Continuity',
    title: 'Relationships that last beyond one harvest',
    body: 'Nature has generous seasons and difficult ones. We believe a partnership should hold through both, and that trust is built by coming back, year after year.',
    points: [
      'A long-term view',
      'Trust built over time',
      'Together through every season',
    ],
    caption: 'sorted benzoin resin tears',
    image: 'material-benzoin',
  },
  {
    id: 'knowledge',
    eyebrow: 'Knowledge',
    title: 'Know-how worth passing on',
    body: 'Much of what makes an ingredient good is learned in the field and handed down from one generation to the next. Keeping that knowledge alive matters as much as the harvest itself.',
    points: [
      'Skills handed down between generations',
      'Learning from one another',
      'Pride in work well done',
    ],
    cta: 'Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    caption: 'whole nutmegs',
    image: 'material-nutmeg',
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
  lede: 'Good ingredients begin with respect: for the plant, for the land, and for the people who care for both.',
  description:
    'Responsible sourcing at Adhiloka: staying close to the source, knowing where ingredients come from and caring for the land.',
  image: 'hero-benzoin-tears',
  caption: 'cinnamon bark',
};

export type Step = { n: string; title: string; body: string };

export const SOURCING_CHAIN: Step[] = [
  { n: '01', title: 'The plant', body: 'Each ingredient starts with a plant, grown where it thrives.' },
  { n: '02', title: 'The harvest', body: 'It is gathered in season, when it has the most to give.' },
  { n: '03', title: 'The selection', body: 'It is sorted with care, so that only suitable material goes forward.' },
  { n: '04', title: 'The process', body: 'It is distilled or extracted by the method that suits it.' },
  { n: '05', title: 'The evaluation', body: 'It is smelled and checked before it is released.' },
  { n: '06', title: 'The journey', body: 'It is sent on its way, with its origin kept in view.' },
];

export const SOURCING_PASSAGES: Passage[] = [
  {
    id: 'source',
    eyebrow: 'Close to the Source',
    title: 'Knowing where our ingredients come from',
    body: 'We stay as close as we can to the places where our ingredients grow. The shorter the path between the plant and us, the better we understand what we offer, and the more we can stand behind it.',
    points: [
      'Short paths from plant to ingredient',
      'Origin kept in view',
      'Respect for those who produce',
    ],
    caption: 'sorted benzoin resin tears',
    image: 'material-benzoin',
  },
  {
    id: 'land',
    eyebrow: 'Land',
    title: 'Taking only what nature can give',
    body: 'Trees, roots and leaves need time to grow back. Harvesting with patience keeps the plants healthy and the land alive, for this season and for those to come.',
    points: [
      'Harvests that let plants recover',
      'Landscapes kept alive and diverse',
      'Thinking in seasons, not in quarters',
    ],
    cta: 'Our Purpose',
    href: '/about/our-purpose/',
    caption: 'tree canopy seen from below',
    image: 'agroforest-canopy',
  },
];
