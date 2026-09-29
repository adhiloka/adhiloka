import { NAV, type NavLink } from './site';
import { MATERIALS, type Family } from './materials';
import { MATERIAL_NAMES } from './material-names';

/* Isi mega-menu, disusun seperti mega-menu adani.com: tiap kolom punya kepala
 * (tautan tebal bergaris bawah) dan boleh punya daftar tautan di bawahnya.
 * Menu utamanya tetap NAV di site.ts; di sini hanya susunan kolomnya.
 *
 * Tautan ber-# menunjuk id section di halamannya (id Passage di data halaman,
 * atau slug material di katalog), jadi jangan ganti id itu tanpa mengubah ini. */

export type MenuColumn = { head: NavLink; links?: NavLink[] };

const byFamily = (...families: Family[]): NavLink[] =>
  MATERIALS.filter((m) => families.includes(m.family)).map((m) => ({
    label: MATERIAL_NAMES[m.slug] ?? m.name,
    href: `/ingredients/catalog/#${m.slug}`,
  }));

export const MEGA: Record<string, MenuColumn[]> = {
  '/about/': [
    {
      head: { label: 'About Adhiloka', href: '/about/' },
      links: [
        { label: 'Our Business', href: '/about/our-business/' },
        { label: 'Our Purpose', href: '/about/our-purpose/' },
      ],
    },
    { head: { label: 'Our Leadership', href: '/about/our-leadership/' } },
    { head: { label: 'Our History', href: '/about/our-history/' } },
    { head: { label: 'Our Locations', href: '/about/our-locations/' } },
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
    { head: { label: 'News', href: '/media/news/' } },
    { head: { label: 'Media Resources', href: '/media/media-resources/' } },
    { head: { label: 'Social Media', href: '/media/social-media/' } },
  ],
};

export const MENU = NAV.map((item) => ({ ...item, columns: MEGA[item.href] ?? [] }));
