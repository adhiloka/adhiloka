import type { PageIntro } from './types';

/* Naskah lini Fisheries (nama sejak 27 Nov 2026; dulu Seafood).
 * Halaman lini = sub-halaman ringkas (pemilik, 27 Nov 2026: tidak dirinci
 * lagi, rinciannya sudah di beranda grup): banner, pembuka, kartu kategori.
 * Pola halaman portofolio bisnis adani.com/businesses/materials. Tanpa
 * sertifikat, kapasitas, MOQ, atau lama kirim (adhiloka-external-claims). */

export const SEAFOOD_INTRO: PageIntro = {
  title: 'Fisheries',
  lede: '',
  description:
    'Frozen fish, shrimp, crab, squid, octopus and dried fish and shellfish from Indonesia, graded and packed to each buyer’s specification.',
  image: 'line-seafood',
  caption: 'fresh fish laid on crushed ice',
};

export const SEAFOOD_OPENING = {
  title: 'From Indonesian Waters',
  body: 'We supply frozen and dried fish and shellfish to importers, processors and food service. Each lot is graded and packed to the buyer’s specification and kept cold all the way to the port.',
};

export const SEAFOOD_PRODUCTS_INTRO: PageIntro = {
  title: 'Products',
  metaTitle: 'Fisheries Products',
  lede: '',
  description: 'Frozen fish, shrimp and crab, squid, octopus and clams, and dried marine products from Adhiloka.',
  image: 'sf-products',
  caption: 'assorted seafood on ice',
};
