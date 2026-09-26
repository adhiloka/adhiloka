import type { ImageKey } from '../images';
import type { CarouselSlide } from './types';

/* ── Hero ────────────────────────────────────────────────────────────── */

export type HeroSlide = {
  kind: 'photo';
  eyebrow: string;
  headline: string;
  sub?: string;
  shot: string;
  href: string;
  image?: ImageKey;
  bg?: string;
  stripe?: string;
};

/* Tiga slide foto dari hero versi awal. Slide pertama versi awal (video
   "All Natural.") sengaja dibuang; hero hanya memakai foto. */
export const HERO_SLIDES: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Est. 1840s',
    headline: 'Six Generations.',
    sub: 'Family-held since the 1840s, still buying benzoin from the Sumatran forests our great-great-grandfathers did.',
    shot: 'rose, fine fragrance materials',
    href: '/about/our-history/',
    image: 'hero-still-hall',
    bg: 'var(--plate-dark-1)',
    stripe: 'var(--plate-dark-1-stripe)',
  },
  {
    kind: 'photo',
    eyebrow: 'Eighteen Naturals',
    headline: 'Every Note.',
    shot: 'cassia bark, Kerinci',
    href: '/ingredients/catalog/',
    image: 'hero-benzoin-tears',
    bg: 'var(--plate-dark-2)',
    stripe: 'var(--plate-dark-2-stripe)',
  },
  {
    kind: 'photo',
    eyebrow: 'Sustainability',
    headline: 'Forest First.',
    shot: 'leaf, close',
    href: '/sustainability/',
    image: 'material-patchouli',
    bg: 'var(--plate-dark-3)',
    stripe: 'var(--plate-dark-3-stripe)',
  },
];

/* ── Karusel sebelum footer ──────────────────────────────────────────── */

/** Tipe slide-nya sudah dipakai halaman lain, jadi ia tinggal di types.ts. */
export type GetInTouchSlide = CarouselSlide;

/* Slide pertama memegang naskah "Our purpose" — dulu pita tersendiri di atas
   karusel ini, sekarang jadi pintu masuknya. Dia satu-satunya slide yang
   memakai foto sungguhan; sisanya masih pelat hatch berketerangan. */
export const GET_IN_TOUCH: GetInTouchSlide[] = [
  {
    title: 'Our purpose',
    body: 'The naturals trade only works if the forest and the families who tend it are still there in fifty years. That conviction shapes every purchase we make, from the price posted at the collection station to the fact that a benzoin tree is tapped rather than felled. Growing responsibly, sourcing transparently and refining in our own works is how we intend to keep supplying this industry for another six generations.',
    cta: 'Our purpose',
    shot: 'two children running through a summer meadow at dusk',
    href: '/about/our-purpose/',
    image: 'purpose-generations',
    focus: '18% 50%',
  },
  {
    title: 'Get in touch',
    body: "Sourcing, sustainability and sample requests all reach a person rather than a queue. We'd like to hear from you.",
    cta: 'Contact us',
    shot: 'sample dispatch bench, Medan works',
    image: 'fragrance-resin',
    href: '/contact/',
    bg: 'var(--plate-sage)',
  },
  {
    title: 'Request a sample',
    body: 'Ten grams of any listed material, dispatched from Medan with its batch certificate and GC trace. Most requests leave within three working days.',
    cta: 'Request a sample',
    shot: 'ten-gram vials, ready to ship',
    image: 'material-ginger',
    href: '/contact/',
    bg: 'var(--plate-yellow)',
  },
  {
    title: 'Traceable to the household',
    body: 'Every benzoin lot carries the collection point and the family it came from, recorded at grading rather than reconstructed afterwards.',
    cta: 'Responsible sourcing',
    shot: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
    href: '/sustainability/responsible-sourcing/',
    bg: 'var(--plate-green)',
  },
  {
    title: 'Inside the Medan works',
    body: 'Two distillation halls, a resin grading floor and a fractionation line, all within a day of the gardens they draw from.',
    cta: 'See our locations',
    shot: 'still hall, Medan works',
    image: 'hero-benzoin-tears',
    href: '/about/our-locations/',
    bg: 'var(--plate-sage)',
  },
  {
    title: 'Composed at the bench',
    body: 'Accords and functional bases built from naturals we grew ourselves, developed close enough to the source to smell a lot the week it comes in.',
    cta: 'See the perfumery',
    shot: 'perfumery bench, Medan works',
    image: 'fragrance-petal',
    href: '/perfumery/',
    bg: 'var(--plate-green)',
  },
  {
    title: 'Eighteen naturals',
    body: 'Resins, leaf oils, roots and spices, each with a published specification, seasonal availability and extraction route.',
    cta: 'Browse the catalog',
    shot: 'sorted benzoin tears',
    image: 'material-benzoin',
    href: '/ingredients/catalog/',
    bg: 'var(--plate-amber)',
  },
];
