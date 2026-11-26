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
  image: 'smelling-flowers',
  focus: '50% 15%',
  caption: 'smelling a handful of dried flowers',
};

/* Foto kartu = foto banner halaman yang dituju (pemilik, 15 Nov 2026). */
export const MEDIA_CARDS: LinkCard[] = [
  {
    title: 'News',
    href: '/media/news/',
    image: 'hero-still-hall',
  },
  {
    title: 'Media Resources',
    href: '/media/media-resources/',
    image: 'stationery-flatlay',
  },
];

export const MEDIA_CONTACT = {
  title: 'Press enquiries',
  email: 'info@adhiloka.com', // DATA: I4
};

/* ── News ────────────────────────────────────────────────────────────── */

export const NEWS_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'News',
  lede: 'News and stories from Adhiloka.',
  description:
    'News and stories from Adhiloka, on natural ingredients, the people who grow them and the craft of perfumery.',
  caption: 'a rose with water drops, close',
  image: 'hero-still-hall',
};

export type Article = {
  slug: string;
  date: string;
  category: 'Harvest' | 'Works' | 'Sourcing' | 'Perfumery' | 'Company';
  title: string;
  standfirst: string;
  body: string[];
  shot: string;
  image: ImageKey;
};

/* Enam cerita umum bergaya "stories" situs fragrance (Symrise, Givaudan).
   Tiga di antaranya disetujui pemilik 18 Okt 2026; tanggalnya disebar dari
   Februari 2025 sampai November 2026 dan tiga cerita ditambah (pemilik, 15
   Nov 2026). Sengaja tanpa kejadian, angka, atau detail teknis yang belum
   terbukti; kabar perusahaan sungguhan ditambahkan di sini saat ada. */
export const NEWS: Article[] = [
  {
    slug: 'our-ingredient-catalog-now-online',
    date: '2026-11-10',
    category: 'Company',
    title: 'Our Ingredient Catalog, Now Online',
    standfirst: 'Every Adhiloka ingredient, with its scent and the products we make from it, now in one place.',
    body: [
      'Our ingredient catalog is now online. Each ingredient has its own page, with its scent, its place in perfumery and the products we make from it.',
      'Perfumers and buyers can search by name, product code or scent, and request a sample from the same page.',
      'A PDF edition of the catalog can be downloaded to read offline or share with a team.',
    ],
    shot: 'spoons of seeds and dried spices',
    image: 'seed-spoons',
  },
  {
    slug: 'from-raw-material-to-fragrance',
    date: '2026-06-16',
    category: 'Perfumery',
    title: 'From Raw Material to Fragrance',
    standfirst:
      'How a natural ingredient finds its place in a perfume, from the first sample to the final formula.',
    body: [
      "A natural ingredient begins its life in perfumery as a small sample on a perfumer's bench.",
      'There it is smelled, studied and tried alongside other materials, to find the role it plays best: a bright opening, a warm heart or a lasting base.',
      'Our own perfumery follows the same path, working with the materials we supply to understand them from the inside of a formula.',
    ],
    shot: 'oil dropped from an amber bottle onto a palm',
    image: 'oil-on-palm',
  },
  {
    slug: 'where-our-ingredients-begin',
    date: '2026-02-24',
    category: 'Sourcing',
    title: 'Where Our Ingredients Begin',
    standfirst:
      'A look at the forests, fields and growers behind the natural materials we bring to perfumery.',
    body: [
      'Every ingredient we offer starts long before it reaches a laboratory. It begins with a tree, a field or a leaf, and with the people who know how to look after them.',
      "Indonesia's islands are home to some of the most familiar materials in perfumery: resins, woods, roots, leaves and spices. Each comes from its own landscape, with its own season.",
      'We work close to that source, so that what reaches the perfumer still carries the character of where it grew.',
    ],
    shot: 'terraced fields on a misty hillside',
    image: 'terraces-mist',
  },
  {
    slug: 'the-rhythm-of-the-harvest',
    date: '2025-10-07',
    category: 'Harvest',
    title: 'The Rhythm of the Harvest',
    standfirst:
      'Every natural ingredient follows the seasons, and timing matters as much as care.',
    body: [
      'Natural ingredients do not arrive on a schedule of our choosing. Each one follows its own season, set by rain, sun and the life of the plant.',
      'Knowing when to gather a leaf, a seed or a resin is knowledge passed between growers, and it shapes the character of what we receive.',
      'We plan around those seasons, so that the ingredients we supply are gathered at the right moment and handled with care.',
    ],
    shot: 'a grower spreading the harvest to dry',
    image: 'grain-drying',
  },
  {
    slug: 'patchouli-from-leaf-to-oil',
    date: '2025-06-10',
    category: 'Works',
    title: 'Patchouli, From Leaf to Oil',
    standfirst: 'One of the few essential oils that grows better with age, and a base note perfumers return to again and again.',
    body: [
      'Patchouli begins in the leaf. The leaves are harvested, dried and left to rest before they go to the still.',
      'Distillation draws out a dark, earthy oil with a sweet, woody depth. With time its rough edges soften and the character rounds out.',
      'Perfumers use it to anchor chypre, woody and oriental accords, where a little goes a long way.',
    ],
    shot: 'copper distillation equipment',
    image: 'copper-distillery',
  },
  {
    slug: 'benzoin-tapped-from-living-trees',
    date: '2025-02-18',
    category: 'Harvest',
    title: 'Benzoin, Tapped From Living Trees',
    standfirst: 'A warm, balsamic resin that has scented incense and perfume for centuries.',
    body: [
      'Benzoin forms where the bark of a Styrax tree is carefully cut. The tree seals the cut with a pale resin that slowly hardens into tears.',
      'Its scent is warm and sweet, with hints of vanilla and balsam. In perfumery it softens and fixes amber, oriental and gourmand accords.',
      'The tears are gathered by hand and sorted by colour and size before they are prepared for perfumery.',
    ],
    shot: 'resin hardening on tree bark, close',
    image: 'resin-bark-close',
  },
];

/* Terbaru dulu; tanggal sama: urutan larik dipertahankan (sort stabil). */
export const byDate = (a: Article, b: Article) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0);

export const formatDate = (iso: string) =>
  new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
    timeZone: 'UTC',
  });

/* ── Media Resources ─────────────────────────────────────────────────── */

/* Media Resources (dirombak 15 Nov 2026, pemilik: logo dan simbol dicoret,
   isinya dipikir ulang). Rujukan: Robertet Media ressources, Symrise Media
   assets, dsm-firmenich Media downloads (market-research/references/).
   Mereka memuat logo, pustaka foto (pimpinan, pabrik, bahan baku) dan dokumen
   (fact sheet, boilerplate). Logo dilepas atas keputusan pemilik; foto kita
   masih foto stok, jadi tidak ditawarkan sebagai milik Adhiloka. Yang tersisa:
   paragraf "About Adhiloka" siap kutip (boilerplate), unduhan katalog PDF
   (dari data/downloads.ts) dan kontak pers. */
export const RESOURCES_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'Media Resources',
  lede: 'Company information and documents, for press and partners.',
  description:
    'Adhiloka media resources: company information and the ingredients catalog, for press and partners.',
  caption: 'notebooks and pens on a white desk',
  image: 'stationery-flatlay',
};

/** Paragraf baku tentang perusahaan, untuk dikutip pers apa adanya. */
export const BOILERPLATE = {
  title: 'About Adhiloka',
  body: 'Adhiloka Group is a family of businesses in Indonesia. It supplies natural aromatic ingredients and creates fragrances, exports frozen and dried fish and shellfish, and supplies polymer resins, films and containers.',
};

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
