import type { ImageKey } from '../images';
import type { LinkCard, PageIntro, Passage, Quote } from './types';

/* Naskah About. Dipangkas 12 Nov 2026 (koreksi pemilik: terlalu banyak
 * menjelaskan dan terlalu banyak tingkat judul; aturannya di skill
 * adhiloka-voice, "Hierarki naskah situs"). Tiap bagian: judul + paling
 * banyak dua kalimat; kartu cukup judul. Tanpa angka, tahun, nama orang,
 * alamat atau klaim kapasitas; semua itu menunggu formulir data A, C, G, H. */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const ABOUT_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Natural ingredients and perfumery, rooted in Indonesia',
  metaTitle: 'About',
  lede: '',
  description:
    'Adhiloka is a house of natural ingredients and perfumery from Indonesia, working with resins, leaves, roots and spices and the people who grow them.',
  image: 'misty-hills',
  caption: 'misty green hills',
};

export const ABOUT_WHO =
  'Adhiloka is a house of natural ingredients and perfumery. We work with resins, leaves, roots and spices that have shaped perfumery for generations, and turn them into essential oils, resinoids and extracts for those who create with scent. We stay close to the plants, the seasons and the growers behind them, because the character of a natural ingredient is decided long before it reaches the bench.';

export const ABOUT_HOW =
  'One thread runs through everything we do, from the plant to the perfumer. We follow each material from the field through processing and evaluation, and we know the people who grow it. That continuity lets us answer for every ingredient we supply, and gives perfumers materials they can build on with confidence.';

/* Kartu halaman anak, dipakai grid penutup hub About dan bilah "Explore
   More" di halaman anaknya. */
export const ABOUT_CARDS: LinkCard[] = [
  { title: 'Our Business', href: '/about/our-business/', image: 'copper-still' },
  { title: 'Our Purpose', href: '/about/our-purpose/', image: 'purpose-generations' },
];

/* Kartu ketiga di hub About saja: menuju bagian lain situs, jadi tidak ikut
   SiblingCards (yang menyaring per bagian). */
export const ABOUT_MORE: LinkCard = {
  title: 'Sustainability',
  href: '/sustainability/',
  image: 'rainforest-aerial',
};

/* ── Our Business ────────────────────────────────────────────────────── */

export const BUSINESS_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our Business',
  lede: '',
  description:
    'What Adhiloka does: sourcing and processing natural aromatic ingredients, supplying them to perfumery, and creating fragrances.',
  image: 'perfume-workshop',
  caption: 'hands at work on a perfumery bench',
};

export const BUSINESS_PASSAGES: Passage[] = [
  {
    id: 'source',
    title: 'Sourcing',
    body: 'Our work starts where the plants grow. We buy from growers and gatherers we know, follow each harvest through its season, and select the raw material by eye and by nose before it travels any further. Knowing where an ingredient comes from is the first part of its quality.',
    cta: 'Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    caption: 'nutmeg fruit on the tree',
    image: 'nutmeg-on-tree',
  },
  {
    id: 'processing',
    title: 'Processing',
    body: 'Every material asks for its own method. Leaves, roots and spices are distilled, resins are extracted, and each process is adjusted to keep as much of the original scent as possible. The result is an ingredient that still smells of the plant it came from.',
    cta: 'Technology',
    href: '/ingredients/technology/',
    caption: 'fire beneath traditional distillation stills',
    image: 'still-fire',
  },
  {
    id: 'ingredients',
    title: 'Ingredients',
    body: 'We supply essential oils, resinoids and extracts to fragrance houses, independent perfumers and makers of scented products. Each one is evaluated before it is released, and a sample is usually the first step, so that the material can be tried in the formula before it is ordered.',
    cta: 'Ingredient Catalog',
    href: '/ingredients/catalog/',
    caption: 'amber glass bottles',
    image: 'amber-bottles',
  },
  {
    id: 'perfumery',
    title: 'Perfumery',
    body: 'Alongside our ingredients we create fragrances, for fine fragrance and for consumer products. Our perfumers work in dialogue with each client, from the first brief to the final formula, and draw on the natural materials we know best. A fragrance built this way carries the warmth and depth of real naturals.',
    cta: 'Perfumery',
    href: '/perfumery/',
    caption: 'smelling a handful of dried flowers',
    image: 'smelling-flowers',
  },
];

/* ── Our Purpose ─────────────────────────────────────────────────────── */

export const PURPOSE_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our Purpose',
  lede: '',
  description:
    'The purpose and values of Adhiloka: growing together with nature, and bringing its ingredients to perfumery with care.',
  caption: 'tree canopy seen from below',
  image: 'canopy-from-below',
};

export const PURPOSE_BODY = [
  'Every scent begins with a living plant and the hands that tend it. Our role is to bring both closer to the perfumer: to look after the land our ingredients come from, to keep fair and lasting ties with the people who grow them, and to prepare each material with the time it deserves. Growing together with nature is how we describe that work, and the standard we hold ourselves to.',
];

export const PURPOSE_VALUES: { title: string; body: string }[] = [
  {
    title: 'Respect for Nature',
    body: 'We take from the land only what it can give. Harvests follow the season and plants are given time to recover, so that the places our ingredients come from stay healthy for the next generation of growers.',
  },
  {
    title: 'Care for People',
    body: 'Our ingredients carry the work of many hands. We build fair and lasting relationships with growers, gatherers and partners, and we value their knowledge, much of it handed down over generations.',
  },
  {
    title: 'Craft',
    body: 'Good natural ingredients cannot be rushed. We take the time to select, process and evaluate each material properly, and keep the methods that bring out its true character.',
  },
  {
    title: 'Openness',
    body: 'We speak plainly about what we make and how we make it. Clients, growers and partners get a straight answer, and we listen closely before we act.',
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
