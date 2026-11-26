import type { ImageKey } from './images';
import type { NavLink } from './site';

/* Tiga lini usaha Adhiloka Group (pemilik, 26 Nov 2026; keputusan
 * "2026-11-26 Website becomes group site"). Satu-satunya sumber nama, alamat,
 * foto, dan bilah sub-menu tiap lini: dipakai menu Our Businesses (site.ts),
 * beranda grup, /our-businesses/, BusinessSubnav, dan remah PageBanner.
 *
 * Nama lini deskriptif, tanpa sub-merek. URL naturals tidak dipindah
 * (/ingredients/…, /perfumery/); beranda lininya /natural-ingredients-perfumery/.
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
  /** Bilah sub-menu di halaman lini: tautan datar, tanpa label grup. */
  subnav: NavLink[];
};

export const BUSINESSES: Business[] = [
  {
    key: 'naturals',
    name: 'Natural Ingredients & Perfumery',
    href: '/natural-ingredients-perfumery/',
    paths: ['/natural-ingredients-perfumery/', '/ingredients/', '/perfumery/'],
    image: 'labelled-bottles',
    alt: 'Hands arranging labelled amber bottles on a marble table',
    line: 'Essential oils, resinoids and extracts for perfumers, and fragrances created in our own perfumery.',
    color: '#026a5b',
    subnav: [
      { label: 'Overview', href: '/natural-ingredients-perfumery/' },
      { label: 'Ingredients', href: '/ingredients/' },
      { label: 'Ingredient Catalog', href: '/ingredients/catalog/' },
      { label: 'Ingredients Map', href: '/ingredients/map/' },
      { label: 'Technology', href: '/ingredients/technology/' },
      { label: 'Perfumery', href: '/perfumery/' },
      { label: 'Working With Us', href: '/ingredients/working-with-us/' },
    ],
  },
  {
    key: 'seafood',
    name: 'Seafood',
    href: '/seafood/',
    paths: ['/seafood/'],
    image: 'line-seafood',
    alt: 'Fresh fish laid on crushed ice',
    line: 'Frozen fish, shrimp, crab and cephalopods, and dried marine products for importers and processors.',
    color: '#1d5d78',
    subnav: [
      { label: 'Overview', href: '/seafood/' },
      { label: 'Products', href: '/seafood/products/' },
      { label: 'Quality', href: '/seafood/#quality' },
      { label: 'Working With Us', href: '/seafood/#working-with-us' },
    ],
  },
  {
    key: 'packaging',
    name: 'Plastics & Packaging',
    href: '/plastics-packaging/',
    paths: ['/plastics-packaging/'],
    image: 'line-packaging',
    alt: 'Clear plastic pellets held in an open hand',
    line: 'Polyethylene, polypropylene and other resins, films, bottles, food packaging and glass for fragrance.',
    color: '#45596a',
    subnav: [
      { label: 'Overview', href: '/plastics-packaging/' },
      { label: 'Products', href: '/plastics-packaging/products/' },
      { label: 'Working With Us', href: '/plastics-packaging/#working-with-us' },
    ],
  },
];

export const businessByKey = (key: BusinessKey) => BUSINESSES.find((b) => b.key === key)!;

/** Lini tempat sebuah jalur berada, atau undefined untuk halaman grup. */
export const businessOf = (path: string) => BUSINESSES.find((b) => b.paths.some((p) => path.startsWith(p)));

/** Label halaman di dalam lini, untuk remah: sub-menu lini plus halaman anak naturals. */
export const BUSINESS_LINKS: NavLink[] = [
  ...BUSINESSES.flatMap((b) => b.subnav.filter((l) => !l.href.includes('#') && l.href !== b.href)),
  { label: 'Natural Ingredients', href: '/ingredients/natural-ingredients/' },
];
