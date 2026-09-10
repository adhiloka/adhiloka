import type { CarouselSlide, LinkCard, PageIntro, Passage, Stat } from './types';
import type { HeroSlide } from './home';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const INGREDIENTS_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Eighteen naturals, and the paperwork to back every one.',
  metaTitle: 'Ingredients',
  lede: 'Resins, leaf oils, roots, spices and one wood. Each with an origin, an extraction route, a harvest window and a specification we hold across seasons.',
  description:
    'The Adhiloka ingredients range: eighteen Indonesian naturals with published specifications, extraction routes, harvest windows and full traceability.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark, Kerinci',
};

export const INGREDIENTS_STATS: Stat[] = [
  { value: '18', label: 'Naturals in the catalog' },
  { value: '7', label: 'Botanical families' },
  { value: '10 g', label: 'Standard sample size' },
  { value: '3 days', label: 'Typical dispatch' },
];

export const INGREDIENTS_OPENING = [
  'The catalog is short on purpose. Eighteen materials is what we can grow, buy, grade and guarantee without leaning on a trader somewhere in the middle. Adding a nineteenth would mean either finding another forest we can work in properly or buying blind, and we have not been willing to do the second.',
  'What you get with each of them is the same document we work from: where it grew, who tapped or cut it, how it was extracted, when it is available, and what the analysis said. Including the seasons when the analysis said something we would rather it had not.',
];

export const INGREDIENTS_CARDS: LinkCard[] = [
  {
    title: 'Ingredients Catalog',
    body: 'All eighteen naturals, filterable by botanical family, each with its full specification and sample request.',
    href: '/ingredients/catalog/',
  },
  {
    title: 'Technology',
    body: 'The extraction routes behind the catalog — steam, resinoid, absolute, fractionation — and the analysis that keeps them honest.',
    href: '/ingredients/technology/',
  },
];

/* ── Katalog ─────────────────────────────────────────────────────────── */

export const CATALOG_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ingredients Catalog',
  lede: 'Filter by family, open a material for its full specification, and request ten grams from the same panel.',
  description:
    'Browse all eighteen Adhiloka naturals by botanical family, with origin, extraction route, harvest window and specification for each.',
  caption: 'grading floor, Medan works',
  image: 'material-nutmeg',
};

export const CATALOG_NOTE =
  'Availability moves with the season. Where a harvest window has closed, we say so rather than quoting against stock we do not hold.';

/* ── Technology ──────────────────────────────────────────────────────── */

export const TECHNOLOGY_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Technology',
  lede: 'Four extraction routes, one grading floor and one laboratory. Nothing here is unusual in the industry — what is unusual is that we own all of it.',
  description:
    'Extraction technology at the Adhiloka works: steam distillation, resinoid and absolute extraction, fractionation, and the analytical control behind the specifications.',
  caption: 'still hall, Medan works',
  image: 'fragrance-resin',
};

export type Route = { name: string; applies: string; body: string };

export const ROUTES: Route[] = [
  {
    name: 'Steam distillation',
    applies: 'Leaf oils, roots, spices, woods',
    body: 'Two halls, direct and indirect steam. Cut-to-still time is the number that matters here, and having the stations close to the gardens is what keeps it short enough to hold the top notes.',
  },
  {
    name: 'Resinoid',
    applies: 'Benzoin, other resins',
    body: 'Solvent extraction of graded resin into a pourable resinoid. Grading before extraction rather than after is the reason our resinoid is consistent; sorting a finished batch cannot undo a mixed input.',
  },
  {
    name: 'Absolute',
    applies: 'Benzoin, tuberose, cananga',
    body: 'A second stage on selected materials, for perfumers who need the alcohol-soluble fraction and a cleaner colour. Yields are low and we do not run it speculatively.',
  },
  {
    name: 'Fractionation',
    applies: 'Resins, patchouli, nutmeg, citrus',
    body: 'Vacuum fractionation, in since 2019. Separates one material into several usable characters — a vanillic benzoin top and a balsamic body, for instance — without asking more of the forest.',
  },
];

export const TECHNOLOGY_PASSAGES: Passage[] = [
  {
    id: 'grading',
    eyebrow: 'Grading',
    title: 'The step that decides everything after it',
    body: 'Resin arrives mixed: tears, siftings, bark, the occasional stone. It is sorted by hand into three qualities by people who have done it for years, and no lot enters a still until it has been through that floor. Machines are faster and cannot tell a first-grade tear from a well-shaped second, which is exactly the distinction the price rests on.',
    points: [
      'Three benzoin qualities, sorted by hand',
      'Household and collection point recorded at grading',
      'No blending across grades after the fact',
    ],
    caption: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    id: 'laboratory',
    eyebrow: 'Analytical control',
    title: 'GC-MS on every released lot',
    body: 'A specification is a promise, and a promise needs an instrument behind it. Every lot is run before release and the trace travels with the sample. When a season pushes a material outside its normal range we publish the range it actually reached, because a buyer who plans around the truth has a better year than one who plans around an average.',
    points: [
      'Trace and batch certificate with every dispatch',
      'Specification held across seasons, not per lot',
      'Difficult years published as they happened',
    ],
    cta: 'Request a sample',
    href: '/contact/',
    caption: 'laboratory, Medan works',
    image: 'material-patchouli',
  },
];

/* ── Halaman hub: hero + karusel ────────────────────────────────────────── */
export const INGREDIENTS_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Ingredients',
    headline: 'Eighteen Naturals.',
    shot: 'cassia bark, Kerinci',
    href: '/ingredients/catalog/',
    image: 'hero-benzoin-tears',
  },
];

export const INGREDIENTS_SLIDES: CarouselSlide[] = [
  {
    title: 'Ingredients Catalog',
    body: 'All eighteen naturals, filterable by botanical family, each with its full specification and sample request.',
    cta: 'Browse the catalog',
    shot: 'grading floor, Medan works',
    image: 'material-nutmeg',
    href: '/ingredients/catalog/',
    bg: 'oklch(0.882 0.022 52)',
  },
  {
    title: 'Technology',
    body: 'The extraction routes behind the catalog — steam, resinoid, absolute, fractionation — and the analysis that keeps them honest.',
    cta: 'See the technology',
    shot: 'still hall, Medan works',
    image: 'fragrance-resin',
    href: '/ingredients/technology/',
    bg: 'oklch(0.872 0.016 80)',
  },
];
