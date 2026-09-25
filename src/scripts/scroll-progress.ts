/** Panah progres gulir (lihat ScrollProgress.astro). Cincin diisi lewat
 *  stroke-dashoffset; panah berbalik di dasar halaman. Klik turun satu
 *  section memakai penanda data-section milik sections.ts, jadi langkahnya
 *  sama persis dengan gulir roda. */

import { scrollToY } from './smooth-scroll';

const KELILING = 182.2;
let bound = false;
let raf = 0;

function sync() {
  raf = 0;
  const btn = document.querySelector<HTMLElement>('[data-scroll-progress]');
  const bar = btn?.querySelector<SVGCircleElement>('[data-scroll-progress-bar]');
  if (!btn || !bar) return;

  const max = document.documentElement.scrollHeight - window.innerHeight;
  const p = max > 0 ? Math.min(1, Math.max(0, window.scrollY / max)) : 1;
  bar.style.strokeDashoffset = String(KELILING * (1 - p));

  const end = p > 0.985;
  btn.classList.toggle('is-end', end);
  btn.setAttribute('aria-label', end ? 'Back to top' : 'Go to next section');
}

const onScroll = () => {
  if (!raf) raf = requestAnimationFrame(sync);
};

/** Section berikutnya: section bernomor pertama yang tepi atasnya masih di
 *  bawah garis header. Tanpa penanda section, turun satu layar. */
function nextTarget(): number {
  const secs = Array.from(document.querySelectorAll<HTMLElement>('[data-section]'));
  const next = secs.find((s) => s.getBoundingClientRect().top > 8);
  return next ? next.getBoundingClientRect().top + window.scrollY : window.scrollY + window.innerHeight;
}

export function initScrollProgress() {
  const btn = document.querySelector<HTMLElement>('[data-scroll-progress]');
  if (!btn) return;

  btn.addEventListener('click', () => {
    if (btn.classList.contains('is-end')) {
      scrollToY(0);
      document.getElementById('main')?.focus({ preventScroll: true });
    } else {
      scrollToY(nextTarget());
    }
  });

  sync();
  if (!bound) {
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    bound = true;
  }
}
