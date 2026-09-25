/** Perilaku header dan menu layar penuh (MenuOverlay).
 *
 *  - Logo dan pil kanan hanya ada selama section 1; tombol menu pil emas tetap.
 *  - Menu: buka/tutup, pilih bagian (panel sub-menu + foto), tombol kembali di
 *    layar sempit, jebakan fokus, Escape, dan gulir halaman dijeda selama
 *    menu terbuka.
 *  - Pemilih bahasa. */

import { pauseScroll, resumeScroll } from './smooth-scroll';

let scrollBound = false;
let docBound = false;
let closeTimer = 0;

const q = <T extends Element>(sel: string) => document.querySelector<T>(sel);

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function syncScrollState() {
  const header = q<HTMLElement>('[data-site-header]');
  if (!header) return;

  const y = window.scrollY;
  header.classList.toggle('is-scrolled', y > 40);

  // Logo dan pil kanan hanya ada selama SECTION 1, di semua halaman. Batasnya
  // tinggi section 1 yang sebenarnya; sebelum section ditandai, tinggi jendela.
  const satu = document.querySelector<HTMLElement>('[data-section="1"]');
  const batas = (satu?.offsetHeight ?? window.innerHeight) - 160;
  header.classList.toggle('is-away', y > batas);
}

/* ── Menu ───────────────────────────────────────────────────────────────── */

const menuEl = () => q<HTMLElement>('[data-site-menu]');
const isMenuOpen = () => menuEl()?.classList.contains('is-open') ?? false;

function selectItem(menu: HTMLElement, index: string | null) {
  menu.querySelectorAll<HTMLButtonElement>('[data-menu-item]').forEach((b) => {
    b.setAttribute('aria-expanded', String(b.dataset.menuItem === index));
  });
  menu.querySelectorAll<HTMLElement>('[data-menu-sub]').forEach((sub) => {
    const on = sub.dataset.menuSub === index;
    sub.classList.toggle('is-open', on);
    if (on) sub.removeAttribute('inert');
    else sub.setAttribute('inert', '');
  });
  const want = index ?? 'default';
  const photos = Array.from(menu.querySelectorAll<HTMLElement>('[data-menu-photo]'));
  const hasPhoto = photos.some((p) => p.dataset.menuPhoto === want);
  photos.forEach((p) =>
    p.classList.toggle('is-shown', p.dataset.menuPhoto === (hasPhoto ? want : 'default')),
  );
}

function setMenu(open: boolean) {
  const menu = menuEl();
  if (!menu || isMenuOpen() === open) return;

  const toggles = document.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]');
  window.clearTimeout(closeTimer);

  if (open) {
    selectItem(menu, null);
    menu.removeAttribute('inert');
    // Satu bingkai jeda supaya transisi masuk berjalan dari keadaan tertutup.
    requestAnimationFrame(() => menu.classList.add('is-open'));
    document.documentElement.classList.add('is-menu-open');
    pauseScroll();
    toggles.forEach((t) => t.setAttribute('aria-expanded', 'true'));
    window.setTimeout(() => menu.querySelector<HTMLElement>('[data-menu-close]')?.focus(), 60);
  } else {
    menu.classList.remove('is-open');
    document.documentElement.classList.remove('is-menu-open');
    resumeScroll();
    toggles.forEach((t) => t.setAttribute('aria-expanded', 'false'));
    closeTimer = window.setTimeout(() => {
      menu.setAttribute('inert', '');
      selectItem(menu, null);
    }, 420);
    toggles[0]?.focus();
  }
}

/** Tab dan Shift+Tab berputar di dalam menu selama ia terbuka. */
function trapFocus(e: KeyboardEvent) {
  const menu = menuEl();
  if (!menu || !isMenuOpen() || e.key !== 'Tab') return;
  const items = Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.closest('[inert]') && el.offsetParent !== null,
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
}

export function initHeader() {
  const header = q<HTMLElement>('[data-site-header]');
  if (!header) return;

  syncScrollState();
  if (!scrollBound) {
    window.addEventListener('scroll', syncScrollState, { passive: true });
    window.addEventListener('resize', syncScrollState);
    scrollBound = true;
  }

  /* ── Menu ──────────────────────────────────────────────────────────── */
  document.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]').forEach((t) =>
    t.addEventListener('click', () => setMenu(!isMenuOpen())),
  );

  const menu = menuEl();
  if (menu) {
    menu.querySelector('[data-menu-close]')?.addEventListener('click', () => setMenu(false));

    menu.querySelectorAll<HTMLButtonElement>('[data-menu-item]').forEach((btn) =>
      btn.addEventListener('click', () => {
        const already = btn.getAttribute('aria-expanded') === 'true';
        selectItem(menu, already ? null : btn.dataset.menuItem!);
        if (!already) {
          // Fokus ikut ke panel supaya pengguna papan ketik langsung tiba di
          // tautan "Access the page".
          const sub = menu.querySelector<HTMLElement>(`[data-menu-sub="${btn.dataset.menuItem}"]`);
          window.setTimeout(() => sub?.querySelector<HTMLElement>('a')?.focus({ preventScroll: true }), 520);
        }
      }),
    );

    menu.querySelectorAll<HTMLButtonElement>('[data-menu-back]').forEach((b) =>
      b.addEventListener('click', () => {
        const idx = b.closest<HTMLElement>('[data-menu-sub]')?.dataset.menuSub;
        selectItem(menu, null);
        menu.querySelector<HTMLElement>(`[data-menu-item="${idx}"]`)?.focus();
      }),
    );

    // Tautan di dalam menu berpindah halaman lewat ClientRouter; menu harus
    // tertutup tanpa menunggu transisi keluarnya.
    menu.querySelectorAll<HTMLAnchorElement>('a[href]').forEach((a) =>
      a.addEventListener('click', () => setMenu(false)),
    );
  }

  /* ── Pemilih bahasa ────────────────────────────────────────────────── */
  const lang = header.querySelector<HTMLElement>('[data-lang]');
  const langToggle = header.querySelector<HTMLButtonElement>('[data-lang-toggle]');
  langToggle?.addEventListener('click', () => {
    const open = lang!.classList.toggle('is-open');
    langToggle.setAttribute('aria-expanded', String(open));
  });

  // Listener tingkat dokumen dipasang sekali saja; semuanya membaca ulang DOM
  // supaya tetap benar setelah view transition mengganti isi halaman.
  if (!docBound) {
    docBound = true;

    document.addEventListener('click', (e) => {
      const el = q<HTMLElement>('[data-lang]');
      if (el && !el.contains(e.target as Node)) {
        el.classList.remove('is-open');
        el.querySelector('[data-lang-toggle]')?.setAttribute('aria-expanded', 'false');
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        if (isMenuOpen()) {
          const m = menuEl()!;
          // Escape pertama menutup panel sub-menu di layar sempit, kedua menutup menu.
          const openSub = m.querySelector<HTMLElement>('[data-menu-sub].is-open');
          if (openSub && window.matchMedia('(max-width: 1079px)').matches) {
            selectItem(m, null);
            return;
          }
          setMenu(false);
        }
        const el = q<HTMLElement>('[data-lang]');
        el?.classList.remove('is-open');
      }
      trapFocus(e);
    });

    // Setelah pindah halaman, menu yang mungkin masih terbuka dibereskan.
    document.addEventListener('astro:before-swap', () => {
      document.documentElement.classList.remove('is-menu-open');
    });
  }
}
