import type { ImageKey } from './images';
import type { LineCategory, LineItem, LineProduct } from './line-products';

/* Katalog lini Marine Delicacies (pemilik, 28 Nov 2026: "sesuaikan dengan
 * katalog yang sudah kita buat"). Isi, naskah, dan foto mengikuti katalog PDF
 * Marine Products (tools/pdf/fisheries-catalog.mjs): lobster hidup + hasil
 * laut kering. Ikan, udang, kepiting, cumi, gurita dilepas (pemilik: kami
 * tidak menjual ikan); kodenya berstatus dilepas di Product code register.
 *
 * Kode kepala 1, D2 1–4 (catalog/Product code register.md):
 *   D2 kategori · D3 item · D4 jenis · D5 bentuk · D6 grade/ukuran (1 = teratas)
 *   D5: 1 Live · 8 Dried
 *
 * Teripang susu (CITES Appendix II) dimuat seperti di katalog PDF: penjualan
 * dalam negeri. Sirip hiu tanpa nama spesies. Tanpa sertifikat, MOQ, atau
 * lama kirim. */

export const SEAFOOD_CATEGORIES: LineCategory[] = [
  { key: 'live', label: 'Live Lobster', body: 'Tropical spiny lobster, prized for its striking colour and sweet, firm meat.' },
  { key: 'dried', label: 'Dried Marine Products', body: 'Treasured delicacies of the celebration table, rich in texture and deep in flavour.' },
];

const P = (code: string, name: string, type: string, spec: [string, string][]): LineProduct => ({ code, name, type, spec });
const I = (i: Omit<LineItem, 'line'>): LineItem => ({ ...i, line: 'seafood' });

const LIVE_PACK = 'Chilled sawdust in styrofoam box';
const DRY_PACK = 'Lined carton, 10 kg';
const DRY: [string, string][] = [['Storage', 'Cool, dry and away from light'], ['Shelf life', '24 months']];

export const SEAFOOD_ITEMS: LineItem[] = [
  /* ── Live lobster ── */
  I({
    slug: 'lobster',
    name: 'Lobster',
    local: 'Lobster',
    category: 'live',
    image: 'fs-pearl-lobster' as ImageKey,
    alt: 'Ornate spiny lobster on a wooden board',
    note: 'Tropical spiny lobster with striking colour and sweet, firm tail meat. A showpiece for any celebration.',
    range: 'Pearl · Sand · Bamboo · Batik',
    usage: 'Steamed, grilled, baked with cheese or cooked in stock. The head and shell make a rich broth for porridge and noodles.',
    handling: [['Arrival', 'Live'], ['Holding', 'Seawater tank']],
    products: [
      P('125111', 'Bamboo Lobster, Live', 'Live', [['Local name', 'Lobster Bambu'], ['Scientific name', 'Panulirus versicolor'], ['Form', 'Live'], ['Size', '200–300 g · 300–500 g'], ['Packing', LIVE_PACK]]),
      P('125211', 'Batik Lobster, Live', 'Live', [['Local name', 'Lobster Batik'], ['Scientific name', 'Panulirus longipes'], ['Form', 'Live'], ['Size', '200–300 g · 300–500 g'], ['Packing', LIVE_PACK]]),
      P('125311', 'Pearl Lobster, Live', 'Live', [['Local name', 'Lobster Mutiara'], ['Scientific name', 'Panulirus ornatus'], ['Form', 'Live'], ['Size', '300–500 g · 500 g–1 kg · 1 kg up'], ['Packing', LIVE_PACK]]),
      P('125511', 'Sand Lobster, Live', 'Live', [['Local name', 'Lobster Pasir'], ['Scientific name', 'Panulirus homarus'], ['Form', 'Live'], ['Size', '200–300 g · 300–500 g'], ['Packing', LIVE_PACK]]),
    ],
  }),
  /* ── Dried marine products ── */
  I({
    slug: 'sea-cucumber',
    name: 'Sea Cucumber',
    local: 'Teripang (Haisom)',
    category: 'dried',
    image: 'fs-sea-cucumber' as ImageKey,
    alt: 'Dried spiky sea cucumbers, close',
    note: 'One of the great delicacies of the banquet table, valued for its rich, tender texture.',
    range: 'Gosok · Emas · Susu · Lotong · Batu · Gamat · Duri',
    usage: 'Soaked until soft, then braised for banquet dishes, soups and festive menus.',
    handling: DRY,
    products: [
      P('145181', 'Blackfish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Lotong'], ['Scientific name', 'Actinopyga miliaris'], ['Form', 'Dried, gutted'], ['Size', '10–20 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145182', 'Blackfish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Lotong'], ['Scientific name', 'Actinopyga miliaris'], ['Form', 'Dried, gutted'], ['Size', '20–40 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145381', 'Curryfish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Gamat'], ['Scientific name', 'Stichopus herrmanni'], ['Form', 'Dried, gutted'], ['Size', '5–10 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145382', 'Curryfish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Gamat'], ['Scientific name', 'Stichopus herrmanni'], ['Form', 'Dried, gutted'], ['Size', '10–20 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145481', 'Golden Sandfish Sea Cucumber', 'Dried', [['Local name', 'Teripang Emas'], ['Scientific name', 'Holothuria lessoni'], ['Form', 'Dried, skin rubbed clean'], ['Size', '10–20 · 20–40 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145581', 'Sandfish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Gosok (Pasir)'], ['Scientific name', 'Holothuria scabra'], ['Form', 'Dried, skin rubbed clean'], ['Size', '10–20 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145582', 'Sandfish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Gosok (Pasir)'], ['Scientific name', 'Holothuria scabra'], ['Form', 'Dried, skin rubbed clean'], ['Size', '20–40 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145583', 'Sandfish Sea Cucumber, Small', 'Dried', [['Local name', 'Teripang Gosok (Pasir)'], ['Scientific name', 'Holothuria scabra'], ['Form', 'Dried, skin rubbed clean'], ['Size', '40–80 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145681', 'Spiky Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Duri'], ['Scientific name', 'Stichopus spp.'], ['Form', 'Dried, gutted'], ['Size', '20–40 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145682', 'Spiky Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Duri'], ['Scientific name', 'Stichopus spp.'], ['Form', 'Dried, gutted'], ['Size', '40–80 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145881', 'Stonefish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Batu (Balibi)'], ['Scientific name', 'Actinopyga lecanora'], ['Form', 'Dried, gutted'], ['Size', '10–20 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145882', 'Stonefish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Batu (Balibi)'], ['Scientific name', 'Actinopyga lecanora'], ['Form', 'Dried, gutted'], ['Size', '20–40 pcs/kg'], ['Packing', DRY_PACK]]),
      P('145981', 'White Teatfish Sea Cucumber', 'Dried', [['Local name', 'Teripang Susu'], ['Scientific name', 'Holothuria fuscogilva'], ['Form', 'Dried, gutted'], ['Size', '2–4 · 4–8 pcs/kg'], ['Packing', DRY_PACK]]),
    ],
  }),
  I({
    slug: 'fish-maw',
    name: 'Fish Maw',
    local: 'Gelembung Ikan (Hi Pio)',
    category: 'dried',
    image: 'fs-fish-maw' as ImageKey,
    alt: 'Dried fish maw, close',
    note: 'A treasured delicacy, prized for its soft, silky texture in soups and braises.',
    range: 'Croaker · Barramundi · Catfish',
    usage: 'Soaked or puffed, then simmered in soups and braises.',
    handling: DRY,
    products: [
      P('142281', 'Barramundi Fish Maw', 'Dried', [['Local name', 'Gelembung Ikan Kakap Putih'], ['Scientific name', 'Lates calcarifer'], ['Form', 'Sun-dried, whole'], ['Size', '20–50 g · 50–100 g per piece'], ['Packing', DRY_PACK]]),
      P('142481', 'Catfish Fish Maw', 'Dried', [['Local name', 'Gelembung Ikan Manyung'], ['Scientific name', 'Netuma thalassina'], ['Form', 'Sun-dried, whole'], ['Size', '20–50 g · 50–100 g per piece'], ['Packing', DRY_PACK]]),
      P('142681', 'Croaker Fish Maw', 'Dried', [['Local name', 'Gelembung Ikan Gulama'], ['Scientific name', 'Protonibea diacanthus'], ['Form', 'Sun-dried, whole'], ['Size', '50–100 g · 100 g up per piece'], ['Packing', DRY_PACK]]),
    ],
  }),
  I({
    slug: 'shark-fin',
    name: 'Shark Fin',
    local: 'Sirip Hiu (Hisit)',
    category: 'dried',
    image: 'fs-shark-fin' as ImageKey,
    alt: 'Dried shark fin, close',
    note: 'A classic of celebration dinners, prized for its fine, delicate strands.',
    range: 'Dried whole',
    usage: 'Soaked and simmered for soups and braised dishes.',
    handling: DRY,
    products: [
      P('147181', 'Shark Fin, Dried Whole', 'Dried', [['Local name', 'Sirip Hiu'], ['Form', 'Dried, skin-on'], ['Size', '10–15 cm · 15–20 cm · 20 cm up'], ['Packing', DRY_PACK]]),
    ],
  }),
  I({
    slug: 'abalone',
    name: 'Abalone',
    local: 'Abalon Kering (Bao Yu)',
    category: 'dried',
    image: 'fs-abalone' as ImageKey,
    alt: 'Dried abalones heaped together',
    note: 'The jewel of festive dining, with a firm bite and deep, savoury flavour.',
    range: 'Donkey’s Ear · Bali',
    usage: 'Slow-braised and served whole, or sliced into soups and festive platters.',
    handling: DRY,
    products: [
      P('141281', 'Bali Abalone, Dried', 'Dried', [['Local name', 'Abalon'], ['Scientific name', 'Haliotis squamata'], ['Form', 'Dried, whole'], ['Size', '20–40 · 40–60 pcs/kg'], ['Packing', DRY_PACK]]),
      P('141481', 'Donkey’s Ear Abalone, Dried', 'Dried', [['Local name', 'Abalon'], ['Scientific name', 'Haliotis asinina'], ['Form', 'Dried, whole'], ['Size', '20–40 · 40–60 pcs/kg'], ['Packing', DRY_PACK]]),
    ],
  }),
];
