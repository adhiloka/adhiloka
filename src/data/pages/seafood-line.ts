import type { PageIntro } from './types';

/* Naskah lini Seafood (situs grup, pemilik 26 Nov 2026). Susunan beranda
 * lini meniru halaman produk eksportir seafood (Roda International, Toba
 * Surimi; market-research/references/Group site/): pembuka, kategori produk,
 * mutu dan rantai dingin, cara memesan. Tanpa sertifikat, kapasitas, MOQ,
 * atau lama kirim (adhiloka-external-claims). */

export const SEAFOOD_INTRO: PageIntro = {
  title: 'Seafood',
  lede: '',
  description:
    'Frozen fish, shrimp, crab, squid, octopus and dried marine products from Indonesia, graded and packed to each buyer’s specification.',
  image: 'line-seafood',
  caption: 'fresh fish laid on crushed ice',
};

export const SEAFOOD_OPENING = {
  title: 'Seafood from Indonesian Waters',
  body: 'We supply frozen and dried seafood to importers, processors and food service. Fish, shrimp, crab and cephalopods are graded, packed and frozen to your specification, and dried products are sorted by size and grade.',
};

export const SEAFOOD_QUALITY = {
  heading: 'Quality & Cold Chain',
  body: 'Seafood is only as good as its temperature. We grade and pack under ice, freeze fast and hold the product at −18 °C or below from cold store to container, and we check every lot for size, weight and glaze before it is loaded.',
};

export const SEAFOOD_STEPS = [
  { n: '01', title: 'Specification', body: 'Species, cut, size and packing are agreed first. We confirm what the market and the season can supply.' },
  { n: '02', title: 'Sample & Approval', body: 'We send samples or photos of the lot for approval. Your quality team signs off before production starts.' },
  { n: '03', title: 'Packing & Inspection', body: 'The order is packed to the agreed labels and cartons. Third-party inspection can be arranged at your request.' },
  { n: '04', title: 'Shipment', body: 'Reefer containers leave from Indonesian ports. We prepare the export documents your market asks for and share them before the vessel arrives.' },
];

export const SEAFOOD_PRODUCTS_INTRO: PageIntro = {
  title: 'Seafood Products',
  metaTitle: 'Seafood Products',
  lede: '',
  description: 'Frozen fish, shrimp and crab, squid, octopus and clams, and dried marine products from Adhiloka.',
  image: 'sf-products',
  caption: 'assorted seafood on ice',
};
