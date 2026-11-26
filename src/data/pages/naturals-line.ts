import type { PageIntro, LinkCard } from './types';

/* Halaman lini Fragrance (pemilik, 27 Nov 2026). Dulu beranda lama
 * dipindah apa adanya (hero empat slide, kutipan, tile, akordeon, berita);
 * kini sub-halaman ringkas seperti dua lini lain: banner, pembuka, dua kartu
 * (Ingredients, Perfumery). Foto kartu = foto banner halaman tujuannya. */

export const NATURALS_INTRO: PageIntro = {
  title: 'Fragrance',
  lede: '',
  description:
    'Adhiloka supplies natural aromatic ingredients from Indonesia, from benzoin and patchouli to roots and spices, and creates fragrances in its own perfumery.',
  image: 'labelled-bottles',
  caption: 'hands arranging labelled amber bottles on a marble table',
};

export const NATURALS_OPENING = {
  title: 'Ingredients and Perfumery',
  body: 'We prepare essential oils, resinoids and extracts from resins, leaves, roots and spices for fragrance houses and independent perfumers. Our perfumers work with the same palette to create fragrances for fine fragrance and consumer products.',
};

/* Dua isi lini saja (pemilik, 27 Nov 2026): Ingredients dan Perfumery.
   Katalog, peta bahan, dan teknologi ada di dalam halaman Ingredients. */
export const NATURALS_CARDS: LinkCard[] = [
  { title: 'Ingredients', href: '/ingredients/', image: 'hero-blossom-golden' },
  { title: 'Perfumery', href: '/perfumery/', image: 'hero-smelling-vial' },
];
