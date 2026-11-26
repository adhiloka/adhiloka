import type { PageIntro } from './types';

/* Halaman Our Businesses (situs grup, pemilik 26 Nov 2026), pola
 * adani.com/businesses: banner, pembuka, lalu satu blok bergambar per lini.
 * Nama, alamat, dan foto lini dari businesses.ts; di sini hanya naskahnya.
 * Menggantikan /about/our-business/ (dialihkan ke sini). */

export const OUR_BUSINESSES_INTRO: PageIntro = {
  title: 'Our Businesses',
  lede: '',
  description:
    'Adhiloka Group: fragrance, fisheries and polymers, supplied from Indonesia.',
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
    'Frozen fish, shrimp, crab, squid and octopus, and dried marine products such as sea cucumber and fish maw. We grade, pack and freeze to each buyer’s specification and keep the cold chain unbroken to the port.',
  packaging:
    'Polyethylene, polypropylene and other resins in pellet form, together with films, pouches, bottles, jars and food packaging. For fragrance and personal care, we also supply glass bottles, sprayers and caps.',
};
