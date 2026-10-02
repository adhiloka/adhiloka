import type { ImageKey } from './images';

export const SITE = {
  name: 'Adhiloka',
  legalName: 'Adhiloka Group',
  tagline: "Indonesia's finest raw material supplier.",
  description:
    'Adhiloka Group supplies natural aromatic raw materials from Indonesia, including benzoin and patchouli. We work directly with growers, process in our own facility and compose fragrance at our own perfumery bench.',
  locale: 'en_ID',
  lang: 'en',
  email: 'info@adhiloka.com',
  // phone dilepas 2 Okt 2026: nomor lama karangan, belum ada nomor asli.
  region: 'Indonesia (English)',
} as const;

export type NavLink = { label: string; href: string };

export type NavItem = {
  label: string;
  href: string;
  /** Kalimat pengantar di kolom kiri mega panel. */
  blurb?: string;
  /** Tanpa panel, tautannya langsung — dipakai Contact. */
  panel?: {
    title: string;
    shot: string;
    image?: ImageKey;
    links: NavLink[];
  };
};

/* Enam menu. Header memecah daftar ini jadi tiga di kiri dan tiga di kanan
   wordmark, jadi jumlahnya harus tetap genap dan urutannya menentukan sisi.
   Contact sengaja tanpa panel: ia tujuan, bukan bagian. */
export const NAV: NavItem[] = [
  {
    label: 'About Adhiloka',
    href: '/about/',
    blurb:
      'Ab mollit fugit at laudantium proident, at hic nihil recusandae vel magna minima amet aut quaerat ea laborum id.',
    panel: {
      title: 'About Adhiloka',
      shot: 'benzoin resin, hand-graded',
      image: 'material-benzoin',
      links: [
        { label: 'Our Business', href: '/about/our-business/' },
        { label: 'Our Leadership', href: '/about/our-leadership/' },
        { label: 'Our Purpose', href: '/about/our-purpose/' },
        { label: 'Our History', href: '/about/our-history/' },
        { label: 'Our Locations', href: '/about/our-locations/' },
      ],
    },
  },
  {
    label: 'Perfumery',
    href: '/perfumery/',
    blurb:
      'Commodi culpa id ut magna quos quod ea eos illo eos tempora nam cupidatat elit illo.',
    panel: {
      title: 'Perfumery',
      shot: 'petal, close',
      image: 'fragrance-petal',
      links: [
        { label: 'Fine Fragrance', href: '/perfumery/fine-fragrance/' },
        { label: 'Fragrance Innovation', href: '/perfumery/fragrance-innovation/' },
      ],
    },
  },
  {
    label: 'Ingredients',
    href: '/ingredients/',
    blurb:
      'Deserunt mollitia anim consequat reprehenderit, nesciunt ratione sit voluptates facere.',
    panel: {
      title: 'Ingredients',
      shot: 'cassia bark',
      image: 'hero-benzoin-tears',
      links: [
        { label: 'Ingredients Catalog', href: '/ingredients/catalog/' },
        { label: 'Technology', href: '/ingredients/technology/' },
      ],
    },
  },
  {
    label: 'Sustainability',
    href: '/sustainability/',
    blurb:
      'Vel veniam qui eos adipiscing rem illo ut iste ex totam id illo ea nulla vitae. Cupiditate nemo commodo quis odit.',
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
    blurb: 'Consequuntur sunt non fugit quo nam dolores, eos cum corrupti et autem error nisi.',
    panel: {
      title: 'Media',
      shot: 'dried rhizome',
      image: 'fragrance-resin',
      links: [
        { label: 'News', href: '/media/news/' },
        { label: 'Media Resources', href: '/media/media-resources/' },
        { label: 'Social Media', href: '/media/social-media/' },
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

/* Kolom footer diturunkan dari NAV, bukan disalin. Versi lama ditulis terpisah
   dan sudah menyimpang dari menunya. */
export const FOOTER_COLUMNS = NAV.filter((item) => item.panel).map((item) => ({
  title: item.label,
  links: [{ label: 'Overview', href: item.href }, ...item.panel!.links],
}));

export const SOCIAL = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
  { label: 'Podcasts', href: 'https://open.spotify.com/' },
];

export const SEARCH_SUGGESTIONS = [
  { label: 'Benzoin Sumatra', href: '/ingredients/catalog/#benzoin-sumatra' },
  { label: 'Patchouli', href: '/ingredients/catalog/#patchouli' },
  { label: 'Fine fragrance', href: '/perfumery/fine-fragrance/' },
  { label: 'Responsible sourcing', href: '/sustainability/responsible-sourcing/' },
  { label: 'Our locations', href: '/about/our-locations/' },
  { label: 'Sample request', href: '/contact/' },
];
