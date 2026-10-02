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

/* PLACEHOLDER — enam kabar lorem ipsum untuk mengisi tata letak daftar dan
   halaman artikel. Tanggal dan kategori dibiarkan supaya urutan dan tab
   penyaring tetap bekerja. Ganti dengan pengumuman sungguhan sebelum terbit. */
export const NEWS: Article[] = [
  {
    slug: 'release-2026-08-18',
    date: '2026-08-18',
    category: 'Harvest',
    title: 'Laboris mollit neque quas dolor magnam itaque ad nam iure officiis',
    standfirst:
      'Numquam ullam tempor eum officiis eveniet iste magni, quas est cumque vitae culpa libero veniam hic nobis vel officia.',
    body: [
      'Officia veniam tempor quo mollitia quaerat do qui magnam quae ex facere, quo eum quo consectetur repellendus beatae non neque nihil quo labore at animi officia minima sed sequi vel nam laboris. Voluptatem aliquip quas id modi anim in quas do ipsum-optio error quod minim fugiat duis aliqua qui aute natus ex neque.',
      'Rerum unde facilis ut fugiat quos. Ipsum-dolor optio et pariatur id aliquip incidunt minim et quam cumque, vitae aliquid quasi quibusdam ab non eos-beatae numquam corporis fugiat eius et non aliquid. Sit corporis irure ipsa eos in consequat minim sed autem amet incididunt nemo ex facilis.',
      'Fugiat quos expedita perferendis enim ducimus excepteur exercitation ex quo minim iure at nostrud. Minima delectus aut eos est itaque ipsa at eos nemo odio.',
    ],
    shot: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    slug: 'release-2026-06-02',
    date: '2026-06-02',
    category: 'Works',
    title: 'Ut fugiat perspiciatis soluta quos do ut quo ipsum error',
    standfirst:
      'Sit nesciunt eiusmod corporis ea fugit voluptate est libero excepteur exercitationem ea-neque vero-quasi.',
    body: [
      'Qui consequuntur sint explicabo in 1234 quo amet nostrud ab deleniti cum hic commodo. At aliqua fugiat, exercitation ad cum, officia voluptatem in porro molestiae eum esse id est assumenda perspiciatis exercitation magnam quos in cupidatat commodi aperiam placeat.',
      'Sed occaecati aliqua sed assumenda at perspiciatis. Est-illo excepteur voluptate, nihil ab quos iure similique magna 1234, dolore ut sit possimus debitis amet quia. Eligendi vel eligendi nostrum explicabo enim in architecto magnam ad cum iure illo.',
      'Ex blanditiis eum occaecat ad corrupti cum hic id at. Necessitatibus occaecati illo in quo officia possimus, porro ex eum magnam nam nisi sit culpa do qui alias minim.',
    ],
    shot: 'processing line',
    image: 'fragrance-resin',
  },
  {
    slug: 'release-2026-04-21',
    date: '2026-04-21',
    category: 'Sourcing',
    title: 'Inventore deleniti magnam 1,234 corrupti',
    standfirst:
      'Nostrud minus culpa ut soluta, cum adipisci eum soluta error dolores hic ex est quo nisi do est cupidatat.',
    body: [
      'Aut molestiae repellat error at 1234 illo do quo tenetur deleniti maxime ducimus. At qui neque sunt duis 1,234, qui lorem ullamco eos facere nisi minima ab deleniti in hic et anim ex hic cillum at incidunt fugiat elit consequuntur laboriosam.',
      'Molestiae pariatur dolore do aliquip iste maxime, eos sit iusto qui nemo maxime ad delectus aute ullamco qui rem aut sed voluptates. Commodo ab ex eum occaecat neque veniam occaecati eum quo veniam sunt.',
      'Quo expedita ea hic ea exercitation beatae quo at in sit impedit ut in rem. At ut do deleniti cumque, eius numquam id aliqua dolore sed ea quod ad dolore nobis.',
    ],
    shot: 'benzoin intake',
    image: 'material-benzoin',
  },
  {
    slug: 'release-2026-02-10',
    date: '2026-02-10',
    category: 'Perfumery',
    title: 'Nemo-nostrud tenetur cumque sed libero dicta itaque',
    standfirst:
      'Ea cupiditate ullam odio atque illo at non ipsam rem illo illum quos — veritatis, laboriosam, eum nihil deleniti mollit eos.',
    body: [
      'Rerum perspiciatis natus laboris ipsa et est magni eveniet. Do enim-tempora ipsum eligendi in est minus dolores 1234 laborum laboriosam eius ad ut, ea do ullam enim ab cupidatat eos vel ad illo maiores.',
      'Hic facere autem itaque ad magna vero fugit veniam iure est minim. Ex ea soluta id eiusmod quia in ullam elit atque distinctio iusto, ut vero qui ab est laboris quod at aliquip.',
      'Voluptate hic omnis quam do voluptas sit optio deleniti sit laborum at. Ad ex non in nam quaerat cum quae sit ad atque quo aspernatur error.',
    ],
    shot: 'petal, close',
    image: 'fragrance-petal',
  },
  {
    slug: 'release-2025-11-14',
    date: '2025-11-14',
    category: 'Harvest',
    title: 'Ut similique molestias fugiat, adipisci id ex incidunt',
    standfirst:
      'Iure proident cillum voluptate debitis lorem non magna totam. Do molestiae non totam fugiat quas suscipit at enim ex.',
    body: [
      'Inventore eaque unde commodo vel anim beatae soluta enim molestias eiusmod ex non hic sed id non cupidatat magni rem, do sed sunt, error ut. Amet elit eius adipisci modi cum dolore tempor et qui consectetur vel ducimus do ea exercitationem eaque.',
      'Non consectetur — proident libero laborum id enim at commodi — minus iste deserunt et maxime voluptatibus qui ut quas magnam eum. Veritatis dignissimos ea in libero vero et elit quod sit mollit atque.',
      'Magnam deleniti at eligendi ex irure proident beatae non quis cumque id maxime incidunt ab sed elit eiusmod officia.',
    ],
    shot: 'patchouli leaf, close',
    image: 'material-patchouli',
  },
  {
    slug: 'release-2025-09-01',
    date: '2025-09-01',
    category: 'Company',
    title: 'Itaque reprehenderit omnis in facere',
    standfirst:
      'In cumque libero, id nesciunt quibusdam nam ut iure esse repellat vel minim qui quia cumque ipsa ut repellat.',
    body: [
      'In neque necessitatibus minima libero ex soluta quam atque, adipisci repellat ducimus, magnam pariatur magnam cillum rem doloremque quaerat.',
      'Do et exercitation qui at saepe soluta. Eos dolore vitae eius rerum iste id rem expedita cum ea eos impedit vitae, vel eum velit ab cum perferendis at modi ut deserunt eligendi cum qui et proident magni ea cum nam cum do mollit aute dolores est non quod ut.',
      'Assumenda cum facere exercitation expedita ab sed quia aliquid.',
    ],
    shot: 'office',
    image: 'hero-still-hall',
  },
];

export const byDate = (a: Article, b: Article) => (a.date < b.date ? 1 : -1);

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
