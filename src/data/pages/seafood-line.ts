import type { PageIntro } from './types';

/* Naskah lini Fisheries (nama sejak 27 Nov 2026; dulu Seafood).
 * Halaman lini (pemilik, 27 Nov 2026): banner, pembuka, lalu katalog
 * (LineCatalog) seperti Ingredient Catalog.
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
  body: 'We supply fish and seafood for restaurants, importers and processors, from live grouper and lobster to frozen shrimp and dried sea cucumber. Each lot is graded and packed to the buyer’s specification.',
};
