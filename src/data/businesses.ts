import type { ImageKey } from './images';
import type { NavLink } from './site';

/* Tiga lini usaha Adhiloka Group (pemilik, 26 Nov 2026; keputusan
 * "2026-11-26 Website becomes group site"). Nama diganti 27 Nov 2026
 * dua kali (pemilik): jangan "Seafood", "Plastics & Packaging", "Natural
 * Aromatics", "Marine Products". Kini Fragrance · Fisheries · Polymers: kata
 * benda pendek bergaya nama segmen (Maruha Nichiro "Fishery segment", Saudi
 * Fisheries Company; Formerra "polymers"). Kunci internal
 * (naturals/seafood/packaging) tetap.
 * Satu-satunya sumber nama, alamat,
 * foto, dan bilah sub-menu tiap lini: dipakai menu Our Businesses (site.ts),
 * beranda grup, /our-businesses/, dan remah PageBanner.
 *
 * Nama lini deskriptif, tanpa sub-merek. URL naturals tidak dipindah
 * (/ingredients/…, /perfumery/); halaman lininya /fragrance/.
 * Foto lini = foto beranda lini itu: kartu, tile, slide hero, dan menu yang
 * menaut ke beranda lini memakai foto yang sama (aturan satu foto satu konteks). */

export type BusinessKey = 'naturals' | 'seafood' | 'packaging';

export type Business = {
  key: BusinessKey;
  name: string;
  href: string;
  /** Awalan jalur yang termasuk lini ini (untuk remah, menu aktif, sub-menu). */
  paths: string[];
  image: ImageKey;
  alt: string;
  focus?: string;
  /** Satu kalimat untuk kartu /our-businesses/ (gaya "Business portfolio" adani.com). */
  line: string;
  /** Warna kepala halaman produk lini ini. */
  color: string;
  /** Halaman di dalam lini, hanya untuk label remah. Bilah sub-menu lini
   *  dilepas 27 Nov 2026 (pemilik: terkesan dua menu bar); navigasi lini =
   *  kartu Our Portfolio di halaman lini + remah di banner, pola adani.com. */
  pages: NavLink[];
};

export const BUSINESSES: Business[] = [
  {
    key: 'naturals',
    name: 'Fragrance',
    href: '/fragrance/',
    paths: ['/fragrance/', '/ingredients/', '/perfumery/'],
    image: 'labelled-bottles',
    alt: 'Hands arranging labelled amber bottles on a marble table',
    line: 'Essential oils, resinoids and extracts for perfumers, and fragrances created in our own perfumery.',
    color: '#026a5b',
    pages: [
      { label: 'Ingredients', href: '/ingredients/' },
      { label: 'Perfumery', href: '/perfumery/' },
      { label: 'Ingredient Catalog', href: '/ingredients/catalog/' },
      { label: 'Ingredients Map', href: '/ingredients/map/' },
      { label: 'Technology', href: '/ingredients/technology/' },
      { label: 'Natural Ingredients', href: '/ingredients/natural-ingredients/' },
    ],
  },
  {
    key: 'seafood',
    name: 'Fisheries',
    href: '/fisheries/',
    paths: ['/fisheries/'],
    image: 'line-seafood',
    alt: 'Fresh fish laid on crushed ice',
    line: 'Frozen fish, shrimp, crab and cephalopods, and dried products from the sea, for importers and processors.',
    color: '#1d5d78',
    pages: [{ label: 'Products', href: '/fisheries/products/' }],
  },
  {
    key: 'packaging',
    name: 'Polymers',
    href: '/polymers/',
    paths: ['/polymers/'],
    image: 'line-packaging',
    alt: 'Clear plastic pellets held in an open hand',
    line: 'Polyethylene, polypropylene and other resins, films, bottles, food packaging and glass for fragrance.',
    color: '#45596a',
    pages: [{ label: 'Products', href: '/polymers/products/' }],
  },
];

export const businessByKey = (key: BusinessKey) => BUSINESSES.find((b) => b.key === key)!;

/** Lini tempat sebuah jalur berada, atau undefined untuk halaman grup. */
export const businessOf = (path: string) => BUSINESSES.find((b) => b.paths.some((p) => path.startsWith(p)));

/** Label halaman di dalam lini, untuk remah. */
export const BUSINESS_LINKS: NavLink[] = BUSINESSES.flatMap((b) => b.pages);
