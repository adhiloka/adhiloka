/** Penyaring Media Releases ala `press-searchBox` adani.com: kata kunci,
 *  kategori, tahun dan urutan; filter aktif tampil sebagai tag yang bisa
 *  dilepas satu per satu atau sekaligus (Clear All); hasil dibuka enam demi
 *  enam lewat Load More (`load-more-btn`). Di layar ≤767 px formulirnya
 *  menjadi laci dengan tombol Apply Now, seperti `mob-filters-btn` Adani.
 *
 *  Markup: `[data-news-filter]` berisi `form[data-nf-form]` (q, cat, year,
 *  sort), `[data-nf-tags]`, `[data-filter-count]`, `[data-nf-empty]`,
 *  `[data-nf-more]`, `[data-nf-open]` / `[data-nf-close]` dan grid
 *  `[data-filter-grid]` yang anaknya ber-data-cat/-year/-date/-text. */

import { fadeIn } from './tabs';

const STEP = 6;
const emit = () => window.dispatchEvent(new CustomEvent('fx:refresh'));

export function initNewsFilter() {
  const root = document.querySelector<HTMLElement>('[data-news-filter]:not([data-ready])');
  if (!root) return;
  root.dataset.ready = '';

  const form = root.querySelector<HTMLFormElement>('[data-nf-form]')!;
  const grid = root.querySelector<HTMLElement>('[data-filter-grid]')!;
  const items = [...grid.querySelectorAll<HTMLElement>('[data-cat]')];
  const count = root.querySelector<HTMLElement>('[data-filter-count]');
  const tags = root.querySelector<HTMLElement>('[data-nf-tags]')!;
  const empty = root.querySelector<HTMLElement>('[data-nf-empty]');
  const more = root.querySelector<HTMLButtonElement>('[data-nf-more]');
  const field = (name: string) => form.elements.namedItem(name) as HTMLInputElement | HTMLSelectElement;
  let limit = STEP;

  const state = () => ({
    q: field('q').value.trim().toLowerCase(),
    cat: field('cat').value,
    year: field('year').value,
    sort: field('sort').value,
  });

  const renderTags = (s: ReturnType<typeof state>) => {
    const active = [
      s.q && { name: 'q', label: `“${field('q').value.trim()}”` },
      s.cat && { name: 'cat', label: s.cat },
      s.year && { name: 'year', label: s.year },
    ].filter(Boolean) as { name: string; label: string }[];
    tags.replaceChildren(
      ...active.map(({ name, label }) => {
        const li = document.createElement('li');
        const b = document.createElement('button');
        b.type = 'button';
        b.className = 'nf__tag';
        b.dataset.clear = name;
        b.setAttribute('aria-label', `Remove filter ${label}`);
        b.innerHTML = `<span></span><svg viewBox="0 0 10 10" width="9" height="9" aria-hidden="true"><path d="m1 1 8 8M9 1 1 9" stroke="currentColor" stroke-width="1.4"/></svg>`;
        b.querySelector('span')!.textContent = label;
        li.append(b);
        return li;
      }),
    );
    if (active.length) {
      const li = document.createElement('li');
      li.innerHTML = '<button type="button" class="nf__clear" data-clear="all">Clear All</button>';
      tags.append(li);
    }
    tags.hidden = active.length === 0;
  };

  const apply = (resetLimit = true, animate = true) => {
    if (resetLimit) limit = STEP;
    const s = state();
    const matched = items.filter(
      (el) =>
        (!s.q || (el.dataset.text ?? '').includes(s.q)) &&
        (!s.cat || el.dataset.cat === s.cat) &&
        (!s.year || el.dataset.year === s.year),
    );
    const dir = s.sort === 'asc' ? 1 : -1;
    matched.sort((a, b) => dir * (a.dataset.date ?? '').localeCompare(b.dataset.date ?? ''));
    matched.forEach((el) => grid.append(el));
    items.forEach((el) => (el.hidden = true));
    matched.forEach((el, i) => (el.hidden = i >= limit));

    if (count) count.textContent = `${matched.length} ${matched.length === 1 ? 'item' : 'items'}`;
    if (empty) empty.hidden = matched.length > 0;
    if (more) more.hidden = matched.length <= limit;
    renderTags(s);
    if (animate) fadeIn(grid);
    emit();
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    apply();
    setDrawer(false);
  });
  form.addEventListener('change', () => apply());
  let t: number | undefined;
  field('q').addEventListener('input', () => {
    clearTimeout(t);
    t = window.setTimeout(() => apply(), 250);
  });

  tags.addEventListener('click', (e) => {
    const b = (e.target as Element).closest<HTMLButtonElement>('[data-clear]');
    if (!b) return;
    if (b.dataset.clear === 'all') form.reset();
    else field(b.dataset.clear!).value = '';
    apply();
    field('q').focus();
  });

  more?.addEventListener('click', () => {
    limit += STEP;
    apply(false, false);
  });

  // Laci penyaring di layar kecil.
  const openBtn = root.querySelector<HTMLButtonElement>('[data-nf-open]');
  const setDrawer = (open: boolean) => {
    root.classList.toggle('is-filtering', open);
    openBtn?.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-locked', open);
  };
  openBtn?.addEventListener('click', () => setDrawer(true));
  root.querySelectorAll('[data-nf-close]').forEach((b) => b.addEventListener('click', () => setDrawer(false)));
  window.matchMedia('(min-width: 768px)').addEventListener('change', () => setDrawer(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('is-filtering')) setDrawer(false);
  });

  apply(true, false);
}
