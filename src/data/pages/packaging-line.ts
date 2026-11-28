import type { PageIntro } from './types';

/* Naskah lini Plastics (nama sejak 28 Nov 2026; dulu Plastics & Packaging, Polymers, Packaging).
 * Halaman lini (pemilik, 27 Nov 2026): banner, pembuka, lalu katalog
 * (LineCatalog) seperti Ingredient Catalog. Fokus kemasan restoran dan toko. Rujukan isi: Formerra, Chandra Asri, Berlin Packaging
 * (market-research/references/Group site/). Tidak menyebut produksi sendiri
 * atau trading (pemilik). */

export const PACKAGING_INTRO: PageIntro = {
  title: 'Packaging & Plastic Solutions',
  metaTitle: 'Packaging & Plastic Solutions: Bags, Food Containers, Cups & Wraps',
  lede: '',
  description:
    'Plastic bags, OPP and zipper bags, stand-up pouches, vacuum bags, takeaway containers, cups and cling wrap for food service and retail.',
  image: 'line-packaging',
  focus: '50% 50%',
  caption: 'bread rolls packed in clear plastic wrap',
};

export const PACKAGING_OPENING = {
  title: 'Everyday Plastics for Kitchens and Shops',
  /* Naskah pemilik (komentar review 28 Nov 2026), kata per kata. */
  paragraphs: [
    'We provide plastic products and packaging solutions designed to support diverse commercial and industrial applications.',
    'With a focus on functionality, product quality, and dependable supply, we aim to meet the practical requirements of businesses across various sectors.',
  ],
};
