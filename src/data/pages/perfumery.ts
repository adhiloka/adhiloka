import type { LinkCard, PageIntro, Passage, Quote, Stat } from './types';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const PERFUMERY_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Aute do aute, ad sint officia.',
  metaTitle: 'Perfumery',
  lede: 'Id ipsam error id ipsam, laboris soluta eius deserunt id minima, iusto non doloribus molestiae. Dolor facere at est debitis vero at proident aut ipsum id cum qui quos ad alias do.',
  description:
    'Non deserunt accusamus: unde inventore commodo est reiciendis autem velit aute expedita eiusmod vel quibusdam in quo aut culpa ea vitae.',
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
    image: 'fragrance-resin',
  },
  {
    title: 'Fragrance Innovation',
    body: 'Quos ea est quaerat in ex hic minus: laboriosam tempor elit dolore do possimus, cum eos adipiscing quos quas cumque ab.',
    href: '/perfumery/fragrance-innovation/',
    image: 'material-ginger',
  },
];

/* ── Fine Fragrance ────────────────────────────────────────── */

export const FINE_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Fine Fragrance',
  lede: 'Ducimus cum ad adipisci, magni ex ut vero itaque anim impedit. Quos ex anim id ea nisi, ut quas.',
  description:
    'Adipisci modi consequat: nesciunt-nam maiores, tempore voluptas sint optio at distinctio eveniet, vel in eiusmod ullam nemo vel nam delectus accusamus.',
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
      'Expedita officia ut impedit id veritatis anim unde',
      'Minus officia occaecati ex ut doloremque autem',
    ],
    caption: 'cinnamon bark',
    image: 'hero-benzoin-tears',
  },
  {
    id: 'bespoke',
    eyebrow: 'Bespoke creation',
    title: 'Illo et dolor do ut numquam unde aliquip rem repellat aut',
    body: 'Facilis quia libero modi et voluptatibus natus beatae est lorem, rem error ipsa veniam. Id irure cillum iste cum ex esse aut odio in neque omnis iste commodo quis ea maxime nam itaque sunt corporis ex magna at cumque vero ut sit. Odit nobis: minima, adipiscing, excepturi, qui ad reiciendis ducimus quam ea labore temporibus voluptas et ut.',
    points: [
      'Ipsam libero itaque velit autem in ea facere nulla',
      'Occaecati qui adipiscing debitis veniam quos-rem',
      'Veniam aspernatur laboris tempora eum dolores',
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
      'Voluptas sint, enim unde, facere qui quam',
      'Anim-ut-nam aliqua nam magnam cum cumque, quo minus',
      'Pariatur cum necessitatibus anim do eiusmod',
    ],
    caption: 'bloom, close',
    image: 'fragrance-bloom',
  },
];

export const FINE_QUOTE: Quote = {
  text: 'Hic duis sequi magni impedit quis ea quia ipsa et corporis facilis, minima quo ex ipsam est. Nesciunt in aute proident ducimus at cumque.',
  attribution: 'Nemo ut Similique, Sapiente',
};

/* ── Fragrance Innovation ──────────────────────────────────── */

export const INNOVATION_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Fragrance Innovation',
  lede: 'Incididunt quis sequi eveniet quas eum id ad iure nostrud maxime quis do ea. Doloremque veniam, aspernatur esse, est vel recusandae fugiat recusandae et sint commodo error.',
  description:
    'Molestias cupiditate in delectus: eos recusandae maxime, voluptatibus quas, aspernatur commodo eum quisquam incidunt ducimus eum ad eum sequi earum.',
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
      'Aut-quia quibusdam doloribus rem sunt iusto',
      'Aperiam-ducimus fugiat est quia nisi',
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
      'Id-ad id ipsam possimus non',
      'Eaque rem omnis accusantium tempora quam commodi',
      'Soluta cillum occaecati, similique eum quo fugit',
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
      'Ipsa-quaerat nostrum: et alias',
      'Maiores deleniti nulla: fugit cillum ab aute',
      'Pariatur explicabo dolores ut non ipsa est cumque ad in',
    ],
    cta: 'Talk to the bench',
    href: '/contact/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
];
