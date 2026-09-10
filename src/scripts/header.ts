/** Perilaku header: kondisi scroll, mega menu, pemilih bahasa, menu layar sempit. */

import { pauseScroll, resumeScroll } from './smooth-scroll';

let scrollBound = false;
let docBound = false;

/** Satu jalur untuk membuka dan menutup menu layar sempit, dipakai baik oleh
 *  tombolnya maupun oleh Escape di tingkat dokumen. */
function setMobileMenu(open: boolean) {
  const menu = document.querySelector<HTMLElement>('[data-mobile-menu]');
  if (!menu || !menu.hidden === open) return;

  menu.hidden = !open;
  document.documentElement.style.overflow = open ? 'hidden' : '';
  if (open) pauseScroll();
  else resumeScroll();

  const toggles = document.querySelectorAll<HTMLButtonElement>('[data-menu-toggle]');
  toggles.forEach((t) => t.setAttribute('aria-expanded', String(open)));
  if (open) menu.querySelector<HTMLAnchorElement>('a')?.focus();
  else toggles[0]?.focus();
}

const q = <T extends Element>(sel: string) => document.querySelector<T>(sel);

function syncScrollState() {
  const header = q<HTMLElement>('[data-site-header]');
  if (!header) return;

  const y = window.scrollY;

  // Mengecilkan wordmark, dan di beranda menghentikan teks putih milik varian
  // over-dark. Aturan "sembunyi saat menggulir turun, muncul lagi saat naik"
  // sudah dicabut: menubar tidak lagi datang dan pergi mengikuti arah gulir.
  header.classList.toggle('is-scrolled', y > 40);

  // Menubar hanya ada selama SECTION 1 — di semua halaman. Begitu tepi bawah
  // section itu mencapai header, menubarnya pergi, dan tidak kembali sampai
  // digulir naik lagi ke section 1.
  //
  // Batasnya diambil dari tinggi section 1 yang sebenarnya, bukan angka tetap:
  // di beranda section 1 adalah hero setinggi 100svh, di halaman dalam ia
  // kepala halaman yang tingginya bisa lebih dari satu layar. Selama JavaScript
  // belum menandai section (atau di halaman tanpa section sama sekali), tinggi
  // jendela dipakai sebagai gantinya.
  const satu = document.querySelector<HTMLElement>('[data-section="1"]');
  const batas = (satu?.offsetHeight ?? window.innerHeight) - header.offsetHeight;
  header.classList.toggle('is-away', !header.classList.contains('is-open') && y > batas);
}

export function initHeader() {
  const header = q<HTMLElement>('[data-site-header]');
  if (!header) return;

  syncScrollState();

  if (!scrollBound) {
    window.addEventListener('scroll', syncScrollState, { passive: true });
    scrollBound = true;
  }

  /* ── Mega menu ─────────────────────────────────────────────────────── */
  const mega = header.querySelector<HTMLElement>('[data-mega]');
  const panels = Array.from(header.querySelectorAll<HTMLElement>('[data-mega-panel]'));
  const navLinks = Array.from(header.querySelectorAll<HTMLAnchorElement>('[data-nav-link]'));

  const closeMega = () => {
    header.classList.remove('is-open');
    panels.forEach((p) => (p.hidden = true));
    mega?.setAttribute('inert', '');
    navLinks.forEach((l) => l.removeAttribute('aria-expanded'));
  };

  const openMega = (label: string) => {
    let matched = false;
    panels.forEach((p) => {
      const on = p.dataset.megaPanel === label;
      p.hidden = !on;
      matched ||= on;
    });
    if (!matched) return closeMega();
    header.classList.add('is-open');
    mega?.removeAttribute('inert');
    navLinks.forEach((l) => {
      if (l.dataset.panel) l.setAttribute('aria-expanded', String(l.dataset.panel === label));
    });
  };

  navLinks.forEach((link) => {
    const label = link.dataset.panel;

    // Contact tidak punya panel. Hover di atasnya harus menutup panel yang
    // sedang terbuka, bukan membuka panel bernama "undefined".
    if (!label) {
      link.addEventListener('mouseenter', closeMega);
      link.addEventListener('focus', closeMega);
      return;
    }

    link.addEventListener('mouseenter', () => openMega(label));
    link.addEventListener('focus', () => openMega(label));
  });

  header.addEventListener('mouseleave', closeMega);

  /* ── Pemilih bahasa ────────────────────────────────────────────────── */
  const lang = header.querySelector<HTMLElement>('[data-lang]');
  const langToggle = header.querySelector<HTMLButtonElement>('[data-lang-toggle]');

  const closeLang = () => {
    lang?.classList.remove('is-open');
    langToggle?.setAttribute('aria-expanded', 'false');
  };

  langToggle?.addEventListener('click', () => {
    const open = lang!.classList.toggle('is-open');
    langToggle.setAttribute('aria-expanded', String(open));
  });

  /* ── Menu layar sempit ─────────────────────────────────────────────── */
  document
    .querySelectorAll<HTMLButtonElement>('[data-menu-toggle]')
    .forEach((t) =>
      t.addEventListener('click', () => {
        const menu = q<HTMLElement>('[data-mobile-menu]');
        setMobileMenu(menu?.hidden ?? true);
      }),
    );

  /* ── Escape menutup apa pun yang terbuka ───────────────────────────── */
  header.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeMega();
      closeLang();
    }
  });

  // Listener tingkat dokumen dipasang sekali saja; keduanya membaca ulang DOM
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
      if (e.key === 'Escape') setMobileMenu(false);
    });
  }
}
