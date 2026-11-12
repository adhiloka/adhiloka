/** Ingredients Map (IngredientsMap.astro): tab wilayah, penanda peta dan
 *  daftar wilayah di panel ringkas memilih wilayah yang sama. "All Regions"
 *  kembali ke angka ringkas. Perilakunya mengikuti Raw Materials Map Robertet. */

import { fadeIn } from './tabs';

export function initIngredientsMap() {
  document.querySelectorAll<HTMLElement>('[data-imap]:not([data-ready])').forEach((root) => {
    root.dataset.ready = '';
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('.imap__tab')];
    const pins = [...root.querySelectorAll<SVGGElement>('[data-imap-pin]')];
    const panels = [...root.querySelectorAll<HTMLElement>('[data-panel]')];

    const select = (id: string) => {
      tabs.forEach((t) => {
        const on = t.dataset.region === id;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
      });
      pins.forEach((g) => {
        g.classList.toggle('is-active', !!id && g.dataset.imapPin === id);
        g.classList.toggle('is-dim', !!id && g.dataset.imapPin !== id);
      });
      panels.forEach((p) => (p.hidden = p.dataset.panel !== id));
      fadeIn(panels.find((p) => !p.hidden));
      window.dispatchEvent(new CustomEvent('fx:refresh'));
    };

    root.querySelectorAll<HTMLButtonElement>('button[data-region]').forEach((b) =>
      b.addEventListener('click', () => select(b.dataset.region ?? '')),
    );
    pins.forEach((g) => g.addEventListener('click', () => select(g.dataset.imapPin ?? '')));

    // Panah kiri/kanan berpindah tab, seperti tablist pada umumnya.
    root.querySelector('.imap__tabs')?.addEventListener('keydown', (e) => {
      const k = (e as KeyboardEvent).key;
      if (k !== 'ArrowRight' && k !== 'ArrowLeft') return;
      const i = tabs.findIndex((t) => t.classList.contains('is-active'));
      const next = tabs[(i + (k === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
      select(next.dataset.region ?? '');
      next.focus();
    });
  });
}
