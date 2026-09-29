/** Slider hero beranda, tiruan slider adani.com (lihat HeroSlider.astro).
 *
 *  Takaran waktu dari Swiper + GSAP Adani: tunggu 11 s, geser kartu 1 s,
 *  kotak membesar 1,1 s dengan Back.easeOut(1), teks 1,1 s Cubic.easeInOut
 *  dengan jeda 0,5 / 0,75 / 1 s, panah mati 2 s, kartu tersembunyi selama
 *  sisa waktu 25–90 %. Hitungan tunggu dimulai sesudah geseran 1 s selesai,
 *  seperti autoplay Swiper. */

const DELAY = 11000;
const SPEED = 1000;
const GROW = 1100;
const TEXT = 1100;
const TEXT_DELAYS = [500, 750, 1000];
const ARROW_LOCK = 2000;

/* Back.easeOut dengan overshoot 1: f(t) = u²(2u + 1) + 1, u = t − 1.
   Dicicil jadi fungsi CSS linear() supaya bisa dipakai Web Animations. */
const BACK_OUT = (() => {
  const pts = Array.from({ length: 41 }, (_, i) => {
    const u = i / 40 - 1;
    return +(u * u * (2 * u + 1) + 1).toFixed(4);
  });
  return `linear(${pts.join(', ')})`;
})();
const CUBIC_IN_OUT = 'cubic-bezier(0.645, 0.045, 0.355, 1)';

const supportsLinear = CSS.supports('transition-timing-function', 'linear(0, 1)');

export function initHeroSlider() {
  const root = document.querySelector<HTMLElement>('[data-hero]');
  if (!root) return;
  const slides = [...root.querySelectorAll<HTMLElement>('[data-slide]')];
  const cards = [...root.querySelectorAll<HTMLElement>('[data-card]')];
  const cardBox = root.querySelector<HTMLElement>('[data-cards]')!;
  const fill = root.querySelector<HTMLElement>('[data-fill]')!;
  const prevBtn = root.querySelector<HTMLButtonElement>('[data-prev]')!;
  const nextBtn = root.querySelector<HTMLButtonElement>('[data-next]')!;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  const n = slides.length;

  let current = 0;
  let busy = false;
  let slots = cards.map((_, i) => i); // posisi tiap kartu, 0 = kartu slide aktif
  let pitch = 185;

  /* Pembagian lebar seperti Swiper: slidesPerView = lebar / 180, jarak 20. */
  const layoutCards = () => {
    const w = cardBox.clientWidth || 770;
    const spv = Math.max(1, w / 180);
    const cardW = (w - 20 * (spv - 1)) / spv;
    pitch = cardW + 20;
    cardBox.style.setProperty('--card-w', `${cardW}px`);
    cardBox.style.setProperty('--pitch', `${pitch}px`);
  };

  const placeCards = (animate: boolean) => {
    cards.forEach((c, i) => {
      c.classList.toggle('is-moving', animate);
      c.style.setProperty('--slot', String(slots[i]));
      c.classList.toggle('is-current', slots[i] === 0);
      c.classList.toggle('is-gone', slots[i] < 0);
      c.tabIndex = slots[i] > 0 ? 0 : -1;
    });
  };

  /* Kotak awal = posisi kartu slide tujuan, relatif terhadap hero. Di layar
     kecil deret kartu disembunyikan, jadi posisinya dihitung dari takaran. */
  const originOf = (slot: number) => {
    const hero = root.getBoundingClientRect();
    const box = cardBox.getBoundingClientRect();
    const visible = box.width > 0;
    const w = visible ? parseFloat(cardBox.style.getPropertyValue('--card-w')) : 165;
    const h = visible ? box.height : 260;
    const left = visible ? box.left - hero.left : hero.width - 20 - w;
    const top = visible ? box.top - hero.top : hero.height - 115 - h;
    return { x: left + slot * pitch, y: top, w, h };
  };

  /* ── Waktu: garis progres dan kemunculan kartu ─────────────────────── */
  let waitStart = 0;
  let waitRunning = false;
  let pausedAt = 0;
  let raf = 0;
  let startTimer = 0;

  const tick = (now: number) => {
    if (!waitRunning) return;
    const elapsed = now - waitStart;
    const left = Math.max(0, 1 - elapsed / DELAY);
    fill.style.width = `${(1 - left) * 100}%`;
    // `sThumbHide` Adani: kartu hilang saat sisa waktu 25–90 %.
    cardBox.classList.toggle('is-hidden', left >= 0.25 && left <= 0.9);
    if (elapsed >= DELAY) {
      waitRunning = false;
      go(current + 1);
      return;
    }
    raf = requestAnimationFrame(tick);
  };

  const beginWait = () => {
    cancelAnimationFrame(raf);
    if (reduce) return;
    waitStart = performance.now();
    waitRunning = true;
    raf = requestAnimationFrame(tick);
  };

  const stopWait = () => {
    waitRunning = false;
    cancelAnimationFrame(raf);
    window.clearTimeout(startTimer);
  };

  const revealText = (slide: HTMLElement) => {
    if (reduce) return;
    slide.querySelectorAll<HTMLElement>('[data-hero-anim]').forEach((el, k) => {
      el.animate(
        [
          { opacity: 0, transform: 'translateY(50px)' },
          { opacity: 1, transform: 'none' },
        ],
        { duration: TEXT, delay: TEXT_DELAYS[k] ?? 1000, easing: CUBIC_IN_OUT, fill: 'backwards' },
      );
    });
  };

  const lockArrows = () => {
    prevBtn.disabled = nextBtn.disabled = true;
    window.setTimeout(() => (prevBtn.disabled = nextBtn.disabled = false), ARROW_LOCK);
  };

  /* ── Pergantian slide ─────────────────────────────────────────────── */
  const go = (target: number) => {
    const to = ((target % n) + n) % n;
    if (to === current || busy) return;
    busy = true;
    stopWait();
    fill.style.width = '0%';
    cardBox.classList.remove('is-hidden');

    // Maju k langkah (panah kanan, klik kartu, waktu habis) atau mundur satu.
    const forward = target > current;
    const k = target - current;
    const fromSlot = forward ? k : -1;
    const origin = originOf(fromSlot);

    const oldSlide = slides[current];
    const newSlide = slides[to];
    slides.forEach((s) => s.classList.remove('is-prev'));
    oldSlide.classList.remove('is-active');
    oldSlide.classList.add('is-prev');
    newSlide.classList.add('is-active');
    slides.forEach((s, i) => {
      const on = i === to;
      s.setAttribute('aria-hidden', String(!on));
      s.querySelectorAll('a').forEach((a) => (on ? a.removeAttribute('tabindex') : a.setAttribute('tabindex', '-1')));
    });

    const finish = () => {
      oldSlide.classList.remove('is-prev');
      busy = false;
    };

    if (reduce) {
      current = to;
      slots = cards.map((_, i) => (i - to + n) % n);
      placeCards(false);
      finish();
      return;
    }

    // Kotak slide baru membesar dari kartu ke layar penuh.
    const box = newSlide.querySelector<HTMLElement>('[data-box]')!;
    box
      .animate(
        [
          { left: `${origin.x}px`, top: `${origin.y}px`, width: `${origin.w}px`, height: `${origin.h}px` },
          { left: '0px', top: '0px', width: '100%', height: '100%' },
        ],
        { duration: GROW, easing: supportsLinear ? BACK_OUT : 'cubic-bezier(0.34, 1.3, 0.64, 1)' },
      )
      .finished.then(finish, finish);
    revealText(newSlide);
    lockArrows();

    // Deret kartu bergeser. Kartu yang melewati tepi kiri keluar lewat kiri
    // lalu dipindah diam-diam ke ujung kanan; saat mundur, kebalikannya.
    if (forward) {
      slots = slots.map((s) => s - k);
      placeCards(true);
      window.setTimeout(() => {
        slots = slots.map((s) => (s < 0 ? s + n : s));
        placeCards(false);
      }, SPEED);
    } else {
      slots = slots.map((s) => (s === n - 1 ? -1 : s));
      placeCards(false);
      void cardBox.offsetWidth;
      slots = slots.map((s) => s + 1);
      placeCards(true);
    }

    current = to;
    startTimer = window.setTimeout(beginWait, SPEED);
  };

  prevBtn.addEventListener('click', () => go(current - 1));
  nextBtn.addEventListener('click', () => go(current + 1));
  cards.forEach((c, i) => c.addEventListener('click', () => go(current + ((i - current + n) % n))));

  // Geser jari di layar sentuh.
  let x0: number | null = null;
  root.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
  root.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) go(current + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  // Tab disembunyikan: waktu tunggu dibekukan, dilanjutkan saat kembali.
  document.addEventListener('visibilitychange', () => {
    if (!waitRunning && !pausedAt) return;
    if (document.hidden) {
      pausedAt = performance.now();
      waitRunning = false;
      cancelAnimationFrame(raf);
    } else if (pausedAt) {
      waitStart += performance.now() - pausedAt;
      pausedAt = 0;
      waitRunning = true;
      raf = requestAnimationFrame(tick);
    }
  });

  window.addEventListener('resize', layoutCards);
  layoutCards();
  placeCards(false);
  revealText(slides[0]);
  beginWait();
}
