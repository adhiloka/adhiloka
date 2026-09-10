import type { ImageKey } from '../images';

/** Kepala halaman dalam. `description` dipakai meta, `lede` dipakai di layar. */
export type PageIntro = {
  eyebrow?: string;
  title: string;
  /** Judul untuk tab peramban dan hasil telusur. Halaman hub memakai judul
   *  berupa kalimat penuh, dan kalimat penuh adalah <title> yang buruk. */
  metaTitle?: string;
  lede: string;
  description: string;
  image?: ImageKey;
  caption: string;
};

/** Angka yang berdiri sendiri: 1840, 18 naturals, 4 sites. */
export type Stat = { value: string; label: string };

/** Kartu yang mengantar ke halaman lain. */
export type LinkCard = {
  title: string;
  body: string;
  href: string;
  cta?: string;
  image?: ImageKey;
  caption?: string;
};

/** Blok naskah bergambar — dipakai Band. */
export type Passage = {
  id?: string;
  eyebrow?: string;
  title: string;
  body: string;
  points?: string[];
  cta?: string;
  href?: string;
  caption: string;
  image?: ImageKey;
};

export type Quote = { text: string; attribution: string };

/** Satu slide pada pita berkarusel — dipakai halaman depan (Get in touch) dan
 *  halaman hub About. Slide berfoto memakai `image`; slide tanpa foto memakai
 *  pelat hatch berwarna `bg` dengan `shot` sebagai keterangannya. */
export type CarouselSlide = {
  title: string;
  body: string;
  cta: string;
  shot: string;
  href: string;
  bg?: string;
  image?: ImageKey;
  /** Titik fokus foto (`object-position`); kolomnya sempit, bawaan `center`
   *  kerap memotong subjeknya. */
  focus?: string;
};
