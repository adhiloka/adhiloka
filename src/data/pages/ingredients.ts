import type { CarouselSlide, LinkCard, PageIntro, Passage, Stat } from './types';
import type { HeroSlide } from './home';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const INGREDIENTS_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Incidunt officiis, sed cum accusamus in elit velit sit.',
  metaTitle: 'Ingredients',
  lede: 'Veniam, quis enim, sequi, minima vel eos esse. Duis eius do itaque, ad distinctio culpa, ut facilis libero vel ab perspiciatis ad quae dolore ratione.',
  description:
    'Aut eligendi repellendus saepe: eligendi distinctio quisquam nemo consequat reprehenderit, asperiores beatae, eveniet facilis hic unde exercitation.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark',
};

export const INGREDIENTS_STATS: Stat[] = [
  { value: '12', label: 'Quisquam id aut laboris' },
  { value: '1', label: 'Explicabo deserunt' },
  { value: '12 et', label: 'Incidunt tempor amet' },
  { value: '1 odit', label: 'Nostrum incidunt' },
];

export const INGREDIENTS_OPENING = [
  'Aut officia ex sequi ex aperiam. Officiis voluptate ad amet in cum quod, non, magna hic consequat aliquip eveniet do ut aliqua cupidatat at sit cumque. Cillum do doloremque nobis nisi facere commodi laborum labore id hic ipsa et incidunt at aliqua rerum, vel et quae qui odit ullamco id ea quo veniam.',
  'Quod aut eos sint duis ex amet ex est vero corporis do quos amet: iusto do odit, aut fugiat ad quo ut, nam ex quo explicabo, modi et ex veritatis, aut eius eos expedita ipsa. Molestias rem nostrum elit qui sapiente nisi accusamus ab eaque veniam ut vel eum.',
];

export const INGREDIENTS_CARDS: LinkCard[] = [
  {
    title: 'Ingredients Catalog',
    body: 'Qui quisquam mollitia, blanditiis ex quibusdam minima, enim esse non quam voluptatibus eum aliqua eveniet.',
    href: '/ingredients/catalog/',
  },
  {
    title: 'Technology',
    body: 'Cum recusandae libero cillum sed impedit — neque, deleniti, eligendi, perspiciatis — rem quo incidunt esse natus vero tempor.',
    href: '/ingredients/technology/',
  },
];

/* ── Katalog ─────────────────────────────────────────────────────────── */

export const CATALOG_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ingredients Catalog',
  lede: 'Cillum ab soluta, modi ea repellat rem nam elit exercitationem, sed quaerat cum rerum quia hic illo nulla.',
  description:
    'Tempor nam delectus suscipit mollitia et accusamus facere, odit magnam, recusandae sequi, dolorem veniam aut exercitation aut iste.',
  caption: 'grading floor',
  image: 'material-nutmeg',
};

export const CATALOG_NOTE =
  'Perspiciatis fugit quis non cillum. Nobis ea dolores veniam rem itaque, ex rem in veniam eius commodo debitis porro ut id eos unde.';

/* ── Technology ──────────────────────────────────────────────────────── */

export const TECHNOLOGY_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Technology',
  lede: 'Sint voluptates minima, non tempora velit hic cum voluptatem. Dolores nisi ex aliquid et aut quisquam — quod in ullamco id quod in vel hic et ex.',
  description:
    'Incididunt cupiditate et eum officiis ullam: illum voluptatibus, mollitia eum repellat architecto, necessitatibus, aut quo reiciendis aliquid tempor rem exercitationem.',
  caption: 'still hall',
  image: 'fragrance-resin',
};

export type Route = { name: string; applies: string; body: string };

export const ROUTES: Route[] = [
  {
    name: 'Sequi exercitation',
    applies: 'Nemo quam, culpa, soluta, nulla',
    body: 'Cum illum, soluta cum delectus minus. Est-at-ipsum sint in non labore sunt dolores unde, nam magnam eum repellat omnis at sit tempore ex unde alias id earum libero in duis hic est culpa.',
  },
  {
    name: 'Pariatur',
    applies: 'Dolorem, rerum facere',
    body: 'Nostrum asperiores ea maxime ipsam odit ad deserunt possimus. Aliquip facere aspernatur fugiat anim totam in eum maxime sed nesciunt ex laboriosam; commodi at repellat quasi mollit unde in iusto nulla.',
  },
  {
    name: 'Mollitia',
    applies: 'Tenetur, possimus, commodo',
    body: 'Ad cillum fugit ea pariatur molestias, eum inventore non elit quo impedit-commodo repellat eum ea ratione itaque. Labore sed cum est ab at non eos at consequuntur.',
  },
  {
    name: 'Necessitatibus',
    applies: 'Veniam, consequat, labore, fugiat',
    body: 'Beatae exercitation, ex error 1234. Accusamus non possimus elit tempora facere incididunt — et corporis ducimus aut rem at mollitia iure, non delectus — aliquid itaque unde id sit minima.',
  },
];

export const TECHNOLOGY_PASSAGES: Passage[] = [
  {
    id: 'grading',
    eyebrow: 'Grading',
    title: 'Nam odio amet laborum distinctio neque ad',
    body: 'Dolor aperiam atque: optio, voluptas, quis, nam adipiscing natus. Ab id mollit ab amet illo earum occaecati id itaque non elit sunt et rem nobis, nam ut est facere in atque animi ab cum quae ducimus modi vitae. Mollitia non minima nam facere odio et ipsam-nulla elit quos at modi-libero fugiat, fugit do debitis aut accusantium qui irure dicta do.',
    points: [
      'Totam laboris veritatis, minima ut quod',
      'Excepturi non architecto quasi incidunt id numquam',
      'Id quisquam itaque tempor saepe aut esse',
    ],
    caption: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    id: 'laboratory',
    eyebrow: 'Analytical control',
    title: 'Ad-ex ad ipsam eligendi rem',
    body: 'Do exercitation ex at ratione, cum ut aperiam nihil ad cupiditate libero do. Fugit cum et qui dolore aperiam est nam atque aliquip quae qui dolore. Enim in soluta aliqua et proident quaerat non labore lorem id maiores eos optio ad corrupti debitis, tempora in omnis qui ipsum cillum rem ipsum non do veniam sunt ipsa rem qui saepe labore ab impedit.',
    points: [
      'Quasi qui porro perferendis enim ipsam quisquam',
      'Consequuntur vero cumque ratione, vel sit eum',
      'Veritatis illum inventore at odio nesciunt',
    ],
    cta: 'Request a sample',
    href: '/contact/',
    caption: 'laboratory',
    image: 'material-patchouli',
  },
];

/* ── Halaman hub: hero + karusel ────────────────────────────────────────── */
export const INGREDIENTS_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Ingredients',
    headline: 'Indonesian Naturals.',
    shot: 'cassia bark',
    href: '/ingredients/catalog/',
    image: 'hero-benzoin-tears',
  },
];

export const INGREDIENTS_SLIDES: CarouselSlide[] = [
  {
    title: 'Ingredients Catalog',
    body: 'Quo mollitia voluptas, cupiditate ex quibusdam cumque, amet quam aut iste voluptatibus cum libero aperiam.',
    cta: 'Browse the catalog',
    shot: 'grading floor',
    image: 'material-nutmeg',
    href: '/ingredients/catalog/',
    bg: 'oklch(0.882 0.022 52)',
  },
  {
    title: 'Technology',
    body: 'Est blanditiis fugiat itaque sed laborum — quasi, eligendi, repellat, necessitatibus — quo aut corrupti elit sequi vero cillum.',
    cta: 'See the technology',
    shot: 'still hall',
    image: 'fragrance-resin',
    href: '/ingredients/technology/',
    bg: 'oklch(0.872 0.016 80)',
  },
];
