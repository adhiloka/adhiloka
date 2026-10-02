import type { CarouselSlide, LinkCard, PageIntro, Passage, Quote, Stat } from './types';
import type { HeroSlide } from './home';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const SUSTAINABILITY_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Non beatae ea id eligendi, sit at quisquam.',
  metaTitle: 'Sustainability',
  lede: 'In dolores quod ex veniam, rem mollit. Doloremque ad optio in vero quis tempore quas libero quam excepturi, assumenda cum neque quos esse ad ipsum.',
  description:
    'Exercitationem at sapiente: cumque-lorem sapiente, error tempor cumque libero qui labore, consequuntur in rem cupidatat, qui deleniti suscipit nesciunt.',
  caption: 'kemenyan agroforest canopy',
  image: 'agroforest-canopy',
};

export const SUSTAINABILITY_STATS: Stat[] = [
  { value: '1,234+', label: 'Nostrum recusandae at est voluptas' },
  { value: '12%', label: 'Officia excepturi ut laboriosam culpa' },
  { value: '1', label: 'Laboriosam sapiente itaque facere' },
  { value: '1', label: 'Corporis ratione rem eos magnam' },
];

export const SUSTAINABILITY_OPENING = [
  'Quam necessitatibus nihil in sint incidunt vel tempore id et tempor. Enim sit ut commodo ea in ducimus. Irure ut magnam ab suscipit, id vel quod proident in. Ipsum ea in id deserunt, ea eum quod non, cum omnis ut odit hic rem optio rem id vitae magnam dicta id quam odit magna at qui.',
  'Cum vitae nostrum: ea eum incidunt ex iste repellat, et sequi ea fugit minim minima cum nostrum aliqua laborum in eaque, rem rerum laborum sed error expedita et rem veritatis eius proident ut qui est rem ex qui aute. Sequi nulla beatae rem aut doloribus. Hic unde et voluptate.',
];

export const SUSTAINABILITY_CARDS: LinkCard[] = [
  {
    title: 'Driving progress for people',
    body: 'Maxime corrupti cum dolores aspernatur, expedita, qui quis at ea et est commodo ipsa qui odit lorem.',
    href: '/sustainability/people/',
  },
  {
    title: 'Responsible Sourcing',
    body: 'Hic ex hic atque quod at tempor maxime in at quia, sed elit ex occaecat ab quae illo.',
    href: '/sustainability/responsible-sourcing/',
  },
];

/* ── Driving progress for people ─────────────────────────────────────── */

export const PEOPLE_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Driving progress for people',
  lede: 'Id dolore velit quisquam laboris cum architecto itaque id hic mollit ut autem id suscipit. Anim et hic veniam cillum, rem quos ex qui quis ex dolore non voluptatem eius.',
  description:
    'Quo quisquam deleniti non officia voluptates cillum eum repellat: sequi aliqua tempor labore rem mollit, minima tempora, suscipit qui quaerat do labore mollitia.',
  caption: 'kemenyan agroforest canopy',
  image: 'hero-agroforest',
};

export const PEOPLE_PASSAGES: Passage[] = [
  {
    id: 'income',
    eyebrow: 'Income',
    title: 'Ad dicta aliqua tempor vel facere, aut lorem ad',
    body: 'Ex veniam cum sequi at earum enim aliquid sint alias in cumque sed facere placeat in eum, sed quae ipsam at iure non ratione ad quos id porro et aliqua. Ea maxime est eaque cum et commodi vel vero mollit unde at eveniet. Ex ipsa ex ipsam atque et unde nostrum maxime eum beatae minim est aut et ad illum ut, veritatis at rem illum quo facere autem animi.',
    points: [
      'Optio irure minima labore anim quaerat maxime',
      'Duis ea eos aperiam, ea sunt, do sit est',
      'At explicabo non tempore impedit vel totam deserunt',
    ],
    caption: 'collection post',
    image: 'agroforest-canopy',
  },
  {
    id: 'failure',
    eyebrow: 'Bad seasons',
    title: 'Eius laboris quod sed ipsa anim rem quas',
    body: 'Dolorem natus occaecati — laboris, ratione, at impedit nulla quia sequi ex vero. Est voluptatem ea eum illo dolorem maxime sunt ex quis. Suscipit impedit nam excepteur minima, nostrud ducimus sapiente, hic est cillum voluptates ut elit officiis vel sit eos eiusmod esse cum 1234s libero. Ex minus quo id, aut do id rem amet tempor eligendi quae in nam ullam cumque repellendus aliqua nisi debitis est vero.',
    points: [
      'Eligendi-unde deserunt ratione est quibusdam beatae',
      'Voluptates temporibus repellendus elit magnam et neque',
      'Quod maxime doloribus itaque enim veritatis',
    ],
    caption: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    id: 'skills',
    eyebrow: 'Skills',
    title: 'Tenetur quia ut in labore animi, eum at ab quasi officiis',
    body: 'Ea alias fugiat sunt libero quae eos sint itaque. Eiusmod error eum facilis eum aliquip proident eius illo cumque rem magnam, aut est asperiores sed maxime exercitation commodo id soluta nobis-magna irure — error eius sed duis elit qui. Ea ex sit vero similique alias eaque est eaque autem sed porro elit modi est sed quae beatae.',
    points: [
      'Sed-magnam nostrud qui tempore incidunt ad omnis tempora',
      'Nulla-natus nihil quae ut ab numquam',
      'Numquam commodo ratione quibusdam non molestias iure',
    ],
    cta: 'How we source',
    href: '/sustainability/responsible-sourcing/',
    caption: 'grading floor',
    image: 'material-nutmeg',
  },
];

export const PEOPLE_QUOTE: Quote = {
  text: 'Quo dolore est omnis qui quibusdam amet. Commodi id autem doloribus sequi ad sunt ipsum ut in qui similique illo.',
  attribution: 'Enim ex Exercitationem, Deserunt',
};

/* ── Responsible Sourcing ────────────────────────────────────────────── */

export const SOURCING_INTRO: PageIntro = {
  eyebrow: 'Sustainability',
  title: 'Responsible Sourcing',
  lede: 'Optio at sed anim amet, qui corporis do eos quis sit eius — sapiente ea tempore, aut reprehenderit blanditiis.',
  description:
    'Perferendis expedita ad repellat: magnam incidunt id anim blanditiis proident, explicabo-magni consequuntur corporis ea numquam, qui ut occaecat non fugiat.',
  image: 'hero-benzoin-tears',
  caption: 'cassia bark',
};

export type Step = { n: string; title: string; body: string };

export const SOURCING_CHAIN: Step[] = [
  {
    n: '01',
    title: 'Dolore veniam',
    body: 'Tempora ex soluta aute officiis ipsum ex fugit aliquid, ut ad magni non voluptate quam. Ducimus ab dolores eum nostrum ab placeat ex consequatur vel ea.',
  },
  {
    n: '02',
    title: 'Cupiditate dolores',
    body: 'Vel assumenda fugiat qui eum ea aut do sint deserunt sit id quis lorem, ea quia, do id natus quo cumque vitae rerum. Consequat qui voluptates ullam vel laborum unde ut nemo cumque.',
  },
  {
    n: '03',
    title: 'Omnis nostrum',
    body: 'At culpa quia dolorem et cum numquam. Possimus tempore unde non nam; et ad cum aliqua nisi ex nesciunt illo.',
  },
  {
    n: '04',
    title: 'Natus laboris velit',
    body: 'Iste ducimus quod saepe veritatis. Hic consequat tempor et commodo ullamco nisi nam libero hic itaque eius debitis at aut quae.',
  },
  {
    n: '05',
    title: 'Aspernatur',
    body: 'Perspiciatis, sapiente ex mollitia, at neque. Quis nam eum tenetur itaque dolore et cum ab voluptatibus.',
  },
  {
    n: '06',
    title: 'Quod sit officiis',
    body: 'Sit nesciunt quisquam nobis quas eum dolor consequatur, do omnis nam est aspernatur nobis ut aute modi. At ut magnam tempora odio natus, sed aute unde quo omnis.',
  },
];

export const SOURCING_PASSAGES: Passage[] = [
  {
    id: 'direct',
    eyebrow: 'Direct purchase',
    title: 'Ab voluptatibus ea eum magnam',
    body: 'Hic soluta ad est fugiat commodi ex consequuntur, sit beatae cum quis: qui incidunt ad quo molestias eum quo laborum sint odit eius odio iure. Fugiat at non quo quisquam animi duis ut rem eius beatae ab rem sunt, est ad do eum unde maiores id anim expedita natus sed culpa in vero nemo rem ut placeat.',
    points: [
      'Quam incidunt: Eveniet, Suscipit, Corporis, Animi cillum',
      'Aliquip cumque ea sed occaecati, ea sed officia',
      'Perspiciatis occaecat enim rem eveniet et aut tempore optio',
    ],
    caption: 'benzoin intake',
    image: 'material-benzoin',
  },
  {
    id: 'land',
    eyebrow: 'Land',
    title: 'Tempore eos quas tempora et fugiat do',
    body: 'Est molestias odit aute culpa cumque commodi non repellendus fugit unde laboris est deleniti incididunt. Ut odio natus officiis delectus vel in ea non hic quia ipsa doloribus totam eum repellat veniam at 1234. Iusto ex occaecati fugit at itaque, do quaerat recusandae commodo ad delectus nobis labore non expedita.',
    points: [
      'In suscipit eius unde quibusdam magna 1234',
      'Vitae dolorem veniam iste consequatur laudantium',
      'Velit cupidatat beatae eius soluta placeat, quo eius mollitia',
    ],
    cta: 'See our purpose',
    href: '/about/our-purpose/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
];

/* ── Halaman hub: hero + karusel ──────────────────────────────────────────
   Judul hero "Forest First." diambil apa adanya dari slide hero halaman depan
   yang justru menuju halaman ini. Halaman ini tidak punya foto sendiri di
   SUSTAINABILITY_INTRO — hanya pelat hatch berketerangan — jadi heronya memakai
   foto daun, dengan keterangan apa yang benar-benar terlihat, bukan mengaku
   sebagai tajuk kebun kemenyan. */
export const SUSTAINABILITY_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Sustainability',
    headline: 'Forest First.',
    shot: 'leaf, close',
    href: '/sustainability/people/',
    image: 'material-patchouli',
  },
];

export const SUSTAINABILITY_SLIDES: CarouselSlide[] = [
  {
    title: 'Driving progress for people',
    body: 'Minima repellat eum nostrum blanditiis, nesciunt, vel sint ea in do qui eiusmod iste eos nisi lorem.',
    cta: 'See the work',
    shot: 'kemenyan agroforest canopy',
    image: 'hero-agroforest',
    href: '/sustainability/people/',
    bg: 'oklch(0.864 0.02 118)',
  },
  {
    title: 'Responsible Sourcing',
    body: 'Rem ad sit nihil sint in labore mollit ad at quae, sed quia ea proident ea quam odio.',
    cta: 'Responsible sourcing',
    shot: 'cassia bark',
    href: '/sustainability/responsible-sourcing/',
    image: 'hero-benzoin-tears',
  },
];
