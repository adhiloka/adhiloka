/** Pembukaan kunjungan pertama: logo tersusun di atas kurtin putih sebelum
 *  situs terbuka. Hanya di beranda, sekali per sesi, dan tidak pernah dijalankan
 *  saat pengguna meminta gerak dikurangi.
 *
 *  Kelas `is-overture` dipasang oleh skrip inline di <head> supaya kurtinnya
 *  sudah buram sejak cat pertama — kalau diputuskan di sini, isi halaman akan
 *  sempat terlihat lalu tertutup. */

const KEY = 'adhiloka:overture';

export function initOverture() {
  const root = document.documentElement;
  if (!root.classList.contains('is-overture')) return;

  const stage = document.querySelector<HTMLElement>('[data-overture]');
  const curtain = document.getElementById('route-curtain');
  if (!stage || !curtain) {
    root.classList.remove('is-overture');
    return;
  }

  try {
    sessionStorage.setItem(KEY, '1');
  } catch {
    /* Jendela privat menolak penyimpanan; pembukaan tetap jalan sekali ini. */
  }

  // Tanda logo, lalu nama merapatkan jaraknya.
  const steps: [number, string][] = [
    [40, 'step-ring'],
    [260, 'step-name'],
  ];
  const timers = steps.map(([at, cls]) => window.setTimeout(() => stage.classList.add(cls), at));

  const finish = window.setTimeout(() => {
    root.classList.remove('is-overture');
    // Kurtin memudar 440 ms lewat transisinya sendiri; panggungnya dibersihkan
    // setelah itu agar tidak ikut muncul saat pindah rute.
    window.setTimeout(() => stage.remove(), 600);
  }, 900);

  // Kalau pengguna langsung menggulir, pembukaannya minggir.
  const skip = () => {
    timers.forEach(window.clearTimeout);
    window.clearTimeout(finish);
    root.classList.remove('is-overture');
    stage.remove();
  };
  window.addEventListener('wheel', skip, { once: true, passive: true });
  window.addEventListener('touchstart', skip, { once: true, passive: true });
  window.addEventListener('keydown', skip, { once: true });
}
