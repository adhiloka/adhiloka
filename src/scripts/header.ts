/** Perilaku header dan menu layar penuh (MenuOverlay).
 *
 *  - Header ala LV: transparan berhuruf putih di atas section 1 yang berfoto,
 *    bar putih (`is-solid`) begitu section 1 terlewati.
 *  - Menu ala Vale: buka/tutup, jebakan fokus, Escape. Di desktop panel
 *    sub-menu dikendalikan CSS (:hover/:focus-within); di HP item diklik untuk
 *    membuka panel yang masuk dari kanan, dan Go Back menutupnya. Gulir halaman
 *    dikunci CSS (`html.is-menu-open`) selama menu terbuka.
 *  - Pemilih bahasa. */

let scrollBound = false;
let docBound = false;
let closeTimer = 0;

const q = <T extends Element>(sel: string) => document.querySelector<T>(sel);

const FOCUSABLE = 'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/** Titik patah Vale: di bawah 768px sub-menu berupa panel geser. */
const narrow = () => window.matchMedia('(max-width: 767px)').matches;

function syncScrollState() {
  const header = q<HTMLElement>('[data-site-header]');
  if (!header) return;

  // Bar menjadi putih begitu section 1 lewat di bawah header. Batasnya tinggi
  // section 1 yang sebenarnya; sebelum section ditandai, tinggi jendela.
  const satu = document.querySelector<HTMLElement>('[data-section="1"]');
  const batas = (satu?.offsetHeight ?? window.innerHeight) - header.offsetHeight;
  header.classList.toggle('is-solid', window.scrollY > batas);
}

/* ── Menu ───────────────────────────────────────────────────────────────── */

const menuEl = () => q<HTMLElement>('[data-site-menu]');
const isMenuOpen = () => menuEl()?.classList.contains('is-open') ?? false;

/** Membuka panel sub-menu `index` di HP (null = semua tertutup). Di desktop
 *  panel tampil lewat hover/fokus, jadi di sana fungsi ini hanya menjaga
 *  atribut `inert` dan `aria-expanded`. */
function selectItem(menu: HTMLElement, index: string | null) {
  const kecil = narrow();
  menu.querySelectorAll<HTMLButtonElement>('[data-menu-item]').forEach((b) => {
    b.setAttribute('aria-expanded', String(kecil && b.dataset.menuItem === index));
  });
  menu.querySelectorAll<HTMLElement>('[data-menu-sub]').forEach((sub) => {
    const on = kecil && sub.dataset.menuSub === index;
    sub.classList.toggle('is-open', on);
    // Panel yang menunggu di luar layar (HP) tidak boleh terjangkau Tab.
    if (kecil && !on) sub.setAttribute('inert', '');
    else sub.removeAttribute('inert');
  });
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
    toggles.forEach((t) => t.setAttribute('aria-expanded', 'true'));
    window.setTimeout(() => menu.querySelector<HTMLElement>('[data-menu-close]')?.focus(), 60);
  } else {
    menu.classList.remove('is-open');
    document.documentElement.classList.remove('is-menu-open');
    toggles.forEach((t) => t.setAttribute('aria-expanded', 'false'));
    // Lapisan memudar 0,3 detik; setelah itu baru dikunci.
    closeTimer = window.setTimeout(() => {
      menu.setAttribute('inert', '');
      selectItem(menu, null);
    }, 320);
    toggles[0]?.focus();
  }
}

/** Tab dan Shift+Tab berputar di dalam menu selama ia terbuka. */
function trapFocus(e: KeyboardEvent) {
  const menu = menuEl();
  if (!menu || !isMenuOpen() || e.key !== 'Tab') return;
  const items = Array.from(menu.querySelectorAll<HTMLElement>(FOCUSABLE)).filter(
    (el) => !el.closest('[inert]') && el.offsetParent !== null && getComputedStyle(el).visibility !== 'hidden',
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
    menu.querySelectorAll<HTMLButtonElement>('[data-menu-item]').forEach((btn) =>
      btn.addEventListener('click', () => {
        // Desktop: panel sudah tampil lewat hover/fokus. Klik cukup memastikan
        // fokus ada di tombol, supaya layar sentuh juga memicu :focus-within.
        if (!narrow()) {
          btn.focus();
          return;
        }
        selectItem(menu, btn.dataset.menuItem!);
        const sub = menu.querySelector<HTMLElement>(`[data-menu-sub="${btn.dataset.menuItem}"]`);
        window.setTimeout(() => sub?.querySelector<HTMLElement>('[data-menu-back]')?.focus({ preventScroll: true }), 320);
      }),
    );

    menu.querySelectorAll<HTMLButtonElement>('[data-menu-back]').forEach((b) =>
      b.addEventListener('click', () => {
        const idx = b.closest<HTMLElement>('[data-menu-sub]')?.dataset.menuSub;
        selectItem(menu, null);
        menu.querySelector<HTMLElement>(`[data-menu-item="${idx}"]`)?.focus();
      }),
    );

    menu.querySelectorAll<HTMLElement>('[data-menu-close]').forEach((c) =>
      c.addEventListener('click', () => setMenu(false)),
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
          if (openSub && narrow()) {
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

    // Pindah melewati 768px selagi menu terbuka: atribut inert panel disusun ulang.
    window.matchMedia('(max-width: 767px)').addEventListener('change', () => {
      const m = menuEl();
      if (m) selectItem(m, null);
    });
  }
}
