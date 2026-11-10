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

## Halaman

Menunya tetap menu Adhiloka (About Us · Perfumery · Ingredients · Sustainability · Media ·
Contact), tetapi tampil dan bekerja seperti menu Adani: kapital, chevron, mega-menu saat hover di
desktop, laci dari kanan dengan akordeon di layar ≤1026 px. Isi kolom mega-menu diatur di
`src/data/menu.ts`; daftar menunya tetap `NAV` di `src/data/site.ts`.

Isi panel mega-menu desktop memakai konsep Adhiloka versi pertama (yang meniru robertet.com):
foto utama berjudul dengan panah di kiri, menuju halaman induk, lalu kolom tautan di kanan. Foto
dan judulnya dari `panel.image` / `panel.title` di `NAV`. Di laci mobile fotonya disembunyikan.

Kolom kanan diawali baris judul panel (ABOUT US ───). **About Us** punya dua kolom bertautan
(Our Business dan Our Purpose, masing-masing dengan bagian halamannya). **Media** tidak punya
kolom yang berdiri sendiri: halaman anaknya dikelompokkan di bawah label grup tanpa tautan
(*Newsroom* dan *Resources*). Label grup ditulis `{ label }` tanpa `href` di `menu.ts`.

| Jalur | Susunan |
| --- | --- |
| `/` | Hero slider · kutipan terbelah · Our Business (tab Ingredients/Perfumery) · akordeon keberlanjutan · Latest News · Join Us · peringatan penipuan |
| `/about/` | Pola /about-us Adani: banner · kutipan · Who We Are (slider foto fade dalam panel inset) · How We Work · nilai · kartu |
| `/about/our-business/`, `/about/our-purpose/` | Banner · pembuka · isi halaman · Explore More |
| `/about/our-leadership/`, `our-history/`, `our-locations/` | **Diparkir** (lihat "Halaman yang diparkir"); rutenya dialihkan ke `/about/` |
| `/perfumery/`, `/ingredients/`, `/sustainability/` | Banner · pembuka dengan Read More · kartu anak · penutup berfoto dua tombol |
| `/media/` | Banner · slider Media Releases · promosi Media Kit · Media Centre · kontak pers |
| `/ingredients/catalog/` | 6 bahan inti; laci filter (keluarga, nota aroma), urutan, pencarian, grid/list; pita unduhan katalog PDF |
| `/ingredients/catalog/<slug>/` | Kepala berwarna keluarga · strip fakta (nama botani, keluarga, bagian tanaman, asal) · nota aroma, deskripsi dan pemakaian · Did you know? · Samples & Documents (tiga tombol ke formulir kontak + katalog PDF) · slider Other Ingredients |
| `/ingredients/ordering/` | Pembuka · 6 langkah pesan · Documents (jenis dokumen + Request Documents) · Logistics · FAQ dengan dua tombol · Explore More |
| `/media/news/` | Media Releases: cari, kategori, tahun, urutan, tag filter + Clear All, Load More (6 per langkah), laci filter di ≤767 px |
| `/media/news/<slug>/` | Banner setengah layar (remah saja) · judul dan isi · slider Other Releases |
| `/contact/` | Formulir + satu kontak (info@adhiloka.com); `?material=slug&kind=sample\|specification\|quotation` mengisi jenis permintaan dan pesan |
| `/legal/` | Legal Notice · Privacy Notice · Cookies (tujuan tiga tautan di bar bawah footer) |

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
- **"Watch Video"** di hero menjadi "Know More"; situs ini tidak memakai video.
- **Awards & Accolades** di halaman About dilewati: tidak ada penghargaan yang bisa dicantumkan.
- **Banner cookie** tidak ditiru; situs ini tidak memasang cookie.
- **Footer** berlatar foto tajuk pohon yang dipucatkan dan memudar ke kiri, pengganti foto gedung
  pucat di footer Adani.
- (Bukan beda, catatan) **Akordeon keberlanjutan** mengikuti ukuran langsung dari adani.com (CSS
  dan pelacakan frame rekaman layar): yang dianimasikan `width` panel (150 px disusutkan flex jadi
  ±124 px, aktif 100 %, 0,5 s ease). Foto tiap panel berskala tetap dan duduk di tengah panelnya.
  Karena foto kita potret/persegi sedangkan foto Adani 2:1, kotak `<img>` dikunci selebar panel
  terbuka (`calc(100cqw - 200px)`); dengan `width: 100%` foto membesar ±2× saat panel dibuka di
  layar lebar. Jangan animasikan `flex-basis` ke `auto`: nilai itu tidak bisa diinterpolasi dan
  panelnya meloncat. Judul tegak hanya di pita tertutup. Untuk foto asli nanti, pakai foto
  mendatar ±2:1 seperti Adani (1660×830) supaya tidak terpotong banyak.
- **Popup peringatan penipuan** saat halaman dibuka tidak ditiru; peringatannya cukup di kotak
  bawah beranda, dengan naskah Adhiloka sendiri.

## Gerak gulir

`src/scripts/scroll-fx.ts` meniru gerak gulir Adani dengan GSAP 3.15 (ScrollTrigger dan
ScrollSmoother; lisensi *Standard no charge*, boleh untuk situs komersial). Takarannya disalin dari
JavaScript Adani v94, bukan dikira-kira:

- **Gulir halus** ScrollSmoother `smooth: 2` di layar ≥992 px. Isi halaman ada di
  `#smooth-wrapper > #smooth-content` (BaseLayout); header, panel pencarian dan tombol ke atas
  sengaja di luarnya karena `position: fixed`. Konstanta `SMOOTH` untuk melunakkan inersianya.
- **Parallax `data-speed`**: hero 0,8, teks kutipan 1,1, kolom foto besar Business 0,9.
- **`data-anim`** di markup: `title` (opacity mengikuti gulir), `sub` dan `thumb` (naik 100 px),
  `columns` + `data-anim-item` (anak naik 250 px bergiliran 0,2 s), `pad` (padding akordeon
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
  bulat "prev"/"next" (disembunyikan ≤1023 px); foto fade otomatis 3 s untuk Who We Are. Loop
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

Sejak 10 November 2026 **tidak ada lagi lorem ipsum di situs**. Beranda ditulis 18 Oktober, Perfumery
10 November (parafrase alur robertet.com/en/fragrances/), dan semua halaman lain 10 November atas
permintaan pemilik: ringkas, hangat, bergaya situs rumah fragrance (Robertet, Givaudan,
dsm-firmenich, IFF), tidak menjelaskan berlebihan.

Aturan yang tetap berlaku (keputusan 2 Okt 2026): **tidak ada klaim yang belum terbukti**. Naskah
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
tautan Careers di footer, tabel grade/spesifikasi/regulasi dan kalender panen di halaman bahan,
facet "Ingredient type" dan "Origin" di katalog.

## Unduhan PDF

`npm run pdf` (tools/pdf/, Chrome headless) membangun `public/downloads/adhiloka-ingredients-catalog.pdf`
dari `materials.ts` dan `pages/ingredients.ts`, sampulnya ke `src/assets/downloads/catalog.jpg`, dan
manifes `src/data/downloads.json`. Jalankan ulang setiap kali data bahan berubah, lalu commit
hasilnya (Netlify tidak punya Chrome). Lembar spesifikasi per bahan (ADH-PS-xx) dilepas 10 Nov 2026
karena nilai spesifikasinya belum ada; templatnya ada di riwayat git (commit `847d673`).

## Tautan kosong

Tidak ada lagi `href="#"`. Semua kartu dan tombol Join Us di beranda sementara menuju `/contact/`
karena halaman karier belum ada.

## Logo

Lockup dari `../adhiloka-brand/web/lockup/adhiloka-lockup.svg` (tulisan Crimson Text, abu sage
`#5C6D68`), disalin ke `public/brand/` bersama PNG 1000w/2000w. Dipakai di header dan footer.
Tanda logonya sama persis dengan versi sebelumnya, jadi favicon tidak berubah.

## Yang masih perlu dari pemilik

1. **Formulir kontak.** Isi `PUBLIC_FORM_ACCESS_KEY` di variabel lingkungan Netlify (Web3Forms).
   Selama kosong, tombol kirim membuka klien email pengunjung.
2. **Foto.** Berkas di `src/assets/images/` adalah stok botani (daftarnya di komentar
   `src/data/images.ts`). Halaman **Clove memakai foto pala** dan **Vetiver memakai foto jahe**
   karena foto aslinya belum ada; ganti begitu ada. Banner About dan Contact memakai foto stok
   orang di meja makan.
3. **Data** untuk halaman yang diparkir dan untuk spesifikasi bahan (lihat di atas).
4. **JSON-LD.** Telepon, `foundingDate` dan alamat masih dilepas (formulir A2–A5).

## Yang belum dikerjakan

- **Dwibahasa.** Belum ada rute `/id/`.
- **Halaman karier.**
- **Sertifikasi** (ISO 9001, IFRA, Halal, CITES, EUDR): belum ada yang bisa dicantumkan.
