import type { PageIntro } from './types';

/* Naskah lini Marine Delicacies (nama sejak 28 Nov 2026; dulu Seafood, lalu Fisheries).
 * Halaman lini (pemilik, 27 Nov 2026): banner, pembuka, lalu katalog
 * (LineCatalog) seperti Ingredient Catalog.
 * Pola halaman portofolio bisnis adani.com/businesses/materials. Tanpa
 * sertifikat, kapasitas, MOQ, atau lama kirim (adhiloka-external-claims). */

export const SEAFOOD_INTRO: PageIntro = {
  title: 'Marine Delicacies',
  lede: '',
  description:
    'Live lobster, shellfish and dried delicacies of the sea from Indonesia, graded and packed to each buyer’s specification.',
  image: 'line-seafood',
  caption: 'fresh fish laid on crushed ice',
};

export const SEAFOOD_OPENING = {
  title: 'From Indonesian Waters',
  body: 'We supply the delicacies of the sea that kitchens prize, from live lobster to dried sea cucumber and fish maw. Each lot is graded and packed to the buyer’s specification.',
};
