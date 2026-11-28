# Adhiloka — situs publik

Astro 7, statis, tanpa framework UI. Sejak 27 September 2026 tampilannya meniru **adani.com**:
header, mega-menu, urutan section beranda, template halaman dalam dan footer. Versi sebelumnya
(meniru valeindonesia.com) ada di riwayat git branch `redesign-logo-hijau`.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # keluaran statis di dist/
npm run preview  # menyajikan dist/
```

### Komentar review (lokal saja)

Saat `npm run dev`, tombol **+ Komentar** di kiri bawah (Alt+C): klik satu titik atau seret untuk menandai area, tulis catatan.
Tersimpan di `../../review/comments.json` (vault `website/review/`, di luar repo). Hanya disuntik
saat `astro dev`; `astro build` tidak menyertakan apa pun. Daftar: `node tools/review/comments.mjs`;
selesai: `node tools/review/comments.mjs done <id>`.

## Situs grup (26 Nov 2026)

adhiloka.com adalah situs induk Adhiloka Group dengan tiga lini (keputusan vault
`decisions/2026-11-26 Website becomes group site.md`). Sumber tunggal nama, alamat, foto dan
bilah sub-menu tiap lini: `src/data/businesses.ts`.

| Jalur | Susunan |
| --- | --- |
| `/` | **Beranda grup**: hero empat slide (We Are Adhiloka, tiga lini; `GROUP_HERO_SLIDES`) · kutipan grup (`GROUP_QUOTE`) · Our Businesses **tanpa tab** (`GROUP_PANES`: empat tile 2 x 2 + foto besar berchip, 28 Nov 2026) · keberlanjutan · berita · Join Us |
| `/our-businesses/` | Banner · pembuka · satu blok Feature per lini (pola adani.com/businesses). `/about/our-business/` dialihkan ke sini (halamannya diparkir jadi `_our-business.astro`) |
| `/natural-ingredients-perfumery/` | Sub-halaman lini ringkas: banner · pembuka + satu tombol · dua kartu (Ingredients, Perfumery). Tanpa bilah sub-menu lini (`BusinessSubnav` tidak dipakai): remah banner + kartu, pola adani.com/businesses/materials |
| `/fine-seafood/` · `/packaging-plastic-solutions/` | Banner · pembuka + Request a Quotation · **katalog** (`LineCatalog`, `#catalog`) berbentuk Ingredient Catalog, **tanpa kode produk** (28 Nov 2026): cari, tab kategori (`?cat=`; seafood = kelompok spesies), kartu berfoto 3 kolom. Plastik: kotak Compare + tabel perbandingan (`CompareBar`) |
| `/fine-seafood/<spesies>/` · `/packaging-plastic-solutions/<item>/` | Halaman item (`LineItemPage`): kepala berwarna lini, strip fakta, Overview/Uses + Storage & packing, **Specification** (tabel), Samples & Quotations, slider item lain |
Nama lini sejak 28 Nov 2026 = baris kecil slide hero beranda: **Natural Ingredients & Perfumery**
(`/natural-ingredients-perfumery/`), **Fine Seafood** (`/fine-seafood/`), **Packaging & Plastic Solutions** (`/packaging-plastic-solutions/`);
slug ikut nama sejak 28 Nov 2026 malam, alamat lama dialihkan di `public/_redirects` (keputusan `decisions/2026-11-28 Line catalogs without product codes.md`; sebelumnya
`decisions/2026-11-28 Business line names follow homepage hero.md`); alamat lama
(`/natural-ingredients-perfumery/`, `/natural-aromatics/`, `/seafood/…`, `/marine-products/…`, `/plastics-packaging/…`) dialihkan di `astro.config.mjs`.
How We Work dihapus dari About dan Perfumery; Working With Us diparkir (`_working-with-us.astro`, dialihkan ke `/contact/`).
Hub Ingredients memuat empat anaknya (Natural Ingredients, Catalog, Map, Technology) sebagai kartu 2 x 2.
Kunci internal di kode tetap `naturals`, `seafood`, `packaging`.

- Data katalog: `src/data/seafood.ts` (satu item per spesies), `src/data/packaging.ts` (susunan pabrik kemasan Jepang, `PACKAGING_COMPARE`), tipe dan helper di `line-products.ts`. Tanpa kode produk di situs (28 Nov 2026).
- Tabel perbandingan Ingredient Catalog dan plastik: `ComparePick`, `CompareBar`, `scripts/compare.ts`.
- Formulir kontak: Netlify Forms (`enquiry`, notifikasi ke info@adhiloka.com), tanpa analytics (Plausible dibatalkan pemilik 28 Nov 2026; Google Search Console untuk data pencarian), header cache `public/_headers`, alt gambar `data/alt.ts`.
- Menu atas: About Us · Our Businesses · Sustainability · Media · Connect. Perfumery dan Ingredients tidak di header; dicapai dari kartu halaman Fragrance dan remah banner (bilah sub-menu lini dilepas 27 Nov 2026).
- Remah halaman lini: Home › lini › bagian › halaman (`PageBanner` + `businessOf`).
- Kontak: kolom **Business** dan `?business=naturals|seafood|packaging`, `?product=<slug>` mengisi pesan.

## Halaman

Menu naturals di bawah ini (About Us · Perfumery · Ingredients · …) adalah susunan sebelum situs
grup; Perfumery dan Ingredients kini di bilah sub-menu lini. Menunya tampil dan bekerja seperti menu Adani: kapital, chevron, mega-menu saat hover di
desktop, laci dari kanan dengan akordeon di layar ≤1026 px. Isi menu hanya di `NAV`
(`src/data/site.ts`); `src/data/menu.ts` cuma membentuk panelnya.

Isi panel mega-menu desktop memakai konsep Adhiloka versi pertama (yang meniru robertet.com):
foto utama berjudul dengan panah di kiri, menuju halaman induk, lalu kolom tautan di kanan. Foto
dan judulnya dari `panel.image` / `panel.title` di `NAV`. **Foto panel = foto banner halaman induk**
(pemilik, 15 Nov 2026): About Us `hero-woman-golden-light`, Perfumery `hero-smelling-vial`, Ingredients
`hero-blossom-golden`, Sustainability `hero-hands-seedling`, Media `smelling-flowers`, Connect/Contact
`tagged-sample-bottles`; ganti keduanya bersamaan. Di laci mobile fotonya disembunyikan.

Kolom kanan diawali baris judul panel (ABOUT US ───), lalu **tautan datar tanpa sub-menu, label
grup, atau kepala kolom** (pemilik, 13 Nov 2026): paling banyak 3 ke bawah, sisanya pindah ke
kolom kanan (`grid-auto-flow: column`). Nama produk tidak pernah masuk menu; produk hanya di
katalog. Isi panel: About Us (Our Business, Our Purpose) · Perfumery (Fine Fragrance, Consumer
Fragrance, Fragrance Innovation, How We Work, Our Palette) · Ingredients (Natural Ingredients,
Ingredient Catalog, Ingredients Map, Technology, Working With Us) · Sustainability (Driving progress
for people, Responsible Sourcing) · Media (News, Media Resources) · Connect (Careers, Partner with
Us, Contact Us; Become a Supplier digabung ke Partner with Us 22 Nov 2026). **Connect** (pemilik, 13 Nov 2026) menggantikan Contact yang
dulu berdiri sendiri; halamannya di bawah `/contact/` supaya remah, menu aktif dan Explore More
ikut sendiri. "Life at Adhiloka" dilepas.

| Jalur | Susunan |
| --- | --- |
| `/` (beranda naturals lama, dilepas 27 Nov 2026) | Hero slider empat slide tetap (About, Perfumery, Ingredients, Sustainability; pemilik 21 Nov 2026, foto slide = banner tujuan) · kutipan terbelah (tanpa label, garis dan nama, 15 Nov 2026) · Our Business (22 Nov 2026: tanpa tab, empat tile 2 x 2 Natural Ingredients, Perfumery, Technology, Sustainability yang memilih foto besar berchip + Explore More, dari `BUSINESS_PANES`) · akordeon keberlanjutan · Latest News · Join Us |
| `/about/` | Pola /about-us Adani: banner · kutipan · Who We Are (slider foto fade dalam panel inset) · How We Work · nilai · kartu |
| `/about/our-business/`, `/about/our-purpose/` | Banner · pembuka · isi halaman · Explore More |
| `/about/our-leadership/`, `our-history/`, `our-locations/` | **Diparkir** (lihat "Halaman yang diparkir"); rutenya dialihkan ke `/about/` |
| `/perfumery/` | **Satu halaman, tanpa subhalaman** (12 Nov 2026): banner · pembuka · Fine Fragrance · Consumer Fragrance · Fragrance Innovation · How We Work · Our Palette · penutup. Subhalaman lama dialihkan ke sini |
| `/ingredients/technology/` | Extraction & Distillation (9 teknik) · Science & Renewables (4) · What We Produce · Quality & Compliance · Explore More |
| `/ingredients/` | Banner · pembuka · Discover More (slider lima halaman anak) · From Plant to Perfumer · Technologies · pita unduhan katalog · penutup berfoto |
| `/ingredients/natural-ingredients/` | Pola *Natural ingredients* Givaudan: banner · Collections per keluarga (ke katalog `?family=`) · pita menuju katalog · Explore More |
| `/ingredients/map/` | Meniru Raw Materials Map Robertet: tab wilayah · peta Indonesia (build-time, `data/map.ts`) dengan penanda per pulau · daftar wilayah berfoto kecil (tanpa angka ringkas dan hitungan, 15 Nov 2026) · kartu wilayah berisi bahannya. Wilayah di `data/regions.ts`, bahan per wilayah di `materials.ts` (`regions`). Satu-satunya tempat asal ditulis lebih rinci dari "Indonesia" |
| `/sustainability/` | Banner · pembuka dengan Read More · kartu anak · penutup berfoto dua tombol |
| `/media/` | Banner "Media" (sama dengan menunya) · slider News · Media Centre · kontak pers. Promosi Media Kit dilepas 15 Nov 2026 |
| `/media/media-resources/` | About Adhiloka (paragraf siap kutip) · Downloads (katalog PDF) · kontak pers · Explore More. Logo dan simbol dilepas (pemilik, 15 Nov 2026); rujukan Robertet, Symrise, dsm-firmenich |
| `/ingredients/catalog/` | Dirombak 15 Nov 2026 (pemilik; rujukan Ingredient Catalog dsm-firmenich Studio). Kartu berfoto 3 kolom, satu per bahan; **seluruh kartu satu tautan** (tanpa penanda "Discover →" sejak 22 Nov 2026); wangi di kartu = kelompok wangi (`SCENTS`/`scentsOf` di `materials.ts`, dipetakan dari nota; nota baru yang belum terpetakan menggagalkan build), teks biasa bukan chip. Bilah: kotak cari dengan **saran langsung** (bahan + kode produk, tiap baris menuju halamannya), Filters (laci: jenis produk, keluarga), urutan; di bawahnya **tab wangi pilihan tunggal** (All, Citrus, Floral…; dulu chip centang ganda yang membingungkan, 15 Nov 2026). Pencarian per kata dari awal kata membaca semua kode di bawah bahan ("terpene", "co2 extract", "955671", "floral"); kalau yang cocok hanya sebagian, kodenya muncul di kartu (maks 3 + More products). Istilah Indonesia lewat `ALIAS` (`catalog-filter.ts`). **Tanpa hitungan, tanpa sakelar Product codes, tanpa grid/list, tanpa fade** (berkedip). Pita unduhan katalog PDF |
| `/ingredients/catalog/<slug>/` | Halaman bahan: kepala berwarna keluarga · strip fakta (nama botani, keluarga, bagian tanaman, asal) · nota aroma, deskripsi dan pemakaian · Did you know? · **Products** (semua kode bahan itu) · Samples & Documents · slider Other Ingredients (keluarga sama dulu, maks 9) |
| `/ingredients/catalog/<slug>/<produk>/` | Halaman produk (13 Nov 2026): kepala dengan kode dan jenis · strip fakta (kode, jenis, nama botani, asal) · Specification (nilai tipikal) · Identification (proses, pelarut, INCI, CAS, EC, FEMA, HS) · Use & handling · Samples & Documents · slider produk lain dari bahan yang sama |
| `/ingredients/working-with-us/` | Dulu Ordering & Documents (`/ingredients/ordering/` dialihkan): 6 langkah pesan · Documents (jenis dokumen + Request Documents) · Logistics dengan dua tombol · Explore More |
| `/media/news/` | News (enam cerita, Februari 2025 sampai November 2026): cari, kategori, tahun, urutan, tag filter + Clear All, Load More (6 per langkah), laci filter di ≤767 px |
| `/media/news/<slug>/` | Banner setengah layar (remah saja) · judul dan isi · slider Other Releases |
| `/contact/` | Formulir + satu kontak (info@adhiloka.com) · Explore More (tiga halaman Connect); `?material=slug&kind=sample\|specification\|quotation\|bespoke\|supplier\|partnership\|careers` mengisi jenis permintaan dan pesan |
| `/contact/careers/`, `/contact/partners/` | Banner · satu blok singkat bergambar bertombol ke formulir dengan `?kind=` (`data/pages/connect.ts`) · Explore More. Dipersingkat 22 Nov 2026 (formalitas); Become a Supplier digabung ke Partner with Us, `/contact/suppliers/` dialihkan. Tanpa lowongan, angka atau nama |
| `/legal/` | Legal · Privacy · Cookies (tujuan tiga tautan di bar bawah footer; label tanpa "Notice" sejak 15 Nov 2026) |

Rute lama `/our-story/`, `/fragrances/` dan `/raw-materials/` dialihkan lewat `redirects` di
`astro.config.mjs`.

```
src/
  data/         site · menu · materials · images
    pages/      home · about · perfumery · ingredients · sustainability · media · contact · types
  components/   SiteHeader · SearchOverlay · SiteFooter · BackToTop · QuoteSplit · NewsCards
    home/       HeroSlider · BusinessShowcase · SustainAccordion · JoinUs · NoticeBox
    blocks/     PageBanner · Intro · Feature · Passages · CounterGrid · CardGrid · InfoGrid
                PeopleCards · LeaderSpotlight · Journey · Timeline · LocationCards · Presence
                PressContact · SiblingCards · CardSlider · VisionSlider · ClosingCta · PromoBanner
  layouts/      BaseLayout (meta, JSON-LD, font) · PageLayout (banner halaman dalam)
  scripts/      nav · search · hero-slider · tabs · scroll-fx · contact-form
                slider (Swiper) · timeline · presence · news-filter
  data/map.ts   peta Our Presence, dirender saat build dari world-atlas + d3-geo
  styles/       global.css (token warna, kontainer, judul, tombol)
```

## Meniru Adani: apa yang diambil, apa yang tidak

Takarannya diambil dari CSS Adani (`bundle.css` v94) pada layar 1440 px, bukan dikira-kira:
kontainer 88,88 %, header 64 px putih 70 % + blur, judul section 44/44 semibold kapital, teks
`#393939`, latar berselang putih/`#f0f0f0`, tombol garis bersudut 8 px, bar kebijakan footer
`#c1c1c1`, hero 100vh dengan bayangan hitam 0,7, kutipan 42,1 % / 57,9 %, tile Business 38,4 % /
61,1 %, akordeon 92vh dengan pita tertutup 124 px.

Yang **tidak** disalin: foto, naskah, ikon, logo dan font Adani. Semua isi berasal dari
`src/data/`. Gradien biru-ungu Adani diganti gradien dari enam warna logo Adhiloka
(`--grad-bar`, `--grad-text` di `global.css`).

Yang sengaja berbeda:

- **Font.** Font "Adani" sebenarnya Rubrik (Miles Newlyn) berlisensi khusus Adani Group. Penggantinya
  Rubik variabel 300–700, di-host sendiri lewat Fonts API, dengan bobot digeser supaya setara tinta
  Rubrik (400→360, 500→440, 600→530, 700→670). Rinciannya di `astro.config.mjs`.
- **Tab tidak aktif** memakai `#6b6b6b`, bukan `#c1c1c1` Adani yang kontrasnya cuma 1,7:1.
- **"Watch Video"** di hero menjadi "Discover More" (dulu "Know More", diganti 14 Nov 2026); situs ini tidak memakai video.
- **Awards & Accolades** di halaman About dilewati: tidak ada penghargaan yang bisa dicantumkan.
- **Banner cookie** tidak ditiru; situs ini tidak memasang cookie.
- **Footer** berlatar foto tajuk pohon (`canopy-from-below`, foto stok tajam) yang dipucatkan dan
  memudar ke kiri, pengganti foto gedung pucat di footer Adani.
- **Gradien hanya aksen yang bergerak** (sejak 12 Nov 2026, koreksi pemilik): garis bawah menu dan
  tab aktif, bilah progres hero, garis tepi tombol saat hover. Tidak dipakai di penanda poin, nomor
  langkah, tahun, label, atau garis hias statis. Poin = baris bergaris tipis tanpa penanda; nomor =
  teks kecil `--brand-number`.
- **Banner halaman dalam** 64vh (bukan 100vh Adani), setengah banner 52vh, penutup berfoto 56vh,
  `--sec-pad` 68 px, foto Feature 3:2: foto dan spasi dipadatkan atas permintaan pemilik.
- (Bukan beda, catatan) **Akordeon keberlanjutan** mengikuti ukuran langsung dari adani.com (CSS
  dan pelacakan frame rekaman layar): yang dianimasikan `width` panel (150 px disusutkan flex jadi
  ±124 px, aktif 100 %, 0,5 s ease). Foto tiap panel berskala tetap dan duduk di tengah panelnya.
  Karena foto kita potret/persegi sedangkan foto Adani 2:1, kotak `<img>` dikunci selebar panel
  terbuka (`calc(100cqw - 200px)`); dengan `width: 100%` foto membesar ±2× saat panel dibuka di
  layar lebar. Jangan animasikan `flex-basis` ke `auto`: nilai itu tidak bisa diinterpolasi dan
  panelnya meloncat. Judul tegak hanya di pita tertutup. Untuk foto asli nanti, pakai foto
  mendatar ±2:1 seperti Adani (1660×830) supaya tidak terpotong banyak.
- **Peringatan penipuan** (popup maupun kotak di bawah beranda) tidak dipakai. Kotaknya dilepas
  dari beranda 12 Nov 2026; komponennya masih ada di `components/home/NoticeBox.astro`.

### Penyegaran 12 November 2026

Atas permintaan pemilik (perhalus warna, gerak dan detail, bukan rombak), beberapa takaran Adani
diganti. Susunan, kontainer 88,88 %, header 65 px, skala huruf dan tombol tetap.

- **Netral** condong ke hijau merek: teks `#1f2a27` (Tinta), teks sekunder `#5c6d68` (Sage), garis
  `#c2c9c6` / `#e6eae8`, bidang abu `#f2f4f3`. Dulu `#393939`, `#6b6b6b`, `#c1c1c1`, `#f0f0f0`.
- **Bar kebijakan footer** hijau tua `--brand-green-deep` berteks putih, bukan abu `#c1c1c1`.
- **Token gerak** di `global.css`: `--ease-out`, `--ease-io`, `--ease-std`, `--t-fast`, `--t`,
  `--t-slow`, `--t-img`. Transisi baru memakai token ini, tidak menulis `ease` atau durasi lepas.
- **Bayangan foto** memakai `--scrim` (hitam yang naik melengkung), bukan gradien lurus.
- **Zoom foto saat hover** 1,05–1,06 selama 1,2 s (dulu 1,08–1,1 selama 1 s).
- **Kontrol hero** rata dengan tepi kanan kontainer (Adani menjorok 27 px keluar); rel progres
  putih 38 %, bayangan kartu dua lapis.
- **Isi akordeon keberlanjutan** rata dengan garis kiri kontainer: `calc(5.56cqw - 35.5px)`.
- **Panah** di mana pun (tile, kartu, Join Us, Explore More, tautan akordeon, foto mega-menu, baris produk, daftar wilayah peta, View dokumen) tersembunyi dan baru muncul saat di-hover atau difokus (pemilik, 22 Nov 2026). Pengecualian: tombol yang isinya hanya simbol (slider, kembali ke atas). **Tanpa "Discover More" di bawah kartu** yang seluruhnya sudah tautan, dan tanpa tombol di samping judul Join Us.
- **Header** bergaris rambut di dasarnya; isi mega-menu muncul menyusul panelnya.
- **Formulir kontak**: panah pilihan digambar sendiri, cincin fokus hijau, slot galat kosong tidak
  makan tempat.

## Gerak gulir

`src/scripts/scroll-fx.ts` meniru gerak gulir Adani dengan GSAP 3.15 (ScrollTrigger dan
ScrollSmoother; lisensi *Standard no charge*, boleh untuk situs komersial). Takarannya disalin dari
JavaScript Adani v94, bukan dikira-kira:

- **Gulir halus** ScrollSmoother `smooth: 2` di layar ≥992 px, sama dengan Adani (pemilik 22 Nov 2026). Isi halaman ada di
  `#smooth-wrapper > #smooth-content` (BaseLayout); header, panel pencarian dan tombol ke atas
  sengaja di luarnya karena `position: fixed`. Konstanta `SMOOTH` untuk melunakkan inersianya.
- **Parallax `data-speed`**: hero 0,8, teks kutipan 1,1, kolom foto besar Business 0,9.
- **`data-anim`** di markup: `title` (opacity mengikuti gulir), `sub` dan `thumb` (naik 60 px,
  0,9 s; Adani 100 px, 0,6 s), `columns` + `data-anim-item` (anak naik 90 px bergiliran 0,12 s,
  1 s; Adani 250 px, 0,2 s), `pad` (padding akordeon
  0→40 px), `zoom` (foto Who We Are dari skala 0,4). `data-parallax` menggeser foto berita di
  dalam bingkainya; `data-count` menghitung angka naik.
- **Kutipan** dipecah per huruf di server; huruf menggelap satu per satu mengikuti gulir. Di
  halaman dalam pemicunya memakai takaran `inner-page.js` Adani (`25% 80%`, `+=60%`).

### Halaman dalam

- **Section bertumpuk** (`fnParllexBar`): di layar >1025 px tiap section di `main[data-inner]`
  di-pin tanpa ruang tambahan sehingga section berikutnya meluncur menutupinya. Yang pendek
  di-pin saat atasnya menyentuh atas layar, yang tinggi saat dasarnya menyentuh dasar layar.
  Dikecualikan: banner, section terakhir, dan section berpin sendiri (`data-no-panel`: linimasa,
  profil pimpinan). Beranda tidak memakai efek ini. `PageLayout` memasang `inner` otomatis;
  halaman yang memakai `BaseLayout` langsung (artikel berita) mengoper `inner` sendiri.
- **Banner** bergerak 0,8× kecepatan gulir, bayangan 0,85, remah di dasar banner (ikon rumah,
  pemisah garis 3 px). Tidak ada animasi masuk: `inner-page.js` Adani juga tidak punya.
- **`data-more`** (fnReadMore): naskah pembuka dilipat dua baris + Read More/Read Less, tinggi
  dianimasikan 1 s. `Intro more` memakainya.
- **`data-pin`** + `data-pin-scope`: kolom yang menempel di bawah header selama induknya di layar
  (profil pimpinan). `position: sticky` tidak berlaku di dalam ScrollSmoother, jadi dipakai pin.
- **Slider** (`scripts/slider.ts`, Swiper 14): kartu 3 atau 2 per layar, kecepatan 1,5 s, tombol
  bulat berpanah tanpa tulisan (15 Nov 2026; disembunyikan ≤1023 px); foto fade otomatis 3 s untuk Who We Are. Loop
  Swiper dimatikan karena kartunya terlalu sedikit.
- **Peta Our Presence**: garis negara Natural Earth 1:50m (paket `world-atlas`, domain publik),
  diproyeksikan `d3-geo` saat build dan dipotong ke bingkai; peramban tidak memuat pustaka peta.
  Titik dari `SITES[].coords` (kota di keterangan foto); lokasi di luar bingkai ditandai
  "Overseas".
- **Tombol ke atas** muncul setelah 20 % halaman digulir, bertooltip, disembunyikan ≤1023 px
  (seperti `#bottomToTop` Adani; berlaku juga di beranda karena komponennya bersama).

Catatan: animasi `sub` mengukur posisi elemen dalam keadaan sudah tergeser 100 px (sama dengan
kode Adani), jadi elemen yang sudah terlihat di layar pertama bisa baru muncul setelah digulir
sedikit. Jangan pasang `data-anim="sub"` pada konten di layar pertama (kepala artikel berita).

Beda dari Adani: `invalidateOnRefresh` dimatikan (nilai gerak di sini tetap), dan `columns` memakai
`gsap.set` + `to` karena `fromTo` berstagger di GSAP 3.15 hanya merender posisi awal anak pertama.
Tab, penyaring, "Read More" dan formulir mengirim event `fx:refresh` karena tinggi halaman
berubah. Dengan `prefers-reduced-motion` atau tanpa JS, semuanya tampil diam.

## Naskah

**Dilenturkan 14 Nov 2026 (pemilik: masih kaku, berbau AI, terlalu rinci).** 63 blok naskah di
`data/pages/` ditulis ulang mengikuti cara Robertet, Givaudan, dsm-firmenich, Indesso dan Symrise
menulis: tetap satu paragraf per judul, tetapi dua kalimat (±20–50 kata), suara "we", tanpa rangka
berulang ("so that…", "The result is…") dan tanpa kalimat penutup berpetuah. Data bahan dan produk
(nota, pemakaian, spesifikasi) tidak disentuh. Label "Know More" jadi "Discover More".

**Satu paragraf per judul (koreksi pemilik 13 Nov 2026).** Keterangan sepatah kata ternyata terlalu
singkat. Mengikuti dsm-firmenich, IFF, Robertet dan Givaudan, tiap judul kini diberi satu paragraf
(dua sampai tiga kalimat): blok bergambar, kartu teknik, nilai, langkah pesan, logistik, langkah
Perfumery dan rantai sumber, keluarga bahan, pembuka hub, serta "Perfumery usage" tiap bahan.
Hero, kutipan, pita penutup, panel akordeon beranda dan kartu menuju halaman lain tetap pendek.
Aturan di bawah ini (12 Nov) masih berlaku kecuali batas "satu keterangan pendek"-nya.

**Hierarki naskah (koreksi pemilik 12 Nov 2026).** Naskah lama terlalu banyak menjelaskan dan
terlalu banyak tingkat (judul, subjudul, paragraf, butir). Sekarang: judul, lalu paling banyak
satu keterangan pendek yang tidak menjelaskan. Tidak ada subjudul di bawah judul, tidak ada
kalimat pengantar di bawah judul section, tidak ada butir yang mengulang paragraf, tidak ada
"tell us…" atau "here is how…". Kartu menuju halaman lain cukup judul. Aturan lengkapnya di
skill `adhiloka-voice`, bagian "Hierarki naskah situs". Yang berubah di kode:

- `Passages` tidak lagi mencetak subjudul; `Passage.body`, `LinkCard.body` dan isi `InfoGrid`
  opsional. Blok boleh hanya judul, atau judul + butir tanpa paragraf.
- Halaman anak (Our Business, People, Responsible Sourcing, Technology, Ordering, Media
  Resources) tidak lagi diawali blok pembuka; banner langsung disusul isinya.
- Kalimat di banner (`lineInBanner`) dan "Read More" di pembuka hub tidak dipakai.
- FAQ di Ordering dilepas: keempat jawabannya hanya menyuruh menghubungi kami.

Sejak 10 November 2026 **tidak ada lagi lorem ipsum di situs**. Beranda ditulis 18 Oktober, Perfumery
10 November (parafrase alur robertet.com/en/fragrances/), dan semua halaman lain 10 November atas
permintaan pemilik: ringkas, hangat, bergaya situs rumah fragrance (Robertet, Givaudan,
dsm-firmenich, IFF), tidak menjelaskan berlebihan.

**Perfumery dan Technology** ditulis ulang 12 November 2026 mengikuti cara dsm-firmenich, Givaudan,
IFF dan Robertet menerangkannya (rujukan di `../../../market-research/references/`, berkas
`Web … - 2026`). Pemilik menyatakan teknologi dan jajaran produk Adhiloka lengkap, jadi daftar
teknik dan kemampuan di dua halaman itu ditulis penuh, tanpa kata "Indonesia" dan tanpa
dikecilkan ke kondisi sekarang. Kalimatnya ditulis sendiri; nama dagang dan slogan rujukan tidak
dipakai. Tetap tanpa angka, tahun, nama orang, paten dan sertifikat.

Aturan yang tetap berlaku untuk halaman lain (keputusan 2 Okt 2026): **tidak ada klaim yang belum terbukti**. Naskah
tidak memuat angka, tahun berdiri, nama orang, alamat, kapasitas, nama alat, sertifikat, MOQ, lama
kirim, atau dokumen yang "tersedia". Data bahan di `materials.ts` hanya pengetahuan umum perfumery
(nama botani, bagian tanaman, nota aroma, pemakaian), bukan data lot Adhiloka. Sebelum menambah
fakta, pastikan ada konfirmasi pemilik atau dokumennya; pertanyaan datanya di
`../../copy/data-form.md` (komentar `// DATA: <kode>` di `src/data/` menunjuk pertanyaannya).

Kalimat yang menyatakan cara kerja ("we stay close to the source", "every ingredient is evaluated
before it is released", "samples on request") sengaja umum; pemilik perlu memastikan semuanya
memang dijalankan.

## Halaman yang diparkir

Empat halaman tidak terbit karena isinya butuh fakta yang belum ada. Berkasnya masih di repo dengan
awalan garis bawah (Astro melewati berkas/folder `_…` di `src/pages/`), rute lamanya dialihkan di
`astro.config.mjs`:

| Halaman | Berkas | Menunggu |
| --- | --- | --- |
| Our Leadership + profil | `pages/about/_our-leadership/` | nama, jabatan, bio, potret (formulir G) |
| Our History | `pages/about/_our-history.astro` | tahun dan peristiwa (formulir H) |
| Our Locations | `pages/about/_our-locations.astro` | alamat/lokasi yang boleh tampil (formulir A3–A4) |
| Social Media | `pages/media/_social-media.astro` | akun resmi (formulir I1) |

Menerbitkan lagi: isi lariknya di `data/pages/about.ts` / `media.ts`, hapus garis bawah di nama
berkas, cabut baris pengalihannya, lalu kembalikan tautannya di `site.ts` (`NAV`), `menu.ts`,
`SiteFooter.astro` dan (untuk Social Media) `MEDIA_CARDS`.

Yang juga dilepas sampai datanya ada: angka sekilas (CounterGrid) di About dan Sustainability,
teaser Our Journey, ikon sosial footer (`SOCIAL` di `site.ts` kosong), pemilih bahasa ENG/IND,
kalender panen di halaman bahan, facet "Origin" di katalog.

## Data produk (13 Nov 2026)

Sumber tunggal data bahan dan produk adalah **master database** di vault:
`catalog/Product master database.xlsx` (sheet Products = satu baris per kode 6 digit, Ingredients =
naskah halaman bahan). `py scripts/export_products_site.py` (dari akar vault) menulis
`src/data/catalog-data.json`; `materials.ts` hanya membentuk tipe dan pembantu (`MATERIALS`,
`PRODUCTS`, `productsOf`, `productHref`). **Jangan menyunting JSON-nya**: ubah Excel, ekspor,
lalu `npm run build` dan `npm run pdf`. Kode baru ditulis dulu di `catalog/Product code register.md`.
Angka spesifikasi adalah nilai tipikal mutu itu (kolom Spec basis di Excel), bukan data lot dan
bukan sertifikat; halaman produk menyatakannya di bawah tabel. Keputusannya:
`decisions/2026-11-13 Natural range from Van Aroma benchmark.md`.

Keluarga `Herbal` dan `Gourmand` serta wilayah peta `Kalimantan` dan `Papua` ditambahkan untuk
bahan baru. Foto bahan baru dari Pexels dan Wikimedia Commons; yang berlisensi CC dikreditkan di
`/legal/` bagian Photo Credits.

## Foto: satu foto satu konteks (15 Nov 2026)

Pemilik: foto yang sama tidak boleh dipakai untuk dua konteks berbeda; boleh berulang hanya bila
semua tempatnya menunjuk hal yang sama (banner halaman, panel menu, kartu dan Explore More ke
halaman itu; foto bahan di katalog dan halaman bahannya). `tools/photo-usage.mjs` membaca semua
kunci foto di `src/`, memberi tiap pemakaian konteks (jalur tujuan, banner halaman, kutipan, hero
beranda, keluarga bahan, atau blok), menulis daftar rumah foto ke **`PHOTOS.md`**, dan gagal bila
satu foto punya lebih dari satu konteks. `npm run build` menjalankannya lebih dulu; `npm run photos`
hanya menulis laporan. Pengecualian disengaja di `ALLOW` skrip itu (saat ini: slide hero Perfumery
memakai foto halaman Perfumery). Foto keluarga bahan ada di `FAMILY_IMAGE` (`materials.ts`), dipakai
tile Our Business beranda dan kartu Collections. **Slide hero beranda memakai foto halaman yang ditautnya** (18 Nov 2026): We Are Adhiloka `hero-terraces-valley` (/about/), Scent Begins Here `hero-rose-dew` (/ingredients/), Our Expertise `hero-extraction-rig` (/ingredients/technology/), Perfumery `hero-perfumer-blending` (/perfumery/), The Source Collection `hero-tea-hills` (/ingredients/catalog/), Growing Together `hero-green-terraces` (/about/our-purpose/); skrip memperlakukan slide sebagai konteks jalur tujuannya, dan `ALLOW` kini kosong. Banner halaman bisa diberi `focus` (object-position)
di intro-nya. Parallax banner kini hanya di fotonya, jadi judul dan remah tidak lagi tertutup
section berikutnya saat digulir.

## Unduhan PDF

`npm run pdf` (tools/pdf/, Chrome headless) membangun `public/downloads/adhiloka-ingredients-catalog.pdf`
dari `materials.ts` dan `pages/ingredients.ts`, sampulnya ke `src/assets/downloads/catalog.jpg`, dan
manifes `src/data/downloads.json`. Jalankan ulang setiap kali data bahan berubah, lalu commit
hasilnya (Netlify tidak punya Chrome). Lembar spesifikasi per bahan (ADH-PS-xx) dilepas 10 Nov 2026
karena nilai spesifikasinya belum ada; templatnya ada di riwayat git (commit `847d673`).

## Tautan kosong

Tidak ada lagi `href="#"`. Kartu Join Us di beranda (Careers, Become a Supplier, Partner with Us)
menuju halamannya di menu Connect sejak 13 Nov 2026; "Discover More" menuju Careers.

## Logo

Lockup dari `../adhiloka-brand/web/lockup/adhiloka-lockup.svg` (tulisan Crimson Text, abu sage
`#5C6D68`), disalin ke `public/brand/` bersama PNG 1000w/2000w. Dipakai di header dan footer.
Tanda logonya sama persis dengan versi sebelumnya, jadi favicon tidak berubah.

## Yang masih perlu dari pemilik

1. **Formulir kontak (Netlify Forms, 28 Nov 2026).** Di Netlify: aktifkan Form detection, lalu Forms >
   `enquiry` > notifikasi email ke info@adhiloka.com (sudah aktif dan dikonfirmasi 28 Nov 2026).
2. **Foto.** Sejak 12 November 2026 sebagian besar slot memakai foto stok dari `../../../stock-photos/`
   (Pexels/Unsplash, tanpa atribusi), diperkecil ke 2400 px dan didaftarkan di `src/data/images.ts`
   beserta sumbernya. Keterangannya netral: orang di foto bukan staf/petani/pemasok Adhiloka, damar
   `resin-*` bukan benzoin Sumatra, kayu manis jenisnya tidak diketahui, dan Vetiver memakai foto
   daun rumput (`grass-blades`) karena foto akar wangi asli belum ada. Benzoin dan Patchouli masih
   memakai foto lama. Begitu ada foto barang sendiri, ganti lewat `images.ts`.
   13 Nov 2026: foto yang salah isi diganti. Patchouli dan Vetiver kini memakai foto tanaman asli
   dari Wikimedia Commons (Forest & Kim Starr, CC BY 3.0; kreditnya wajib dan ada di `/legal/`
   bagian Photo Credits). "Who We Are" tidak lagi memakai rimpang kering berlabel resin, "How We
   Work" tidak lagi kayu manis, kartu About di Media Resources tidak lagi foto orang makan malam,
   dan tile Fragrance Innovation memakai foto vial laboratorium, bukan alat uji titik nyala.
   13 Nov 2026 (pemilik): hero "Our Expertise" tidak lagi memakai `still-fire` (pria bertelanjang
   dada, kotor) tetapi `botanical-jars`; "The Source Collection" memakai `spice-box`, bukan
   `nutmeg-mace`; blok Processing di About memakai `copper-still`; "How We Work" di About memakai
   `labelled-bottles`, bukan `harvest-sorting` (bapak tanpa baju rapi). Foto dua anak berlari di
   kutipan beranda dan Our Purpose diberi `focus="10% 50%"` (prop `QuoteSplit`) supaya kedua
   anak masuk bingkai tegak. Orang di foto harus berpakaian rapi dan tampak profesional.
   13 Nov 2026 (pemilik, putaran ketiga): foto bahan yang salah atau amatir diganti, mengikuti
   cara dsm-firmenich Studio (close-up bahannya sendiri): White Pepper (mangkuk lada putih),
   Fenugreek (biji dalam toples), Gurjun Balsam (getah emas menetes dari kulit kayu), Cubeb (buah
   kering bertangkai), Homalomena (daun, bukan poster pameran), Temulawak (rimpang). Consumer
   Fragrance memakai diffuser rotan di ruang tamu, bukan botol amber kosong (rujukan Givaudan dan
   dsm-firmenich menampilkan produk jadi). Red Ginger masih foto jahe biasa: foto jahe merah yang
   layak belum ada di sumber gratis.
   Warna kepala halaman bahan disusun ulang (lihat `FAMILY_COLOR`): sembilan rona jenuh, tidak ada
   yang abu-hijau seperti tulisan logo; header di halaman berkepala warna putih 88 %.
   14 Nov 2026 (pemilik): kutipan beranda ditulis ulang jadi pernyataan tujuan satu kalimat dan
   fotonya diganti `pepper-harvest-hands` (tangan memetik lada, tegak); foto dua anak berlari
   (`purpose-generations`) tidak dipakai lagi, juga di Our Purpose dan kartunya. Bagian **Photo
   Credits di `/legal/` dihapus** atas keputusan pemilik; kalimat di atas yang menyebut kredit di
   Legal tidak berlaku lagi. Foto Wikimedia berlisensi CC BY / CC BY-SA masih terpasang tanpa
   kredit di situs; daftar sumbernya tetap ada di komentar `src/data/images.ts`.
3. **Data** untuk halaman yang diparkir dan untuk spesifikasi bahan (lihat di atas).
4. **JSON-LD.** Telepon, `foundingDate` dan alamat masih dilepas (formulir A2–A5).

## Yang belum dikerjakan

- **Dwibahasa.** Belum ada rute `/id/`.
- **Sertifikasi** (ISO 9001, IFRA, Halal, CITES, EUDR): belum ada yang bisa dicantumkan.
