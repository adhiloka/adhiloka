import type { ImageMetadata } from 'astro';

import heroStillHall from '../assets/images/hero-still-hall.jpg';
import heroBenzoinTears from '../assets/images/hero-benzoin-tears.jpg';
import heroAgroforest from '../assets/images/hero-agroforest.jpg';
import heroPoster from '../assets/images/hero-poster.png';
import materialBenzoin from '../assets/images/material-benzoin.jpg';
import materialPatchouli from '../assets/images/material-patchouli.png';
import materialNutmeg from '../assets/images/material-nutmeg.jpg';
import materialGinger from '../assets/images/material-ginger.jpg';
import purposeGenerations from '../assets/images/purpose-generations.jpg';
import aboutTable from '../assets/images/pexels-gabby-k-5876531.jpg';
import aboutChick from '../assets/images/pexels-lukas-kaufmann-2160154225-37752061.jpg';
import fragranceResin from '../assets/images/fragrance-resin.jpg';
import fragrancePetal from '../assets/images/fragrance-petal.jpg';
import fragranceBloom from '../assets/images/fragrance-bloom.jpg';

/* Foto stok dari stock-photos/ (Pexels/Unsplash, bebas atribusi), dipasang 12 Nov 2026. */
import rainforestSunbeams from '../assets/images/rainforest-sunbeams.jpg';
import rainforestAerial from '../assets/images/rainforest-aerial.jpg';
import canopyFromBelow from '../assets/images/canopy-from-below.jpg';
import mistyHills from '../assets/images/misty-hills.jpg';
import teaHillsDusk from '../assets/images/tea-hills-dusk.jpg';
import riceTerraces from '../assets/images/rice-terraces.jpg';
import ricePlanting from '../assets/images/rice-planting.jpg';
import jungleStream from '../assets/images/jungle-stream.jpg';
import resinOnBark from '../assets/images/resin-on-bark.jpg';
import resinPieces from '../assets/images/resin-pieces.jpg';
import resinBowl from '../assets/images/resin-bowl.jpg';
import cinnamonSticks from '../assets/images/cinnamon-sticks.jpg';
import clovesDried from '../assets/images/cloves-dried.jpg';
import clovesInHand from '../assets/images/cloves-in-hand.jpg';
import clovesSorting from '../assets/images/cloves-sorting.jpg';
import nutmegMace from '../assets/images/nutmeg-mace.jpg';
import nutmegOnTree from '../assets/images/nutmeg-on-tree.jpg';
import grassBlades from '../assets/images/grass-blades.jpg';
import spicesSpoons from '../assets/images/spices-spoons.jpg';
import whiteBlossom from '../assets/images/white-blossom.jpg';
import perfumerDropper from '../assets/images/perfumer-dropper.jpg';
import perfumeWorkshop from '../assets/images/perfume-workshop.jpg';
import vialsDriedFlowers from '../assets/images/vials-dried-flowers.jpg';
import smellingFlowers from '../assets/images/smelling-flowers.jpg';
import amberBottles from '../assets/images/amber-bottles.jpg';
import amberDropper from '../assets/images/amber-dropper.jpg';
import amberBottleShelf from '../assets/images/amber-bottle-shelf.jpg';
import labFlashPoint from '../assets/images/lab-flash-point.jpg';
import copperStill from '../assets/images/copper-still.jpg';
import stillFire from '../assets/images/still-fire.jpg';
import cargoShip from '../assets/images/cargo-ship.jpg';
import burlapSacks from '../assets/images/burlap-sacks.jpg';

/* Pengganti foto yang salah isi, 13 Nov 2026. Dua foto Wikimedia berlisensi
   CC BY 3.0 (Forest & Kim Starr); kreditnya wajib dan tercantum di /legal/. */
import patchouliLeaves from '../assets/images/patchouli-leaves.jpg';
import vetiverClump from '../assets/images/vetiver-clump.jpg';
import labVials from '../assets/images/lab-vials.jpg';
import harvestSorting from '../assets/images/harvest-sorting.jpg';

/* Hero beranda, 13 Nov 2026 (pemilik: foto Our Expertise tidak profesional,
   foto The Source Collection kurang menarik). Pexels, bebas atribusi. */
import botanicalJars from '../assets/images/botanical-jars.jpg';
import spiceBox from '../assets/images/spice-box.jpg';
import labelledBottles from '../assets/images/labelled-bottles.jpg';

/* Foto bahan katalog baru, 13 Nov 2026 (stock-photos/, Pexels dan Wikimedia
   Commons; yang CC BY/CC BY-SA wajib kredit, tercantum di /legal/). */
import blackPeppercorns from '../assets/images/black-peppercorns.jpg';
import whitePeppercorn from '../assets/images/white-peppercorn.jpg';
import fenugreekSeeds from '../assets/images/fenugreek-seeds.jpg';
import turmericRoots from '../assets/images/turmeric-roots.jpg';
import betelLeaves from '../assets/images/betel-leaves.jpg';
import basilPlant from '../assets/images/basil-plant.jpg';
import teaLeaves from '../assets/images/tea-leaves.jpg';
import coffeeCherries from '../assets/images/coffee-cherries.jpg';
import coffeeRoasted from '../assets/images/coffee-roasted.jpg';
import cocoaBeans from '../assets/images/cocoa-beans.jpg';
import tamarindPods from '../assets/images/tamarind-pods.jpg';
import lemongrassField from '../assets/images/lemongrass-field.jpg';
import gingerFresh from '../assets/images/ginger-fresh.jpg';
import gingerRoots from '../assets/images/ginger-roots.jpg';
import driedBark from '../assets/images/dried-bark.jpg';
import cubebVine from '../assets/images/cubeb-vine.jpg';
import canangaFlowers from '../assets/images/cananga-flowers.jpg';
import ylangFlowers from '../assets/images/ylang-flowers.jpg';
import citronellaGrass from '../assets/images/citronella-grass.jpg';
import kencurDried from '../assets/images/kencur-dried.jpg';
import temulawakPlant from '../assets/images/temulawak-plant.jpg';
import rhubarbPlant from '../assets/images/rhubarb-plant.jpg';
import cajeputTree from '../assets/images/cajeput-tree.jpg';
import homalomenaPlant from '../assets/images/homalomena-plant.jpg';
import dipterocarpTree from '../assets/images/dipterocarp-tree.jpg';
/* 13 Nov 2026 (koreksi pemilik): enam foto bahan yang salah atau amatir diganti. */
import whitePepperBowl from '../assets/images/white-pepper-bowl.jpg';
import fenugreekJar from '../assets/images/fenugreek-jar.jpg';
import goldenSap from '../assets/images/golden-sap.jpg';
import cubebDried from '../assets/images/cubeb-dried.jpg';
import homalomenaLeaves from '../assets/images/homalomena-leaves.jpg';
import reedDiffuserHome from '../assets/images/reed-diffuser-home.jpg';
import pepperHarvestHands from '../assets/images/pepper-harvest-hands.jpg';
import taggedSampleBottles from '../assets/images/tagged-sample-bottles.jpg';
import temulawakRhizomes from '../assets/images/temulawak-rhizomes.jpg';
import palmarosaGrass from '../assets/images/palmarosa-grass.jpg';
import kaffirLimeLeaves from '../assets/images/kaffir-lime-leaves.jpg';

/* Satu-satunya tempat berkas gambar dipetakan ke kunci yang dipakai data.
 *
 * PERINGATAN: kunci di bawah ini mewarisi nama berkas dari bundle desain, dan
 * nama itu tidak menggambarkan isi fotonya. Semuanya stok botani; tidak satu
 * pun menunjukkan pabrik, stasiun, atau orang. Yang sebenarnya terlihat:
 *
 *   hero-still-hall      mawar merah muda, makro
 *   hero-benzoin-tears   batang kayu manis / kasia
 *   hero-agroforest      anak-anak berlari di kebun berbunga — TIDAK DIPAKAI
 *   material-benzoin     tetes damar benzoin        ← satu-satunya yang cocok
 *   material-patchouli   daun hijau berbulu, berembun
 *   fragrance-petal      kelopak jingga, makro
 *   fragrance-resin      potongan rimpang kering
 *   fragrance-bloom      kembang sepatu, makro
 *   purpose-generations  dua anak berlari di padang rumput senja — TIDAK DIPAKAI sejak 14 Nov 2026; dulu
 *                        dengan pemakaiannya (pita "Our purpose")
 *   about-chick          anak ayam kuning di rumput di antara bunga buttercup
 *   about-table          tiga orang mengobrol di meja makan yang tertata —
 *                        piring, gelas anggur, hidangan. Kuncinya diberi nama
 *                        menurut isinya, bukan menurut nama berkas unduhannya.
 *
 * Sejak 12 Nov 2026 ditambah foto dari stock-photos/ (isi foto dulu, lalu
 * sumbernya). Orang di foto bukan staf/petani/pemasok Adhiloka dan damar di
 * resin-* bukan benzoin Sumatra; keterangannya dijaga netral.
 *
 *   rainforest-sunbeams  sinar matahari menembus pohon tinggi hutan hujan  [stock-photos/forest/14440966]
 *   rainforest-aerial    hutan hujan dari udara  [stock-photos/forest/7867865]
 *   canopy-from-below    tajuk pohon dilihat dari bawah  [stock-photos/forest/35459271]
 *   misty-hills          bukit hijau berkabut  [stock-photos/indonesia/37579117]
 *   tea-hills-dusk       bukit hijau di kaki gunung saat senja  [stock-photos/indonesia/31986308]
 *   rice-terraces        sawah berundak dari udara  [stock-photos/indonesia/36810327]
 *   rice-planting        orang menanam padi  [stock-photos/indonesia/unsplash-Wft59e9QNhc]
 *   jungle-stream        sungai kecil di hutan bercahaya  [stock-photos/indonesia/unsplash-Fds0AacDe90]
 *   resin-on-bark        damar amber di kulit pohon (bukan benzoin)  [stock-photos/resin/unsplash-pqY-wx1_lk0]
 *   resin-pieces         bongkah damar amber, makro (bukan benzoin)  [stock-photos/resin/unsplash-u37SOLQkxfw]
 *   resin-bowl           butir damar amber di mangkuk kayu (bukan benzoin)  [stock-photos/resin/unsplash-GpooiAnoCeE]
 *   cinnamon-sticks      batang kayu manis diikat (jenis tak diketahui)  [stock-photos/cinnamon/15486150]
 *   cloves-dried         cengkih kering, makro  [stock-photos/clove/11000777]
 *   cloves-in-hand       cengkih kering di telapak tangan  [stock-photos/clove/8804299]
 *   cloves-sorting       cengkih disortir di rak jemur (bukan petani Adhiloka)  [stock-photos/clove/40319393]
 *   nutmeg-mace          buah pala terbelah dengan fuli merah  [stock-photos/nutmeg/13093699]
 *   nutmeg-on-tree       buah pala di pohon  [stock-photos/nutmeg/24268416]
 *   grass-blades         daun rumput tegak, makro (dipakai untuk vetiver)  [stock-photos/botanical/37969527]
 *   spices-spoons        rempah utuh di sendok kayu  [stock-photos/spices/68563]
 *   white-blossom        bunga putih, makro  [stock-photos/botanical/32316183]
 *   perfumer-dropper     perfumer meracik dengan pipet (bukan staf Adhiloka)  [stock-photos/perfumery/8450122]
 *   perfume-workshop     meja racik parfum dari atas  [stock-photos/perfumery/8450125]
 *   vials-dried-flowers  bunga kering dalam botol kaca  [stock-photos/perfumery/8450212]
 *   smelling-flowers     mencium segenggam bunga kering  [stock-photos/perfumery/unsplash-UOT38o_Y79I]
 *   amber-bottles        dua botol kaca amber  [stock-photos/perfumery/11560696]
 *   amber-dropper        minyak diteteskan ke botol amber  [stock-photos/perfumery/4021770]
 *   amber-bottle-shelf   botol amber di rak  [stock-photos/bottles/9628834]
 *   lab-flash-point      alat uji titik nyala Pensky-Martens  [stock-photos/lab/37302633]
 *   copper-still         alat suling tembaga  [stock-photos/lab/28792576]
 *   still-fire           tungku api di bawah ketel suling tradisional  [stock-photos/lab/35105788]
 *   cargo-ship           kapal kontainer di laut saat senja  [stock-photos/logistics/262353]
 *   burlap-sacks         tumpukan kain karung goni  [stock-photos/logistics/unsplash-ERB2nH1Jz3U]
 *
 * 13 Nov 2026 (pemilik: masih banyak foto yang tidak sesuai):
 *   patchouli-leaves     daun nilam asli, Pogostemon cablin  [stock-photos/wikimedia/patchouli, Starr 070906-8832, CC BY 3.0]
 *   vetiver-clump        rumpun akar wangi, Chrysopogon zizanioides  [stock-photos/wikimedia/vetiver, Starr 090721-3248, CC BY 3.0]
 *   lab-vials            tangan bersarung memegang vial kaca  [stock-photos/perfumery/5922103]
 *   botanical-jars       toples kaca berisi bahan kering dan minyak kuning di meja marmer  [stock-photos/perfumery/glass-jars-botanicals-oil-8450519]
 *   spice-box            kotak kayu bersekat berisi kayu manis, jeruk kering, lada merah muda, adas bintang  [stock-photos/perfumery/29172136]
 *   labelled-bottles     tangan menata botol amber berlabel di meja marmer  [stock-photos/perfumery/8450361]
 *   harvest-sorting      TIDAK DIPAKAI sejak 13 Nov 2026: bapak tanpa baju rapi (pemilik)
 *   still-fire           TIDAK DIPAKAI sejak 13 Nov 2026: pria bertelanjang dada, tidak profesional (pemilik)
 *   harvest-sorting      petani menyortir hasil panen rimpang (bukan petani Adhiloka)  [stock-photos/markets/39932436]
 * 13 Nov 2026, foto bahan katalog baru (berkas sumber di stock-photos/):
 *   black-peppercorns  black-peppercorns-macro-8559086.jpg  [Pexels License, Frank Cone]
 *   white-peppercorn   white-peppercorn-delso.jpg  [CC BY-SA 4.0, Diego Delso]
 *   fenugreek-seeds    fenugreek-seeds-chandrakala-01.jpg  [CC BY-SA 4.0, சந்திரகலா (Chandrakala)]
 *   turmeric-roots     turmeric-roots-31346461.jpg  [Pexels License]
 *   betel-leaves       betel-leaves-40190512.jpg  [Pexels License]
 *   basil-plant        basil-plant-6133135.jpg  [Pexels License]
 *   tea-leaves         tea-plant-close-11669658.jpg  [Pexels License]
 *   coffee-cherries    arabica-coffee-cherries-30658799.jpg  [Pexels License]
 *   coffee-roasted     roasted-coffee-beans-30444143.jpg  [Pexels License]
 *   cocoa-beans        cocoa-beans-dry-32597040.jpg  [Pexels License]
 *   tamarind-pods      tamarind-pods-basket-11536825.jpg  [Pexels License]
 *   lemongrass-field   pexels-38004213.jpg  [Pexels License]
 *   ginger-fresh       pile-of-fresh-ginger-in-close-up-photography-7543128.jpg  [Pexels License]
 *   ginger-roots       roots-of-ginger-20234970.jpg  [Pexels License]
 *   dried-bark         dried-bark-for-herbal-tea-and-natural-remedies-36863456.jpg  [Pexels License]
 *   cubeb-vine         piper-cubeba-kenraiz-kz01.jpg  [CC BY-SA 4.0, Krzysztof Ziarnek, Kenraiz]
 *   cananga-flowers    cananga-odorata-prenn-02.jpg  [CC BY-SA 3.0, Prenn]
 *   ylang-flowers      cananga-odorata-starr-071024-0356.jpg  [CC BY 3.0, Forest and Kim Starr]
 *   citronella-grass   cymbopogon-nardus-steakley-DITSL.jpg  [CC BY-SA 3.0, James Steakley]
 *   kencur-dried       kaempferia-galanga-dried-sagisavas.jpg  [CC0, Fumikas Sagisavas]
 *   temulawak-plant    curcuma-zanthorrhiza-rahmatlahay-01.jpg  [CC BY-SA 4.0, Rahmatlahay]
 *   rhubarb-plant      rheum-officinale-salicyna-8064.jpg  [CC BY-SA 4.0, Salicyna]
 *   cajeput-tree       melaleuca-leucadendra-ayuwadala-1.jpg  [CC BY 4.0, Ayuwadala]
 *   homalomena-plant   homalomena-aromatica-medhijyoti.jpg  [CC BY 4.0, Medhi jyoti]
 *   dipterocarp-tree   dipterocarpus-turbinatus-anupsadi-3.jpg  [CC BY-SA 4.0, Anup Sadi]
 *   palmarosa-grass    cymbopogon-martini-upadhyay.jpg  [CC BY 4.0, Ravi Upadhyay]
 *   kaffir-lime-leaves daun-jeruk-purut-herusutimbul.jpg  [CC BY-SA 4.0, Herusutimbul]
 * 13 Nov 2026, pengganti (koreksi pemilik: foto bahan kurang cocok). Yang lama
 * (white-peppercorn, fenugreek-seeds, dipterocarp-tree, cubeb-vine,
 * homalomena-plant, temulawak-plant) tidak dipakai lagi; berkasnya tetap di repo:
 *   white-pepper-bowl  white-pepper-bowl-pexels-10902536.jpg  [Pexels License]
 *   fenugreek-jar      fenugreek-seeds-jar-pexels-35156984.jpg  [Pexels License]
 *   golden-sap         golden-sap-dripping-pexels-28343754.jpg  [Pexels License]
 *   cubeb-dried        piper-cubeba-dried-pannet.jpg  [CC BY-SA 4.0, Pannet]
 *   homalomena-leaves  homalomena-stang-1zz.jpg  [CC BY-SA 4.0, David J. Stang]
 *   temulawak-rhizomes tomulawa-curcuma-zanthorrhiza-03-jpg-commons-79e6369e.jpg  [CC BY-SA 4.0, Rahmatlahay]
 *   reed-diffuser-home reed-diffuser-home-pexels-7795650.jpg  [Pexels License] (Consumer Fragrance, ganti amber-bottles)
 *   pepper-harvest-hands  tangan memetik buah lada dari sulurnya, tegak  [stock-photos/spices/pexels-36292687, Pexels License]
 *   tagged-sample-bottles  tangan meraih botol sampel amber berlabel gantung (Connect/Contact, 15 Nov 2026)  [stock-photos/perfumery/pexels-8450361, Pexels License]
 *                         (kutipan beranda dan Our Purpose, ganti purpose-generations; pemilik, 14 Nov 2026)
 * Dilepas dari halaman: material-patchouli (tetes air di daun, bukan nilam),
 * grass-blades (rumput biasa), fragrance-resin (rimpang kering berlabel
 * resin), hero-benzoin-tears (kayu manis berlabel benzoin), about-table
 * (orang makan malam). Berkasnya tetap di repo.
 *
 * Caption di seluruh situs sudah disetel ke apa yang benar-benar terlihat.
 * Tempat yang butuh foto pabrik, stasiun, atau orang memakai pelat hatch
 * dengan keterangan foto yang dibutuhkan — itu keadaan yang sah di sistem
 * desain ini, bukan tambalan. Begitu fotografi sungguhan ada, daftarkan di
 * sini lalu pasang kunci `image` pada entri data yang captionnya menyebut
 * tempat. */
export const images = {
  'hero-still-hall': heroStillHall,
  'hero-benzoin-tears': heroBenzoinTears,
  'hero-agroforest': heroAgroforest,
  'hero-poster': heroPoster,
  /* Alias untuk berkas yang sama. `hero-poster` menamai perannya (bingkai
     pertama video hero); yang terlihat di dalamnya adalah tajuk pohon hijau
     dilihat dari bawah — persis foto yang diminta setiap keterangan
     "kemenyan agroforest canopy" di situs ini. Dua nama supaya data tidak
     perlu menyebut poster video di tempat yang bicara soal kebun. */
  'agroforest-canopy': heroPoster,
  'material-benzoin': materialBenzoin,
  'material-patchouli': materialPatchouli,
  'material-nutmeg': materialNutmeg,
  'material-ginger': materialGinger,
  'purpose-generations': purposeGenerations,
  'about-table': aboutTable,
  'about-chick': aboutChick,
  'fragrance-resin': fragranceResin,
  'fragrance-petal': fragrancePetal,
  /* Magenta di foto ini sangat jenuh dan melawan aturan sistem bahwa satu-satunya
     rona jenuh adalah emas antik. Dipakai hanya di satu blok; kalau terlihat
     menabrak palet, ganti dengan foto lain. */
  'fragrance-bloom': fragranceBloom,
  'rainforest-sunbeams': rainforestSunbeams,
  'rainforest-aerial': rainforestAerial,
  'canopy-from-below': canopyFromBelow,
  'misty-hills': mistyHills,
  'tea-hills-dusk': teaHillsDusk,
  'rice-terraces': riceTerraces,
  'rice-planting': ricePlanting,
  'jungle-stream': jungleStream,
  'resin-on-bark': resinOnBark,
  'resin-pieces': resinPieces,
  'resin-bowl': resinBowl,
  'cinnamon-sticks': cinnamonSticks,
  'cloves-dried': clovesDried,
  'cloves-in-hand': clovesInHand,
  'cloves-sorting': clovesSorting,
  'nutmeg-mace': nutmegMace,
  'nutmeg-on-tree': nutmegOnTree,
  'grass-blades': grassBlades,
  'spices-spoons': spicesSpoons,
  'white-blossom': whiteBlossom,
  'perfumer-dropper': perfumerDropper,
  'perfume-workshop': perfumeWorkshop,
  'vials-dried-flowers': vialsDriedFlowers,
  'smelling-flowers': smellingFlowers,
  'amber-bottles': amberBottles,
  'amber-dropper': amberDropper,
  'amber-bottle-shelf': amberBottleShelf,
  'lab-flash-point': labFlashPoint,
  'copper-still': copperStill,
  'still-fire': stillFire,
  'cargo-ship': cargoShip,
  'burlap-sacks': burlapSacks,
  'patchouli-leaves': patchouliLeaves,
  'vetiver-clump': vetiverClump,
  'lab-vials': labVials,
  'harvest-sorting': harvestSorting,
  'botanical-jars': botanicalJars,
  'spice-box': spiceBox,
  'labelled-bottles': labelledBottles,
  'palmarosa-grass': palmarosaGrass,
  'kaffir-lime-leaves': kaffirLimeLeaves,
  'black-peppercorns': blackPeppercorns,
  'white-peppercorn': whitePeppercorn,
  'fenugreek-seeds': fenugreekSeeds,
  'turmeric-roots': turmericRoots,
  'betel-leaves': betelLeaves,
  'basil-plant': basilPlant,
  'tea-leaves': teaLeaves,
  'coffee-cherries': coffeeCherries,
  'coffee-roasted': coffeeRoasted,
  'cocoa-beans': cocoaBeans,
  'tamarind-pods': tamarindPods,
  'lemongrass-field': lemongrassField,
  'ginger-fresh': gingerFresh,
  'ginger-roots': gingerRoots,
  'dried-bark': driedBark,
  'cubeb-vine': cubebVine,
  'cananga-flowers': canangaFlowers,
  'ylang-flowers': ylangFlowers,
  'citronella-grass': citronellaGrass,
  'kencur-dried': kencurDried,
  'temulawak-plant': temulawakPlant,
  'rhubarb-plant': rhubarbPlant,
  'cajeput-tree': cajeputTree,
  'homalomena-plant': homalomenaPlant,
  'dipterocarp-tree': dipterocarpTree,
  'white-pepper-bowl': whitePepperBowl,
  'fenugreek-jar': fenugreekJar,
  'golden-sap': goldenSap,
  'cubeb-dried': cubebDried,
  'homalomena-leaves': homalomenaLeaves,
  'temulawak-rhizomes': temulawakRhizomes,
  'reed-diffuser-home': reedDiffuserHome,
  'pepper-harvest-hands': pepperHarvestHands,
  'tagged-sample-bottles': taggedSampleBottles,
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof images;

export const getImageFor = (key?: ImageKey | null): ImageMetadata | null =>
  key ? images[key] : null;
