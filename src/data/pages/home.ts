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

/* Naskah asli sejak 18 Okt 2026 (disetujui pemilik), bergaya hero situs
 * fragrance seperti Givaudan, Robertet dan dsm-firmenich: tanpa angka atau
 * klaim yang belum terbukti. Yang dijaga adalah takaran slider adani.com — judul dua baris
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
    title: ['We Are Adhiloka'],
    line: ['Natural Ingredients & Perfumery'],
    href: '/about/',
    image: 'agroforest-canopy',
    alt: 'Green tree canopy seen from below',
  },
  {
    title: ['Rooted in the Islands', 'of Indonesia'],
    line: ['Natural Raw Materials'],
    href: '/ingredients/',
    image: 'material-benzoin',
    alt: 'Sorted benzoin resin tears',
  },
  {
    title: ['From Field', 'to Fragrance'],
    line: ['Our Expertise'],
    href: '/ingredients/technology/',
    image: 'material-patchouli',
    alt: 'Green leaves with dew',
  },
  {
    title: ['Where Nature Meets', "the Perfumer's Art"],
    line: ['Perfumery'],
    href: '/perfumery/',
    image: 'fragrance-petal',
    alt: 'Orange petals, close',
  },
  {
    title: ['The Scents of', 'the Archipelago'],
    line: ['Signature Ingredients'],
    href: '/ingredients/catalog/',
    image: 'hero-benzoin-tears',
    alt: 'Cassia bark, close',
  },
  {
    title: ['Growing Together', 'with Nature'],
    line: ['Our Purpose'],
    href: '/about/our-purpose/',
    image: 'material-nutmeg',
    alt: 'Whole nutmegs',
  },
];

/* ── Kutipan terbelah ────────────────────────────────────────────────── */

/* Kata yang diapit *bintang* dicetak tebal, seperti kata kunci pada kutipan
   di beranda Adani. Sejak 18 Okt 2026 berupa pernyataan tujuan atas nama
   perusahaan (gaya "Our purpose" Givaudan/Robertet), disetujui pemilik. */
export const HOME_QUOTE = {
  text: "Every scent begins with a *living plant* and the *hands that tend it*. We exist to carry that nature, *with care*, from Indonesian soil to the perfumer's bench.",
  name: 'Adhiloka',
  role: 'Our Purpose',
  cta: 'Our Purpose',
  href: '/about/our-purpose/',
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

/* Judul besar di panel yang terbuka. Sejak 18 Okt 2026 tiga pilar mengikuti
 * pola Nature / People / Communities Givaudan, tanpa angka target (disetujui
 * pemilik). */
export const PILLAR_HEADLINE = ['Caring for', 'nature and', 'its people'];

export const PILLARS: Pillar[] = [
  {
    label: 'Nature',
    stat: 'Respecting the land our ingredients come from',
    cta: 'View Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    image: 'agroforest-canopy',
    alt: 'Tree canopy seen from below',
  },
  {
    label: 'People',
    stat: 'Working side by side with our growers',
    cta: 'View Progress for People',
    href: '/sustainability/people/',
    image: 'material-patchouli',
    alt: 'Green leaves with dew',
  },
  {
    label: 'Communities',
    stat: 'Lasting ties with the villages behind each harvest',
    cta: 'View Our Approach',
    href: '/sustainability/',
    image: 'material-benzoin',
    alt: 'Sorted benzoin resin tears',
  },
];

/* ── Join Us ─────────────────────────────────────────────────────────── */

/* Naskah disetujui pemilik 18 Okt 2026 (gaya Symrise/Ventós). Halaman karier
 * belum ada, jadi tombol dan semua kartu sementara menuju /contact/. */
export const JOIN_US = {
  title: 'Join Us',
  body: 'Join a team that works with nature every day, alongside the growers who tend it and the perfumers who bring it to life.',
  cta: 'Know More',
  href: '/contact/',
  cards: [
    { label: 'Careers', href: '/contact/', image: 'about-table' as ImageKey, alt: 'Three people talking over a laid table' },
    { label: 'Become a Supplier', href: '/contact/', image: 'material-benzoin' as ImageKey, alt: 'Sorted benzoin resin tears' },
    { label: 'Partner with Us', href: '/contact/', image: 'fragrance-resin' as ImageKey, alt: 'Dried rhizome, close' },
    { label: 'Life at Adhiloka', href: '/contact/', image: 'fragrance-bloom' as ImageKey, alt: 'Hibiscus bloom, close' },
  ],
};

/* ── Kotak peringatan ────────────────────────────────────────────────── */

/* Disetujui pemilik 18 Okt 2026, pola peringatan Symrise/IFF. Sampel sengaja
   tidak disebut: kebijakan biaya sampel belum diputuskan. */

export const NOTICE = {
  title: 'NOTICE: Beware of fraudulent communications',
  paragraphs: [
    'Fraudsters may use the Adhiloka name, logo and images to contact job seekers, suppliers and buyers with offers that are not ours. These messages may promise jobs, supply contracts or orders, and often ask for money or personal details.',
    'Adhiloka never charges a fee to apply for a job, to register as a supplier or to receive a quotation. We do not ask for bank or card details by chat or social media, and we do not make job offers without an interview. Official correspondence comes only from an @adhiloka.com email address.',
    'If a message seems suspicious, do not send money or personal information. Write to us first at info@adhiloka.com and we will confirm whether it is genuine.',
  ],
};
