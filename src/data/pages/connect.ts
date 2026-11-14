import type { LinkCard, PageIntro, Passage } from './types';

/* Menu umum "Connect" (pemilik, 13 Nov 2026): Contact tidak lagi berdiri
 * sendiri di menu, tetapi jadi salah satu isi bersama Careers, Become a
 * Supplier dan Partner with Us. "Life at Adhiloka" dilepas. Halamannya di
 * bawah /contact/ supaya remah, menu aktif dan Explore More ikut sendiri.
 * Naskah umum gaya rumah fragrance: tanpa lowongan, angka, nama atau
 * sertifikat. Tombol membawa ?kind= ke formulir kontak. */

export const CONNECT_CARDS: LinkCard[] = [
  { title: 'Careers', href: '/contact/careers/', image: 'perfume-workshop', caption: 'perfumery bench seen from above' },
  { title: 'Become a Supplier', href: '/contact/suppliers/', image: 'cloves-in-hand', caption: 'dried cloves in an open hand' },
  { title: 'Partner with Us', href: '/contact/partners/', image: 'amber-bottles', caption: 'two amber glass bottles' },
];

/* ── Careers ─────────────────────────────────────────────────────────── */

export const CAREERS_INTRO: PageIntro = {
  eyebrow: 'Connect',
  title: 'Careers',
  lede: '',
  description:
    'Careers at Adhiloka: work across sourcing, processing, quality and perfumery of natural aromatic ingredients.',
  caption: 'perfumery bench seen from above',
  image: 'perfume-workshop',
};

export const CAREERS_PASSAGES: Passage[] = [
  {
    id: 'working-here',
    title: 'Working at Adhiloka',
    body: 'Our work runs from the field to the formula, and most roles touch more than one step of it. We look for people who are curious about plants and careful with detail.',
    caption: 'perfumer blending with a dropper',
    image: 'perfumer-dropper',
  },
  {
    id: 'areas',
    title: 'Areas of Work',
    body: 'Sourcing, distillation and extraction, quality control, perfumery and customer service. Some roles are spent with growers and harvests, others with samples, formulas and clients.',
    caption: 'gloved hand holding a glass vial',
    image: 'lab-vials',
  },
  {
    id: 'apply',
    title: 'How to Apply',
    body: 'We welcome applications at any time, with a CV and a short note on the work you are looking for. We will be in touch when a role fits. Adhiloka never charges a fee to apply.',
    cta: 'Send Your CV',
    href: '/contact/?kind=careers',
    caption: 'smelling a handful of dried flowers',
    image: 'smelling-flowers',
  },
];

/* ── Become a Supplier ───────────────────────────────────────────────── */

export const SUPPLIERS_INTRO: PageIntro = {
  eyebrow: 'Connect',
  title: 'Become a Supplier',
  lede: '',
  description:
    'Supply natural raw materials to Adhiloka: resins, leaves, roots, barks, seeds and spices for perfumery.',
  caption: 'cloves sorted by hand on drying racks',
  image: 'cloves-sorting',
};

export const SUPPLIERS_PASSAGES: Passage[] = [
  {
    id: 'what-we-buy',
    title: 'What We Buy',
    body: 'Resins, leaves, roots, barks, seeds and spices for perfumery, and the essential oils and extracts made from them. We buy from growers, gatherers, cooperatives and distillers, as close to the source as we can.',
    caption: 'pieces of amber resin, close',
    image: 'resin-pieces',
  },
  {
    id: 'what-we-look-for',
    title: 'What We Look For',
    body: 'Material that is true to its species, harvested at the right time and handled with care, with clear information on where it was grown. We value suppliers who keep quality steady from one harvest to the next.',
    caption: 'dried cloves, close',
    image: 'cloves-dried',
  },
  {
    id: 'register',
    title: 'How to Register',
    body: 'A short introduction is enough to begin: the materials you offer, the season you harvest and the form you supply them in. We evaluate a sample before any first order, and registering is always free.',
    cta: 'Register as a Supplier',
    href: '/contact/?kind=supplier',
    caption: 'stacked burlap sacks',
    image: 'burlap-sacks',
  },
];

/* ── Partner with Us ─────────────────────────────────────────────────── */

export const PARTNERS_INTRO: PageIntro = {
  eyebrow: 'Connect',
  title: 'Partner with Us',
  lede: '',
  description:
    'Partner with Adhiloka in distribution, ingredient co-development, and research on aromatic plants.',
  caption: 'amber bottles on a shelf',
  image: 'amber-bottle-shelf',
};

export const PARTNERS_PASSAGES: Passage[] = [
  {
    id: 'distribution',
    title: 'Distribution',
    body: 'We work with distributors and trading houses who bring natural ingredients to perfumers and manufacturers in their own markets. Our partners have samples, product information and a direct line to us.',
    caption: 'container ship at sea at dusk',
    image: 'cargo-ship',
  },
  {
    id: 'co-development',
    title: 'Co-development',
    body: 'Some materials are best developed together: a new extract, a specific grade, or an ingredient prepared for one application. We work on projects like these with fragrance houses and manufacturers, from the first trial to regular supply.',
    caption: 'dried flowers in glass bottles',
    image: 'vials-dried-flowers',
  },
  {
    id: 'research',
    title: 'Research & Education',
    body: 'We welcome universities, institutes and perfumery schools working on aromatic plants, extraction or natural fragrance, and support their research and teaching with field knowledge and material from our sources.',
    cta: 'Partner with Us',
    href: '/contact/?kind=partnership',
    caption: 'glass jars of dried botanicals and golden oil',
    image: 'botanical-jars',
  },
];
