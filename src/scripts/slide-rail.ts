/** Rel kartu mendatar (SlideRail.astro): panah, seret tetikus, dan keadaan
 *  panah di ujung rel. Geser trackpad dan sentuh dibiarkan asli. */

export function initRails() {
  document.querySelectorAll<HTMLElement>('[data-rail]').forEach((rail) => {
    if (rail.dataset.railReady) return;
    rail.dataset.railReady = '1';

    const track = rail.querySelector<HTMLElement>('[data-rail-track]')!;
    const prev = rail.querySelector<HTMLButtonElement>('[data-rail-prev]');
    const next = rail.querySelector<HTMLButtonElement>('[data-rail-next]');

    const stepSize = () => {
      const first = track.firstElementChild as HTMLElement | null;
      const gap = Number.parseFloat(getComputedStyle(track).columnGap || '0') || 0;
      return first ? first.getBoundingClientRect().width + gap : track.clientWidth * 0.8;
    };

    const sync = () => {
      const max = track.scrollWidth - track.clientWidth - 2;
      if (prev) prev.disabled = track.scrollLeft <= 2;
      if (next) next.disabled = track.scrollLeft >= max;
    };

    prev?.addEventListener('click', () => track.scrollBy({ left: -stepSize(), behavior: 'smooth' }));
    next?.addEventListener('click', () => track.scrollBy({ left: stepSize(), behavior: 'smooth' }));
    track.addEventListener('scroll', sync, { passive: true });
    window.addEventListener('resize', sync);

    track.addEventListener('keydown', (e) => {
      if (e.key === 'ArrowRight') {
        e.preventDefault();
        next?.click();
      } else if (e.key === 'ArrowLeft') {
        e.preventDefault();
        prev?.click();
      }
    });

    /* Seret dengan tetikus. Sentuhan tidak diurus di sini: gulir mendatar
       asli peramban sudah lebih baik. Klik yang sebenarnya seretan tidak
       boleh membuka tautan kartu. */
    let startX = 0;
    let startLeft = 0;
    let moved = false;
    let down = false;

    track.addEventListener('pointerdown', (e) => {
      if (e.pointerType !== 'mouse' || e.button !== 0) return;
      down = true;
      moved = false;
      startX = e.clientX;
      startLeft = track.scrollLeft;
    });
    window.addEventListener('pointermove', (e) => {
      if (!down) return;
      const dx = e.clientX - startX;
      if (!moved && Math.abs(dx) > 6) {
        moved = true;
        track.classList.add('is-dragging');
      }
      if (moved) track.scrollLeft = startLeft - dx;
    });
    window.addEventListener('pointerup', () => {
      if (!down) return;
      down = false;
      if (moved) {
        track.classList.remove('is-dragging');
        // Biarkan snap mendaratkan kartu terdekat.
        const step = stepSize();
        track.scrollTo({ left: Math.round(track.scrollLeft / step) * step, behavior: 'smooth' });
      }
    });
    track.addEventListener(
      'click',
      (e) => {
        if (moved) {
          e.preventDefault();
          e.stopPropagation();
          moved = false;
        }
      },
      true,
    );

    sync();
  });
}
