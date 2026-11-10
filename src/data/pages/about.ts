import type { ImageKey } from '../images';
import type { LinkCard, PageIntro, Passage, Quote } from './types';

/* Naskah About, ditulis 10 Nov 2026 (permintaan pemilik: ringkas, bergaya
 * situs rumah fragrance, tidak menjelaskan berlebihan). Tanpa angka, tahun,
 * nama orang, alamat atau klaim kapasitas; semua itu menunggu formulir data
 * A, C, G dan H. */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const ABOUT_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Natural ingredients and perfumery, rooted in Indonesia',
  metaTitle: 'About',
  lede: 'Adhiloka brings the natural aromatic materials of Indonesia to those who create with scent, and composes fragrances of its own.',
  description:
    'Adhiloka is a house of natural ingredients and perfumery from Indonesia, working with resins, leaves, roots and spices and the people who grow them.',
  image: 'about-table',
  caption: 'three people talking over a laid table',
};

export const ABOUT_OPENING = [
  'We work with resins, leaves, roots and spices that have shaped perfumery for generations, and we stay close to the plants, the seasons and the growers behind them.',
  'From the plant to the finished ingredient, we follow each material with the same attention: how it is grown and gathered, how it is processed, and how it behaves in a fragrance. Our perfumery works with the same materials, so we know them from the inside of a formula.',
];

export const ABOUT_HOW = 'One thread, from the plant to the perfumer';

/* Kartu halaman anak, dipakai grid penutup hub About dan bilah "Explore
   More" di halaman anaknya. */
export const ABOUT_CARDS: LinkCard[] = [
  {
    title: 'Our Business',
    body: 'From the source to the finished fragrance: what we do, and how the parts fit together.',
    href: '/about/our-business/',
    image: 'material-benzoin',
  },
  {
    title: 'Our Purpose',
    body: 'Why we do what we do, and the values that guide us.',
    href: '/about/our-purpose/',
    image: 'purpose-generations',
  },
];

/* Kartu ketiga di hub About saja: menuju bagian lain situs, jadi tidak ikut
   SiblingCards (yang menyaring per bagian). */
export const ABOUT_MORE: LinkCard = {
  title: 'Sustainability',
  body: 'Caring for nature and for the people who tend it.',
  href: '/sustainability/',
  image: 'agroforest-canopy',
};

/* ── Our Business ────────────────────────────────────────────────────── */

export const BUSINESS_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our Business',
  lede: 'Our work follows natural ingredients along their whole journey, from the places where they grow to the fragrances they become.',
  description:
    'What Adhiloka does: sourcing and processing natural aromatic ingredients from Indonesia, supplying them to perfumery, and creating fragrances.',
  image: 'hero-benzoin-tears',
  caption: 'cinnamon bark',
};

export const BUSINESS_PASSAGES: Passage[] = [
  {
    id: 'source',
    eyebrow: 'Sourcing',
    title: 'It starts where the plants grow',
    body: 'Every ingredient begins with a plant, a place and the people who know both. We stay close to the source, so that we understand what we receive and where it comes from.',
    points: [
      'Close to growers and to the land',
      'Materials gathered in their season',
      'Origin kept in view from the start',
    ],
    cta: 'Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    caption: 'tree canopy seen from below',
    image: 'agroforest-canopy',
  },
  {
    id: 'processing',
    eyebrow: 'Processing',
    title: 'Turning plants into ingredients',
    body: 'Resins, leaves, roots and spices each ask for their own treatment. We choose the method that respects the character of the plant and brings out what perfumers look for.',
    points: [
      'A method chosen for each material',
      'The character of the plant preserved',
      'Attention at every step',
    ],
    cta: 'Technology',
    href: '/ingredients/technology/',
    caption: 'dried rhizome slices',
    image: 'fragrance-resin',
  },
  {
    id: 'ingredients',
    eyebrow: 'Ingredients',
    title: 'Naturals for those who create with scent',
    body: 'We supply natural aromatic ingredients to perfumers, fragrance houses and brands, together with the samples and information they need to work with confidence.',
    points: [
      'Resins, leaves, roots and spices',
      'Samples on request',
      'A direct line to our team',
    ],
    cta: 'Ingredients Catalog',
    href: '/ingredients/catalog/',
    caption: 'sorted benzoin resin tears',
    image: 'material-benzoin',
  },
  {
    id: 'perfumery',
    eyebrow: 'Perfumery',
    title: 'Fragrances shaped in dialogue',
    body: 'Our perfumery composes fragrances from the materials we know best, for fine fragrance, personal care and the home, in close dialogue with each client.',
    points: [
      'Fine fragrance',
      'Personal and home care',
      'Accords and bases',
    ],
    cta: 'Perfumery',
    href: '/perfumery/',
    caption: 'orange petals, close',
    image: 'fragrance-petal',
  },
];

/* ── Our Purpose ─────────────────────────────────────────────────────── */

export const PURPOSE_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our Purpose',
  lede: 'We exist to carry the nature of Indonesia, with care, to those who create with scent.',
  description:
    'The purpose and values of Adhiloka: growing together with nature, and bringing its ingredients to perfumery with care.',
  caption: 'tree canopy seen from below',
  image: 'agroforest-canopy',
};

export const PURPOSE_BODY = [
  'Every scent begins with a living plant and the hands that tend it. Our role is to bring both closer to the perfumer: to honour the plant, to respect the people who grow it, and to deliver its character intact.',
  'It is a simple idea, and it guides the choices we make: what we source, how we work, and who we work with.',
];

export const PURPOSE_VALUES: { title: string; body: string }[] = [
  {
    title: 'Respect for Nature',
    body: 'Our ingredients are gifts of the living world. We treat the land they come from with care.',
  },
  {
    title: 'Care for People',
    body: 'Behind every ingredient are people. We value fair and lasting relationships with those we work with.',
  },
  {
    title: 'Craft',
    body: 'We take the time to do things properly, from the first selection to the last detail.',
  },
  {
    title: 'Openness',
    body: 'We speak plainly about what we offer, and we listen closely to what our customers need.',
  },
];

export const PURPOSE_QUOTE: Quote = {
  text: 'To grow *together with nature*, and to share what it gives *with care*.',
  attribution: 'Adhiloka',
};

/* ── Diparkir: Our Leadership, Our History, Our Locations ────────────────
 *
 * Tiga halaman ini TIDAK terbit sejak 10 Nov 2026. Isinya dulu lorem (nama
 * pimpinan, tahun, kota), dan fakta semacam itu tidak boleh dikarang. Berkas
 * halamannya masih ada dengan awalan garis bawah, yang membuat Astro
 * melewatinya: about/_our-leadership/, about/_our-history.astro dan
 * about/_our-locations.astro. Rute lamanya dialihkan ke /about/ di
 * astro.config.mjs.
 *
 * Menerbitkan lagi: isi larik di bawah dengan data asli (formulir data G, H,
 * A3–A4), hapus garis bawah di nama berkasnya, cabut pengalihannya, lalu
 * kembalikan tautannya di site.ts (NAV), menu.ts dan SiteFooter.astro. */

export type Leader = { name: string; role: string; bio: string; shot: string; image?: ImageKey };
export const LEADERSHIP_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our Leadership',
  lede: '',
  description: '',
  caption: 'three people talking over a laid table',
  image: 'about-table',
};
export const LEADERSHIP: Leader[] = [];
export const LEADER_BODY: string[] = [];

/** Profil pimpinan ada di /about/our-leadership/<slug>/, slug dari nama. */
export const leaderSlug = (l: Leader) =>
  l.name
    .toLowerCase()
    .normalize('NFD')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-|-$/g, '');
export const leaderHref = (l: Leader) => `/about/our-leadership/${leaderSlug(l)}/`;

export const HISTORY_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our History',
  lede: '',
  description: '',
  caption: 'sorted benzoin resin tears',
  image: 'material-benzoin',
};
export type Era = { year: string; title: string; body: string };
export const HISTORY_TIMELINE: Era[] = [];
/** Pengelompokan tahun menjadi era untuk linimasa penuh ala Our Journey
 *  Adani. `years` merujuk `HISTORY_TIMELINE[].year`. */
export type EraGroup = { range: string; name: string; years: string[]; image?: ImageKey };
export const HISTORY_ERAS: EraGroup[] = [];

export const LOCATIONS_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our Locations',
  lede: '',
  description: '',
  caption: 'tree canopy seen from below',
  image: 'agroforest-canopy',
};
export type Site = {
  city: string;
  region: string;
  kind: string;
  body: string;
  detail: string[];
  shot: string;
  image?: ImageKey;
  /** Pulau/negara untuk pemilih wilayah peta Our Presence. */
  area: string;
  /** [bujur, lintang] kota, untuk titik peta. */
  coords: [number, number];
};
export const SITES: Site[] = [];
