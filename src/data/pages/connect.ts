import type { LinkCard, PageIntro, Passage } from './types';

/* Menu umum "Connect" (pemilik, 13 Nov 2026): Contact tidak lagi berdiri
 * sendiri di menu, tetapi jadi salah satu isi bersama Careers, Become a
 * Supplier dan Partner with Us. "Life at Adhiloka" dilepas. Halamannya di
 * bawah /contact/ supaya remah, menu aktif dan Explore More ikut sendiri.
 * Naskah umum gaya rumah fragrance: tanpa lowongan, angka, nama atau
 * sertifikat. Tombol membawa ?kind= ke formulir kontak.
 *
 * 22 Nov 2026 (komentar pemilik): Become a Supplier digabung ke Partner with
 * Us (/contact/suppliers/ dialihkan ke /contact/partners/), dan kedua halaman
 * dipersingkat jadi satu blok saja: formalitas, tidak menjelaskan berlebihan. */

export const CONNECT_CARDS: LinkCard[] = [
  { title: 'Careers', href: '/contact/careers/', image: 'lab-technician', caption: 'technician at work in a laboratory' },
  { title: 'Partner with Us', href: '/contact/partners/', image: 'chili-pickers', caption: 'two growers picking chillies' },
  { title: 'Contact Us', href: '/contact/', image: 'tagged-sample-bottles', caption: 'a hand reaching for tagged amber sample bottles' },
];

/* ── Careers ─────────────────────────────────────────────────────────── */

export const CAREERS_INTRO: PageIntro = {
  eyebrow: 'Connect',
  title: 'Careers',
  lede: '',
  description: 'Careers at Adhiloka, in natural aromatic ingredients and perfumery.',
  caption: 'technician at work in a laboratory',
  image: 'lab-technician',
};

export const CAREERS_PASSAGES: Passage[] = [
  {
    id: 'working-here',
    title: 'Working at Adhiloka',
    body: 'We welcome applications at any time. Send your CV and a short note, and we will be in touch when a role fits.',
    cta: 'Send Your CV',
    href: '/contact/?kind=careers',
    caption: 'researcher at work in a bright laboratory',
    image: 'lab-woman-hall',
  },
];

/* ── Partner with Us (termasuk pemasok) ──────────────────────────────── */

export const PARTNERS_INTRO: PageIntro = {
  eyebrow: 'Connect',
  title: 'Partner with Us',
  lede: '',
  description: 'Supply raw materials to Adhiloka, or partner with us in distribution and research.',
  caption: 'two growers picking chillies',
  image: 'chili-pickers',
};

export const PARTNERS_PASSAGES: Passage[] = [
  {
    id: 'suppliers-partners',
    title: 'Suppliers & Partners',
    body: 'We work with growers, distillers, distributors and research partners. Tell us what you offer and we will be in touch.',
    cta: 'Get in Touch',
    href: '/contact/?kind=partnership',
    caption: 'amber bottles on a shelf',
    image: 'amber-bottle-shelf',
  },
];
