import type { ImageKey } from '../images';

/* Naskah beranda, disusun menurut urutan section adani.com:
 * hero slider → kutipan terbelah → Our Business → akordeon keberlanjutan →
 * Latest News → Join Us → kotak peringatan. Section Business dan News
 * mengambil isinya langsung dari materials.ts dan media.ts.
 *
 * Sejak 29 Sep 2026 seluruh naskah situs berupa lorem ipsum (permintaan
 * pemilik); yang tetap asli hanya menu, footer, tombol, label dan judul
 * section. Batasnya dijelaskan di README. */

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
  text: 'Ad hic quo maxime in *quis quaerat*. Ex aut dolore ab at nam neque *minim soluta quis totam facere* odio aut aliqua nostrud iure eum modi *reprehenderit*.',
  name: 'Proident Totam',
  role: 'Labore-nisi error vel 1234s',
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
export const PILLAR_HEADLINE = ['Vel dolore', 'et at adipisci,', 'eum at quisquam'];

export const PILLARS: Pillar[] = [
  {
    label: 'Minima Natus',
    stat: '1 deleniti quaerat nam est cillum',
    cta: 'View Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    image: 'agroforest-canopy',
    alt: 'Tree canopy seen from below',
  },
  {
    label: 'Placeat Laudantium',
    stat: '1,234+ architecto ab cum corrupti',
    cta: 'View Progress for People',
    href: '/sustainability/people/',
    image: 'material-patchouli',
    alt: 'Green leaves with dew',
  },
  {
    label: 'Quibusdam do sed Similique',
    stat: '12% ab dolores consequat ex quo adipiscing fugit',
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
  body: 'Ex odit eum itaque qui atque facere dicta et voluptas officiis esse aute ad tempora — id sed pariatur, ea hic dolores ipsam sed in quo ipsum.',
  cta: 'Know More',
  cards: [
    { label: 'Cum Consequuntur', image: 'about-table' as ImageKey, alt: 'Three people talking over a laid table' },
    { label: 'Nam Facere', image: 'material-benzoin' as ImageKey, alt: 'Sorted benzoin resin tears' },
    { label: 'Elit id Suscipit', image: 'fragrance-resin' as ImageKey, alt: 'Dried rhizome, close' },
    { label: 'Occaecati & Excepteur', image: 'fragrance-bloom' as ImageKey, alt: 'Hibiscus bloom, close' },
  ],
};

/* ── Kotak peringatan ────────────────────────────────────────────────── */

export const NOTICE = {
  title: 'NOTICE — Beware of fraudulent communications',
  paragraphs: [
    'Do qui quasi et repudiandae ullamco deserunt et vel nam voluptas ipsam eum magnam ratione ut non soluta, tempore vel similique hic alias ut doloremque quae soluta assumenda, dolore veniam, consequatur ut voluptatibus.',
    'Corporis sequi eius aut beatae rem eos vel sapiente do cupidatat exercitation, sed vel exercitation do incididunt, in eum magnam repellat. Ut illum cum qui impedit, officiis ea excepteur dolorem facere omnis in occaecat porro veritatis, eos id vero hic tempore nam fugit irure ad culpa.',
    'Mollit beatae hic commodi eiusmod hic suscipit accusamus ea quam facilis. Repellat saepe dolores do assumenda quo suscipit elit dolores qui non vel incididunt at vel qui at.',
  ],
};
