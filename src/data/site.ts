import type { ImageKey } from './images';
import { BUSINESSES, BUSINESS_LINKS } from './businesses';

export const SITE = {
  name: 'Adhiloka',
  legalName: 'Adhiloka Group',
  tagline: 'Natural Ingredients & Perfumery · Seafood · Plastics & Packaging',
  description:
    'Adhiloka Group is a family of businesses in Indonesia: natural ingredients and perfumery, seafood, and plastics and packaging.',
  locale: 'en_ID',
  lang: 'en',
  email: 'info@adhiloka.com',
  region: 'Indonesia (English)',
} as const;

export type NavLink = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  /** Awalan jalur lain yang membuat menu ini aktif. */
  match?: string[];
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
   About Us, Our Businesses, Sustainability, Media dan Connect menampilkan
   foto yang sama dengan banner halaman yang dituju. Ganti keduanya bersamaan.
   Lima menu utama sejak situs jadi situs grup (pemilik, 26 Nov 2026), urutan
   kiri ke kanan di header. Perfumery dan Ingredients pindah ke bilah
   sub-menu lini Natural Ingredients & Perfumery (businesses.ts). `panel.links` adalah isi
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
    blurb: 'Adhiloka Group, a family of businesses rooted in Indonesia.',
    panel: {
      title: 'About Us',
      shot: 'smiling woman in late afternoon sun',
      image: 'hero-woman-golden-light',
      links: [{ label: 'Our Purpose', href: '/about/our-purpose/' }],
    },
  },
  {
    /* Satu menu untuk ketiga lini (pemilik, 26 Nov 2026), pola "Businesses"
       adani.com. Sub-halaman tiap lini ada di bilah sub-menu halaman lini
       (BusinessSubnav), bukan di sini. `match`: menu tetap aktif di halaman
       mana pun di dalam lini. */
    label: 'Our Businesses',
    href: '/our-businesses/',
    match: BUSINESSES.flatMap((b) => b.paths),
    blurb: 'Natural ingredients and perfumery, seafood, and plastics and packaging.',
    panel: {
      title: 'Our Businesses',
      shot: 'container ship at sea in warm evening light',
      image: 'biz-overview',
      links: BUSINESSES.map((b) => ({ label: b.name, href: b.href })),
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
      shot: 'smiling woman taking notes during a phone call',
      image: 'contact-phone-call',
      links: [
        { label: 'Careers', href: '/contact/careers/' },
        { label: 'Partner with Us', href: '/contact/partners/' },
        { label: 'Contact Us', href: '/contact/' },
      ],
    },
  },
];

/** Semua tautan navigasi yang ada, rata — dipakai indeks pencarian dan 404. */
export const NAV_LINKS: NavLink[] = [
  ...NAV.flatMap((item) => [{ label: item.label, href: item.href }, ...(item.panel?.links ?? [])]),
  ...BUSINESS_LINKS,
];

/* Akun media sosial resmi. Kosong sampai akunnya ada (formulir data I1):
   tautan lama hanya menuju beranda tiap platform, jadi ikonnya dilepas dari
   footer. Isi dengan { label, href }; label yang dikenal footer: Facebook,
   Instagram, YouTube, LinkedIn, X. */
export const SOCIAL: { label: string; href: string }[] = [];

export const SEARCH_SUGGESTIONS = [
  { label: 'Benzoin Sumatra', href: '/ingredients/catalog/benzoin-sumatra/' },
  { label: 'Patchouli', href: '/ingredients/catalog/patchouli/' },
  { label: 'Seafood products', href: '/seafood/products/' },
  { label: 'Plastic resins', href: '/plastics-packaging/products/?cat=resins' },
  { label: 'Working with us', href: '/ingredients/working-with-us/' },
  { label: 'Sample request', href: '/contact/?kind=sample' },
];
