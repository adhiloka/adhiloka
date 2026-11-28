import type { ImageKey } from './images';
import type { LineCategory, LineItem } from './line-products';

/* Katalog lini Fine Seafood.
 * 28 Nov 2026 (pemilik): tanpa kode produk, pemisahnya cukup spesies, bentuk
 * katalog seperti Ingredient Catalog. Isi sama dengan katalog PDF Marine
 * Products (tools/pdf/fisheries-catalog.mjs): lobster hidup empat jenis,
 * teripang tujuh jenis, fish maw tiga jenis ikan, sirip hiu, abalon dua jenis.
 * Satu spesies = satu kartu dan satu halaman; ukuran (grade) ditulis sebagai
 * rentang di Specification, bukan item terpisah. Tab = kelompok spesies.
 *
 * Teripang susu (CITES Appendix II) dimuat seperti di katalog PDF: penjualan
 * dalam negeri. Sirip hiu tanpa nama spesies. Tanpa sertifikat, MOQ, atau
 * lama kirim. */

export const SEAFOOD_CATEGORIES: LineCategory[] = [
  { key: 'lobster', label: 'Lobster', body: 'Tropical spiny lobster, delivered live, prized for its colour and sweet, firm meat.' },
  { key: 'sea-cucumber', label: 'Sea Cucumber', body: 'Dried sea cucumber for banquet dishes, soups and braises.' },
  { key: 'fish-maw', label: 'Fish Maw', body: 'Sun-dried fish maw with a soft, silky texture once soaked.' },
  { key: 'shark-fin', label: 'Shark Fin', body: 'Dried whole fin for celebration soups.' },
  { key: 'abalone', label: 'Abalone', body: 'Dried abalone with a firm bite and deep, savoury flavour.' },
];

const I = (i: Omit<LineItem, 'line'>): LineItem => ({ ...i, line: 'seafood' });

const LIVE_PACK = 'Chilled sawdust in styrofoam box';
const DRY_PACK = 'Lined carton, 10 kg';
const LIVE: [string, string][] = [['Arrival', 'Live'], ['Holding', 'Seawater tank']];
const DRY: [string, string][] = [['Storage', 'Cool, dry and away from light'], ['Shelf life', '24 months']];
const LOBSTER_USE = 'Steamed, grilled, baked with cheese or cooked in stock. The head and shell make a rich broth for porridge and noodles.';
const SC_USE = 'Soaked until soft, then braised for banquet dishes, soups and festive menus.';
const MAW_USE = 'Soaked or puffed, then simmered in soups and braises.';

const live = (latin: string, local: string, size: string): [string, string][] => [
  ['Scientific name', latin],
  ['Local name', local],
  ['Form', 'Live'],
  ['Size', size],
  ['Packing', LIVE_PACK],
];
const dried = (latin: string, local: string, form: string, size: string): [string, string][] => [
  ...(latin ? ([['Scientific name', latin]] as [string, string][]) : []),
  ['Local name', local],
  ['Form', form],
  ['Size', size],
  ['Packing', DRY_PACK],
];

export const SEAFOOD_ITEMS: LineItem[] = [
  /* ── Lobster ── */
  I({
    slug: 'pearl-lobster',
    name: 'Pearl Lobster',
    local: 'Lobster Mutiara',
    latin: 'Panulirus ornatus',
    category: 'lobster',
    image: 'fs-pearl-lobster' as ImageKey,
    alt: 'Pearl lobster with banded legs on a wooden board',
    note: 'The largest of the tropical spiny lobsters, with marbled blue-green shell and banded legs. Sweet, firm tail meat for the centre of the table.',
    usage: LOBSTER_USE,
    spec: live('Panulirus ornatus', 'Lobster Mutiara', '300–500 g · 500 g–1 kg · 1 kg up'),
    handling: LIVE,
  }),
  I({
    slug: 'sand-lobster',
    name: 'Sand Lobster',
    local: 'Lobster Pasir',
    latin: 'Panulirus homarus',
    category: 'lobster',
    image: 'fs-sand-lobster' as ImageKey,
    alt: 'Sand lobster resting on rocks in a seawater tank',
    note: 'A smaller spiny lobster with a pale, sandy shell. Tender meat and an easy portion size for set menus.',
    usage: LOBSTER_USE,
    spec: live('Panulirus homarus', 'Lobster Pasir', '200–300 g · 300–500 g'),
    handling: LIVE,
  }),
  I({
    slug: 'bamboo-lobster',
    name: 'Bamboo Lobster',
    local: 'Lobster Bambu',
    latin: 'Panulirus versicolor',
    category: 'lobster',
    image: 'fs-bamboo-lobster' as ImageKey,
    alt: 'Bamboo lobster with long white antennae among corals',
    note: 'Named for its striped legs and long white antennae. A striking lobster to serve whole.',
    usage: LOBSTER_USE,
    spec: live('Panulirus versicolor', 'Lobster Bambu', '200–300 g · 300–500 g'),
    handling: LIVE,
  }),
  I({
    slug: 'batik-lobster',
    name: 'Batik Lobster',
    local: 'Lobster Batik',
    latin: 'Panulirus longipes',
    category: 'lobster',
    image: 'fs-batik-lobster' as ImageKey,
    alt: 'Batik lobster with white-spotted shell in a tank',
    note: 'A spiny lobster with a fine white-spotted pattern on a deep red-brown shell. Firm, sweet meat.',
    usage: LOBSTER_USE,
    spec: live('Panulirus longipes', 'Lobster Batik', '200–300 g · 300–500 g'),
    handling: LIVE,
  }),
  /* ── Sea cucumber ── */
  I({
    slug: 'sandfish-sea-cucumber',
    name: 'Sandfish Sea Cucumber',
    local: 'Teripang Gosok (Pasir)',
    latin: 'Holothuria scabra',
    category: 'sea-cucumber',
    image: 'fs-sc-sandfish' as ImageKey,
    alt: 'Sandfish sea cucumber on a sandy seabed',
    note: 'The most sought-after of the dried sea cucumbers. Its skin is rubbed clean before drying, and it soaks to a thick, tender texture.',
    usage: SC_USE,
    spec: dried('Holothuria scabra', 'Teripang Gosok (Pasir)', 'Dried, skin rubbed clean', '10–20 · 20–40 · 40–80 pcs/kg'),
    handling: DRY,
  }),
  I({
    slug: 'golden-sandfish-sea-cucumber',
    name: 'Golden Sandfish Sea Cucumber',
    local: 'Teripang Emas',
    latin: 'Holothuria lessoni',
    category: 'sea-cucumber',
    image: 'fs-sc-golden' as ImageKey,
    alt: 'Golden-brown sea cucumber held in the hand',
    note: 'A close relative of sandfish with golden-brown, mottled skin. Rich and tender after a long soak.',
    usage: SC_USE,
    spec: dried('Holothuria lessoni', 'Teripang Emas', 'Dried, skin rubbed clean', '10–20 · 20–40 pcs/kg'),
    handling: DRY,
  }),
  I({
    slug: 'white-teatfish-sea-cucumber',
    name: 'White Teatfish Sea Cucumber',
    local: 'Teripang Susu',
    latin: 'Holothuria fuscogilva',
    category: 'sea-cucumber',
    image: 'fs-sc-teatfish' as ImageKey,
    alt: 'White teatfish sea cucumber on the reef floor',
    note: 'A large sea cucumber with thick walls and the teat-like bumps that give it its name. A centrepiece for the banquet table.',
    usage: SC_USE,
    spec: dried('Holothuria fuscogilva', 'Teripang Susu', 'Dried, gutted', '2–4 · 4–8 pcs/kg'),
    handling: DRY,
  }),
  I({
    slug: 'blackfish-sea-cucumber',
    name: 'Blackfish Sea Cucumber',
    local: 'Teripang Lotong',
    latin: 'Actinopyga miliaris',
    category: 'sea-cucumber',
    image: 'fs-sc-blackfish' as ImageKey,
    alt: 'Black sea cucumber on coral sand',
    note: 'Dark, firm and full-bodied. Holds its shape well in long braises.',
    usage: SC_USE,
    spec: dried('Actinopyga miliaris', 'Teripang Lotong', 'Dried, gutted', '10–20 · 20–40 pcs/kg'),
    handling: DRY,
  }),
  I({
    slug: 'stonefish-sea-cucumber',
    name: 'Stonefish Sea Cucumber',
    local: 'Teripang Batu (Balibi)',
    latin: 'Actinopyga lecanora',
    category: 'sea-cucumber',
    image: 'fs-sc-stonefish' as ImageKey,
    alt: 'Stonefish sea cucumber held in the hand over coral',
    note: 'Round and compact, with a firm, springy bite once soaked.',
    usage: SC_USE,
    spec: dried('Actinopyga lecanora', 'Teripang Batu (Balibi)', 'Dried, gutted', '10–20 · 20–40 pcs/kg'),
    handling: DRY,
  }),
  I({
    slug: 'curryfish-sea-cucumber',
    name: 'Curryfish Sea Cucumber',
    local: 'Teripang Gamat',
    latin: 'Stichopus herrmanni',
    category: 'sea-cucumber',
    image: 'fs-sc-curryfish' as ImageKey,
    alt: 'Curryfish sea cucumber with ochre skin',
    note: 'A large, soft sea cucumber with ochre skin. Gentle in flavour and quick to absorb a rich sauce.',
    usage: SC_USE,
    spec: dried('Stichopus herrmanni', 'Teripang Gamat', 'Dried, gutted', '5–10 · 10–20 pcs/kg'),
    handling: DRY,
  }),
  I({
    slug: 'spiky-sea-cucumber',
    name: 'Spiky Sea Cucumber',
    local: 'Teripang Duri',
    latin: 'Stichopus spp.',
    category: 'sea-cucumber',
    image: 'fs-sea-cucumber' as ImageKey,
    alt: 'Dried spiky sea cucumbers, close',
    note: 'Dried sea cucumber with its natural spikes intact. A classic for braised dishes and soups.',
    usage: SC_USE,
    spec: dried('Stichopus spp.', 'Teripang Duri', 'Dried, gutted', '20–40 · 40–80 pcs/kg'),
    handling: DRY,
  }),
  /* ── Fish maw ── */
  I({
    slug: 'croaker-fish-maw',
    name: 'Croaker Fish Maw',
    local: 'Gelembung Ikan Gulama',
    latin: 'Protonibea diacanthus',
    category: 'fish-maw',
    image: 'fs-fish-maw' as ImageKey,
    alt: 'Dried croaker fish maw, close',
    note: 'Thick, golden fish maw from the spotted croaker. The most prized of the three for its rich, silky texture.',
    usage: MAW_USE,
    spec: dried('Protonibea diacanthus', 'Gelembung Ikan Gulama', 'Sun-dried, whole', '50–100 g · 100 g up per piece'),
    handling: DRY,
  }),
  I({
    slug: 'barramundi-fish-maw',
    name: 'Barramundi Fish Maw',
    local: 'Gelembung Ikan Kakap Putih',
    latin: 'Lates calcarifer',
    category: 'fish-maw',
    image: 'fs-fish-maw-barramundi' as ImageKey,
    alt: 'Dried barramundi fish maws laid out',
    note: 'A clean, mild fish maw that soaks evenly. A versatile choice for everyday soups.',
    usage: MAW_USE,
    spec: dried('Lates calcarifer', 'Gelembung Ikan Kakap Putih', 'Sun-dried, whole', '20–50 g · 50–100 g per piece'),
    handling: DRY,
  }),
  I({
    slug: 'catfish-fish-maw',
    name: 'Catfish Fish Maw',
    local: 'Gelembung Ikan Manyung',
    latin: 'Netuma thalassina',
    category: 'fish-maw',
    image: 'fs-fish-maw-catfish' as ImageKey,
    alt: 'Single dried catfish fish maw',
    note: 'Light and thin-walled, it puffs well and takes on the flavour of the broth.',
    usage: MAW_USE,
    spec: dried('Netuma thalassina', 'Gelembung Ikan Manyung', 'Sun-dried, whole', '20–50 g · 50–100 g per piece'),
    handling: DRY,
  }),
  /* ── Shark fin ── */
  I({
    slug: 'shark-fin',
    name: 'Shark Fin',
    local: 'Sirip Hiu (Hisit)',
    category: 'shark-fin',
    image: 'fs-shark-fin' as ImageKey,
    alt: 'Dried shark fin, close',
    note: 'A classic of celebration dinners, prized for its fine, delicate strands.',
    usage: 'Soaked and simmered for soups and braised dishes.',
    spec: dried('', 'Sirip Hiu', 'Dried, skin-on', '10–15 cm · 15–20 cm · 20 cm up'),
    handling: DRY,
  }),
  /* ── Abalone ── */
  I({
    slug: 'donkeys-ear-abalone',
    name: 'Donkey’s Ear Abalone',
    local: 'Abalon',
    latin: 'Haliotis asinina',
    category: 'abalone',
    image: 'fs-abalone' as ImageKey,
    alt: 'Dried abalones heaped together',
    note: 'A long, oval abalone with a firm bite and deep, savoury flavour. The jewel of festive dining.',
    usage: 'Slow-braised and served whole, or sliced into soups and festive platters.',
    spec: dried('Haliotis asinina', 'Abalon', 'Dried, whole', '20–40 · 40–60 pcs/kg'),
    handling: DRY,
  }),
  I({
    slug: 'bali-abalone',
    name: 'Bali Abalone',
    local: 'Abalon',
    latin: 'Haliotis squamata',
    category: 'abalone',
    image: 'fs-abalone-bali' as ImageKey,
    alt: 'Abalone shell with a pearly lining',
    note: 'A rounder abalone with a sweet, clean taste. Tender after a slow braise.',
    usage: 'Slow-braised and served whole, or sliced into soups and festive platters.',
    spec: dried('Haliotis squamata', 'Abalon', 'Dried, whole', '20–40 · 40–60 pcs/kg'),
    handling: DRY,
  }),
];
