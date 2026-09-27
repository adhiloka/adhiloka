/** Dua gerak kecil ala adani.com, satu IntersectionObserver:
 *  - `[data-fx]` naik dan muncul saat masuk layar (`.columnAnimation`);
 *  - `[data-count]` menghitung naik ke angkanya (`.counterAnim`).
 *  Tanpa skrip atau dengan prefers-reduced-motion, semuanya tampil diam. */

const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function countUp(el: HTMLElement) {
  const target = el.dataset.count!;
  const m = target.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!m || reduce) return;
  const [, pre, num, post] = m;
  // Tahun (1840s, 2019) tidak dihitung naik: "0 → 2019" bukan angka capaian.
  if (/^(1[5-9]|20)\d\d$/.test(num)) return;
  const end = parseFloat(num.replace(/,/g, ''));
  const decimals = (num.split('.')[1] || '').length;
  const comma = num.includes(',');
  const t0 = performance.now();
  const dur = 1600;
  const fmt = (v: number) => {
    const s = v.toFixed(decimals);
    return comma ? Number(s).toLocaleString('en-US', { minimumFractionDigits: decimals }) : s;
  };
  const tick = (t: number) => {
    const p = Math.min(1, (t - t0) / dur);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = `${pre}${fmt(end * eased)}${post}`;
    if (p < 1) requestAnimationFrame(tick);
    else el.textContent = target;
  };
  requestAnimationFrame(tick);
}

export function initMotion() {
  const items = document.querySelectorAll<HTMLElement>('[data-fx], [data-count]');
  if (!('IntersectionObserver' in window)) {
    items.forEach((el) => el.classList.add('is-in'));
    return;
  }
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target as HTMLElement;
        el.classList.add('is-in');
        if (el.dataset.count) countUp(el);
        io.unobserve(el);
      });
    },
    { rootMargin: '0px 0px -8% 0px' },
  );
  items.forEach((el) => io.observe(el));
}
