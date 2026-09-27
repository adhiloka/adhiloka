/** Panel cari: buka/tutup dan pencocokan sederhana atas indeks di halaman. */

type Entry = { label: string; href: string; kind: string; extra?: string };

const esc = (s: string) =>
  s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function initSearch() {
  const panel = document.querySelector<HTMLElement>('[data-search]');
  if (!panel) return;
  const input = panel.querySelector<HTMLInputElement>('[data-search-input]')!;
  const results = panel.querySelector<HTMLElement>('[data-search-results]')!;
  const popular = panel.querySelector<HTMLElement>('[data-search-popular]')!;
  const index: Entry[] = JSON.parse(panel.querySelector('[data-search-index]')!.textContent || '[]');
  let opener: HTMLElement | null = null;

  const open = (from: HTMLElement) => {
    opener = from;
    panel.hidden = false;
    document.body.classList.add('is-locked');
    requestAnimationFrame(() => {
      panel.classList.add('is-open');
      input.focus({ preventScroll: true });
    });
  };
  const close = () => {
    panel.classList.remove('is-open');
    document.body.classList.remove('is-locked');
    window.setTimeout(() => (panel.hidden = true), 450);
    opener?.focus();
  };

  document.querySelectorAll<HTMLElement>('[data-search-open]').forEach((b) =>
    b.addEventListener('click', () => open(b)),
  );
  panel.querySelector('[data-search-close]')!.addEventListener('click', close);
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && !panel.hidden) close();
  });

  const render = () => {
    const q = input.value.trim().toLowerCase();
    popular.hidden = q.length > 0;
    if (!q) {
      results.innerHTML = '';
      return;
    }
    const words = q.split(/\s+/);
    const hits = index
      .filter((e) => {
        const hay = `${e.label} ${e.extra ?? ''}`.toLowerCase();
        return words.every((w) => hay.includes(w));
      })
      .slice(0, 12);
    results.innerHTML = hits.length
      ? hits
          .map((h) => `<li><a href="${h.href}">${esc(h.label)}<span>${h.kind}</span></a></li>`)
          .join('')
      : `<li class="srch__none">No results for “${esc(input.value.trim())}”.</li>`;
  };

  input.addEventListener('input', render);
  panel.querySelector('[data-search-form]')!.addEventListener('submit', (e) => {
    e.preventDefault();
    const first = results.querySelector<HTMLAnchorElement>('a');
    if (first) window.location.href = first.href;
  });
  // Tautan hasil yang menunjuk ke halaman ini (#anchor) harus menutup panel.
  panel.addEventListener('click', (e) => {
    if ((e.target as HTMLElement).closest('a')) close();
  });
}
