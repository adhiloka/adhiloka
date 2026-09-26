# Adhiloka — situs publik

Awalnya implementasi prototipe Claude Design (`../project/Adhiloka v1 editorial.dc.html`); sejak
25 September 2026 tampilannya meniru valeindonesia.com (lihat "Meniru Vale" di bawah).
Astro 7, statis sepenuhnya, tanpa framework UI.

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # keluaran statis di dist/
npm run preview  # menyajikan dist/
```

## Isi

Enam menu, mengikuti susunan givaudan.com, robertet.com dan dsm-firmenich.com: tiap sub-item
punya halamannya sendiri, bukan anchor. Semua menu dibuka lewat tombol ☰ Menu di kiri atas header.

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
  scripts/     header · hero · get-in-touch · search · materials · contact-form · reveal
               scroll-progress · slide-rail · sections · smooth-scroll · image-reveal
  styles/      tokens.css (dari tokens/ bundle desain) · global.css
  assets/      gambar sumber; dioptimasi saat build
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

**Satu keluarga huruf, di-host sendiri.** Mukta 400/500/600, ditarik lewat Fonts API Astro
(`fonts` di `astro.config.mjs`), bukan `@import` ke Google Fonts: berkasnya ikut ke `dist/`,
di-preload, dan punya fallback yang metrik-nya disesuaikan. Dipilih sebagai sans humanis gratis
yang paling dekat dengan Vale Sans.

**Gambar dioptimasi saat build.** Aset mentah berjumlah sekitar 100 MB. `astro:assets` menghasilkan
WebP berukuran ganda: foto hero 4,2 MB keluar sebagai 59–325 kB tergantung lebar layar. Beranda
produksi memuat sekitar 350 kB dalam 11 permintaan; JavaScript-nya 16 kB terkirim.

**Tidak ada video.** Video hero (11,5 MB) dan animasi pembuka dibuang saat situs dirombak ala
Vale; hero kini karusel foto.

**Foto masih pengganti.** Bundle desain hanya menyertakan lima foto; slot lain memakai pelat hatch
`Plate` dengan keterangan huruf kecil yang menjelaskan foto apa yang seharusnya ada di situ
(`distillation hall, Medan works`, `tapper at the incision, Tapanuli`). Keterangan itu sengaja
dipertahankan: ia menjadi daftar pemotretan. Untuk memasang foto asli, taruh berkasnya di
`src/assets/images/`, daftarkan di `src/data/images.ts`, lalu berikan `image` pada data terkait.

**Logo (27 September 2026).** Logo resmi datang dari `../logo` dan `../lockup` (desain pemilik):
tanda layar/daun berpalet pekat (hijau `#248F76 #026A5B #034C44`, oker `#E3CCA5 #D9AA5A #D58207`)
dengan garis halus, dan lockup yang memuat tulisan ADHILOKA abu `#77787B` setinggi setengah tanda.
Sejak 27 September 2026 tanda logo hanya dipakai sebagai favicon. Header memakai
`src/components/Wordmark.astro`, yaitu path tulisan ADHILOKA dari lockup resmi yang disalin apa
adanya, dengan viewBox dipangkas dan `fill="currentColor"` (putih di atas foto, gelap di bar putih).
`public/brand/adhiloka-lockup.svg` tetap tersedia untuk bahan pers. Favicon lengkap (`favicon.ico`, `favicon.svg` dari versi
persegi, `favicon-32.png`, `apple-touch-icon.png`, `icon-192/512.png`) dan `site.webmanifest` ada di
`public/`. Palet situs tetap palet Vale (teal, emas, biru langit); palet logo hanya dipakai di logo.
`og.png` (gambar bagikan sosial) belum diganti.

## Yang diperbaiki dari prototipe

Rekreasinya mengikuti desain dari ukuran, warna, sampai kurva gerak. Yang berbeda, dan alasannya:

- **Navigasi jadi tautan sungguhan.** Prototipe memakai `<a href="#">` dengan state klien untuk
  semua rute. Sekarang lima halaman asli dengan URL, tombol maju/mundur, dan sitemap. Perpindahannya
  tetap memudar lewat kurtin putih, kini digerakkan View Transitions.
- **Fokus papan ketik terlihat.** Prototipe tidak punya indikator fokus sama sekali. Ditambah, plus
  tautan lewati-ke-konten.
- **Laci pencarian benar-benar mencari.** Di desain kolomnya hiasan. Sekarang menyaring indeks statis
  berisi 18 material dan enam bagian halaman, lengkap dengan pengumuman jumlah hasil untuk pembaca layar.
- **Laci material bisa ditautkan.** `/ingredients/catalog/#patchouli` membukanya langsung; menutup
  mengembalikan URL. Ada jebakan fokus, Escape, dan fokus kembali ke kartu asal.
- **Penyaring tersimpan di URL.** `?family=spice` bisa dibagikan.
- **Formulir memvalidasi dan mengirim.** Ada pesan galat per kolom, `aria-invalid`, keadaan mengirim,
  keadaan gagal, dan perangkap bot. Tautan dari laci material mengisi kolom Brief lebih dulu.
- **Kontras dinaikkan pada teks kecil.** Semua tinta dan hijau tautan lolos WCAG AA di atas putih;
  hijau logo `#009978` (3,6:1) hanya dipakai untuk garis dan isian, tidak untuk teks. Empat halaman
  bersih; teks di atas foto hero dibantu selubung gelap dari bawah dan atas.
- **Sasaran sentuh 24 px.** Titik hero tetap terlihat 5–6 px tetapi area kliknya penuh.
- **Katalog dua kolom di ponsel.** Satu kolom membuat halaman ini sepanjang 9.600 px; sekarang separuhnya.
- **`prefers-reduced-motion` dihormati.** Kemunculan, tirai, menu, zoom Ken Burns, dan crossfade hero berhenti.
- **Garis bawah "Discover" di hero disamakan** dengan tautan sejenis lainnya: terlihat saat diam,
  menyapu hilang saat hover. Di prototipe logikanya terbalik.

## Meniru Vale

Sejak 25 September 2026 bahasa visual situs ini meniru **valeindonesia.com/indonesia.html** atas
permintaan pemilik. Warna, takaran huruf, dan durasi gerak diambil dari DOM dan CSS situs itu,
bukan dikira dari tangkapan layar. Yang **tidak** disalin: foto, naskah, logo, berkas SVG
lengkung, dan font Vale Sans (milik Vale). Lengkung dan gelombang di sini digambar sendiri dari
gelombang di logo Adhiloka (`components/Waves.astro`).

| Unsur Vale | Di Adhiloka |
| --- | --- |
| Menu layar penuh tiga kolom (menu teal, panel putih sub-menu, foto bergelombang), mekanismenya disalin dari CSS/JS menu-lateral Vale dan diukur di Chrome | `MenuOverlay.astro`, logikanya di `scripts/header.ts` |

**Yang sengaja BUKAN Vale (27 September 2026):**
- **Header** memakai pola louisvuitton.com, bukan lekukan putih Vale (lekukan itu cocok untuk logo
  V yang pendek, tidak untuk tulisan ADHILOKA). Satu bar tiga kolom: ☰ Menu + Search di kiri,
  wordmark di tengah, Contact + pemilih bahasa di kanan. Transparan berhuruf putih di atas foto
  section 1, bar putih (`is-solid`) setelahnya. Tinggi `--header-h`, tepi `--header-gutter`.
- **Hero (section 1)** dikembalikan ke versi awal situs (branch `main`): karusel tiga foto,
  crossfade 1,2 s, zoom Ken Burns 9 s, judul di tengah bawah, Discover bergaris bawah, panah
  kiri/kanan, titik kecil, panah bawah berdenyut, tidak maju sendiri. Tanpa video; judul Mukta.
  Dipakai juga oleh hero hub dan Contact (di sana Discover menggulir ke section berikutnya).
| Panah progres gulir di kanan bawah | `ScrollProgress.astro` + `scripts/scroll-progress.ts` |
| Beranda: pembuka + angka sekilas, kotak Sustainability, karusel kartu, pita emas, pita biru langit, karusel berita | `pages/index.astro` |
| Kotak foto bergelombang atas-bawah | `GetInTouch.astro` (hub), kotak Sustainability di beranda |
| Pita foto + naskah berwarna | `Band.astro`: `ground` paper = putih, sunk = emas, plate = biru langit |
| Kartu foto 4px + kotak teks + "Access … →" | `Tile.astro`, `CardGrid.astro` |
| Karusel "Scroll to see more" | `SlideRail.astro` + `scripts/slide-rail.ts`, tanpa pustaka |
| Footer teal sesederhana Vale: judul "Adhiloka" + ikon sosial bulat, daftar halaman utama, grup "Explore", satu baris hak cipta | `Footer.astro`, `FOOTER_EXPLORE` di `data/site.ts` |

**Gulir** kembali manual bawaan peramban. Gulir per section dan gulir halus Lenis sempat
dipertahankan, lalu dicabut pada 26 September 2026 atas permintaan pemilik (roda harus berputar
berkali-kali sebelum halaman bergerak). Paket `lenis` masih terpasang di `package.json` tapi tidak
lagi dipakai; boleh dibuang dengan `npm uninstall lenis`. Section juga tidak lagi diregangkan
setinggi layar: tingginya mengikuti isi (padding `--pad-y` 28-48px) sehingga dua section muat
dalam satu layar, seperti di Vale.

Yang **dibuang**: video hero, animasi pembuka kunjungan pertama, judul dipecah per baris, ornamen
di blok jeda, nav enam menu di bilah atas.

## Sistem visual

Semuanya tinggal di `src/styles/tokens.css`.

**Huruf.** Satu keluarga, Mukta 400/500/600, untuk judul dan isi, pengganti Vale Sans. Judul
section 38px/500, judul hero sampai 63px/600, paragraf 18px. Tidak ada huruf kapital berjarak
lebar; label memakai huruf biasa 14–15px/500. Mukta tidak punya italic, dan `font-synthesis: none`
melarang peramban memalsukannya, jadi nama Latin di katalog tampil tegak.

**Warna.** Nilai dari DOM valeindonesia.com. Rasio kontras dihitung, bukan dikira.

| Peran | Token | Catatan |
| --- | --- | --- |
| Utama | `--teal` `#007e7a` | Judul, tautan, tombol, footer. 4,9:1 di atas putih, putih di atasnya 4,9:1 |
| Hover | `--teal-dark` `#005f5c`, `--teal-deep` `#004a47` | Tombol dan tautan teks |
| Emas | `--gold` `#ecb11f` | **Bukan warna teks** (1,9:1 di putih, 2,6:1 di teal). Tombol menu, panah, butir, pita |
| Biru langit | `--sky` `#3cb5e5` | Pita kedua. Putih di atasnya cuma 2,4:1, jadi teksnya `--ink` |
| Mint | `--mint` `#10b89a` | Gelombang dekoratif saja |
| Tinta | `--ink` `#222`, `--ink-body` `#555`, `--ink-muted` `#6b6b6b` | 15,9 / 7,5 / 5,3:1 di atas putih |
| Emas lembut | `--gold-soft` `#f6d27a` | Menu terpilih di atas teal (3,4:1, teks besar) |

Di atas pita emas dan biru langit semua teks `--ink`; kelas `.on-color` menandainya.

**Irama warna.** Halaman tidak monoton: tidak ada dua section berdampingan yang sewarna, urutannya
putih, tint pucat (`--tint-teal|sky|gold`), lalu pita solid teal, emas, biru langit, lalu putih lagi.
`Band` mengikuti `groundAt()` di `src/data/ground.ts` (putih, emas, teal, biru langit) dan foto
diberi bilah aksen 25px di sisi kiri (oranye di pita emas, emas di pita teal). Latar section polos
lewat kelas `bg-tint-*` / `bg-teal` (`global.css`). Tint sengaja pucat supaya teal kecil di atasnya
tetap 4,5:1.

**Toolbar dev Astro dimatikan** (`devToolbar.enabled: false`): pil hitamnya menutupi panah hero di
tengah bawah dan menangkap kliknya.

Nama token lama (`--ivory-*`, `--stone-*`, `--espresso`, `--green-*`, `--yellow-*`, `--acc-text`)
masih hidup sebagai alias dan kini menunjuk palet Vale.

**Bentuk.** Tombol pil radius 40px dengan pendar warnanya sendiri saat hover (`0 0 6px`), kartu
dan foto radius 4px, tanpa bayangan.

## Gerak

Semuanya mati saat `prefers-reduced-motion: reduce`.

| Apa | Di mana | Takaran (dari CSS Vale) |
| --- | --- | --- |
| Elemen masuk dari arahnya | `data-reveal` + `data-reveal-from="left\|right"`, `scripts/reveal.ts` | transform 0,75 s + opacity 0,55 s linear, jeda 0,3 s |
| Tirai gambar | `scripts/image-reveal.ts` (`.plate`, `[data-curtain]`) | lapisan teal bergeser keluar 1 s saat gambar terlihat |
| Menu | `MenuOverlay.astro` | lapisan memudar 0,3 s; isi kolom `left:-100%→0` 0,6 s ease-in jeda 0,5 s; tirai `fixed` 48%→100% 0,6 s ease-in jeda 0,5 s; tutup 0,2 s jeda 0,2 s; sub-menu muncul saat hover/fokus (opacity 0,3 s), item bergeser 1,25rem 0,4 s, segitiga 20×26px −4,75→−3,5rem; HP: masuk dari kanan 0,3 s, halaman terdorong 7,5rem |
| Burger | `Header.astro` | garis tengah bergeser 9px saat hover, 0,3 s |
| Panah progres | `scripts/scroll-progress.ts` | cincin transparan mengikuti persen gulir; panah berbalik 0,4 s di dasar; klik = satu langkah (`langkahHalaman` di `sections.ts`) |
| Gulir | bawaan peramban | Lenis dan langkah per section dicabut (26 Sep 2026): gulir manual biasa |
| Tombol panah | `scripts/sections.ts` `langkahHalaman` | menggulir ke section berikutnya |
| Morph kartu → laci | `scripts/materials.ts` | tidak diubah |

Dua aturan yang mudah dilanggar tanpa sengaja:

- **CSS tidak boleh menyembunyikan isi sendirian.** Semua keadaan "tersembunyi sampai muncul"
  digerbangi `html.js`, dan kelas tirai `.curtain` hanya dipasang skrip. Tanpa JavaScript,
  halaman tampil utuh.
- **`overflow-x` memakai `clip`, bukan `hidden`.** `hidden` menjadikan elemennya wadah gulir,
  dan itu membuat bilah penyaring lengket di `/ingredients/catalog/` menempel pada kotak yang salah.

## Isi yang dibuang

Daftar sertifikasi (ISO 9001, IFRA, Kosher & Halal, CITES, EUDR) belum kembali. Sustainability
sekarang punya bagiannya sendiri lagi dengan dua halaman, dan program penyadap sudah masuk ke
`/sustainability/people/`, tapi sertifikasi belum ditulis ulang — itu justru bagian yang paling
membedakan Adhiloka dari pemasok lain. Naskah lamanya ada di riwayat git.

## Yang belum dikerjakan

- **Dwibahasa.** Pemilih bahasa dipertahankan persis seperti desain, tetapi belum tersambung ke
  terjemahan; kedua pilihan menuju halaman yang sama. Menyambungkannya berarti menambah rute `/id/`
  dan memindahkan teks di `src/data/` ke berkas per bahasa.
- **Kursor kustom, angka menghitung naik, parallax pita, dan mode gelap** — dipertimbangkan lalu
  ditolak. Ketiganya yang pertama membuat situs pemasok terbaca seperti situs portofolio; yang
  terakhir belum dipikirkan untuk palet Vale.
- **Widget A+ / A- / Contrast** milik Vale sengaja tidak ditiru, atas keputusan pemilik.
- **Halaman sendiri per material.** Sekarang spesifikasi tinggal di laci. Semua 18 panelnya ada di
  HTML sehingga terbaca mesin telusur, tetapi halaman tersendiri akan lebih baik untuk pencarian.
