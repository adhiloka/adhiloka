/** Karusel "Get in touch": panah, hitungan, dan geser yang mengikuti pointer
 *  1:1 — teks bergerak 0,55× jarak seret, pelat 0,28×, seperti prototipe. */

export function initGetInTouch() {
  const band = document.querySelector<HTMLElement>('[data-gt]');
  if (!band) return;

  const slides = Array.from(band.querySelectorAll<HTMLElement>('[data-gt-slide]'));
  const plates = Array.from(band.querySelectorAll<HTMLElement>('[data-gt-media]'));
  const count = band.querySelector<HTMLElement>('[data-gt-count]');
  if (slides.length < 2) return;

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  let index = 0;
  let busy = false;

  const paint = (i: number) => {
    slides.forEach((s, n) => {
      s.hidden = n !== i;
      s.dataset.state = n === i ? 'current' : 'idle';
      s.style.transform = '';
      s.style.opacity = '';
    });
    plates.forEach((p, n) => {
      p.dataset.state = n === i ? 'current' : 'idle';
      p.style.transform = '';
      // Opacity pelat harus ikut dibersihkan, bukan hanya transform-nya.
      // slide() memberi pelat yang keluar `style.opacity = '0'`; kalau nilai
      // sebaris itu dibiarkan, ia mengalahkan aturan [data-state='current']
      // saat pelat yang sama kembali giliran — persis itu sebabnya foto
      // "Our purpose" hilang begitu digeser maju lalu dibalikkan.
      p.style.opacity = '';
    });
    if (count) count.textContent = `${i + 1} / ${slides.length}`;
  };

  const slide = (dir: number) => {
    if (busy) return;
    busy = true;

    const current = slides[index];
    const plate = plates[index];

    if (reduced) {
      index = (index + dir + slides.length) % slides.length;
      paint(index);
      busy = false;
      return;
    }

    // Keluar
    current.dataset.state = 'out';
    current.style.transform = `translateX(${dir > 0 ? -52 : 52}px)`;
    plate.style.opacity = '0';
    plate.style.transform = `translateX(${dir > 0 ? -26 : 26}px)`;

    window.setTimeout(() => {
      index = (index + dir + slides.length) % slides.length;
      const next = slides[index];
      const nextPlate = plates[index];

      paint(index);

      // Pra-posisi di sisi berlawanan, lalu masuk pada frame berikutnya.
      next.style.transition = 'none';
      nextPlate.style.transition = 'none';
      next.style.opacity = '0';
      next.style.transform = `translateX(${dir > 0 ? 52 : -52}px)`;
      nextPlate.style.transform = `translateX(${dir > 0 ? 26 : -26}px)`;

      requestAnimationFrame(() =>
        requestAnimationFrame(() => {
          next.style.transition = '';
          nextPlate.style.transition = '';
          next.style.opacity = '';
          next.style.transform = '';
          nextPlate.style.transform = '';
          busy = false;
        }),
      );
    }, 400);
  };

  band.querySelector('[data-gt-prev]')?.addEventListener('click', () => slide(-1));
  band.querySelector('[data-gt-next]')?.addEventListener('click', () => slide(1));

  /* ── Seret ──────────────────────────────────────────────────────────── */
  let startX: number | null = null;
  let dx = 0;

  band.addEventListener('pointerdown', (e) => {
    if (e.button !== 0) return;
    if ((e.target as HTMLElement).closest('a,button')) return;
    startX = e.clientX;
    dx = 0;
    band.classList.add('is-dragging');
  });

  band.addEventListener('pointermove', (e) => {
    if (startX === null) return;
    const raw = e.clientX - startX;
    dx = Math.sign(raw) * Math.min(Math.abs(raw), 260);

    const s = slides[index];
    const p = plates[index];
    s.style.transition = 'none';
    p.style.transition = 'none';
    s.style.transform = `translateX(${dx * 0.55}px)`;
    p.style.transform = `translateX(${dx * 0.28}px)`;
    s.style.opacity = String(Math.max(0.35, 1 - Math.abs(dx) / 420));
  });

  const release = () => {
    if (startX === null) return;
    startX = null;
    band.classList.remove('is-dragging');

    const s = slides[index];
    const p = plates[index];
    s.style.transition = '';
    p.style.transition = '';
    s.style.transform = '';
    s.style.opacity = '';
    p.style.transform = '';

    if (Math.abs(dx) > 64) slide(dx < 0 ? 1 : -1);
    dx = 0;
  };

  band.addEventListener('pointerup', release);
  band.addEventListener('pointercancel', release);
  band.addEventListener('pointerleave', release);
}
