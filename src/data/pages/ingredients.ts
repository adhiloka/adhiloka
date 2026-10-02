import type { LinkCard, PageIntro, Passage, Stat } from './types';
import { MATERIALS } from '../materials';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const INGREDIENTS_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Possimus mollitia, rem nam assumenda id anim earum qui.',
  metaTitle: 'Ingredients',
  lede: 'Aliqua, quam quis, rerum, mollit rem cum unde. Ipsa quos in soluta, et temporibus omnis, ad ullamco itaque non et consequuntur ea aute cumque aliquip.',
  description:
    'Sit nesciunt praesentium atque: sapiente adipiscing corrupti quia accusamus reprehenderit, reiciendis maxime, tenetur nostrum rem quae voluptatibus.',
  image: 'hero-benzoin-tears',
  caption: 'cinnamon bark',
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
  {
    title: 'Ordering & Documents',
    body: 'Cum ut saepe fugit nisi totam aliquip ad deserunt, sed est occaecati duis facere quod irure eos.',
    href: '/ingredients/ordering/',
    image: 'material-patchouli',
  },
];

/* ── Katalog ─────────────────────────────────────────────────────────── */

export const CATALOG_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ingredients Catalog',
  lede: 'Labore ab aliqua, quod id corporis eum cum iste voluptatibus, eum ratione nam culpa quia quo quae magna.',
  description:
    'Tempor quo deserunt officiis delectus do cupidatat cillum, anim mollit, voluptates vitae, tenetur veniam cum perspiciatis sit modi.',
  caption: 'grading floor',
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
    caption: 'laboratory',
    image: 'material-patchouli',
  },
];

/* ── Ordering & Documents ────────────────────────────────────────────── */

/* Halaman alur pesan (keputusan pemilik, 2 Okt 2026). Judul section dan label
 * sudah asli; isinya lorem sampai formulir data D1–D8 terisi. */

export const ORDERING_INTRO: PageIntro = {
  eyebrow: 'Ingredients',
  title: 'Ordering & Documents',
  lede: 'Asperiores do iusto error id eiusmod non porro ut sapiente: ipsa in eum sit, culpa excepteur illo odit ad, hic eum ad ratione.',
  description:
    'Quo ab ipsam numquam aut assumenda iste corporis: ratione, reprehenderit, temporibus, excepturi eum eligendi.',
  image: 'material-benzoin',
  caption: 'sorted benzoin resin tears',
};

export type OrderStep = { n: string; title: string; body: string };

// DATA: D1, D5, D7 — langkah dari permintaan sampai pengiriman.
export const ORDERING_STEPS: OrderStep[] = [
  { n: '01', title: 'Dolorem', body: 'Esse ad est expedita, qui porro, aut fugiat vel eaque ab minim do id, non magni quibusdam quia anim adipisci.' },
  { n: '02', title: 'Itaque sed molestiae', body: 'At magnam tempor nemo quo necessitatibus qui consequatur, ut elit laboriosam est esse do debitis aut quae commodo in id.' },
  { n: '03', title: 'Laudantium', body: 'Nisi voluptate aut ducimus nisi magnam vel fugiat, cum in facere accusamus illum dolor, itaque nam veniam.' },
  { n: '04', title: 'Excepteur', body: 'Id dolores nulla quas iusto, dolores magna, aute duis, incidunt qui cum proident at quo lorem.' },
  { n: '05', title: 'Nesciunt nihil', body: 'Quae eos nihil in assumenda ut quisquam eum cum eos culpa hic doloribus illo unde libero odit ex.' },
  { n: '06', title: 'Numquam aut voluptas', body: 'Eum est ex proident aperiam sed exercitationem, soluta, voluptatem eum cumque ad est aliquip.' },
];

export type OrderDocument = { name: string; materials: string[] };

const ALL = MATERIALS.map((m) => m.slug);

// DATA: D2 — dokumen yang tersedia dan bahan yang memilikinya. Sementara
// semua bahan dicentang karena nama dokumennya pun masih lorem.
export const ORDERING_DOCUMENTS: OrderDocument[] = [
  { name: 'Accusantium ut adipisci', materials: ALL },
  { name: 'Veniam quae nobis', materials: ALL },
  { name: 'Iste consectetur', materials: ALL },
  { name: 'Possimus veritatis', materials: ALL },
  { name: 'Animi accusantium', materials: ALL },
  { name: 'Perferendis do maxime', materials: ALL },
];

// DATA: D3–D6 — label asli, isi menunggu formulir.
export const ORDERING_LOGISTICS: { title: string; body: string }[] = [
  { title: 'Packaging', body: 'Minus, illo at eiusmod optio id sit error, culpa irure est occaecat nulla ea, deserunt qui quibusdam.' },
  { title: 'Minimum Order', body: 'Vel mollitia deserunt in nam illo cum velit, totam ullamco at aut proident sit cum tempora.' },
  { title: 'Lead Time', body: 'Aut atque sint numquam et molestiae illum rem in quo elit do nulla ut earum est possimus.' },
  { title: 'Incoterms & Ports', body: 'Quo mollitia porro ea dicta eos est optio do odit aute, cumque eum anim animi.' },
];

// DATA: D1, D6, D7, B5 — pertanyaan yang paling sering datang dari pembeli.
export const ORDERING_FAQ: { q: string; a: string }[] = [
  { q: 'Ea rem soluta odio id magnam?', a: 'Hic fugiat unde delectus eos magnam fugiat: vero, quia rem ducimus, ipsa sit debitis qui inventore ad sed duis.' },
  { q: 'Rem non nisi ex ea aliquip?', a: 'Rem minima duis amet quo voluptatibus ullamco magnam quo est quibusdam odit quo ducimus officiis at soluta.' },
  { q: 'Atque ullamco animi do eum cillum?', a: 'Cum aliqua odit corrupti aut facilis error laboris ut eos vel consequat libero hic sit quod sit fugiat.' },
  { q: 'Non qui neque in nesciunt exercitation?', a: 'Vel facere anim facilis nam ex maxime rem consequuntur ex quisquam quod iste facere do saepe ex deserunt.' },
];

export const ORDERING_CLOSING = 'Sit aut ab cillum qui non excepteur modi odit minim dolore qui cumque do ut nobis.';
