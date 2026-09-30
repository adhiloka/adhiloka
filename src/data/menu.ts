import { NAV, type NavLink } from './site';
import { MATERIALS, type Family } from './materials';
import { MATERIAL_NAMES } from './material-names';

/* Isi mega-menu. Tiap panel berbaris judul (nama menu, menuju halaman induk)
 * lalu kolom seperti mega-menu adani.com: kepala kolom plus daftar tautan.
 * About Us dan Media tidak punya kolom yang berdiri sendiri: semua halaman
 * anaknya dikelompokkan di bawah label grup. Menu utamanya tetap NAV di
 * site.ts; di sini hanya susunan kolomnya.
 *
 * Tautan ber-# menunjuk id section di halamannya (id Passage di data halaman,
 * atau slug material di katalog), jadi jangan ganti id itu tanpa mengubah ini. */

/** Kepala kolom: tautan (kolom Perfumery, Ingredients…) atau label grup
 *  tanpa tautan (About Us, Media) yang hanya mengelompokkan halaman anak. */
export type MenuHead = { label: string; href?: string };
export type MenuColumn = { head: MenuHead; links?: NavLink[] };
/** Satu panel mega-menu: baris judul panel (menuju halaman induk) lalu kolom. */
export type MenuPanel = { heading: NavLink; columns: MenuColumn[] };

const byFamily = (...families: Family[]): NavLink[] =>
  MATERIALS.filter((m) => families.includes(m.family)).map((m) => ({
    label: MATERIAL_NAMES[m.slug] ?? m.name,
    href: `/ingredients/catalog/#${m.slug}`,
  }));

const COLUMNS: Record<string, MenuColumn[]> = {
  // About Us: semua halaman anak di bawah satu grup, dipecah dua kolom.
  '/about/': [
    {
      head: { label: 'Who We Are' },
      links: [
        { label: 'Overview', href: '/about/' },
        { label: 'Our Business', href: '/about/our-business/' },
        { label: 'Our Purpose', href: '/about/our-purpose/' },
      ],
    },
    {
      head: { label: 'People & Places' },
      links: [
        { label: 'Our Leadership', href: '/about/our-leadership/' },
        { label: 'Our History', href: '/about/our-history/' },
        { label: 'Our Locations', href: '/about/our-locations/' },
      ],
    },
  ],
  '/perfumery/': [
    {
      head: { label: 'Fine Fragrance', href: '/perfumery/fine-fragrance/' },
      links: [
        { label: 'The palette', href: '/perfumery/fine-fragrance/#palette' },
        { label: 'Bespoke creation', href: '/perfumery/fine-fragrance/#bespoke' },
        { label: 'Functional bases', href: '/perfumery/fine-fragrance/#functional' },
      ],
    },
    {
      head: { label: 'Fragrance Innovation', href: '/perfumery/fragrance-innovation/' },
      links: [
        { label: 'Fractionation', href: '/perfumery/fragrance-innovation/#fractionation' },
        { label: 'Analytical control', href: '/perfumery/fragrance-innovation/#analysis' },
        { label: 'Naturals research', href: '/perfumery/fragrance-innovation/#research' },
      ],
    },
  ],
  '/ingredients/': [
    {
      head: { label: 'Resins & Woods', href: '/ingredients/catalog/' },
      links: byFamily('Resin', 'Wood'),
    },
    {
      head: { label: 'Leaf Oils', href: '/ingredients/catalog/' },
      links: byFamily('Leaf'),
    },
    {
      head: { label: 'Spices', href: '/ingredients/catalog/' },
      links: byFamily('Spice'),
    },
    {
      head: { label: 'Flowers, Roots & Citrus', href: '/ingredients/catalog/' },
      links: byFamily('Flower', 'Root', 'Citrus'),
    },
    {
      head: { label: 'Ingredients Catalog', href: '/ingredients/catalog/' },
      links: [{ label: 'Technology', href: '/ingredients/technology/' }],
    },
  ],
  '/sustainability/': [
    {
      head: { label: 'Driving progress for people', href: '/sustainability/people/' },
      links: [
        { label: 'Income', href: '/sustainability/people/#income' },
        { label: 'Bad seasons', href: '/sustainability/people/#failure' },
        { label: 'Skills', href: '/sustainability/people/#skills' },
      ],
    },
    {
      head: { label: 'Responsible Sourcing', href: '/sustainability/responsible-sourcing/' },
      links: [
        { label: 'From garden to drum', href: '/sustainability/responsible-sourcing/#chain' },
        { label: 'Direct purchase', href: '/sustainability/responsible-sourcing/#direct' },
        { label: 'Land', href: '/sustainability/responsible-sourcing/#land' },
      ],
    },
  ],
  '/media/': [
    {
      head: { label: 'Newsroom' },
      links: [
        { label: 'Overview', href: '/media/' },
        { label: 'News', href: '/media/news/' },
      ],
    },
    {
      head: { label: 'Resources' },
      links: [
        { label: 'Media Resources', href: '/media/media-resources/' },
        { label: 'Social Media', href: '/media/social-media/' },
      ],
    },
  ],
};

export const MEGA: Record<string, MenuPanel> = Object.fromEntries(
  NAV.filter((item) => COLUMNS[item.href]).map((item) => [
    item.href,
    { heading: { label: item.label, href: item.href }, columns: COLUMNS[item.href] },
  ]),
);

export const MENU = NAV.map((item) => ({ ...item, mega: MEGA[item.href] }));
