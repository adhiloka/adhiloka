/** Header: laci mobile dan akordeon sub-menu. Mega-menu desktop tidak butuh
 *  skrip; ia murni :hover/:focus-within seperti di adani.com. */

const MOBILE = window.matchMedia('(max-width: 1026px)');

export function initNav() {
  const header = document.querySelector<HTMLElement>('[data-header]');
  if (!header) return;
  const burger = header.querySelector<HTMLButtonElement>('[data-burger]')!;

  const setOpen = (open: boolean) => {
    header.classList.toggle('is-open', open);
    burger.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('is-locked', open);
  };

  burger.addEventListener('click', () => setOpen(!header.classList.contains('is-open')));

  // Di laci, ketukan pada menu yang punya sub-menu membuka akordeonnya alih-alih
  // pindah halaman — sama seperti laci Adani. Satu akordeon terbuka sekaligus.
  header.querySelectorAll<HTMLAnchorElement>('[data-top].has-child').forEach((link) => {
    link.addEventListener('click', (e) => {
      if (!MOBILE.matches) return;
      e.preventDefault();
      const item = link.closest<HTMLElement>('[data-item]')!;
      const willOpen = !item.classList.contains('is-sub');
      header.querySelectorAll('[data-item].is-sub').forEach((el) => el.classList.remove('is-sub'));
      item.classList.toggle('is-sub', willOpen);
    });
  });

  MOBILE.addEventListener('change', () => setOpen(false));
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && header.classList.contains('is-open')) setOpen(false);
  });
}
