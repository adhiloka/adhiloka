/** Gerak gulir ala adani.com. Takarannya disalin dari JavaScript Adani v94
 *  (`customJsbundleOptimized.js`: initGSAPScroll, fnTitleAnim, fnSubTitleAnim,
 *  fnBusinessAni, fnColumnAnim, fnParallaxImg, fnScrollPadding, fuZoomAnim,
 *  fnCounterAnim, businessTab; `animation.js`: homeRunAnimation).
 *
 *  Penanda di markup:
 *    data-speed="0.8"       kecepatan relatif ScrollSmoother (hero 0,8; teks kutipan 1,1;
 *                           foto besar Business 0,9), hanya saat gulir halus aktif
 *    data-anim="title"      opacity 0→1 mengikuti gulir (titleAnimation)
 *    data-anim="sub"        naik 100px (subTitleAnimation)
 *    data-anim="thumb"      naik 100px, mulai di 85 % layar (businessThumb)
 *    data-anim="columns"    anak [data-anim-item] naik 250px bergiliran (columnAnimation)
 *    data-anim="pad"        padding 0→40px mengikuti gulir (scrollPadding)
 *    data-anim="zoom"       skala 0,4→1 mengikuti gulir (zoominAnim)
 *    data-parallax          foto bergeser di dalam bingkainya (parallax-img)
 *    data-count             angka menghitung naik (counterAnim)
 *    data-quote             huruf kutipan menggelap satu per satu (homeRunAnimation);
 *                           data-quote="inner" memakai takaran inner-page.js
 *    data-more              naskah dilipat dua baris + tombol Read More (fnReadMore)
 *    main[data-inner]       section halaman dalam bertumpuk: di-pin lalu ditutupi
 *                           section berikutnya (fnParllexBar), kecuali [data-no-panel]
 *    data-pin               kolom yang menempel di bawah header selama induknya
 *                           ([data-pin-scope]) masih di layar (profil pimpinan)
 *
 *  Tanpa JS atau dengan prefers-reduced-motion, semuanya tampil diam. */

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollSmoother } from 'gsap/ScrollSmoother';

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

/** Inersia gulir halus dalam detik. Adani memakai 2; turunkan bila terasa berat. */
const SMOOTH = 2;
/** Tinggi header (--header-h): sasaran tautan # berhenti di bawahnya. */
const HEADER_H = 65;

const each = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  [...root.querySelectorAll<T>(sel)];

/* ── Gulir halus (initGSAPScroll) ───────────────────────────────────────── */

function smoothScroll() {
  const root = document.documentElement;
  const smoother = ScrollSmoother.create({
    smooth: SMOOTH,
    effects: true,
    // Adani: normalizeScroll true. allowNestedScroll supaya laci menu dan
    // panel pencarian yang punya gulir sendiri tetap bisa digulir.
    normalizeScroll: { allowNestedScroll: true },
    ignoreMobileResize: false,
  });
  root.classList.add('has-smoother');

  // Laci mobile dan panel pencarian mengunci halaman lewat body.is-locked.
  const lock = new MutationObserver(() => smoother.paused(document.body.classList.contains('is-locked')));
  lock.observe(document.body, { attributes: true, attributeFilter: ['class'] });

  // Isi halaman ditransform, jadi lompatan # bawaan peramban tidak berlaku.
  const go = (id: string, smooth: boolean) => {
    const el = document.getElementById(id);
    if (!el) return false;
    // Sasaran yang bisa difokus (skip-link ke <main>) dilompati tanpa animasi
    // lalu difokus; fokus di tengah gulir halus akan dibatalkan ScrollSmoother,
    // yang menggulir sendiri elemen terfokus yang belum tampil.
    const focusable = el.hasAttribute('tabindex');
    smoother.scrollTo(el, smooth && !focusable, `top ${HEADER_H}px`);
    if (focusable) el.focus({ preventScroll: true });
    return true;
  };
  const onClick = (e: MouseEvent) => {
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
    const a = (e.target as Element | null)?.closest?.<HTMLAnchorElement>('a[href*="#"]');
    if (!a) return;
    const url = new URL(a.href, location.href);
    if (url.pathname !== location.pathname || url.hash.length < 2) return;
    if (go(decodeURIComponent(url.hash.slice(1)), true)) {
      e.preventDefault();
      history.pushState(null, '', url.hash);
    }
  };
  document.addEventListener('click', onClick);
  const onLoad = () => location.hash.length > 1 && go(decodeURIComponent(location.hash.slice(1)), false);
  if (document.readyState === 'complete') onLoad();
  else window.addEventListener('load', onLoad, { once: true });

  return () => {
    lock.disconnect();
    document.removeEventListener('click', onClick);
    window.removeEventListener('load', onLoad);
    root.classList.remove('has-smoother');
    smoother.kill();
  };
}

/* ── Efek ───────────────────────────────────────────────────────────────── */

function titles() {
  each('[data-anim="title"]').forEach((el) =>
    gsap.fromTo(el, { opacity: 0 }, {
      opacity: 1, ease: 'power1.out', duration: 1.5,
      scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 60%', scrub: true },
    }),
  );
}

function rises() {
  // subTitleAnimation dan businessThumb: sama, hanya titik mulainya beda.
  const starts = { sub: 'top 90%', thumb: 'top 85%' } as const;
  (Object.keys(starts) as (keyof typeof starts)[]).forEach((kind) =>
    each(`[data-anim="${kind}"]`).forEach((el) =>
      gsap.fromTo(el, { opacity: 0, y: 100 }, {
        opacity: 1, y: 0, duration: 0.6, ease: 'power2.out',
        scrollTrigger: { trigger: el, start: starts[kind], toggleActions: 'play none none reverse' },
      }),
    ),
  );
}

function columns() {
  each('[data-anim="columns"]').forEach((box) => {
    const items = each('[data-anim-item]', box);
    if (!items.length) return;
    // fromTo berstagger (cara Adani) di GSAP 3.15 hanya merender posisi awal
    // anak pertama; sisanya tampil sebelum waktunya. Posisi awal dipasang dulu.
    gsap.set(items, { opacity: 0, y: 250 });
    gsap.to(items, {
      opacity: 1, y: 0, duration: 0.6, ease: 'power2.out', stagger: 0.2,
      scrollTrigger: { trigger: box, start: 'top 80%', toggleActions: 'play none none reverse' },
    });
  });
}

function paddings() {
  const small = window.innerWidth < 767;
  const side = small ? 20 : 40;
  each('[data-anim="pad"]').forEach((el) =>
    gsap.to(el, {
      paddingLeft: side, paddingRight: side, paddingBottom: side, paddingTop: 40, ease: 'none',
      scrollTrigger: { trigger: el, start: 'top 90%', end: 'top 10%', scrub: true },
    }),
  );
}

function zooms() {
  each('[data-anim="zoom"]').forEach((el) =>
    gsap.fromTo(el, { scale: 0.4, opacity: 0.5 }, {
      scale: 1, opacity: 1,
      scrollTrigger: { trigger: el, start: 'top 90%', end: 'bottom 80%', scrub: true },
    }),
  );
}

function parallaxImages() {
  // Adani menggeser foto −10 % → 5 % tingginya. Di sini fotonya 120 % tinggi
  // bingkai (CSS), jadi −8 % → 7 % menempuh jarak setara tanpa memperlihatkan tepi.
  const offs: (() => void)[] = [];
  each('[data-parallax]').forEach((frame) => {
    const img = frame.querySelector('img');
    if (!img) return;
    gsap.fromTo(img, { yPercent: -8 }, {
      yPercent: 7, ease: 'none',
      scrollTrigger: { trigger: frame, start: 'top bottom', end: 'bottom top', scrub: 1.5 },
    });
    // Zoom hover kartu (dulu transisi CSS) ikut GSAP, supaya tidak berebut transform.
    const card = frame.closest('a') ?? frame;
    const zoom = (scale: number) => () => gsap.to(img, { scale, duration: 1, ease: 'power1.out', overwrite: 'auto' });
    const enter = zoom(1.06);
    const leave = zoom(1);
    card.addEventListener('mouseenter', enter);
    card.addEventListener('mouseleave', leave);
    offs.push(() => {
      card.removeEventListener('mouseenter', enter);
      card.removeEventListener('mouseleave', leave);
    });
  });
  return () => offs.forEach((off) => off());
}

function businessImages() {
  // businessTab: foto besar tile aktif bergeser −5,4 % (6 × 0,9) mengikuti gulir…
  each('.big').forEach((pane) => {
    const img = pane.querySelector('img');
    if (!img) return;
    gsap.to(img, {
      yPercent: -5.4, ease: 'none',
      scrollTrigger: { trigger: pane, start: 'top bottom', end: 'bottom top', scrub: 0.9 },
    });
  });
  // …dan saat tile dipilih, fotonya masuk dari skala 1,2.
  const onPick = (e: Event) => {
    const img = (e as CustomEvent<HTMLElement | undefined>).detail?.querySelector('img');
    if (img) gsap.fromTo(img, { scale: 1.2, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.8, ease: 'power2.out' });
  };
  window.addEventListener('fx:pick', onPick);
  return () => window.removeEventListener('fx:pick', onPick);
}

function quotes() {
  // animation.js: huruf abu #c1c1c1 digelapkan satu per satu, .set berstagger
  // 0,1 mulai detik 0,3, di-scrub dari top 80% sejauh 75 % tinggi layar. Tanda
  // kutip tutup ikut gelap setelah huruf terakhir.
  // Halaman dalam (inner-page.js Adani) mulai lebih lambat dan lebih pendek:
  // 25 % tinggi section di 80 % layar, sejauh 60 % tinggi layar.
  each('[data-quote]').forEach((sec) => {
    const chars = each('.qs__c', sec);
    const quote = sec.querySelector('.qs__quote');
    const n = chars.length;
    const total = 0.3 + 0.1 * Math.max(n - 1, 0);
    const inner = sec.dataset.quote === 'inner';
    ScrollTrigger.create({
      trigger: sec, start: inner ? '25% 80%' : 'top 80%', end: inner ? '+=60%' : '+=75%', scrub: true,
      onUpdate: ({ progress }) => {
        const t = progress * total;
        const lit = t < 0.3 ? 0 : Math.min(n, Math.floor((t - 0.3) / 0.1 + 1e-6) + 1);
        chars.forEach((c, i) => c.classList.toggle('is-on', i < lit));
        quote?.classList.toggle('is-done', lit >= n);
      },
    });
  });
  return () => each('.qs__c.is-on').forEach((c) => c.classList.remove('is-on'));
}

function quotesStill() {
  each('.qs__c').forEach((c) => c.classList.add('is-on'));
  each('.qs__quote').forEach((q) => q.classList.add('is-done'));
}

function counters() {
  const restore: (() => void)[] = [];
  each('[data-count]').forEach((el) => {
    const target = el.dataset.count!;
    const m = target.match(/^([^\d]*)([\d,.]+)(.*)$/);
    if (!m) return;
    const [, pre, num, post] = m;
    const end = parseFloat(num.replace(/,/g, ''));
    const decimals = (num.split('.')[1] ?? '').length;
    const comma = num.includes(',');
    const fmt = (v: number) => {
      const s = decimals ? v.toFixed(decimals) : String(Math.floor(v));
      return comma ? Number(s).toLocaleString('en-US', { minimumFractionDigits: decimals }) : s;
    };
    const o = { v: 0 };
    el.textContent = `${pre}${fmt(0)}${post}`;
    ScrollTrigger.create({
      trigger: el, start: 'top 80%', once: true,
      onEnter: () =>
        gsap.to(o, {
          v: end, duration: 1.5, ease: 'power2.out',
          onUpdate: () => (el.textContent = `${pre}${fmt(o.v)}${post}`),
          onComplete: () => (el.textContent = target),
        }),
    });
    restore.push(() => (el.textContent = target));
  });
  return () => restore.forEach((r) => r());
}

function panels() {
  // fnParllexBar Adani: tiap section di-pin tanpa ruang tambahan, jadi
  // section berikutnya meluncur menutupinya. Section yang lebih pendek dari
  // layar di-pin saat atasnya menyentuh atas layar, yang lebih tinggi saat
  // dasarnya menyentuh dasar layar. Section terakhir tidak di-pin (skrip
  // inline Adani `lastSectionForAll`), begitu juga banner (bergerak dengan
  // data-speed) dan section yang punya pin sendiri ([data-no-panel]).
  const main = document.querySelector('main[data-inner]');
  if (!main) return;
  const secs = [...main.children].filter(
    (el): el is HTMLElement => el instanceof HTMLElement && el.matches('section, article') && !el.matches('.banner'),
  );
  secs.slice(0, -1).forEach((sec) => {
    if (sec.hasAttribute('data-no-panel')) return;
    ScrollTrigger.create({
      trigger: sec,
      start: () => (sec.offsetHeight < innerHeight ? 'top top' : 'bottom bottom'),
      pin: true,
      pinSpacing: false,
    });
  });
}

function stickies() {
  // inner-page.js Adani: kolom kiri profil pimpinan di-pin dari `top 80px`
  // sampai dasar kolomnya. position: sticky tidak bekerja di dalam
  // ScrollSmoother, jadi dipakai pin ScrollTrigger.
  each('[data-pin]').forEach((el) => {
    const scope = el.closest<HTMLElement>('[data-pin-scope]') ?? el.parentElement!;
    ScrollTrigger.create({
      trigger: el,
      start: `top ${HEADER_H + 15}px`,
      endTrigger: scope,
      end: () => `bottom ${HEADER_H + 15 + el.offsetHeight}px`,
      pin: true,
      pinSpacing: false,
    });
  });
}

function readMore() {
  // fnReadMore Adani: naskah lebih dari dua baris dilipat; tombolnya
  // berganti Read More / Read Less, tingginya dianimasikan 1 s.
  const offs: (() => void)[] = [];
  each('[data-more]').forEach((box) => {
    const body = box.querySelector<HTMLElement>('[data-more-body]');
    const btn = box.querySelector<HTMLButtonElement>('[data-more-btn]');
    if (!body || !btn) return;
    const line = window.innerWidth <= 768 ? 30 : 32;
    const closed = line * 2;
    if (body.scrollHeight <= closed + 4) return;
    let open = false;
    box.classList.add('is-folded');
    gsap.set(body, { height: closed, overflow: 'hidden' });
    btn.hidden = false;
    const label = btn.querySelector('.btn__label') ?? btn;
    const toggle = () => {
      open = !open;
      box.classList.toggle('is-folded', !open);
      btn.setAttribute('aria-expanded', String(open));
      label.textContent = open ? btn.dataset.less ?? 'Read Less' : btn.dataset.moreLabel ?? 'Read More';
      gsap.to(body, {
        height: open ? 'auto' : closed, duration: 1, ease: 'power2.out',
        onComplete: () => window.dispatchEvent(new CustomEvent('fx:refresh')),
      });
    };
    btn.addEventListener('click', toggle);
    offs.push(() => {
      btn.removeEventListener('click', toggle);
      btn.hidden = true;
      box.classList.remove('is-folded');
      gsap.set(body, { clearProps: 'height,overflow' });
    });
  });
  return () => offs.forEach((off) => off());
}

/* ── Pasang ─────────────────────────────────────────────────────────────── */

export function initScrollFx() {
  const root = document.documentElement;
  // Default Adani, kecuali invalidateOnRefresh: semua nilai gerak di sini
  // tetap, dan invalidasi saat refresh justru merekam ulang nilai awal dari
  // keadaan saat itu (mis. padding akordeon yang sudah 40 px).
  ScrollTrigger.defaults({ toggleActions: 'reverse pause', invalidateOnRefresh: false, scrub: false });

  const mm = gsap.matchMedia();
  // Gulir halus hanya di layar >991px, seperti Adani; dibuat sebelum efek lain.
  mm.add('(min-width: 992px) and (prefers-reduced-motion: no-preference)', smoothScroll);
  mm.add('(prefers-reduced-motion: no-preference)', () => {
    root.classList.add('fx');
    titles();
    rises();
    columns();
    paddings();
    zooms();
    const offParallax = parallaxImages();
    const offPick = businessImages();
    const offQuote = quotes();
    const offCount = counters();
    return () => {
      offParallax();
      offPick();
      offQuote();
      offCount();
      root.classList.remove('fx');
    };
  });
  mm.add('(prefers-reduced-motion: reduce)', quotesStill);
  // Read More juga berlaku tanpa gerak: lipatannya fitur, bukan hiasan.
  mm.add('all', readMore);
  // Section bertumpuk hanya di layar >1025px (Adani), dipasang paling akhir.
  mm.add('(min-width: 1026px) and (prefers-reduced-motion: no-preference)', () => {
    stickies();
    panels();
  });

  // Tab, penyaring, "Read More" dan formulir mengubah tinggi halaman. Bila
  // yang baru tampil adalah panel tab, gerak tile di dalamnya diputar ulang
  // (Adani memanggil fnBusinessAni lagi setiap tab diklik).
  window.addEventListener('fx:refresh', (e) => {
    ScrollTrigger.refresh();
    const panel = (e as CustomEvent<HTMLElement | undefined>).detail;
    if (!panel) return;
    ScrollTrigger.getAll().forEach((st) => {
      if (st.isActive && st.trigger instanceof Element && panel.contains(st.trigger)) st.animation?.restart();
    });
  });
  // Foto yang selesai dimuat belakangan menggeser posisi section.
  window.addEventListener('load', () => ScrollTrigger.refresh());
}
