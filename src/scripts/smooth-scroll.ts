/** Gulir terprogram untuk tombol (progres gulir, panah hero, Discover di hub).
 *
 *  Gulir halaman itu sendiri sepenuhnya bawaan peramban. Lenis (gulir halus)
 *  dan gulir per section dicabut pada 26 September 2026 atas permintaan
 *  pemilik: roda harus berputar berkali-kali sebelum halaman bergerak. */

export function scrollToY(target: number | HTMLElement) {
  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const top = typeof target === 'number' ? target : target.getBoundingClientRect().top + window.scrollY;
  window.scrollTo({ top, behavior: reduced ? 'auto' : 'smooth' });
}
