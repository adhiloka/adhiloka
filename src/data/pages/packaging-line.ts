import type { PageIntro } from './types';

/* Naskah lini Plastics & Packaging (situs grup, pemilik 26 Nov 2026).
 * Susunan meniru halaman portofolio distributor polimer dan pemasok kemasan
 * (Formerra, Chandra Asri, Berlin Packaging; market-research/references/
 * Group site/). Tidak menyebut produksi sendiri atau trading (pemilik). */

export const PACKAGING_INTRO: PageIntro = {
  title: 'Plastics & Packaging',
  lede: '',
  description:
    'Plastic resins, films, bags, bottles, jars, food packaging and glass for fragrance, supplied from Indonesia.',
  image: 'line-packaging',
  caption: 'clear plastic pellets held in an open hand',
};

export const PACKAGING_OPENING = {
  title: 'From Resin to Finished Pack',
  body: 'We supply plastics at every stage, from resin pellets for converters to the films, bottles and containers that reach the shelf. For fragrance and personal care, we add glass bottles, sprayers and vials.',
};

export const PACKAGING_GRADES = {
  heading: 'The Right Grade for the Process',
  body: 'Film, injection, blow moulding and extrusion each ask for a different melt flow and density. We match the grade to your machine and your product, and keep to it from one order to the next.',
};

export const PACKAGING_STEPS = [
  { n: '01', title: 'Requirement', body: 'Tell us the material, grade or pack, and the volume. We propose grades or designs that fit your line.' },
  { n: '02', title: 'Samples', body: 'Resin samples or pack samples are sent for trial. Printed packs start from an approved artwork proof.' },
  { n: '03', title: 'Order & Delivery', body: 'Resins ship in 25 kg bags or jumbo bags, packs in cartons. We deliver within Indonesia and ship by container for export.' },
];

export const PACKAGING_PRODUCTS_INTRO: PageIntro = {
  title: 'Plastics & Packaging Products',
  metaTitle: 'Plastics & Packaging Products',
  lede: '',
  description: 'Plastic resins, films and pouches, bottles and jars, food packaging and glass for fragrance from Adhiloka.',
  image: 'pk-products',
  caption: 'stacked plastic containers',
};
