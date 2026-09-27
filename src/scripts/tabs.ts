/** Tab bergaris bawah ala `.business-right-tab` adani.com.
 *
 *  Markup: wadah `[data-tabs]` berisi tombol `[data-tab="x"]` dan panel
 *  `[data-panel="x"]`. Bila wadah punya `data-filter`, tab tidak mengganti
 *  panel melainkan menyaring anak `[data-cat]` di dalam `[data-filter-grid]`
 *  (dipakai katalog dan daftar berita; nilai "all" menampilkan semuanya). */

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
      } else {
        root.querySelectorAll<HTMLElement>('[data-panel]').forEach((p) => {
          p.hidden = p.dataset.panel !== key;
        });
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
      picks.forEach((p) => {
        const on = p.dataset.pick === key;
        p.classList.toggle('is-active', on);
        p.setAttribute('aria-pressed', String(on));
      });
      panes.forEach((p) => (p.hidden = p.dataset.pane !== key));
    };
    picks.forEach((p) => p.addEventListener('click', () => select(p.dataset.pick!)));
  });
}
