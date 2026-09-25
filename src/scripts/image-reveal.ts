/** Tirai gambar, meniru animacao-item di valeindonesia.com: lapisan teal
 *  menutupi foto lalu bergeser keluar ke kanan selama 1 detik begitu foto
 *  masuk layar dan sudah termuat.
 *
 *  Kelas penutup hanya dipasang oleh skrip ini, tidak pernah oleh CSS saja.
 *  Kalau JavaScript gagal, atau event `load` hilang, foto tetap terlihat:
 *  ada penghitung waktu cadangan yang selalu membuka tirainya. */

const SCOPES = '.plate, .mcard__plate, .fcard__media, [data-curtain]';

/** Jaring pengaman: sekian lama setelah wadahnya terlihat, tirai dibuka
 *  walaupun fotonya belum juga termuat. */
const FALLBACK_MS = 3500;

let observer: IntersectionObserver | null = null;

const open = (el: Element) => {
  el.classList.add('curtain-open');
  observer?.unobserve(el);
};

export function initImageReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  observer?.disconnect();
  observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        const img = el.querySelector('img');
        if (!img || (img.complete && img.naturalWidth > 0)) open(el);
        else {
          img.addEventListener('load', () => open(el), { once: true });
          img.addEventListener('error', () => open(el), { once: true });
          window.setTimeout(() => open(el), FALLBACK_MS);
        }
      });
    },
    { rootMargin: '0px 0px -12% 0px', threshold: 0.05 },
  );

  document.querySelectorAll<HTMLElement>(SCOPES).forEach((el) => {
    // Hanya wadah yang memang berisi foto, dan bukan foto hero (LCP).
    const img = el.querySelector('img');
    if (!img || img.loading === 'eager' || el.classList.contains('curtain')) return;
    // Wadah yang sudah terlihat saat muat tidak ditutup: tirai yang muncul
    // lalu langsung pergi hanya terbaca sebagai kedipan.
    if (el.getBoundingClientRect().top < window.innerHeight * 0.85) return;

    el.classList.add('curtain');
    observer!.observe(el);
  });
}
