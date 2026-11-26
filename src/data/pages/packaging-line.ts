import type { PageIntro } from './types';

/* Naskah lini Polymers (nama sejak 27 Nov 2026; dulu Plastics & Packaging).
 * Halaman lini = sub-halaman ringkas (pemilik, 27 Nov 2026): banner, pembuka,
 * kartu kategori. Rujukan isi: Formerra, Chandra Asri, Berlin Packaging
 * (market-research/references/Group site/). Tidak menyebut produksi sendiri
 * atau trading (pemilik). */

export const PACKAGING_INTRO: PageIntro = {
  title: 'Polymers',
  lede: '',
  description:
    'Polymer resins, films, bags, bottles, jars, food containers and glass for fragrance, supplied from Indonesia.',
  image: 'line-packaging',
  caption: 'clear plastic pellets held in an open hand',
};

export const PACKAGING_OPENING = {
  title: 'From Resin to Finished Pack',
  body: 'We supply polymers at every stage, from resin pellets for converters to the films, bottles and containers that reach the shelf. For fragrance and personal care, we add glass bottles, sprayers and vials.',
};

export const PACKAGING_PRODUCTS_INTRO: PageIntro = {
  title: 'Products',
  metaTitle: 'Polymers Range',
  lede: '',
  description: 'Polymer resins, films and pouches, bottles and jars, food containers and glass for fragrance from Adhiloka.',
  image: 'pk-products',
  caption: 'stacked plastic containers',
};
