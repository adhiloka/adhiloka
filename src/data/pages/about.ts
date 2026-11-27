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
  title: 'A family of businesses, rooted in Indonesia',
  metaTitle: 'About',
  lede: '',
  description:
    'Adhiloka Group brings together fragrance, marine delicacies and packaging, from Indonesia.',
  image: 'hero-woman-golden-light',
  focus: '50% 30%',
  caption: 'smiling woman in late afternoon sun',
};

/* Situs grup (26 Nov 2026): Who We Are ditulis untuk grup. How We Work
   dilepas dari semua halaman 27 Nov 2026 (pemilik). */
export const ABOUT_WHO =
  'Adhiloka Group brings together fragrance, marine delicacies and packaging. Each business works with its own materials and its own customers, and all of them share one way of working: stay close to the source and stand behind what we supply.';

/* Kartu halaman anak, dipakai grid penutup hub About dan bilah "Explore
   More" di halaman anaknya. */
export const ABOUT_CARDS: LinkCard[] = [
  { title: 'Our Businesses', href: '/our-businesses/', image: 'biz-overview' },
  { title: 'Our Purpose', href: '/about/our-purpose/', image: 'hero-misty-terraces' },
];

/* Kartu ketiga di hub About saja: menuju bagian lain situs, jadi tidak ikut
   SiblingCards (yang menyaring per bagian). */
export const ABOUT_MORE: LinkCard = {
  title: 'Sustainability',
  href: '/sustainability/',
  image: 'hero-hands-seedling',
};

/* ── Our Business ────────────────────────────────────────────────────── */

/* Diparkir 26 Nov 2026 (situs grup): halamannya jadi src/pages/about/
   _our-business.astro dan rutenya dialihkan ke /our-businesses/. Naskahnya
   disimpan untuk bahan bila halaman ini dipakai lagi. */

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
    body: 'Our work starts where the plants grow. We buy from growers and gatherers we know, follow each harvest through its season and choose the raw material by eye and by nose.',
    cta: 'Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    caption: 'rainforest seen from above',
    image: 'rainforest-aerial',
  },
  {
    id: 'processing',
    title: 'Processing',
    body: 'Every material asks for its own method. We distil leaves, roots and spices and extract resins, always looking to keep the scent of the plant as it was in the field.',
    cta: 'Technology',
    href: '/ingredients/technology/',
    caption: 'hands holding fresh green peppercorns',
    image: 'hero-hands-peppercorns',
  },
  {
    id: 'ingredients',
    title: 'Ingredients',
    body: 'Essential oils, resinoids and extracts for fragrance houses, independent perfumers and makers of scented products. Every ingredient is evaluated before it is released, and most conversations begin with a sample.',
    cta: 'Ingredient Catalog',
    href: '/ingredients/catalog/',
    caption: 'grower holding freshly picked lychees',
    image: 'hero-farmer-lychees',
  },
  {
    id: 'perfumery',
    title: 'Perfumery',
    body: 'Alongside our ingredients, we create fragrances for fine fragrance and consumer products. Our perfumers work closely with each client, from the first brief to the final formula, with the naturals we know best at the heart of the palette.',
    cta: 'Perfumery',
    href: '/perfumery/',
    caption: 'smelling a handful of dried flowers',
    image: 'hero-smelling-vial',
  },
];

/* ── Our Purpose ─────────────────────────────────────────────────────── */

export const PURPOSE_INTRO: PageIntro = {
  eyebrow: 'About Us',
  title: 'Our Purpose',
  lede: '',
  description:
    'The purpose and values of Adhiloka: growing together with nature, and bringing its ingredients to perfumery with care.',
  caption: 'golden terraced fields in morning mist',
  image: 'hero-misty-terraces',
  focus: '50% 55%',
};

export const PURPOSE_BODY = [
  'Every scent begins with a living plant and the hands that tend it. We look after the land our ingredients come from, keep fair and lasting ties with the people who grow them, and give each material the time it deserves. We call it growing together with nature.',
];

export const PURPOSE_VALUES: { title: string; body: string }[] = [
  {
    title: 'Respect for Nature',
    body: 'We take from the land only what it can give. Harvests follow the season and plants are given time to recover, so the land stays healthy for the growers who come after us.',
  },
  {
    title: 'Care for People',
    body: 'Our ingredients carry the work of many hands. We keep fair, lasting relationships with growers, gatherers and partners, and we value what they know.',
  },
  {
    title: 'Craft',
    body: 'Good naturals take time. We select, process and evaluate each material with patience, and keep to the methods that bring out its character.',
  },
  {
    title: 'Openness',
    body: 'We speak plainly about what we make and how we make it. Clients, growers and partners can expect a straight answer.',
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
