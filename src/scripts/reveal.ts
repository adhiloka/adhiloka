/** Dua jenis kemunculan.
 *
 *  `data-reveal` — naik 10 px sambil memudar, dipakai untuk kisi dan daftar.
 *  Nilainya adalah jeda dalam milidetik.
 *
 *  `data-cta-reveal` — hanya memudar, tanpa gerak, dan jedanya diurus CSS.
 *
 *  `data-interlude` — wadahnya sendiri tidak bergerak; kelas `is-revealed`
 *  yang ia terima memicu cincin, kalimat, dan tautan di dalamnya secara
 *  berurutan lewat CSS komponennya.
 *
 *  Pemicunya sengaja tidak di tepi layar: elemen harus sudah 25% masuk sebelum
 *  dihitung terlihat, supaya jeda tautannya mulai saat blok benar-benar sudah
 *  nyaman dibaca — bukan saat baru menyembul dari bawah. */

const SELECTOR = '[data-reveal], [data-cta-reveal], [data-interlude]';

const REDUCED = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

let observer: IntersectionObserver | null = null;

const show = (el: HTMLElement) => {
  if (el.dataset.revealDone) return;
  el.dataset.revealDone = '1';
  observer?.unobserve(el);
  const delay = Number.parseInt(el.dataset.reveal || '0', 10);
  window.setTimeout(() => el.classList.add('is-revealed'), REDUCED() ? 0 : delay);
};

/** Munculkan semua yang masih tertunda di dalam sebuah blok, sekarang juga.
 *
 *  Dipakai pelangkah section: begitu satu section setinggi layar masuk, seluruh
 *  isinya memang sudah terlihat — termasuk jeda penutup yang duduk di sepertiga
 *  bawah, yang tidak pernah melewati garis -25% milik pengamat di bawah dan
 *  karena itu dulu baru muncul satu langkah gulir kemudian.
 *
 *  Jeda per elemen tetap dihormati, jadi urutannya (lebah, kalimat, tautan)
 *  tidak berubah — yang berubah hanya kapan hitungannya dimulai. */
export function revealWithin(root: HTMLElement) {
  if (REDUCED()) {
    root.querySelectorAll<HTMLElement>(SELECTOR).forEach((el) => el.classList.add('is-revealed'));
    return;
  }
  if (root.matches(SELECTOR)) show(root);
  root.querySelectorAll<HTMLElement>(SELECTOR).forEach(show);
}

export function initReveal() {
  const targets = Array.from(document.querySelectorAll<HTMLElement>(SELECTOR));

  if (REDUCED()) {
    targets.forEach((el) => el.classList.add('is-revealed'));
    return;
  }

  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) show(entry.target as HTMLElement);
      });
    },
    { rootMargin: '0px 0px -25% 0px', threshold: 0 },
  );

  targets.forEach((el) => {
    const duration = el.dataset.revealDuration;
    if (duration) el.style.setProperty('--reveal-dur', `${duration}ms`);

    // Apa pun yang sudah cukup masuk ke viewport saat muat langsung dijalankan,
    // supaya blok paruh atas tidak menunggu event scroll.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.75) show(el);
    else observer!.observe(el);
  });
}
