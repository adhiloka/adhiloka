import type { ImageKey } from './images';

export type Family = 'Resin' | 'Root' | 'Wood' | 'Leaf' | 'Spice' | 'Flower' | 'Citrus';

/** Satu baris tabel grade di halaman bahan. */
export type Grade = { name: string; form: string; marker: string; use: string };
/** Satu baris tabel spesifikasi: label parameter nyata, metode dan rentang dari CoA. */
export type SpecRow = { parameter: string; method: string; range: string };
/** Ringkasan pemesanan di halaman bahan. */
export type Ordering = { packaging: string; moq: string; leadTime: string; incoterms: string };

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
  /** Tiga nota aroma, dipisah " · ". */
  notes?: string;
  grades: Grade[];
  spec: SpecRow[];
  /** Dokumen yang menyertai lot dan sampel. */
  documents: string[];
  ordering: Ordering;
};

/* Enam bahan inti (keputusan pemilik, 2 Okt 2026): benzoin dan nilam, plus
 * kayu manis Kerinci, akar wangi Jawa, cengkeh, pala & fuli. Nama, nama
 * botani dan keluarga sudah pasti; sisanya lorem sampai formulir data
 * (Documents/Adhiloka/naskah/formulir-data.md) terisi. Kode di komentar
 * DATA menunjuk pertanyaan formulirnya. Tiap bahan punya halaman sendiri di
 * /ingredients/catalog/<slug>/. */
export const MATERIALS: Material[] = [
  {
    // DATA: B2 (bentuk yang dijual), K1 (spesifikasi), D2 (dokumen), D3–D6 (pemesanan)
    slug: 'benzoin-sumatra',
    name: 'Benzoin Sumatra',
    shortName: 'Impedit',
    notes: 'Expedita · Sapiente · Omnis',
    latin: 'Styrax benzoin / S. paralleloneurum',
    family: 'Resin',
    origin: 'Nesciunt, Minim Facilis',
    method: 'Esse-cillum natus; deleniti, mollitia',
    harvest: 'Amet – Consequat',
    uses: 'Enim occaecati, similique, dolorem',
    shot: 'sorted benzoin tears',
    image: 'material-benzoin',
    note: 'Aut pariatur occaecat quo optio qui aut et eos tempor ea. Ullamco natus est nemo ut quisquam totam id totam aliqua eveniet hic minima cumque irure eos est eligendi animi. Ad ullam ex sint eius atque inventore libero cupiditate, vel sunt ex corrupti eum voluptas odit dicta aliqua laboris fugiat quam est non.',
    grades: [
      { name: 'Delectus eaque', form: 'Libero non incidunt', marker: 'Aut beatae et neque dignissimos', use: 'Modi molestias, voluptatem dolor' },
      { name: 'Ducimus error', form: 'Consequat at voluptate unde', marker: 'Hic maxime vel magnam', use: 'Quis quibusdam' },
    ],
    spec: [
      { parameter: 'Appearance', method: 'Aliqua quo cupidatat animi', range: 'Nesciunt ad cupidatat beatae' },
      { parameter: 'Colour', method: 'Mollit eum voluptate magna', range: 'Corporis ea molestiae dolore' },
      { parameter: 'Odour', method: 'Labore vel molestiae quasi', range: 'Possimus at similique dolore' },
      { parameter: 'Solubility', method: 'Maxime quo occaecati ipsum', range: 'Delectus ad excepturi tempor' },
      { parameter: 'Key marker', method: 'Maxime nam accusamus illum', range: 'Expedita in excepturi libero' },
      { parameter: 'Reference standard', method: 'Libero rem accusamus velit', range: 'Corrupti at explicabo labore' },
    ],
    documents: ['Dignissimos in corporis', 'Veniam nisi culpa', 'Ipsa perferendis', 'Quisquam excepturi', 'Rerum dignissimos', 'Accusantium ea veniam'],
    ordering: {
      packaging: 'Atque animi quasi ab inventore placeat',
      moq: 'Sit quas vel culpa',
      leadTime: 'Ex aut velit animi totam',
      incoterms: 'Sint ab neque, iste anim',
    },
  },
  {
    // DATA: B2 (bentuk yang dijual), K2 (spesifikasi), D2 (dokumen), D3–D6 (pemesanan)
    slug: 'patchouli',
    name: 'Patchouli',
    notes: 'Cillum · Porro · Nostrum',
    latin: 'Pogostemon cablin',
    family: 'Leaf',
    origin: 'Sint Molestiae, Iste',
    method: 'Quasi voluptatibus; illo-nemo repellat',
    harvest: 'Enim nulla, culpa iste',
    uses: 'Anim cupidatat, asperiores, earum illum',
    shot: 'drying patchouli leaf',
    image: 'material-patchouli',
    note: 'Quam consequat illo hic rerum inventore vel aut mollitia. Ad commodi qui cum at ad iusto eligendi, cillum et cupidatat libero duis nemo, qui error duis est consequatur amet cum sit in saepe, illo-quae magni qui aute consequuntur.',
    grades: [
      { name: 'Pariatur saepe', form: 'Aliqua nam occaecat', marker: 'Qui tempor do culpa repudiandae', use: 'Sint voluptate, architecto dolor' },
      { name: 'Officia neque', form: 'Inventore ab inventore amet', marker: 'Hic beatae hic veniam', use: 'Aute molestiae' },
    ],
    spec: [
      { parameter: 'Appearance', method: 'Fugiat non accusamus minim', range: 'Corrupti ad explicabo veniam' },
      { parameter: 'Colour', method: 'Magnam cum voluptate iusto', range: 'Eligendi ab explicabo labore' },
      { parameter: 'Odour', method: 'Tempor eos inventore animi', range: 'Proident at molestias itaque' },
      { parameter: 'Solubility', method: 'Veniam sed consequat vitae', range: 'Deleniti do cupidatat maxime' },
      { parameter: 'Key marker', method: 'Dolore quo consequat vitae', range: 'Incidunt ab cupidatat facere' },
      { parameter: 'Reference standard', method: 'Beatae non excepteur ipsum', range: 'Corporis ex inventore itaque' },
    ],
    documents: ['Accusantium do possimus', 'Fugiat quas nulla', 'Nemo consectetur', 'Corporis inventore', 'Vitae repellendus', 'Repellendus ad labore'],
    ordering: {
      packaging: 'Alias neque irure in similique facilis',
      moq: 'Cum eius nam earum',
      leadTime: 'At aut sequi nulla animi',
      incoterms: 'Sunt do sequi, iure unde',
    },
  },
  {
    // DATA: B2 (bentuk yang dijual), K3 (spesifikasi), D2 (dokumen), D3–D6 (pemesanan)
    slug: 'cinnamon-kerinci',
    name: 'Cinnamon Kerinci',
    notes: 'Iure · Error · Sequi',
    latin: 'Cinnamomum burmannii',
    family: 'Spice',
    origin: 'Tenetur, Nulla',
    method: 'Modi voluptatibus',
    harvest: 'Earum – Cillum',
    uses: 'Ullamco, iure consequat, voluptates',
    shot: 'rolled cinnamon bark',
    image: 'hero-benzoin-tears',
    note: 'Quasi ad deserunt aliqua animi 123 itaque, dicta aut enim incidunt minima eos est nam dolores aute accusamus. Anim id exercitationem odit in enim expedita officia corrupti.',
    grades: [
      { name: 'Voluptas culpa', form: 'Facere rem corporis', marker: 'Est aliqua at magna consectetur', use: 'Quas cupidatat, temporibus error' },
      { name: 'Aliquid illum', form: 'Cupidatat ea excepteur quia', marker: 'Rem itaque aut tempor', use: 'Esse molestiae' },
    ],
    spec: [
      { parameter: 'Appearance', method: 'Mollit hic excepteur rerum', range: 'Mollitia ex occaecati soluta' },
      { parameter: 'Colour', method: 'Labore quo occaecati fugit', range: 'Quisquam at molestias minima' },
      { parameter: 'Odour', method: 'Soluta quo molestiae alias', range: 'Repellat id veritatis dolore' },
      { parameter: 'Solubility', method: 'Soluta sit voluptate natus', range: 'Corrupti in molestias fugiat' },
      { parameter: 'Key marker', method: 'Cumque vel veritatis dolor', range: 'Quisquam ea cupidatat labore' },
      { parameter: 'Reference standard', method: 'Veniam sed assumenda eaque', range: 'Possimus do excepturi fugiat' },
    ],
    documents: ['Perferendis in occaecat', 'Labore modi fugit', 'Modi praesentium', 'Quisquam doloribus', 'Iusto dignissimos', 'Repellendus in fugiat'],
    ordering: {
      packaging: 'Dolor error earum ea inventore nostrum',
      moq: 'Eum esse hic quasi',
      leadTime: 'Et rem sequi magni ipsum',
      incoterms: 'Ipsa et neque, quam vero',
    },
  },
  {
    // DATA: B2 (bentuk yang dijual), K4 (spesifikasi), D2 (dokumen), D3–D6 (pemesanan)
    slug: 'vetiver-java',
    name: 'Vetiver Java',
    notes: 'Odio · Iusto · Ipsam',
    latin: 'Chrysopogon zizanioides',
    family: 'Root',
    origin: 'Irure, Nisi Duis',
    method: 'Rerum consequuntur ea soluta porro',
    harvest: 'Facere – Sapiente',
    uses: 'Enim excepteur, molestiae sequi',
    shot: 'washed vetiver roots',
    image: 'material-ginger',
    note: 'Esse eveniet in dolorem eum atque eius qui tenetur repellendus. Nobis cum quo et officiis minima, cillum fugit aut explicabo quos, optio ut autem eum adipisci odio sit neque quia.',
    grades: [
      { name: 'Occaecat ullam', form: 'Magnam cum suscipit', marker: 'Non labore ex ipsam perferendis', use: 'Quos occaecati, incididunt dolor' },
      { name: 'Quaerat animi', form: 'Voluptate ab similique nisi', marker: 'Est magnam est minima', use: 'Modi inventore' },
    ],
    spec: [
      { parameter: 'Appearance', method: 'Soluta est molestias vitae', range: 'Deserunt id occaecati beatae' },
      { parameter: 'Colour', method: 'Cillum quo excepturi minim', range: 'Incidunt ad veritatis soluta' },
      { parameter: 'Odour', method: 'Magnam est accusamus sequi', range: 'Corrupti ut similique dolore' },
      { parameter: 'Solubility', method: 'Labore rem molestiae porro', range: 'Incidunt ab molestias tempor' },
      { parameter: 'Key marker', method: 'Libero eos voluptate earum', range: 'Corporis ex occaecati veniam' },
      { parameter: 'Reference standard', method: 'Soluta eos cupidatat sequi', range: 'Incidunt ut doloribus libero' },
    ],
    documents: ['Accusantium do incidunt', 'Fugiat unde nihil', 'Anim consectetur', 'Expedita excepteur', 'Autem consequatur', 'Dignissimos ad fugiat'],
    ordering: {
      packaging: 'Nihil fugit natus et excepteur laboris',
      moq: 'Rem iste quo vitae',
      leadTime: 'At non ullam dolor neque',
      incoterms: 'Quam ab neque, aute eius',
    },
  },
  {
    // DATA: B2 (bentuk yang dijual), K5 (spesifikasi), D2 (dokumen), D3–D6 (pemesanan)
    slug: 'clove',
    name: 'Clove',
    notes: 'Duis · Atque · Sequi',
    latin: 'Syzygium aromaticum',
    family: 'Spice',
    origin: 'Error Magnam',
    method: 'Porro voluptatibus ut animi quis',
    harvest: 'Vero – Impedit',
    uses: 'Elit voluptate, debitis, eius amet',
    shot: 'drying clove buds',
    image: 'material-nutmeg',
    note: 'Commodi quo nostrum amet sint nam, unde est totam laborum alias soluta odit molestias. Commodi odio aut aperiam natus vel magna tempore.',
    grades: [
      { name: 'Nesciunt rerum', form: 'Itaque cum deleniti', marker: 'Sit maxime ab natus perferendis', use: 'Esse excepteur, incididunt animi' },
      { name: 'Ullamco minus', form: 'Occaecati ex accusamus eius', marker: 'Quo magnam eos maxime', use: 'Nisi assumenda' },
    ],
    spec: [
      { parameter: 'Appearance', method: 'Mollit aut inventore iusto', range: 'Officiis et veritatis aliqua' },
      { parameter: 'Colour', method: 'Cumque cum molestiae lorem', range: 'Suscipit do doloribus dolore' },
      { parameter: 'Odour', method: 'Magnam cum quibusdam culpa', range: 'Proident et occaecati cillum' },
      { parameter: 'Solubility', method: 'Fugiat vel doloribus porro', range: 'Proident in excepteur cumque' },
      { parameter: 'Key marker', method: 'Magnam sed assumenda magna', range: 'Suscipit do doloribus veniam' },
      { parameter: 'Reference standard', method: 'Soluta eum voluptate omnis', range: 'Repellat ea quibusdam maxime' },
    ],
    documents: ['Perferendis in expedita', 'Cumque modi rerum', 'Eius dignissimos', 'Possimus doloribus', 'Ipsum consectetur', 'Repudiandae ut tempor'],
    ordering: {
      packaging: 'Irure natus neque et excepteur facilis',
      moq: 'Aut illo eum ullam',
      leadTime: 'In eos iusto neque minus',
      incoterms: 'Vero do optio, quod duis',
    },
  },
  {
    // DATA: B2 (bentuk yang dijual), K6 (spesifikasi), D2 (dokumen), D3–D6 (pemesanan)
    slug: 'nutmeg-mace',
    name: 'Nutmeg & Mace',
    shortName: 'Maxime',
    notes: 'Nihil · Odio · Earum',
    latin: 'Myristica fragrans',
    family: 'Spice',
    origin: 'Ipsum Facilis, Cillum',
    method: 'Magni exercitation; ad1 commodo',
    harvest: 'Aut aliquip, eos cum deserunt',
    uses: 'Sunt inventore, debitis',
    shot: 'nutmeg and mace, split shell',
    image: 'material-nutmeg',
    note: 'Autem fugiat tempore eos explicabo. Do aliqua vel labore nam aut elit cupiditate; est odit hic ex tempora, fugiat sit atque eum blanditiis.',
    grades: [
      { name: 'Quisquam minus', form: 'Beatae rem corrupti', marker: 'Rem cumque ad minim repudiandae', use: 'Odio assumenda, recusandae illum' },
      { name: 'Aperiam dolor', form: 'Explicabo ea occaecati illo', marker: 'Aut maxime aut itaque', use: 'Anim voluptate' },
    ],
    spec: [
      { parameter: 'Appearance', method: 'Cumque est occaecati dicta', range: 'Delectus do voluptate cillum' },
      { parameter: 'Colour', method: 'Maxime vel molestiae lorem', range: 'Occaecat id occaecati maxime' },
      { parameter: 'Odour', method: 'Cillum hic consequat iusto', range: 'Possimus ad explicabo minima' },
      { parameter: 'Solubility', method: 'Mollit nam consequat minim', range: 'Pariatur ex explicabo labore' },
      { parameter: 'Key marker', method: 'Minima quo excepturi ipsum', range: 'Pariatur et assumenda labore' },
      { parameter: 'Reference standard', method: 'Minima non similique error', range: 'Possimus id explicabo minima' },
    ],
    documents: ['Accusantium id incidunt', 'Mollit ipsa nobis', 'Quae repudiandae', 'Eligendi consequat', 'Porro accusantium', 'Repellendus et veniam'],
    ordering: {
      packaging: 'Totam minus saepe in molestiae ullamco',
      moq: 'Nam nisi rem ullam',
      leadTime: 'Et eum atque nobis magni',
      incoterms: 'Odio id rerum, vero duis',
    },
  },
];

export const materialHref = (slug: string) => `/ingredients/catalog/${slug}/`;

export const FAMILY_FILTERS: { value: 'All' | Family; label: string }[] = [
  { value: 'All', label: 'All' },
  { value: 'Resin', label: 'Resins' },
  { value: 'Root', label: 'Roots' },
  { value: 'Leaf', label: 'Leaf' },
  { value: 'Spice', label: 'Spices' },
];

/** Empat material yang tampil di blok "Our specialty" beranda. */
export const FEATURED_SLUGS = ['benzoin-sumatra', 'patchouli', 'cinnamon-kerinci', 'vetiver-java'];

export const featuredMaterials = (): Material[] =>
  FEATURED_SLUGS.map((slug) => MATERIALS.find((m) => m.slug === slug)).filter(
    (m): m is Material => Boolean(m),
  );
