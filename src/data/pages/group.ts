import type { PageIntro } from './types';
import { NATURALS_OPENING } from './naturals-line';
import { SEAFOOD_OPENING } from './seafood-line';
import { PACKAGING_OPENING } from './packaging-line';

/* Halaman Our Businesses (situs grup, pemilik 26 Nov 2026), pola
 * adani.com/businesses: banner, pembuka, lalu satu blok bergambar per lini.
 * Nama, alamat, dan foto lini dari businesses.ts; di sini hanya naskahnya.
 * Menggantikan /about/our-business/ (dialihkan ke sini). */

export const OUR_BUSINESSES_INTRO: PageIntro = {
  title: 'Our Businesses',
  lede: '',
  description:
    'Adhiloka Group: natural ingredients and perfumery, fine seafood, and packaging and plastic solutions, supplied from Indonesia.',
  image: 'biz-overview',
  caption: 'container ship at sea in warm evening light',
};

export const OUR_BUSINESSES_OPENING = {
  title: 'One Group, Rooted in Indonesia',
  body: 'Adhiloka Group brings together three businesses with one way of working. We know where every product comes from, we check it before it leaves us, and we stay with our customers long after the first order.',
};

/* Naskah blok tiap lini = naskah pembuka halaman lini itu (naskah pemilik,
   komentar review 28 Nov 2026), supaya Our Businesses dan halaman lini sama. */
export const BUSINESS_BODY: Record<string, string> = {
  naturals: NATURALS_OPENING.paragraphs.join(' '),
  seafood: SEAFOOD_OPENING.paragraphs.join(' '),
  packaging: PACKAGING_OPENING.paragraphs.join(' '),
};
