/** Panel Accessibility Adjustments di header, meniru `fnaccesbilityTab` dan
 *  `fnFontIncrease` adani.com: tema terang/gelap dan ukuran huruf -A / A / +A,
 *  disimpan di localStorage. Kelasnya dipasang di <html> sebelum halaman
 *  digambar oleh skrip inline di BaseLayout, supaya tidak berkedip.
 *
 *  Ukuran huruf Adani bertingkat dua: +A sekali = font-increase, +A lagi =
 *  double-increase, klik ketiga tidak berbuat apa-apa; -A sama ke bawah.
 *  Di sini tingkatnya disimpan sebagai angka -2…2. */

export const THEME_KEY = 'adh-theme';
export const FONT_KEY = 'adh-font';

const FONT_CLASSES = ['font-increase', 'double-increase', 'font-decrease', 'double-decrease'];
const CLASSES_FOR: Record<number, string[]> = {
  [-2]: ['font-decrease', 'double-decrease'],
  [-1]: ['font-decrease'],
  0: [],
  1: ['font-increase'],
  2: ['font-increase', 'double-increase'],
};

const store = {
  get: (k: string) => {
    try { return localStorage.getItem(k); } catch { return null; }
  },
  set: (k: string, v: string | null) => {
    try { v === null ? localStorage.removeItem(k) : localStorage.setItem(k, v); } catch { /* mode privat */ }
  },
};

export function initA11y() {
  const item = document.querySelector<HTMLElement>('[data-a11y]');
  if (!item) return;
  const root = document.documentElement;
  const toggle = item.querySelector<HTMLButtonElement>('[data-a11y-toggle]')!;
  const themeBtns = [...item.querySelectorAll<HTMLButtonElement>('[data-theme]')];
  const fontBtns = [...item.querySelectorAll<HTMLButtonElement>('[data-font]')];
  const meta = document.querySelector<HTMLMetaElement>('meta[name="theme-color"]');

  // ── Buka/tutup: klik ikon, tutup bila klik di luar atau Escape ─────────
  const setOpen = (open: boolean) => {
    item.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(!item.classList.contains('is-open')));
  document.addEventListener('click', (e) => {
    if (item.classList.contains('is-open') && !item.contains(e.target as Node)) setOpen(false);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key !== 'Escape' || !item.classList.contains('is-open')) return;
    setOpen(false);
    toggle.focus();
  });

  // ── Tema ───────────────────────────────────────────────────────────────
  const applyTheme = (dark: boolean) => {
    root.classList.toggle('dark-mode', dark);
    themeBtns.forEach((b) => b.setAttribute('aria-pressed', String((b.dataset.theme === 'dark') === dark)));
    meta?.setAttribute('content', dark ? '#000000' : '#ffffff');
  };
  themeBtns.forEach((b) =>
    b.addEventListener('click', () => {
      const dark = b.dataset.theme === 'dark';
      applyTheme(dark);
      store.set(THEME_KEY, dark ? 'dark' : null);
    }),
  );

  // ── Ukuran huruf ───────────────────────────────────────────────────────
  let level = root.classList.contains('double-increase') ? 2
    : root.classList.contains('font-increase') ? 1
    : root.classList.contains('double-decrease') ? -2
    : root.classList.contains('font-decrease') ? -1
    : 0;

  const applyFont = (next: number) => {
    const changed = next !== level;
    level = next;
    root.classList.remove(...FONT_CLASSES);
    root.classList.add(...CLASSES_FOR[level]);
    const active = level > 0 ? 'increase' : level < 0 ? 'decrease' : 'default';
    fontBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.font === active)));
    // Tinggi section berubah: posisi pemicu gulir harus dihitung ulang.
    if (changed) requestAnimationFrame(() => window.dispatchEvent(new CustomEvent('fx:refresh')));
  };
  fontBtns.forEach((b) =>
    b.addEventListener('click', () => {
      const f = b.dataset.font;
      const next = f === 'increase' ? (level >= 1 ? 2 : 1) : f === 'decrease' ? (level <= -1 ? -2 : -1) : 0;
      applyFont(next);
      store.set(FONT_KEY, next ? CLASSES_FOR[next].join(' ') : null);
    }),
  );

  // ── Reset (Adani memuat ulang halaman; di sini cukup dikembalikan) ─────
  item.querySelector('[data-a11y-reset]')!.addEventListener('click', () => {
    applyTheme(false);
    applyFont(0);
    store.set(THEME_KEY, null);
    store.set(FONT_KEY, null);
  });

  // Selaraskan tombol dengan kelas yang sudah dipasang skrip inline.
  applyTheme(root.classList.contains('dark-mode'));
  applyFont(level);
}
