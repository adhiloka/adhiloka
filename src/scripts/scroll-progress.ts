/** Panah progres gulir (lihat ScrollProgress.astro). Cincin diisi lewat
 *  stroke-dashoffset; panah berbalik di dasar halaman. Klik turun satu langkah
 *  lewat langkahHalaman() milik sections.ts, jadi ukuran langkahnya sama
 *  dengan gulir roda dan bekerja juga di halaman yang section-nya tinggi. */

import { scrollToY } from './smooth-scroll';
import { langkahHalaman } from './sections';

const KELILING = 182.2;
/** Sisa gulir (px) di bawah ini dianggap sudah di dasar. */
const DASAR = 24;
let bound = false;
let raf = 0;

function sync() {
  raf = 0;
  const btn = document.querySelector<HTMLElement>('[data-scroll-progress]');
  const bar = btn?.querySelector<SVGCircleElement>('[data-scroll-progress-bar]');
  if (!btn || !bar) return;

  const maks = document.documentElement.scrollHeight - window.innerHeight;
  const p = maks > 0 ? Math.min(1, Math.max(0, window.scrollY / maks)) : 1;
  bar.style.strokeDashoffset = String(KELILING * (1 - p));

  const dasar = maks - window.scrollY < DASAR;
  btn.classList.toggle('is-end', dasar);
  btn.setAttribute('aria-label', dasar ? 'Back to top' : 'Go to next section');
}

const onScroll = () => {
  if (!raf) raf = requestAnimationFrame(sync);
};

export function initScrollProgress() {
  const btn = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (btn.classList.contains('is-end')) {
      scrollToY(0);
      document.getElementById('main')?.focus({ preventScroll: true });
    } else {
      langkahHalaman(1);
    }
  });

  sync();
  if (!bound) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    bound = true;
  }
}
