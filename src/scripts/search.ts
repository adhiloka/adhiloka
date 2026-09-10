/** Laci pencarian: buka/tutup, jebakan fokus, dan penyaringan langsung atas
 *  indeks statis yang disematkan saat build. */

type Entry = { title: string; sub: string; href: string; keywords: string };

const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

import { pauseScroll, resumeScroll } from './smooth-scroll';

let lastFocused: HTMLElement | null = null;

function readIndex(): Entry[] {
  const node = document.querySelector<HTMLScriptElement>('[data-search-index]');
  if (!node?.textContent) return [];
  try {
    return JSON.parse(node.textContent) as Entry[];
  } catch {
    return [];
  }
}

function score(entry: Entry, needle: string): number {
  const title = entry.title.toLowerCase();
  if (title.startsWith(needle)) return 3;
  if (title.includes(needle)) return 2;
  if (entry.keywords.includes(needle)) return 1;
  return 0;
}

export function initSearch() {
  const panel = document.querySelector<HTMLElement>('[data-search]');
  if (!panel) return;

  const drawer = panel.querySelector<HTMLElement>('.search__drawer')!;
  const input = panel.querySelector<HTMLInputElement>('[data-search-input]')!;
  const form = panel.querySelector<HTMLFormElement>('[data-search-form]')!;
  const results = panel.querySelector<HTMLElement>('[data-search-results]')!;
  const list = panel.querySelector<HTMLElement>('[data-search-list]')!;
  const count = panel.querySelector<HTMLElement>('[data-search-count]')!;
  const status = panel.querySelector<HTMLElement>('[data-search-status]')!;
  const fallback = panel.querySelector<HTMLElement>('[data-search-default]')!;
  const openers = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-search-open]'));
  const closers = Array.from(panel.querySelectorAll<HTMLElement>('[data-search-close]'));

  const index = readIndex();

  const close = () => {
    if (!panel.classList.contains('is-open')) return;
    panel.classList.remove('is-open');
    openers.forEach((o) => o.setAttribute('aria-expanded', 'false'));
    document.documentElement.style.overflow = '';
    resumeScroll();
    window.setTimeout(() => {
      panel.hidden = true;
    }, 620);
    lastFocused?.focus();
  };

  const open = () => {
    if (panel.classList.contains('is-open')) return;
    lastFocused = document.activeElement as HTMLElement;
    panel.hidden = false;
    document.documentElement.style.overflow = 'hidden';
    pauseScroll();
    openers.forEach((o) => o.setAttribute('aria-expanded', 'true'));
    // Reflow paksa, bukan requestAnimationFrame: rAF tidak berjalan di tab
    // yang tidak sedang digambar, dan laci akan tersangkut di luar layar.
    void panel.offsetHeight;
    panel.classList.add('is-open');
    input.focus();
  };

  const render = (needle: string) => {
    const term = needle.trim().toLowerCase();

    if (term.length < 2) {
      results.hidden = true;
      fallback.hidden = false;
      status.textContent = '';
      return;
    }

    const hits = index
      .map((entry) => ({ entry, s: score(entry, term) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s || a.entry.title.localeCompare(b.entry.title))
      .slice(0, 8);

    fallback.hidden = true;
    results.hidden = false;
    count.textContent = hits.length
      ? `${hits.length} result${hits.length === 1 ? '' : 's'}`
      : 'No match';
    status.textContent = hits.length
      ? `${hits.length} result${hits.length === 1 ? '' : 's'} for ${term}`
      : `No results for ${term}`;

    list.replaceChildren(
      ...(hits.length
        ? hits.map(({ entry }) => {
            const a = document.createElement('a');
            a.className = 'search__result';
            a.href = entry.href;
            const b = document.createElement('b');
            b.textContent = entry.title;
            const s = document.createElement('span');
            s.textContent = entry.sub;
            a.append(b, s);
            return a;
          })
        : [
            (() => {
              const p = document.createElement('p');
              p.className = 'search__empty';
              p.textContent = 'Nothing here under that name. Try a material, an origin or an extraction route.';
              return p;
            })(),
          ]),
    );
  };

  openers.forEach((o) => o.addEventListener('click', open));
  closers.forEach((c) => c.addEventListener('click', close));

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const first = list.querySelector<HTMLAnchorElement>('a');
    if (first) window.location.href = first.href;
  });

  let timer = 0;
  input.addEventListener('input', () => {
    window.clearTimeout(timer);
    timer = window.setTimeout(() => render(input.value), 120);
  });

  panel.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      close();
      return;
    }
    if (e.key !== 'Tab') return;

    // Jebakan fokus — laci ini modal, jadi Tab tidak boleh keluar darinya.
    const items = Array.from(drawer.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
      (el) => el.offsetParent !== null,
    );
    if (!items.length) return;
    const first = items[0];
    const last = items[items.length - 1];
    if (e.shiftKey && document.activeElement === first) {
      e.preventDefault();
      last.focus();
    } else if (!e.shiftKey && document.activeElement === last) {
      e.preventDefault();
      first.focus();
    }
  });
}
