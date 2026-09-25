import type { ImageKey } from '../images';
import type { CarouselSlide, LinkCard, PageIntro, Passage, Quote, Stat } from './types';
import type { HeroSlide } from './home';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const ABOUT_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'A house built on one resin, and on the forests that give it.',
  metaTitle: 'About',
  lede: 'Six generations of the same family, buying benzoin from the same Sumatran uplands, refining it at our own works in Medan, and composing it at our own bench.',
  description:
    'Adhiloka is a family-held Indonesian house of natural aromatics: eighteen naturals grown across Sumatra, Java and Maluku, refined in Medan and composed at our perfumery bench.',
  image: 'about-table',
  caption: 'three people talking over a laid table',
};

export const ABOUT_STATS: Stat[] = [
  { value: '1840s', label: 'First benzoin ledger' },
  { value: '6', label: 'Generations in the trade' },
  { value: '18', label: 'Naturals in the catalog' },
  { value: '1,400+', label: 'Tapping households' },
];

export const ABOUT_OPENING = [
  'We are a natural aromatics house, not a distributor. Almost everything we sell passes through gardens we buy from directly, a grading floor we run ourselves, and stills we own. That is a slower way to work and a more expensive one, and it is the only way we know how to answer for what is in the drum.',
  'The trade began with benzoin. It still ends there, in the sense that benzoin is the material we are judged on and the one that taught us to treat a forest as a supplier rather than a resource. Seventeen other naturals joined it over a century and a half, but the method has not changed much: know the household, grade by hand, publish the specification.',
];

/* Hero halaman hub: satu slide, bentuk dan gerak yang sama dengan hero beranda
   — Ken Burns pelan, judul yang naik, Discover, dan panah bawah. Karena hanya
   satu slide, panah samping dan titik pemilih tidak dirender.

   "Family-Held." diambil apa adanya dari jeda penutup di beranda ("Family-held
   since the 1840s."), jadi tidak ada naskah baru yang dikarang di sini. */
export const ABOUT_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'About Adhiloka',
    headline: 'Family-Held.',
    shot: 'a chick among buttercups in long grass',
    href: '/about/our-history/',
    image: 'about-chick',
  },
];

/* Lima pintu ke halaman anak, sebagai pita berkarusel — bentuk yang sama
   dengan pita "Our purpose" di halaman depan. Dua di antaranya berfoto
   sungguhan; tiga sisanya memakai pelat hatch dengan keterangan foto yang
   dibutuhkan, dan itu keadaan yang sah di sistem desain ini. */
export const ABOUT_SLIDES: CarouselSlide[] = [
  {
    title: 'Our Business',
    body: 'Three activities under one roof — sourcing and extraction, ingredient supply, and perfumery — each feeding the next.',
    cta: 'See our business',
    shot: 'benzoin resin, hand-graded',
    href: '/about/our-business/',
    image: 'material-benzoin',
  },
  {
    title: 'Our Leadership',
    body: 'The people accountable for what leaves the works, and for the price paid at the collection point.',
    cta: 'Meet the leadership',
    shot: 'the grading floor, Medan works',
    image: 'about-table',
    href: '/about/our-leadership/',
    bg: 'var(--plate-sage)',
  },
  {
    title: 'Our Purpose',
    body: 'Why we buy the way we do, and what we are trying to leave standing in fifty years.',
    cta: 'Our purpose',
    shot: 'two children running through a summer meadow at dusk',
    href: '/about/our-purpose/',
    image: 'purpose-generations',
    focus: '18% 50%',
  },
  {
    title: 'Our History',
    body: 'From a single ledger in Sibolga to a fractionation line in Medan, in six generations.',
    cta: 'Read the history',
    shot: 'the first benzoin ledger, 1840s',
    image: 'material-benzoin',
    href: '/about/our-history/',
    bg: 'var(--plate-amber)',
  },
  {
    title: 'Our Locations',
    body: 'Where the gardens, the stations, the works and the desks are, and what each of them does.',
    cta: 'See our locations',
    shot: 'collection station, Tapanuli uplands',
    image: 'hero-agroforest',
    href: '/about/our-locations/',
    bg: 'var(--plate-green)',
  },
];

/* Blok pembuka, deret angka dan kartu di bawah ini TIDAK dipakai lagi sejak
   halaman hub About dipadatkan jadi tiga section (foto penuh, karusel, footer).
   Naskahnya disimpan di sini supaya tidak hilang — kalau nanti butuh tempat,
   isinya sudah siap pakai. */
export const ABOUT_CARDS: LinkCard[] = [
  {
    title: 'Our Business',
    body: 'Three activities under one roof — sourcing and extraction, ingredient supply, and perfumery — each feeding the next.',
    href: '/about/our-business/',
  },
  {
    title: 'Our Leadership',
    body: 'The people accountable for what leaves the works, and for the price paid at the collection point.',
    href: '/about/our-leadership/',
  },
  {
    title: 'Our Purpose',
    body: 'Why we buy the way we do, and what we are trying to leave standing in fifty years.',
    href: '/about/our-purpose/',
  },
  {
    title: 'Our History',
    body: 'From a single ledger in Sibolga to a fractionation line in Medan, in six generations.',
    href: '/about/our-history/',
  },
  {
    title: 'Our Locations',
    body: 'Where the gardens, the stations, the works and the desks are, and what each of them does.',
    href: '/about/our-locations/',
  },
];

/* ── Our Business ────────────────────────────────────────────────────── */

export const BUSINESS_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Business',
  lede: 'We buy from the forest, refine what we buy, and compose with what we refine. Each activity exists because the one before it needed it.',
  description:
    'Adhiloka runs three connected activities: natural raw material sourcing and extraction, ingredient supply to the fragrance industry, and its own perfumery bench.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark, Kerinci',
};

export const BUSINESS_PASSAGES: Passage[] = [
  {
    id: 'sourcing',
    eyebrow: 'Sourcing & extraction',
    title: 'The part of the business that starts in a forest garden',
    body: 'Benzoin is tapped from standing trees in mixed forest gardens, months apart, by households who have worked the same slopes for generations. We buy at four collection stations rather than through consolidators, which means we know the garden a lot came from and can price it before it is blended into anonymity. What arrives is graded by hand into three qualities on our own floor, then extracted at our works in Medan.',
    points: [
      'Four collection stations across North Sumatra and Aceh',
      'Hand grading before extraction, never after',
      'Steam distillation, resinoid and absolute routes in-house',
    ],
    cta: 'How we source',
    href: '/sustainability/responsible-sourcing/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
  {
    id: 'ingredients',
    eyebrow: 'Ingredient supply',
    title: 'Eighteen naturals, each with a published specification',
    body: 'Resins, leaf oils, roots, spices and one wood. Every material in the catalog carries its origin, extraction route, harvest window and a specification we hold across seasons rather than per lot. Buyers get the same document we work from, including the years a crop was difficult. Ten-gram samples leave Medan with a batch certificate and a GC trace.',
    points: [
      'Specification held across seasons, not per lot',
      'Batch certificate and GC trace with every sample',
      'Most sample requests dispatched within three working days',
    ],
    cta: 'Browse the catalog',
    href: '/ingredients/catalog/',
    caption: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    id: 'perfumery',
    eyebrow: 'Perfumery',
    title: 'A bench a day from the gardens it draws on',
    body: 'The perfumery exists because customers kept asking what our naturals could do together. It is a small operation by industry standards and deliberately so: accords and functional bases built mostly from materials we grew and distilled ourselves, developed close enough to the source that a perfumer can smell a lot the week it is tapped.',
    points: [
      'Fine fragrance accords and functional bases',
      'Bespoke work from brief to production formula',
      'Naturals-led palette, captives kept to a minimum',
    ],
    cta: 'See the perfumery',
    href: '/perfumery/',
    caption: 'petal, close',
    image: 'fragrance-petal',
  },
];

/* ── Our Leadership ──────────────────────────────────────────────────── */

export const LEADERSHIP_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Leadership',
  lede: 'A small group, most of whom have stood on the grading floor. Between them they answer for what leaves the works and for what is paid at the collection point.',
  description:
    'The people who lead Adhiloka Group: executive leadership across sourcing, operations, perfumery, sustainability and commerce.',
  caption: 'boardroom, Jl. Imam Bonjol',
  image: 'about-table',
};

export type Leader = { name: string; role: string; bio: string; shot: string };

/* PLACEHOLDER — jabatannya nyata, namanya belum. Isi dengan jajaran
   sebenarnya sebelum situs terbit; jangan biarkan nama karangan naik ke
   halaman leadership. */
export const LEADERSHIP: Leader[] = [
  {
    name: 'Nama belum ditentukan',
    role: 'Chief Executive',
    bio: 'Sixth generation of the founding family. Joined the grading floor before the office, and still signs off the benzoin grades personally each season.',
    shot: 'portrait, Medan',
  },
  {
    name: 'Nama belum ditentukan',
    role: 'Director of Sourcing',
    bio: 'Runs the four collection stations and the relationships behind them. Sets the floor price before each tapping season opens.',
    shot: 'portrait, Sibolga station',
  },
  {
    name: 'Nama belum ditentukan',
    role: 'Director of Operations',
    bio: 'Responsible for both distillation halls, the grading floor and the fractionation line, and for the specification held across them.',
    shot: 'portrait, still hall',
  },
  {
    name: 'Nama belum ditentukan',
    role: 'Head of Perfumery',
    bio: 'Leads the bench and the bespoke work. Trained in Grasse, returned to build a naturals-led palette from the source end.',
    shot: 'portrait, weighing room',
  },
  {
    name: 'Nama belum ditentukan',
    role: 'Head of Sustainability',
    bio: 'Holds the traceability record and the household register, and audits both against what the stations actually paid.',
    shot: 'portrait, agroforest',
  },
  {
    name: 'Nama belum ditentukan',
    role: 'Commercial Director',
    bio: 'Export, quotation and the Grasse representation. The first call for most buyers outside Indonesia.',
    shot: 'portrait, Jakarta office',
  },
];

/* ── Our Purpose ─────────────────────────────────────────────────────── */

export const PURPOSE_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Purpose',
  lede: 'The naturals trade only works if the forest and the families who tend it are still there in fifty years. Everything we do is downstream of that sentence.',
  description:
    'The purpose of Adhiloka Group: keeping the forest and the households who tend it viable, so the naturals trade still exists in fifty years.',
  caption: 'kemenyan agroforest canopy',
  image: 'agroforest-canopy',
};

export const PURPOSE_BODY = [
  'A benzoin tree is tapped, not felled. That single fact is why the Tapanuli uplands still have forest on them, and it is also why the material is expensive, slow and occasionally unavailable. A house that wants cheap benzoin every year will eventually get it by pushing someone to clear and replant. We would rather have a difficult season.',
  'So the purpose is not a statement about nature. It is a purchasing discipline: pay a floor price agreed before the season rather than after, buy at the station rather than through a consolidator, and keep the household attached to the lot all the way to the drum. Those three habits cost us margin, and they are the reason the gardens are still worth tending.',
];

export const PURPOSE_VALUES: { title: string; body: string }[] = [
  {
    title: 'Answer for the lot',
    body: 'Every drum can be walked back to a collection point and a household. If it cannot, we do not ship it.',
  },
  {
    title: 'Price before the season',
    body: 'A floor price agreed while there is still time to plan is worth more to a tapper than a good price offered at harvest.',
  },
  {
    title: 'Grade by hand',
    body: 'Machines sort faster and worse. Three qualities, sorted by people who have done it for years, before anything reaches a still.',
  },
  {
    title: 'Publish the difficult years',
    body: 'The specification says what a bad season did to the vanillin range. Buyers plan better with the truth than with an average.',
  },
];

export const PURPOSE_QUOTE: Quote = {
  text: 'We are not trying to grow quickly. We are trying to be the house still buying from these slopes when the people tapping them now have grandchildren.',
  attribution: 'Adhiloka Group',
};

/* ── Our History ─────────────────────────────────────────────────────── */

export const HISTORY_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our History',
  lede: 'One ledger in Sibolga, six generations, and a stubborn refusal to leave the material that started it.',
  description:
    'The history of Adhiloka Group, from a benzoin ledger in 1840s Sibolga to a fractionation line and perfumery bench in Medan.',
  caption: 'still hall, Medan works',
  image: 'material-benzoin',
};

export type Era = { year: string; title: string; body: string };

export const HISTORY_TIMELINE: Era[] = [
  {
    year: '1840s',
    title: 'A ledger in Sibolga',
    body: 'The family begins buying benzoin at the port, on credit advanced to tappers before the season. The ledger survives, and the terms written in it are close to the ones we still use.',
  },
  {
    year: '1898',
    title: 'First collection station',
    body: 'A permanent buying post opens upland, cutting the consolidators out of the chain and putting the family in front of the households for the first time.',
  },
  {
    year: '1931',
    title: 'The first still',
    body: 'A single copper still in Medan. Until then everything left Sumatra as raw resin; from here the house sells what it has refined itself.',
  },
  {
    year: '1968',
    title: 'Beyond benzoin',
    body: 'Patchouli, citronella and clove leaf enter the book as the third generation takes over. The catalog reaches nine materials before the decade ends.',
  },
  {
    year: '1994',
    title: 'The Medan works',
    body: 'Two distillation halls and a dedicated resin grading floor replace the old site. Capacity triples; the hand grading does not change.',
  },
  {
    year: '2011',
    title: 'Traceability to the household',
    body: 'The household register begins. Every benzoin lot from this point carries its collection point and the family it came from, recorded at grading rather than reconstructed later.',
  },
  {
    year: '2019',
    title: 'Fractionation and the bench',
    body: 'A fractionation line and a small perfumery open in the same year, so the house can answer both what a material is and what it can do.',
  },
  {
    year: 'Today',
    title: 'Eighteen naturals, six generations',
    body: 'Resins, leaf oils, roots, spices and one wood, supplied to fine fragrance and functional houses across four continents, still from the same uplands.',
  },
];

/* ── Our Locations ───────────────────────────────────────────────────── */

export const LOCATIONS_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Locations',
  lede: 'Gardens, stations, works and desks. Almost everything upstream of the drum sits within a day of everything else.',
  description:
    'Adhiloka locations: collection stations across North Sumatra and Aceh, the Medan works, and commercial offices in Jakarta and Grasse.',
  caption: 'Tapanuli benzoin gardens',
  image: 'hero-agroforest',
};

export type Site = {
  city: string;
  region: string;
  kind: string;
  body: string;
  detail: string[];
  shot: string;
  image?: ImageKey;
};

export const SITES: Site[] = [
  {
    city: 'Medan',
    region: 'North Sumatra',
    kind: 'Works & head office',
    body: 'Two distillation halls, the resin grading floor, the fractionation line and the perfumery bench, plus the desks that answer for all of it.',
    detail: ['Steam distillation', 'Resinoid & absolute', 'Fractionation', 'Perfumery bench'],
    shot: 'still hall, Medan works',
    image: 'fragrance-resin',
  },
  {
    city: 'Sibolga',
    region: 'North Sumatra',
    kind: 'Collection station',
    body: 'The oldest post in the network and the closest to the benzoin uplands. Grading starts here before anything moves to Medan.',
    detail: ['Benzoin intake', 'First grading', 'Household register'],
    shot: 'benzoin intake, Sibolga',
    image: 'material-benzoin',
  },
  {
    city: 'Tarutung',
    region: 'North Sumatra',
    kind: 'Collection station',
    body: 'Serves the Tapanuli forest gardens directly. Floor prices for the season are posted here before tapping begins.',
    detail: ['Benzoin intake', 'Season pricing', 'Tapper training'],
    shot: 'collection post, Tarutung',
    image: 'agroforest-canopy',
  },
  {
    city: 'Takengon',
    region: 'Aceh',
    kind: 'Collection station',
    body: 'Patchouli and citronella country. Wet leaf is bought and dried locally rather than trucked green across the province.',
    detail: ['Patchouli intake', 'Local drying', 'Field distillation'],
    shot: 'drying floor, Takengon',
    image: 'material-patchouli',
  },
  {
    city: 'Jakarta',
    region: 'Java',
    kind: 'Commercial & export',
    body: 'Quotation, documentation and export. The desk most buyers deal with day to day.',
    detail: ['Export documentation', 'Quotation', 'Logistics'],
    shot: 'commercial office, Jakarta',
    image: 'hero-benzoin-tears',
  },
  {
    city: 'Grasse',
    region: 'France',
    kind: 'Europe representation',
    body: 'A single office keeping European customers within an hour of a person who knows the crop, not a timezone away from one.',
    detail: ['Customer liaison', 'Sample handling', 'Evaluation'],
    shot: 'representation office, Grasse',
    image: 'hero-still-hall',
  },
];
