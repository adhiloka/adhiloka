import type { ImageKey } from './images';

export const SITE = {
  name: 'Adhiloka',
  legalName: 'Adhiloka Group',
  tagline: "Indonesia's finest raw material supplier.",
  description:
    'Eligendi ex in maxime-quis temporibus omnis ad commodo quibusdam — officia, doloribus, dolore, tempor, ipsum est eveniet — culpa ut ducimus, enim eum soluta, tenetur ex nam cum fugit id velit, eum voluptas quam assumenda at non voluptate iusto.',
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
    blurb:
      'Do maxime dicta ea doloremque officiis, ex aut animi recusandae nam saepe soluta odit aut numquam et impedit ad.',
    panel: {
      title: 'About Us',
      shot: 'benzoin resin, hand-graded',
      image: 'material-benzoin',
      links: [
        { label: 'Our Business', href: '/about/our-business/' },
        { label: 'Our Purpose', href: '/about/our-purpose/' },
        { label: 'Our Leadership', href: '/about/our-leadership/' },
        { label: 'Our History', href: '/about/our-history/' },
        { label: 'Our Locations', href: '/about/our-locations/' },
      ],
    },
  },
  {
    label: 'Perfumery',
    href: '/perfumery/',
    blurb:
      'Laboris irure at in velit iste quae at quo ipsa rem ducimus vel molestiae quam iste.',
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
      'Delectus occaecat eius occaecati exercitationem, delectus numquam aut doloremque tempor.',
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
    blurb:
      'Cum itaque quo vel blanditiis vel sunt in ipsa ab saepe do illo ea earum autem. Architecto iure nostrum iste nemo.',
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
    blurb: 'Exercitation enim vel lorem qui cum debitis, hic sit sapiente do lorem animi nemo.',
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

export const SOCIAL = [
  { label: 'Facebook', href: 'https://www.facebook.com/' },
  { label: 'Instagram', href: 'https://www.instagram.com/' },
  { label: 'YouTube', href: 'https://www.youtube.com/' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
  { label: 'X', href: 'https://x.com/' },
];

export const SEARCH_SUGGESTIONS = [
  { label: 'Benzoin Sumatra', href: '/ingredients/catalog/benzoin-sumatra/' },
  { label: 'Patchouli', href: '/ingredients/catalog/patchouli/' },
  { label: 'Fine fragrance', href: '/perfumery/fine-fragrance/' },
  { label: 'Responsible sourcing', href: '/sustainability/responsible-sourcing/' },
  { label: 'Ordering & documents', href: '/ingredients/ordering/' },
  { label: 'Sample request', href: '/contact/' },
];
