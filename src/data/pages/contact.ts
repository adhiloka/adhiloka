import type { PageIntro } from './types';

export const CONTACT_INTRO: PageIntro = {
  eyebrow: 'Contact',
  title: 'Samples, quotations or a fragrance project: tell us what you need and we will come back to you.',
  metaTitle: 'Contact',
  lede: 'We would be glad to hear from you.',
  description:
    'Contact Adhiloka for samples, specifications, quotations and fragrance projects.',
  caption: 'three people talking over a laid table',
  image: 'about-table',
};

/* Satu-satunya kontak yang sudah pasti (2 Okt 2026). Alamat, nomor dan kantor
   lain menyusul dari formulir data A3–A6; empat kantor lama karangan dan
   sudah dicabut. */
export const OFFICES = [
  {
    role: 'General enquiries',
    city: 'Adhiloka Group',
    address: 'Samples, specifications, quotations, fragrance projects and press.',
    contact: 'info@adhiloka.com',
    href: 'mailto:info@adhiloka.com',
  },
];

/* Jenis permintaan B2B. Tiga yang pertama juga dipilih otomatis lewat
   ?kind=sample|specification|quotation dari halaman bahan (contact-form.ts). */
export const ENQUIRY_KINDS = [
  'Sample request',
  'Specification & documents',
  'Quotation',
  'Bespoke fragrance',
  'Supplier registration',
  'Press',
  'Other',
];
