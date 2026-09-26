# Section

Kosakata untuk membicarakan halaman situs ini. Sebutkan **"section 3 halaman
depan"**, bukan "bagian karusel yang di bawah foto itu".

## Aturannya

Tiap halaman dibagi menjadi section bernomor **1..N** dari atas ke bawah.
Nomornya bukan ditulis tangan — dihitung saat halaman dimuat oleh
[`src/scripts/sections.ts`](src/scripts/sections.ts) dan ditulis ke DOM sebagai
`data-section`, jadi bisa dilihat langsung di inspektur peramban.

Yang jadi calon section adalah anak langsung `<main>`, ditambah footer. Dari
situ dua hal diputuskan:

**Tempelan.** Blok yang lebih pendek daripada 45% tinggi layar bukan section
tersendiri — bilah saudara, catatan satu baris, bilah saring. Ia bergabung ke
blok utama **sesudahnya**, karena catatan dan saringan selalu mendahului isi
yang dilayaninya. Bilah saring yang memenuhi satu layar penuh sementara isi
yang disaringnya ada di layar berikutnya adalah halaman yang rusak.

**Muat atau tidak.** Tinggi alami tiap section dibandingkan tinggi layar:

- `fit` — muat satu layar. Tingginya **dibiarkan apa adanya**: aturan lama yang
  meregangkan tiap section jadi tepat 100svh dicabut pada 26 September 2026,
  supaya tata ruang mengikuti estetika, bukan tinggi jendela. Hero beranda dan
  hub tetap setinggi layar karena itu memang desain hero.
- `tall` — memang lebih tinggi dari layar: katalog 18 bahan, linimasa enam
  generasi, daftar berita, formulir kontak. Section ini **tidak** diregangkan
  dan **tidak** dipaksa muat. Memaksanya berarti memotong isi.

Label itu ditulis sebagai `data-section-fit`, dan dihitung ulang saat jendela
diubah ukurannya — jadi satu section bisa `fit` di layar tinggi dan `tall` di
layar pendek.

## Gulirnya

Satu gerakan roda = satu section. Gerakan berikutnya diabaikan sampai
animasinya selesai, jadi trackpad yang mengirim puluhan kejadian per gerakan
tidak melompati tiga section sekaligus.

Di dalam section `tall`, gulir dilepas bebas sampai tepinya tercapai — barulah
gerakan berikutnya melangkah ke section berikutnya. Tanpa itu isi setinggi tiga
layar akan terlewat begitu saja.

Papan ketik: `PageDown` / `PageUp` / `Spasi` / `Shift+Spasi` melangkah satu
section, `Home` dan `End` ke ujung.

Semuanya hanya berlaku pada syarat yang sama dengan gulir halus Lenis: tetikus
presisi, layar ≥900px, dan bukan `prefers-reduced-motion`. Di telepon, tablet,
dan bagi yang mematikan animasi, halaman bergulir seperti biasa — begitu pula
bila JavaScript gagal.

## Peta halaman

Diukur di 1536×694. Jumlah section berubah mengikuti tinggi layar: makin tinggi
layar, makin banyak yang `fit`.

**Gulir manual bawaan.** Gulir per section dan gulir halus Lenis dicabut pada
26 September 2026 atas permintaan pemilik: roda harus berputar berkali-kali
sebelum halaman bergerak. Sekarang satu putaran roda menggulir 100px seperti
situs biasa. Penanda `data-section` tetap dipasang untuk tombol panah (progres
gulir, panah hero, Discover di hub), yang memakai `langkahHalaman()` di
`sections.ts` untuk menggulir ke section berikutnya.

> Tabel di bawah ditulis sebelum rombak ala Vale dan jumlah section beberapa
> halaman sudah berubah; peta yang benar ada di `petaSection()` (konsol).

| Halaman | N | Section |
|---|---|---|
| `/` | **8** | 1 hero · 2 pembuka + angka · 3 kotak Sustainability · 4 karusel kartu · 5 pita emas · 6 pita biru langit · 7 berita (`tall`) · 8 footer |
| `/about/` | 5 | 1 kepala hub `tall` · 2 pembuka · 3 angka + kartu `tall` · 4 jeda · 5 footer |
| `/about/our-business/` | 6 | 1 kepala · 2–4 tiga pita `tall` · 5 jeda · 6 footer |
| `/about/our-purpose/` | 6 | 1 kepala · 2 naskah · 3 kutipan · 4 nilai · 5 jeda · 6 footer — **semuanya muat** |
| `/about/our-history/` | 4 | 1 kepala · 2 linimasa `tall` · 3 jeda · 4 footer |
| `/about/our-leadership/` | 5 | 1 kepala · 2 orang `tall` · 3 naskah · 4 jeda · 5 footer |
| `/about/our-locations/` | 5 | 1 kepala · 2 daftar lokasi `tall` · 3 naskah `tall` · 4 jeda · 5 footer |
| `/perfumery/` | 5 | 1 kepala hub `tall` · 2 pembuka · 3 angka + kartu `tall` · 4 jeda · 5 footer |
| `/perfumery/fine-fragrance/` | 7 | 1 kepala · 2–3 pita `tall` · 4 kutipan · 5 pita · 6 jeda · 7 footer |
| `/perfumery/fragrance-innovation/` | 6 | 1 kepala · 2 pita `tall` · 3 pita · 4 pita `tall` · 5 jeda · 6 footer |
| `/ingredients/` | 6 | 1 kepala hub `tall` · 2 pembuka · 3 angka + kartu `tall` · 4 naskah · 5 jeda · 6 footer |
| `/ingredients/catalog/` | **3** | 1 kepala · 2 saringan + 18 bahan `tall` · 3 footer |
| `/ingredients/technology/` | 6 | 1 kepala · 2 naskah `tall` · 3 pita · 4 pita `tall` · 5 jeda · 6 footer |
| `/sustainability/` | 5 | 1 kepala hub `tall` · 2 pembuka · 3 angka + kartu `tall` · 4 jeda · 5 footer |
| `/sustainability/responsible-sourcing/` | 6 | 1 kepala · 2 naskah `tall` · 3 pita · 4 pita `tall` · 5 jeda · 6 footer |
| `/sustainability/people/` | 7 | 1 kepala · 2 pita `tall` · 3 pita · 4 kutipan · 5 pita `tall` · 6 jeda · 7 footer |
| `/media/` | 5 | 1 kepala hub `tall` · 2 berita `tall` · 3 kartu · 4 kartu · 5 footer |
| `/media/news/` | 4 | 1 kepala · 2 daftar berita `tall` · 3 jeda · 4 footer |
| `/media/media-resources/` | 5 | 1 kepala · 2 unduhan `tall` · 3 naskah · 4 jeda · 5 footer |
| `/media/social-media/` | 5 | 1 kepala · 2 kanal · 3 naskah · 4 jeda · 5 footer — **semuanya muat** |
| `/contact/` | **3** | 1 kepala · 2 formulir `tall` · 3 footer |
| `/media/news/<slug>/` | 3 | 1 kepala artikel `tall` · 2 isi artikel `tall` · 3 footer |

## Yang masih belum muat satu layar

Empat kepala halaman **hub** (`/about/`, `/perfumery/`, `/ingredients/`,
`/sustainability/`, `/media/`) tetap `tall` di layar 694px: judulnya memakai
`--type-display` (7vw ≈ 107px) dan ledenya panjang. Mengecilkannya berarti
mengubah bahasa tipografi situs, bukan sekadar menyetel jarak — jadi dibiarkan
dan digulir bebas.

Blok `tall` sisanya memang panjang isinya. Kalau salah satunya ingin dijadikan
satu layar, jalannya adalah memecah isinya (mis. katalog jadi beberapa
section per kelompok bahan), bukan memampatkan tampilannya.

## Cara memeriksa

Buka konsol peramban di halaman mana pun:

```js
document.querySelectorAll('[data-section]').forEach((el) =>
  console.log(el.dataset.section, el.className, el.dataset.sectionFit),
);
```
