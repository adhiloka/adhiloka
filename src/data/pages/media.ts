import type { LinkCard, PageIntro } from './types';
import type { ImageKey } from '../images';

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const MEDIA_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'What we have announced, and the material to write about it.',
  metaTitle: 'Media',
  lede: 'Announcements from the works and the gardens, images cleared for publication, and the accounts where we post between them.',
  description:
    'The Adhiloka media room: news from the works and the gardens, downloadable media resources, and our social channels.',
  image: 'material-benzoin',
  caption: 'benzoin resin, hand-graded',
};

export const MEDIA_CARDS: LinkCard[] = [
  {
    title: 'News',
    body: 'Announcements about the crop, the works, and the people who supply us.',
    href: '/media/news/',
    image: 'material-nutmeg',
  },
  {
    title: 'Media Resources',
    body: 'Logos, cleared photography, the company fact sheet and the current sustainability report.',
    href: '/media/media-resources/',
    image: 'hero-benzoin-tears',
  },
  {
    title: 'Social Media',
    body: 'Where we post between announcements, and which account is actually ours.',
    href: '/media/social-media/',
    image: 'agroforest-canopy',
  },
];

export const MEDIA_CONTACT = {
  title: 'Press enquiries',
  body: 'Interview requests, images not listed here, and fact checks. We answer press mail ourselves and usually within two working days.',
  email: 'press@adhiloka.com',
};

/* ── News ────────────────────────────────────────────────────────────── */

export const NEWS_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'News',
  lede: 'The crop, the works and the register. We publish the difficult seasons as well as the good ones.',
  description:
    'News from Adhiloka Group: harvest reports, works updates, sourcing announcements and research from the perfumery bench.',
  caption: 'grading floor, Medan works',
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
    slug: 'benzoin-season-2026-opens',
    date: '2026-08-18',
    category: 'Harvest',
    title: 'Benzoin season opens with floor prices posted at all four stations',
    standfirst:
      'Tapping began across the Tapanuli uplands this month, with the season floor price posted before the first lot arrived.',
    body: [
      'Tapping opened across the Tapanuli uplands in the second week of August, and for the seventeenth consecutive season the floor price was posted at every station before the first lot was weighed. Households working with us know what a kilo of first-grade resin will fetch before they decide how many trees to score.',
      'Early lots suggest a steady year. First-grade share at Tarutung is running slightly ahead of last season, which station staff attribute to the pre-season grading sessions rather than to the weather. The vanillin range will not be confirmed until the first full extraction runs in October.',
      'Buyers with standing allocations will receive confirmed availability in the first week of October. Sample requests for the new season open at the same time.',
    ],
    shot: 'benzoin resin, hand-graded',
    image: 'material-benzoin',
  },
  {
    slug: 'fractionation-line-second-column',
    date: '2026-06-02',
    category: 'Works',
    title: 'A second fractionation column goes in at the Medan works',
    standfirst:
      'The addition doubles capacity on resin fractions and brings patchouli fractionation in-house year-round.',
    body: [
      'The fractionation line installed in 2019 has been running at capacity for two seasons. A second column, commissioned in May, doubles throughput on resin fractions and lets us run patchouli fractionation continuously rather than in campaigns between benzoin batches.',
      'The practical result for customers is availability. Low-iron patchouli fractions, which we have been rationing since 2024, return to the standard catalog from July. Vanillic and balsamic benzoin fractions move to continuous supply at the same time.',
      'No additional raw material is required for any of it. Fractionation separates what a lot already contains, which is the reason the line was built in the first place.',
    ],
    shot: 'fractionation line, Medan works',
    image: 'fragrance-resin',
  },
  {
    slug: 'household-register-passes-1400',
    date: '2026-04-21',
    category: 'Sourcing',
    title: 'Household register passes 1,400 families',
    standfirst:
      'Fifteen years after it opened, the register now covers every benzoin lot we buy and most of our patchouli.',
    body: [
      'The household register began in 2011 with a few hundred families around Sibolga. It now holds more than 1,400, and every benzoin lot bought this season is attached to one of them at the moment of purchase rather than reconstructed afterwards.',
      'Patchouli coverage stands at roughly four fifths, the gap being wet leaf bought at Takengon from growers who are not yet registered. Closing it is the sourcing team’s stated objective for the coming year.',
      'The register is not a certification scheme and we do not present it as one. It is a purchase record, kept because we cannot answer for a drum we cannot trace.',
    ],
    shot: 'benzoin intake, Sibolga',
    image: 'material-benzoin',
  },
  {
    slug: 'cold-process-cananga-trial',
    date: '2026-02-10',
    category: 'Perfumery',
    title: 'Cold-process cananga enters its second trial season',
    standfirst:
      'An extraction route that keeps more of the green top than steam does — promising, unfinished, and being reported either way.',
    body: [
      'Steam distillation costs cananga most of its green opening. A cold-process route trialled at the bench through 2025 retains noticeably more of it, at a yield that is currently too low to sell against.',
      'The second trial season is about that yield rather than the smell. If it cannot be brought into a range that makes commercial sense, we will say so and publish what we learned.',
      'Perfumers who would like to evaluate the trial material can request it. It is not in the catalog and will not be until the arithmetic works.',
    ],
    shot: 'petal, close',
    image: 'fragrance-petal',
  },
  {
    slug: 'difficult-patchouli-season-reported',
    date: '2025-11-14',
    category: 'Harvest',
    title: 'A difficult patchouli season, reported as it happened',
    standfirst:
      'Aceh rainfall pushed patchouli alcohol below our usual floor. We published the range rather than blending to hide it.',
    body: [
      'Unusually heavy rain through the Aceh drying window left patchouli alcohol at the low end of our published range and, in two lots, below it. Both lots were released with the actual figure on the certificate and offered at a corresponding price.',
      'The alternative — blending across seasons to hold an average — would have produced a tidier specification and a less useful one. Customers formulating to a number need to know when the number moved.',
      'Drying capacity at Takengon is being extended before the next season to reduce exposure to the same weather pattern.',
    ],
    shot: 'patchouli leaf, close',
    image: 'material-patchouli',
  },
  {
    slug: 'grasse-representation-opens',
    date: '2025-09-01',
    category: 'Company',
    title: 'Europe representation opens in Grasse',
    standfirst:
      'A single office, so European customers are an hour from somebody who knows the crop rather than a timezone.',
    body: [
      'A small representation office opened in Grasse this month, handling customer liaison, sample dispatch within Europe and evaluation support.',
      'It is deliberately not a sales office. The people there have spent time at the stations and on the grading floor, and the point of the arrangement is that a European perfumer can ask a question about a lot and get an answer from someone who has seen it.',
      'Quotation and export documentation continue to run from Jakarta.',
    ],
    shot: 'representation office, Grasse',
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
  lede: 'Cleared images, the wordmark in usable formats, and the documents we would rather be quoted from than paraphrased.',
  description:
    'Downloadable Adhiloka media resources: logo files, cleared photography, company fact sheet and sustainability report.',
  caption: 'still hall, Medan works',
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
    title: 'Logo and wordmark',
    body: 'The sail mark in full colour, the horizontal lockup with the Adhiloka name, and the colour values of the six fields.',
    kind: 'ZIP · SVG, PNG, EPS',
    size: '2.4 MB',
    href: '/contact/',
  },
  {
    title: 'Company fact sheet',
    body: 'Founding, ownership, sites, catalog scope and the figures we are happy to see quoted.',
    kind: 'PDF',
    size: '480 KB',
    href: '/contact/',
  },
  {
    title: 'Sustainability report',
    body: 'Household register, floor prices, land position and the measures behind each claim.',
    kind: 'PDF',
    size: '3.1 MB',
    href: '/contact/',
  },
  {
    title: 'Photography — the works',
    body: 'Still halls, grading floor, fractionation line and the perfumery bench. Cleared for editorial use with credit.',
    kind: 'ZIP · JPG',
    size: '68 MB',
    href: '/contact/',
  },
  {
    title: 'Photography — the gardens',
    body: 'Tapanuli benzoin gardens, tapping and collection stations. People pictured have given consent for editorial use.',
    kind: 'ZIP · JPG',
    size: '54 MB',
    href: '/contact/',
  },
];

export const RESOURCES_NOTE =
  'Images may be used editorially with the credit line "Adhiloka Group". They may not be used in advertising, altered beyond cropping, or used to imply a commercial relationship. Anything not listed here, ask us.';

/* ── Social Media ────────────────────────────────────────────────────── */

export const SOCIAL_INTRO: PageIntro = {
  eyebrow: 'Media',
  title: 'Social Media',
  lede: 'Where we post between announcements — and, just as usefully, which accounts are actually ours.',
  description:
    'Official Adhiloka social media channels, what each one is used for, and how to verify an account is ours.',
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
    body: 'Company announcements, harvest reports and the occasional long post about extraction. The account we keep most current.',
    href: 'https://www.linkedin.com/',
  },
  {
    name: 'Instagram',
    handle: '@adhiloka',
    body: 'The gardens, the grading floor and the stills. Mostly photographs, mostly taken by the people in them.',
    href: 'https://www.instagram.com/',
  },
  {
    name: 'YouTube',
    handle: '@adhiloka',
    body: 'Short films on tapping, grading and distillation, for buyers who would rather see the process than read about it.',
    href: 'https://www.youtube.com/',
  },
  {
    name: 'Facebook',
    handle: '@adhilokagroup',
    body: 'Kept for the station communities in North Sumatra and Aceh, and posted in Bahasa Indonesia.',
    href: 'https://www.facebook.com/',
  },
];

export const SOCIAL_NOTE =
  'These four accounts are the only ones we operate. We never ask for payment, deposits or documents through social media, and we will not message you first about an order.';
