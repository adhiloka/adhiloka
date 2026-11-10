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

/* Enam menu utama, urutan kiri ke kanan di header. `panel.links` adalah
   halaman anak: sumber remah roti, indeks pencarian dan 404. Susunan kolom
   mega-menu ala Adani ada di menu.ts. Contact tanpa panel: ia tujuan. */
export const NAV: NavItem[] = [
  {
    label: 'About Us',
    href: '/about/',
    blurb: 'A house of natural ingredients and perfumery, rooted in Indonesia.',
    panel: {
      title: 'About Us',
      shot: 'benzoin resin, hand-graded',
      image: 'material-benzoin',
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
      'Fragrances composed from the natural materials of Indonesia, for fine perfumery, personal care and the home.',
    panel: {
      title: 'Perfumery',
      shot: 'petal, close',
      image: 'fragrance-petal',
      links: [
        { label: 'Signature Creations', href: '/perfumery/signature-creations/' },
        { label: 'Beyond Fragrance', href: '/perfumery/beyond-fragrance/' },
        { label: 'Mindful Naturals', href: '/perfumery/mindful-naturals/' },
      ],
    },
  },
  {
    label: 'Ingredients',
    href: '/ingredients/',
    blurb: 'Resins, leaves, roots and spices from Indonesia, selected and prepared for perfumery.',
    panel: {
      title: 'Ingredients',
      shot: 'cinnamon bark',
      image: 'hero-benzoin-tears',
      links: [
        { label: 'Ingredients Catalog', href: '/ingredients/catalog/' },
        { label: 'Technology', href: '/ingredients/technology/' },
        { label: 'Ordering & Documents', href: '/ingredients/ordering/' },
      ],
    },
  },
  {
    label: 'Sustainability',
    href: '/sustainability/',
    blurb: 'Caring for nature and for the people who tend it.',
    panel: {
      title: 'Sustainability',
      shot: 'kemenyan agroforest canopy',
      image: 'agroforest-canopy',
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
      shot: 'dried rhizome',
      image: 'fragrance-resin',
      links: [
        { label: 'News', href: '/media/news/' },
        { label: 'Media Resources', href: '/media/media-resources/' },
      ],
    },
  },
  {
    label: 'Contact',
    href: '/contact/',
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
  { label: 'Signature creations', href: '/perfumery/signature-creations/' },
  { label: 'Responsible sourcing', href: '/sustainability/responsible-sourcing/' },
  { label: 'Ordering & documents', href: '/ingredients/ordering/' },
  { label: 'Sample request', href: '/contact/?kind=sample' },
];
