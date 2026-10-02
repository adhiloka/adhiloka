import type { CarouselSlide, LinkCard, PageIntro, Passage, Quote, Stat } from './types';
import type { HeroSlide } from './home';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const PERFUMERY_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Nisi ad aute, id unde facilis.',
  metaTitle: 'Perfumery',
  lede: 'At iusto lorem ex optio, laboris facere duis suscipit ex facere, ipsum rem molestias occaecati. Dicta soluta ad non numquam eius ab mollitia rem dicta id est hic nisi et porro in.',
  description:
    'Sed officiis consequat: ipsa similique nostrud sed asperiores vitae neque elit quisquam aliquip eum veritatis et eos eum illum et magni.',
  image: 'fragrance-petal',
  caption: 'petal, close',
};

export const PERFUMERY_STATS: Stat[] = [
  { value: '1234', label: 'Magni dolore' },
  { value: '12', label: 'Nulla voluptas id nam impedit' },
  { value: '1 sed', label: 'Quas cillum ad nihil' },
];

export const PERFUMERY_OPENING = [
  'Illo doloribus tempor cum magni proident. Et cum quod, sed qui laboriosam nihil at in hic quo est culpa quasi: in quisquam unde qui nam sed et aperiam non dolore magna iure odio eum qui non tempor aute cum maxime qui fugiat id, et eum illo occaecat, sit quis assumenda.',
  'Ipsa explicabo ad hic vitae corrupti non ut veritatis nemo dolor. Ad nam vel facere in debitis ut tempora dolorem. Ea cum tempor ad ea eos porro illo hic magna at magnam aliqua do adipisci hic quam similique quam suscipit aliqua minus beatae, ratione do qui alias esse quaerat hic aute non rem odio.',
];

export const PERFUMERY_CARDS: LinkCard[] = [
  {
    title: 'Fine Fragrance',
    body: 'Ullamco natus cum veritatis, cum do expedita est quae exercitation debitis. Ducimus quae quas minus et voluptatem aliquip.',
    href: '/perfumery/fine-fragrance/',
  },
  {
    title: 'Fragrance Innovation',
    body: 'Quos ea est quaerat in ex hic minus: laboriosam tempor elit dolore do possimus, cum eos adipiscing quos quas cumque ab.',
    href: '/perfumery/fragrance-innovation/',
  },
];

/* ── Fine Fragrance ────────────────────────────────────────── */

export const FINE_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Fine Fragrance',
  lede: 'Debitis hic do quisquam, magna et ea elit dolore elit nostrum. Unde ex ipsa id do quis, in nisi.',
  description:
    'Mollitia duis excepturi: proident-est officia, ullamco corporis aute autem ab distinctio aliquip, rem in aliquip atque sint vel hic corrupti consequat.',
  image: 'fragrance-resin',
  caption: 'dried rhizome',
};

export const FINE_PASSAGES: Passage[] = [
  {
    id: 'palette',
    eyebrow: 'The palette',
    title: 'Voluptas expedita, hic qui incididunt at sit sed ex quae do enim',
    body: 'Qui tempora eos saepe cumque molestiae ex rem ipsam sit quam et nam doloribus ipsa facere eius. Vero doloremque in cupiditate: aperiam ad adipisci sit id aliquid ea quod ad qui, eum neque illum qui eos nam ad cum voluptate. Hic tempora eos quaerat adipisci quis qui occaecat adipisci, quo minima iste ex quos cumque facere numquam.',
    points: [
      'Velit voluptas totam, veniam-ad cupidatat duis dolor qui accusamus earum enim',
      'Proident ullamco at laborum ab consequat odit vero',
      'Sequi laborum excepteur ea ut architecto magna',
    ],
    caption: 'cassia bark',
    image: 'hero-benzoin-tears',
  },
  {
    id: 'bespoke',
    eyebrow: 'Bespoke creation',
    title: 'Illo et dolor do ut numquam unde aliquip rem repellat aut',
    body: 'Facilis quia libero modi et voluptatibus natus beatae est lorem, rem error ipsa veniam. Id irure cillum iste cum ex esse aut odio in neque omnis iste commodo quis ea maxime nam itaque sunt corporis ex magna at cumque vero ut sit. Odit nobis: minima, adipiscing, excepturi, qui ad reiciendis ducimus quam ea labore temporibus voluptas et ut.',
    points: [
      'Illum dolore itaque lorem fugit ea at veniam magni',
      'Occaecati qui adipiscing debitis veniam quos-rem',
      'Mollit voluptatem aperiam facilis sit numquam',
    ],
    cta: 'Start a brief',
    href: '/contact/',
    caption: 'petal, close',
    image: 'fragrance-petal',
  },
  {
    id: 'functional',
    eyebrow: 'Functional bases',
    title: 'Corrupti modi, iure quis rem cillum, ex sed vero commodo',
    body: 'Rem aute occaecat soluta iure praesentium do ab doloremque eius anim id dolores, quo id porro anim ut qui animi odit ut adipisci nam minus ad vero quaerat. Duis do dolores non reiciendis accusantium ad vel molestias nemo vero: excepteur sunt aut voluptatibus cum illo-ea-aut at unde ut ab at quae maiores.',
    points: [
      'Corporis modi, odit elit, minima cum quia',
      'Quis-ex-rem soluta est dolore qui cillum, est fugit',
      'Pariatur cum necessitatibus anim do eiusmod',
    ],
    caption: 'bloom, close',
    image: 'fragrance-bloom',
  },
];

export const FINE_QUOTE: Quote = {
  text: 'Vel amet porro lorem dolorem iste et anim iste ut sapiente debitis, minima eum ab totam eum. Incidunt at esse repellat laboris ut magnam.',
  attribution: 'Unde ea Voluptate, Suscipit',
};

/* ── Fragrance Innovation ──────────────────────────────────── */

export const INNOVATION_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Fragrance Innovation',
  lede: 'Temporibus quam magni aliquip ipsa vel ab ex elit aliquid tempor enim at ad. Blanditiis facere, incididunt odio, est non incididunt cumque voluptatem ab quam dolorem minus.',
  description:
    'Veritatis temporibus in corrupti: quo adipiscing soluta, necessitatibus odit, distinctio dolorem qui mollitia adipisci dolorem non at quo saepe illum.',
  caption: 'processing line',
  image: 'material-ginger',
};

export const INNOVATION_PASSAGES: Passage[] = [
  {
    id: 'fractionation',
    eyebrow: 'Fractionation',
    title: 'Non adipisci, tempora cumque voluptates',
    body: 'Et aperiam corporis ut quo rem alias. Consequuntur ab voluptate quo velit quisquam rem sunt quo impedit corporis aute, eum fugit consequat eum molestiae saepe nemo est nam — eveniet ea beatae asperiores esse sequi maxime. Hic ipsa quia at labore 1234 quo qui quas mollit itaque, occaecati sed magnam.',
    points: [
      'Pariatur quo delectus eveniet accusamus',
      'Non-iste doloribus excepteur sit quam neque',
      'Nostrum-impedit aliqua vel nemo ipsa',
    ],
    caption: 'processing line',
    image: 'material-nutmeg',
  },
  {
    id: 'analysis',
    eyebrow: 'Analytical control',
    title: 'Sed perspiciatis ex odit minus eius nam reiciendis quos',
    body: 'Sequi quo id qui dolore do ut nesciunt, cum sed minus sunt quo nisi est fugiat soluta quos numquam in at quam. Vitae ad cumque minima id proident aperiam eos culpa fugit, do ratione rem omnis ab corrupti maxime do. At natus ad hic aspernatur vero eos et nam rerum iste odio in ea delectus.',
    points: [
      'Ea-ab ea lorem expedita nam',
      'Eaque rem omnis accusantium tempora quam commodi',
      'Dolore maxime excepteur, consequat eum aut nulla',
    ],
    caption: 'laboratory',
    image: 'material-patchouli',
  },
  {
    id: 'research',
    eyebrow: 'Naturals research',
    title: 'Quae at eligendi, explicabo proident',
    body: 'Non cumque cum illo ad nam nobis ipsam qui. Quo optio et do quas-laboris dicta aut placeat sunt ipsum eius do cum earum aut nemo ipsam nisi. Vel labore ab et veniam minus ab eveniet nostrud inventore minima quo eligendi ullamco at aliquid — ex eligendi est recusandae quos occaecat saepe hic nam laboriosam modi quo. Eiusmod ea deserunt. Quos esse id excepteur minima eos.',
    points: [
      'Odio-numquam nostrud: ea iusto',
      'Eiusmod delectus animi: nihil cumque ex illo',
      'Pariatur explicabo dolores ut non ipsa est cumque ad in',
    ],
    cta: 'Talk to the bench',
    href: '/contact/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
];

/* ── Halaman hub: hero + karusel ──────────────────────────────────────────
   Bentuk yang sama dengan halaman hub About. Fotonya, keterangannya, dan
   naskah tiap slide diambil dari data halaman ini sendiri — hero memakai foto
   PERFUMERY_INTRO, tiap slide memakai foto dan keterangan halaman anaknya.

   "Creative by nature" bukan kalimat baru: itu tagline Perfumery yang sudah
   dipakai di dua foto besar halaman depan. */
export const PERFUMERY_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Perfumery',
    headline: 'Creative by Nature.',
    shot: 'petal, close',
    href: '/perfumery/fine-fragrance/',
    image: 'fragrance-petal',
  },
];

export const PERFUMERY_SLIDES: CarouselSlide[] = [
  {
    title: 'Fine Fragrance',
    body: 'Dolorem animi non veritatis, nam ea adipisci rem nemo consequuntur nostrud. Placeat elit quas porro at recusandae officia.',
    cta: 'See fine fragrance',
    shot: 'dried rhizome',
    href: '/perfumery/fine-fragrance/',
    image: 'fragrance-resin',
  },
  {
    title: 'Fragrance Innovation',
    body: 'Duis do qui aliquid in id nam quasi: distinctio minima vero itaque do proident, non sed blanditiis quam ipsa maxime ut.',
    cta: 'See the bench work',
    shot: 'processing line',
    image: 'material-ginger',
    href: '/perfumery/fragrance-innovation/',
    bg: 'oklch(0.878 0.014 62)',
  },
];
