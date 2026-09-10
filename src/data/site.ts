import type { ImageKey } from './images';

export const SITE = {
  name: 'Adhiloka',
  legalName: 'Adhiloka Group',
  tagline: "Indonesia's finest raw material supplier.",
  description:
    'Adhiloka is a family-held Indonesian house of natural aromatics — benzoin, patchouli, nutmeg, ginger, clove and vetiver — grown in Sumatra, Java and Maluku, refined at its own works in Medan, and composed into fragrance at its perfumery bench.',
  locale: 'en_ID',
  lang: 'en',
  email: 'sourcing@adhiloka.com',
  phone: '+62 61 4520 118',
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
      'A family house of Indonesian naturals, in its sixth generation and still buying from the forests it started in.',
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
      'Accords built at a bench that sits a day from the gardens its materials come from.',
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
      'Eighteen naturals with published specifications, seasonal windows and extraction routes.',
    panel: {
      title: 'Ingredients',
      shot: 'cassia bark, Kerinci',
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
      'The forest and the households who tend it have to still be here in fifty years. Everything else follows from that.',
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
    blurb: 'Announcements from the works and the gardens, and the material to write about them.',
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
  { label: 'Patchouli Aceh', href: '/ingredients/catalog/#patchouli' },
  { label: 'Fine fragrance', href: '/perfumery/fine-fragrance/' },
  { label: 'Responsible sourcing', href: '/sustainability/responsible-sourcing/' },
  { label: 'Our locations', href: '/about/our-locations/' },
  { label: 'Sample request', href: '/contact/' },
];
