/** Slider hero beranda: pudar-silang, putar otomatis dengan garis progres,
 *  panah, dan kartu slide berikutnya (kartu slide aktif disembunyikan, urutan
 *  kartu diputar supaya yang paling kiri selalu slide berikutnya). */

const DURATION = 7000;

export function initHeroSlider() {
  const root = document.querySelector<HTMLElement>('[data-hero]');
  if (!root) return;
  const slides = [...root.querySelectorAll<HTMLElement>('[data-slide]')];
  const cards = [...root.querySelectorAll<HTMLElement>('[data-goto]')];
  const cardBox = root.querySelector<HTMLElement>('[data-cards]')!;
  const fill = root.querySelector<HTMLElement>('[data-fill]')!;
  const num = root.querySelector<HTMLElement>('[data-num]')!;
  const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  root.style.setProperty('--hero-ms', `${DURATION}ms`);

  let current = 0;
  let timer = 0;

  const restartProgress = () => {
    fill.classList.remove('is-running');
    void fill.offsetWidth;
    if (!reduce) fill.classList.add('is-running');
  };

  const show = (i: number) => {
    const n = slides.length;
    current = ((i % n) + n) % n;
    slides.forEach((s, k) => {
      const on = k === current;
      s.classList.toggle('is-active', on);
      s.setAttribute('aria-hidden', String(!on));
      s.querySelectorAll('a').forEach((a) => (on ? a.removeAttribute('tabindex') : a.setAttribute('tabindex', '-1')));
    });
    // Kartu diurutkan mulai dari slide sesudah yang aktif.
    for (let k = 1; k <= n; k++) {
      const card = cards[(current + k) % n];
      card.classList.toggle('is-current', k === n);
      cardBox.appendChild(card);
    }
    num.textContent = String(current + 1).padStart(2, '0');
    restartProgress();
    schedule();
  };

  const schedule = () => {
    window.clearTimeout(timer);
    if (reduce) return;
    timer = window.setTimeout(() => show(current + 1), DURATION);
  };

  root.querySelector('[data-prev]')!.addEventListener('click', () => show(current - 1));
  root.querySelector('[data-next]')!.addEventListener('click', () => show(current + 1));
  cards.forEach((c) => c.addEventListener('click', () => show(Number(c.dataset.goto))));

  // Geser jari di layar sentuh.
  let x0: number | null = null;
  root.addEventListener('touchstart', (e) => (x0 = e.touches[0].clientX), { passive: true });
  root.addEventListener('touchend', (e) => {
    if (x0 === null) return;
    const dx = e.changedTouches[0].clientX - x0;
    if (Math.abs(dx) > 50) show(current + (dx < 0 ? 1 : -1));
    x0 = null;
  });

  document.addEventListener('visibilitychange', () => {
    if (document.hidden) window.clearTimeout(timer);
    else show(current);
  });

  show(0);
}
