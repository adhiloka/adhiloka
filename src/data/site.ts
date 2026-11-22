import type { ImageKey } from './images';

export const SITE = {
  name: 'Adhiloka',
  legalName: 'Adhiloka Group',
  tagline: 'Natural Ingredients & Perfumery',
  description:
    'Adhiloka supplies natural aromatic ingredients from Indonesia, from benzoin and patchouli to roots and spices, and creates fragrances in its own perfumery.',
  locale: 'en_ID',
  lang: 'en',
  email: 'info@adhiloka.com',
  region: 'Indonesia (English)',
} as const;

export type NavLink = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  /** Kalimat pengantar mega panel desain lama; tidak dirender di desain Adani. */
  blurb?: string;
  /** Tanpa panel, tautannya langsung — dipakai Contact. */
  panel?: {
    title: string;
    shot: string;
    image?: ImageKey;
    links: NavLink[];
  };
};

/* Foto panel = foto banner halaman induknya (pemilik, 15 Nov 2026): menu
   About Us, Perfumery, Ingredients, Sustainability, Media dan Connect
   menampilkan foto yang sama dengan banner halaman yang dituju. Ganti
   keduanya bersamaan.
   Enam menu utama, urutan kiri ke kanan di header. `panel.links` adalah isi
   dropdown, daftar datar tanpa sub-menu atau label grup (pemilik, 13 Nov
   2026): panel mengisinya 3 ke bawah lalu pindah ke kolom kanan. Juga sumber
   remah roti, indeks pencarian dan 404. Tidak ada nama produk di sini:
   produk hanya di katalog. Menu terakhir "Connect" (pemilik, 13 Nov 2026)
   menggantikan Contact yang berdiri sendiri: Careers, Partner with Us dan
   Contact Us dalam satu panel (Become a Supplier digabung ke Partner with Us,
   pemilik 22 Nov 2026). */
export const NAV: NavItem[] = [
  {
    label: 'About Us',
    href: '/about/',
    blurb: 'A house of natural ingredients and perfumery, rooted in Indonesia.',
    panel: {
      title: 'About Us',
      shot: 'smiling woman in late afternoon sun',
      image: 'hero-woman-golden-light',
      links: [
        { label: 'Our Business', href: '/about/our-business/' },
        { label: 'Our Purpose', href: '/about/our-purpose/' },
      ],
    },
  },
  {
    label: 'Perfumery',
    href: '/perfumery/',
    blurb:
      'Fragrance creation for fine fragrance, personal care, home care and fabric care.',
    panel: {
      title: 'Perfumery',
      shot: 'woman smelling a fragrance by the window',
      image: 'hero-smelling-vial',
      links: [
        { label: 'Fine Fragrance', href: '/perfumery/#fine-fragrance' },
        { label: 'Consumer Fragrance', href: '/perfumery/#consumer-fragrance' },
        { label: 'Fragrance Innovation', href: '/perfumery/#innovation' },
        { label: 'How We Work', href: '/perfumery/#approach' },
        { label: 'Our Palette', href: '/perfumery/#palette' },
      ],
    },
  },
  {
    label: 'Ingredients',
    href: '/ingredients/',
    blurb: 'Resins, leaves, roots and spices from Indonesia, selected and prepared for perfumery.',
    panel: {
      title: 'Ingredients',
      shot: 'blossom in golden evening light',
      image: 'hero-blossom-golden',
      links: [
        { label: 'Natural Ingredients', href: '/ingredients/natural-ingredients/' },
        { label: 'Ingredient Catalog', href: '/ingredients/catalog/' },
        { label: 'Ingredients Map', href: '/ingredients/map/' },
        { label: 'Technology', href: '/ingredients/technology/' },
        { label: 'Working With Us', href: '/ingredients/working-with-us/' },
      ],
    },
  },
  {
    label: 'Sustainability',
    href: '/sustainability/',
    blurb: 'Caring for nature and for the people who tend it.',
    panel: {
      title: 'Sustainability',
      shot: 'hands holding a seedling in soil',
      image: 'hero-hands-seedling',
      links: [
        { label: 'Driving progress for people', href: '/sustainability/people/' },
        { label: 'Responsible Sourcing', href: '/sustainability/responsible-sourcing/' },
      ],
    },
  },
  {
    label: 'Media',
    href: '/media/',
    blurb: 'News, stories and resources from Adhiloka.',
    panel: {
      title: 'Media',
      shot: 'smelling a handful of dried flowers',
      image: 'smelling-flowers',
      links: [
        { label: 'News', href: '/media/news/' },
        { label: 'Media Resources', href: '/media/media-resources/' },
      ],
    },
  },
  {
    label: 'Connect',
    href: '/contact/',
    blurb: 'Careers, suppliers, partners and enquiries.',
    panel: {
      title: 'Connect',
      shot: 'a hand reaching for tagged amber sample bottles',
      image: 'tagged-sample-bottles',
      links: [
        { label: 'Careers', href: '/contact/careers/' },
        { label: 'Partner with Us', href: '/contact/partners/' },
        { label: 'Contact Us', href: '/contact/' },
      ],
    },
  },
];

/** Semua tautan navigasi yang ada, rata — dipakai indeks pencarian dan 404. */
export const NAV_LINKS: NavLink[] = NAV.flatMap((item) => [
  { label: item.label, href: item.href },
  ...(item.panel?.links ?? []),
]);

/* Akun media sosial resmi. Kosong sampai akunnya ada (formulir data I1):
   tautan lama hanya menuju beranda tiap platform, jadi ikonnya dilepas dari
   footer. Isi dengan { label, href }; label yang dikenal footer: Facebook,
   Instagram, YouTube, LinkedIn, X. */
export const SOCIAL: { label: string; href: string }[] = [];

export const SEARCH_SUGGESTIONS = [
  { label: 'Benzoin Sumatra', href: '/ingredients/catalog/benzoin-sumatra/' },
  { label: 'Patchouli', href: '/ingredients/catalog/patchouli/' },
  { label: 'Fine fragrance', href: '/perfumery/#fine-fragrance' },
  { label: 'Responsible sourcing', href: '/sustainability/responsible-sourcing/' },
  { label: 'Working with us', href: '/ingredients/working-with-us/' },
  { label: 'Sample request', href: '/contact/?kind=sample' },
];
