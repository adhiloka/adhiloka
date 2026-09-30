/** Slider kartu ala `Com-threeImageSlider` / `twoImageSlider` adani.com
 *  (customJsbundleOptimized.js: fnthreeImageSlider, fntwoImageSlider), dan
 *  slider foto fade `company_vision_img_slider` (fnCompanyVisionSlider).
 *
 *  Markup: `[data-slider="3" | "2"]` untuk kartu, `[data-slider="fade"]`
 *  untuk foto. Tombol prev/next dan titik dicari di dalam wadah yang sama,
 *  tidak global seperti di Adani (di sana tombol Awards ikut menggeser
 *  slider Vision). Loop dimatikan: jumlah kartu kita terlalu sedikit untuk
 *  loop Swiper, yang akan memperingatkan di konsol. */

import Swiper from 'swiper';
import { Navigation, Pagination, Autoplay, EffectFade, A11y, Keyboard } from 'swiper/modules';

const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

// slidesPerView dan spaceBetween per titik henti, persis Adani. Swiper
// memakai min-width, Adani menulisnya 320 / 481 / 991.
const CARDS = {
  '3': { base: [1.2, 20], 320: [1.5, 30], 481: [1.6, 30], 991: [3, 20] },
  '2': { base: [1.1, 20], 320: [1.2, 20], 481: [1.5, 30], 991: [2, 40] },
} as const;

export function initSliders() {
  document.querySelectorAll<HTMLElement>('[data-slider]:not([data-ready])').forEach((root) => {
    root.dataset.ready = '';
    const kind = root.dataset.slider as '3' | '2' | 'fade';
    const el = root.querySelector<HTMLElement>('.swiper')!;
    const prev = root.querySelector<HTMLElement>('[data-prev]');
    const next = root.querySelector<HTMLElement>('[data-next]');
    const dots = root.querySelector<HTMLElement>('[data-dots]');

    if (kind === 'fade') {
      new Swiper(el, {
        modules: [Pagination, Autoplay, EffectFade, A11y],
        slidesPerView: 1,
        spaceBetween: 30,
        grabCursor: true,
        speed: 500,
        effect: 'fade',
        fadeEffect: { crossFade: true },
        autoplay: still ? false : { delay: 3000, disableOnInteraction: false },
        pagination: dots ? { el: dots, clickable: true } : false,
      });
      return;
    }

    const size = CARDS[kind] ?? CARDS['3'];
    const bp = (w: 320 | 481 | 991) => ({ slidesPerView: size[w][0], spaceBetween: size[w][1] });
    const swiper = new Swiper(el, {
      modules: [Navigation, A11y, Keyboard],
      direction: 'horizontal',
      slidesPerView: size.base[0],
      spaceBetween: size.base[1],
      speed: still ? 0 : 1500,
      watchOverflow: true,
      keyboard: { enabled: true, onlyInViewport: true },
      navigation: prev && next ? { prevEl: prev, nextEl: next, disabledClass: 'is-disabled', lockClass: 'is-locked' } : false,
      breakpoints: { 320: bp(320), 481: bp(481), 991: bp(991) },
    });
    // Semua kartu sudah tampil (tombol terkunci): tandai seperti `.activeClass` Adani.
    const mark = () => root.classList.toggle('is-static', swiper.isLocked);
    swiper.on('lock unlock resize', mark);
    mark();
  });
}
