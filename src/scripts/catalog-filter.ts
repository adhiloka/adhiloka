/** Katalog bahan (dirombak 15 Nov 2026, pemilik; rujukan Ingredient Catalog
 *  dsm-firmenich Studio).
 *
 *  - Kartu per bahan `[data-filter-grid] > li` tampil bila facet keluarga dan
 *    wangi cocok DAN minimal satu kodenya cocok dengan pencarian + facet jenis
 *    produk. Bila yang cocok hanya sebagian kode, kode itu dibuka di daftar
 *    kecil `[data-hits]` dalam kartu (maks 3, sisanya tautan More products).
 *  - Saran langsung `[data-suggest]` di bawah kotak cari: bahan (maks 4) dan
 *    kode produk (maks 6), tiap baris tautan ke halamannya. Ini pengganti
 *    daftar Product codes yang dulu lewat sakelar.
 *  - Pencarian dipecah per kata; semua kata harus ada sebagai awal kata
 *    (urutan bebas): "benzoin propylene glycol", "955671", "terpene", "co2
 *    extract", "floral". Kata Indonesia yang lazim diterjemahkan lewat ALIAS.
 *  - Keadaan di query URL (?q=&scent=&type=&family=&sort=); kartu Collections
 *    di Natural Ingredients menaut ke ?family=.
 *  - Wangi = radio pilihan tunggal (tab All/Citrus/Floral…, pemilik 15 Nov
 *    2026); jenis produk dan keluarga di laci tetap centang ganda.
 *  - Tidak ada hitungan di mana pun (koreksi pemilik berulang).
 *  - Supaya tidak berkedip: tanpa animasi fade, kartu hanya dipindah di DOM
 *    saat urutan berubah, dan fx:refresh (ScrollSmoother) didebounce. */

const FACETS = ['family', 'scent'] as const;
const HIT_MAX = 3;
const SUG_ING = 4;
const SUG_PROD = 6;

/** Istilah Indonesia → istilah katalog (Inggris). Frasa dua kata dulu. */
const ALIAS: [RegExp, string][] = [
  [/\bakar wangi\b/g, 'vetiver'],
  [/\bsere?h? wangi\b/g, 'citronella'],
  [/\bkayu manis\b/g, 'cinnamon'],
  [/\bkayu putih\b/g, 'cajeput'],
  [/\bjahe merah\b/g, 'red ginger'],
  [/\blada hitam\b/g, 'black pepper'],
  [/\blada putih\b/g, 'white pepper'],
  [/\basam jawa\b/g, 'tamarind'],
  [/\bjeruk purut\b/g, 'kaffir lime'],
  [/\bsumatera\b/g, 'sumatra'],
  [/\bpropilen\b/g, 'propylene'],
  [/\bglikol\b/g, 'glycol'],
  [/\betanol\b/g, 'ethanol'],
  [/\bkemenyan\b/g, 'benzoin'],
  [/\bnilam\b/g, 'patchouli'],
  [/\bceng(keh|kih)\b/g, 'clove'],
  [/\bpala\b/g, 'nutmeg'],
  [/\bfuli\b/g, 'mace'],
  [/\bsere?h\b|\bserai\b/g, 'lemongrass'],
  [/\bkenanga\b/g, 'cananga'],
  [/\bjahe\b/g, 'ginger'],
  [/\bkunyit\b/g, 'turmeric'],
  [/\bkemukus\b/g, 'cubeb'],
  [/\bsirih\b/g, 'betel'],
  [/\bkemangi\b/g, 'basil'],
  [/\bteh\b/g, 'tea'],
  [/\b(kakao|coklat|cokelat)\b/g, 'cocoa'],
  [/\bkopi\b/g, 'coffee'],
  [/\b(vanili|vanila|panili)\b/g, 'vanilla'],
  [/\bmelati\b/g, 'jasmine'],
  [/\bmawar\b/g, 'rose'],
  [/\bcendana\b/g, 'sandalwood'],
  [/\bkapulaga\b/g, 'cardamom'],
  [/\bketumbar\b/g, 'coriander'],
  [/\bminyak\b/g, 'oil'],
  [/\bekstrak\b/g, 'extract'],
  [/\bkristal\b/g, 'crystals'],
  [/\babsolut\b/g, 'absolute'],
  [/\bresinoida?\b/g, 'resinoid'],
  [/\bterpen\b/g, 'terpene'],
  [/\bbunga\b/g, 'floral'],
  [/\bkayu\b/g, 'woody'],
  [/\bpedas\b/g, 'spicy'],
  [/\bsegar\b/g, 'fresh'],
  [/\bmanis\b/g, 'sweet'],
];

/** Pasangan `norm` di catalog.astro. */
const norm = (s: string) =>
  s
    .normalize('NFD')
    .replace(/\p{M}/gu, '')
    .toLowerCase()
    .replace(/[.]/g, '')
    .replace(/[^a-z0-9%]+/g, ' ')
    .trim();
const tokensOf = (raw: string) => {
  let s = norm(raw);
  for (const [re, to] of ALIAS) s = s.replace(re, to);
  return s.split(' ').filter(Boolean);
};
/** Tiap kata dicocokkan dari awal kata: "propylene" tidak menangkap
 *  "dipropylene", "9556" menangkap 955671. */
const textOk = (el: HTMLElement, tokens: string[]) => {
  const text = ` ${el.dataset.text ?? ''}`;
  return tokens.every((t) => text.includes(` ${t}`));
};
const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function initCatalog() {
  const root = document.querySelector<HTMLElement>('[data-catalog]:not([data-ready])');
  if (!root) return;
  root.dataset.ready = '';

  const form = root.querySelector<HTMLFormElement>('[data-cat-form]')!;
  const drawer = root.querySelector<HTMLDialogElement>('[data-cat-drawer]')!;
  const openBtn = root.querySelector<HTMLButtonElement>('[data-cat-open]')!;
  const badge = root.querySelector<HTMLElement>('[data-cat-badge]')!;
  const tags = root.querySelector<HTMLElement>('[data-cat-tags]')!;
  const empty = root.querySelector<HTMLElement>('[data-cat-empty]');
  const grid = root.querySelector<HTMLElement>('[data-filter-grid]')!;
  const find = root.querySelector<HTMLElement>('[data-find]')!;
  const sug = root.querySelector<HTMLElement>('[data-suggest]')!;
  const sugIng = sug.querySelector<HTMLElement>('[data-sug-ing]')!;
  const sugProd = sug.querySelector<HTMLElement>('[data-sug-prod]')!;
  const sugIngWrap = sug.querySelector<HTMLElement>('[data-sug-ing-wrap]')!;
  const sugProdWrap = sug.querySelector<HTMLElement>('[data-sug-prod-wrap]')!;
  const cards = [...grid.children] as HTMLElement[];
  const q = form.elements.namedItem('q') as HTMLInputElement;
  const sort = form.elements.namedItem('sort') as HTMLSelectElement;
  // Kotak centang laci + radio wangi; radio "All" bernilai kosong.
  const boxes = [...form.querySelectorAll<HTMLInputElement>('input[type="checkbox"], input[type="radio"]')];
  const drawerBoxes = boxes.filter((b) => b.name !== 'scent');

  const checked = () => boxes.filter((b) => b.checked && b.value);
  const wanted = (facet: string) => checked().filter((b) => b.name === facet).map((b) => b.value);
  const facetOk = (el: HTMLElement, facets: readonly string[]) =>
    facets.every((f) => {
      const want = wanted(f);
      const have = (el.dataset[f] ?? '').split('|');
      return !want.length || want.some((v) => have.includes(v));
    });

  // fx:refresh memicu ScrollSmoother menghitung ulang tinggi halaman; cukup
  // sekali setelah pengetikan berhenti.
  let refreshT: number | undefined;
  const refresh = () => {
    clearTimeout(refreshT);
    refreshT = window.setTimeout(() => window.dispatchEvent(new CustomEvent('fx:refresh')), 300);
  };

  let lastSort: string | null = null;
  const reorder = () => {
    if (sort.value === lastSort) return;
    lastSort = sort.value;
    const by = (a: HTMLElement, b: HTMLElement) => {
      if (sort.value === 'az') return (a.dataset.name ?? '').localeCompare(b.dataset.name ?? '');
      if (sort.value === 'za') return (b.dataset.name ?? '').localeCompare(a.dataset.name ?? '');
      return Number(a.dataset.order) - Number(b.dataset.order);
    };
    grid.append(...[...cards].sort(by));
  };

  const syncUrl = () => {
    const p = new URLSearchParams();
    if (q.value.trim()) p.set('q', q.value.trim());
    checked().forEach((b) => p.append(b.name, b.value));
    if (sort.value) p.set('sort', sort.value);
    const qs = p.toString();
    history.replaceState(history.state, '', `${location.pathname}${qs ? `?${qs}` : ''}${location.hash}`);
  };

  const clear = () => {
    boxes.forEach((b) => (b.checked = b.type === 'radio' && b.value === ''));
    q.value = '';
  };

  /** Tag hanya untuk yang tidak terlihat di bilah: isi laci dan kata cari.
   *  Tab wangi sudah menunjukkan keadaannya sendiri. */
  const renderTags = () => {
    const tagBtn = (label: string, onRemove: () => void) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat__tag';
      btn.setAttribute('aria-label', `Remove ${label}`);
      btn.innerHTML = `<span></span><svg viewBox="0 0 10 10" width="9" height="9" aria-hidden="true"><path d="m1 1 8 8M9 1 1 9" stroke="currentColor" stroke-width="1.4"/></svg>`;
      btn.querySelector('span')!.textContent = label;
      btn.addEventListener('click', () => {
        onRemove();
        apply();
      });
      li.append(btn);
      return li;
    };
    const items = [
      ...(q.value.trim() ? [tagBtn(`“${q.value.trim()}”`, () => (q.value = ''))] : []),
      ...drawerBoxes.filter((b) => b.checked).map((b) => tagBtn(b.dataset.label ?? b.value, () => (b.checked = false))),
    ];
    if (items.length || checked().length) {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cat__clear';
      btn.textContent = 'Clear all';
      btn.addEventListener('click', () => {
        clear();
        apply();
      });
      li.append(btn);
      items.push(li);
    }
    tags.replaceChildren(...items);
    tags.hidden = items.length === 0;
  };

  const apply = () => {
    const tokens = tokensOf(q.value);
    const narrowing = tokens.length > 0 || wanted('type').length > 0;
    let shown = 0;
    cards.forEach((card) => {
      const hits = [...card.querySelectorAll<HTMLElement>('[data-hit]')];
      const box = card.querySelector<HTMLElement>('[data-hits]')!;
      const more = card.querySelector<HTMLElement>('[data-hits-more]')!;
      const matched = facetOk(card, FACETS)
        ? hits.filter((h) => textOk(h, tokens) && (!wanted('type').length || wanted('type').includes(h.dataset.type ?? '')))
        : [];
      const show = matched.length > 0;
      if (card.hidden === show) card.hidden = !show;
      if (!show) return;
      shown++;
      // Semua kode cocok = kartunya sudah mewakili; tidak perlu dibuka.
      const partial = narrowing && matched.length < hits.length;
      box.hidden = !partial;
      hits.forEach((h) => {
        const i = matched.indexOf(h);
        h.hidden = !partial || i < 0 || i >= HIT_MAX;
      });
      more.hidden = !partial || matched.length <= HIT_MAX;
    });
    reorder();
    if (empty) empty.hidden = shown > 0;
    badge.hidden = !drawerBoxes.some((b) => b.checked);
    renderTags();
    syncUrl();
    refresh();
  };

  /* ── Saran langsung ─────────────────────────────────────────────────── */
  let sugLinks: HTMLAnchorElement[] = [];
  let active = -1;
  const closeSug = () => {
    sug.hidden = true;
    q.setAttribute('aria-expanded', 'false');
    active = -1;
  };
  const mark = (i: number) => {
    active = i;
    sugLinks.forEach((a, k) => a.setAttribute('aria-selected', String(k === i)));
    sugLinks[i]?.scrollIntoView({ block: 'nearest' });
  };
  const suggest = () => {
    const tokens = tokensOf(q.value);
    if (!tokens.length || norm(q.value).length < 2) return closeSug();
    // Bahan: namanya cocok dulu, lalu bahan yang punya kode cocok.
    const byName = cards.filter((c) => textOk(c, tokens));
    const byProd = cards.filter((c) => !byName.includes(c) && [...c.querySelectorAll<HTMLElement>('[data-hit]')].some((h) => textOk(h, tokens)));
    const ings = [...byName, ...byProd].slice(0, SUG_ING);
    // Produk: kode yang diawali angka yang diketik dulu.
    const allHits = cards.flatMap((c) => [...c.querySelectorAll<HTMLElement>('[data-hit]')]);
    const num = tokens.find((t) => /^\d+$/.test(t));
    const prods = allHits
      .filter((h) => textOk(h, tokens))
      .sort((a, b) => Number(!!num && !(a.dataset.code ?? '').startsWith(num)) - Number(!!num && !(b.dataset.code ?? '').startsWith(num)))
      .slice(0, SUG_PROD);
    sugIng.innerHTML = ings
      .map((c) => {
        const a = c.querySelector<HTMLAnchorElement>('.mat__link')!;
        // Kandidat srcset terkecil (400w), bukan src ukuran asli.
        const el = c.querySelector('img');
        const img = el?.getAttribute('srcset')?.split(',')[0]?.trim().split(' ')[0] || el?.getAttribute('src');
        const latin = c.querySelector('.mat__latin')?.textContent ?? '';
        return `<li><a href="${a.getAttribute('href')}">${img ? `<img class="sug__img" src="${esc(img)}" alt="" loading="lazy">` : '<span class="sug__img"></span>'}<span><span class="sug__name">${esc(c.dataset.name ?? '')}</span><span class="sug__latin">${esc(latin)}</span></span></a></li>`;
      })
      .join('');
    sugProd.innerHTML = prods
      .map((h) => `<li><a href="${h.querySelector('a')!.getAttribute('href')}"><span class="sug__code">${esc(h.dataset.code ?? '')}</span><span class="sug__name">${esc(h.dataset.name ?? '')}</span></a></li>`)
      .join('');
    sugIngWrap.hidden = !ings.length;
    sugProdWrap.hidden = !prods.length;
    sugLinks = [...sug.querySelectorAll<HTMLAnchorElement>('a')];
    sugLinks.forEach((a) => a.setAttribute('tabindex', '-1'));
    active = -1;
    const open = sugLinks.length > 0 && document.activeElement === q;
    sug.hidden = !open;
    q.setAttribute('aria-expanded', String(open));
  };

  // Keadaan awal dari URL.
  const params = new URLSearchParams(location.search);
  boxes.forEach((b) => {
    if (b.type === 'radio') b.checked = (params.get(b.name) ?? '') === b.value;
    else b.checked = params.getAll(b.name).includes(b.value);
  });
  // Nilai wangi tak dikenal di URL: kembali ke All.
  if (!boxes.some((b) => b.type === 'radio' && b.checked)) {
    const all = boxes.find((b) => b.type === 'radio' && b.value === '');
    if (all) all.checked = true;
  }
  q.value = params.get('q') ?? '';
  if ([...sort.options].some((o) => o.value === params.get('sort'))) sort.value = params.get('sort')!;
  // Tautan lama #slug-produk (dari daftar kode yang sudah dilepas) → halaman produknya.
  const hash = decodeURIComponent(location.hash.slice(1));
  const oldRow = hash && root.querySelector<HTMLElement>(`[data-hit][data-slug="${CSS.escape(hash)}"] a`);
  if (oldRow) {
    location.replace(oldRow.getAttribute('href')!);
    return;
  }
  const target = hash ? document.getElementById(hash) : null;
  apply();
  if (target && cards.includes(target) && target.hidden) {
    clear();
    apply();
  }

  form.addEventListener('change', (e) => {
    if ((e.target as HTMLElement) === q) return;
    apply();
  });
  let t: number | undefined;
  q.addEventListener('input', () => {
    suggest();
    clearTimeout(t);
    t = window.setTimeout(apply, 200);
  });
  q.addEventListener('focus', suggest);
  q.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown' && !sug.hidden) {
      e.preventDefault();
      mark(Math.min(active + 1, sugLinks.length - 1));
    } else if (e.key === 'ArrowUp' && !sug.hidden) {
      e.preventDefault();
      mark(Math.max(active - 1, -1));
    } else if (e.key === 'Enter' && active >= 0 && !sug.hidden) {
      e.preventDefault();
      sugLinks[active].click();
    } else if (e.key === 'Escape') {
      closeSug();
    }
  });
  // Saran ditutup saat fokus atau klik pindah keluar dari kotak cari.
  document.addEventListener('pointerdown', (e) => {
    if (!find.contains(e.target as Node)) closeSug();
  });
  q.addEventListener('blur', () => {
    window.setTimeout(() => {
      if (!find.contains(document.activeElement)) closeSug();
    }, 150);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    clearTimeout(t);
    apply();
    closeSug();
    if (drawer.open) drawer.close();
  });

  // Laci: <dialog> modal duduk di top layer, jadi tidak ikut ditransform
  // ScrollSmoother; body.is-locked menjeda gulir halaman di belakangnya.
  openBtn.addEventListener('click', () => {
    drawer.showModal();
    document.body.classList.add('is-locked');
  });
  drawer.addEventListener('close', () => {
    document.body.classList.remove('is-locked');
    openBtn.focus();
  });
  root.querySelectorAll('[data-cat-close]').forEach((b) => b.addEventListener('click', () => drawer.close()));
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) drawer.close();
  });
  root.querySelector('[data-cat-reset]')?.addEventListener('click', () => {
    drawerBoxes.forEach((b) => (b.checked = false));
    apply();
  });
}
