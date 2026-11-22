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
  { title: 'Partner with Us', href: '/contact/partners/', image: 'partner-hands-coffee', caption: 'four pairs of hands holding red coffee cherries' },
  { title: 'Contact Us', href: '/contact/', image: 'contact-phone-call', caption: 'smiling woman taking notes during a phone call' },
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
  description: 'Partner with Adhiloka in natural aromatic ingredients and perfumery.',
  caption: 'four pairs of hands holding red coffee cherries',
  image: 'partner-hands-coffee',
};

export const PARTNERS_PASSAGES: Passage[] = [
  {
    id: 'suppliers-partners',
    title: 'Suppliers & Partners',
    body: 'Every great ingredient is the work of many hands. If you share our care for the plant and the people who grow it, there is a place for you alongside us.',
    cta: 'Get in Touch',
    href: '/contact/?kind=partnership',
    caption: 'dried cloves in an open hand',
    image: 'cloves-in-hand',
  },
];
