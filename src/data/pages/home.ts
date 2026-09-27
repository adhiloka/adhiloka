import type { ImageKey } from '../images';

/* Naskah beranda, disusun menurut urutan section adani.com:
 * hero slider → kutipan terbelah → Our Business → akordeon keberlanjutan →
 * Latest News → Join Us → kotak peringatan. Section Business dan News
 * mengambil isinya langsung dari materials.ts dan media.ts. */

/* ── Hero slider ─────────────────────────────────────────────────────── */

/* SEMENTARA lorem ipsum (permintaan pemilik, 27 Sep 2026): naskah final
 * menyusul. Yang dijaga adalah takaran slider adani.com — judul dua baris
 * dengan pemisah baris eksplisit (panjang tiap baris setara judul Adani),
 * lalu satu baris pendek di bawahnya, setara nama anak usaha di Adani
 * ("Adani Power Ltd", "Natural Resources"). Enam slide seperti Adani, supaya
 * deret kartunya berisi tiga kartu dan satu kartu terpotong di tepi layar. */

export type HeroSlide = {
  /** Judul, satu atau dua baris; tiap elemen dicetak di barisnya sendiri. */
  title: string[];
  /** Baris pendek di bawah judul; boleh dua baris seperti tagar slide 1 Adani. */
  line: string[];
  href: string;
  image: ImageKey;
  /** Keterangan isi foto yang sebenarnya, untuk alt. */
  alt: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: ['Lorem ipsum dolor…'],
    line: ['#LoremIpsumDolor', '#SitAmet'],
    href: '#',
    image: 'agroforest-canopy',
    alt: 'Green tree canopy seen from below',
  },
  {
    title: ["Lorem's Leading Integrated Ipsum", 'for Dolor and Sit Amet'],
    line: ['Lorem Ipsum & Dolor Ltd'],
    href: '#',
    image: 'material-benzoin',
    alt: 'Sorted benzoin resin tears',
  },
  {
    title: ['Consectetur Adipiscing', 'Elit Sed Goal for 2030'],
    line: ['Adipiscing Elit Ltd'],
    href: '#',
    image: 'material-patchouli',
    alt: 'Green leaves with dew',
  },
  {
    title: ["Lorem's Largest Private Sector", 'Tempor Incididunt Ut Labore'],
    line: ['Magna Aliqua Ltd'],
    href: '#',
    image: 'fragrance-petal',
    alt: 'Orange petals, close',
  },
  {
    title: ["Lorem's Largest Private Sector", 'Nostrud Exercitation Company'],
    line: ['Ullamco Laboris Solutions Ltd'],
    href: '#',
    image: 'hero-benzoin-tears',
    alt: 'Cassia bark, close',
  },
  {
    title: ['Inspired by Lorem,', 'Driven by Ipsum'],
    line: ['Dolor Sit Amet'],
    href: '#',
    image: 'material-nutmeg',
    alt: 'Whole nutmegs',
  },
];

/* ── Kutipan terbelah ────────────────────────────────────────────────── */

/* Kata yang diapit *bintang* dicetak tebal, seperti kata kunci pada kutipan
   di beranda Adani. Naskahnya PURPOSE_QUOTE dari about.ts. */
export const HOME_QUOTE = {
  text: 'We are not trying to *grow quickly*. We are trying to be the house *still buying from these slopes* when the people tapping them now have *grandchildren*.',
  name: 'Adhiloka Group',
  role: 'Family-held since the 1840s',
  cta: 'Our Leadership',
  href: '/about/our-leadership/',
  image: 'purpose-generations' as ImageKey,
  alt: 'Two children running through a meadow at dusk',
};

/* ── Akordeon keberlanjutan ──────────────────────────────────────────── */

export type Pillar = {
  label: string;
  stat: string;
  cta: string;
  href: string;
  image: ImageKey;
  alt: string;
};

/* Judul besar di panel yang terbuka — dari judul halaman Sustainability. */
export const PILLAR_HEADLINE = ['The forest', 'is a supplier,', 'not a resource'];

export const PILLARS: Pillar[] = [
  {
    label: 'Forest First',
    stat: '0 hectares cleared for our supply',
    cta: 'View Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    image: 'agroforest-canopy',
    alt: 'Tree canopy seen from below',
  },
  {
    label: 'Tapping Households',
    stat: '1,400+ households in the register',
    cta: 'View Progress for People',
    href: '/sustainability/people/',
    image: 'material-patchouli',
    alt: 'Green leaves with dew',
  },
  {
    label: 'Traceable to the Household',
    stat: '100% of benzoin traceable to its collection point',
    cta: 'View Our Approach',
    href: '/sustainability/',
    image: 'material-benzoin',
    alt: 'Sorted benzoin resin tears',
  },
];

/* ── Join Us ─────────────────────────────────────────────────────────── */

/* Belum ada halaman karier: semua tautan di section ini sengaja kosong (#). */
export const JOIN_US = {
  title: 'Join Us',
  body: 'We look for people who would rather learn a material properly than sell it quickly — at the stations, on the grading floor and at the bench.',
  cta: 'Know More',
  cards: [
    { label: 'Job Opportunities', image: 'about-table' as ImageKey, alt: 'Three people talking over a laid table' },
    { label: 'Our Values', image: 'material-benzoin' as ImageKey, alt: 'Sorted benzoin resin tears' },
    { label: 'Life at Adhiloka', image: 'fragrance-resin' as ImageKey, alt: 'Dried rhizome, close' },
    { label: 'Diversity & Inclusion', image: 'fragrance-bloom' as ImageKey, alt: 'Hibiscus bloom, close' },
  ],
};

/* ── Kotak peringatan ────────────────────────────────────────────────── */

export const NOTICE = {
  title: 'NOTICE — Beware of fraudulent communications',
  paragraphs: [
    'We are aware of individuals falsely claiming to act for Adhiloka Group and asking members of the public, farmers and suppliers for money in connection with supply contracts, sample orders, recruitment or registration.',
    'Adhiloka Group does not charge any fee for supplier or household registration, for job applications or interviews, or for sample requests. We never ask for payment, deposits or documents through social media or personal email addresses, and we will not message you first about an order.',
    'Please verify any request through the contacts published on this website. Adhiloka Group accepts no liability for dealings with persons who are not authorised to act for it.',
  ],
};
