/** Karusel hero: crossfade 1,2 detik dengan Ken Burns, panah, titik, tombol
 *  panah papan ketik, dan geser sentuh/tetikus. */

import { scrollToY } from './smooth-scroll';

let keyBound = false;

export function initHero() {
  const hero = document.querySelector<HTMLElement>('[data-hero]');
  if (!hero) return;

  const layers = Array.from(hero.querySelectorAll<HTMLElement>('[data-hero-slide]'));
  const dots = Array.from(hero.querySelectorAll<HTMLButtonElement>('[data-hero-dot]'));
  const headline = hero.querySelector<HTMLElement>('[data-hero-headline]')!;
  const cta = hero.querySelector<HTMLAnchorElement>('[data-hero-cta]')!;
  const content = hero.querySelector<HTMLElement>('[data-hero-content]')!;
  const video = hero.querySelector<HTMLVideoElement>('[data-hero-video]');

  const reduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* Video hero berukuran belasan megabita. Ia hanya diunduh kalau layarnya
     cukup lebar, koneksinya tidak dalam mode hemat data, dan pengguna tidak
     meminta gerak dikurangi. Selain itu poster WebP-nya sudah cukup. */
  if (video && !video.src) {
    const conn = (navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } })
      .connection;
    const thrifty = conn?.saveData === true || /2g/.test(conn?.effectiveType ?? '');
    const roomy = window.matchMedia('(min-width: 600px)').matches;

    if (roomy && !thrifty && !reduced) {
      video.src = video.dataset.src!;
      video.autoplay = true;
      video.load();
      video.play().catch(() => {
        /* Peramban boleh menolak autoplay; poster tetap terlihat. */
      });
    }
  }

  /* Bagian karusel. Hero berisi satu slide — halaman hub About — melewatkan
     seluruh blok ini: tidak ada yang perlu digeser, dan panah, titik, serta
     tombol papan ketiknya memang tidak dirender. Yang di luar blok ini tetap
     berlaku untuk keduanya: pemuatan video, dan panah bawah yang menggulir ke
     bagian berikutnya. */
  if (layers.length > 1) {
    // Judul dan tujuan tiap slide dibawa oleh dot-nya masing-masing, jadi
    // skrip ini tidak perlu menduplikasi data konten.
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

      headline.textContent = headlines[n];
      if (hrefs[n]) cta.href = hrefs[n];

      // Ulangi animasi masuknya teks.
      content.style.animation = 'none';
      void content.offsetWidth;
      content.style.animation = '';

      window.clearTimeout(busy);
      busy = window.setTimeout(() => {
        if (layers[prev].dataset.state === 'leaving') layers[prev].dataset.state = 'idle';
      }, 1250);
    };

    const step = (dir: number) => goTo(index + dir);

    hero.querySelector('[data-hero-prev]')?.addEventListener('click', () => step(-1));
    hero.querySelector('[data-hero-next]')?.addEventListener('click', () => step(1));
    dots.forEach((dot, i) => dot.addEventListener('click', () => goTo(i)));

    /* Geser — pointer diikuti 1:1 seperti carousel lain di situs ini. */
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
        if (e.key === 'ArrowRight') el.querySelector<HTMLButtonElement>('[data-hero-next]')?.click();
        if (e.key === 'ArrowLeft') el.querySelector<HTMLButtonElement>('[data-hero-prev]')?.click();
      });
    }
  }

  /* Panah bawah menggulir tepat ke bagian berikutnya. */
  hero.querySelector('[data-hero-cue]')?.addEventListener('click', () => {
    scrollToY(hero.getBoundingClientRect().bottom + window.scrollY);
  });
}
