import type { PageIntro } from './types';

export const CONTACT_INTRO: PageIntro = {
  eyebrow: 'Contact',
  title: 'Eius in nesciunt rem quo sunt rem aut.',
  metaTitle: 'Contact',
  lede: 'Maxime deserunt, doloremque, officia cumque eos nihil. Totam eiusmod nisi tempore ex beatae et est totam do cum cupiditate sint, sit ex illum.',
  description:
    'Commodi proident sequi: mollit delectus, reiciendis, ducimus veritatis mollit hic error excepturi, iure eiusmod ab minus, commodi, laborum sit veniam.',
  caption: 'sample dispatch bench',
  image: 'material-benzoin',
};

/* Satu-satunya kontak yang sudah pasti (2 Okt 2026). Alamat, nomor dan kantor
   lain menyusul dari formulir data A3–A6; empat kantor lama karangan dan
   sudah dicabut. */
export const OFFICES = [
  {
    role: 'General enquiries',
    city: 'Adhiloka Group',
    address: 'Samples, specifications, quotations and press.',
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
  'Custom processing', // DATA: B6, hapus kalau tidak menerima jasa olah
  'Supplier registration',
  'Press',
  'Other',
];
