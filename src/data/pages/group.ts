import type { PageIntro } from './types';

/* Halaman Our Businesses (situs grup, pemilik 26 Nov 2026), pola
 * adani.com/businesses: banner, pembuka, lalu satu blok bergambar per lini.
 * Nama, alamat, dan foto lini dari businesses.ts; di sini hanya naskahnya.
 * Menggantikan /about/our-business/ (dialihkan ke sini). */

export const OUR_BUSINESSES_INTRO: PageIntro = {
  title: 'Our Businesses',
  lede: '',
  description:
    'Adhiloka Group: fragrance, marine delicacies and plastics, supplied from Indonesia.',
  image: 'biz-overview',
  caption: 'container ship at sea in warm evening light',
};

export const OUR_BUSINESSES_OPENING = {
  title: 'One Group, Rooted in Indonesia',
  body: 'Adhiloka Group brings together three businesses with one way of working. We know where every product comes from, we check it before it leaves us, and we stay with our customers long after the first order.',
};

/* Naskah blok tiap lini, urutan sama dengan BUSINESSES. */
export const BUSINESS_BODY: Record<string, string> = {
  naturals:
    'Essential oils, resinoids and extracts from resins, leaves, roots and spices, prepared for fragrance houses and independent perfumers. Alongside our ingredients, our perfumers create fragrances for fine fragrance and consumer products.',
  seafood:
    'Live lobster and dried delicacies of the sea: sea cucumber, fish maw, shark fin and abalone. Each lot is graded and packed to the buyer’s specification.',
  packaging:
    'Plastic bags and pouches, cling wrap and stretch film, sacks and jumbo bags, and cups and takeaway containers. Each item comes in several materials, plain or printed.',
};
