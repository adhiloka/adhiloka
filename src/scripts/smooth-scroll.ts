/** Gulir momentum untuk roda tetikus dan trackpad. Sentuhan dibiarkan native —
 *  momentum bawaan iOS dan Android sudah baik, dan membajaknya menambah jeda
 *  yang justru terasa berat.
 *
 *  Situs ini punya dua wadah yang menggulir sendiri, laci pencarian dan laci
 *  spesifikasi. Keduanya ditandai `data-lenis-prevent` supaya gulirannya tidak
 *  ikut dibajak. */

import Lenis from 'lenis';
// Lima aturan bawaan Lenis. Yang paling penting di sini adalah
// `overscroll-behavior: contain` pada [data-lenis-prevent], yang menahan
// guliran agar tidak merambat keluar dari laci saat isinya sudah mentok.
import 'lenis/dist/lenis.css';

let lenis: Lenis | null = null;
let paused = 0;

const suitable = () =>
  window.matchMedia('(pointer: fine)').matches &&
  window.matchMedia('(min-width: 900px)').matches &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Instance Lenis yang sedang hidup, atau null kalau syaratnya tidak terpenuhi.
 *  Dipakai pelangkah section (scripts/sections.ts) untuk meminjam mesin
 *  animasinya, dan sekaligus sebagai penanda "mode gulir halus sedang aktif". */
export const getLenis = () => lenis;

export function initSmoothScroll() {
  if (lenis || !suitable()) return;

  lenis = new Lenis({
    smoothWheel: true,
    syncTouch: false,
    lerp: 0.1,
    wheelMultiplier: 1,
    autoRaf: true,
    allowNestedScroll: true,
    prevent: (node) => node.hasAttribute?.('data-lenis-prevent') ?? false,
  });
}

/** Dipanggil setelah view transition mengganti isi halaman.
 *
 *  Laci pencarian, menu layar sempit dan drawer spesifikasi semuanya mengunci
 *  gulir lewat pauseScroll() + `documentElement.style.overflow`, dan hanya
 *  melepaskannya lewat handler penutup mereka sendiri. Tapi tautan di dalam
 *  laci itu menavigasi langsung — <html> bertahan lintas navigasi (ClientRouter
 *  hanya mengganti isi <body>), jadi kalau pengguna mengklik tautan sementara
 *  lacinya masih terbuka, handler penutup itu tidak pernah sempat jalan dan
 *  kuncinya terbawa ke halaman berikutnya selamanya. Di sinilah baris pertama
 *  membersihkannya tanpa syarat, apa pun yang terjadi di halaman sebelumnya. */
export function resetScroll() {
  paused = 0;
  document.documentElement.style.overflow = '';

  if (!lenis) return;
  // Kelas `lenis` dan `lenis-smooth` di <html> juga terhapus oleh pergantian
  // atribut itu, dan tanpa keduanya CSS milik Lenis berhenti berlaku —
  // `scroll-behavior: smooth` bawaan situs hidup lagi dan bertabrakan dengan
  // gulir terprogramnya. stop() lalu start() memaksa Lenis menuliskan ulang
  // kelasnya sendiri; hasil akhirnya sama dengan start() saja.
  lenis.stop();
  lenis.start();
  lenis.scrollTo(0, { immediate: true });
  lenis.resize();
}

/** Modal mengunci gulir halaman. Hitungannya bertingkat supaya laci yang
 *  terbuka di atas laci lain tidak saling melepas kunci lebih awal. */
export function pauseScroll() {
  paused += 1;
  lenis?.stop();
}

export function resumeScroll() {
  paused = Math.max(0, paused - 1);
  if (paused === 0) lenis?.start();
}

/** Satu pintu untuk semua gulir terprogram, supaya tombol kembali-ke-atas dan
 *  panah hero memakai kurva yang sama dengan gulir manual. */
export function scrollToY(target: number | HTMLElement) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  if (lenis) {
    lenis.scrollTo(target, { immediate: reduced });
    return;
  }

  const top = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
}
