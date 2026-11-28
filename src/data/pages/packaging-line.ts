import type { PageIntro } from './types';

/* Naskah lini Plastics (nama sejak 28 Nov 2026; dulu Plastics & Packaging, Polymers, Packaging).
 * Halaman lini (pemilik, 27 Nov 2026): banner, pembuka, lalu katalog
 * (LineCatalog) seperti Ingredient Catalog. Fokus kemasan restoran dan toko. Rujukan isi: Formerra, Chandra Asri, Berlin Packaging
 * (market-research/references/Group site/). Tidak menyebut produksi sendiri
 * atau trading (pemilik). */

export const PACKAGING_INTRO: PageIntro = {
  title: 'Packaging & Plastic Solutions',
  lede: '',
  description:
    'Plastic bags, pouches, trash bags, wraps, sacks, jumbo bags, cups and takeaway containers for food service and retail.',
  image: 'line-packaging',
  focus: '50% 70%',
  caption: 'hands sealing a bowl with clear cling film',
};

export const PACKAGING_OPENING = {
  title: 'Everyday Plastics for Kitchens and Shops',
  /* Naskah pemilik (komentar review 28 Nov 2026), kata per kata. */
  paragraphs: [
    'We provide plastic products and packaging solutions designed to support diverse commercial and industrial applications.',
    'With a focus on functionality, product quality, and dependable supply, we aim to meet the practical requirements of businesses across various sectors.',
  ],
};
