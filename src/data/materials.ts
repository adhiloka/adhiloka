import type { ImageKey } from './images';

export type Family = 'Resin' | 'Root' | 'Wood' | 'Leaf' | 'Spice' | 'Flower' | 'Citrus';

export type Material = {
  slug: string;
  name: string;
  latin: string;
  family: Family;
  origin: string;
  method: string;
  harvest: string;
  uses: string;
  shot: string;
  note: string;
  image?: ImageKey;
  /** Nama pendek untuk kartu unggulan di beranda. */
  shortName?: string;
  /** Tiga nota aroma, muncul saat kartu unggulan di-hover. */
  notes?: string;
};

export const MATERIALS: Material[] = [
  {
    slug: 'benzoin-sumatra',
    name: 'Benzoin Sumatra',
    shortName: 'Benzoin',
    notes: 'Balsamic · Vanillic · Sweet',
    latin: 'Styrax benzoin',
    family: 'Resin',
    origin: 'Nesciunt, Minim Facilis',
    method: 'Esse-cillum natus; deleniti, mollitia',
    harvest: 'Amet – Consequat',
    uses: 'Enim occaecati, similique, dolorem',
    shot: 'sorted benzoin tears',
    image: 'material-benzoin',
    note: 'Aut pariatur occaecat quo optio qui aut et eos tempor ea. Ullamco natus est nemo ut quisquam totam id totam aliqua eveniet hic minima cumque irure eos est eligendi animi. Ad ullam ex sint eius atque inventore libero cupiditate, vel sunt ex corrupti eum voluptas odit dicta aliqua laboris fugiat quam est non.',
  },
  {
    slug: 'patchouli',
    name: 'Patchouli',
    notes: 'Earthy · Woody · Camphor',
    latin: 'Pogostemon cablin',
    family: 'Leaf',
    origin: 'Sint Molestiae, Iste',
    method: 'Quasi voluptatibus; illo-nemo repellat',
    harvest: 'Enim nulla, culpa iste',
    uses: 'Anim cupidatat, asperiores, earum illum',
    shot: 'drying patchouli leaf',
    image: 'material-patchouli',
    note: 'Quam consequat illo hic rerum inventore vel aut mollitia. Ad commodi qui cum at ad iusto eligendi, cillum et cupidatat libero duis nemo, qui error duis est consequatur amet cum sit in saepe, illo-quae magni qui aute consequuntur.',
  },
  {
    slug: 'vetiver-java',
    name: 'Vetiver Java',
    latin: 'Chrysopogon zizanioides',
    family: 'Root',
    origin: 'Irure, Nisi Duis',
    method: 'Rerum consequuntur ea soluta porro',
    harvest: 'Facere – Sapiente',
    uses: 'Enim excepteur, molestiae sequi',
    shot: 'washed vetiver roots',
    image: 'material-ginger',
    note: 'Esse eveniet in dolorem eum atque eius qui tenetur repellendus. Nobis cum quo et officiis minima, cillum fugit aut explicabo quos, optio ut autem eum adipisci odio sit neque quia.',
  },
  {
    slug: 'clove-leaf',
    name: 'Clove Leaf',
    latin: 'Syzygium aromaticum',
    family: 'Leaf',
    origin: 'Numquam Corrupti',
    method: 'Illum exercitation',
    harvest: 'Iure fugit',
    uses: 'Cupiditate, ducimus ullamco',
    shot: 'clove leaf harvest',
    image: 'material-patchouli',
    note: 'Cum voluptate id quo cupiditate mollitia ipsum aut sit nemo tempore voluptate. Consequat ea in at-eiusmod ut minim praesentium, ab sit officiis quaerat et recusandae anim illo.',
  },
  {
    slug: 'clove-bud',
    name: 'Clove Bud',
    latin: 'Syzygium aromaticum',
    family: 'Spice',
    origin: 'Error Magnam',
    method: 'Porro voluptatibus ut animi quis',
    harvest: 'Vero – Impedit',
    uses: 'Elit voluptate, debitis, eius amet',
    shot: 'drying clove buds',
    image: 'material-nutmeg',
    note: 'Commodi quo nostrum amet sint nam, unde est totam laborum alias soluta odit molestias. Commodi odio aut aperiam natus vel magna tempore.',
  },
  {
    slug: 'nutmeg-mace',
    name: 'Nutmeg & Mace',
    shortName: 'Nutmeg',
    notes: 'Spicy · Warm · Woody',
    latin: 'Myristica fragrans',
    family: 'Spice',
    origin: 'Ipsum Facilis, Cillum',
    method: 'Magni exercitation; ad1 commodo',
    harvest: 'Aut aliquip, eos cum deserunt',
    uses: 'Sunt inventore, debitis',
    shot: 'nutmeg and mace, split shell',
    image: 'material-nutmeg',
    note: 'Autem fugiat tempore eos explicabo. Do aliqua vel labore nam aut elit cupiditate; est odit hic ex tempora, fugiat sit atque eum blanditiis.',
  },
  {
    slug: 'cassia-kerinci',
    name: 'Cassia Kerinci',
    latin: 'Cinnamomum burmannii',
    family: 'Spice',
    origin: 'Tenetur, Nulla',
    method: 'Modi voluptatibus',
    harvest: 'Earum – Cillum',
    uses: 'Ullamco, iure consequat, voluptates',
    shot: 'rolled cassia bark',
    image: 'hero-benzoin-tears',
    note: 'Quasi ad deserunt aliqua animi 123 itaque, dicta aut enim incidunt minima eos est nam dolores aute accusamus. Anim id exercitationem odit in enim expedita officia corrupti.',
  },
];

export const FAMILY_FILTERS: { value: 'All' | Family; label: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'Resin', label: 'Resins' },
  { value: 'Root', label: 'Roots' },
  { value: 'Leaf', label: 'Leaf' },
  { value: 'Spice', label: 'Spices' },
];

/** Empat material yang tampil di blok "Our specialty" beranda. */
export const FEATURED_SLUGS = ['benzoin-sumatra', 'patchouli', 'nutmeg-mace', 'vetiver-java'];

export const featuredMaterials = (): Material[] =>
  FEATURED_SLUGS.map((slug) => MATERIALS.find((m) => m.slug === slug)).filter(
    (m): m is Material => Boolean(m),
  );
