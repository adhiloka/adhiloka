import type { CarouselSlide, LinkCard, PageIntro } from './types';
import type { HeroSlide } from './home';
import type { ImageKey } from '../images';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const MEDIA_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'What we have announced, and the material to write about it.',
  metaTitle: 'Media',
  lede: 'Exercitation aute rem alias nam sed dolorem, maxime facilis cum consectetur, rem aut sapiente natus ex nemo officia quis.',
  description:
    'Sed proident optio elit: ipsa quia cum nihil eum rem tempore, consequuntur fugit consequat, vel hic dolore quisquam.',
  image: 'material-benzoin',
  caption: 'benzoin resin, hand-graded',
};

export const MEDIA_CARDS: LinkCard[] = [
  {
    title: 'News',
    body: 'Exercitationem saepe nam odit, eos nihil, nam est cillum nam dolore at.',
    href: '/media/news/',
  },
  {
    title: 'Media Resources',
    body: 'Fugit, aliquip repudiandae, nam ratione ipsa velit eos nam aperiam exercitationem mollit.',
    href: '/media/media-resources/',
  },
  {
    title: 'Social Media',
    body: 'Saepe ad esse facilis exercitation, eum magni placeat do deserunt sunt.',
    href: '/media/social-media/',
  },
];

export const MEDIA_CONTACT = {
  title: 'Press enquiries',
  body: 'Excepteur eligendi, soluta non aliqua aute, non duis labore. Do minima quasi esse quibusdam est laboris libero eos numquam modi.',
  email: 'info@adhiloka.com',
};

/* ── News ────────────────────────────────────────────────────────────── */

export const NEWS_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'News',
  lede: 'Eos esse, nam saepe sit sed repellat. Do aliquid cum molestias ratione et iure id hic odio nemo.',
  description:
    'Quod sunt sapiente rerum: laborum aperiam, optio eiusmod, nesciunt voluptatibus hic corrupti sint aut consequat error.',
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

/* PLACEHOLDER — enam kabar contoh untuk mengisi tata letak daftar dan halaman
   artikel. Ganti dengan pengumuman sungguhan sebelum terbit. */
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
      'Culpa unde laborum ut cumque odio. Vitae-lorem velit do deserunt id eveniet pariatur totam ab ipsa cumque, saepe eveniet omnis consequat ut sit cum-cumque numquam suscipit libero amet at vel dolorem. Quo deserunt nobis quam vel ut voluptate optio eos sequi eius blanditiis nisi ut impedit.',
      'Beatae esse adipisci repellendus iure ratione accusamus exercitation ab quo nobis quia ea facilis. Labore repellat nam cum eos soluta quos ea qui iure quis.',
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
      'Vel reprehenderit nisi cupidatat ea 1234 quo quis eveniet do sapiente eum cum dolorem. Ea labore minima, perspiciatis ex rem, aliquid laboriosam ea saepe similique quo eius et eos consequat exercitationem perspiciatis minima vero ut doloribus facilis placeat nostrum.',
      'Sed occaecati aliqua sed assumenda at perspiciatis. Est-illo excepteur voluptate, nihil ab quos iure similique magna 1234, dolore ut sit possimus debitis amet quia. Eligendi vel eligendi nostrum explicabo enim in architecto magnam ad cum iure illo.',
      'Et laudantium est suscipit ut possimus qui aut in ea. Consequuntur quibusdam sunt ut est debitis suscipit, magni ab est veniam eum quod sit minus do vel quasi vitae.',
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
      'Non accusamus repellat magni do 1234 amet ex rem quaerat possimus facere ullamco. Do aut neque aute eius 1,234, eos atque dolorem hic cillum duis minima ea nesciunt ad eos in vero ex aut libero ab corrupti veniam aute exercitationem distinctio.',
      'Excepteur corporis veniam ex aliquid quas libero, eum cum nobis eum quia tempor in possimus iure laboris qui cum rem vel doloremque. Aliquip in id non repellat totam cillum occaecati sit quo aliqua iure.',
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
      'Porro consequuntur dolor commodo sunt et vel iusto tempora. Id nisi-debitis rerum deserunt id sit animi aliquip 1234 impedit incididunt odit at in, do ex ipsam odit ad excepteur eos rem ea quis ullamco.',
      'Sed itaque culpa minima do error odit illum maxime quod sit ipsum. Et ea mollit et eiusmod duis in alias elit lorem blanditiis rerum, ut enim eum ex eos aperiam elit in aliquid.',
      'Quibusdam nam neque enim id deserunt rem eaque corporis est ullamco id. At do nam do quo ducimus eos duis eum id nulla nam temporibus minim.',
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
      'Excepturi error esse laborum cum ipsa veniam magnam quae excepturi placeat ex vel eos vel ea quo quibusdam earum eum, do est nisi, atque do. Anim aute quod sapiente quis aut facere beatae ab eos accusantium vel numquam ab at consequuntur error.',
      'Non consectetur — deleniti minima placeat ex enim ab aliquid — fugit quae officiis ut magnam voluptatibus rem in nisi mollit sit. Assumenda perferendis ea ab libero sint do enim quas vel itaque magni.',
      'Itaque nesciunt ex eligendi ut ipsum pariatur maxime sed quae veniam ea beatae mollitia at quo vero ducimus officia.',
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
      'In neque exercitationem soluta facere id cillum anim earum, incidunt repellat debitis, cumque corrupti libero dolore aut voluptates tempore.',
      'Id et consequuntur quo in culpa beatae. Aut aliqua vitae quia dolor sint at eos possimus sed at quo facilis culpa, sed non omnis in hic repellendus ex ipsa id corrupti deserunt quo sed ea quisquam dolor at sit aut quo et magnam unde nostrum quo sed modi in.',
      'Excepteur hic labore voluptatibus proident ea non esse ullamco.',
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
  lede: 'Aliquid veniam, cum eligendi ut libero ullamco, hic cum molestiae ut nulla minima et minima ipsa nisi repudiandae.',
  description:
    'Perspiciatis possimus dicta doloribus: unde nulla, eveniet accusantium, commodo anim dicta vel exercitationem facere.',
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
    title: 'Quisquam hic aute',
    body: 'Nostrum expedita, unde odit sit rem eos-tempor delectus, nemo hic doloribus rerum.',
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
  'Magnam rem et sint perferendis eius qui minima quod "adipisci autem". Quis sed eos at quia ad perferendis, nostrum itaque mollitia, et vero do earum ut temporibus perspiciatis. Nesciunt quo dolore unde, eum ad.';

/* ── Social Media ────────────────────────────────────────────────────── */

export const SOCIAL_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'Social Media',
  lede: 'Sequi ab modi facilis exercitationem — est, iure at eligendi, magna suscipit quo deleniti aute.',
  description:
    'Incidunt eligendi soluta vitae adipisci, aute modi eos ut amet cum, vel quo ea labore et aperiam id sint.',
  caption: 'kemenyan agroforest canopy',
  image: 'agroforest-canopy',
};

export type Channel = { name: string; handle: string; body: string; href: string };

/* PLACEHOLDER — handle belum dibuat; href masih menunjuk beranda platform.
   Ganti dengan akun sungguhan sebelum terbit. */
export const CHANNELS: Channel[] = [
  {
    name: 'LinkedIn',
    handle: '@possimus-irure',
    body: 'Officia necessitatibus, laborum dolores nam aut doloremque quam duis ipsum asperiores. Sed commodo et modi quis debitis.',
    href: 'https://www.linkedin.com/',
  },
  {
    name: 'Instagram',
    handle: '@deleniti',
    body: 'Vel nostrud, qui commodo magna sed aut magnam. Cillum consequatur, soluta nulla id hic tempor id quos.',
    href: 'https://www.instagram.com/',
  },
  {
    name: 'YouTube',
    handle: '@voluptas',
    body: 'Minus vitae in ullamco, laborum rem perspiciatis, nam itaque hic nulla aliqua est sit laborum elit odit vitae id.',
    href: 'https://www.youtube.com/',
  },
  {
    name: 'Facebook',
    handle: '@necessitatibus',
    body: 'Sint est sed commodo perferendis do eaque facilis eos vero, cum beatae id cumque excepturi.',
    href: 'https://www.facebook.com/',
  },
];

export const SOCIAL_NOTE =
  'Ipsum ipsa quisquam eos hic quae odit ab numquam. Do magna cum hic ducimus, proident at molestiae commodo facere minim, eum et vero aut maiores nam magni minus ea fugit.';

/* ── Halaman hub: hero + karusel ────────────────────────────────────────── */
export const MEDIA_HERO: HeroSlide[] = [
  {
    kind: 'photo',
    eyebrow: 'Media',
    headline: 'From the Works.',
    shot: 'benzoin resin, hand-graded',
    href: '/media/news/',
    image: 'material-benzoin',
  },
];

export const MEDIA_SLIDES: CarouselSlide[] = [
  {
    title: 'News',
    body: 'Perspiciatis autem cum quam, qui atque, qui vel itaque cum fugiat at.',
    cta: 'Read the news',
    shot: 'grading floor',
    image: 'material-nutmeg',
    href: '/media/news/',
    bg: 'oklch(0.882 0.022 52)',
  },
  {
    title: 'Media Resources',
    body: 'Eaque, dolorem dignissimos, non aliquid odio dicta eum cum tempora exercitationem itaque.',
    cta: 'Get the resources',
    shot: 'still hall',
    image: 'hero-benzoin-tears',
    href: '/media/media-resources/',
    bg: 'oklch(0.872 0.016 80)',
  },
  {
    title: 'Social Media',
    body: 'Nobis id quam ullamco voluptatibus, eos sequi aliquip et delectus sint.',
    cta: 'See the channels',
    shot: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
    href: '/media/social-media/',
    bg: 'oklch(0.864 0.02 118)',
  },
];
