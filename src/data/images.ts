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
 *   purpose-generations  dua anak berlari di padang rumput senja ← isi cocok
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
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof images;

export const getImageFor = (key?: ImageKey | null): ImageMetadata | null =>
  key ? images[key] : null;
