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

/* Situs grup (pemilik, 26 Nov 2026): empat slide di bawah ini (final 21 Nov
 * 2026) pindah apa adanya ke beranda lini /natural-ingredients-perfumery/.
 * Beranda grup memakai GROUP_HERO_SLIDES. */
export const NATURALS_HERO_SLIDES: HeroSlide[] = [
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

/* Our Business (pemilik, 22 Nov 2026): bentuk tile + foto besar ("overview")
 * tetap, tapi tanpa tab Ingredients/Perfumery; cukup empat tile. Fotonya
 * ditetapkan pemilik: mawar merah muda untuk Natural Ingredients, foto
 * perfumery close-up (bukan foto hero) untuk Perfumery, alat lab close-up
 * untuk Technology, alam untuk Sustainability. `href` = tujuan Explore More
 * yang ditetapkan pemilik; chip = bagian di halaman tujuan. */
export type BusinessPane = {
  key: string;
  label: string;
  image: ImageKey;
  chips: { label: string; href: string }[];
  href: string;
};

/* Situs grup: empat tile di bawah ini (final 22 Nov 2026) pindah apa adanya
 * ke beranda lini naturals. Beranda grup memakai GROUP_PANES. */
export const NATURALS_PANES: BusinessPane[] = [
  {
    key: 'ingredients',
    label: 'Natural Ingredients',
    image: 'hero-rose-dew',
    chips: [
      { label: 'Resins', href: '/ingredients/catalog/?family=Resin' },
      { label: 'Woods', href: '/ingredients/catalog/?family=Wood' },
      { label: 'Roots', href: '/ingredients/catalog/?family=Root' },
      { label: 'Leaf Oils', href: '/ingredients/catalog/?family=Leaf' },
      { label: 'Spices', href: '/ingredients/catalog/?family=Spice' },
    ],
    href: '/ingredients/catalog/',
  },
  {
    key: 'perfumery',
    label: 'Perfumery',
    image: 'hero-perfumer-blending',
    chips: [
      { label: 'Fine Fragrance', href: '/perfumery/#fine-fragrance' },
      { label: 'Consumer Fragrance', href: '/perfumery/#consumer-fragrance' },
      { label: 'Fragrance Innovation', href: '/perfumery/#innovation' },
      { label: 'Our Palette', href: '/perfumery/#palette' },
    ],
    href: '/perfumery/#fine-fragrance',
  },
  {
    key: 'technology',
    label: 'Technology',
    image: 'hero-extraction-rig',
    chips: [
      { label: 'Extraction & Distillation', href: '/ingredients/technology/#routes' },
      { label: 'Science & Renewables', href: '/ingredients/technology/#science' },
      { label: 'What We Produce', href: '/ingredients/technology/#range' },
      { label: 'Quality', href: '/ingredients/technology/#quality' },
    ],
    href: '/ingredients/technology/',
  },
  {
    key: 'sustainability',
    label: 'Sustainability',
    image: 'hero-tea-hills',
    chips: [
      { label: 'Responsible Sourcing', href: '/sustainability/responsible-sourcing/' },
      { label: 'Progress for People', href: '/sustainability/people/' },
      { label: 'Partnerships', href: '/sustainability/people/#partnerships' },
    ],
    href: '/sustainability/',
  },
];

/* ── Beranda grup (situs grup, pemilik 26 Nov 2026) ──────────────────── */

/* Hero grup, takaran sama dengan hero naturals: judul pendek dua baris, satu
 * baris kecil. Slide 1 memakai foto dan tautan slide We Are Adhiloka yang
 * final; baris kecilnya menyebut ketiga lini. Foto slide lini = foto beranda
 * lini itu (businesses.ts). */
export const GROUP_HERO_SLIDES: HeroSlide[] = [
  {
    title: ['We Are Adhiloka'],
    line: ['Natural Ingredients · Seafood · Plastics & Packaging'],
    href: '/about/',
    image: 'hero-woman-golden-light',
    focus: '72% 50%',
    alt: 'Smiling woman lit by the late afternoon sun',
  },
  {
    title: ['Scent from', 'Living Plants'],
    line: ['Natural Ingredients & Perfumery'],
    href: '/natural-ingredients-perfumery/',
    image: 'labelled-bottles',
    alt: 'Hands arranging labelled amber bottles on a marble table',
  },
  {
    title: ["The Sea's Harvest"],
    line: ['Frozen & Dried Seafood'],
    href: '/seafood/',
    image: 'line-seafood',
    alt: 'Fresh fish laid on crushed ice',
  },
  {
    title: ['Made to Hold', 'and Protect'],
    line: ['Resins, Films & Packaging'],
    href: '/plastics-packaging/',
    image: 'line-packaging',
    alt: 'Clear plastic pellets held in an open hand',
  },
];

/* Kutipan grup, pola pernyataan tujuan satu kalimat seperti HOME_QUOTE. */
export const GROUP_QUOTE = {
  text: 'From *the land*, from *the sea*, and the *materials that carry them*: we know what we supply, and we stand behind it.',
  cta: 'Discover More',
  href: '/about/',
  image: 'group-quote' as ImageKey,
  alt: 'Fishing boats resting on calm water at first light',
};

/* Our Business beranda grup: bentuk tile 2 x 2 + foto besar tetap; tiga lini
 * dan Sustainability. Chip = bagian di halaman tujuan. */
export const GROUP_PANES: BusinessPane[] = [
  {
    key: 'naturals',
    label: 'Natural Ingredients & Perfumery',
    image: 'labelled-bottles',
    chips: [
      { label: 'Ingredient Catalog', href: '/ingredients/catalog/' },
      { label: 'Ingredients Map', href: '/ingredients/map/' },
      { label: 'Technology', href: '/ingredients/technology/' },
      { label: 'Perfumery', href: '/perfumery/' },
    ],
    href: '/natural-ingredients-perfumery/',
  },
  {
    key: 'seafood',
    label: 'Seafood',
    image: 'line-seafood',
    chips: [
      { label: 'Frozen Fish', href: '/seafood/products/?cat=fish' },
      { label: 'Shrimp & Crab', href: '/seafood/products/?cat=crustaceans' },
      { label: 'Squid & Octopus', href: '/seafood/products/?cat=cephalopods' },
      { label: 'Dried Marine Products', href: '/seafood/products/?cat=dried' },
    ],
    href: '/seafood/',
  },
  {
    key: 'packaging',
    label: 'Plastics & Packaging',
    image: 'line-packaging',
    chips: [
      { label: 'Plastic Resins', href: '/plastics-packaging/products/?cat=resins' },
      { label: 'Films & Flexible', href: '/plastics-packaging/products/?cat=flexible' },
      { label: 'Bottles & Jars', href: '/plastics-packaging/products/?cat=rigid' },
      { label: 'Glass for Fragrance', href: '/plastics-packaging/products/?cat=glass' },
    ],
    href: '/plastics-packaging/',
  },
  {
    key: 'sustainability',
    label: 'Sustainability',
    image: 'hero-tea-hills',
    chips: [
      { label: 'Responsible Sourcing', href: '/sustainability/responsible-sourcing/' },
      { label: 'Progress for People', href: '/sustainability/people/' },
      { label: 'Partnerships', href: '/sustainability/people/#partnerships' },
    ],
    href: '/sustainability/',
  },
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
