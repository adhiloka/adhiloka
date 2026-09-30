/** Linimasa Our History ala pageTimeline adani.com (lihat Timeline.astro).
 *
 *  - Era dan tahun yang sedang dibaca ditandai ScrollTrigger `top center` →
 *    `bottom center`; daftar tahun digeser supaya butir aktif di atas
 *    (Adani: marginTop −tinggi×indeks, 0,3 s power2.out).
 *  - Di desktop bilah era dan daftar tahun di-pin (sticky tidak berlaku di
 *    dalam ScrollSmoother); di layar kecil bilah era memakai sticky CSS dan
 *    menjadi dropdown.
 *  - Klik era/tahun menggulir halus sampai sasaran tepat di bawah bilah era.
 *    Pendengar ini mendahului pendengar # di scroll-fx.ts (defaultPrevented). */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

const HEADER_H = 65;

export function initTimeline() {
  const root = document.querySelector<HTMLElement>('[data-timeline]:not([data-ready])');
  if (!root) return;
  root.dataset.ready = '';
  const still = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  const nav = root.querySelector<HTMLElement>('[data-tl-nav]')!;
  const current = root.querySelector<HTMLElement>('[data-tl-current]')!;
  const toggle = root.querySelector<HTMLButtonElement>('[data-tl-toggle]')!;
  const navLinks = [...nav.querySelectorAll<HTMLAnchorElement>('[data-tl-link]')];
  const navH = () => nav.offsetHeight;

  const setOpen = (open: boolean) => {
    root.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', String(open));
  };
  toggle.addEventListener('click', () => setOpen(!root.classList.contains('is-open')));

  // ── Penanda era dan tahun ────────────────────────────────────────────
  const setEra = (block: HTMLElement) => {
    current.textContent = block.dataset.label ?? '';
    navLinks.forEach((a) => {
      const on = a.dataset.tlLink === block.id;
      a.classList.toggle('is-active', on);
      if (on) a.setAttribute('aria-current', 'true');
      else a.removeAttribute('aria-current');
    });
  };
  root.querySelectorAll<HTMLElement>('[data-tl-era]').forEach((block) =>
    ScrollTrigger.create({
      trigger: block,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => self.isActive && setEra(block),
    }),
  );

  const setYear = (entry: HTMLElement) => {
    const body = entry.closest<HTMLElement>('[data-tl-body]');
    const list = body?.querySelector<HTMLElement>('.tl__years');
    if (!list) return;
    const items = [...list.querySelectorAll<HTMLElement>('[data-tl-year]')];
    const active = items.find((li) => li.dataset.tlYear === entry.id);
    items.forEach((li) => li.classList.toggle('is-active', li === active));
    if (active && !still) gsap.to(list, { y: -active.offsetTop, duration: 0.3, ease: 'power2.out', overwrite: true });
  };
  root.querySelectorAll<HTMLElement>('[data-tl-entry]').forEach((entry) =>
    ScrollTrigger.create({
      trigger: entry,
      start: 'top center',
      end: 'bottom center',
      onToggle: (self) => self.isActive && setYear(entry),
    }),
  );

  // ── Pin desktop ──────────────────────────────────────────────────────
  const mm = gsap.matchMedia();
  mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', () => {
    ScrollTrigger.create({
      trigger: nav,
      start: `top ${HEADER_H}px`,
      endTrigger: root,
      end: () => `bottom ${HEADER_H + navH()}px`,
      pin: true,
      pinSpacing: false,
    });
    root.querySelectorAll<HTMLElement>('[data-tl-body]').forEach((body) => {
      const years = body.querySelector<HTMLElement>('[data-tl-years]');
      if (!years) return;
      const top = () => HEADER_H + navH() + 40;
      ScrollTrigger.create({
        trigger: years,
        start: () => `top ${top()}px`,
        endTrigger: body,
        end: () => `bottom ${top() + years.offsetHeight}px`,
        pin: true,
        pinSpacing: false,
      });
    });
  });

  // ── Gulir ke era/tahun ───────────────────────────────────────────────
  const go = (target: HTMLElement) => {
    const offset = HEADER_H + navH() + (target.matches('[data-tl-entry]') ? 40 : 0);
    const smoother = ScrollSmoother.get();
    if (smoother) smoother.scrollTo(target, !still, `top ${offset}px`);
    else window.scrollTo({ top: target.getBoundingClientRect().top + window.scrollY - offset, behavior: still ? 'auto' : 'smooth' });
  };
  root.addEventListener('click', (e) => {
    const a = (e.target as Element).closest<HTMLAnchorElement>('a[href^="#"]');
    if (!a) return;
    const target = document.getElementById(decodeURIComponent(a.hash.slice(1)));
    if (!target) return;
    e.preventDefault();
    setOpen(false);
    go(target);
    history.replaceState(null, '', a.hash);
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && root.classList.contains('is-open')) setOpen(false);
  });
}
