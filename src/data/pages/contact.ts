import type { PageIntro } from './types';

export const CONTACT_INTRO: PageIntro = {
  eyebrow: 'Contact',
  title: 'Contact',
  metaTitle: 'Contact',
  lede: '',
  description:
    'Contact Adhiloka for samples, specifications, quotations and fragrance projects.',
  caption: 'a hand reaching for tagged amber sample bottles',
  image: 'tagged-sample-bottles',
};

/* Satu-satunya kontak yang sudah pasti (2 Okt 2026). Alamat, nomor dan kantor
   lain menyusul dari formulir data A3–A6; empat kantor lama karangan dan
   sudah dicabut. */
export const OFFICES = [
  {
    role: 'General enquiries',
    city: 'Adhiloka Group',
    address: 'Samples, quotations, fragrance projects and press.',
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
  'Partnership',
  'Careers',
  'Press',
  'Other',
];
