/** Karusel hero versi awal: crossfade 1,2 detik dengan Ken Burns, panah,
 *  titik, tombol panah papan ketik, dan geser sentuh/tetikus. Tidak maju
 *  sendiri. Panah bawah (dan Discover di halaman selain beranda) menggulir ke
 *  section berikutnya. */

import { scrollToY } from './smooth-scroll';
import { langkahHalaman } from './sections';

const FADE = 1200;

let keyBound = false;

export function initHero() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;

  const layers = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const dots = Array.from(hero.querySelectorAll<HTMLButtonElement>('[data-hero-dot]'));
  const headline = hero.querySelector<HTMLElement>('[data-hero-headline]');
  const cta = hero.querySelector<HTMLAnchorElement>('[data-hero-cta]');
  const content = hero.querySelector<HTMLElement>('[data-hero-content]');

  /* Panah bawah dan Discover versi gulir memakai langkah yang sama dengan
     tombol progres gulir. */
  const turun = () => {
    if (!langkahHalaman(1)) scrollToY(hero.getBoundingClientRect().bottom + window.scrollY);
  };
  hero.querySelector('[data-hero-cue]')?.addEventListener('click', turun);
  hero.querySelector('[data-hero-cta-scroll]')?.addEventListener('click', turun);

  if (layers.length < 2) return;

  // Judul dan tujuan tiap slide dibawa oleh titiknya masing-masing, jadi
  // skrip ini tidak menduplikasi data konten.
  const headlines = dots.map((d) => d.getAttribute('aria-label') || '');
  const hrefs = dots.map((d) => d.dataset.href || '');

  let index = 0;
  let busy = 0;

  const goTo = (next: number) => {
    const n = ((next % layers.length) + layers.length) % layers.length;
    if (n === index) return;

    const prev = index;
    index = n;

    layers[prev].dataset.state = 'leaving';
    layers[prev].setAttribute('aria-hidden', 'true');
    layers[n].dataset.state = 'current';
    layers[n].removeAttribute('aria-hidden');

    dots.forEach((d, i) => d.setAttribute('aria-selected', String(i === n)));

    if (headline) headline.textContent = headlines[n];
    if (cta && hrefs[n]) cta.href = hrefs[n];

    // Ulangi animasi masuknya teks.
    if (content) {
      content.style.animation = 'none';
      void content.offsetWidth;
      content.style.animation = '';
    }

    window.clearTimeout(busy);
    busy = window.setTimeout(() => {
      if (layers[prev].dataset.state === 'leaving') layers[prev].dataset.state = 'idle';
    }, FADE + 50);
  };

  const step = (dir: number) => goTo(index + dir);

  hero.querySelector('[data-hero-prev]')?.addEventListener('click', () => step(-1));
  hero.querySelector('[data-hero-next]')?.addEventListener('click', () => step(1));
  dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

  /* Geser sentuh/tetikus. */
  let startX: number | null = null;
  hero.addEventListener('pointerdown', (e) => {
    if ((e.target as HTMLElement).closest('a,button')) return;
    startX = e.clientX;
  });
  hero.addEventListener('pointerup', (e) => {
    if (startX === null) return;
    const dx = e.clientX - startX;
    startX = null;
    if (Math.abs(dx) > 60) step(dx < 0 ? 1 : -1);
  });
  hero.addEventListener('pointercancel', () => (startX = null));

  /* Panah papan ketik, hanya selagi hero masih terlihat. */
  if (!keyBound) {
    keyBound = true;
    window.addEventListener('keydown', (e) => {
      const el = document.querySelector<HTMLElement>('[data-hero]');
      if (!el) return;
      if (window.scrollY > window.innerHeight * 0.9) return;
      const tag = (document.activeElement?.tagName || '').toLowerCase();
      if (tag === 'input' || tag === 'textarea' || tag === 'select') return;
      if (document.querySelector('[data-search]:not([hidden])')) return;
      if (document.documentElement.classList.contains('is-menu-open')) return;
      if (e.key === 'ArrowRight') el.querySelector<HTMLButtonElement>('[data-hero-next]')?.click();
      if (e.key === 'ArrowLeft') el.querySelector<HTMLButtonElement>('[data-hero-prev]')?.click();
    });
  }
}
