/** Pembagian halaman menjadi SECTION, dan gulir yang melangkah satu section
 *  per gerakan.
 *
 *  Kosakatanya: tiap halaman punya section bernomor 1..N dari atas ke bawah.
 *  Halaman depan: 1 hero video, 2 dua foto, 3 karusel Our purpose, 4 footer.
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
 *       fit  -> muat satu layar; blok terakhirnya diregangkan sehingga seluruh
 *               kelompok jadi tepat satu layar.
 *       tall -> memang lebih tinggi dari layar (katalog 18 bahan, linimasa,
 *               daftar berita). Tidak diregangkan dan tidak dipaksa muat:
 *               memaksanya berarti memotong isi.
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

import { getLenis } from './smooth-scroll';
import { revealWithin } from './reveal';

/** Di bawah pecahan tinggi layar ini, sebuah blok dianggap tempelan. */
const AMBANG_TEMPEL = 0.45;
const SLACK = 8;
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
    el.style.removeProperty('--section-fill');
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
    if (muat) {
      // Yang diregangkan hanya blok terakhir kelompok, sebesar sisa layar
      // setelah tempelan di atasnya — sehingga kelompoknya, bukan bloknya,
      // yang berakhir setinggi satu layar.
      const lain = Math.round(total - (tinggi.get(g.akhir) ?? 0));
      g.akhir.style.setProperty('--section-fill', 'calc(100svh - ' + lain + 'px)');
    }
  });

  grup = baru;

  // Lenis menyimpan batas gulirnya sendiri (tinggi dokumen dikurangi tinggi
  // layar) dan hanya menghitungnya ulang kalau diminta. Fungsi inilah yang
  // MENGUBAH tinggi dokumen — meregangkan tiap section yang muat jadi setinggi
  // layar — jadi di sinilah Lenis harus diberi tahu.
  //
  // Tanpa ini, urutannya salah saat berpindah halaman: resetScroll() memanggil
  // resize() pada astro:after-swap, ketika section baru belum ditandai sama
  // sekali. Di halaman About, Lenis mengukur dokumen setinggi 2027px lalu
  // halamannya menjadi 2082px sepersekian detik kemudian. Batas gulir yang ia
  // percayai jadi 55px lebih pendek daripada yang sebenarnya, dan langkah
  // terakhir berhenti sebelum sampai.
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

  // Selebihnya roda tidak pernah menggulir bebas: entah ia melangkah, entah ia
  // ditelan. Yang ditelan pun harus dicegat, kalau tidak ekor inersia akan
  // menggeser halaman keluar dari perhentiannya.
  e.preventDefault();
  e.stopPropagation();

  if (!gerakanBaru) return;

  // Langkah baru boleh menyambung langkah yang sedang berjalan — itulah yang
  // membuat dua sentakan beruntun terasa langsung menyahut, bukan mati.
  // Kecualinya: kalau yang sedang dituju adalah section yang lebih tinggi dari
  // layar, biarkan mendarat dulu — menyambung berarti melewatkan isinya.
  if (sibuk && tinggiSection(grup[indeks]) === 'tall') return;

  const dari = sibuk ? indeks : indeksSekarang();
  const tujuan = dari + arah;
  if (tujuan < 0 || tujuan > grup.length - 1) return;

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
    e.preventDefault();
    keSection((sibuk ? indeks : indeksSekarang()) + arah);
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
