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
import cinnamonQuills from '../assets/images/cinnamon-quills.jpg';
import heroRoseDew from '../assets/images/hero-rose-dew.jpg';
import heroIrisBlue from '../assets/images/hero-iris-blue.jpg';
import heroOrangeBloom from '../assets/images/hero-orange-bloom.jpg';
import heroOrchidDew from '../assets/images/hero-orchid-dew.jpg';
import heroPlumeria from '../assets/images/hero-plumeria.jpg';
import heroDaisyDew from '../assets/images/hero-daisy-dew.jpg';
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
import vanillaBeans from '../assets/images/vanilla-beans.jpg';
import vanillaBeansWhite from '../assets/images/vanilla-beans-white.jpg';
import jasmineGrandiflorumFlowers from '../assets/images/jasmine-grandiflorum-flowers.jpg';
import jasmineSambac from '../assets/images/jasmine-sambac.jpg';
import lavenderFlowers from '../assets/images/lavender-flowers.jpg';
import roseBush from '../assets/images/rose-bush.jpg';
import cardamomPods from '../assets/images/cardamom-pods.jpg';
import corianderSeeds from '../assets/images/coriander-seeds.jpg';
import sandalwoodChips from '../assets/images/sandalwood-chips.jpg';
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
import chiliSacks from '../assets/images/chili-sacks.jpg';
import seedSpoons from '../assets/images/seed-spoons.jpg';
import labWomanHall from '../assets/images/lab-woman-hall.jpg';
import hillsLakeView from '../assets/images/hills-lake-view.jpg';
import farmersStanding from '../assets/images/farmers-standing.jpg';
import greenHillsTea from '../assets/images/green-hills-tea.jpg';
import plantationRows from '../assets/images/plantation-rows.jpg';
import terracesMist from '../assets/images/terraces-mist.jpg';
import labTechnician from '../assets/images/lab-technician.jpg';
import labBalanceFlask from '../assets/images/lab-balance-flask.jpg';
import labScientistVial from '../assets/images/lab-scientist-vial.jpg';
import labGlassware from '../assets/images/lab-glassware.jpg';
import oilOnPalm from '../assets/images/oil-on-palm.jpg';
import brownBottlesClose from '../assets/images/brown-bottles-close.jpg';
import spiceMarketTrays from '../assets/images/spice-market-trays.jpg';
import clovesScattered from '../assets/images/cloves-scattered.jpg';
import lemongrassBasket from '../assets/images/lemongrass-basket.jpg';
import fineFragranceBottles from '../assets/images/fine-fragrance-bottles.jpg';
import deskLaptop from '../assets/images/desk-laptop.jpg';
import spiceSacks from '../assets/images/spice-sacks.jpg';
import clovesBowl from '../assets/images/cloves-bowl.jpg';
import warehouseBoxes from '../assets/images/warehouse-boxes.jpg';
import stationeryFlatlay from '../assets/images/stationery-flatlay.jpg';
import notebookPens from '../assets/images/notebook-pens.jpg';
import tobaHills from '../assets/images/toba-hills.jpg';
import jungleWaterfall from '../assets/images/jungle-waterfall.jpg';
import teaHillsMist from '../assets/images/tea-hills-mist.jpg';
import mistyPalmForest from '../assets/images/misty-palm-forest.jpg';
import growersField from '../assets/images/growers-field.jpg';
import teaPicker from '../assets/images/tea-picker.jpg';
import nutmegInHand from '../assets/images/nutmeg-in-hand.jpg';
import grainDrying from '../assets/images/grain-drying.jpg';
import farmerPortrait from '../assets/images/farmer-portrait.jpg';
import resinBarkClose from '../assets/images/resin-bark-close.jpg';
import copperDistillery from '../assets/images/copper-distillery.jpg';
import chiliPickers from '../assets/images/chili-pickers.jpg';
import starAniseMace from '../assets/images/star-anise-mace.jpg';
import herbBasket from '../assets/images/herb-basket.jpg';
import woodSlice from '../assets/images/wood-slice.jpg';
import greenLeaves from '../assets/images/green-leaves.jpg';
import cocoaPod from '../assets/images/cocoa-pod.jpg';
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
 *   cinnamon-quills      tumpukan gulungan kulit kayu manis, close-up tajam, latar gelap  [stock-photos/cinnamon/beatsnoop-2eAvVfuJ64]  (standar kualitas foto pemilik)
 *   hero-rose-dew        makro mawar merah muda berembun  [stock-photos/flowers/9241044]  (standar kualitas foto pemilik)
 *   hero-iris-blue  iris biru berembun, makro (hero We Are Adhiloka dan halaman About)  [stock-photos/hero-2026-11-18/pexels-38261003.jpg, Pexels License]  (standar kualitas foto pemilik, 18 Nov 2026)
 *   hero-orange-bloom  bunga jingga cerah dari dekat (hero Our Expertise dan halaman Technology)  [stock-photos/hero-2026-11-18/pexels-35487880.jpg, Pexels License]  (standar kualitas foto pemilik, 18 Nov 2026)
 *   hero-orchid-dew  anggrek ungu berembun, makro (hero Perfumery dan halaman Perfumery)  [stock-photos/hero-2026-11-18/pexels-35908854.jpg, Pexels License]  (standar kualitas foto pemilik, 18 Nov 2026)
 *   hero-plumeria  kamboja warna-warni di langit biru (hero The Source Collection dan Ingredient Catalog)  [stock-photos/hero-2026-11-18/pexels-24845909.jpg, Pexels License]  (standar kualitas foto pemilik, 18 Nov 2026)
 *   hero-daisy-dew  bunga kuning berembun di latar hijau (hero Growing Together dan Our Purpose)  [stock-photos/hero-2026-11-18/pexels-40650966.jpg, Pexels License]  (standar kualitas foto pemilik, 18 Nov 2026)
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
 *   vanilla-beans      vanilla-beans-bundle-unsplash-fIGw-jVGy5g.jpg  [Unsplash License] (Vanilla Planifolia)
 *   vanilla-beans-white  vanilla-beans-two-white-unsplash-GA6WtJ7DtSo.jpg  [Unsplash License] (Vanilla Tahitensis)
 *   jasmine-grandiflorum-flowers  jasmine-white-flowers-unsplash--cF4m5LEmlA.jpg  [Unsplash License] (Jasmine Grandiflorum)
 *   jasmine-sambac     jasmine-sambac-bud-unsplash-Zqai2COyXBw.jpg  [Unsplash License] (Jasmine Sambac)
 *   lavender-flowers   lavender-bed-closeup-unsplash-bIHJ4oxQlYs.jpg  [Unsplash License] (Lavender)
 *   rose-bush          pink-roses-bush-unsplash--pldRipVgx4.jpg  [Unsplash License] (Rose)
 *   cardamom-pods      cardamom-pods-split-unsplash-bF404j83DH0.jpg  [Unsplash License] (Cardamom)
 *   coriander-seeds    coriander-seeds-bowl-unsplash-nOyjlj-dse0.jpg  [Unsplash License] (Coriander)
 *   sandalwood-chips   sandalwood-chips-unsplash-iOx1F024kXk.jpg  [Unsplash License] (Sandalwood)
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
 * 15 Nov 2026, satu foto satu konteks (pemilik): foto baru untuk konteks yang dulu berbagi foto.
 * Rumah tiap foto: PHOTOS.md (node tools/photo-usage.mjs).
 *   chili-sacks  karung goni berisi cabai kering dan rempah (keluarga Spices)  [stock-photos/spices/pexels-18620484.jpg, Pexels License]
 *   seed-spoons  sendok berisi biji dan rempah kering di meja gelap (berita katalog online)  [stock-photos/spices/pexels-5669187.jpg, Pexels License]
 *   lab-woman-hall  peneliti perempuan bekerja di laboratorium terang (Working at Adhiloka)  [stock-photos/lab/unsplash-8yS04veb1TQ.jpg, Unsplash License]
 *   hills-lake-view  perbukitan hijau di tepi danau dari ketinggian (banner Our Purpose)  [stock-photos/indonesia/pexels-15901135.jpg, Pexels License]
 *   farmers-standing  tiga petani berdiri di kebun di bawah pohon (Close to the Source)  [stock-photos/indonesia/pexels-5849182.jpg, Pexels License]
 *   green-hills-tea  bukit kebun teh hijau di bawah langit cerah (penutup Sustainability)  [stock-photos/indonesia/pexels-39904893.jpg, Pexels License]
 *   plantation-rows  barisan kebun di lereng bukit (wilayah Sulawesi)  [stock-photos/indonesia/pexels-9771342.jpg, Pexels License]
 *   terraces-mist  sawah berundak di lereng berkabut (berita Where Our Ingredients Begin)  [stock-photos/indonesia/unsplash-PeRt3uMmjYM.jpg, Unsplash License]
 * 15 Nov 2026, satu foto satu konteks (pemilik): foto baru untuk konteks yang dulu berbagi foto.
 * Rumah tiap foto: PHOTOS.md (node tools/photo-usage.mjs).
 *   lab-technician  teknisi berjas lab dan penutup rambut bekerja di meja laboratorium (Working at Adhiloka)  [stock-photos/lab/pexels-15831836.jpg, Pexels License]
 *   lab-balance-flask  tangan bersarung meletakkan labu di neraca analitik (Areas of Work)  [stock-photos/lab/pexels-9629662.jpg, Pexels License]
 *   lab-scientist-vial  peneliti memeriksa vial di laboratorium (Co-development)  [stock-photos/lab/pexels-8863037.jpg, Pexels License]
 *   lab-glassware  gelas ukur dan tabung laboratorium berisi cairan merah (Research & Education)  [stock-photos/lab/pexels-9629701.jpg, Pexels License]
 *   oil-on-palm  minyak diteteskan dari botol amber ke telapak tangan (berita From Raw Material)  [stock-photos/perfumery/unsplash-0MoF-Fe0w0A.jpg, Unsplash License]
 *   brown-bottles-close  botol kaca coklat kecil, dekat (pita unduh katalog di hub Ingredients)  [stock-photos/bottles/close-up-shot-of-brown-bottles-6694146.jpg, Pexels License]
 *   spice-market-trays  deretan nampan rempah dan biji kering (berita katalog online)  [stock-photos/spices/pexels-5332489.jpg, Pexels License]
 *   cloves-scattered  cengkih kering berserakan di permukaan abu (slider Who We Are)  [stock-photos/spices/pexels-12142752.jpg, Pexels License]
 *   lemongrass-basket  batang serai di keranjang bersama sayuran hijau (keluarga Citrus)  [stock-photos/spices/pexels-37091865.jpg, Pexels License]
 * 15 Nov 2026, satu foto satu konteks (pemilik): foto baru untuk konteks yang dulu berbagi foto.
 * Rumah tiap foto: PHOTOS.md (node tools/photo-usage.mjs).
 *   fine-fragrance-bottles  deretan botol parfum kaca berisi parfum (Fine Fragrance)  [stock-photos/perfumery/unsplash--j6LLsAehUo.jpg, Unsplash License]
 *   desk-laptop  meja kerja putih dengan laptop dan tanaman (How to Apply)  [stock-photos/textures-and-business/pexels-8473795.jpg, Pexels License]
 *   spice-sacks  karung berisi rempah dan biji kering (What We Buy)  [stock-photos/markets/diverse-assortment-of-spices-at-market-31558746.jpg, Pexels License]
 *   cloves-bowl  cengkih kering di mangkuk keramik (What We Look For)  [stock-photos/clove/dry-cloves-in-a-brown-ceramic-bowl-8804297.jpg, Pexels License]
 *   warehouse-boxes  tumpukan kardus di gudang (Distribution)  [stock-photos/logistics/stacked-boxes-in-a-warehouse-10834810.jpg, Pexels License]
 *   stationery-flatlay  buku catatan, pena dan kartu di meja putih (Media Resources)  [stock-photos/textures-and-business/pexels-7657973.jpg, Pexels License]
 *   notebook-pens  buku catatan bergaris dan dua pena (Legal)  [stock-photos/textures-and-business/pexels-867482.jpg, Pexels License]
 *   toba-hills  bukit hijau di tepi danau besar (wilayah Sumatra)  [stock-photos/indonesia/pexels-33562774.jpg, Pexels License]
 *   jungle-waterfall  hutan hujan lebat dengan air terjun kecil (wilayah Kalimantan)  [stock-photos/indonesia/unsplash-VDPFEyIrAn0.jpg, Unsplash License]
 *   tea-hills-mist  kebun teh berbukit di bawah kabut (wilayah Sulawesi)  [stock-photos/indonesia/pexels-3848200.jpg, Pexels License]
 *   misty-palm-forest  hutan berkabut dengan pohon palem (wilayah Papua)  [stock-photos/indonesia/pexels-14023085.jpg, Pexels License]
 *   growers-field  dua petani berdiri di ladang dengan hasil panen (Partnerships)  [stock-photos/indonesia/pexels-15830193.jpg, Pexels License]
 *   tea-picker  pemetik teh bercaping di kebun (Continuity)  [stock-photos/indonesia/pexels-15275060.jpg, Pexels License]
 *   nutmeg-in-hand  buah pala terbelah di telapak tangan (Close to the Source)  [stock-photos/nutmeg/close-up-of-nutmeg-fruit-in-hand-39367487.jpg, Pexels License]
 *   grain-drying  petani perempuan meratakan hasil panen yang dijemur (berita The Rhythm of the Harvest)  [stock-photos/farmers/woman-in-white-top-2371826.jpg, Pexels License]
 *   farmer-portrait  petani tua bercaping tersenyum di sawah (kutipan People)  [stock-photos/indonesia/unsplash-6ySPcMiS_rg.jpg, Unsplash License]
 *   resin-bark-close  getah damar mengeras di kulit kayu, makro (berita Benzoin; bukan benzoin)  [stock-photos/resin/close-up-of-tree-resin-on-textured-bark-35963723.jpg, Pexels License]
 *   copper-distillery  alat suling tembaga di ruang bata (berita Patchouli)  [stock-photos/distillation/copper-distillation-equipment-in-rustic-setup-28792582.jpg, Pexels License]
 *   chili-pickers  dua petani bercaping memetik cabai (Become a Supplier)  [stock-photos/farmers/farmers-picking-chili-in-a-farm-12470180.jpg, Pexels License]
 *   star-anise-mace  adas bintang dan fuli di permukaan gelap (slider Who We Are)  [stock-photos/nutmeg/close-up-of-star-anise-and-mace-on-dark-surface-36745315.jpg, Pexels License]
 *   herb-basket  keranjang berisi daun herba segar di meja kayu (keluarga Herbal)  [stock-photos/botanical/unsplash-hyVPSa0DmEw.jpg, Unsplash License]
 *   wood-slice  potongan batang kayu (keluarga Woods)  [stock-photos/botanical/unsplash-2x-LQAMJ-YY.jpg, Unsplash License]
 *   green-leaves  daun hijau lebar, dekat (keluarga Leaf)  [stock-photos/botanical/pexels-36674428.jpg, Pexels License]
 *   cocoa-pod  buah kakao dan biji kakao (keluarga Gourmand)  [stock-photos/spices/cocoa-pod-beans-33662910.jpg, Pexels License]
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
  'cinnamon-quills': cinnamonQuills,
  'hero-rose-dew': heroRoseDew,
  'hero-iris-blue': heroIrisBlue,
  'hero-orange-bloom': heroOrangeBloom,
  'hero-orchid-dew': heroOrchidDew,
  'hero-plumeria': heroPlumeria,
  'hero-daisy-dew': heroDaisyDew,
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
  'vanilla-beans': vanillaBeans,
  'vanilla-beans-white': vanillaBeansWhite,
  'jasmine-grandiflorum-flowers': jasmineGrandiflorumFlowers,
  'jasmine-sambac': jasmineSambac,
  'lavender-flowers': lavenderFlowers,
  'rose-bush': roseBush,
  'cardamom-pods': cardamomPods,
  'coriander-seeds': corianderSeeds,
  'sandalwood-chips': sandalwoodChips,
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
  'chili-sacks': chiliSacks,
  'seed-spoons': seedSpoons,
  'lab-woman-hall': labWomanHall,
  'hills-lake-view': hillsLakeView,
  'farmers-standing': farmersStanding,
  'green-hills-tea': greenHillsTea,
  'plantation-rows': plantationRows,
  'terraces-mist': terracesMist,
  'lab-technician': labTechnician,
  'lab-balance-flask': labBalanceFlask,
  'lab-scientist-vial': labScientistVial,
  'lab-glassware': labGlassware,
  'oil-on-palm': oilOnPalm,
  'brown-bottles-close': brownBottlesClose,
  'spice-market-trays': spiceMarketTrays,
  'cloves-scattered': clovesScattered,
  'lemongrass-basket': lemongrassBasket,
  'fine-fragrance-bottles': fineFragranceBottles,
  'desk-laptop': deskLaptop,
  'spice-sacks': spiceSacks,
  'cloves-bowl': clovesBowl,
  'warehouse-boxes': warehouseBoxes,
  'stationery-flatlay': stationeryFlatlay,
  'notebook-pens': notebookPens,
  'toba-hills': tobaHills,
  'jungle-waterfall': jungleWaterfall,
  'tea-hills-mist': teaHillsMist,
  'misty-palm-forest': mistyPalmForest,
  'growers-field': growersField,
  'tea-picker': teaPicker,
  'nutmeg-in-hand': nutmegInHand,
  'grain-drying': grainDrying,
  'farmer-portrait': farmerPortrait,
  'resin-bark-close': resinBarkClose,
  'copper-distillery': copperDistillery,
  'chili-pickers': chiliPickers,
  'star-anise-mace': starAniseMace,
  'herb-basket': herbBasket,
  'wood-slice': woodSlice,
  'green-leaves': greenLeaves,
  'cocoa-pod': cocoaPod,
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof images;

export const getImageFor = (key?: ImageKey | null): ImageMetadata | null =>
  key ? images[key] : null;
