/** Penyaring katalog bahan ala Ingredient Catalog dsm-firmenich: tombol
 *  All filters membuka laci kiri berisi facet bercentang, lalu ada urutan
 *  (Relevance / Name A–Z / Z–A), kotak pencarian dan tombol tampilan grid/
 *  list. Filter aktif tampil sebagai tag yang bisa dilepas; seluruh keadaan
 *  disimpan di query URL (?family=Resin&q=…&sort=az&view=list) sehingga kartu
 *  Collections di hub bisa menaut ke katalog yang sudah tersaring.
 *
 *  Markup: `[data-catalog]` berisi `form[data-cat-form]` (q, sort, checkbox
 *  bernama facet), `dialog[data-cat-drawer]`, `[data-cat-open]`,
 *  `[data-cat-close]`, `[data-cat-badge]`, `[data-cat-tags]`,
 *  `[data-filter-count]`, `[data-cat-shown]`, `[data-cat-empty]`,
 *  `[data-view]` dan grid `[data-filter-grid]` yang anaknya ber-data-facet,
 *  data-name, data-text dan data-order. Nilai facet ganda dipisah "|". */

import { fadeIn } from './tabs';

const FACETS = ['form', 'family', 'note', 'origin'] as const;
const VIEWS = ['grid', 'list'];
const emit = () => window.dispatchEvent(new CustomEvent('fx:refresh'));
const plural = (n: number) => `${n} ${n === 1 ? 'result' : 'results'}`;

export function initCatalog() {
  const root = document.querySelector<HTMLElement>('[data-catalog]:not([data-ready])');
  if (!root) return;
  root.dataset.ready = '';

  const form = root.querySelector<HTMLFormElement>('[data-cat-form]')!;
  const drawer = root.querySelector<HTMLDialogElement>('[data-cat-drawer]')!;
  const openBtn = root.querySelector<HTMLButtonElement>('[data-cat-open]')!;
  const badge = root.querySelector<HTMLElement>('[data-cat-badge]')!;
  const tags = root.querySelector<HTMLElement>('[data-cat-tags]')!;
  const count = root.querySelector<HTMLElement>('[data-filter-count]');
  const shown = root.querySelector<HTMLElement>('[data-cat-shown]');
  const empty = root.querySelector<HTMLElement>('[data-cat-empty]');
  const grid = root.querySelector<HTMLElement>('[data-filter-grid]')!;
  const items = [...grid.children] as HTMLElement[];
  const viewBtns = [...root.querySelectorAll<HTMLButtonElement>('[data-view]')];
  const q = form.elements.namedItem('q') as HTMLInputElement;
  const sort = form.elements.namedItem('sort') as HTMLSelectElement;
  const boxes = [...form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];
  const banner = document.querySelector<HTMLElement>('.banner__meta');

  const checked = () => boxes.filter((b) => b.checked);
  const values = (el: HTMLElement, facet: string) => (el.dataset[facet] ?? '').split('|');

  const matches = (el: HTMLElement) => {
    const term = q.value.trim().toLowerCase();
    if (term && !(el.dataset.text ?? '').includes(term)) return false;
    return FACETS.every((f) => {
      const want = checked().filter((b) => b.name === f).map((b) => b.value);
      return !want.length || want.some((v) => values(el, f).includes(v));
    });
  };

  const order = (a: HTMLElement, b: HTMLElement) => {
    if (sort.value === 'az') return (a.dataset.name ?? '').localeCompare(b.dataset.name ?? '');
    if (sort.value === 'za') return (b.dataset.name ?? '').localeCompare(a.dataset.name ?? '');
    return Number(a.dataset.order) - Number(b.dataset.order);
  };

  const setView = (view: string) => {
    grid.dataset.view = view;
    viewBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
  };

  const syncUrl = () => {
    const p = new URLSearchParams();
    checked().forEach((b) => p.append(b.name, b.value));
    if (q.value.trim()) p.set('q', q.value.trim());
    if (sort.value) p.set('sort', sort.value);
    if (grid.dataset.view !== 'grid') p.set('view', grid.dataset.view!);
    const qs = p.toString();
    history.replaceState(history.state, '', `${location.pathname}${qs ? `?${qs}` : ''}${location.hash}`);
  };

  const renderTags = () => {
    const active = [
      ...checked().map((b) => ({ box: b as HTMLInputElement | null, label: b.dataset.label ?? b.value })),
      ...(q.value.trim() ? [{ box: null, label: `“${q.value.trim()}”` }] : []),
    ];
    tags.replaceChildren(
      ...active.map(({ box, label }) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cat__tag';
        btn.setAttribute('aria-label', `Remove filter ${label}`);
        btn.innerHTML = `<span></span><svg viewBox="0 0 10 10" width="9" height="9" aria-hidden="true"><path d="m1 1 8 8M9 1 1 9" stroke="currentColor" stroke-width="1.4"/></svg>`;
        btn.querySelector('span')!.textContent = label;
        btn.addEventListener('click', () => {
          if (box) box.checked = false;
          else q.value = '';
          apply();
        });
        li.append(btn);
        return li;
      }),
    );
    if (active.length) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat__clear';
      btn.textContent = 'Clear all';
      btn.addEventListener('click', () => {
        clear();
        apply();
      });
      li.append(btn);
      tags.append(li);
    }
    tags.hidden = active.length === 0;
  };

  const clear = () => {
    boxes.forEach((b) => (b.checked = false));
    q.value = '';
  };

  const apply = (animate = true) => {
    const matched = items.filter(matches);
    [...items].sort(order).forEach((el) => grid.append(el));
    items.forEach((el) => (el.hidden = !matched.includes(el)));

    const n = matched.length;
    if (count) count.textContent = plural(n);
    if (banner) banner.textContent = plural(n);
    if (shown) shown.textContent = `Show ${plural(n)}`;
    if (empty) empty.hidden = n > 0;
    const k = checked().length;
    badge.textContent = String(k);
    badge.hidden = k === 0;
    renderTags();
    syncUrl();
    if (animate) fadeIn(grid);
    emit();
  };

  // Keadaan awal dari URL.
  const params = new URLSearchParams(location.search);
  boxes.forEach((b) => (b.checked = params.getAll(b.name).includes(b.value)));
  q.value = params.get('q') ?? '';
  if ([...sort.options].some((o) => o.value === params.get('sort'))) sort.value = params.get('sort')!;
  setView(VIEWS.includes(params.get('view') ?? '') ? params.get('view')! : 'grid');
  // Tautan #slug dari menu/pencarian: pastikan kartunya tidak tersaring.
  const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target && items.includes(target) && !matches(target)) clear();
  apply(false);

  form.addEventListener('change', () => apply());
  let t: number | undefined;
  q.addEventListener('input', () => {
    clearTimeout(t);
    t = window.setTimeout(() => apply(), 250);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    apply();
    if (drawer.open) drawer.close();
  });

  viewBtns.forEach((b) =>
    b.addEventListener('click', () => {
      setView(b.dataset.view!);
      syncUrl();
      fadeIn(grid);
      emit();
    }),
  );

  // Laci: <dialog> modal duduk di top layer, jadi tidak ikut ditransform
  // ScrollSmoother; body.is-locked menjeda gulir halaman di belakangnya.
  openBtn.addEventListener('click', () => {
    drawer.showModal();
    document.body.classList.add('is-locked');
  });
  drawer.addEventListener('close', () => {
    document.body.classList.remove('is-locked');
    openBtn.focus();
  });
  root.querySelectorAll('[data-cat-close]').forEach((b) => b.addEventListener('click', () => drawer.close()));
  // Klik di luar panel (pada ::backdrop) menutup laci.
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) drawer.close();
  });
  root.querySelector('[data-cat-reset]')?.addEventListener('click', () => {
    boxes.forEach((b) => (b.checked = false));
    apply();
  });
}
