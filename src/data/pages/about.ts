import type { ImageKey } from '../images';
import type { LinkCard, PageIntro, Passage, Quote, Stat } from './types';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const ABOUT_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Ab natus lorem at sit magni, est ab eum tempore eius duis id.',
  metaTitle: 'About',
  lede: 'Aut repellendus do hic amet maxime, dolore debitis elit quo unde suscipit ratione, sapiente et ad non est nulla et omnis, aut accusamus ea ex sed qui culpa.',
  description:
    'Corporis ab do soluta-quae voluptates culpa ad eveniet similique: deserunt repellat lorem minima laborum, sint qui magnam, impedit ut vitae cum corporis ad est veritatis alias.',
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

/* Kartu lima halaman anak, dipakai grid penutup halaman hub About dan
   bilah "Explore more" di halaman anaknya. */
export const ABOUT_CARDS: LinkCard[] = [
  {
    title: 'Our Business',
    body: 'Animi asperiores animi nam quas — pariatur vel temporibus, asperiores aliqua, sit quibusdam — odio placeat est iure.',
    href: '/about/our-business/',
    image: 'material-benzoin',
  },
  {
    title: 'Our Leadership',
    body: 'Nam labore accusantium aut sunt aliqua aut velit, hic quo non illum iure ut quo laboriosam magna.',
    href: '/about/our-leadership/',
    image: 'about-table',
  },
  {
    title: 'Our Purpose',
    body: 'Eos ab est cum sed ut at, rem nemo ea sed mollit at culpa expedita do velit optio.',
    href: '/about/our-purpose/',
    image: 'purpose-generations',
  },
  {
    title: 'Our History',
    body: 'Quod id beatae minima ad debitis ut ex necessitatibus aute in culpa, ut cum repudiandae.',
    href: '/about/our-history/',
    image: 'hero-benzoin-tears',
  },
  {
    title: 'Our Locations',
    body: 'Minim qui commodo, aut proident, cum dolor sed non quasi vel, sit nemo anim ad esse quis.',
    href: '/about/our-locations/',
    image: 'agroforest-canopy',
  },
];

/* ── Our Business ────────────────────────────────────────────────────── */

export const BUSINESS_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Business',
  lede: 'Ex non sint eos veniam, tempor illo ad eum, vel eveniet ipsa sint ab veniam. Quos repellat tempor tenetur rem eum magnam ad beatae do.',
  description:
    'Incidunt esse ipsum molestias voluptates: tempore aut officiis corrupti hic recusandae, laudantium labore ex rem cupidatat quisquam, aut eos qui occaecati earum.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark, Kerinci',
};

export const BUSINESS_PASSAGES: Passage[] = [
  {
    id: 'sourcing',
    eyebrow: 'Sourcing & extraction',
    title: 'Qui unde ea nam sapiente illo itaque do ad beatae labore',
    body: 'Placeat ut libero illo delectus magna ab quasi facere tempora, soluta omnis, ut blanditiis eos iste itaque nam ipsa mollit est repellendus. Ea sed at unde laudantium mollitia itaque enim facilis consequuntur, illum sequi ex quis hic minima id eos anim quam cum quo eaque do soluta in id aliquid odio voluptate. Enim nostrud ut magnam ea sunt iure saepe inventore et nam aut atque, aute excepteur ad quo illum ab natus.',
    points: [
      'Quam cupiditate occaecat labore culpa dolores non odio',
      'Quam quaerat soluta blanditiis, eaque culpa',
      'Error voluptatibus, deserunt aut adipisci veniam ad-animi',
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
      'Exercitation ipsa magnam ducimus, non sed vel',
      'Dolor accusantium non ad porro unde animi aliqua',
      'Unde soluta corporis distinctio aliqua omnis ullamco sunt',
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
      'Sunt voluptate aperiam cum doloremque illum',
      'Aliquip odit esse totam do distinctio placeat',
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
  lede: 'In velit natus, amet in quas quae quasi ea sit eveniet omnis. Ducimus duis aute magnam quo vero tempor sit magni vel sit quia at quos ex vel aspernatur atque.',
  description:
    'Hic veniam rem sint deleniti error: similique incididunt magnam deserunt, aspernatur, assumenda, necessitatibus est suscipit.',
  caption: 'boardroom, Jl. Imam Bonjol',
  image: 'about-table',
};

export type Leader = { name: string; role: string; bio: string; shot: string };

/* PLACEHOLDER — nama, jabatan dan bio berupa lorem ipsum (29 Sep 2026).
   Isi dengan jajaran sebenarnya sebelum situs terbit; jangan biarkan nama
   karangan naik ke halaman leadership. */
export const LEADERSHIP: Leader[] = [
  {
    name: 'Quod nobis reiciendis',
    role: 'Sequi Occaecati',
    bio: 'Dolor asperiores ea sed corrupti veniam. Aliqua eos quaerat optio aliqua quo tempor, sit totam magna qui est eiusmod cumque doloremque nisi minima.',
    shot: 'portrait, Medan',
  },
  {
    name: 'Modi atque recusandae',
    role: 'Officiis in Repellat',
    bio: 'Unde vel elit laudantium adipisci rem sed perspiciatis dolore unde. Nemo est fugit magni cumque duis commodi maxime alias.',
    shot: 'portrait, Sibolga station',
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
    shot: 'portrait, Jakarta office',
  },
];

/* ── Our Purpose ─────────────────────────────────────────────────────── */

export const PURPOSE_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our Purpose',
  lede: 'Nam deleniti alias quod autem at non magnam eos sit officiis qui anim id sit rerum magna ut earum magna. Adipiscing ab at id doloremque et quam sapiente.',
  description:
    'Non tempora ad nesciunt error: laborum cum facere sed sit cupiditate non enim ad itaque, ad eos possimus culpa alias aliqua id saepe fugit.',
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
  text: 'Ex rem est beatae ea quas dolores. In est minima et do sed natus lorem facere quos ipsum mollit modi sed maxime tempore amet est quam perspiciatis.',
  attribution: 'Mollitia Porro',
};

/* ── Our History ─────────────────────────────────────────────────────── */

export const HISTORY_INTRO: PageIntro = {
  eyebrow: 'About Adhiloka',
  title: 'Our History',
  lede: 'Hic cillum at placeat, nam praesentium, aut id repellat laboris ex earum non nesciunt modi debitis ut.',
  description:
    'Est laboris in voluptas earum, illo at eiusmod itaque do 1234s commodi ex in necessitatibus aute qui cupidatat magni do minim.',
  caption: 'still hall, Medan works',
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
  lede: 'Dolorem, repellat, autem eum irure. Itaque doloremque possimus in non nemo vero cumque ut cum id voluptatem esse.',
  description:
    'Occaecat cupidatat: distinctio proident mollit omnis ullamco nam modi, nam eaque dicta, aut cupiditate ducimus do facilis sit minima.',
  caption: 'Tapanuli benzoin gardens',
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
    kind: 'Rerum & unde tempor',
    body: 'Sit consequuntur nulla, nam iusto placeat natus, hic necessitatibus elit eos cum doloribus minim, nisi nam autem eius maxime est non et at.',
    detail: ['Ullam exercitation', 'Officiis & occaecat', 'Reprehenderit', 'Consequat autem'],
    shot: 'still hall, Medan works',
    image: 'fragrance-resin',
  },
  {
    city: 'Eveniet',
    region: 'Saepe Dolorem',
    kind: 'Aspernatur commodo',
    body: 'Eum beatae ipsa ab cum nostrud hic rem officia ab nam facilis ratione. Tempora cumque eius cillum possimus minus ea iusto.',
    detail: ['Commodo facere', 'Ullam impedit', 'Cupidatat suscipit'],
    shot: 'benzoin intake, Sibolga',
    image: 'material-benzoin',
  },
  {
    city: 'Mollitia',
    region: 'Dicta Laboris',
    kind: 'Architecto ratione',
    body: 'Minima rem corrupti facere nostrum expedita. Ipsam libero est aut mollit non libero odit maxime dolorem cumque.',
    detail: ['Commodo facere', 'Cillum debitis', 'Magnam possimus'],
    shot: 'collection post, Tarutung',
    image: 'agroforest-canopy',
  },
  {
    city: 'Suscipit',
    region: 'Quos',
    kind: 'Reiciendis dolorem',
    body: 'Voluptate qui doloremque impedit. Quo sint ad mollit sed natus commodo libero illo tenetur atque veniam eos officiis.',
    detail: ['Quibusdam magnam', 'Animi fugiat', 'Irure voluptatibus'],
    shot: 'drying floor, Takengon',
    image: 'material-patchouli',
  },
  {
    city: 'Eveniet',
    region: 'Ipsa',
    kind: 'Distinctio & labore',
    body: 'Inventore, voluptatibus hic minima. Eum sint nisi mollit unde aute eos do vel.',
    detail: ['Cillum voluptatibus', 'Doloribus', 'Veritatis'],
    shot: 'commercial office, Jakarta',
    image: 'hero-benzoin-tears',
  },
  {
    city: 'Facere',
    region: 'Maxime',
    kind: 'Fugiat exercitationem',
    body: 'Ad dolore facere ullamco nesciunt excepturi soluta id odit ab ut cillum non atque eos unde, rem do repellat anim quos vel.',
    detail: ['Occaecat eiusmod', 'Itaque delectus', 'Laudantium'],
    shot: 'representation office, Grasse',
    image: 'hero-still-hall',
  },
];
