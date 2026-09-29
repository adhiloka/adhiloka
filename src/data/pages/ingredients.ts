import type { LinkCard, PageIntro, Passage, Stat } from './types';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const INGREDIENTS_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Possimus mollitia, rem nam assumenda id anim earum qui.',
  metaTitle: 'Ingredients',
  lede: 'Aliqua, quam quis, rerum, mollit rem cum unde. Ipsa quos in soluta, et temporibus omnis, ad ullamco itaque non et consequuntur ea aute cumque aliquip.',
  description:
    'Sit nesciunt praesentium atque: sapiente adipiscing corrupti quia accusamus reprehenderit, reiciendis maxime, tenetur nostrum rem quae voluptatibus.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark, Kerinci',
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
    image: 'material-nutmeg',
  },
  {
    title: 'Technology',
    body: 'Cum recusandae libero cillum sed impedit — neque, deleniti, eligendi, perspiciatis — rem quo incidunt esse natus vero tempor.',
    href: '/ingredients/technology/',
    image: 'fragrance-resin',
  },
];

/* ── Katalog ─────────────────────────────────────────────────────────── */

export const CATALOG_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ingredients Catalog',
  lede: 'Labore ab aliqua, quod id corporis eum cum iste voluptatibus, eum ratione nam culpa quia quo quae magna.',
  description:
    'Tempor quo deserunt officiis delectus do cupidatat cillum, anim mollit, voluptates vitae, tenetur veniam cum perspiciatis sit modi.',
  caption: 'grading floor, Medan works',
  image: 'material-nutmeg',
};

export const CATALOG_NOTE =
  'Perspiciatis saepe quam hic fugiat. Ullam do tempora itaque eos veniam, ut non ea veniam vero tenetur tempore rerum in ut cum quia.';

/* ── Technology ──────────────────────────────────────────────────────── */

export const TECHNOLOGY_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Technology',
  lede: 'Nemo laudantium tempor, rem officia error vel cum doloremque. Tempora elit et ratione at qui sapiente — quia do debitis ut sunt et eum non ex in.',
  description:
    'Cupiditate incididunt et vel quisquam optio: velit perspiciatis, incidunt eum quisquam cupiditate, voluptatibus, hic rem reiciendis ducimus labore rem reprehenderit.',
  caption: 'still hall, Medan works',
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
      'Assumenda rem aspernatur ipsam nesciunt ad tempora',
      'Ad repellat veniam tempor dolor sit nemo',
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
      'Lorem rem minim repudiandae amet velit proident',
      'Consequuntur vero cumque ratione, vel sit eum',
      'Molestias ipsam similique ut quas pariatur',
    ],
    cta: 'Request a sample',
    href: '/contact/',
    caption: 'laboratory, Medan works',
    image: 'material-patchouli',
  },
];
