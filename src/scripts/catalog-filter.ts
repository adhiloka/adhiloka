/** Penyaring katalog bahan ala Ingredient Catalog dsm-firmenich: tombol
 *  All filters membuka laci kiri berisi facet bercentang, lalu ada urutan
 *  (Relevance / Name A–Z / Z–A), kotak pencarian dan tombol tampilan grid/
 *  list. Filter aktif tampil sebagai tag yang bisa dilepas; seluruh keadaan
 *  disimpan di query URL (?family=Resin&q=…&sort=az&view=list&show=products)
 *  sehingga kartu Collections di hub bisa menaut ke katalog yang tersaring.
 *
 *  Dua tampilan (pemilik, 14 Nov 2026), sakelar `[data-mode-btn]`:
 *  - ingredients (bawaan): kartu per bahan `[data-filter-grid] > li`. Kartu
 *    tampil bila facet keluarga/bahan cocok DAN minimal satu kodenya cocok
 *    dengan pencarian + facet jenis. Bila yang cocok hanya sebagian kode,
 *    kode itu dibuka di daftar kecil `[data-hits]` dalam kartu (maks 3, sisanya
 *    lewat tombol yang pindah ke tampilan kode).
 *  - products: baris per kode `[data-prod-list] > li`, disaring langsung.
 *
 *  Pencarian dipecah per kata; semua kata harus ada sebagai awal kata
 *  (urutan bebas), jadi
 *  "benzoin propylene glycol", "955671" atau "patchouli md 34" langsung kena.
 *  Kata Indonesia yang lazim (sumatera, propilen glikol, nilam, kemenyan, …)
 *  diterjemahkan dulu lewat ALIAS. Nilai facet ganda dipisah "|". */

import { fadeIn } from './tabs';

type Mode = 'ingredients' | 'products';
const FACETS = ['family', 'type', 'ingredient'] as const;
const VIEWS = ['grid', 'list'];
const HIT_MAX = 3;
const emit = () => window.dispatchEvent(new CustomEvent('fx:refresh'));
const count = (n: number, one: string, many: string) => `${n} ${n === 1 ? one : many}`;

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
  [/\bminyak\b/g, 'oil'],
  [/\bekstrak\b/g, 'extract'],
  [/\bkristal\b/g, 'crystals'],
  [/\babsolut\b/g, 'absolute'],
  [/\bresinoida?\b/g, 'resinoid'],
];

/** Pasangan `norm` di catalog.astro: huruf kecil tanpa diakritik, tanda
 *  baca jadi spasi. */
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

export function initCatalog() {
  const root = document.querySelector<HTMLElement>('[data-catalog]:not([data-ready])');
  if (!root) return;
  root.dataset.ready = '';

  const form = root.querySelector<HTMLFormElement>('[data-cat-form]')!;
  const drawer = root.querySelector<HTMLDialogElement>('[data-cat-drawer]')!;
  const openBtn = root.querySelector<HTMLButtonElement>('[data-cat-open]')!;
  const badge = root.querySelector<HTMLElement>('[data-cat-badge]')!;
  const tags = root.querySelector<HTMLElement>('[data-cat-tags]')!;
  const countEl = root.querySelector<HTMLElement>('[data-filter-count]');
  const shown = root.querySelector<HTMLElement>('[data-cat-shown]');
  const empty = root.querySelector<HTMLElement>('[data-cat-empty]');
  const grid = root.querySelector<HTMLElement>('[data-filter-grid]')!;
  const prodWrap = root.querySelector<HTMLElement>('[data-prod-wrap]')!;
  const prodList = root.querySelector<HTMLElement>('[data-prod-list]')!;
  const cards = [...grid.children] as HTMLElement[];
  const rows = [...prodList.children] as HTMLElement[];
  const viewBtns = [...root.querySelectorAll<HTMLButtonElement>('[data-view]')];
  const modeBtns = [...root.querySelectorAll<HTMLButtonElement>('[data-mode-btn]')];
  const q = form.elements.namedItem('q') as HTMLInputElement;
  const sort = form.elements.namedItem('sort') as HTMLSelectElement;
  const boxes = [...form.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')];
  const banner = document.querySelector<HTMLElement>('.banner__meta');
  const bannerText = banner?.textContent ?? '';

  let mode: Mode = 'ingredients';
  const checked = () => boxes.filter((b) => b.checked && (mode === 'products' || b.name !== 'ingredient'));
  const wanted = (facet: string) => checked().filter((b) => b.name === facet).map((b) => b.value);
  const values = (el: HTMLElement, facet: string) => (el.dataset[facet] ?? '').split('|');
  const facetOk = (el: HTMLElement, facets: readonly string[]) =>
    facets.every((f) => {
      const want = wanted(f);
      return !want.length || want.some((v) => values(el, f).includes(v));
    });
  /** Tiap kata dicocokkan dari awal kata: "propylene" tidak menangkap
   *  "dipropylene", "9556" menangkap 955671. */
  const textOk = (el: HTMLElement, tokens: string[]) => {
    const text = ` ${el.dataset.text ?? ''}`;
    return tokens.every((t) => text.includes(` ${t}`));
  };

  const order = (a: HTMLElement, b: HTMLElement) => {
    if (sort.value === 'az') return (a.dataset.name ?? '').localeCompare(b.dataset.name ?? '');
    if (sort.value === 'za') return (b.dataset.name ?? '').localeCompare(a.dataset.name ?? '');
    return Number(a.dataset.order) - Number(b.dataset.order);
  };

  const setView = (view: string) => {
    grid.dataset.view = view;
    viewBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.view === view)));
  };

  const setMode = (m: Mode) => {
    mode = m;
    root.dataset.mode = m;
    modeBtns.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.modeBtn === m)));
    grid.hidden = m !== 'ingredients';
    prodWrap.hidden = m !== 'products';
    form.querySelectorAll<HTMLElement>('[data-n-ing]').forEach((el) => {
      el.textContent = `(${m === 'products' ? el.dataset.nProd : el.dataset.nIng})`;
    });
  };

  const syncUrl = () => {
    const p = new URLSearchParams();
    checked().forEach((b) => p.append(b.name, b.value));
    if (q.value.trim()) p.set('q', q.value.trim());
    if (sort.value) p.set('sort', sort.value);
    if (grid.dataset.view !== 'grid') p.set('view', grid.dataset.view!);
    if (mode === 'products') p.set('show', 'products');
    const qs = p.toString();
    history.replaceState(history.state, '', `${location.pathname}${qs ? `?${qs}` : ''}${location.hash}`);
  };

  const renderTags = () => {
    const active = [
      ...checked().map((b) => ({ box: b as HTMLInputElement | null, label: b.dataset.label ?? b.value })),
      ...(q.value.trim() ? [{ box: null, label: `“${q.value.trim()}”` }] : []),
    ];
    tags.replaceChildren(
      ...active.map(({ box, label }) => {
        const li = document.createElement('li');
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'cat__tag';
        btn.setAttribute('aria-label', `Remove filter ${label}`);
        btn.innerHTML = `<span></span><svg viewBox="0 0 10 10" width="9" height="9" aria-hidden="true"><path d="m1 1 8 8M9 1 1 9" stroke="currentColor" stroke-width="1.4"/></svg>`;
        btn.querySelector('span')!.textContent = label;
        btn.addEventListener('click', () => {
          if (box) box.checked = false;
          else q.value = '';
          apply();
        });
        li.append(btn);
        return li;
      }),
    );
    if (active.length) {
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
      tags.append(li);
    }
    tags.hidden = active.length === 0;
  };

  const clear = () => {
    boxes.forEach((b) => (b.checked = false));
    q.value = '';
  };

  /** Kartu bahan: cocokkan kode di dalamnya, buka yang cocok bila sebagian. */
  const applyCards = (tokens: string[]) => {
    const narrowing = tokens.length > 0 || wanted('type').length > 0;
    let nCards = 0;
    let nHits = 0;
    cards.forEach((card) => {
      const hits = [...card.querySelectorAll<HTMLElement>('[data-hit]')];
      const box = card.querySelector<HTMLElement>('[data-hits]')!;
      const more = card.querySelector<HTMLButtonElement>('[data-hits-more]')!;
      const head = card.querySelector<HTMLElement>('[data-hits-head]')!;
      const matched = facetOk(card, ['family', 'ingredient']) ? hits.filter((h) => textOk(h, tokens) && facetOk(h, ['type'])) : [];
      const show = matched.length > 0;
      card.hidden = !show;
      if (!show) return;
      nCards++;
      nHits += matched.length;
      // Semua kode cocok = tidak perlu dibuka; kartunya sudah mewakili.
      const partial = narrowing && matched.length < hits.length;
      box.hidden = !partial;
      hits.forEach((h) => (h.hidden = !partial || matched.indexOf(h) < 0 || matched.indexOf(h) >= HIT_MAX));
      head.textContent = partial ? `${count(matched.length, 'matching product', 'matching products')} of ${hits.length}` : '';
      const rest = matched.length - HIT_MAX;
      more.hidden = !partial || rest <= 0;
      if (rest > 0) more.textContent = `+ ${count(rest, 'more code', 'more codes')}`;
      more.dataset.ingredient = card.dataset.ingredient ?? '';
    });
    [...cards].sort(order).forEach((el) => grid.append(el));
    return { nCards, nHits, narrowing };
  };

  const applyRows = (tokens: string[]) => {
    let n = 0;
    rows.forEach((row) => {
      const ok = facetOk(row, FACETS) && textOk(row, tokens);
      row.hidden = !ok;
      if (ok) n++;
    });
    [...rows].sort(order).forEach((el) => prodList.append(el));
    return n;
  };

  const apply = (animate = true) => {
    const tokens = tokensOf(q.value);
    let label: string;
    let n: number;
    if (mode === 'ingredients') {
      const r = applyCards(tokens);
      n = r.nCards;
      label = count(r.nCards, 'ingredient', 'ingredients');
      if (r.narrowing && n) label += ` · ${count(r.nHits, 'product', 'products')}`;
    } else {
      n = applyRows(tokens);
      label = count(n, 'product code', 'product codes');
    }
    const filtered = tokens.length > 0 || checked().length > 0;
    if (countEl) countEl.textContent = label;
    if (banner) banner.textContent = filtered ? label : bannerText;
    if (shown) shown.textContent = `Show ${label}`;
    if (empty) empty.hidden = n > 0;
    const k = checked().length;
    badge.textContent = String(k);
    badge.hidden = k === 0;
    renderTags();
    syncUrl();
    if (animate) fadeIn(mode === 'ingredients' ? grid : prodWrap);
    emit();
  };

  // Keadaan awal dari URL.
  const params = new URLSearchParams(location.search);
  setMode(params.get('show') === 'products' ? 'products' : 'ingredients');
  boxes.forEach((b) => (b.checked = params.getAll(b.name).includes(b.value)));
  q.value = params.get('q') ?? '';
  if ([...sort.options].some((o) => o.value === params.get('sort'))) sort.value = params.get('sort')!;
  setView(VIEWS.includes(params.get('view') ?? '') ? params.get('view')! : 'grid');
  // Tautan #slug: slug bahan → kartu, slug produk → baris di tampilan kode.
  const target = location.hash && document.getElementById(decodeURIComponent(location.hash.slice(1)));
  if (target && rows.includes(target)) setMode('products');
  if (target && (rows.includes(target) || cards.includes(target))) {
    apply(false);
    if (target.hidden) clear();
  }
  apply(false);

  form.addEventListener('change', () => apply());
  let t: number | undefined;
  q.addEventListener('input', () => {
    clearTimeout(t);
    t = window.setTimeout(() => apply(), 250);
  });
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    apply();
    if (drawer.open) drawer.close();
  });

  modeBtns.forEach((b) =>
    b.addEventListener('click', () => {
      if (b.dataset.modeBtn === mode) return;
      setMode(b.dataset.modeBtn as Mode);
      apply();
    }),
  );

  // "+ n more codes" di kartu: pindah ke tampilan kode, tersaring ke bahan itu.
  grid.addEventListener('click', (e) => {
    const more = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-hits-more]');
    if (!more) return;
    setMode('products');
    boxes.forEach((b) => {
      if (b.name === 'ingredient') b.checked = b.value === more.dataset.ingredient;
    });
    apply();
    root.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });

  viewBtns.forEach((b) =>
    b.addEventListener('click', () => {
      setView(b.dataset.view!);
      syncUrl();
      fadeIn(grid);
      emit();
    }),
  );

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
  // Klik di luar panel (pada ::backdrop) menutup laci.
  drawer.addEventListener('click', (e) => {
    if (e.target === drawer) drawer.close();
  });
  root.querySelector('[data-cat-reset]')?.addEventListener('click', () => {
    boxes.forEach((b) => (b.checked = false));
    apply();
  });
}
