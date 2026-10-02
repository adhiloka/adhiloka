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

/** Angka yang berdiri sendiri, mis. jumlah bahan di katalog. */
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

