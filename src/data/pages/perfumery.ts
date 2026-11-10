import type { LinkCard, PageIntro, Passage, Quote } from './types';

/* Perfumery: isi dan susunan halaman mengikuti robertet.com/en/fragrances/
 * (Creative signature → Signature Creations, Beyond the scent → Beyond
 * Fragrance, Conscious naturals → Mindful Naturals), sedangkan bentuknya
 * memakai pola halaman lain situs ini (hub: banner + intro + kartu + grid +
 * penutup; subhalaman: intro + Passages + SiblingCards). Kalimatnya parafrase
 * alur ide Robertet, ditulis sendiri (keputusan vault 2026-11-10 "Perfumery
 * as bespoke consultation").
 *
 * Aturan: tanpa angka, tahun, jumlah perfumer, nama alat lab, klaim IFRA
 * in-house, klaim fraksinasi, atau daftar nama bahan. Siapa yang meracik
 * tidak disebut sampai data-form E1 dijawab. */

/* ── Hub ─────────────────────────────────────────────────────────────── */

export const PERFUMERY_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Inspired by Indonesian nature',
  metaTitle: 'Perfumery',
  lede: 'Between craft and science, our perfumery composes fragrances from the natural materials of Indonesia, for fine perfumery, personal care and the home, in close dialogue with every client.',
  description:
    'Adhiloka perfumery: fragrances composed from Indonesian natural materials for fine perfumery, personal care and home care, developed in close dialogue with each client.',
  image: 'hero-still-hall',
  caption: 'pink rose, close',
};

export const PERFUMERY_OPENING = [
  'Between craft and science, our perfumery explores the emotions a scent can awaken. We bring together creativity, a deep knowledge of natural materials and close attention to every client, so that each fragrance is shaped in dialogue with the people it is made for.',
  'Rooted in the materials of Indonesia, our work spans fine fragrance, personal and home care, and accords for fellow perfumers. Every creation draws on resins, woods, roots and spices from the islands, chosen with respect for the landscapes and the people behind them.',
];

/** Kartu tiga subhalaman; dipakai hub, SiblingCards dan tab beranda. */
export const PERFUMERY_CARDS: LinkCard[] = [
  {
    title: 'Signature Creations',
    body: 'Inspired by the richness of Indonesian nature, fragrances composed to suit the world of each brand and the markets it speaks to.',
    href: '/perfumery/signature-creations/',
    image: 'fragrance-petal',
  },
  {
    title: 'Beyond Fragrance',
    body: 'Between tradition and discovery, new ways to bring natural materials into modern perfumery.',
    href: '/perfumery/beyond-fragrance/',
    image: 'fragrance-resin',
  },
  {
    title: 'Mindful Naturals',
    body: 'Raw materials chosen with care, favouring responsible sources and the growers who look after them.',
    href: '/perfumery/mindful-naturals/',
    image: 'material-benzoin',
  },
];

/** Grid "What We Create" di hub; tiap butir menaut ke Signature Creations. */
export const PERFUMERY_FIELDS = [
  {
    title: 'Fine Fragrance',
    body: 'Fragrances with a voice of their own for perfume brands and independent houses, shaped around the story each brand wants to tell.',
  },
  {
    title: 'Personal & Home Care',
    body: 'Scents for soap, body care, candles and diffusers, created with the finished product in mind so they stay pleasant from first use to last.',
  },
  {
    title: 'Accords & Bases',
    body: 'Accords and bases built around natural materials, ready to bring natural character into the compositions of fellow perfumers.',
  },
];

/* ── Signature Creations (≈ Creative signature) ────────────── */

export const SIGNATURE_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Signature Creations',
  lede: 'Our perfumery lives where knowledge of materials meets imagination, and every fragrance grows from natural ingredients into a composition with a character of its own.',
  description:
    'Signature fragrance creations by Adhiloka: fine fragrance, personal and home care scents, and accords built on Indonesian natural materials, developed in close dialogue with each client.',
  image: 'fragrance-petal',
  caption: 'orange petals, close',
};

export const SIGNATURE_OPENING = [
  'Our perfumery lives where knowledge of materials meets imagination. Every fragrance starts from natural ingredients we know well and grows into a composition with a character of its own, whether it is meant for a perfume bottle, a bar of soap or a scented candle.',
  'That care runs through everything we do, from the choice of each material to the attention we give every client. For us, perfumery remains a craft, and every formula deserves the time it takes.',
];

export const SIGNATURE_QUOTE: Quote = {
  text: 'To *touch the senses* and *stir emotion* through the natural materials of Indonesia.',
  attribution: 'Adhiloka',
};

export const SIGNATURE_PASSAGES: Passage[] = [
  {
    id: 'craft',
    eyebrow: 'Our Craft',
    title: 'Perfumery as a craft, from the material up',
    body: 'Our creative work moves between fine perfumery and the scents of everyday life. Each project draws on what we know of natural materials, how they smell, how they combine and how they behave over time, and turns that knowledge into fragrances that feel at home in their product, whether a perfume, a body lotion or a candle.',
    points: [
      'Fine fragrance for brands and independent houses',
      'Scents for personal and home care',
      'Accords and bases for fellow perfumers',
    ],
    caption: 'hibiscus bloom, close',
    image: 'fragrance-bloom',
  },
  {
    id: 'approach',
    eyebrow: 'Our Approach',
    title: 'Close listening and a personal touch',
    body: 'Every project starts with a conversation. We take the time to understand the product, the people it is for and the feeling it should leave behind, and we stay close throughout development so that ideas and feedback travel directly. It is a way of working built on trust, one that lets a fragrance grow naturally from the brief rather than being forced into it.',
    points: [
      'Each client’s needs at the centre of the work',
      'Direct dialogue from first idea to final formula',
      'Relationships built on trust and understanding',
    ],
    cta: 'Contact Us',
    href: '/contact/?kind=bespoke',
    caption: 'pink rose, close',
    image: 'hero-still-hall',
  },
];

/* ── Beyond Fragrance (≈ Beyond the scent) ─────────────────── */

export const BEYOND_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Beyond Fragrance',
  lede: 'For us, innovation means finding new ways to let natural materials speak, from the place a plant is grown to the moment a fragrance comes to life in its product.',
  description:
    'Fragrance innovation at Adhiloka: understanding natural materials from the source, considering fragrance in the finished product, and exploring lesser-known Indonesian botanicals.',
  image: 'fragrance-resin',
  caption: 'dried rhizome slices',
};

export const BEYOND_OPENING = [
  'For us, innovation means finding new ways to let natural materials speak. It starts at the source, with how a plant is grown and processed, and continues at the perfumer’s bench, where familiar ingredients reveal new facets and lesser-known ones find their place.',
  'It is where craft, science and curiosity meet, and it shapes the fragrances we will create tomorrow.',
];

export const BEYOND_PASSAGES: Passage[] = [
  {
    id: 'material-study',
    eyebrow: 'Knowing the Material',
    title: 'No two harvests are quite alike',
    body: 'Soil, altitude, season and the way a material is distilled or extracted all leave their trace on its scent. Understanding these nuances lets us use each natural with confidence and bring out its best side in a formula, so that a fragrance stays faithful to its idea even as nature changes from one harvest to the next.',
    points: [
      'Origin and season as part of a material’s character',
      'Each natural used with its nuances in mind',
      'Fragrances that stay true from harvest to harvest',
    ],
    caption: 'whole nutmeg',
    image: 'material-nutmeg',
  },
  {
    id: 'application',
    eyebrow: 'In the Finished Product',
    title: 'A fragrance is complete once it lives in its product',
    body: 'Soap, wax, lotion and alcohol each change the way a scent unfolds. That is why a fragrance is considered in its final form and not on a blotter alone, with the base, the format and the way the product is used kept in view from the very beginning of the work.',
    points: [
      'Considered in its final form, not on a blotter alone',
      'Base and format in view from the start',
      'Built for the way the product is used',
    ],
    caption: 'fresh ginger rhizomes',
    image: 'material-ginger',
  },
  {
    id: 'naturals-research',
    eyebrow: 'Naturals Research',
    title: 'Exploring the aromatic wealth of the islands',
    body: 'Indonesia’s islands hold many more aromatic plants than perfumery uses today. Alongside the materials we already know well, we explore resins, roots, barks and spices that are still little known, learning how they smell, how they combine and the place each could take in a modern fragrance.',
    points: [
      'Lesser-known botanicals from across the islands',
      'New combinations with familiar materials',
      'A palette that keeps growing',
    ],
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
];

/* ── Mindful Naturals (≈ Conscious naturals) ───────────────── */

export const NATURALS_INTRO: PageIntro = {
  eyebrow: 'Perfumery',
  title: 'Mindful Naturals',
  lede: 'Our perfumery is led by natural materials, chosen with care and with respect for the people who grow them, so that each fragrance carries something of the landscape it comes from.',
  description:
    'The natural approach behind Adhiloka fragrances: Indonesian natural materials chosen with care for their character, their origin and the people who grow them.',
  image: 'material-benzoin',
  caption: 'benzoin resin tears',
};

export const NATURALS_OPENING = [
  'Our perfumery is led by natural materials. It draws on the aromatic wealth of Indonesia, the resins, roots, leaves, barks and spices of its forests, gardens and islands, to create fragrances with a purity and depth that are hard to imitate.',
  'We favour ingredients chosen with care and with respect for the people who grow them, so that each fragrance celebrates the plant world it comes from and carries something of its landscape.',
];

export const NATURALS_PASSAGES: Passage[] = [
  {
    id: 'essence',
    eyebrow: 'The Essence of Adhiloka',
    title: 'Natural materials at the heart of what we do',
    body: 'Our story begins with the natural materials of Indonesia, and our perfumery grows from the same roots. Our aim is simple: to capture the character of these materials and turn exceptional raw ingredients into fragrances that feel alive, drawing on what we know of nature to shape the fragrances of tomorrow.',
    points: [
      'Rooted in the natural materials of Indonesia',
      'Raw ingredients turned into living fragrances',
      'Knowledge of nature shaping what comes next',
    ],
    caption: 'green leaves with dew',
    image: 'material-patchouli',
  },
  {
    id: 'inspired-by-nature',
    eyebrow: 'Nature as Inspiration',
    title: 'Knowing the materials opens the door to creativity',
    body: 'Natural materials are never uniform, and that is their strength. Each one brings a texture and depth that are hard to imitate, and knowing them closely gives a perfumer more freedom, not less. It allows a fragrance to step away from convention and tell a story, with a sense of where it was born.',
    points: [
      'A rich and varied palette to compose with',
      'Freedom to step away from convention',
      'Fragrances with a story and a sense of place',
    ],
    caption: 'cinnamon bark',
    image: 'hero-benzoin-tears',
  },
  {
    id: 'sourcing',
    eyebrow: 'Responsible Sourcing',
    title: 'Care for the places our materials come from',
    body: 'Natural perfumery depends on healthy landscapes and on the growers who care for them. By paying attention to where and how our materials are produced, we want each fragrance to carry a story of respect, for the land and for the people behind it, and to help keep both thriving for the future.',
    points: [
      'Attention to where and how materials are produced',
      'Respect for growers and their communities',
      'Landscapes kept healthy for the future',
    ],
    cta: 'Responsible Sourcing',
    href: '/sustainability/responsible-sourcing/',
    caption: 'kemenyan agroforest canopy',
    image: 'agroforest-canopy',
  },
];
