import type { ImageKey } from '../images';

/* Naskah beranda, disusun menurut urutan section adani.com:
 * hero slider → kutipan terbelah → Our Business → akordeon keberlanjutan →
 * Latest News → Join Us → kotak peringatan. Section Business dan News
 * mengambil isinya langsung dari materials.ts dan media.ts.
 *
 * Naskah beranda asli sejak 18 Okt 2026; halaman lain menyusul 10 Nov 2026.
 * Batasnya (tanpa klaim yang belum terbukti) dijelaskan di README. */

/* ── Hero slider ─────────────────────────────────────────────────────── */

/* Naskah asli sejak 18 Okt 2026 (disetujui pemilik), bergaya hero situs
 * fragrance seperti Givaudan, Robertet dan dsm-firmenich: tanpa angka atau
 * klaim yang belum terbukti. Yang dijaga adalah takaran slider adani.com — judul dua baris
 * dengan pemisah baris eksplisit (panjang tiap baris setara judul Adani),
 * lalu satu baris pendek di bawahnya, setara nama anak usaha di Adani
 * ("Adani Power Ltd", "Natural Resources"). Enam slide seperti Adani, supaya
 * deret kartunya berisi tiga kartu dan satu kartu terpotong di tepi layar.
 *
 * Judul slide 2–5 diganti 18 Okt 2026 (permintaan pemilik) ke sudut "peran di
 * hulu": tidak lagi menyebut Indonesia/kepulauan karena Adhiloka akan memasok
 * bahan dari banyak daerah, dan menghindari "field to …" (dipakai Biolandes)
 * serta akhiran "by nature" (dipakai Givaudan, Robertet, Eurofragance). */

export type HeroSlide = {
  /** Judul, satu atau dua baris; tiap elemen dicetak di barisnya sendiri. */
  title: string[];
  /** Baris pendek di bawah judul; boleh dua baris seperti tagar slide 1 Adani. */
  line: string[];
  href: string;
  image: ImageKey;
  /** Keterangan isi foto yang sebenarnya, untuk alt. */
  alt: string;
  /** Titik fokus foto (object-position) bila subjek tidak di tengah; terasa di layar tegak (HP). */
  focus?: string;
};

export const HERO_SLIDES: HeroSlide[] = [
  {
    title: ['We Are Adhiloka'],
    line: ['Natural Ingredients & Perfumery'],
    href: '/about/',
    image: 'hero-woman-golden-light',
    focus: '72% 50%',
    alt: 'Smiling woman lit by the late afternoon sun',
  },
  {
    title: ['Where Scent', 'Becomes Memory'],
    line: ['Fine Fragrance & Consumer Fragrance'],
    href: '/perfumery/',
    image: 'hero-smelling-vial',
    focus: '62% 50%',
    alt: 'Woman with eyes closed smelling a small fragrance bottle',
  },
  {
    title: ['The Raw Materials', 'of Fine Fragrance'],
    line: ['Essential Oils, Resinoids & Extracts'],
    href: '/ingredients/',
    image: 'hero-blossom-golden',
    focus: '45% 50%',
    alt: 'Blossom backlit by the golden evening sun',
  },
  {
    title: ['Rooted in Care'],
    line: ['Responsible Sourcing for People and the Land'],
    href: '/sustainability/',
    image: 'hero-hands-seedling',
    focus: '65% 50%',
    alt: 'Hands holding a young seedling in soil',
  },
];

/* ── Kutipan terbelah ────────────────────────────────────────────────── */

/* Kata yang diapit *bintang* dicetak tebal, seperti kata kunci pada kutipan
   di beranda Adani. Sejak 18 Okt 2026 berupa pernyataan tujuan atas nama
   perusahaan (gaya "Our purpose" Givaudan/Robertet), disetujui pemilik. */
export const HOME_QUOTE = {
  text: 'We bring the *scent of living plants* to those who create with it, and we look after *the land and the hands* behind every harvest.',
  cta: 'Discover More',
  href: '/about/our-purpose/',
  /* Kutipan dan foto diganti 14 Nov 2026 (pemilik: yang anak-anak berlari
     dibuat yang lain). Polanya pernyataan tujuan satu kalimat seperti
     dsm-firmenich, Robertet dan Symrise; fotonya tegak, pas dengan bingkai. */
  image: 'pepper-harvest-hands' as ImageKey,
  alt: 'Hands picking pepper berries from the vine',
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
    image: 'rainforest-aerial',
    alt: 'Rainforest seen from above',
  },
  {
    label: 'People',
    stat: 'Working side by side with our growers',
    cta: 'View Progress for People',
    href: '/sustainability/people/',
    image: 'rice-planting',
    alt: 'Planting rice by hand',
  },
  {
    label: 'Communities',
    stat: 'Lasting ties with the villages behind each harvest',
    cta: 'View Our Approach',
    href: '/sustainability/',
    image: 'rice-terraces',
    alt: 'Rice terraces seen from above',
  },
];

/* ── Our Business ────────────────────────────────────────────────────── */

/* Our Business dirombak total 22 Nov 2026 (komentar pemilik): tanpa tab,
 * cukup empat kartu, masing-masing satu tautan. Fotonya ditetapkan pemilik:
 * mawar merah muda untuk Natural Ingredients, foto perfumery close-up (bukan
 * foto hero) untuk Fine Fragrance, alat lab close-up untuk Technology, alam
 * untuk Sustainability. */
export const BUSINESS_CARDS: { label: string; href: string; image: ImageKey; alt: string }[] = [
  { label: 'Natural Ingredients', href: '/ingredients/catalog/', image: 'hero-rose-dew', alt: 'Pink rose petals with dew drops, close up' },
  { label: 'Perfumery', href: '/perfumery/#fine-fragrance', image: 'hero-perfumer-blending', alt: 'Perfumer blending with a pipette, close up' },
  { label: 'Technology', href: '/ingredients/technology/', image: 'hero-extraction-rig', alt: 'Glass and steel extraction equipment in a laboratory' },
  { label: 'Sustainability', href: '/sustainability/', image: 'hero-tea-hills', alt: 'Green tea hills under a bright sky' },
];

/* ── Join Us ─────────────────────────────────────────────────────────── */

/* Naskah disetujui pemilik 18 Okt 2026 (gaya Symrise/Ventós). Sejak 13 Nov
 * 2026 kartu menuju halamannya sendiri di menu Connect; "Life at Adhiloka"
 * dilepas. Become a Supplier dan Partner with Us digabung jadi Partner with Us
 * (pemilik, 22 Nov 2026), jadi tinggal dua kartu. */

export const JOIN_US = {
  title: 'Join Us',
  cards: [
    { label: 'Careers', href: '/contact/careers/', image: 'lab-technician' as ImageKey, alt: 'Technician at work in a laboratory' },
    { label: 'Partner with Us', href: '/contact/partners/', image: 'partner-hands-coffee' as ImageKey, alt: 'Four pairs of hands holding red coffee cherries' },
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
