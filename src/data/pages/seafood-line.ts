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
    'Live lobster and dried delicacies of the sea from Indonesia: sea cucumber, fish maw, shark fin and abalone.',
  image: 'line-seafood',
  focus: '38% 50%',
  caption: 'spiny lobster on a colourful coral reef',
};

export const SEAFOOD_OPENING = {
  title: 'From Indonesian Waters',
  body: 'Live lobster and dried delicacies from the warm tropical seas of Indonesia. Rare, exotic and full of flavour, they are the treasures that turn a meal into an occasion.',
};
