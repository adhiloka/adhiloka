/** Katalog bahan baku: penyaring keluarga yang tersinkron ke URL, dan laci
 *  spesifikasi yang bisa ditautkan langsung lewat hash. */


const FOCUSABLE =
  'a[href], button:not([disabled]), input, select, textarea, [tabindex]:not([tabindex="-1"])';

/** Nama bersama untuk pelat yang melebur antara kartu dan laci. Hanya boleh
 *  dipakai satu elemen pada satu waktu; kalau ganda, peramban membatalkan
 *  transisinya. */
const PLATE = 'material-plate';

type WithVT = Document & {
  startViewTransition?: (cb: () => void) => { finished: Promise<void> };
};

const canMorph = () =>
  typeof (document as WithVT).startViewTransition === 'function' &&
  !window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let lastFocused: HTMLElement | null = null;
let popHandler: (() => void) | null = null;

export function initMaterials() {
  const grid = document.querySelector<HTMLElement>('[data-grid]');
  const drawer = document.querySelector<HTMLElement>('[data-drawer]');
  if (!grid || !drawer) return;

  const cards = Array.from(grid.querySelectorAll<HTMLElement>('.mcard'));
  const buttons = Array.from(document.querySelectorAll<HTMLButtonElement>('[data-family]'));
  const countEl = document.querySelector<HTMLElement>('[data-count]');
  const empty = document.querySelector<HTMLElement>('[data-empty]');
  const panel = drawer.querySelector<HTMLElement>('.mdrawer__panel')!;
  const articles = Array.from(drawer.querySelectorAll<HTMLElement>('[data-material]'));

  /* ── Penyaring ─────────────────────────────────────────────────────── */
  const applyFilter = (family: string, pushUrl = true) => {
    let shown = 0;
    cards.forEach((card) => {
      const on = family === 'All' || card.dataset.family === family;
      card.hidden = !on;
      if (on) shown += 1;
    });

    buttons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.family === family)));
    if (countEl) countEl.textContent = `${shown} ${shown === 1 ? 'material' : 'materials'}`;
    if (empty) empty.hidden = shown > 0;

    if (!pushUrl) return;
    const url = new URL(window.location.href);
    if (family === 'All') url.searchParams.delete('family');
    else url.searchParams.set('family', family.toLowerCase());
    history.replaceState(null, '', url);
  };

  buttons.forEach((b) =>
    b.addEventListener('click', () => applyFilter(b.dataset.family || 'All')),
  );
  document.querySelector('[data-reset]')?.addEventListener('click', () => applyFilter('All'));

  const initialFamily = new URL(window.location.href).searchParams.get('family');
  if (initialFamily) {
    const match = buttons.find((b) => (b.dataset.family || '').toLowerCase() === initialFamily);
    if (match) applyFilter(match.dataset.family!, false);
  }

  /* ── Laci ──────────────────────────────────────────────────────────── */
  let closeTimer = 0;

  /** Menjalankan perubahan DOM di dalam View Transition, dengan pelat sumber
   *  dan pelat tujuan berbagi satu nama supaya keduanya melebur. Kalau peramban
   *  tidak mendukungnya, perubahannya dijalankan apa adanya dan laci kembali
   *  memakai animasi geser biasa. */
  const morph = (
    source: HTMLElement | null,
    findTarget: () => HTMLElement | null,
    mutate: () => void,
  ) => {
    if (!canMorph() || !source) {
      mutate();
      return;
    }

    drawer.classList.add('is-vt');
    source.style.viewTransitionName = PLATE;

    const vt = (document as WithVT).startViewTransition!(() => {
      // Nama dilepas dari sumber di dalam callback: potret "lama" sudah diambil
      // sebelum ini, jadi tujuan bisa memakai nama yang sama tanpa bentrok.
      source.style.viewTransitionName = '';
      mutate();
      const target = findTarget();
      if (target) target.style.viewTransitionName = PLATE;
    });

    vt.finished.finally(() => {
      source.style.viewTransitionName = '';
      const target = findTarget();
      if (target) target.style.viewTransitionName = '';
      drawer.classList.remove('is-vt');
    });
  };

  const openDrawer = (slug: string, pushUrl = true, source: HTMLElement | null = null) => {
    const article = articles.find((a) => a.dataset.material === slug);
    if (!article) return false;

    window.clearTimeout(closeTimer);
    lastFocused = document.activeElement as HTMLElement;

    const apply = () => {
      articles.forEach((a) => (a.hidden = a !== article));
      panel.setAttribute(
        'aria-label',
        `${article.querySelector('.mdrawer__name')?.textContent ?? 'Material'} — specification`,
      );
      panel.scrollTop = 0;

      drawer.hidden = false;
      document.documentElement.style.overflow = 'hidden';
      // Reflow paksa agar transisi mulai dari translateX(100%) tanpa
      // bergantung pada requestAnimationFrame.
      void drawer.offsetHeight;
      drawer.classList.add('is-open');
      panel.querySelector<HTMLElement>('[data-drawer-close]')?.focus();
    };

    morph(source, () => article.querySelector<HTMLElement>('.mdrawer__plate'), apply);

    if (pushUrl && window.location.hash !== `#${slug}`) {
      history.pushState({ material: slug }, '', `#${slug}`);
    }
    return true;
  };

  const closeDrawer = (popUrl = true) => {
    if (drawer.hidden) return;

    const openArticle = articles.find((a) => !a.hidden);
    const slug = openArticle?.dataset.material;
    const sourcePlate = openArticle?.querySelector<HTMLElement>('.mdrawer__plate') ?? null;
    const backTo = () =>
      slug ? document.querySelector<HTMLElement>(`#${CSS.escape(slug)} .mcard__plate`) : null;

    const apply = () => {
      drawer.classList.remove('is-open');
      document.documentElement.style.overflow = '';
      closeTimer = window.setTimeout(() => {
        drawer.hidden = true;
        articles.forEach((a) => (a.hidden = true));
      }, 640);
    };

    // Menutup ikut melebur balik ke kartunya, supaya perjalanannya terasa satu
    // gerakan bolak-balik, bukan dua kejadian terpisah.
    if (canMorph() && sourcePlate && backTo()) {
      drawer.classList.add('is-vt');
      sourcePlate.style.viewTransitionName = PLATE;
      const vt = (document as WithVT).startViewTransition!(() => {
        sourcePlate.style.viewTransitionName = '';
        drawer.classList.remove('is-open');
        drawer.hidden = true;
        articles.forEach((a) => (a.hidden = true));
        document.documentElement.style.overflow = '';
        const card = backTo();
        if (card) card.style.viewTransitionName = PLATE;
      });
      vt.finished.finally(() => {
        sourcePlate.style.viewTransitionName = '';
        const card = backTo();
        if (card) card.style.viewTransitionName = '';
        drawer.classList.remove('is-vt');
      });
    } else {
      apply();
    }

    if (popUrl && window.location.hash) {
      history.pushState(null, '', window.location.pathname + window.location.search);
    }
    lastFocused?.focus();
  };

  grid.addEventListener('click', (e) => {
    const link = (e.target as HTMLElement).closest<HTMLAnchorElement>('[data-open]');
    if (!link) return;
    e.preventDefault();
    openDrawer(link.dataset.open!, true, link.querySelector<HTMLElement>('.mcard__plate'));
  });

  drawer.querySelectorAll('[data-drawer-close]').forEach((el) =>
    el.addEventListener('click', () => closeDrawer()),
  );

  drawer.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      e.preventDefault();
      closeDrawer();
      return;
    }
    if (e.key !== 'Tab') return;

    const items = Array.from(panel.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
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

  // Tombol maju/mundur peramban membuka atau menutup laci yang sama.
  // Listener lama dilepas dulu supaya tidak menumpuk setiap view transition.
  if (popHandler) window.removeEventListener('popstate', popHandler);
  popHandler = () => {
    const slug = window.location.hash.slice(1);
    if (slug && openDrawer(slug, false)) return;
    closeDrawer(false);
  };
  window.addEventListener('popstate', popHandler);

  // Tautan langsung, mis. /ingredients/catalog/#patchouli dari footer atau pencarian.
  const hash = window.location.hash.slice(1);
  if (hash) openDrawer(hash, false);
}
