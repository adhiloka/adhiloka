import type { LinkCard, PageIntro, Passage, Quote, Stat } from './types';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const SUSTAINABILITY_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'The forest is a supplier, not a resource.',
  metaTitle: 'Sustainability',
  lede: 'A benzoin tree is tapped, not felled. Everything we claim on this page follows from taking that literally, including the parts that cost us money.',
  description:
    'Sustainability at Adhiloka: forest-first sourcing, floor prices agreed before the season, traceability to the household, and progress reported honestly.',
  caption: 'kemenyan agroforest canopy',
  image: 'agroforest-canopy',
};

export const SUSTAINABILITY_STATS: Stat[] = [
  { value: '1,400+', label: 'Tapping households in the register' },
  { value: '100%', label: 'Benzoin traceable to collection point' },
  { value: '4', label: 'Collection stations buying direct' },
  { value: '0', label: 'Hectares cleared for our supply' },
];

export const SUSTAINABILITY_OPENING = [
  'Most sustainability pages in this industry are written to be quoted. This one is written to be checked. Where a number is measured, we say what measured it. Where it is an estimate, we say that too, and where we have not got there yet we would rather write it down than leave it out.',
  'The short version: we buy directly at four stations, we agree a floor price before the tapping season instead of after, and every benzoin lot stays attached to the household that produced it all the way to the drum. Those three things are the programme. The rest is reporting.',
];

export const SUSTAINABILITY_CARDS: LinkCard[] = [
  {
    title: 'Driving progress for people',
    body: 'Income security for tapping households, training, and what we do in the seasons when the crop fails.',
    href: '/sustainability/people/',
    image: 'material-patchouli',
  },
  {
    title: 'Responsible Sourcing',
    body: 'How a lot moves from a forest garden to a drum, and what is recorded at each step.',
    href: '/sustainability/responsible-sourcing/',
    image: 'hero-benzoin-tears',
  },
];

/* ── Driving progress for people ─────────────────────────────────────── */

export const PEOPLE_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Driving progress for people',
  lede: 'A forest stays standing because the households around it can afford to leave it standing. That is the entire theory, and most of the work is making the arithmetic hold.',
  description:
    'How Adhiloka supports the tapping households behind its naturals: floor prices agreed before the season, direct payment, training and support in failed harvests.',
  caption: 'kemenyan agroforest canopy',
  image: 'hero-agroforest',
};

export const PEOPLE_PASSAGES: Passage[] = [
  {
    id: 'income',
    eyebrow: 'Income',
    title: 'A price agreed before the season, not after it',
    body: 'A tapper who knows in March what benzoin will fetch in August can decide whether to tap, how many trees to work and whether to send a child to school. A tapper who finds out at harvest can only accept what is offered. We post a floor price at each station before the season opens and buy at or above it, including in the years the market falls below.',
    points: [
      'Floor price posted before each tapping season',
      'Paid at the station, in full, on the day',
      'No deduction for grading carried out after purchase',
    ],
    caption: 'collection post, Tarutung',
    image: 'agroforest-canopy',
  },
  {
    id: 'failure',
    eyebrow: 'Bad seasons',
    title: 'What happens when the crop does not come',
    body: 'Benzoin fails sometimes — weather, disease, a tapping cycle that needs a rest. The households do not stop needing income when it does. Advances against the following season, carried without interest, are the oldest instrument in this business and the one written into the 1840s ledger. We still use it, and it is the main reason families stay in the trade across generations rather than selling the land.',
    points: [
      'Interest-free advances against the following season',
      'Registered households prioritised when volume is short',
      'Rest cycles supported rather than penalised',
    ],
    caption: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'Tapping well is a taught skill, and it is worth teaching',
    body: 'A badly scored tree yields less and dies sooner. Station staff run tapping and grading sessions each year before the season, and the households who attend consistently produce a higher first-grade share — which they are then paid for. It is the rare programme where doing the right thing and being paid more are the same action.',
    points: [
      'Pre-season tapping and grading sessions at every station',
      'First-grade share paid at a premium',
      'Younger tappers trained alongside the household head',
    ],
    cta: 'How we source',
    href: '/sustainability/responsible-sourcing/',
    caption: 'grading floor, Medan works',
    image: 'material-nutmeg',
  },
];

export const PEOPLE_QUOTE: Quote = {
  text: 'The forest was never the difficult part. Keeping it worth somebody’s while to look after it is the difficult part.',
  attribution: 'Head of Sustainability, Adhiloka',
};

/* ── Responsible Sourcing ────────────────────────────────────────────── */

export const SOURCING_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Responsible Sourcing',
  lede: 'Where a lot came from, who produced it and what was paid — recorded at grading, not reconstructed afterwards.',
  description:
    'Responsible sourcing at Adhiloka: direct purchase at four collection stations, household-level traceability recorded at grading, and no clearing for supply.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark, Kerinci',
};

export type Step = { n: string; title: string; body: string };

export const SOURCING_CHAIN: Step[] = [
  {
    n: '01',
    title: 'Forest garden',
    body: 'Benzoin is tapped from standing trees in mixed gardens, on a cycle the household sets. Nothing is cleared and nothing is planted in monoculture for us.',
  },
  {
    n: '02',
    title: 'Collection station',
    body: 'The household brings the lot to one of four stations and is paid there, in full, at or above the posted floor price. Household and collection point are written down at this moment.',
  },
  {
    n: '03',
    title: 'First grading',
    body: 'A first sort happens at the station. Identity travels with the lot; it is not merged into a regional pool.',
  },
  {
    n: '04',
    title: 'Medan grading floor',
    body: 'Hand sorting into three qualities. The household record is carried forward onto the graded lot rather than dropped at the door.',
  },
  {
    n: '05',
    title: 'Extraction',
    body: 'Distillation, resinoid or absolute, by grade. Lots are not blended across grades to hit a specification.',
  },
  {
    n: '06',
    title: 'Drum and document',
    body: 'The finished material ships with its batch certificate, GC trace and the collection point it came from. If we cannot produce that chain, the drum does not leave.',
  },
];

export const SOURCING_PASSAGES: Passage[] = [
  {
    id: 'direct',
    eyebrow: 'Direct purchase',
    title: 'No consolidators in the middle',
    body: 'The moment a lot passes through a consolidator, two things are lost: the identity of the household and any control over what they were paid. Buying at our own stations costs more to run than buying at the port, and it is the only version of this business where the words on this page can be checked.',
    points: [
      'Four stations: Sibolga, Tarutung, Takengon, Medan intake',
      'Payment direct to the household, at the station',
      'Consolidator purchase used for nothing in the benzoin range',
    ],
    caption: 'benzoin intake, Sibolga',
    image: 'material-benzoin',
  },
  {
    id: 'land',
    eyebrow: 'Land',
    title: 'Nothing has been cleared to supply us',
    body: 'Our materials come from mixed forest gardens and smallholder plots that predate our purchase agreements. We have never financed clearing and we do not buy from land converted after the register opened in 2011. Where a household wants to expand, we support additional tapping on existing trees before new planting.',
    points: [
      'No purchase from land converted after 2011',
      'Mixed gardens rather than monoculture plantation',
      'Yield increases sought from better tapping, not more hectares',
    ],
    cta: 'See our purpose',
    href: '/about/our-purpose/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
];
