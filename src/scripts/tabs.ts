/** Tab bergaris bawah ala `.business-right-tab` adani.com.
 *
 *  Markup: wadah `[data-tabs]` berisi tombol `[data-tab="x"]` dan panel
 *  `[data-panel="x"]`. Bila wadah punya `data-filter`, tab tidak mengganti
 *  panel melainkan menyaring anak `[data-cat]` di dalam `[data-filter-grid]`
 *  (dipakai katalog dan daftar berita; nilai "all" menampilkan semuanya).
 *
 *  Setiap pergantian mengubah tinggi halaman, jadi dikirim event `fx:refresh`
 *  (detail: panel yang baru tampil) untuk scroll-fx.ts. Tile Business juga
 *  mengirim `fx:pick` (detail: panel foto besar yang dipilih). */

const emit = (name: string, detail?: HTMLElement) => window.dispatchEvent(new CustomEvent(name, { detail }));

const still = window.matchMedia('(prefers-reduced-motion: reduce)');
/** `compTab` Adani: isi tab yang baru tampil masuk dengan `fadeIn("slow")`, 600 ms.
 *  Hanya untuk grid tersaring (halaman dalam); tab Business beranda tidak diubah. */
export const fadeIn = (el?: HTMLElement | null) => {
  if (!el || still.matches) return;
  el.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 600, easing: 'ease' });
};

export function initTabs() {
  document.querySelectorAll<HTMLElement>('[data-tabs]:not([data-ready])').forEach((root) => {
    root.dataset.ready = '';
    const tabs = [...root.querySelectorAll<HTMLButtonElement>('[data-tab]')];
    const filter = root.hasAttribute('data-filter');
    const count = root.querySelector<HTMLElement>('[data-filter-count]');

    const select = (key: string, focus = false) => {
      tabs.forEach((t) => {
        const on = t.dataset.tab === key;
        t.classList.toggle('is-active', on);
        t.setAttribute('aria-selected', String(on));
        t.tabIndex = on ? 0 : -1;
        if (on && focus) t.focus();
      });
      if (filter) {
        let shown = 0;
        root.querySelectorAll<HTMLElement>('[data-filter-grid] [data-cat]').forEach((el) => {
          const on = key === 'all' || el.dataset.cat === key;
          el.hidden = !on;
          if (on) shown++;
        });
        if (count) count.textContent = `${shown} ${shown === 1 ? 'item' : 'items'}`;
        fadeIn(root.querySelector<HTMLElement>('[data-filter-grid]'));
        emit('fx:refresh');
      } else {
        let shownPanel: HTMLElement | undefined;
        root.querySelectorAll<HTMLElement>('[data-panel]').forEach((p) => {
          p.hidden = p.dataset.panel !== key;
          if (!p.hidden) shownPanel = p;
        });
        emit('fx:refresh', shownPanel);
      }
    };

    tabs.forEach((t, i) => {
      t.addEventListener('click', () => select(t.dataset.tab!));
      t.addEventListener('keydown', (e) => {
        const d = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0;
        if (!d) return;
        e.preventDefault();
        select(tabs[(i + d + tabs.length) % tabs.length].dataset.tab!, true);
      });
    });
  });
}

/** Tile di kiri memilih foto besar di kanan (`[data-pick]` → `[data-pane]`),
 *  tile aktif diberi lapisan gradien — perilaku grid "Verticals" Adani. */
export function initPickers() {
  document.querySelectorAll<HTMLElement>('[data-picker]:not([data-ready])').forEach((root) => {
    root.dataset.ready = '';
    const picks = [...root.querySelectorAll<HTMLButtonElement>('[data-pick]')];
    const panes = [...root.querySelectorAll<HTMLElement>('[data-pane]')];
    const select = (key: string) => {
      // Tile yang sudah aktif: foto besarnya jangan diputar ulang.
      if (panes.find((p) => p.dataset.pane === key)?.hidden === false) return;
      picks.forEach((p) => {
        const on = p.dataset.pick === key;
        p.classList.toggle('is-active', on);
        p.setAttribute('aria-pressed', String(on));
      });
      panes.forEach((p) => (p.hidden = p.dataset.pane !== key));
      emit('fx:refresh');
      emit('fx:pick', panes.find((p) => !p.hidden));
    };
    picks.forEach((p) => p.addEventListener('click', () => select(p.dataset.pick!)));
  });
}
