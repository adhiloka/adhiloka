/** Foto masuk dengan skala 1,06 ke 1 sambil memudar dari pelat hangat, alih-alih
 *  meloncat muncul begitu lazy-load selesai. Pelat hatch sistem tetap terlihat
 *  di bawahnya selama memuat — keadaan memuat itu sendiri sudah on-brand.
 *
 *  Kelas penyembunyi hanya dipasang oleh skrip ini, tidak pernah oleh CSS saja.
 *  Kalau JavaScript gagal dimuat, atau event `load` hilang, gambar tetap
 *  terlihat — efek yang gagal tidak boleh menghapus isi halaman. */

const SCOPES = '.plate, .mcard__plate, .fcard__media, .search__card-plate, .mdrawer__plate';

/** Jaring pengaman: sesudah ini gambar ditampilkan apa pun yang terjadi. */
const FALLBACK_MS = 3000;

export function initImageReveal() {
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  document.querySelectorAll<HTMLImageElement>(`:is(${SCOPES}) img`).forEach((img) => {
    // Poster hero adalah elemen LCP. Menundanya demi efek merusak Core Web
    // Vitals, jadi gambar eager dilewati.
    if (img.loading === 'eager' || img.dataset.imgReveal !== undefined) return;

    img.dataset.imgReveal = '';

    // Gambar dari cache tidak akan pernah mengirim event load lagi, jadi
    // dibiarkan tampil apa adanya tanpa animasi.
    if (img.complete && img.naturalWidth > 0) return;

    img.classList.add('is-pending');

    let done = false;
    const reveal = () => {
      if (done) return;
      done = true;
      img.classList.remove('is-pending');
    };

    img.addEventListener('load', reveal, { once: true });
    img.addEventListener('error', reveal, { once: true });
    window.setTimeout(reveal, FALLBACK_MS);
  });
}
