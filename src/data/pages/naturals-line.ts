import type { PageIntro, LinkCard } from './types';

/* Halaman lini Natural Aromatics (pemilik, 27 Nov 2026). Dulu beranda lama
 * dipindah apa adanya (hero empat slide, kutipan, tile, akordeon, berita);
 * kini sub-halaman ringkas seperti dua lini lain: banner, pembuka, kartu
 * menuju halaman di dalam lini. Foto kartu = foto banner halaman tujuannya. */

export const NATURALS_INTRO: PageIntro = {
  title: 'Natural Aromatics',
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

export const NATURALS_CARDS: LinkCard[] = [
  { title: 'Ingredients', href: '/ingredients/', image: 'hero-blossom-golden' },
  { title: 'Ingredient Catalog', href: '/ingredients/catalog/', image: 'hero-farmer-lychees' },
  { title: 'Ingredients Map', href: '/ingredients/map/', image: 'jungle-stream' },
  { title: 'Technology', href: '/ingredients/technology/', image: 'hero-hands-peppercorns' },
  { title: 'Perfumery', href: '/perfumery/', image: 'hero-smelling-vial' },
  { title: 'Working With Us', href: '/ingredients/working-with-us/', image: 'cargo-ship' },
];
