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
} satisfies Record<string, ImageMetadata>;

export type ImageKey = keyof typeof images;

export const getImageFor = (key?: ImageKey | null): ImageMetadata | null =>
  key ? images[key] : null;
