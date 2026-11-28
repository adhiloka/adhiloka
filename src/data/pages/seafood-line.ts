import type { PageIntro } from './types';

/* Naskah lini Marine Delicacies (nama sejak 28 Nov 2026; dulu Seafood, lalu Fisheries).
 * Halaman lini (pemilik, 27 Nov 2026): banner, pembuka, lalu katalog
 * (LineCatalog) seperti Ingredient Catalog.
 * Pola halaman portofolio bisnis adani.com/businesses/materials. Tanpa
 * sertifikat, kapasitas, MOQ, atau lama kirim (adhiloka-external-claims). */

export const SEAFOOD_INTRO: PageIntro = {
  title: 'Fine Seafood',
  metaTitle: 'Fine Seafood: Live Lobster, Sea Cucumber, Fish Maw & Abalone',
  lede: '',
  description:
    'Live lobster and dried delicacies of the sea from Indonesia: sea cucumber, fish maw, shark fin and abalone.',
  image: 'line-seafood',
  focus: '55% 55%',
  caption: 'live pearl lobsters close up in a seawater tank',
};

export const SEAFOOD_OPENING = {
  title: 'From Indonesian Waters',
  /* Naskah pemilik (komentar review 28 Nov 2026), kata per kata; menyebut
     hotel dan restoran atas arahan pemilik sendiri. */
  paragraphs: [
    'We source and supply selected seafood delicacies for the hospitality and food service industry.',
    'Our range includes distinctive marine products such as lobster, sea cucumber, and other specialty seafood, serving the needs of hotels, restaurants, and culinary establishments.',
  ],
};
