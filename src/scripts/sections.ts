/** Pembagian halaman menjadi SECTION.
 *
 *  Kosakatanya: tiap halaman punya section bernomor 1..N dari atas ke bawah.
 *  Nomor itu ditulis ke DOM sebagai `data-section`, jadi bisa dilihat di
 *  inspektur dan dipakai sebagai rujukan saat bicara.
 *
 *  Gulir halaman sepenuhnya bawaan peramban (manual). Gulir per section dan
 *  gulir halus Lenis dicabut pada 26 September 2026 atas permintaan pemilik:
 *  roda harus berputar berkali-kali sebelum halaman bergerak. Yang tersisa dari
 *  berkas ini hanya tiga hal.
 *
 *  1. MENGELOMPOKKAN. Anak langsung <main> (ditambah footer) dipilah jadi blok
 *     utama dan blok tempelan. Tempelan adalah blok yang lebih pendek daripada
 *     45% layar (catatan satu baris, bilah saring, bilah saudara); ia
 *     bergabung ke blok utama SESUDAHNYA.
 *
 *  2. MENGUKUR. Tinggi alami tiap kelompok dibandingkan tinggi layar (`fit`
 *     atau `tall`). Tingginya tidak diubah.
 *
 *  3. MELAYANI TOMBOL. `langkahHalaman()` dipakai tombol panah (progres gulir,
 *     panah hero, Discover di hub) untuk menggulir ke section berikutnya, dan
 *     pengamat kemunculan memunculkan isi section yang muat satu layar.
 */

import { scrollToY } from './smooth-scroll';
import { revealWithin } from './reveal';

/** Di bawah pecahan tinggi layar ini, sebuah blok dianggap tempelan. */
const AMBANG_TEMPEL = 0.45;
const SLACK = 8;

type Grup = { els: HTMLElement[]; awal: HTMLElement; akhir: HTMLElement };

let grup: Grup[] = [];
let terpasang = false;

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

  // Label fit/tall diputuskan dari tinggi saat ini, dan saat boot huruf
  // tampilan belum tentu tiba dan foto malas belum termuat — keduanya
  // menggeser tinggi. Diukur ulang sekali setelah semuanya mengendap.
  document.fonts?.ready?.then(susunUlang);
  window.setTimeout(susunUlang, 900);

  if (terpasang) return;
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
