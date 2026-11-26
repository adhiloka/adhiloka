import type { ImageKey } from './images';
import type { LineCategory, LineItem, LineProduct } from './line-products';

/* Katalog lini Polymers (pemilik, 27 Nov 2026): kemasan plastik untuk
 * restoran dan toko, bukan barang industri. Kantong (kresek, bening, zipper,
 * pouch, sampah), plastik wrap, karung, jumbo bag, goni, gelas dan wadah
 * makanan. Biji plastik, pipa, krat, jeriken, botol kaca, tutup dan sprayer
 * parfum dilepas.
 *
 * Item = nama yang dipahami orang awam (Carrier Bags, Trash Bags); produk
 * berkode = bahan + konstruksi + warna. Kode kepala 1, D2 5–8
 * (catalog/Product code register.md):
 *   D2 kategori · D3 item · D4 bahan · D5 konstruksi · D6 warna
 *   D4: 1 HDPE · 2 LDPE · 3 LLDPE · 4 PP · 5 OPP · 6 PET dan laminasi PET ·
 *       7 Nylon/PE · 8 PVC · 9 Goni (jute)
 *   D6: 1 bening/natural · 2 putih · 3 hitam · 4 warna · 5 cetak
 * Ukuran dan ketebalan dibuat sesuai pesanan; rentangnya tertulis di spesifikasi.
 *
 * Nilai = rentang tipikal dagang (rujukan: Chandra Asri, Formerra, Berlin
 * Packaging di market-research/references/Group site/). Situs tidak menyebut
 * produksi sendiri atau trading; tanpa klaim food-contact bersertifikat. */

export const PACKAGING_CATEGORIES: LineCategory[] = [
  { key: 'bags', label: 'Bags & Pouches', body: 'Carrier bags, clear bags, zipper bags, stand-up pouches and trash bags for shops, restaurants and kitchens.' },
  { key: 'films', label: 'Films & Wraps', image: 'pk-ldpe', body: 'Cling wrap for the kitchen and stretch film for wrapping cartons and pallets.' },
  { key: 'sacks', label: 'Sacks & Bulk Bags', image: 'pm-woven-sacks', body: 'Woven plastic sacks, jute sacks and jumbo bags for rice, flour, sugar, produce and bulk goods.' },
  { key: 'food', label: 'Cups & Containers', body: 'Takeaway cups, lids and food containers for cafés, restaurants and delivery.' },
];

const P = (code: string, name: string, type: string, spec: [string, string][]): LineProduct => ({ code, name, type, spec });
const I = (i: Omit<LineItem, 'line'>): LineItem => ({ ...i, line: 'packaging' });

const STORE = ['Storage', 'Dry, covered, away from direct sun'] as [string, string];

export const PACKAGING_ITEMS: LineItem[] = [
  /* ── Bags & pouches ── */
  I({
    slug: 'carrier-bags',
    name: 'Carrier Bags',
    local: 'Kantong Kresek',
    latin: 'HDPE · LDPE',
    category: 'bags',
    image: 'pm-carrier-bags' as ImageKey,
    alt: 'Plastic carrier bags with groceries on a table',
    note: 'Shopping and takeaway bags in T-shirt and die-cut styles. Plain or printed with your logo.',
    range: 'HDPE T-shirt · LDPE Die-cut',
    usage: 'Retail checkouts, markets, takeaway and delivery.',
    handling: [STORE, ['Packing', '100 bags per pack, packs in bales or cartons']],
    products: [
      P('151112', 'HDPE T-shirt Bag, White', 'HDPE', [['Material', 'HDPE'], ['Style', 'T-shirt (singlet) handle'], ['Size', '15 × 30 cm to 50 × 85 cm'], ['Thickness', '10–30 µm']]),
      P('151113', 'HDPE T-shirt Bag, Black', 'HDPE', [['Material', 'HDPE'], ['Style', 'T-shirt (singlet) handle'], ['Size', '15 × 30 cm to 50 × 85 cm'], ['Thickness', '10–30 µm']]),
      P('151115', 'HDPE T-shirt Bag, Printed', 'HDPE', [['Material', 'HDPE'], ['Style', 'T-shirt handle, printed up to 4 colours'], ['Size', '20 × 40 cm to 50 × 85 cm'], ['Thickness', '15–35 µm']]),
      P('151225', 'LDPE Die-cut Bag, Printed', 'LDPE', [['Material', 'LDPE'], ['Style', 'Die-cut handle, printed up to 4 colours'], ['Size', '20 × 30 cm to 45 × 55 cm'], ['Thickness', '40–80 µm']]),
    ],
  }),
  I({
    slug: 'clear-bags',
    name: 'Clear Bags',
    local: 'Kantong Plastik Bening',
    latin: 'HDPE · LDPE · PP · OPP · Nylon/PE',
    category: 'bags',
    image: 'pm-clear-bags' as ImageKey,
    alt: 'Garlic bulbs in a clear plastic bag',
    note: 'Flat clear bags for food, produce and retail packing, from thin HDPE to glass-clear PP and nylon vacuum bags.',
    range: 'HDPE · LDPE · PP · OPP · Vacuum',
    usage: 'Packing produce, bread, frozen food, snacks and portions; vacuum bags for meat and fish.',
    handling: [STORE, ['Packing', '100 bags per pack or by weight']],
    products: [
      P('152111', 'HDPE Flat Bag, Clear', 'HDPE', [['Material', 'HDPE'], ['Style', 'Flat, open top'], ['Size', '8 × 15 cm to 40 × 60 cm'], ['Thickness', '10–25 µm']]),
      P('152211', 'LDPE Flat Bag, Clear', 'LDPE', [['Material', 'LDPE'], ['Style', 'Flat, open top'], ['Size', '8 × 15 cm to 60 × 90 cm'], ['Thickness', '30–100 µm']]),
      P('152411', 'PP Flat Bag, Clear', 'PP', [['Material', 'Cast PP'], ['Style', 'Flat, open top, glass-clear'], ['Size', '6 × 10 cm to 40 × 60 cm'], ['Thickness', '20–50 µm']]),
      P('152521', 'OPP Self-seal Bag', 'OPP', [['Material', 'BOPP'], ['Style', 'Flat with adhesive seal flap'], ['Size', '5 × 8 cm to 35 × 45 cm'], ['Thickness', '30–60 µm']]),
      P('152731', 'Nylon/PE Vacuum Bag', 'Nylon/PE', [['Material', 'PA/PE co-extruded'], ['Style', 'Three-side seal, for vacuum sealers'], ['Size', '10 × 15 cm to 40 × 60 cm'], ['Thickness', '70–120 µm']]),
    ],
  }),
  I({
    slug: 'pouches-zipper-bags',
    name: 'Pouches & Zipper Bags',
    local: 'Plastik Klip & Standing Pouch',
    latin: 'LDPE · PET/PE · PET/AL/PE',
    category: 'bags',
    image: 'pk-pouches' as ImageKey,
    alt: 'Two plain white stand-up pouches',
    note: 'Resealable bags and stand-up pouches for coffee, snacks, spices and frozen food. Clear, foil or printed.',
    range: 'Zipper Bag · Stand-up Pouch · Foil Pouch',
    usage: 'Retail packs of coffee, tea, snacks, spices, dried fish and frozen food.',
    handling: [STORE, ['Packing', '50–100 pieces per pack, cartons']],
    products: [
      P('154211', 'LDPE Zipper Bag, Clear', 'LDPE', [['Material', 'LDPE'], ['Style', 'Press-to-close zipper'], ['Size', '4 × 6 cm to 30 × 40 cm'], ['Thickness', '40–100 µm']]),
      P('154621', 'Stand-up Pouch, Clear', 'PET/PE', [['Material', 'PET/PE laminate'], ['Style', 'Bottom gusset, zipper, tear notch'], ['Size', '8 × 13 cm to 26 × 35 cm'], ['Thickness', '90–130 µm']]),
      P('154625', 'Stand-up Pouch, Printed', 'PET/PE', [['Material', 'PET/PE laminate'], ['Style', 'Bottom gusset, zipper, printed up to 8 colours'], ['Size', '8 × 13 cm to 26 × 35 cm'], ['Thickness', '90–130 µm']]),
      P('154631', 'Foil Stand-up Pouch', 'PET/AL/PE', [['Material', 'PET/AL/PE laminate'], ['Style', 'Bottom gusset, zipper, light and oxygen barrier'], ['Size', '8 × 13 cm to 26 × 35 cm'], ['Thickness', '100–140 µm']]),
    ],
  }),
  I({
    slug: 'trash-bags',
    name: 'Trash Bags',
    local: 'Kantong Sampah',
    latin: 'HDPE · LDPE · LLDPE',
    category: 'bags',
    image: 'pm-trash-bags' as ImageKey,
    alt: 'Black plastic garbage bag tied at the top',
    note: 'Bin liners and trash bags on rolls or flat-packed, from light kitchen bags to heavy-duty sacks for restaurants and buildings.',
    range: 'Roll · Flat · Heavy-duty · Drawstring',
    usage: 'Kitchens, restaurants, hotels, offices and cleaning services.',
    handling: [STORE, ['Packing', 'Rolls or packs of 10–50, cartons']],
    products: [
      P('156114', 'HDPE Flat Trash Bag, Colour', 'HDPE', [['Material', 'HDPE'], ['Style', 'Flat, colours for waste sorting'], ['Size', '50 × 60 cm to 90 × 120 cm'], ['Thickness', '15–30 µm']]),
      P('156123', 'HDPE Trash Bag on Roll, Black', 'HDPE', [['Material', 'HDPE'], ['Style', 'Perforated roll'], ['Size', '45 × 50 cm to 80 × 100 cm'], ['Thickness', '10–20 µm']]),
      P('156213', 'LDPE Heavy-duty Trash Bag, Black', 'LDPE', [['Material', 'LDPE with recycled content'], ['Style', 'Flat, star-sealed bottom'], ['Size', '60 × 100 cm to 120 × 150 cm'], ['Thickness', '40–80 µm']]),
      P('156333', 'LLDPE Drawstring Trash Bag, Black', 'LLDPE', [['Material', 'LLDPE'], ['Style', 'Drawstring closure, on roll'], ['Size', '50 × 60 cm to 80 × 100 cm'], ['Thickness', '15–30 µm']]),
    ],
  }),

  /* ── Films & wraps ── */
  I({
    slug: 'cling-wrap',
    name: 'Cling Wrap',
    local: 'Plastik Wrap',
    latin: 'PE · PVC',
    category: 'films',
    image: 'pk-ldpe' as ImageKey,
    alt: 'Vegetables on trays wrapped in clear film',
    note: 'Food wrap for covering, storing and tray packing. PVC for the strongest cling, PE as a plasticiser-free choice.',
    range: 'PE · PVC',
    usage: 'Kitchen prep, food storage and supermarket tray wrapping.',
    handling: [STORE, ['Packing', 'Rolls in cutter boxes, 6 per carton']],
    products: [
      P('163211', 'PE Cling Wrap', 'PE', [['Material', 'LDPE/LLDPE'], ['Width', '30 · 45 cm'], ['Length', '100–500 m per roll'], ['Thickness', '9–12 µm']]),
      P('163811', 'PVC Cling Wrap', 'PVC', [['Material', 'Food-wrap PVC'], ['Width', '30 · 45 cm'], ['Length', '300–1,500 m per roll'], ['Thickness', '8–12 µm']]),
    ],
  }),
  I({
    slug: 'stretch-film',
    name: 'Stretch Film',
    local: 'Plastik Wrapping',
    latin: 'LLDPE',
    category: 'films',
    image: 'pk-lldpe' as ImageKey,
    alt: 'Pallets of goods wrapped in stretch film in a warehouse',
    note: 'Cast LLDPE film for wrapping cartons and pallets by hand or machine. Clear or black for privacy.',
    range: 'Hand Roll · Machine Roll',
    usage: 'Bundling cartons, protecting goods in storage and shipping.',
    handling: [STORE, ['Packing', 'Rolls on 3 in cores, 4–6 per carton']],
    products: [
      P('166311', 'Stretch Film, Hand Roll, Clear', 'LLDPE', [['Material', 'Cast LLDPE'], ['Width', '50 cm'], ['Thickness', '15–23 µm'], ['Roll', '2–4 kg']]),
      P('166313', 'Stretch Film, Hand Roll, Black', 'LLDPE', [['Material', 'Cast LLDPE'], ['Width', '50 cm'], ['Thickness', '20–23 µm'], ['Roll', '2–4 kg']]),
      P('166321', 'Stretch Film, Machine Roll, Clear', 'LLDPE', [['Material', 'Cast LLDPE, pre-stretch 250%'], ['Width', '50 cm'], ['Thickness', '17–23 µm'], ['Roll', '15–17 kg']]),
    ],
  }),

  /* ── Sacks & bulk bags ── */
  I({
    slug: 'jumbo-bags',
    name: 'Jumbo Bags',
    local: 'Jumbo Bag',
    latin: 'Woven PP',
    category: 'sacks',
    image: 'pm-jumbo-bags' as ImageKey,
    alt: 'Worker lifting a large white bulk bag in a factory',
    note: 'Flexible bulk bags of woven polypropylene, lifted by forklift or crane. Plain or with a PE liner for fine and food goods.',
    range: 'Four-loop · Lined · Two-loop',
    usage: 'Rice, sugar, flour, grain, salt, fertiliser and other bulk goods.',
    handling: [STORE, ['Packing', 'Folded in bales of 20–50']],
    products: [
      P('173412', 'Jumbo Bag, Four-loop', 'PP', [['Material', 'Woven PP, uncoated or coated'], ['Safe working load', '500 · 1,000 · 1,500 kg'], ['Size', '90 × 90 × 100 cm to 100 × 100 × 150 cm'], ['Top / bottom', 'Open or spout top; flat or spout bottom']]),
      P('173422', 'Jumbo Bag, Four-loop with PE Liner', 'PP', [['Material', 'Woven PP with LDPE liner'], ['Safe working load', '500 · 1,000 kg'], ['Size', '90 × 90 × 100 cm to 100 × 100 × 120 cm'], ['Top / bottom', 'Spout top, spout bottom']]),
      P('173432', 'Jumbo Bag, Two-loop', 'PP', [['Material', 'Woven PP, tubular'], ['Safe working load', '500 · 1,000 kg'], ['Size', '90 × 90 × 100 cm to 95 × 95 × 130 cm'], ['Top / bottom', 'Open top, flat bottom']]),
    ],
  }),
  I({
    slug: 'jute-sacks',
    name: 'Jute Sacks',
    local: 'Karung Goni',
    latin: 'Jute',
    category: 'sacks',
    image: 'spice-sacks' as ImageKey,
    alt: 'Sacks of spices and dried seeds at a market',
    note: 'Natural jute sacks that breathe, for coffee, cocoa, spices and produce. Plain or with a food-safe inner liner.',
    range: 'Natural · Lined',
    usage: 'Coffee beans, cocoa, spices, nuts, potatoes and onions.',
    handling: [STORE, ['Packing', 'Bales of 50–100']],
    products: [
      P('175911', 'Jute Sack, Natural', 'Jute', [['Material', '100% jute, hessian weave'], ['Capacity', '25 · 50 · 60 · 70 kg'], ['Size', '60 × 100 cm to 75 × 115 cm'], ['Weight', '450–750 g per sack']]),
      P('175921', 'Jute Sack, Lined', 'Jute', [['Material', 'Jute with PE inner liner'], ['Capacity', '25 · 50 kg'], ['Size', '60 × 100 cm to 70 × 110 cm'], ['Weight', '500–800 g per sack']]),
    ],
  }),
  I({
    slug: 'woven-sacks',
    name: 'Woven Sacks',
    local: 'Karung Plastik',
    latin: 'Woven PP',
    category: 'sacks',
    image: 'pm-woven-sacks' as ImageKey,
    alt: 'Stacked woven plastic sacks, close',
    note: 'Strong, light woven polypropylene sacks for rice, sugar, flour and feed. Plain, laminated and printed, or with a PE liner.',
    range: 'Plain · Laminated · Lined',
    usage: 'Rice, sugar, flour, feed, salt and produce.',
    handling: [STORE, ['Packing', 'Bales of 500–1,000']],
    products: [
      P('178412', 'Woven Sack, White', 'PP', [['Material', 'Woven PP, uncoated'], ['Capacity', '5 · 10 · 25 · 50 kg'], ['Size', '30 × 50 cm to 65 × 100 cm'], ['Fabric', '60–90 g/m²']]),
      P('178425', 'Woven Sack, Laminated and Printed', 'PP', [['Material', 'Woven PP laminated with BOPP'], ['Capacity', '5 · 10 · 25 kg'], ['Size', '30 × 50 cm to 55 × 90 cm'], ['Print', 'Up to 8 colours']]),
      P('178432', 'Woven Sack with PE Liner', 'PP', [['Material', 'Woven PP with LDPE liner'], ['Capacity', '25 · 50 kg'], ['Size', '50 × 80 cm to 65 × 100 cm'], ['Fabric', '70–90 g/m²']]),
    ],
  }),

  /* ── Cups & containers ── */
  I({
    slug: 'cups-lids',
    name: 'Cups & Lids',
    local: 'Gelas Plastik',
    latin: 'PP · PET',
    category: 'food',
    image: 'pk-ps' as ImageKey,
    alt: 'Row of clear disposable plastic cups',
    note: 'Clear takeaway cups for iced drinks and desserts, with flat and dome lids. Plain or printed.',
    range: 'PP Cup · PET Cup · Lids',
    usage: 'Coffee shops, juice and tea bars, desserts and events.',
    handling: [STORE, ['Packing', 'Sleeves of 50, 1,000 per carton']],
    products: [
      P('183411', 'PP Cup, Clear', 'PP', [['Material', 'PP'], ['Volume', '8 · 12 · 14 · 16 · 22 oz'], ['Rim', '90 · 95 mm'], ['Use', 'Cold and warm drinks, cup sealer compatible']]),
      P('183421', 'PP Lids, Flat and Dome', 'PP', [['Material', 'PP'], ['Fits', '90 · 95 mm rim'], ['Style', 'Flat with straw slot · Dome']]),
      P('183611', 'PET Cup, Clear', 'PET', [['Material', 'PET'], ['Volume', '12 · 14 · 16 · 20 oz'], ['Rim', '95 · 98 mm'], ['Use', 'Cold drinks, crystal clear']]),
    ],
  }),
  I({
    slug: 'food-containers',
    name: 'Food Containers',
    local: 'Thinwall & Kotak Makanan',
    latin: 'PP · PET',
    category: 'food',
    image: 'pk-pp' as ImageKey,
    alt: 'Stack of clear plastic food containers',
    note: 'Thinwall containers with lids for takeaway and delivery, microwave-safe PP and clear PET clamshells.',
    range: 'Round · Rectangular · Clamshell',
    usage: 'Takeaway meals, soups, salads, bakery and fresh-cut fruit.',
    handling: [STORE, ['Packing', 'Sleeves of 25–50, cartons']],
    products: [
      P('186411', 'PP Round Container with Lid', 'PP', [['Material', 'PP, microwave-safe'], ['Volume', '300 · 500 · 750 · 1,000 ml'], ['Colour', 'Clear or black base']]),
      P('186421', 'PP Rectangular Container with Lid', 'PP', [['Material', 'PP, microwave-safe'], ['Volume', '500 · 650 · 750 · 1,000 ml'], ['Compartments', '1 · 2 · 3']]),
      P('186631', 'PET Clamshell', 'PET', [['Material', 'PET'], ['Size', 'Small · Medium · Large'], ['Use', 'Salads, cakes, fruit and pastries']]),
    ],
  }),
];
