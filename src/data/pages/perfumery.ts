import type { CarouselSlide, LinkCard, PageIntro, Passage, Quote, Stat } from './types';
import type { HeroSlide } from './home';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const PERFUMERY_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'What we grow, we also compose.',
  metaTitle: 'Perfumery',
  lede: 'A small bench in Medan, working mostly with naturals we tapped, dried and distilled ourselves. Close enough to the gardens that a perfumer can smell a lot the week it comes in.',
  description:
    'The Adhiloka perfumery: fine fragrance accords and functional bases built from naturals sourced and distilled at our own works in Medan.',
  image: 'fragrance-petal',
  caption: 'petal, close',
};

export const PERFUMERY_STATS: Stat[] = [
  { value: '2019', label: 'Bench opened' },
  { value: '18', label: 'House naturals on the palette' },
  { value: '1 day', label: 'From garden to bench' },
];

export const PERFUMERY_OPENING = [
  'Most fragrance houses buy their naturals. We tap ours, and the difference shows up in the way the bench works: a perfumer here can ask why a benzoin lot smells drier this year and get the answer from the person who graded it, in the same building, the same afternoon.',
  'That closeness is the whole argument for a perfumery this small. We are not trying to compete on catalog breadth. We are trying to be the house that can build an accord around a material and then guarantee that material season after season, because we own every step between the tree and the drum.',
];

export const PERFUMERY_CARDS: LinkCard[] = [
  {
    title: 'Fine Fragrance',
    body: 'Accords built for perfumers, led by naturals and kept deliberately legible. Bespoke work from brief to production formula.',
    href: '/perfumery/fine-fragrance/',
  },
  {
    title: 'Fragrance Innovation',
    body: 'What we are working on at the bench: extraction routes that change a material, and the analytical work that proves it.',
    href: '/perfumery/fragrance-innovation/',
  },
];

/* ── Fine Fragrance ────────────────────────────────────────── */

export const FINE_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Fine Fragrance',
  lede: 'Accords led by naturals, built to be read rather than decoded. Most of what is in them, we grew.',
  description:
    'Adhiloka fine fragrance: naturals-led accords, bespoke creation from brief to production formula, and a palette drawn from our own eighteen materials.',
  image: 'fragrance-resin',
  caption: 'dried rhizome',
};

export const FINE_PASSAGES: Passage[] = [
  {
    id: 'palette',
    eyebrow: 'The palette',
    title: 'Eighteen naturals, and the discipline to use few of them at once',
    body: 'Our accords are built around materials we can vouch for down to the household that tapped them. That constraint is productive: instead of reaching for a captive to fill a gap, the bench works the gap out of the structure. The results are simpler formulas than the industry standard, and easier ones to hold steady across seasons.',
    points: [
      'House naturals first, bought-in materials only where the structure needs them',
      'Formulas written to survive a difficult crop year',
      'Every natural traceable to a collection point',
    ],
    caption: 'cassia bark, Kerinci',
    image: 'hero-benzoin-tears',
  },
  {
    id: 'bespoke',
    eyebrow: 'Bespoke creation',
    title: 'From a brief to a formula your factory can actually run',
    body: 'Bespoke work starts with a conversation about volume and price, not about mood boards. We would rather tell you in week one that a brief needs more benzoin than a season can supply than discover it after a launch date is set. From there: trials, evaluation, stability, and a production formula with a supply commitment attached to it.',
    points: [
      'First trials within three weeks of an agreed brief',
      'Stability and compliance handled before sign-off',
      'Supply commitment written against the formula',
    ],
    cta: 'Start a brief',
    href: '/contact/',
    caption: 'petal, close',
    image: 'fragrance-petal',
  },
  {
    id: 'functional',
    eyebrow: 'Functional bases',
    title: 'Personal care, home care and fabric, on the same palette',
    body: 'The same naturals behave very differently in a surfactant base than in alcohol, and a great deal of the bench work is figuring out which of them survive. What we publish for functional application is the shortlist that does: materials with the substantivity and cost-in-use to hold up in a real product.',
    points: [
      'Personal care, home care, fabric and oral',
      'Cost-in-use worked out before the accord, not after',
      'Malodour and substantivity data on request',
    ],
    caption: 'bloom, close',
    image: 'fragrance-bloom',
  },
];

export const FINE_QUOTE: Quote = {
  text: 'The best thing about working here is that when a material changes, nobody has to guess why. Somebody in this building watched it happen.',
  attribution: 'Head of Perfumery, Adhiloka',
};

/* ── Fragrance Innovation ──────────────────────────────────── */

export const INNOVATION_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Fragrance Innovation',
  lede: 'Innovation here means getting more out of a tree without asking more of it. Extraction routes, analytical work, and the occasional failed experiment we keep talking about.',
  description:
    'Fragrance innovation at Adhiloka: new extraction routes, fractionation work, analytical control and naturals research carried out at the Medan works.',
  caption: 'fractionation line, Medan works',
  image: 'material-ginger',
};

export const INNOVATION_PASSAGES: Passage[] = [
  {
    id: 'fractionation',
    eyebrow: 'Fractionation',
    title: 'One material, several usable characters',
    body: 'A benzoin resinoid is not one smell. Fractionating it separates the sweet vanillic top from the heavier balsamic body, and gives perfumers two materials where they had one — without a single additional tree being tapped. The line went in during 2019 and now runs across resins, patchouli and nutmeg.',
    points: [
      'Vanillic and balsamic benzoin fractions',
      'Low-iron patchouli fractions for pale bases',
      'Terpene-reduced citrus and leaf oils',
    ],
    caption: 'fractionation line, Medan works',
    image: 'material-nutmeg',
  },
  {
    id: 'analysis',
    eyebrow: 'Analytical control',
    title: 'The specification is only worth what the instrument says',
    body: 'Every lot is run before it is released, and the trace goes out with the sample rather than sitting in a file. Where a season pushes a material outside its usual range, we publish the range it actually landed in. It costs us the occasional sale and it has never once cost us a customer.',
    points: [
      'GC-MS on every released lot',
      'Trace and batch certificate shipped with samples',
      'Season ranges published, including the bad years',
    ],
    caption: 'laboratory, Medan works',
    image: 'material-patchouli',
  },
  {
    id: 'research',
    eyebrow: 'Naturals research',
    title: 'Work in progress, described honestly',
    body: 'Two things are open at the bench right now. The first is a cold-process route for cananga that keeps more of the green top than steam does. The second is a longer study on whether tapping intervals change the vanillin profile in benzoin — a question the households have opinions about and the literature does not. Neither is finished. Both will be published either way.',
    points: [
      'Cold-process cananga: in trial',
      'Tapping interval study: third season of data',
      'Findings published whether or not they are useful to us',
    ],
    cta: 'Talk to the bench',
    href: '/contact/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
];

/* ── Halaman hub: hero + karusel ──────────────────────────────────────────
   Bentuk yang sama dengan halaman hub About. Fotonya, keterangannya, dan
   naskah tiap slide diambil dari data halaman ini sendiri — hero memakai foto
   PERFUMERY_INTRO, tiap slide memakai foto dan keterangan halaman anaknya.

   "Creative by nature" bukan kalimat baru: itu tagline Perfumery yang sudah
   dipakai di dua foto besar halaman depan. */
export const PERFUMERY_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Perfumery',
    headline: 'Creative by Nature.',
    shot: 'petal, close',
    href: '/perfumery/fine-fragrance/',
    image: 'fragrance-petal',
  },
];

export const PERFUMERY_SLIDES: CarouselSlide[] = [
  {
    title: 'Fine Fragrance',
    body: 'Accords built for perfumers, led by naturals and kept deliberately legible. Bespoke work from brief to production formula.',
    cta: 'See fine fragrance',
    shot: 'dried rhizome',
    href: '/perfumery/fine-fragrance/',
    image: 'fragrance-resin',
  },
  {
    title: 'Fragrance Innovation',
    body: 'What we are working on at the bench: extraction routes that change a material, and the analytical work that proves it.',
    cta: 'See the bench work',
    shot: 'fractionation line, Medan works',
    image: 'material-ginger',
    href: '/perfumery/fragrance-innovation/',
    bg: 'var(--plate-sage)',
  },
];
