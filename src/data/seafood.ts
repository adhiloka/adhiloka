import type { ImageKey } from './images';
import type { LineCategory, LineProduct } from './line-products';

/* Produk lini Seafood (situs grup, pemilik 26 Nov 2026). Pemilik menyebut:
 * ikan beku, udang & krustasea, cumi/gurita/kerang, kering & olahan, hisit
 * (sirip hiu), perut ikan (fish maw), teripang.
 *
 * Bentuk, ukuran, dan kemasan = nilai tipikal perdagangan ekspor, dari
 * rujukan di market-research/references/Group site/ (Roda International,
 * Toba Surimi, TradeIndia, Selina Wamucii, EIC India fish maw order 2002).
 * Spesifikasi pesanan tetap disepakati per penawaran (catatan di halaman).
 * Teripang, fish maw, dan sirip hiu ditulis tanpa nama spesies: sebagian
 * spesiesnya CITES Appendix II (keputusan 2026-11-26). Tanpa kode produk:
 * Product code register hanya untuk naturals. */

export const SEAFOOD_CATEGORIES: LineCategory[] = [
  { key: 'fish', label: 'Frozen Fish', body: 'Tuna, snapper and grouper, whole or cut into loins, steaks and fillets. Each fish is graded by size and frozen soon after landing to keep its colour and texture.' },
  { key: 'crustaceans', label: 'Shrimp & Crab', body: 'Vannamei and black tiger shrimp in every common cut, and blue swimming crab as pasteurised meat. We grade by count and pack to the glaze and net weight your market expects.' },
  { key: 'cephalopods', label: 'Squid, Octopus & Shellfish', body: 'Squid, octopus and clams, whole, cleaned or cut. Cephalopods are sorted by weight and frozen in blocks or individually.' },
  { key: 'dried', label: 'Dried Marine Products', body: 'Sea cucumber, fish maw, shark fin and dried anchovy, sorted by size and grade. Dried products are kept cool and dry and packed in lined cartons.' },
];

const P = (p: Omit<LineProduct, 'line'>): LineProduct => ({ ...p, line: 'seafood' });

export const SEAFOOD_PRODUCTS: LineProduct[] = [
  P({
    slug: 'yellowfin-tuna',
    name: 'Yellowfin Tuna',
    latin: 'Thunnus albacares',
    category: 'fish',
    image: 'sf-tuna' as ImageKey,
    alt: 'Raw tuna loin cut into thick steaks',
    note: 'Lean, deep red meat for sashimi, steaks and grilling. We cut loins, saku and steaks to order.',
    spec: [
      ['Forms', 'Loin · Saku · Steak · Cube'],
      ['Sizes', 'Loin 1–3 kg/pc and 3 kg up · Saku 200–400 g · Steak 4, 6, 8 oz'],
      ['Treatment', 'CO-treated or untreated'],
      ['Freezing', 'IQF, individually vacuum packed (IVP)'],
    ],
    handling: [
      ['Packing', 'IVP, 10 kg master carton'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0304.87',
  }),
  P({
    slug: 'red-snapper',
    name: 'Red Snapper',
    latin: 'Lutjanus spp.',
    category: 'fish',
    image: 'sf-snapper' as ImageKey,
    alt: 'Whole red snapper on crushed ice',
    note: 'Firm white flesh with a mild, sweet taste. Supplied whole or as skin-on fillets.',
    spec: [
      ['Forms', 'Whole round · Gutted & scaled · Fillet skin-on'],
      ['Sizes', '300–500 g · 500–800 g · 800–1,000 g · 1 kg up'],
      ['Freezing', 'IQF or block frozen'],
      ['Glazing', '5–10 %, as specified'],
    ],
    handling: [
      ['Packing', '10 kg master carton, inner bags'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0303.89 · 0304.89',
  }),
  P({
    slug: 'grouper',
    name: 'Grouper',
    latin: 'Epinephelus spp.',
    category: 'fish',
    image: 'sf-grouper' as ImageKey,
    alt: 'Whole grouper on ice',
    note: 'Thick, moist white flesh valued in restaurant kitchens. Supplied whole or filleted.',
    spec: [
      ['Forms', 'Whole round · Gutted & scaled · Fillet skin-on'],
      ['Sizes', '500–800 g · 800–1,200 g · 1.2 kg up'],
      ['Freezing', 'IQF or block frozen'],
      ['Glazing', '5–10 %, as specified'],
    ],
    handling: [
      ['Packing', '10 kg master carton, inner bags'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0303.89 · 0304.89',
  }),
  P({
    slug: 'vannamei-shrimp',
    name: 'Vannamei Shrimp',
    latin: 'Litopenaeus vannamei',
    category: 'crustaceans',
    image: 'sf-vannamei' as ImageKey,
    alt: 'Raw whiteleg shrimp, close',
    note: 'The everyday shrimp of kitchens worldwide, sweet and firm. Offered in every common cut, raw or cooked.',
    spec: [
      ['Forms', 'HOSO · HLSO · PD · PDTO · PUD · Cooked'],
      ['Sizes', 'HOSO 20/30–100/120 pcs/kg · HLSO 16/20–91/110 pcs/lb · PD 26/30–100/200 pcs/lb'],
      ['Freezing', 'Block frozen or IQF'],
      ['Glazing', '0–20 %, net weight stated'],
    ],
    handling: [
      ['Packing', '6 × 2 kg or 10 × 1 kg per master carton'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0306.17',
  }),
  P({
    slug: 'black-tiger-shrimp',
    name: 'Black Tiger Shrimp',
    latin: 'Penaeus monodon',
    category: 'crustaceans',
    image: 'sf-tiger' as ImageKey,
    alt: 'Large tiger prawns on a dark board',
    note: 'Large, striped shrimp with a rich flavour, popular for grilling and sushi.',
    spec: [
      ['Forms', 'HOSO · HLSO · PD · PDTO'],
      ['Sizes', 'HOSO 4/6–31/40 pcs/kg · HLSO U/8–31/40 pcs/lb'],
      ['Freezing', 'Block frozen or IQF'],
      ['Glazing', '0–20 %, net weight stated'],
    ],
    handling: [
      ['Packing', '6 × 2 kg or 10 × 1 kg per master carton'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0306.17',
  }),
  P({
    slug: 'blue-swimming-crab',
    name: 'Blue Swimming Crab',
    latin: 'Portunus pelagicus',
    category: 'crustaceans',
    image: 'sf-crab' as ImageKey,
    alt: 'Cooked crab meat in a bowl',
    note: 'Sweet white crab meat, hand picked and pasteurised. Graded from jumbo lump to claw.',
    spec: [
      ['Forms', 'Pasteurised crab meat · Whole cooked frozen'],
      ['Grades', 'Jumbo Lump · Lump · Special · Claw'],
      ['Process', 'Hand picked, pasteurised, chilled'],
    ],
    handling: [
      ['Packing', '1 lb can, tub or pouch, 12 per master carton'],
      ['Storage', 'Pasteurised meat 0–4 °C · Frozen −18 °C'],
      ['Shelf life', 'Pasteurised 18 months chilled'],
    ],
    hs: '1605.10 · 0306.14',
  }),
  P({
    slug: 'squid',
    name: 'Squid',
    latin: 'Uroteuthis spp.',
    category: 'cephalopods',
    image: 'sf-squid' as ImageKey,
    alt: 'Fresh whole squid on a board',
    note: 'Tender squid, whole or cleaned into tubes and rings for frying and grilling.',
    spec: [
      ['Forms', 'Whole round · Whole cleaned · Tube · Ring'],
      ['Sizes', 'U/5 · 5/10 · 10/20 · 20/40 pcs/kg · Tube 10–20 cm'],
      ['Freezing', 'Block, semi-block or IQF'],
      ['Glazing', '5–20 %, as specified'],
    ],
    handling: [
      ['Packing', '10 kg or 12 kg master carton'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0307.43',
  }),
  P({
    slug: 'octopus',
    name: 'Octopus',
    latin: 'Octopus cyanea · Octopus vulgaris',
    category: 'cephalopods',
    image: 'sf-octopus' as ImageKey,
    alt: 'Whole octopus on a plate',
    note: 'Whole cleaned octopus in flower shape, or cooked and cut, ready for the kitchen.',
    spec: [
      ['Forms', 'Whole cleaned (flower) · Cooked cut · Baby octopus'],
      ['Sizes', '300–500 g · 500–1,000 g · 1–2 kg · 2–3 kg · 3 kg up'],
      ['Freezing', 'IQF or block frozen'],
      ['Glazing', '10 %, or 100 % net weight'],
    ],
    handling: [
      ['Packing', '1 kg × 10 or 12 bags per master carton'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0307.52',
  }),
  P({
    slug: 'clams',
    name: 'Clams',
    latin: 'Paphia undulata',
    category: 'cephalopods',
    image: 'sf-clams' as ImageKey,
    alt: 'Fresh clams in their shells',
    note: 'Short-necked clams, whole in shell or as cooked meat, for pasta, soups and stir-fries.',
    spec: [
      ['Forms', 'Whole in shell, cooked · Clam meat, cooked'],
      ['Sizes', 'Whole 40/60 · 60/80 · 80/100 pcs/kg · Meat 300/500–1,000/1,200 pcs/kg'],
      ['Freezing', 'IQF'],
      ['Glazing', '10–20 %, as specified'],
    ],
    handling: [
      ['Packing', '1 kg × 10 bags per master carton'],
      ['Storage', '−18 °C or below'],
      ['Shelf life', '24 months frozen'],
    ],
    hs: '0307.72',
  }),
  P({
    slug: 'sea-cucumber',
    name: 'Sea Cucumber',
    category: 'dried',
    image: 'sf-sea-cucumber' as ImageKey,
    alt: 'Dried sea cucumbers laid out in rows',
    note: 'Sun- and oven-dried sea cucumber, sorted by species, size and finish for the Asian market.',
    spec: [
      ['Forms', 'Dried whole · Dried gutted'],
      ['Sizes', '5–10 · 10–20 · 20–40 · 40–80 pcs/kg'],
      ['Moisture', '≤ 12 %'],
      ['Species', 'Agreed per order'],
    ],
    handling: [
      ['Packing', '10 kg or 20 kg carton, lined'],
      ['Storage', 'Cool and dry, away from light'],
      ['Shelf life', '24 months'],
    ],
    hs: '0308.12',
  }),
  P({
    slug: 'fish-maw',
    name: 'Fish Maw',
    category: 'dried',
    image: 'sf-fish-maw' as ImageKey,
    alt: 'Dried fish maw, close',
    note: 'Dried swim bladder, prized for soups and braises. Sorted by size, thickness and colour.',
    spec: [
      ['Forms', 'Dried whole · Butterfly cut'],
      ['Grades', 'By size and colour, pieces per kg'],
      ['Moisture', '≤ 10 %'],
      ['Species', 'Agreed per order'],
    ],
    handling: [
      ['Packing', '10 kg carton, lined, or 500 g–1 kg bags'],
      ['Storage', 'Cool and dry, away from light'],
      ['Shelf life', '24 months'],
    ],
    hs: '0305.72',
  }),
  P({
    slug: 'shark-fin',
    name: 'Shark Fin',
    category: 'dried',
    image: 'sf-shark-fin' as ImageKey,
    alt: 'Dried shark fins in a seafood shop',
    note: 'Dried fins, with skin or skinned, sorted by fin type and length.',
    spec: [
      ['Forms', 'Dried with skin · Dried skinned'],
      ['Grades', 'By fin type and length (cm)'],
      ['Moisture', '≤ 12 %'],
      ['Species and documents', 'Agreed per order'],
    ],
    handling: [
      ['Packing', '10 kg carton, lined'],
      ['Storage', 'Cool and dry, away from light'],
      ['Shelf life', '24 months'],
    ],
    hs: '0305.71',
  }),
  P({
    slug: 'dried-anchovy',
    name: 'Dried Anchovy',
    latin: 'Stolephorus spp.',
    category: 'dried',
    image: 'sf-anchovy' as ImageKey,
    alt: 'Small dried anchovies, close',
    note: 'Small anchovies, boiled and dried, for stocks, sambal and snacks.',
    spec: [
      ['Forms', 'Boiled and dried · Salted and dried'],
      ['Sizes', '1–2 cm · 2–3 cm · 3–4 cm · 4–6 cm'],
      ['Moisture', '≤ 20 %'],
    ],
    handling: [
      ['Packing', '5 kg or 10 kg carton, lined'],
      ['Storage', 'Cool and dry, or chilled'],
      ['Shelf life', '12 months'],
    ],
    hs: '0305.59',
  }),
];
