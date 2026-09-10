/** Memecah judul menjadi baris-baris bertopeng, supaya tiap baris bisa naik
 *  dari balik garis dengan jeda berurutan. Hanya dipakai pada judul display —
 *  teks isi dibiarkan utuh. */

const originals = new WeakMap<HTMLElement, string>();
let resizeBound = false;
let resizeTimer = 0;

const reduced = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/** Menunggu font sungguhan tiba. Kalau baris dihitung dengan font fallback,
 *  pemenggalannya akan berubah begitu Marcellus dimuat. */
function fontsSettled(): Promise<void> {
  const ready = document.fonts?.ready ?? Promise.resolve();
  const guard = new Promise<void>((resolve) => window.setTimeout(resolve, 1500));
  return Promise.race([ready.then(() => undefined), guard]);
}

function split(el: HTMLElement) {
  // Hanya teks polos yang dipecah. Kalau judulnya mengandung elemen lain,
  // biarkan apa adanya daripada merusak strukturnya.
  if (el.children.length && !el.querySelector('.line')) return;

  if (!originals.has(el)) originals.set(el, el.innerHTML);
  const source = originals.get(el)!;

  el.innerHTML = '';
  const words = source.trim().split(/\s+/);

  // Tahap satu: tiap kata jadi span, lalu posisi vertikalnya dibaca untuk
  // mengetahui kata mana jatuh di baris yang sama.
  const spans = words.map((word, i) => {
    const span = document.createElement('span');
    span.textContent = word;
    el.append(span);
    if (i < words.length - 1) el.append(document.createTextNode(' '));
    return span;
  });

  const rows: string[][] = [];
  let lastTop: number | null = null;
  spans.forEach((span, i) => {
    const top = span.offsetTop;
    if (lastTop === null || Math.abs(top - lastTop) > 2) {
      rows.push([]);
      lastTop = top;
    }
    rows[rows.length - 1].push(words[i]);
  });

  // Tahap dua: tiap baris dibungkus topeng sendiri.
  el.innerHTML = '';
  rows.forEach((row, i) => {
    const line = document.createElement('span');
    line.className = 'line';
    const inner = document.createElement('span');
    inner.textContent = row.join(' ');
    inner.style.setProperty('--line-delay', `${i * 90}ms`);
    line.append(inner);
    el.append(line);
    // Spasi di ujung baris dipertahankan agar nama aksesibel judul tidak
    // menyambung tanpa jeda saat pembaca layar membacanya.
    if (i < rows.length - 1) el.append(document.createTextNode(' '));
  });

  // Reveal-nya menumpang pengamat yang sudah ada di reveal.ts.
  if (!el.hasAttribute('data-reveal')) el.setAttribute('data-reveal', '0');
  el.classList.add('is-split');
}

function splitAll() {
  const targets = Array.from(document.querySelectorAll<HTMLElement>('[data-lines]'));
  targets.forEach((el) => {
    if (!el.offsetParent) return; // di dalam wadah tersembunyi, tidak bisa diukur
    split(el);
  });
  return targets.length > 0;
}

export async function initSplitLines(onDone?: () => void) {
  const targets = document.querySelectorAll<HTMLElement>('[data-lines]');
  if (!targets.length) return;

  if (reduced()) {
    targets.forEach((el) => el.classList.add('is-split', 'is-revealed'));
    onDone?.();
    return;
  }

  await fontsSettled();
  splitAll();
  onDone?.();

  if (!resizeBound) {
    resizeBound = true;
    window.addEventListener('resize', () => {
      window.clearTimeout(resizeTimer);
      resizeTimer = window.setTimeout(() => {
        if (reduced()) return;
        document.querySelectorAll<HTMLElement>('[data-lines].is-split').forEach((el) => {
          const wasRevealed = el.classList.contains('is-revealed');
          split(el);
          if (wasRevealed) el.classList.add('is-revealed');
        });
      }, 200);
    });
  }
}
