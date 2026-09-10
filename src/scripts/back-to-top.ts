/** Tombol kembali ke atas: muncul setelah satu layar, dan naik di atas baris
 *  dasar footer supaya tidak menutupi wordmark seperti pada prototipe. */

import { scrollToY } from './smooth-scroll';

let bound = false;

function sync() {
  const btn = document.querySelector<HTMLElement>('[data-to-top]');
  if (!btn) return;

  const y = window.scrollY;
  btn.classList.toggle('is-visible', y > window.innerHeight * 0.85);

  const row = document.querySelector<HTMLElement>('[data-footer-base]');
  const rect = row?.getBoundingClientRect();
  const overFooter = rect ? rect.bottom > window.innerHeight - 90 && rect.top < window.innerHeight : false;

  btn.classList.toggle('is-over-footer', overFooter);

  if (overFooter && rect) {
    const raw = Math.round(window.innerHeight - rect.top + 20);
    const lift = Math.max(0, Math.min(raw, window.innerHeight - 90));
    btn.style.setProperty('--to-top-lift', `${lift}px`);
  } else {
    btn.style.setProperty('--to-top-lift', '0px');
  }
}

export function initBackToTop() {
  const btn = document.querySelector<HTMLElement>('[data-to-top]');
  if (!btn) return;

  btn.addEventListener('click', () => {
    scrollToY(0);
    document.getElementById('main')?.focus();
  });

  sync();
  if (!bound) {
    window.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);
    bound = true;
  }
}
