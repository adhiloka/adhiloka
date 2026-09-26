/** Karusel hero ala valeindonesia.com: slide memudar 0,6 detik dan maju
 *  sendiri tiap 6 detik (berhenti saat hero disentuh kursor, difokus, atau
 *  pengguna meminta gerak dikurangi), titik vertikal, panah papan ketik, dan
 *  geser sentuh/tetikus. Panah mengambang di bawah menggulir ke section
 *  berikutnya. */

import { scrollToY } from './smooth-scroll';
import { langkahHalaman } from './sections';

const INTERVAL = 6000;
const FADE = 600;

let keyBound = false;
let timer = 0;

export function initHero() {
  window.clearInterval(timer);

  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;

  const layers = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const dots = Array.from(hero.querySelectorAll<HTMLButtonElement>('[data-hero-dot]'));
  const intro = hero.querySelector<HTMLElement>('[data-hero-intro]');
  const headline = hero.querySelector<HTMLElement>('[data-hero-headline]');
  const cta = hero.querySelector<HTMLAnchorElement>('[data-hero-cta]');
  const content = hero.querySelector<HTMLElement>('[data-hero-content]');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Panah mengambang dan tombol Discover (di halaman selain beranda)
     menggulir tepat ke bagian berikutnya, memakai langkah yang sama dengan
     tombol progres gulir. */
  const turun = () => {
    if (!langkahHalaman(1)) scrollToY(hero.getBoundingClientRect().bottom + window.scrollY);
  };
  hero.querySelector('[data-hero-cue]')?.addEventListener('click', turun);
  hero.querySelector('[data-hero-cta-scroll]')?.addEventListener('click', turun);

  if (layers.length < 2) return;

  // Naskah tiap slide dibawa titiknya masing-masing, jadi skrip ini tidak
  // menduplikasi data konten.
  const headlines = dots.map((d) => d.getAttribute('aria-label') || '');
  const intros = dots.map((d) => d.dataset.intro || '');
  const hrefs = dots.map((d) => d.dataset.href || '');

  let index = 0;
  let clear = 0;

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
    if (intro) intro.textContent = intros[n];
    if (cta && hrefs[n]) cta.href = hrefs[n];

    // Ulangi animasi masuknya teks.
    if (content) {
      content.style.animation = 'none';
      void content.offsetWidth;
      content.style.animation = '';
    }

    window.clearTimeout(clear);
    clear = window.setTimeout(() => {
      if (layers[prev].dataset.state === 'leaving') layers[prev].dataset.state = 'idle';
    }, FADE + 50);
  };

  const step = (dir: number) => goTo(index + dir);

  /* Putaran otomatis. Dihentikan selama pengguna berinteraksi dengan hero,
     dan tidak pernah jalan kalau gerak diminta dikurangi. */
  let paused = false;
  const start = () => {
    window.clearInterval(timer);
    if (reduced) return;
    timer = window.setInterval(() => {
      if (!paused && !document.hidden && hero.isConnected) step(1);
    }, INTERVAL);
  };
  hero.addEventListener('mouseenter', () => (paused = true));
  hero.addEventListener('mouseleave', () => (paused = false));
  hero.addEventListener('focusin', () => (paused = true));
  hero.addEventListener('focusout', () => (paused = false));

  dots.forEach((dot, i) =>
    dot.addEventListener('click', () => {
      goTo(i);
      start();
    }),
  );

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
    if (Math.abs(dx) > 60) {
      step(dx < 0 ? 1 : -1);
      start();
    }
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
      const all = Array.from(el.querySelectorAll<HTMLButtonElement>('[data-hero-dot]'));
      const cur = all.findIndex((d) => d.getAttribute('aria-selected') === 'true');
      if (cur < 0) return;
      if (e.key === 'ArrowRight') all[(cur + 1) % all.length]?.click();
      if (e.key === 'ArrowLeft') all[(cur - 1 + all.length) % all.length]?.click();
    });
  }

  start();
}
