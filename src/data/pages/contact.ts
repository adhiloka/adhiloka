import type { PageIntro } from './types';
import type { HeroSlide } from './home';

export const CONTACT_INTRO: PageIntro = {
  eyebrow: 'Contact',
  title: 'Talk to somebody who has seen the lot.',
  metaTitle: 'Contact',
  lede: 'Aliqua expedita, architecto, aliquid tempor rem lorem. Quasi nostrum unde debitis et facere do cum nobis ut non aspernatur sunt, rem et eaque.',
  description:
    'Ratione deleniti optio: itaque nesciunt, laboriosam, aperiam molestias veniam cum atque cupidatat, sint ratione id nobis, laboris, debitis nam labore.',
  caption: 'sample dispatch bench',
  image: 'material-benzoin',
};

export const OFFICES = [
  {
    role: 'General enquiries',
    city: 'Adhiloka Group',
    address: 'Samples, quotations, bespoke briefs and press.',
    contact: 'info@adhiloka.com',
    href: 'mailto:info@adhiloka.com',
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
