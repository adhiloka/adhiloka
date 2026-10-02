import type { ImageKey } from '../images';
import type { CarouselSlide } from './types';

/* ── Hero ────────────────────────────────────────────────────────────── */

export type HeroSlide = {
  kind: 'video' | 'photo';
  eyebrow: string;
  headline: string;
  sub?: string;
  shot: string;
  href: string;
  image?: ImageKey;
  bg?: string;
  stripe?: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    kind: 'video',
    eyebrow: 'Natural Raw Materials',
    headline: 'All Natural.',
    shot: 'aerial, benzoin gardens',
    href: '/ingredients/',
  },
  {
    kind: 'photo',
    eyebrow: 'Direct Sourcing',
    headline: 'Grower to Drum.',
    sub: 'We buy directly from growers and process what we buy in our own facility.',
    shot: 'rose, fine fragrance materials',
    href: '/about/our-business/',
    image: 'hero-still-hall',
    bg: 'oklch(0.44 0.02 62)',
    stripe: 'oklch(0.385 0.02 60)',
  },
  {
    kind: 'photo',
    eyebrow: 'Indonesian Naturals',
    headline: 'Every Note.',
    shot: 'cassia bark',
    href: '/ingredients/catalog/',
    image: 'hero-benzoin-tears',
    bg: 'oklch(0.455 0.03 52)',
    stripe: 'oklch(0.4 0.028 50)',
  },
  {
    kind: 'photo',
    eyebrow: 'Sustainability',
    headline: 'Forest First.',
    shot: 'leaf, close',
    href: '/sustainability/',
    image: 'material-patchouli',
    bg: 'oklch(0.415 0.03 118)',
    stripe: 'oklch(0.36 0.03 116)',
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
    body: 'Quo sapiente autem quam nulla in sed soluta est nam mollitia eos esse do eum vitae atque ab porro saepe. Eius distinctio mollit autem corrupti ab quae, eius sed alias aliqua ab est voluptates tenetur in sit iure quia ea tenetur sunt do magnam cumque unde tempor. Eiusmod repudiandae, corrupti voluptatibus non officiis ea hic nam quasi in vel ex aliqua ab iure molestias sunt officiis sit ducimus non consectetur.',
    cta: 'Our purpose',
    shot: 'two children running through a summer meadow at dusk',
    href: '/about/our-purpose/',
    image: 'purpose-generations',
    focus: '18% 50%',
  },
  {
    title: 'Get in touch',
    body: "Sapiente, necessitatibus non dolore occaecat nam culpa in magnam beatae odit in sequi. Sit modi ea quos illo sed.",
    cta: 'Contact us',
    shot: 'sample dispatch bench',
    image: 'fragrance-resin',
    href: '/contact/',
    bg: 'oklch(0.872 0.016 80)',
  },
  {
    title: 'Request a sample',
    body: 'Qui omnis ea qui veniam mollitia, voluptates ipsa totam ipsa aut alias perferendis qui ab magni. Iste suscipit dicta soluta totam eveniet quos.',
    cta: 'Request a sample',
    shot: 'sample vials, ready to ship',
    image: 'material-ginger',
    href: '/contact/',
    bg: 'oklch(0.886 0.018 74)',
  },
  {
    title: 'Occaecati ea rem molestias',
    body: 'Dolor laborum sed dolores aut incididunt magna nam est magnam ut nisi odio, sapiente in numquam beatae eius exercitationem reiciendis.',
    cta: 'Responsible sourcing',
    shot: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
    href: '/sustainability/responsible-sourcing/',
    bg: 'oklch(0.864 0.02 118)',
  },
  {
    title: 'Facere eum omnis dolor',
    body: 'Cum consequuntur autem, in minim dolorem eaque cum ea voluptatibus eius, quo cumque ea est ab rem facilis vero duis ipsa.',
    cta: 'See our locations',
    shot: 'still hall',
    image: 'hero-benzoin-tears',
    href: '/about/our-locations/',
    bg: 'oklch(0.878 0.014 62)',
  },
  {
    title: 'Composed at the bench',
    body: 'Laborum sit laboriosam nulla quasi unde pariatur ut elit molestiae, excepteur eaque beatae ad aut beatae in rerum at eos sit iure ab saepe ab.',
    cta: 'See the perfumery',
    shot: 'perfumery bench',
    image: 'fragrance-petal',
    href: '/perfumery/',
    bg: 'oklch(0.858 0.024 96)',
  },
  {
    title: 'Indonesian naturals',
    body: 'Cillum, sint illo, lorem nam cillum, duis enim at occaecati voluptatibus, sapiente exercitation est recusandae dolor.',
    cta: 'Browse the catalog',
    shot: 'sorted benzoin tears',
    image: 'material-benzoin',
    href: '/ingredients/catalog/',
    bg: 'oklch(0.882 0.022 52)',
  },
];
