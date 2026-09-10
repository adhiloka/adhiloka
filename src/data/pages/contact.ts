import type { PageIntro } from './types';
import type { HeroSlide } from './home';

export const CONTACT_INTRO: PageIntro = {
  eyebrow: 'Contact',
  title: 'Talk to somebody who has seen the lot.',
  metaTitle: 'Contact',
  lede: 'Sample requests, quotations, bespoke briefs and press. Every message here reaches a person at the works or the commercial desk, not a queue.',
  description:
    'Contact Adhiloka Group: sample requests, quotations, bespoke perfumery briefs and press enquiries, with offices in Medan, Jakarta, Sibolga and Grasse.',
  caption: 'sample dispatch bench, Medan works',
  image: 'material-benzoin',
};

export const OFFICES = [
  {
    role: 'Head office & works',
    city: 'Medan',
    address: 'Jl. Imam Bonjol 21, Medan 20112, North Sumatra, Indonesia',
    contact: '+62 61 4520 118',
    href: 'tel:+62614520118',
  },
  {
    role: 'Commercial & export',
    city: 'Jakarta',
    address: 'Menara Sudirman, Jl. Jend. Sudirman Kav. 60, Jakarta 12190',
    contact: 'sourcing@adhiloka.com',
    href: 'mailto:sourcing@adhiloka.com',
  },
  {
    role: 'Collection station',
    city: 'Sibolga',
    address: 'Jl. Pelabuhan Lama, Sibolga 22513, North Sumatra',
    contact: 'stations@adhiloka.com',
    href: 'mailto:stations@adhiloka.com',
  },
  {
    role: 'Europe representation',
    city: 'Grasse',
    address: '14 avenue Victoria, 06130 Grasse, France',
    contact: 'europe@adhiloka.com',
    href: 'mailto:europe@adhiloka.com',
  },
];

export const ENQUIRY_KINDS = [
  'Sample request',
  'Volume quotation',
  'Bespoke creation',
  'Bespoke extraction',
  'Partnership',
  'Press',
];

/* ── Hero halaman ─────────────────────────────────────────────────────────
   Tanpa Discover: satu-satunya tujuan dari sini adalah formulir tepat di bawah,
   dan panah bawah sudah mengantar ke sana. HeroSlide.href dibiarkan kosong dan
   Hero tidak merender tombolnya.

   Fotonya satu-satunya di pustaka yang berisi orang, dan halaman ini memang
   soal berbicara dengan orang. */
export const CONTACT_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Contact',
    headline: 'Talk to Somebody.',
    shot: 'three people talking over a laid table',
    href: '',
    image: 'about-table',
  },
];
