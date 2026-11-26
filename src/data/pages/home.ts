import type { ImageKey } from '../images';
import { businessByKey } from '../businesses';
import { LINE_CATALOG, categoryImage, lineCategoryHref, lineProductHref } from '../line-products';

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

/* Hero empat slide naturals (final 21 Nov 2026) dilepas 27 Nov 2026: halaman
 * lini kini sub-halaman berbanner (pemilik). Isinya ada di riwayat git. */

/* ── Kutipan terbelah ────────────────────────────────────────────────── */

/* Kata yang diapit *bintang* dicetak tebal, seperti kata kunci pada kutipan
   di beranda Adani. Kutipan naturals (HOME_QUOTE) dilepas 27 Nov 2026
   bersama beranda lini; kutipan grup di GROUP_QUOTE. */

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
 * ke beranda lini naturals; sejak 27 Nov 2026 jadi tab Fragrance di
 * Our Businesses beranda grup (GROUP_TABS). */
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
    line: ['Fragrance · Fisheries · Polymers'],
    href: '/about/',
    image: 'hero-woman-golden-light',
    focus: '72% 50%',
    alt: 'Smiling woman lit by the late afternoon sun',
  },
  {
    title: ['Scent from', 'Living Plants'],
    line: ['Fragrance'],
    href: '/fragrance/',
    image: 'labelled-bottles',
    alt: 'Hands arranging labelled amber bottles on a marble table',
  },
  {
    title: ["The Sea's Harvest"],
    line: ['Fisheries'],
    href: '/fisheries/',
    image: 'line-seafood',
    alt: 'Fresh fish laid on crushed ice',
  },
  {
    title: ['Made to Hold', 'and Protect'],
    line: ['Polymers'],
    href: '/polymers/',
    image: 'line-packaging',
    alt: 'Clear plastic pellets held in an open hand',
  },
];

/* Kutipan grup, pola pernyataan tujuan satu kalimat. */
export const GROUP_QUOTE = {
  text: 'From *the land*, from *the sea*, and the *materials that carry them*: we know what we supply, and we stand behind it.',
  cta: 'Discover More',
  href: '/about/',
  image: 'group-quote' as ImageKey,
  alt: 'Fishing boats resting on calm water at first light',
};

/* Our Businesses beranda grup (pemilik, 27 Nov 2026: "tiru Adani, sekarang
 * bisnisnya sudah tiga"). Pola section Businesses adani.com: tab per lini,
 * tiap tab empat tile 2 x 2 yang memilih foto besar berchip + Explore More.
 *   Fragrance = empat tile final 22 Nov 2026 (NATURALS_PANES).
 *   Fisheries / Polymers = empat kategori; foto = foto produk pertama
 *   kategori itu (categoryImage), chip = produknya, Explore More = jangkar
 *   kategori di halaman Products. */
export type BusinessTab = { key: string; label: string; href: string; panes: BusinessPane[] };

const linePanes = (line: 'seafood' | 'packaging', cats: string[]): BusinessPane[] =>
  cats.map((cat) => {
    const { categories, products } = LINE_CATALOG[line];
    const c = categories.find((x) => x.key === cat)!;
    return {
      key: `${line}-${cat}`,
      label: c.label,
      image: categoryImage(line, cat),
      chips: products.filter((p) => p.category === cat).slice(0, 4).map((p) => ({ label: p.name, href: lineProductHref(p) })),
      href: lineCategoryHref(line, cat),
    };
  });

export const GROUP_TABS: BusinessTab[] = [
  { key: 'naturals', label: businessByKey('naturals').name, href: businessByKey('naturals').href, panes: NATURALS_PANES },
  { key: 'seafood', label: businessByKey('seafood').name, href: businessByKey('seafood').href, panes: linePanes('seafood', ['fish', 'crustaceans', 'cephalopods', 'dried']) },
  { key: 'packaging', label: businessByKey('packaging').name, href: businessByKey('packaging').href, panes: linePanes('packaging', ['resins', 'flexible', 'rigid', 'glass']) },
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
