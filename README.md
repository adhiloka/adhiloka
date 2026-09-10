# Adhiloka — situs publik

Implementasi produksi dari prototipe Claude Design di `../project/Adhiloka v1 editorial.dc.html`.
Astro 7, statis sepenuhnya, tanpa framework UI.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # keluaran statis di dist/
npm run preview  # menyajikan dist/
```

## Isi

Enam menu, mengikuti susunan givaudan.com, robertet.com dan dsm-firmenich.com: tiap sub-item
punya halamannya sendiri, bukan anchor. Header memecah daftar ini tiga di kiri dan tiga di kanan
wordmark, jadi jumlahnya harus tetap genap.

| Jalur | Halaman |
| --- | --- |
| `/` | Beranda — hero karusel, empat bagian, Our specialty, Our purpose, Get in touch |
| `/about/` | Hub — pembuka, angka, lima kartu |
| `/about/our-business/` | Tiga kegiatan: sourcing & ekstraksi, pasokan bahan, perfumery |
| `/about/our-leadership/` | Jajaran pimpinan + kepemilikan dan tata kelola. **Namanya placeholder** |
| `/about/our-purpose/` | Pernyataan tujuan, empat kebiasaan, kutipan |
| `/about/our-history/` | Garis waktu delapan tonggak |
| `/about/our-locations/` | Enam situs: works, kantor, tiga stasiun pengumpul |
| `/perfumery/` | Hub — pembuka, angka, dua kartu |
| `/perfumery/fine-fragrance/` | Palet, bespoke, basis fungsional |
| `/perfumery/fragrance-innovation/` | Fraksinasi, kontrol analitik, riset berjalan |
| `/ingredients/` | Hub — pembuka, angka, empat kartu unggulan, dua kartu bagian |
| `/ingredients/catalog/` | Katalog 18 naturals, penyaring keluarga, laci spesifikasi |
| `/ingredients/technology/` | Empat rute ekstraksi, grading, laboratorium |
| `/sustainability/` | Hub — pembuka, angka, dua kartu |
| `/sustainability/people/` | Harga dasar, musim gagal, keterampilan |
| `/sustainability/responsible-sourcing/` | Rantai enam langkah, pembelian langsung, posisi lahan |
| `/media/` | Hub — tiga kabar terbaru, tiga kartu, kontak pers |
| `/media/news/` | Daftar kabar. **Isinya placeholder** |
| `/media/news/<slug>/` | Halaman artikel, dibangun dari `NEWS` |
| `/media/media-resources/` | Berkas unduhan + ketentuan pakai. **Tautannya placeholder** |
| `/media/social-media/` | Empat kanal resmi. **Handle-nya placeholder** |
| `/contact/` | Formulir permintaan + empat kantor |
| `/404` | Halaman tidak ditemukan |

Contact sengaja tanpa mega panel: ia tujuan, bukan bagian.

Rute lama `/our-story/`, `/fragrances/` dan `/raw-materials/` diarahkan lewat `redirects` di
`astro.config.mjs`, bukan dibiarkan jadi 404.

```
src/
  data/        materials.ts · site.ts · images.ts
    pages/     types · home · about · perfumery · ingredients · sustainability · media · contact
  components/  Header · SearchPanel · Footer · Hero · GetInTouch · FeaturedCard · Plate · Wordmark
               BackToTop · Interlude · Band · PageHero · Breadcrumb · SiblingNav · CardGrid
               StatRow · Pullquote · Timeline · PeopleGrid · LocationList · NewsList
               DownloadList · SocialGrid
  layouts/     BaseLayout.astro   (meta, JSON-LD, font, view transitions)
               PageLayout.astro   (kepala halaman + bilah saudara, dipakai 20 halaman dalam)
  pages/       index · contact · 404
               about/ · perfumery/ · ingredients/ · sustainability/ · media/
  scripts/     header · hero · get-in-touch · search · materials · contact-form · reveal · back-to-top
               split-lines · smooth-scroll · image-reveal · overture
  styles/      tokens.css (dari tokens/ bundle desain) · global.css
  assets/      gambar sumber; dioptimasi saat build
public/media/  hero.mp4
```

Semua teks halaman ada di `src/data/`. Menyunting kalimat tidak perlu menyentuh komponen.

## Setelan yang perlu diisi sebelum tayang

**1. Domain.** `astro.config.mjs` memakai `SITE_URL` bila ada, jika tidak `https://adhiloka.com`.
Nilai ini dipakai canonical URL, sitemap, dan Open Graph. Perbarui juga baris `Sitemap:` di
`public/robots.txt`.

**2. Formulir kontak.** Situs ini statis, jadi pengiriman ditangani layanan pihak ketiga.
Salin `.env.example` menjadi `.env`, buat access key gratis di [web3forms.com](https://web3forms.com),
lalu isi `PUBLIC_FORM_ACCESS_KEY`. Selama kosong, tombol kirim membuka klien email pengguna dan
halaman itu mengatakannya terus terang — tidak ada keadaan "terkirim" palsu.

**3. Tautan sosial.** `src/data/site.ts` → `SOCIAL` masih menunjuk ke beranda tiap platform.

**4. Naskah dan data yang masih placeholder.** Semuanya ditandai dengan komentar di berkasnya:

- `pages/about.ts` → `LEADERSHIP`: jabatannya nyata, namanya belum diisi.
- `pages/media.ts` → `NEWS`: enam kabar contoh; `RESOURCES`: tautan berkas belum ada;
  `CHANNELS`: handle sosial belum dibuat.

**5. Pustaka gambar tidak sesuai namanya.** Sebelas berkas di `src/assets/images/` adalah stok
botani generik, dan nama berkasnya tidak menggambarkan isinya — `hero-still-hall.jpg` sebenarnya
foto mawar, `hero-benzoin-tears.jpg` adalah kayu manis, `fragrance-petal.jpg` kelopak jingga.
Caption di seluruh situs sudah disetel ke apa yang benar-benar terlihat, dan setiap tempat yang
butuh foto pabrik, stasiun, atau orang memakai pelat hatch dengan keterangan foto yang dibutuhkan.
Setelah fotografi sungguhan tersedia, daftarkan di `src/data/images.ts` dan pasang kunci `image`
pada entri yang captionnya menyebut tempat.

## Keputusan yang perlu diketahui

**Dua keluarga huruf, di-host sendiri.** EB Garamond memikul semua judul; Public Sans memikul
teks dan antarmuka. Keduanya ditarik lewat Fonts API Astro (`fonts` di `astro.config.mjs`), bukan
`@import` ke Google Fonts — berkasnya ikut ke `dist/`, di-preload, dan punya fallback yang
metrik-nya disesuaikan. Tiga berkas, 74 kB.

Marcellus dibuang. Ia hanya punya satu berat dan tanpa italic, sehingga nama Latin dimiringkan
secara palsu dan judul hero ditebalkan secara palsu oleh peramban. EB Garamond punya italic asli
dan bertahan di teks panjang.

**Gambar dioptimasi saat build.** Aset mentah berjumlah sekitar 100 MB. `astro:assets` menghasilkan
WebP berukuran ganda: foto hero 4,2 MB keluar sebagai 59–325 kB tergantung lebar layar. Beranda
produksi memuat sekitar 350 kB dalam 11 permintaan; JavaScript-nya 16 kB terkirim.

**Video hero diunduh bersyarat.** Berkasnya 11,5 MB dan tidak bisa dikompres di sini. `src`-nya
sengaja kosong di HTML; `src/scripts/hero.ts` baru memasangnya kalau layar ≥ 600 px, koneksi tidak
dalam mode hemat data, dan pengguna tidak meminta gerak dikurangi. Selain itu yang tampil adalah
poster WebP responsif. **Ini yang paling layak dikerjakan berikutnya** — sekali transcode memangkas
berkasnya sekitar 80%:

```bash
ffmpeg -i public/media/hero.mp4 -vf "scale=1600:-2" -c:v libx264 -crf 30 -preset slow -an -movflags +faststart public/media/hero-min.mp4
```

Lalu ganti `data-src` di `src/components/Hero.astro`. Menambah varian WebM/AV1 lebih hemat lagi.

**Foto masih pengganti.** Bundle desain hanya menyertakan lima foto; slot lain memakai pelat hatch
`Plate` dengan keterangan huruf kecil yang menjelaskan foto apa yang seharusnya ada di situ
(`distillation hall, Medan works`, `tapper at the incision, Tapanuli`). Keterangan itu sengaja
dipertahankan: ia menjadi daftar pemotretan. Untuk memasang foto asli, taruh berkasnya di
`src/assets/images/`, daftarkan di `src/data/images.ts`, lalu berikan `image` pada data terkait.

**Tidak ada berkas logo.** Wordmark disusun dari tipografi — cincin, nama berjarak huruf lebar, dan
garis GROUP (`src/components/Wordmark.astro`), persis seperti pada desain.

## Yang diperbaiki dari prototipe

Rekreasinya mengikuti desain dari ukuran, warna, sampai kurva gerak. Yang berbeda, dan alasannya:

- **Navigasi jadi tautan sungguhan.** Prototipe memakai `<a href="#">` dengan state klien untuk
  semua rute. Sekarang lima halaman asli dengan URL, tombol maju/mundur, dan sitemap. Perpindahannya
  tetap memudar lewat kurtin ivory, kini digerakkan View Transitions.
- **Fokus papan ketik terlihat.** Prototipe tidak punya indikator fokus sama sekali. Ditambah, plus
  tautan lewati-ke-konten.
- **Laci pencarian benar-benar mencari.** Di desain kolomnya hiasan. Sekarang menyaring indeks statis
  berisi 18 material dan enam bagian halaman, lengkap dengan pengumuman jumlah hasil untuk pembaca layar.
- **Laci material bisa ditautkan.** `/ingredients/catalog/#patchouli` membukanya langsung; menutup
  mengembalikan URL. Ada jebakan fokus, Escape, dan fokus kembali ke kartu asal.
- **Penyaring tersimpan di URL.** `?family=spice` bisa dibagikan.
- **Formulir memvalidasi dan mengirim.** Ada pesan galat per kolom, `aria-invalid`, keadaan mengirim,
  keadaan gagal, dan perangkap bot. Tautan dari laci material mengisi kolom Brief lebih dulu.
- **Kontras dinaikkan pada teks kecil.** Emas `--acc` dipertahankan untuk angka besar dan hover;
  `--acc-text` yang lebih gelap dipakai untuk eyebrow dan label agar lolos WCAG AA. Empat halaman
  bersih; teks header di atas video hero mengandalkan bayangan seperti pada desain.
- **Sasaran sentuh 24 px.** Titik hero tetap terlihat 5–6 px tetapi area kliknya penuh.
- **Katalog dua kolom di ponsel.** Satu kolom membuat halaman ini sepanjang 9.600 px; sekarang separuhnya.
- **`prefers-reduced-motion` dihormati.** Ken Burns, reveal, kurtin, dan autoplay video berhenti.
- **Garis bawah "Discover" di hero disamakan** dengan tautan sejenis lainnya: terlihat saat diam,
  menyapu hilang saat hover. Di prototipe logikanya terbalik.

## Konsep "Discover"

Satu aturan, dan seluruh beranda mematuhinya: **satu bagian punya satu Discover, dan Discover itu
menuju versi yang lebih dalam dari apa yang baru saja dilihat.**

| Blok | Tujuan | Kenapa |
| --- | --- | --- |
| Atas kartu produk | *tidak ada tautan* | Ini label bagian, bukan ajakan. Kartunya sendiri sudah bisa diklik; menaruh Discover di sini mengulang pekerjaan yang sama. |
| Bawah kartu produk | `/ingredients/catalog/` | Versi lengkap dari empat kartu di atasnya |
| Jembatan | `/perfumery/` | Memperkenalkan lini bisnis berikutnya |

Sebelumnya ada dua Discover berurutan yang dipisahkan kartu produk, dan yang pertama tidak menuju
apa pun yang masuk akal. Bagian "Continue the conversation" juga dibuang: karusel tepat di bawahnya
sudah menuju kontak, jadi keduanya mubazir.

`Interlude.astro` menerima `href` opsional — tanpa `href`, tautannya tidak dirender sama sekali.

## Garis kiri

`Band.astro` memegang pita berpasangan di beranda dan di Fragrances. Fotonya menyentuh tepi layar —
itu "struktur tanda tangan" menurut sistem desainnya — tapi blok naskahnya selalu menempel ke salah
satu garis bingkai:

- foto di kanan → tepi kiri naskah di garis kiri bingkai
- foto di kiri → tepi kanan naskah di garis kanan bingkai

Tokennya `--frame-inset`, memakai `100%` dan bukan `100vw` supaya lebar bilah gulir tidak ikut
terhitung. Tanpa ini halaman terbaca berganti-ganti antara bermargin dan tanpa margin.

## Sistem visual

Tiga hal yang menjaga situs ini terbaca sebagai satu benda. Semuanya tinggal di
`src/styles/tokens.css`.

**Huruf.** Dua keluarga, dan berat tebal praktis tidak dipakai — hierarki datang dari ukuran, jarak
huruf, dan warna. EB Garamond selalu 400. Public Sans 400 untuk teks, 500 untuk label dan tombol.
Italic hanya untuk nama botani Latin dan satu baris editorial di beranda. Skalanya satu tangga
(`--type-display` sampai `--type-micro`); yang lama tidak koheren karena `--type-h2` justru lebih
besar daripada `--type-h1`.

**Warna.** Kertas, tinta, satu dasar gelap.

| Peran | Token | Catatan |
| --- | --- | --- |
| Kertas | `--paper`, `--paper-sunk` | Dua, bukan sepuluh. Abu-abu lama berbeda 0,002–0,01 lightness — selisih yang tidak terlihat mata. |
| Tinta | `--ink`, `--ink-body`, `--ink-muted` | Tiga langkah, semuanya lolos AA. `--ink-muted` sengaja 0,50 bukan 0,52 karena keterangan pelat duduk di atas `--plate` yang lebih gelap daripada kertas. |
| Dasar gelap | `--ground-dark` | Espresso, bukan navy. Ivory hangat yang ditutup navy dingin adalah tabrakan suhu. |
| Aksen | `--gold` | **Bukan warna teks.** Hanya lima momen: hover tautan, hover tombol padat, sorotan teks, cincin fokus, cincin wordmark. |

**Ukuran.** `--section-y` naik dari `clamp(42px, 5.2vw, 82px)` ke `clamp(72px, 9vw, 140px)`, dan
bingkainya turun dari 1560 px ke 1440 px. Ini perubahan yang paling terasa: yang lama membuat
bagian-bagian terbaca seperti ditumpuk, dan baris teksnya terlalu panjang.

Nama token lama (`--ivory-*`, `--stone-*`, `--espresso`, `--acc-text`) masih hidup sebagai alias di
bagian bawah `tokens.css`. `--acc-text` sengaja menunjuk tinta, bukan emas, supaya pemakaian yang
terlewat jatuh ke keadaan yang benar.

## Lapisan rasa

Selain rekreasi desainnya, ada satu lapisan yang mengurus bagaimana situs bergerak. Semuanya
bekerja di dalam aturan sistem — satu kurva `--ease-glide`, garis rambut, sudut siku — dan semuanya
mati saat `prefers-reduced-motion: reduce`.

| Apa | Di mana | Catatan |
| --- | --- | --- |
| Judul dipecah per baris | `scripts/split-lines.ts` | Tiap baris naik dari balik topeng, di-stagger 90 ms. Menunggu `document.fonts.ready` supaya pemenggalan dihitung dengan font sungguhan, dan dihitung ulang saat resize. Dipasang lewat `data-lines`. |
| Gulir momentum | `scripts/smooth-scroll.ts` | Lenis, hanya untuk roda dan trackpad pada layar ≥900 px. Sentuhan dibiarkan native. Semua gulir terprogram lewat `scrollToY()` supaya satu kurva. |
| Gambar muncul | `scripts/image-reveal.ts` | Skala 1,06 → 1 sambil memudar. Gambar `eager` dilewati karena poster hero adalah elemen LCP. |
| Pembukaan | `scripts/overture.ts` | Wordmark tersusun di atas kurtin ivory. Hanya beranda, sekali per sesi, ≤900 ms, dan langsung minggir kalau pengguna menggulir. |
| Morph kartu → laci | `scripts/materials.ts` | `document.startViewTransition()` dengan `view-transition-name: material-plate`. Peramban tanpa dukungan tetap mendapat laci geser biasa. |
| Eyebrow menempel | `pages/sustainability.astro` | Hanya di kolom "Position". Di Group tidak dipasang: pelat 4/5 di sana lebih tinggi daripada teksnya, jadi sticky-nya tidak akan pernah terlihat. |
| Jeda antar bagian | `components/Interlude.astro` | Tiga gerakan berurutan: cincin (700 ms), kalimat naik 8 px (800 ms, jeda 120 ms), lalu tautan memudar (260 ms, jeda 480 ms). Kurvanya `--ease-soft`. Versi sebelumnya benar-benar diam mengikuti rekaman dior.com; sekarang sedikit lebih hidup atas permintaan. |
| Garis bawah menyapu | `Interlude.astro`, `Hero.astro` | Bereaksi saat **bloknya** disentuh kursor, bukan hanya tautannya. |

Tiga aturan yang mudah dilanggar tanpa sengaja:

- **Reveal itu pendek.** Yang lama 28 px selama 1400 ms dengan jeda sampai 900 ms — blok "Our
  specialty" perlu 2,3 detik untuk selesai, sementara transisi terpanjang di robertet.com adalah
  0,6 detik. Sekarang 10 px, 620 ms, jeda 70 ms. `--ease-glide` sengaja tidak dipakai untuk reveal:
  awalannya terlalu curam sehingga ekornya terasa merayap. Ia tetap dipakai untuk panel besar.

- **CSS tidak boleh menyembunyikan gambar sendirian.** Kelas `is-pending` hanya dipasang skrip, dan
  skrip itu selalu melepasnya kembali — termasuk lewat penghitung waktu cadangan tiga detik. Kalau
  JavaScript gagal dimuat, gambar tetap tampil.
- **CSS tidak boleh menyembunyikan isi sendirian.** Semua keadaan "tersembunyi sampai muncul"
  digerbangi `html.js`, yang dipasang skrip inline di `<head>` sebelum cat pertama. Tanpa
  JavaScript, halaman tampil utuh alih-alih kosong.
- **`overflow-x` memakai `clip`, bukan `hidden`.** Keduanya memotong luapan mendatar, tetapi
  `hidden` menjadikan elemennya wadah gulir, dan itu membuat bilah penyaring lengket di
  `/ingredients/catalog/` menempel pada kotak yang salah.

## Isi yang dibuang

Daftar sertifikasi (ISO 9001, IFRA, Kosher & Halal, CITES, EUDR) belum kembali. Sustainability
sekarang punya bagiannya sendiri lagi dengan dua halaman, dan program penyadap sudah masuk ke
`/sustainability/people/`, tapi sertifikasi belum ditulis ulang — itu justru bagian yang paling
membedakan Adhiloka dari pemasok lain. Naskah lamanya ada di riwayat git.

## Yang belum dikerjakan

- **Dwibahasa.** Pemilih bahasa dipertahankan persis seperti desain, tetapi belum tersambung ke
  terjemahan; kedua pilihan menuju halaman yang sama. Menyambungkannya berarti menambah rute `/id/`
  dan memindahkan teks di `src/data/` ke berkas per bahasa.
- **Kompresi video** (perintahnya di atas).
- **Kursor kustom, angka menghitung naik, parallax pita, dan mode gelap** — dipertimbangkan lalu
  ditolak. Ketiganya yang pertama membuat situs pemasok terbaca seperti situs portofolio; yang
  terakhir melawan dasar ivory hangat yang menjadi seluruh paletnya.
- **Halaman sendiri per material.** Sekarang spesifikasi tinggal di laci. Semua 18 panelnya ada di
  HTML sehingga terbaca mesin telusur, tetapi halaman tersendiri akan lebih baik untuk pencarian.
