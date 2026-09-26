/** Pembagian halaman menjadi SECTION, dan gulir yang melangkah satu section
 *  per gerakan.
 *
 *  Kosakatanya: tiap halaman punya section bernomor 1..N dari atas ke bawah.
 *  Halaman depan: 1 hero, 2 pembuka, 3 kotak Sustainability, 4 karusel kartu,
 *  5 pita emas, 6 pita biru langit, 7 berita, 8 footer.
 *  Nomor itu ditulis ke DOM sebagai `data-section`, jadi bisa dilihat di
 *  inspektur dan dipakai sebagai rujukan saat bicara.
 *
 *  Tiga hal yang dikerjakan berkas ini.
 *
 *  1. MENGELOMPOKKAN. Anak langsung <main> (ditambah footer) dipilah jadi blok
 *     utama dan blok tempelan. Tempelan adalah blok yang lebih pendek daripada
 *     45% layar — catatan satu baris, bilah saring, bilah saudara — dan blok
 *     semacam itu tidak pantas jadi perhentian gulir tersendiri: bilah saring
 *     yang memenuhi satu layar penuh sementara isi yang disaringnya ada di
 *     layar berikutnya adalah halaman yang rusak. Tempelan bergabung ke blok
 *     utama SESUDAHNYA, karena catatan dan saringan selalu mendahului isinya.
 *
 *  2. MENGUKUR. Tinggi alami tiap kelompok dibandingkan tinggi layar:
 *       fit  -> muat satu layar. Tingginya dibiarkan apa adanya: sejak
 *               September 2026 section tidak lagi diregangkan jadi satu layar
 *               penuh, tinggi ditentukan isi dan padding masing-masing.
 *       tall -> memang lebih tinggi dari layar (katalog 18 bahan, linimasa,
 *               daftar berita). Gulir dilepas bebas di dalamnya.
 *
 *  3. MELANGKAH. Satu gerakan roda memindahkan tepat satu section. Yang
 *     dihitung adalah GERAKAN, bukan kejadian: trackpad mengirim puluhan
 *     kejadian roda per sentakan, dan semua kejadian yang datang rapat-rapat
 *     sesudahnya dianggap ekor inersia dari sentakan yang sama.
 *
 *     Sentakan baru boleh menyambung langkah yang sedang berjalan — dua
 *     sentakan beruntun berarti dua section, tanpa perlu menunggu yang pertama
 *     mendarat. Versi sebelumnya menelan setiap gerakan selama animasi plus
 *     260ms sesudahnya, dan karena jaring pengamannya mengulang hitungan itu,
 *     ada ±1,4 detik di mana roda tidak berbuat apa-apa — persis yang terbaca
 *     sebagai "harus beberapa kali menggulir baru bergeser".
 *
 *     Di dalam kelompok "tall", gulir dilepas bebas sampai tepinya tercapai —
 *     barulah gerakan berikutnya melangkah. Tanpa itu isi setinggi tiga layar
 *     akan terlewat begitu saja.
 *
 *  Semua digerbangi kelas `.js` dan syarat yang sama dengan Lenis (tetikus
 *  presisi, layar >=900px, bukan prefers-reduced-motion). Di telepon dan pada
 *  prefers-reduced-motion, halaman bergulir seperti biasa.
 */

import { getLenis, scrollToY } from './smooth-scroll';
import { revealWithin } from './reveal';

/** Di bawah pecahan tinggi layar ini, sebuah blok dianggap tempelan. */
const AMBANG_TEMPEL = 0.45;
const SLACK = 8;

/** Sakelar: false mematikan langkah per section, dan roda/papan ketik kembali
 *  ke gulir halus Lenis biasa. Tombol panah tetap memakai `langkahHalaman`. */
const LANGKAH_PER_SECTION = true;
const DURASI = 0.85;

/** Jarak waktu antar-kejadian roda yang memisahkan gerakan baru dari ekor
 *  inersia. Trackpad mengirim kejadian tiap ±16ms selama meluncur, dan roda
 *  tetikus yang diputar sekali mengirimnya berjarak ratusan milidetik — angka
 *  ini duduk di antaranya, jadi satu sentakan tetap satu langkah sementara
 *  putaran demi putaran tetap dihitung sendiri-sendiri. */
const JEDA_GERAKAN = 110;

/** Kurva langkah: hampir seluruh jarak ditempuh di awal lalu melandai panjang —
 *  keluarga yang sama dengan --ease-reveal milik kemunculan. */
const KURVA = (t: number) => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t));

type Grup = { els: HTMLElement[]; awal: HTMLElement; akhir: HTMLElement };

let grup: Grup[] = [];
let indeks = 0;
let sibuk = false;
let langkahKe = 0;
let kejadianTerakhir = 0;
let terpasang = false;

const bisaMelangkah = () =>
  LANGKAH_PER_SECTION &&
  !!getLenis() &&
  window.matchMedia('(pointer: fine)').matches &&
  window.matchMedia('(min-width: 900px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Gulir sedang dikunci oleh laci pencarian atau menu layar sempit. */
const terkunci = () => document.documentElement.style.overflow === 'hidden';

const atas = (el: HTMLElement) => el.getBoundingClientRect().top + window.scrollY;

function calon() {
  const main = document.getElementById('main');
  if (!main) return [];

  const anak = Array.from(main.children).filter((n): n is HTMLElement => {
    if (!(n instanceof HTMLElement)) return false;
    if (n.tagName === 'SCRIPT' || n.tagName === 'STYLE') return false;
    // Laci dan panel tersembunyi punya tinggi 0; bukan bagian alur halaman.
    return n.offsetHeight > 0;
  });

  const footer = document.querySelector<HTMLElement>('.site-footer');
  return footer ? [...anak, footer] : anak;
}

function bersihkan(els: HTMLElement[]) {
  els.forEach((el) => {
    el.removeAttribute('data-section');
    el.removeAttribute('data-section-total');
    el.removeAttribute('data-section-fit');
  });
}

/** Tinggi alami harus dibaca sebelum regangan dipasang, jadi seluruh label
 *  dilepas dulu sekaligus — satu reflow, bukan satu per blok. */
function susun() {
  const els = calon();
  if (!els.length) {
    grup = [];
    return;
  }

  bersihkan(els);

  const layar = window.innerHeight;
  const tinggi = new Map(els.map((el) => [el, el.getBoundingClientRect().height]));
  const ambang = layar * AMBANG_TEMPEL;

  const baru: Grup[] = [];
  let nempel: HTMLElement[] = [];

  els.forEach((el) => {
    const tempelan = el.hasAttribute('data-section-skip') || (tinggi.get(el) ?? 0) < ambang;
    if (tempelan) {
      nempel.push(el);
      return;
    }
    const anggota = [...nempel, el];
    nempel = [];
    baru.push({ els: anggota, awal: anggota[0], akhir: el });
  });

  // Sisa tempelan di ekor halaman ikut kelompok terakhir; kalau seluruh halaman
  // ternyata hanya tempelan, mereka jadi satu kelompok sendiri.
  if (nempel.length) {
    if (baru.length) {
      const ekor = baru[baru.length - 1];
      ekor.els.push(...nempel);
      ekor.akhir = nempel[nempel.length - 1];
    } else {
      baru.push({ els: nempel, awal: nempel[0], akhir: nempel[nempel.length - 1] });
    }
  }

  baru.forEach((g, i) => {
    const total = g.els.reduce((n, el) => n + (tinggi.get(el) ?? 0), 0);
    const muat = total <= layar + SLACK;

    g.els.forEach((el) => {
      el.setAttribute('data-section', String(i + 1));
      el.setAttribute('data-section-total', String(baru.length));
    });

    g.akhir.setAttribute('data-section-fit', muat ? 'fit' : 'tall');
  });

  grup = baru;

  // Lenis menyimpan batas gulirnya sendiri (tinggi dokumen dikurangi tinggi
  // layar) dan hanya menghitungnya ulang kalau diminta. Pengukuran ulang di
  // sini murah dan menjaga batasnya benar setelah huruf dan foto mengendap.
  getLenis()?.resize();
}

function indeksSekarang() {
  const y = window.scrollY;
  let cur = 0;
  grup.forEach((g, i) => {
    if (atas(g.awal) <= y + SLACK) cur = i;
  });
  return cur;
}

/** Indeks grup tujuan dihitung dari POSISI gulir, bukan dari "section saat
 *  ini". Turun: grup pertama yang tepinya di bawah layar. Naik: grup terakhir
 *  yang tepinya di atas layar. Dengan begitu naik dari posisi yang tak selaras
 *  (16px di atas footer, atau di tengah section pertama) mendarat di tepi
 *  terdekat, tidak melompati satu section dan tidak berhenti tanpa berbuat apa
 *  pun. -1 berarti sudah di ujung halaman. */
function tujuanDariPosisi(arah: number): number {
  const y = window.scrollY;
  if (arah > 0) {
    const maks = document.documentElement.scrollHeight - window.innerHeight;
    if (y >= maks - SLACK) return -1;
    return grup.findIndex((g) => atas(g.awal) > y + SLACK);
  }
  for (let i = grup.length - 1; i >= 0; i--) {
    if (atas(grup[i].awal) < y - SLACK) return i;
  }
  return -1;
}

/** Satu langkah untuk tombol panah (progres gulir, panah hero). Di dalam
 *  kelompok yang lebih tinggi dari layar ia menggulir 0,85 layar; di tempat
 *  lain ia ke tepi section berikutnya (atau sebelumnya). Berfungsi juga di
 *  layar sentuh, karena grup section selalu dihitung. Mengembalikan false
 *  bila sudah di ujung. */
export function langkahHalaman(arah: 1 | -1): boolean {
  const y = window.scrollY;
  const layar = window.innerHeight;
  const g = grup[indeksSekarang()];
  let target: number | null = null;

  if (g && g.akhir.getAttribute('data-section-fit') === 'tall') {
    const atasnya = atas(g.awal);
    const bawahnya = g.akhir.getBoundingClientRect().bottom + y;
    if (arah > 0 && bawahnya > y + layar + SLACK) target = Math.min(y + layar * 0.85, bawahnya - layar);
    if (arah < 0 && atasnya < y - SLACK) target = Math.max(y - layar * 0.85, atasnya);
  }

  if (target === null) {
    const i = tujuanDariPosisi(arah);
    if (i >= 0) target = atas(grup[i].awal);
  }
  if (target === null) return false;

  scrollToY(Math.round(target));
  return true;
}

function keSection(i: number) {
  const g = grup[Math.max(0, Math.min(grup.length - 1, i))];
  if (!g) return;

  indeks = grup.indexOf(g);
  const lenis = getLenis();
  if (!lenis) return;

  // Nomor langkah: jaring pengaman di bawah hanya boleh melepas langkah yang
  // MEMANG dijaganya. Tanpa penanda ini, jaring dari langkah sebelumnya ikut
  // melepas langkah yang sedang berjalan.
  const ini = ++langkahKe;
  sibuk = true;

  // Sengaja TANPA `lock: true`. Kunci milik Lenis baru terbuka saat animasinya
  // selesai, dan animasi itu digerakkan requestAnimationFrame — yang berhenti
  // total di tab latar. Sekali melangkah lalu berpindah tab akan meninggalkan
  // halaman yang tidak bisa digulir sampai tab itu dilihat lagi.
  lenis.scrollTo(g.awal, {
    duration: DURASI,
    easing: KURVA,
    onComplete: () => {
      if (ini === langkahKe) sibuk = false;
    },
  });
  window.setTimeout(() => {
    if (ini === langkahKe) sibuk = false;
  }, DURASI * 1000 + 200);
}

/** Benar bila gulir harus dibiarkan apa adanya: kita sedang di dalam kelompok
 *  yang lebih tinggi dari layar dan tepinya belum tercapai. */
function bebas(arah: number) {
  const g = grup[indeksSekarang()];
  if (!g || g.akhir.getAttribute('data-section-fit') !== 'tall') return false;

  const atasnya = g.awal.getBoundingClientRect().top;
  const bawahnya = g.akhir.getBoundingClientRect().bottom;
  return arah > 0 ? bawahnya > window.innerHeight + SLACK : atasnya < -SLACK;
}

function abaikan(t: EventTarget | null) {
  const el = t as HTMLElement | null;
  return !!el?.closest?.('[data-lenis-prevent]');
}

const tinggiSection = (g: Grup) => g.akhir.getAttribute('data-section-fit');

function onWheel(e: WheelEvent) {
  if (!bisaMelangkah() || terkunci() || e.ctrlKey) return;
  if (abaikan(e.target)) return;

  const sekarang = Date.now();
  // Sebuah kejadian roda memulai gerakan baru hanya kalau ada jeda sebelumnya.
  // Ekor inersia datang rapat-rapat dan tidak pernah lolos syarat ini.
  const gerakanBaru = sekarang - kejadianTerakhir > JEDA_GERAKAN;
  kejadianTerakhir = sekarang;

  const arah = e.deltaY > 0 ? 1 : e.deltaY < 0 ? -1 : 0;
  if (!arah) return;

  // Di dalam section yang lebih tinggi dari layar, gulir memang dilepas bebas.
  if (!sibuk && bebas(arah)) return;

  // Langkah baru boleh menyambung langkah yang sedang berjalan — itulah yang
  // membuat dua sentakan beruntun terasa langsung menyahut, bukan mati. Yang
  // menyambung memakai indeks tujuan; yang baru memakai posisi gulir.
  const tujuan = sibuk ? indeks + arah : tujuanDariPosisi(arah);
  const ada = tujuan >= 0 && tujuan <= grup.length - 1;

  // Tidak ada tujuan dan tidak sedang melangkah: kita di ujung halaman. Roda
  // dilepas, tidak ditelan, supaya tidak pernah ada gerakan yang hilang begitu
  // saja.
  if (!ada && !sibuk) return;

  // Selebihnya roda tidak menggulir bebas: entah ia melangkah, entah ia
  // ditelan. Yang ditelan pun harus dicegat, kalau tidak ekor inersia akan
  // menggeser halaman keluar dari perhentiannya.
  e.preventDefault();
  e.stopPropagation();

  if (!gerakanBaru || !ada) return;

  // Kalau yang sedang dituju adalah section yang lebih tinggi dari layar,
  // biarkan mendarat dulu — menyambung berarti melewatkan isinya.
  if (sibuk && tinggiSection(grup[indeks]) === 'tall') return;

  keSection(tujuan);
}

function onKey(e: KeyboardEvent) {
  if (!bisaMelangkah() || terkunci()) return;

  const t = e.target as HTMLElement | null;
  if (t && (t.isContentEditable || /^(INPUT|TEXTAREA|SELECT)$/.test(t.tagName))) return;
  if (abaikan(e.target)) return;

  const arah =
    e.key === 'PageDown' || (e.key === ' ' && !e.shiftKey)
      ? 1
      : e.key === 'PageUp' || (e.key === ' ' && e.shiftKey)
        ? -1
        : 0;

  if (arah) {
    if (!sibuk && bebas(arah)) return;
    const tujuan = sibuk ? indeks + arah : tujuanDariPosisi(arah);
    if (tujuan < 0 || tujuan > grup.length - 1) return;
    e.preventDefault();
    keSection(tujuan);
    return;
  }

  if (e.key === 'Home') {
    e.preventDefault();
    keSection(0);
  } else if (e.key === 'End') {
    e.preventDefault();
    keSection(grup.length - 1);
  }
}

/* ── Kemunculan isi section ──────────────────────────────────────────────
   Pengamat di reveal.ts memakai rootMargin -25%: sebuah elemen baru dihitung
   terlihat setelah masuk 75% teratas layar. Aturan itu benar untuk halaman yang
   digulir merambat, tapi salah untuk section setinggi layar yang datang
   sekaligus — jeda penutup yang duduk di sepertiga bawah section tidak pernah
   melewati garis itu, dan baru muncul satu langkah gulir berikutnya.

   Jadi section yang MUAT satu layar memunculkan seluruh isinya begitu ia
   sepertiga terlihat. Section "tall" tidak: isinya memang lebih tinggi dari
   layar, dan memunculkan dua belas kartu sekaligus akan membuang kemunculan
   bertahap yang justru jadi alasan animasi itu ada. */
let pengamat: IntersectionObserver | null = null;

function amatiKemunculan() {
  pengamat?.disconnect();
  pengamat = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const g = grup.find((x) => x.awal === entry.target);
        if (!g) return;
        g.els.forEach(revealWithin);
        pengamat?.unobserve(entry.target);
      });
    },
    { threshold: 0.34 },
  );

  grup.forEach((g) => {
    if (g.akhir.getAttribute('data-section-fit') === 'fit') pengamat!.observe(g.awal);
  });
}

function susunUlang() {
  susun();
  amatiKemunculan();
}

let ukurUlang = 0;
function onResize() {
  window.clearTimeout(ukurUlang);
  ukurUlang = window.setTimeout(susunUlang, 180);
}

/** Dipanggil ulang tiap astro:page-load — isi <main> sudah berganti. */
export function initSections() {
  susun();
  amatiKemunculan();
  indeks = indeksSekarang();
  sibuk = false;
  langkahKe += 1;

  // Label fit/tall diputuskan dari tinggi saat ini, dan saat boot huruf
  // tampilan belum tentu tiba dan foto malas belum termuat — keduanya
  // menggeser tinggi. Diukur ulang sekali setelah semuanya mengendap.
  document.fonts?.ready?.then(susunUlang);
  window.setTimeout(susunUlang, 900);

  if (terpasang) return;
  // Fase tangkap di window: Lenis memasang penangan rodanya sendiri di window,
  // dan stopPropagation di sini yang menahan gerakan yang sudah dipakai untuk
  // melangkah agar tidak ikut menggulir bebas.
  window.addEventListener('wheel', onWheel, { passive: false, capture: true });
  window.addEventListener('keydown', onKey);
  window.addEventListener('resize', onResize);
  terpasang = true;
}

/** Peta section halaman ini — dipakai saat memeriksa lewat konsol peramban. */
export const petaSection = () =>
  grup.map((g, i) => ({
    nomor: i + 1,
    blok: g.els.map((el) => el.className || el.tagName).join(' + '),
    muat: g.akhir.getAttribute('data-section-fit'),
    tinggi: Math.round(g.akhir.getBoundingClientRect().bottom - g.awal.getBoundingClientRect().top),
  }));
