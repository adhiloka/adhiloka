import type { LinkCard, PageIntro } from './types';
import type { ImageKey } from '../images';

/* Naskah Media ditulis 10 Nov 2026 (permintaan pemilik: ringkas). Halaman
 * Social Media diparkir (pages/media/_social-media.astro) sampai akun resmi
 * ada: handle lama hanya contoh dan tautannya menuju beranda platform. */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const MEDIA_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'News and stories from Adhiloka',
  metaTitle: 'Media',
  lede: 'News, stories and resources from the world of Adhiloka.',
  description:
    'The Adhiloka newsroom: news, stories and media resources about natural ingredients and perfumery from Indonesia.',
  image: 'material-benzoin',
  caption: 'sorted benzoin resin tears',
};

export const MEDIA_CARDS: LinkCard[] = [
  {
    title: 'News',
    body: 'The latest news and stories from Adhiloka.',
    href: '/media/news/',
    image: 'material-nutmeg',
  },
  {
    title: 'Media Resources',
    body: 'Logos and documents for press and partners.',
    href: '/media/media-resources/',
    image: 'hero-benzoin-tears',
  },
];

export const MEDIA_KIT_TEXT = 'Our logo and catalog, ready to download.';

export const MEDIA_CONTACT = {
  title: 'Press enquiries',
  body: 'For press and media enquiries, please write to us. We will be glad to help.',
  email: 'info@adhiloka.com', // DATA: I4
};

/* ── News ────────────────────────────────────────────────────────────── */

export const NEWS_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'News',
  lede: 'News and stories from Adhiloka.',
  description:
    'News and stories from Adhiloka, on natural ingredients, the people who grow them and the craft of perfumery.',
  caption: 'whole nutmegs',
  image: 'material-nutmeg',
};

export type Article = {
  slug: string;
  date: string;
  category: 'Harvest' | 'Works' | 'Sourcing' | 'Perfumery' | 'Company';
  title: string;
  standfirst: string;
  body: string[];
  shot: string;
  image?: ImageKey;
};

/* Tiga cerita umum bergaya "stories" situs fragrance (Symrise, Givaudan),
   disetujui pemilik 18 Okt 2026. Sengaja tanpa kejadian, angka, atau detail
   teknis; kabar perusahaan sungguhan ditambahkan di sini saat ada. Tanggal =
   tanggal tayang, bukan tanggal mundur. */
export const NEWS: Article[] = [
  {
    slug: 'where-our-ingredients-begin',
    date: '2026-10-18',
    category: 'Sourcing',
    title: 'Where Our Ingredients Begin',
    standfirst:
      'A look at the forests, fields and growers behind the natural materials we bring to perfumery.',
    body: [
      'Every ingredient we offer starts long before it reaches a laboratory. It begins with a tree, a field or a leaf, and with the people who know how to look after them.',
      "Indonesia's islands are home to some of the most familiar materials in perfumery: resins, woods, roots, leaves and spices. Each comes from its own landscape, with its own season.",
      'We work close to that source, so that what reaches the perfumer still carries the character of where it grew.',
    ],
    shot: 'benzoin resin',
    image: 'material-benzoin',
  },
  {
    slug: 'the-rhythm-of-the-harvest',
    date: '2026-10-18',
    category: 'Harvest',
    title: 'The Rhythm of the Harvest',
    standfirst:
      'Every natural ingredient follows the seasons. Here is why timing matters as much as care.',
    body: [
      'Natural ingredients do not arrive on a schedule of our choosing. Each one follows its own season, set by rain, sun and the life of the plant.',
      'Knowing when to gather a leaf, a seed or a resin is knowledge passed between growers, and it shapes the character of what we receive.',
      'We plan around those seasons, so that the ingredients we supply are gathered at the right moment and handled with care.',
    ],
    shot: 'nutmeg',
    image: 'material-nutmeg',
  },
  {
    slug: 'from-raw-material-to-fragrance',
    date: '2026-10-18',
    category: 'Perfumery',
    title: 'From Raw Material to Fragrance',
    standfirst:
      'How a natural ingredient finds its place in a perfume, from the first sample to the final formula.',
    body: [
      "A natural ingredient begins its life in perfumery as a small sample on a perfumer's bench.",
      'There it is smelled, studied and tried alongside other materials, to find the role it plays best: a bright opening, a warm heart or a lasting base.',
      'Our own perfumery follows the same path, working with the materials we supply to understand them from the inside of a formula.',
    ],
    shot: 'patchouli leaf',
    image: 'material-patchouli',
  },
];

/* Tanggal sama: urutan larik dipertahankan (sort stabil). */
export const byDate = (a: Article, b: Article) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

/* ── Media Resources ─────────────────────────────────────────────────── */

export const RESOURCES_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'Media Resources',
  lede: 'Our logo and documents, for press and partners.',
  description:
    'Adhiloka media resources: logo files and the ingredients catalog, for press and partners.',
  caption: 'cinnamon bark',
  image: 'hero-benzoin-tears',
};

export type Resource = {
  title: string;
  body: string;
  kind: string;
  size: string;
  href: string;
  /** Nama berkas saat disimpan pengunjung. */
  filename?: string;
};

/* Berkas sungguhan di public/brand/. Katalog PDF ditambahkan halaman
   media-resources dari data/downloads.ts. */
export const RESOURCES: Resource[] = [
  {
    title: 'Adhiloka Logo',
    body: 'Symbol and wordmark, for light backgrounds.',
    kind: 'SVG',
    size: '20 KB',
    href: '/brand/adhiloka-lockup.svg',
    filename: 'Adhiloka-Logo.svg',
  },
  {
    title: 'Adhiloka Logo, Reversed',
    body: 'Symbol and wordmark, for dark backgrounds.',
    kind: 'SVG',
    size: '20 KB',
    href: '/brand/adhiloka-lockup-dark.svg',
    filename: 'Adhiloka-Logo-Reversed.svg',
  },
  {
    title: 'Adhiloka Symbol',
    body: 'The symbol on its own.',
    kind: 'SVG',
    size: '4 KB',
    href: '/brand/adhiloka-logo.svg',
    filename: 'Adhiloka-Symbol.svg',
  },
];

export const RESOURCES_NOTE =
  'Please use the logo as provided, without changing its colours or proportions. For anything else you need, write to info@adhiloka.com.';

/* ── Social Media (diparkir) ─────────────────────────────────────────── */

export const SOCIAL_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'Social Media',
  lede: '',
  description: '',
  caption: 'tree canopy seen from below',
  image: 'agroforest-canopy',
};

export type Channel = { name: string; handle: string; body: string; href: string };

/* Isi dengan akun resmi (formulir data I1), lalu terbitkan lagi halamannya:
   hapus garis bawah di pages/media/_social-media.astro dan kembalikan
   tautannya di site.ts, menu.ts dan MEDIA_CARDS. */
export const CHANNELS: Channel[] = [];

export const SOCIAL_NOTE = '';
