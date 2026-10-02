import type { ImageKey } from '../images';
import type { CarouselSlide, LinkCard, PageIntro, Passage, Quote, Stat } from './types';
import type { HeroSlide } from './home';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const ABOUT_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'In nihil animi do est dicta, hic ad hic debitis vero iste ea.',
  metaTitle: 'About',
  lede: 'Quo consequatur et vel quos facere, libero aperiam odit sed sint incidunt commodi, incidunt ab id quo sit velit in nihil, vel doloribus ea do sit sed earum.',
  description:
    'Delectus ea in tempor-quis laboriosam omnis at tempora occaecati: proident pariatur nihil itaque tempore, quos rem itaque, aliquip ex dolor sed possimus ea non voluptate autem.',
  image: 'about-table',
  caption: 'three people talking over a laid table',
};

export const ABOUT_STATS: Stat[] = [
  { value: '1234s', label: 'Optio commodi libero' },
  { value: '1', label: 'Repudiandae et quo minus' },
  { value: '12', label: 'Nesciunt ea sed dolores' },
  { value: '1,234+', label: 'Aperiam distinctio' },
];

export const ABOUT_OPENING = [
  'Et cum ad aliquid molestias dolor, qui id consectetur. Minima architecto id quod magnam officia tenetur ab sed unde incidunt, ut nostrud illum ab aut occaecati, hic minima ut qui. Anim do ut labore eum ab modi non at sint molestiae eos, est id in vel quae hic at duis quo at mollit non quos ut in qui quia.',
  'Vel porro earum illo aliquid. Ab optio iure atque, ad sit irure odit debitis at sed quisquam id nam magnam at eos sit non quam tempor ex ab lorem in itaque ex at deserunt libero quod id repellat. Molestias natus proident magnam et quam ab ratione est id nisi, quo qui fugiat quo nam dolorem illo: quis vel inventore, velit ea iure, aperiam quo voluptatibus.',
];

/* Hero halaman hub: satu slide, bentuk dan gerak yang sama dengan hero beranda
   — Ken Burns pelan, judul yang naik, Discover, dan panah bawah. Karena hanya
   satu slide, panah samping dan titik pemilih tidak dirender.

   "Family-Held." diambil apa adanya dari jeda penutup di beranda ("Family-held
   since the 1840s."), jadi tidak ada naskah baru yang dikarang di sini. */
export const ABOUT_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'About Adhiloka',
    headline: 'Rooted in Indonesia.',
    shot: 'a chick among buttercups in long grass',
    href: '/about/our-history/',
    image: 'about-chick',
  },
];

/* Lima pintu ke halaman anak, sebagai pita berkarusel — bentuk yang sama
   dengan pita "Our purpose" di halaman depan. Dua di antaranya berfoto
   sungguhan; tiga sisanya memakai pelat hatch dengan keterangan foto yang
   dibutuhkan, dan itu keadaan yang sah di sistem desain ini. */
export const ABOUT_SLIDES: CarouselSlide[] = [
  {
    title: 'Our Business',
    body: 'Ipsam doloremque earum sit vero — nesciunt non distinctio, reiciendis libero, rem veritatis — aute eveniet eos odio.',
    cta: 'See our business',
    shot: 'benzoin resin, hand-graded',
    href: '/about/our-business/',
    image: 'material-benzoin',
  },
  {
    title: 'Our Leadership',
    body: 'Sit facere accusantium vel illo itaque nam culpa, cum hic eos porro odit do vel blanditiis nulla.',
    cta: 'Meet the leadership',
    shot: 'grading floor',
    image: 'about-table',
    href: '/about/our-leadership/',
    bg: 'oklch(0.872 0.016 80)',
  },
  {
    title: 'Our Purpose',
    body: 'Non do est nam eum ea in, sit odit et aut magnam id irure quisquam do iusto alias.',
    cta: 'Our purpose',
    shot: 'two children running through a summer meadow at dusk',
    href: '/about/our-purpose/',
    image: 'purpose-generations',
    focus: '18% 50%',
  },
  {
    title: 'Our History',
    body: 'Quod et maxime veniam ad ratione ex id consequuntur quam ab earum, ad cum perferendis.',
    cta: 'Read the history',
    shot: 'purchase ledger',
    image: 'material-benzoin',
    href: '/about/our-history/',
    bg: 'oklch(0.882 0.022 52)',
  },
  {
    title: 'Our Locations',
    body: 'Minim eos tenetur, qui deserunt, eos dicta non sit vitae qui, vel iste quod ex esse iure.',
    cta: 'See our locations',
    shot: 'collection station',
    image: 'hero-agroforest',
    href: '/about/our-locations/',
    bg: 'oklch(0.864 0.02 118)',
  },
];

/* Blok pembuka, deret angka dan kartu di bawah ini TIDAK dipakai lagi sejak
   halaman hub About dipadatkan jadi tiga section (foto penuh, karusel, footer).
   Naskahnya disimpan di sini supaya tidak hilang — kalau nanti butuh tempat,
   isinya sudah siap pakai. */
export const ABOUT_CARDS: LinkCard[] = [
  {
    title: 'Our Business',
    body: 'Animi asperiores animi nam quas — pariatur vel temporibus, asperiores aliqua, sit quibusdam — odio placeat est iure.',
    href: '/about/our-business/',
  },
  {
    title: 'Our Leadership',
    body: 'Nam labore accusantium aut sunt aliqua aut velit, hic quo non illum iure ut quo laboriosam magna.',
    href: '/about/our-leadership/',
  },
  {
    title: 'Our Purpose',
    body: 'Eos ab est cum sed ut at, rem nemo ea sed mollit at culpa expedita do velit optio.',
    href: '/about/our-purpose/',
  },
  {
    title: 'Our History',
    body: 'Quod id beatae minima ad debitis ut ex necessitatibus aute in culpa, ut cum repudiandae.',
    href: '/about/our-history/',
  },
  {
    title: 'Our Locations',
    body: 'Minim qui commodo, aut proident, cum dolor sed non quasi vel, sit nemo anim ad esse quis.',
    href: '/about/our-locations/',
  },
];

/* ── Our Business ────────────────────────────────────────────────────── */

export const BUSINESS_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Business',
  lede: 'At hic amet vel magnam, itaque elit ut est, non eiusmod quae quis in fugiat. Quia eligendi soluta facilis quo rem labore ab tempor ex.',
  description:
    'Sapiente aute atque assumenda cupiditate: impedit est quisquam pariatur cum cupiditate, laboriosam aliqua ut sed similique quisquam, rem eum aut occaecati earum.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark',
};

export const BUSINESS_PASSAGES: Passage[] = [
  {
    id: 'sourcing',
    eyebrow: 'Sourcing & extraction',
    title: 'Qui unde ea nam sapiente illo itaque do ad beatae labore',
    body: 'Placeat ut libero illo delectus magna ab quasi facere tempora, soluta omnis, ut blanditiis eos iste itaque nam ipsa mollit est repellendus. Ea sed at unde laudantium mollitia itaque enim facilis consequuntur, illum sequi ex quis hic minima id eos anim quam cum quo eaque do soluta in id aliquid odio voluptate. Enim nostrud ut magnam ea sunt iure saepe inventore et nam aut atque, aute excepteur ad quo illum ab natus.',
    points: [
      'Quam cupiditate occaecat labore culpa dolores non odio',
      'Unde dolores beatae incididunt, quasi lorem',
      'Minus perspiciatis, corporis rem repellat tempor ex-nihil',
    ],
    cta: 'How we source',
    href: '/sustainability/responsible-sourcing/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
  {
    id: 'ingredients',
    eyebrow: 'Ingredient supply',
    title: 'Occaecat nesciunt, anim modi do molestiae exercitation',
    body: 'Aliqua, odit quos, dolor, magnam eum cum iste. Magna mollitia ab cum aliquid nostrum quo maxime, cupiditate natus, dolores libero hic ea exercitationem ut quos labore dolorem facere aute hic quo. Itaque aut cum nisi quisquam ab amet quod, quibusdam eum lorem ut amet est consequat. Cum-modi ullamco irure optio vero ex nihil dignissimos cum ex ab fugit.',
    points: [
      'Exercitationem illo mollit numquam, non quo qui',
      'Dolor accusantium non ad porro unde animi aliqua',
      'Elit libero expedita temporibus mollit dicta nostrud sunt',
    ],
    cta: 'Browse the catalog',
    href: '/ingredients/catalog/',
    caption: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    id: 'perfumery',
    eyebrow: 'Perfumery',
    title: 'At alias ex sed enim eos ullamco ab culpa et',
    body: 'Hic veritatis cumque commodi cupidatat nisi dolore duis vel sapiente ipsam ut officiis. Ad ab ut atque explicabo ab repellat molestias aut exercitation id: nostrum quo voluptatem dicta saepe beatae modi excepteur ex sunt eos veritatis inventore, occaecati optio cumque ut sit magnam vero in officiis eos minus do rem eum anim et ad cumque.',
    points: [
      'Nemo explicabo tenetur est voluptatem neque',
      'Numquam modi amet minim do reiciendis eveniet',
      'Deserunt-non laboris, possimus quam ut ad ducimus',
    ],
    cta: 'See the perfumery',
    href: '/perfumery/',
    caption: 'petal, close',
    image: 'fragrance-petal',
  },
];

/* ── Our Leadership ──────────────────────────────────────────────────── */

export const LEADERSHIP_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Leadership',
  lede: 'Et ipsum dolor, quas ad unde sint nihil ut est aliquip ipsum. Aliquid illo odio itaque rem duis labore quo nulla qui cum ipsa do illo in aut cupiditate magna.',
  description:
    'Rem tempor eos sint nesciunt error: doloribus recusandae facere voluptas, cupiditate, doloribus, exercitationem quo voluptas.',
  caption: 'boardroom',
  image: 'about-table',
};

export type Leader = { name: string; role: string; bio: string; shot: string };

/* PLACEHOLDER — jabatannya nyata, namanya belum. Isi dengan jajaran
   sebenarnya sebelum situs terbit; jangan biarkan nama karangan naik ke
   halaman leadership. */
export const LEADERSHIP: Leader[] = [
  {
    name: 'Quod nobis reiciendis',
    role: 'Sequi Occaecati',
    bio: 'Dolor asperiores ea sed corrupti veniam. Aliqua eos quaerat optio aliqua quo tempor, sit totam magna qui est eiusmod cumque doloremque nisi minima.',
    shot: 'portrait',
  },
  {
    name: 'Modi atque recusandae',
    role: 'Officiis in Repellat',
    bio: 'Unde vel elit laudantium adipisci rem sed perspiciatis dolore unde. Nemo est fugit magni cumque duis commodi maxime alias.',
    shot: 'portrait',
  },
  {
    name: 'Quos totam distinctio',
    role: 'Mollitia ad Aspernatur',
    bio: 'Dignissimos non vero consequuntur ipsum, quo laboris velit qui eos reprehenderit aute, eum non aut reprehenderit odio itaque quos.',
    shot: 'portrait, still hall',
  },
  {
    name: 'Iste fugit blanditiis',
    role: 'Quia ut Voluptate',
    bio: 'Earum rem ipsam sit cum tempora sunt. Ratione at beatae, officiis ut dicta ea adipisci-quo tenetur odit vel maxime vel.',
    shot: 'portrait, weighing room',
  },
  {
    name: 'Sint nulla distinctio',
    role: 'Vero at Exercitationem',
    bio: 'Minus eos perspiciatis aliqua aut nam inventore pariatur, sed dolore eius ducimus iste hic suscipit nesciunt eius.',
    shot: 'portrait, agroforest',
  },
  {
    name: 'Iste natus cupiditate',
    role: 'Incididunt Incidunt',
    bio: 'Labore, veritatis est rem dolore exercitationem. Cum error unde hic nisi libero aliquip excepturi.',
    shot: 'portrait',
  },
];

/* ── Our Purpose ─────────────────────────────────────────────────────── */

export const PURPOSE_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Purpose',
  lede: 'Nam possimus nobis sint magni do aut minima quo est deserunt sed iure ex quo error saepe ut autem alias. Temporibus do ea ut aspernatur ut anim occaecat.',
  description:
    'Eos ratione in delectus dolor: laboris est cillum sit sed aspernatur aut illo at cumque, ab aut officiis nihil animi cumque ex saepe autem.',
  caption: 'kemenyan agroforest canopy',
  image: 'agroforest-canopy',
};

export const PURPOSE_BODY = [
  'Ab dolores quos id dolore, eos magnam. Quas labore iure ab vel est deleniti aliquid iusto ipsa maxime id sunt, aut at ad nisi non eos voluptas ad occaecati, quas quo exercitation repellendus. Ut magna vero culpa neque commodo nobis elit nisi doloremque est ad do quaerat tenetur ea velit qui ullamco. Id alias minima eius do molestias minima.',
  'Ea aut placeat do eum id quibusdam alias libero. Ea at id voluptatem doloremque: aut ad ipsam atque mollit tempor vel veniam mollit unde earum, qui ad cum aliquip magnam illo eiusmod et consequuntur, est quas aut cupidatat incidunt ab eum non sit sed vel do sit odit. Nulla nihil labore nemo ab tempor, nam quam non vel mollit vel debitis vel nobis minus aliquid.',
];

export const PURPOSE_VALUES: { title: string; body: string }[] = [
  {
    title: 'Magnam sit non qui',
    body: 'Sequi elit qui ad beatae modi at do reiciendis animi vel et molestias. Ex ab facere, ex ab non illo ut.',
  },
  {
    title: 'Sequi minima aut minima',
    body: 'Ex natus nobis cumque sequi nulla ex nulla aute at vero in velit iure do ut minima quam et sunt nulla facilis ex ullamco.',
  },
  {
    title: 'Saepe ea illo',
    body: 'Suscipit modi magnam sed nobis. Nihil assumenda, magnam at itaque est sunt quas at rem lorem, magnam officiis ullamco ex atque.',
  },
  {
    title: 'Aperiam nam excepturi iusto',
    body: 'Sit consequuntur iste odit ex hic cillum aut in cum proident dicta. Soluta duis minima quia est error illo quae ex tempora.',
  },
];

export const PURPOSE_QUOTE: Quote = {
  text: 'Ea nam sed dolore ad unde aliquid. Ex nam aliqua id ea rem culpa dolor cillum nemo sequi cumque odio cum magnam officia quam non enim consequuntur.',
  attribution: 'Adhiloka Group',
};

/* ── Our History ─────────────────────────────────────────────────────── */

export const HISTORY_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our History',
  lede: 'Eos minima ut officia, quo repellendus, eum id possimus tempore et fugit quo officiis duis commodo ea.',
  description:
    'Aut ullamco ea possimus dicta, amet ut debitis magnam et 1234s commodo ab id exercitation amet non quibusdam eaque ex optio.',
  caption: 'still hall',
  image: 'material-benzoin',
};

export type Era = { year: string; title: string; body: string };

export const HISTORY_TIMELINE: Era[] = [
  {
    year: '2000',
    title: 'Do itaque et ullamco',
    body: 'Nam mollit magnam tempor eiusmod ex nam duis, ad veniam sapiente ea ullamco libero cum minima. Quo magnam deleniti, non qui iusto aperiam ea at qui quasi ea rem quam id dicta qui.',
  },
  {
    year: '2003',
    title: 'Ipsum incididunt tempore',
    body: 'At quibusdam cillum iste autem labore, ducimus cum exercitationem cum ab eum optio quo tempore eos fugiat ad magna ad est blanditiis quo nam magna illo.',
  },
  {
    year: '2006',
    title: 'Vel saepe error',
    body: 'Ad fugiat magnam rerum ab ipsam. Error anim recusandae iure laboris ea non saepe; ipsa sunt sit nobis ipsum nisi ab non impedit beatae.',
  },
  {
    year: '2009',
    title: 'Libero ullamco',
    body: 'Consequat, incididunt sit error quam dicta est odit in qui neque distinctio magni odio. Est nostrud eiusmod iure explicabo cillum sed aliqua quis.',
  },
  {
    year: '2012',
    title: 'Est ipsum totam',
    body: 'Est voluptatibus atque nam at assumenda ipsum officia neque eveniet quo qui modi. Corrupti ducimus; nam aute tempora ipsa eos aliqua.',
  },
  {
    year: '2015',
    title: 'Perspiciatis ab eum consequat',
    body: 'Sit inventore corporis magnam. Dolor eveniet non iure quam illum nostrum sed aspernatur nihil quo nam beatae ea odit sint, officiis ad laboris magnam modi exercitation irure.',
  },
  {
    year: '2018',
    title: 'Reprehenderit non hic porro',
    body: 'Ex perspiciatis esse sit do nihil inventore aute id vel quis duis, ea sit fugit nam labore quod esse in corrupti ab sed aute et cum et.',
  },
  {
    year: 'Today',
    title: 'Occaecat eligendi, nam repudiandae',
    body: 'Magnam, quas enim, earum, minima cum non quis, deleniti ea vero cupidatat nam adipiscing itaque cumque unde asperiores, nobis iure nam eius ullamco.',
  },
];

/* ── Our Locations ───────────────────────────────────────────────────── */

export const LOCATIONS_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Locations',
  lede: 'Laborum, quisquam, eaque nam ipsam. Cumque aspernatur eligendi do hic quam quis itaque ab eum ut architecto duis.',
  description:
    'Suscipit inventore: voluptates pariatur minima alias laboris rem illo, qui animi lorem, nam incididunt officia ab nostrum cum tempor.',
  caption: 'benzoin gardens',
  image: 'hero-agroforest',
};

export type Site = {
  city: string;
  region: string;
  kind: string;
  body: string;
  detail: string[];
  shot: string;
  image?: ImageKey;
};

export const SITES: Site[] = [
  {
    city: 'Culpa',
    region: 'Lorem Ratione',
    kind: 'Dolore & irure magna',
    body: 'Sit consequuntur nulla, nam iusto placeat natus, hic necessitatibus elit eos cum doloribus minim, nisi nam autem eius maxime est non et at.',
    detail: ['Ullam exercitation', 'Officiis & corrupti', 'Voluptatibus', 'Cupidatat ipsum'],
    shot: 'still hall',
    image: 'fragrance-resin',
  },
  {
    city: 'Eveniet',
    region: 'Saepe Dolorem',
    kind: 'Commodo sit amet',
    body: 'Eum beatae ipsa ab cum nostrud hic rem officia ab nam facilis ratione. Tempora cumque eius cillum possimus minus ea iusto.',
    detail: ['Ducimus minima', 'Ullam impedit', 'Voluptate adipisci'],
    shot: 'benzoin intake',
    image: 'material-benzoin',
  },
  {
    city: 'Mollitia',
    region: 'Dicta Laboris',
    kind: 'Commodo sit amet',
    body: 'Minima rem corrupti facere nostrum expedita. Ipsam libero est aut mollit non libero odit maxime dolorem cumque.',
    detail: ['Commodi aliqua', 'Cillum quaerat', 'Magnam possimus'],
    shot: 'collection post',
    image: 'agroforest-canopy',
  },
  {
    city: 'Suscipit',
    region: 'Quos',
    kind: 'Commodo sit amet',
    body: 'Voluptate qui doloremque impedit. Quo sint ad mollit sed natus commodo libero illo tenetur atque veniam eos officiis.',
    detail: ['Inventore labore', 'Irure soluta', 'Natus exercitation'],
    shot: 'drying floor',
    image: 'material-patchouli',
  },
  {
    city: 'Eveniet',
    region: 'Ipsa',
    kind: 'Laboris & tempor',
    body: 'Inventore, voluptatibus hic minima. Eum sint nisi mollit unde aute eos do vel.',
    detail: ['Beatae reprehenderit', 'Doloribus', 'Excepteur'],
    shot: 'office',
    image: 'hero-benzoin-tears',
  },
  {
    city: 'Facere',
    region: 'Maxime',
    kind: 'Fugiat veniam aliqua',
    body: 'Ad dolore facere ullamco nesciunt excepturi soluta id odit ab ut cillum non atque eos unde, rem do repellat anim quos vel.',
    detail: ['Pariatur laborum', 'Cillum possimus', 'Voluptates'],
    shot: 'office',
    image: 'hero-still-hall',
  },
];
