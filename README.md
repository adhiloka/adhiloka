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

Menunya tetap menu Adhiloka (About Adhiloka · Perfumery · Ingredients · Sustainability · Media ·
Contact), tetapi tampil dan bekerja seperti menu Adani: kapital, chevron, mega-menu saat hover di
desktop, laci dari kanan dengan akordeon di layar ≤1026 px. Isi kolom mega-menu diatur di
`src/data/menu.ts`; daftar menunya tetap `NAV` di `src/data/site.ts`.

| Jalur | Susunan |
| --- | --- |
| `/` | Hero slider · kutipan terbelah · Our Business (tab Ingredients/Perfumery) · akordeon keberlanjutan · Latest News · Join Us · peringatan penipuan |
| `/about/` | Pola /about-us Adani: banner · kutipan · Who We Are · How We Work · angka · pimpinan · nilai · Our Journey · kartu |
| `/about/*` | Banner · pembuka · isi halaman · Explore More (kartu saudara) |
| `/perfumery/`, `/ingredients/`, `/sustainability/`, `/media/` | Banner · pembuka · angka · kartu anak |
| `/ingredients/catalog/` | 18 material, tab keluarga menyaring grid; `#slug` menunjuk kartunya |
| `/media/news/` | Media Releases dengan tab kategori; artikel di `/media/news/<slug>/` |
| `/contact/` | Formulir + empat kantor |

Rute lama `/our-story/`, `/fragrances/` dan `/raw-materials/` dialihkan lewat `redirects` di
`astro.config.mjs`.

```
src/
  data/         site · menu · materials · images
    pages/      home · about · perfumery · ingredients · sustainability · media · contact · types
  components/   SiteHeader · SearchOverlay · SiteFooter · BackToTop · QuoteSplit · NewsCards
    home/       HeroSlider · BusinessShowcase · SustainAccordion · JoinUs · NoticeBox
    blocks/     PageBanner · Intro · Feature · Passages · CounterGrid · CardGrid · InfoGrid
                PeopleCards · Journey · LocationCards · PressContact · SiblingCards
  layouts/      BaseLayout (meta, JSON-LD, font) · PageLayout (banner halaman dalam)
  scripts/      nav · search · hero-slider · tabs · motion · contact-form
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
- **Popup peringatan penipuan** saat halaman dibuka tidak ditiru; peringatannya cukup di kotak
  bawah beranda, dengan naskah Adhiloka sendiri.

## Naskah lorem ipsum

Sejak 29 September 2026 semua naskah situs berupa lorem ipsum atas permintaan pemilik, sampai naskah
asli yang sudah diperiksa faktanya siap. Yang **tetap asli**:

- menu bar: header, mega-menu, laci mobile, panel pencarian (`NAV`, `menu.ts`, `SEARCH_SUGGESTIONS`);
- footer;
- tombol dan label: `cta`, Know More, View All, tab, label formulir, label spesifikasi katalog;
- judul section dan judul banner, termasuk `eyebrow` dan judul kartu yang sama dengan label menu;
- data yang bukan naskah: tautan, slug, tanggal, kategori, email, telepon, `alt`, `caption`, `shot`.

Nama bahan di katalog ikut lorem. Nama aslinya disimpan di `src/data/material-names.ts` untuk
mega-menu, indeks pencarian dan formulir kontak. Angka statistik diganti angka contoh berpola
`1,234` supaya animasi hitung tetap jalan. `foundingDate` dan alamat Medan di JSON-LD dilepas
karena belum terverifikasi.

**Jangan push versi lorem ke `main`**: `main` adalah adhiloka.com.

## Tautan kosong

Tempat yang ada di pola Adani tetapi belum punya halaman di situs ini diberi `href="#"`:
semua kartu dan tombol Join Us, Careers di footer, empat tautan legal (Legal Disclaimer, Privacy
Notice, Terms & Conditions, Cookie Policy), dan pilihan bahasa IND. Cari `href="#"` untuk
menemukannya saat halamannya sudah ada.

## Logo

Lockup dari `../adhiloka-brand/web/lockup/adhiloka-lockup.svg` (tulisan Crimson Text, abu sage
`#5C6D68`), disalin ke `public/brand/` bersama PNG 1000w/2000w. Dipakai di header dan footer.
Tanda logonya sama persis dengan versi sebelumnya, jadi favicon tidak berubah.

## Sebelum tayang

1. **Naskah.** Ganti lorem ipsum dengan naskah asli (lihat "Naskah lorem ipsum"), termasuk hero
   beranda, dan pasang lagi `foundingDate`/alamat di JSON-LD bila datanya benar.
2. **Formulir kontak.** Isi `PUBLIC_FORM_ACCESS_KEY` di `.env` (Web3Forms). Selama kosong, tombol
   kirim membuka klien email pengguna.
3. **Placeholder**, semuanya ditandai komentar di berkasnya: `LEADERSHIP` (nama pimpinan) di
   `pages/about.ts`; `NEWS` (enam kabar contoh), `RESOURCES` (tautan berkas) dan `CHANNELS`
   (handle sosial) di `pages/media.ts`; `SOCIAL` di `site.ts`.
4. **Foto.** Berkas di `src/assets/images/` adalah stok botani yang namanya tidak sesuai isinya
   (daftarnya di komentar `src/data/images.ts`). Potret pimpinan dan foto pabrik/stasiun belum ada;
   tempatnya memakai pelat hijau berketerangan foto yang dibutuhkan.

## Yang belum dikerjakan

- **Dwibahasa.** Pemilih ENG/IND hanya tampilan; belum ada rute `/id/`.
- **Halaman karier dan halaman legal** (lihat "Tautan kosong").
- **Sertifikasi** (ISO 9001, IFRA, Halal, CITES, EUDR) belum ditulis ulang sejak rombakan pertama.
