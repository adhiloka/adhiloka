import type { ImageKey } from './images';
import type { LineCategory, LineItem, LineProduct } from './line-products';

/* Katalog lini Fisheries (pemilik, 27 Nov 2026). Item = nama yang dipahami
 * orang (Grouper, Snapper, Sea Cucumber); produk berkode = jenis + bentuk +
 * grade. Fokus ikan dan hasil laut bernilai tinggi untuk restoran: kerapu,
 * kakap, tuna, udang, kepiting, lobster, teripang.
 *
 * Kode kepala 1, D2 1–4 (catalog/Product code register.md):
 *   D2 kategori · D3 item · D4 jenis · D5 bentuk · D6 grade/ukuran (1 = teratas)
 *   D5: 1 Live · 2 Fresh chilled · 3 Frozen whole · 4 Frozen dressed ·
 *       5 Fillet, peeled or meat · 6 Portion · 7 Cooked or pasteurised · 8 Dried
 *
 * Nilai = nilai tipikal dagang (rujukan di market-research/references/Group
 * site/: Roda International, Toba Surimi, TradeIndia, Selina Wamucii; jenis
 * teripang dari Oseana LIPI 1987 dan Mongabay). Teripang, fish maw dan
 * sirip hiu tanpa nama ilmiah dan tanpa klaim izin; teripang susu dan nanas
 * (CITES Appendix II) tidak dimuat. Tanpa sertifikat, MOQ, atau lama kirim. */

export const SEAFOOD_CATEGORIES: LineCategory[] = [
  { key: 'fish', label: 'Fish', body: 'Grouper, snapper, barramundi, tuna and Spanish mackerel for restaurants and importers, live, fresh or frozen.' },
  { key: 'crustaceans', label: 'Shrimp, Crab & Lobster', image: 'sf-tiger', body: 'Black tiger and vannamei shrimp in every common cut, live mud crab, crab meat and spiny lobster.' },
  { key: 'cephalopods', label: 'Squid & Octopus', body: 'Squid, cuttlefish and octopus, whole, cleaned or cut, frozen to order.' },
  { key: 'dried', label: 'Dried Marine Products', image: 'sf-sea-cucumber', body: 'Dried sea cucumber by type and size, fish maw and shark fin, sorted and graded for the Asian kitchen.' },
];

const P = (code: string, name: string, type: string, spec: [string, string][]): LineProduct => ({ code, name, type, spec });
const I = (i: Omit<LineItem, 'line'>): LineItem => ({ ...i, line: 'seafood' });

const ICE = 'Styrofoam box on ice, 10–20 kg';
const LIVE = 'Oxygenated bag in styrofoam box';
const FROZEN = '−18 °C or below';

export const SEAFOOD_ITEMS: LineItem[] = [
  /* ── Fish ── */
  I({
    slug: 'barramundi',
    name: 'Barramundi',
    local: 'Kakap Putih',
    latin: 'Lates calcarifer',
    category: 'fish',
    image: 'sf-quality' as ImageKey,
    alt: 'Whole sea bass on crushed ice, close',
    note: 'Mild, white and firm, with clean flakes. A restaurant staple for steaming, grilling and pan-frying.',
    range: 'Fresh whole · Frozen · Fillet',
    usage: 'Whole fish for steaming and grilling, fillets for pan-frying and fish and chips.',
    handling: [['Storage', `Fresh on ice 0–4 °C; frozen ${FROZEN}`], ['Shelf life', 'Fresh 7 days; frozen 24 months']],
    products: [
      P('111121', 'Barramundi, Fresh Whole', 'Fresh chilled', [['Form', 'Whole round, chilled'], ['Size', '500–800 g · 800 g–1.5 kg · 1.5–3 kg'], ['Packing', ICE]]),
      P('111141', 'Barramundi, Frozen WGGS', 'Frozen dressed', [['Form', 'Whole, gilled, gutted and scaled, IQF'], ['Size', '400–600 g · 600–800 g · 800 g–1.2 kg'], ['Glaze', '5–10%'], ['Packing', '10 kg master carton']]),
      P('111151', 'Barramundi Fillet, Skin-on', 'Fillet', [['Form', 'Skin-on, boneless, IVP'], ['Size', '150–250 g · 250–400 g · 400–600 g'], ['Packing', '5 kg inner, 10 kg master carton']]),
    ],
  }),
  I({
    slug: 'grouper',
    name: 'Grouper',
    local: 'Kerapu',
    latin: 'Epinephelus, Plectropomus and Cromileptes spp.',
    category: 'fish',
    image: 'sf-grouper' as ImageKey,
    alt: 'Fishmonger holding a whole grouper',
    note: 'The most prized reef fish of Asian restaurants. We supply tiger grouper, coral trout and humpback grouper, live, fresh or frozen.',
    range: 'Coral Trout · Humpback · Tiger',
    usage: 'Live and whole fish for steaming at the table; fillets for grilling and soups.',
    handling: [['Storage', `Live in seawater tanks; fresh on ice 0–4 °C; frozen ${FROZEN}`], ['Shelf life', 'Fresh 7 days; frozen 24 months']],
    products: [
      P('113111', 'Coral Trout, Live', 'Live', [['Local name', 'Kerapu Sunu'], ['Form', 'Live'], ['Size', '500 g–1 kg · 1–2 kg per fish'], ['Packing', LIVE]]),
      P('113141', 'Coral Trout, Frozen WGGS', 'Frozen dressed', [['Local name', 'Kerapu Sunu'], ['Form', 'Whole, gilled, gutted and scaled, IQF'], ['Size', '500–800 g · 800 g–1.5 kg'], ['Packing', '10 kg master carton']]),
      P('113311', 'Humpback Grouper, Live', 'Live', [['Local name', 'Kerapu Tikus (Bebek)'], ['Form', 'Live'], ['Size', '400–800 g · 800 g–1.2 kg per fish'], ['Packing', LIVE]]),
      P('113511', 'Tiger Grouper, Live', 'Live', [['Local name', 'Kerapu Macan'], ['Form', 'Live'], ['Size', '500 g–1 kg · 1–3 kg per fish'], ['Packing', LIVE]]),
      P('113521', 'Tiger Grouper, Fresh Whole', 'Fresh chilled', [['Local name', 'Kerapu Macan'], ['Form', 'Whole round, chilled'], ['Size', '500 g–1 kg · 1–3 kg · 3 kg up'], ['Packing', ICE]]),
      P('113541', 'Tiger Grouper, Frozen WGGS', 'Frozen dressed', [['Local name', 'Kerapu Macan'], ['Form', 'Whole, gilled, gutted and scaled, IQF'], ['Size', '500–800 g · 800 g–1.5 kg · 1.5–3 kg'], ['Packing', '10 kg master carton']]),
      P('113551', 'Tiger Grouper Fillet, Skin-on', 'Fillet', [['Local name', 'Kerapu Macan'], ['Form', 'Skin-on, boneless, IVP'], ['Size', '200–400 g · 400–700 g'], ['Packing', '5 kg inner, 10 kg master carton']]),
    ],
  }),
  I({
    slug: 'snapper',
    name: 'Snapper',
    local: 'Kakap',
    latin: 'Lutjanus and Pristipomoides spp.',
    category: 'fish',
    image: 'sf-snapper' as ImageKey,
    alt: 'Red snappers on ice, close',
    note: 'Red-skinned reef fish with sweet, white meat. Red snapper and goldband snapper, whole or filleted.',
    range: 'Red Snapper · Goldband',
    usage: 'Whole fish for grilling and curries, fillets for the plate and the counter.',
    handling: [['Storage', `Fresh on ice 0–4 °C; frozen ${FROZEN}`], ['Shelf life', 'Fresh 7 days; frozen 24 months']],
    products: [
      P('116221', 'Goldband Snapper, Fresh Whole', 'Fresh chilled', [['Local name', 'Kakap Anggoli'], ['Form', 'Whole round, chilled'], ['Size', '500 g–1 kg · 1–2 kg · 2 kg up'], ['Packing', ICE]]),
      P('116241', 'Goldband Snapper, Frozen WGGS', 'Frozen dressed', [['Local name', 'Kakap Anggoli'], ['Form', 'Whole, gilled, gutted and scaled, IQF'], ['Size', '300–500 g · 500–800 g · 800 g–1.2 kg'], ['Packing', '10 kg master carton']]),
      P('116521', 'Red Snapper, Fresh Whole', 'Fresh chilled', [['Local name', 'Kakap Merah'], ['Form', 'Whole round, chilled'], ['Size', '500 g–1 kg · 1–3 kg · 3 kg up'], ['Packing', ICE]]),
      P('116541', 'Red Snapper, Frozen WGGS', 'Frozen dressed', [['Local name', 'Kakap Merah'], ['Form', 'Whole, gilled, gutted and scaled, IQF'], ['Size', '300–500 g · 500–800 g · 800 g–1.2 kg'], ['Packing', '10 kg master carton']]),
      P('116551', 'Red Snapper Fillet, Skin-on', 'Fillet', [['Local name', 'Kakap Merah'], ['Form', 'Skin-on, boneless, IVP'], ['Size', '100–200 g · 200–400 g · 400–600 g'], ['Packing', '5 kg inner, 10 kg master carton']]),
    ],
  }),
  I({
    slug: 'spanish-mackerel',
    name: 'Spanish Mackerel',
    local: 'Tenggiri',
    latin: 'Scomberomorus commerson',
    category: 'fish',
    image: 'fs-mackerel' as ImageKey,
    alt: 'Fresh mackerel piled at a fish market',
    note: 'Rich, firm and full of flavour. Sold whole or cut into steaks, and the fish of choice for fishcakes and otak-otak.',
    range: 'Frozen whole · Steaks',
    usage: 'Steaks for frying and grilling; whole fish for fishcakes and minced products.',
    handling: [['Storage', FROZEN], ['Shelf life', '18 months frozen']],
    products: [
      P('117131', 'Spanish Mackerel, Frozen Whole', 'Frozen whole', [['Form', 'Whole round, blast frozen'], ['Size', '1–3 kg · 3–5 kg · 5 kg up'], ['Packing', '20 kg carton']]),
      P('117161', 'Spanish Mackerel Steaks', 'Portion', [['Form', 'Bone-in steaks, IQF'], ['Size', '100–150 g · 150–200 g per steak'], ['Packing', '1 kg bag, 10 kg master carton']]),
    ],
  }),
  I({
    slug: 'tuna',
    name: 'Tuna',
    local: 'Tuna Sirip Kuning & Mata Besar',
    latin: 'Thunnus albacares, T. obesus',
    category: 'fish',
    image: 'sf-tuna' as ImageKey,
    alt: 'Red tuna loin on ice',
    note: 'Yellowfin and bigeye tuna, cut into loins, saku and steaks. Deep red meat for sashimi, steaks and grilling.',
    range: 'Yellowfin · Bigeye',
    usage: 'Fresh loins for sashimi and poke; saku and steaks for restaurants and retail.',
    handling: [['Storage', 'Fresh 0–2 °C; ultra-frozen −60 °C; frozen −18 °C or below'], ['Shelf life', 'Fresh 5 days; frozen 24 months']],
    products: [
      P('118161', 'Bigeye Tuna Loin, Fresh', 'Portion', [['Form', 'Fresh loin, sashimi grade'], ['Size', '3–8 kg per loin'], ['Packing', ICE]]),
      P('118561', 'Yellowfin Tuna Loin, Fresh', 'Portion', [['Form', 'Fresh loin, sashimi grade'], ['Size', '2–5 kg · 5–10 kg per loin'], ['Packing', ICE]]),
      P('118562', 'Yellowfin Tuna Loin, Ultra-frozen', 'Portion', [['Form', 'Loin, frozen at −60 °C, untreated'], ['Size', '2–5 kg · 5–10 kg per loin'], ['Packing', 'IVP, 20 kg carton']]),
      P('118563', 'Yellowfin Tuna Saku', 'Portion', [['Form', 'Saku blocks, IVP'], ['Size', '200–400 g · 400–600 g'], ['Packing', '10 kg master carton']]),
      P('118564', 'Yellowfin Tuna Steaks', 'Portion', [['Form', 'Boneless steaks, IVP'], ['Size', '150 g · 200 g · 250 g'], ['Packing', '10 kg master carton']]),
    ],
  }),

  /* ── Shrimp, crab & lobster ── */
  I({
    slug: 'crab',
    name: 'Crab',
    local: 'Kepiting & Rajungan',
    latin: 'Scylla serrata, Portunus pelagicus',
    category: 'crustaceans',
    image: 'sf-crab' as ImageKey,
    alt: 'Raw blue swimming crabs piled together',
    note: 'Live mud crab for the restaurant tank and pasteurised blue swimming crab meat for the kitchen.',
    range: 'Mud Crab · Blue Swimming Crab',
    usage: 'Live crab for chilli and pepper crab; crab meat for crab cakes, salads and soups.',
    handling: [['Storage', 'Live crab cool and damp, 15–20 °C; pasteurised meat 0–4 °C'], ['Shelf life', 'Pasteurised meat 12 months chilled']],
    products: [
      P('122271', 'Blue Swimming Crab Meat, Jumbo Lump', 'Pasteurised', [['Local name', 'Rajungan'], ['Form', 'Pasteurised meat'], ['Grade', 'Jumbo lump'], ['Packing', '454 g can or cup, 12 per carton']]),
      P('122272', 'Blue Swimming Crab Meat, Lump', 'Pasteurised', [['Local name', 'Rajungan'], ['Form', 'Pasteurised meat'], ['Grade', 'Lump · Backfin'], ['Packing', '454 g can or cup, 12 per carton']]),
      P('122273', 'Blue Swimming Crab Meat, Claw', 'Pasteurised', [['Local name', 'Rajungan'], ['Form', 'Pasteurised meat'], ['Grade', 'Claw · Claw finger'], ['Packing', '454 g can or cup, 12 per carton']]),
      P('126111', 'Mud Crab, Live, Male', 'Live', [['Local name', 'Kepiting Bakau Jantan'], ['Form', 'Live, tied'], ['Size', '300–500 g · 500 g up per crab'], ['Packing', 'Ventilated box with damp sawdust']]),
      P('126112', 'Mud Crab, Live, Female', 'Live', [['Local name', 'Kepiting Bakau Telur'], ['Form', 'Live, tied'], ['Size', '200–300 g · 300 g up per crab'], ['Packing', 'Ventilated box with damp sawdust']]),
    ],
  }),
  I({
    slug: 'lobster',
    name: 'Lobster',
    local: 'Lobster',
    latin: 'Panulirus ornatus, P. homarus',
    category: 'crustaceans',
    image: 'fs-lobster' as ImageKey,
    alt: 'Live spiny lobsters in a seafood tank',
    note: 'Tropical spiny lobster with sweet, firm tail meat. Pearl lobster and sand lobster, live or frozen whole.',
    range: 'Pearl Lobster · Sand Lobster',
    usage: 'Live lobster for the restaurant tank; frozen whole for grilling and buffets.',
    handling: [['Storage', `Live in seawater tanks or chilled sawdust; frozen ${FROZEN}`], ['Shelf life', 'Frozen 18 months']],
    products: [
      P('125311', 'Pearl Lobster, Live', 'Live', [['Local name', 'Lobster Mutiara'], ['Form', 'Live'], ['Size', '300–500 g · 500 g–1 kg · 1 kg up'], ['Packing', 'Chilled sawdust in styrofoam box']]),
      P('125331', 'Pearl Lobster, Frozen Whole', 'Frozen whole', [['Local name', 'Lobster Mutiara'], ['Form', 'Whole raw, frozen'], ['Size', '300–500 g · 500 g–1 kg'], ['Packing', 'Individually wrapped, 10 kg carton']]),
      P('125511', 'Sand Lobster, Live', 'Live', [['Local name', 'Lobster Pasir'], ['Form', 'Live'], ['Size', '200–300 g · 300–500 g'], ['Packing', 'Chilled sawdust in styrofoam box']]),
      P('125531', 'Sand Lobster, Frozen Whole', 'Frozen whole', [['Local name', 'Lobster Pasir'], ['Form', 'Whole raw, frozen'], ['Size', '200–300 g · 300–500 g'], ['Packing', 'Individually wrapped, 10 kg carton']]),
    ],
  }),
  I({
    slug: 'shrimp',
    name: 'Shrimp',
    local: 'Udang',
    latin: 'Penaeus monodon, Litopenaeus vannamei',
    category: 'crustaceans',
    image: 'sf-tiger' as ImageKey,
    alt: 'Raw black tiger prawns on ice',
    note: 'Black tiger and vannamei shrimp, from head-on to peeled and cooked. Graded by count and packed to the glaze your market expects.',
    range: 'Black Tiger · Vannamei',
    usage: 'Head-on for grilling and buffets, peeled for stir-fries, tempura and ready meals.',
    handling: [['Storage', FROZEN], ['Shelf life', '24 months frozen']],
    products: [
      P('127231', 'Black Tiger Shrimp, HOSO', 'Frozen whole', [['Local name', 'Udang Windu'], ['Form', 'Head-on shell-on, block or semi-IQF'], ['Size', '8/12 · 13/15 · 16/20 · 21/25 pcs/kg'], ['Packing', '6 × 1.8 kg or 10 × 1 kg']]),
      P('127241', 'Black Tiger Shrimp, HLSO', 'Frozen dressed', [['Local name', 'Udang Windu'], ['Form', 'Headless shell-on, block or IQF'], ['Size', '8/12 · 13/15 · 16/20 · 21/25 pcs/lb'], ['Packing', '6 × 1.8 kg or 10 × 1 kg']]),
      P('127251', 'Black Tiger Shrimp, Peeled', 'Peeled', [['Local name', 'Udang Windu'], ['Form', 'PD or PDTO, IQF'], ['Size', '16/20 · 21/25 · 26/30 pcs/lb'], ['Packing', '10 × 1 kg']]),
      P('127731', 'Vannamei Shrimp, HOSO', 'Frozen whole', [['Local name', 'Udang Vaname'], ['Form', 'Head-on shell-on, block or semi-IQF'], ['Size', '30/40 · 40/50 · 50/60 · 60/70 pcs/kg'], ['Packing', '6 × 2 kg or 10 × 1 kg']]),
      P('127741', 'Vannamei Shrimp, HLSO', 'Frozen dressed', [['Local name', 'Udang Vaname'], ['Form', 'Headless shell-on, block or IQF'], ['Size', '16/20 · 21/25 · 26/30 · 31/40 pcs/lb'], ['Packing', '6 × 2 kg or 10 × 1 kg']]),
      P('127751', 'Vannamei Shrimp, PDTO', 'Peeled', [['Local name', 'Udang Vaname'], ['Form', 'Peeled, deveined, tail-on, IQF'], ['Size', '16/20 · 21/25 · 26/30 · 31/40 pcs/lb'], ['Packing', '10 × 1 kg']]),
      P('127771', 'Vannamei Shrimp, Cooked PD', 'Cooked', [['Local name', 'Udang Vaname'], ['Form', 'Cooked, peeled and deveined, IQF'], ['Size', '31/40 · 41/50 · 51/60 pcs/lb'], ['Packing', '10 × 1 kg']]),
    ],
  }),

  /* ── Squid & octopus ── */
  I({
    slug: 'octopus',
    name: 'Octopus',
    local: 'Gurita',
    latin: 'Octopus cyanea',
    category: 'cephalopods',
    image: 'sf-octopus' as ImageKey,
    alt: 'Octopus on a tray of ice',
    note: 'Day octopus, cleaned and frozen whole or cooked. Tender when slow-cooked and grilled.',
    range: 'Frozen whole · Cooked',
    usage: 'Grilled tentacles, salads, takoyaki and braised dishes.',
    handling: [['Storage', FROZEN], ['Shelf life', '24 months frozen']],
    products: [
      P('133141', 'Octopus, Whole Cleaned', 'Frozen dressed', [['Form', 'Whole, cleaned, flower-shaped, IQF'], ['Size', '300–500 g · 500 g–1 kg · 1–2 kg'], ['Packing', '10 kg master carton']]),
      P('133171', 'Octopus, Cooked Whole', 'Cooked', [['Form', 'Boiled whole, IQF'], ['Size', '300–500 g · 500 g–1 kg'], ['Packing', '10 kg master carton']]),
    ],
  }),
  I({
    slug: 'squid-cuttlefish',
    name: 'Squid & Cuttlefish',
    local: 'Cumi & Sotong',
    latin: 'Uroteuthis duvaucelii, Sepia pharaonis',
    category: 'cephalopods',
    image: 'sf-squid' as ImageKey,
    alt: 'Fresh squid at a fish market, close',
    note: 'Indian squid and pharaoh cuttlefish, whole, cleaned or cut. Sorted by weight and frozen in blocks or individually.',
    range: 'Squid · Cuttlefish',
    usage: 'Rings for frying, tubes for stuffing and grilling, cuttlefish fillets for stir-fries.',
    handling: [['Storage', FROZEN], ['Shelf life', '24 months frozen']],
    products: [
      P('137241', 'Cuttlefish, Whole Cleaned', 'Frozen dressed', [['Local name', 'Sotong'], ['Form', 'Whole cleaned, skinless, IQF'], ['Size', '100–200 g · 200–300 g · 300–500 g'], ['Packing', '10 kg master carton']]),
      P('137251', 'Cuttlefish Fillet', 'Fillet', [['Local name', 'Sotong'], ['Form', 'Skinless fillet, IQF'], ['Size', '50–100 g · 100–200 g'], ['Packing', '10 × 1 kg']]),
      P('137631', 'Squid, Whole Round', 'Frozen whole', [['Local name', 'Cumi'], ['Form', 'Whole round, block or IQF'], ['Size', 'U5 · 5/10 · 10/20 · 20/40 pcs/kg'], ['Packing', '10 × 1 kg or 2 × 10 kg block']]),
      P('137641', 'Squid Tubes, Cleaned', 'Frozen dressed', [['Local name', 'Cumi'], ['Form', 'Tube, cleaned, skin-off, IQF'], ['Size', 'U5 · U7 · U10 (inch)'], ['Packing', '10 × 1 kg']]),
      P('137661', 'Squid Rings', 'Portion', [['Local name', 'Cumi'], ['Form', 'Rings, 1–1.5 cm, IQF'], ['Size', 'Ring diameter 4–7 cm'], ['Packing', '10 × 1 kg']]),
    ],
  }),

  /* ── Dried marine products ── */
  I({
    slug: 'fish-maw',
    name: 'Fish Maw',
    local: 'Gelembung Ikan',
    category: 'dried',
    image: 'sf-fish-maw' as ImageKey,
    alt: 'Dried fish pieces on a woven tray',
    note: 'Sun-dried swim bladders, sorted by size and thickness. Valued in Chinese soups and braised dishes.',
    range: 'Grade A · Grade B',
    usage: 'Soaked or puffed for soups, braises and festive dishes.',
    handling: [['Storage', 'Cool, dry and away from light'], ['Shelf life', '24 months']],
    products: [
      P('142181', 'Fish Maw, Grade A', 'Dried', [['Form', 'Sun-dried, whole'], ['Grade', 'A: thick, clear, even colour'], ['Size', '50–100 g · 100 g up per piece'], ['Packing', 'Lined carton, 10 kg']]),
      P('142182', 'Fish Maw, Grade B', 'Dried', [['Form', 'Sun-dried, whole'], ['Grade', 'B: thinner, minor marks'], ['Size', '20–50 g per piece'], ['Packing', 'Lined carton, 10 kg']]),
    ],
  }),
  I({
    slug: 'sea-cucumber',
    name: 'Sea Cucumber',
    local: 'Teripang',
    category: 'dried',
    image: 'sf-sea-cucumber' as ImageKey,
    alt: 'Hand holding a sea cucumber over seawater',
    note: 'Dried sea cucumber by type and size, from the prized teripang gosok to stonefish and curryfish. Boiled, cleaned and dried until hard.',
    range: 'Gosok · Duri · Lotong · Batu · Gamat',
    usage: 'Soaked and braised for Chinese banquet dishes, soups and festive menus.',
    handling: [['Storage', 'Cool, dry and away from light'], ['Shelf life', '24 months'], ['Moisture', '10–12% (fully dried)']],
    products: [
      P('145181', 'Blackfish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Lotong'], ['Form', 'Dried, gutted'], ['Size', '10–20 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145182', 'Blackfish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Lotong'], ['Form', 'Dried, gutted'], ['Size', '20–40 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145381', 'Curryfish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Gamat'], ['Form', 'Dried, gutted'], ['Size', '5–10 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145382', 'Curryfish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Gamat'], ['Form', 'Dried, gutted'], ['Size', '10–20 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145581', 'Sandfish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Gosok (Pasir)'], ['Form', 'Dried, skin rubbed clean'], ['Size', '10–20 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145582', 'Sandfish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Gosok (Pasir)'], ['Form', 'Dried, skin rubbed clean'], ['Size', '20–40 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145583', 'Sandfish Sea Cucumber, Small', 'Dried', [['Local name', 'Teripang Gosok (Pasir)'], ['Form', 'Dried, skin rubbed clean'], ['Size', '40–80 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145681', 'Spiky Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Duri'], ['Form', 'Dried, gutted'], ['Size', '20–40 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145682', 'Spiky Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Duri'], ['Form', 'Dried, gutted'], ['Size', '40–80 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145881', 'Stonefish Sea Cucumber, Large', 'Dried', [['Local name', 'Teripang Batu (Balibi)'], ['Form', 'Dried, gutted'], ['Size', '10–20 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
      P('145882', 'Stonefish Sea Cucumber, Medium', 'Dried', [['Local name', 'Teripang Batu (Balibi)'], ['Form', 'Dried, gutted'], ['Size', '20–40 pcs/kg'], ['Packing', 'Lined carton, 10 kg']]),
    ],
  }),
  I({
    slug: 'shark-fin',
    name: 'Shark Fin',
    local: 'Sirip Hiu (Hisit)',
    category: 'dried',
    image: 'sf-shark-fin' as ImageKey,
    alt: 'Seafood drying in the sun at a market',
    note: 'Dried fins, sorted by size and cut. Sold to restaurants and dried-goods traders.',
    range: 'Dried whole',
    usage: 'Soaked and simmered for soups and braised dishes.',
    handling: [['Storage', 'Cool, dry and away from light'], ['Shelf life', '24 months']],
    products: [
      P('147181', 'Shark Fin, Dried Whole', 'Dried', [['Form', 'Dried, skin-on'], ['Size', '10–15 cm · 15–20 cm · 20 cm up'], ['Packing', 'Lined carton, 10 kg']]),
    ],
  }),
];
