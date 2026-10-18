import type { LinkCard, PageIntro } from './types';
import type { ImageKey } from '../images';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const MEDIA_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'Eius ex quam molestias, hic sit mollitia id totam animi ex.',
  metaTitle: 'Media',
  lede: 'Reprehenderit amet est autem eos cum laborum, dolore ratione sed praesentium, hic cum deleniti ipsum ab eius tempore amet.',
  description:
    'Rem nesciunt illum sint: unde modi rem minus vel eum dolores, voluptatibus optio voluptate, eum aut magnam corporis.',
  image: 'material-benzoin',
  caption: 'benzoin resin, hand-graded',
};

export const MEDIA_CARDS: LinkCard[] = [
  {
    title: 'News',
    body: 'Exercitationem saepe nam odit, eos nihil, nam est cillum nam dolore at.',
    href: '/media/news/',
    image: 'material-nutmeg',
  },
  {
    title: 'Media Resources',
    body: 'Fugit, aliquip repudiandae, nam ratione ipsa velit eos nam aperiam exercitationem mollit.',
    href: '/media/media-resources/',
    image: 'hero-benzoin-tears',
  },
  {
    title: 'Social Media',
    body: 'Saepe ad esse facilis exercitation, eum magni placeat do deserunt sunt.',
    href: '/media/social-media/',
    image: 'agroforest-canopy',
  },
];

export const MEDIA_CONTACT = {
  title: 'Press enquiries',
  body: 'Assumenda eligendi, beatae eum tempor nisi, eum quod aliqua. Et facere alias aute voluptate nam impedit veniam rem ducimus elit.',
  email: 'info@adhiloka.com', // DATA: I4
};

/* ── News ────────────────────────────────────────────────────────────── */

export const NEWS_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'News',
  lede: 'Non iste, eum ullam hic sit pariatur. Do placeat aut excepturi tenetur ex enim in cum sunt quod.',
  description:
    'Iure quos quisquam minus: commodo impedit, autem nostrum, nesciunt consequuntur eos repellat amet hic explicabo error.',
  caption: 'grading floor',
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
  lede: 'Aliquid itaque, nam incidunt at facere eveniet, rem nam doloribus at porro fugiat in maxime odio quas praesentium.',
  description:
    'Consequuntur voluptas quasi quibusdam: ipsa atque, officia consectetur, ullamco quia lorem sed reprehenderit fugiat.',
  caption: 'still hall',
  image: 'hero-benzoin-tears',
};

export type Resource = {
  title: string;
  body: string;
  kind: string;
  size: string;
  href: string;
};

/* PLACEHOLDER — tautan berkas belum ada. Ganti href dengan berkas sungguhan
   di /media/ sebelum terbit, atau hapus barisnya. */
export const RESOURCES: Resource[] = [
  {
    title: 'Quae cum corrupti',
    body: 'Quo duis odit do iure veniam, est laudantium labore nisi non nesciunt elit, eum hic aliqua itaque ea rem hic maxime.',
    kind: 'ZIP · SVG, PNG, EPS',
    size: '2.4 MB',
    href: '/contact/',
  },
  {
    title: 'Tempore iure fugit',
    body: 'Occaecat, similique, irure, ullamco minus nam cum nostrum id aut error in nam beatae.',
    kind: 'PDF',
    size: '480 KB',
    href: '/contact/',
  },
  {
    title: 'Reprehenderit cillum',
    body: 'Excepteur voluptas, lorem soluta, sunt corporis non nam deserunt itaque iste dicta.',
    kind: 'PDF',
    size: '3.1 MB',
    href: '/contact/',
  },
  {
    title: 'Accusantium — hic ipsam',
    body: 'Autem ullam, commodo atque, perspiciatis illo qui cum consequat totam. Laboris eum molestias non enim magnam.',
    kind: 'ZIP · JPG',
    size: '68 MB',
    href: '/contact/',
  },
  {
    title: 'Dignissimos — hic dolorem',
    body: 'Deserunt quaerat commodo, ducimus cum incididunt mollitia. Fugiat repellat odit nobis quaerat aut quibusdam non.',
    kind: 'ZIP · JPG',
    size: '54 MB',
    href: '/contact/',
  },
];

export const RESOURCES_NOTE =
  'Mollit aut at quam perferendis odit qui cillum amet "incidunt minim". Quos sed nam ab eius at accusantium, ratione dolore sapiente, at iste id minus et temporibus consequuntur. Suscipit cum dolore ipsa, sed id.';

/* ── Social Media ────────────────────────────────────────────────────── */

export const SOCIAL_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'Social Media',
  lede: 'Culpa id quis facilis necessitatibus — sed, nemo do corrupti, porro eligendi non nesciunt duis.',
  description:
    'Incidunt expedita tempor nihil incidunt, esse amet vel id sint rem, qui non id maxime ex quaerat ut quia.',
  caption: 'kemenyan agroforest canopy',
  image: 'agroforest-canopy',
};

export type Channel = { name: string; handle: string; body: string; href: string };

/* PLACEHOLDER — handle belum dibuat; href masih menunjuk beranda platform.
   Ganti dengan akun sungguhan sebelum terbit. */
export const CHANNELS: Channel[] = [
  {
    name: 'LinkedIn',
    handle: '@adhiloka-group',
    body: 'Officia necessitatibus, laborum dolores nam aut doloremque quam duis ipsum asperiores. Sed commodo et modi quis debitis.',
    href: 'https://www.linkedin.com/',
  },
  {
    name: 'Instagram',
    handle: '@adhiloka',
    body: 'Vel nostrud, qui commodo magna sed aut magnam. Cillum consequatur, soluta nulla id hic tempor id quos.',
    href: 'https://www.instagram.com/',
  },
  {
    name: 'YouTube',
    handle: '@adhiloka',
    body: 'Minus vitae in ullamco, laborum rem perspiciatis, nam itaque hic nulla aliqua est sit laborum elit odit vitae id.',
    href: 'https://www.youtube.com/',
  },
  {
    name: 'Facebook',
    handle: '@adhilokagroup',
    body: 'Sint est sed commodo perferendis do eaque facilis eos vero, cum beatae id cumque excepturi.',
    href: 'https://www.facebook.com/',
  },
];

export const SOCIAL_NOTE =
  'Lorem odit expedita est sed sunt quis ab aliquip. Ad natus vel rem aliquid, voluptas do excepturi laborum minima culpa, quo ad unde est facilis qui lorem error et alias.';
