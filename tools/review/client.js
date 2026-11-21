// Komentar review lokal (hanya disuntik saat `astro dev`, lihat integration.mjs).
(() => {
  if (window.__adhilokaReview) return;
  window.__adhilokaReview = true;

  const API = '/__review/comments';
  let comments = [];
  let picking = false;
  let open = null; // { kind: 'new'|'view', ... }
  let listOpen = false;

  const host = document.createElement('adhiloka-review');
  host.setAttribute('data-review-ui', '');
  const root = host.attachShadow({ mode: 'open' });
  root.innerHTML = `
<style>
  :host { all: initial; }
  * { box-sizing: border-box; font-family: system-ui, -apple-system, 'Segoe UI', sans-serif; }
  .layer { position: fixed; inset: 0; pointer-events: none; z-index: 2147483000; }
  .bar { position: fixed; left: 16px; bottom: 16px; display: flex; gap: 6px; pointer-events: auto; z-index: 2147483002; }
  .bar button { border: 0; border-radius: 999px; padding: 9px 14px; font-size: 13px; font-weight: 600; cursor: pointer;
    background: #1f2a24; color: #fff; box-shadow: 0 4px 14px rgba(0,0,0,.25); }
  .bar button.on { background: #e8572a; }
  .bar .count { background: #fff; color: #1f2a24; }
  .hl { position: fixed; border: 2px solid #e8572a; background: rgba(232,87,42,.08); border-radius: 3px; display: none; z-index: 2147483000; }
  .pin { position: fixed; width: 26px; height: 26px; margin: -13px 0 0 -13px; border-radius: 50% 50% 50% 0; transform: rotate(-45deg);
    background: #e8572a; color: #fff; border: 2px solid #fff; box-shadow: 0 2px 8px rgba(0,0,0,.35);
    display: grid; place-items: center; cursor: pointer; pointer-events: auto; z-index: 2147483001; }
  .pin span { transform: rotate(45deg); font-size: 12px; font-weight: 700; }
  .pin.lost { background: #8a8a8a; border-style: dashed; }
  .pop { position: fixed; width: 300px; background: #fff; color: #1f2a24; border-radius: 10px; padding: 12px;
    box-shadow: 0 10px 30px rgba(0,0,0,.3); pointer-events: auto; z-index: 2147483003; font-size: 13px; }
  .pop textarea { width: 100%; min-height: 84px; resize: vertical; border: 1px solid #c9cfc9; border-radius: 6px; padding: 8px;
    font-size: 13px; color: #1f2a24; background: #fff; }
  .pop textarea:focus { outline: 2px solid #e8572a; border-color: transparent; }
  .pop .meta { color: #6b746e; font-size: 11px; margin-bottom: 6px; word-break: break-word; }
  .pop .txt { white-space: pre-wrap; margin: 4px 0 8px; line-height: 1.45; }
  .row { display: flex; gap: 6px; justify-content: flex-end; margin-top: 8px; }
  .row button { border: 0; border-radius: 6px; padding: 7px 12px; font-size: 12px; font-weight: 600; cursor: pointer; background: #eef0ee; color: #1f2a24; }
  .row .main { background: #1f2a24; color: #fff; }
  .row .danger { background: #fbe4dc; color: #b23a12; margin-right: auto; }
  .list { position: fixed; left: 16px; bottom: 64px; width: 340px; max-height: 60vh; overflow: auto; background: #fff; color: #1f2a24;
    border-radius: 10px; box-shadow: 0 10px 30px rgba(0,0,0,.3); pointer-events: auto; z-index: 2147483003; font-size: 13px; padding: 6px 0; }
  .list h4 { margin: 10px 14px 4px; font-size: 11px; text-transform: uppercase; letter-spacing: .05em; color: #6b746e; }
  .list a { display: block; padding: 7px 14px; color: inherit; text-decoration: none; line-height: 1.4; }
  .list a:hover { background: #f4f5f4; }
  .list a b { color: #e8572a; margin-right: 6px; }
  .list .empty { padding: 12px 14px; color: #6b746e; }
  .tip { position: fixed; left: 50%; top: 12px; transform: translateX(-50%); background: #1f2a24; color: #fff; padding: 7px 14px;
    border-radius: 999px; font-size: 12px; pointer-events: none; z-index: 2147483003; display: none; }
  @media (max-width: 600px) { .pop, .list { width: calc(100vw - 32px); } }
</style>
<div class="layer">
  <div class="hl"></div>
  <div class="pins"></div>
  <div class="tip">Klik bagian yang mau dikomentari · Esc batal</div>
  <div class="popwrap"></div>
  <div class="listwrap"></div>
  <div class="bar">
    <button class="add" title="Tambah komentar (Alt+C)">+ Komentar</button>
    <button class="count" title="Daftar komentar">0</button>
  </div>
</div>`;

  const $ = (s) => root.querySelector(s);
  const hl = $('.hl'), pinsEl = $('.pins'), tip = $('.tip'), popwrap = $('.popwrap'), listwrap = $('.listwrap');
  const addBtn = $('.add'), countBtn = $('.count');

  const esc = (s) => String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
  const page = () => location.pathname;
  const here = () => comments.filter((c) => c.page === page());

  // ---------- data ----------
  async function load() {
    try {
      const r = await fetch(API, { cache: 'no-store' });
      const next = await r.json();
      if (JSON.stringify(next) !== JSON.stringify(comments)) {
        comments = next;
        if (open?.kind === 'view' && !comments.some((c) => c.id === open.id)) closePop();
        render();
      }
    } catch {}
  }
  async function api(method, path, body) {
    const r = await fetch(API + path, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: body ? JSON.stringify(body) : undefined,
    });
    if (!r.ok) throw new Error(await r.text());
    return r.json();
  }

  // ---------- elemen & konteks ----------
  function cssPath(el) {
    const parts = [];
    while (el && el.nodeType === 1 && el !== document.body && el !== document.documentElement) {
      if (el.id && document.querySelectorAll('#' + CSS.escape(el.id)).length === 1) {
        parts.unshift('#' + CSS.escape(el.id));
        return parts.join(' > ');
      }
      let s = el.localName;
      const p = el.parentElement;
      if (p) {
        const sib = [...p.children].filter((c) => c.localName === el.localName);
        if (sib.length > 1) s += `:nth-of-type(${sib.indexOf(el) + 1})`;
      }
      parts.unshift(s);
      el = p;
    }
    return 'body > ' + parts.join(' > ');
  }
  function find(sel) {
    try { return sel ? document.querySelector(sel) : null; } catch { return null; }
  }
  function headingFor(el) {
    const sec = el.closest('section, header, footer, nav, article, aside, main');
    const h = sec && sec.querySelector('h1, h2, h3');
    if (h && h.innerText.trim()) return h.innerText.trim().replace(/\s+/g, ' ').slice(0, 100);
    if (sec) return `<${sec.localName}${sec.className ? ' class="' + String(sec.className).slice(0, 60) + '"' : ''}>`;
    return '';
  }
  function context(el) {
    const img = el.closest('img, picture')?.querySelector?.('img') || (el.localName === 'img' ? el : el.querySelector('img'));
    const link = el.closest('a');
    const bg = getComputedStyle(el).backgroundImage;
    return {
      tag: el.localName,
      classes: String(el.className?.baseVal ?? el.className ?? '').slice(0, 120),
      heading: headingFor(el),
      snippet: (el.innerText || el.getAttribute('alt') || el.getAttribute('aria-label') || '').trim().replace(/\s+/g, ' ').slice(0, 180),
      img: img ? (img.currentSrc || img.src || '').replace(location.origin, '') + (img.alt ? ` (alt: ${img.alt})` : '') : (bg && bg !== 'none' ? bg.slice(0, 160) : undefined),
      href: link ? link.getAttribute('href') : undefined,
    };
  }
  function isUi(e) { return e.composedPath().includes(host); }

  // ---------- posisi pin ----------
  function pos(c) {
    const el = find(c.selector);
    if (el) {
      const r = el.getBoundingClientRect();
      if (r.width || r.height) return { x: r.left + (c.rx ?? 0.5) * r.width, y: r.top + (c.ry ?? 0.5) * r.height, lost: false };
      return null; // elemen tersembunyi (mis. menu tertutup)
    }
    return { x: (c.docX ?? 0) - scrollX, y: (c.docY ?? 0) - scrollY, lost: true };
  }
  function placePins() {
    for (const pin of pinsEl.children) {
      const c = comments.find((x) => x.id === pin.dataset.id);
      const p = c && pos(c);
      if (!p) { pin.style.display = 'none'; continue; }
      pin.style.display = '';
      pin.style.left = p.x + 'px';
      pin.style.top = p.y + 'px';
      pin.classList.toggle('lost', p.lost);
    }
    if (open?.kind === 'view') {
      const c = comments.find((x) => x.id === open.id);
      const p = c && pos(c);
      if (p) placePop(p.x, p.y);
    }
  }
  let raf = 0;
  const schedule = () => { if (!raf) raf = requestAnimationFrame(() => { raf = 0; placePins(); }); };

  // ---------- render ----------
  function render() {
    const list = here();
    countBtn.textContent = comments.length ? `${list.length} di sini · ${comments.length} total` : '0';
    pinsEl.innerHTML = list.map((c, i) => `<div class="pin" data-id="${c.id}" title="${esc(c.text)}"><span>${i + 1}</span></div>`).join('');
    placePins();
    if (listOpen) renderList();
  }
  function renderList() {
    if (!comments.length) { listwrap.innerHTML = '<div class="list"><div class="empty">Belum ada komentar.</div></div>'; return; }
    const pages = [...new Set(comments.map((c) => c.page))].sort((a, b) => (a === page() ? -1 : b === page() ? 1 : a.localeCompare(b)));
    listwrap.innerHTML = '<div class="list">' + pages.map((p) => {
      const items = comments.filter((c) => c.page === p);
      return `<h4>${esc(p)}${p === page() ? ' · halaman ini' : ''}</h4>` + items.map((c, i) =>
        `<a href="${esc(p)}#review-${c.id}" data-id="${c.id}"><b>${i + 1}</b>${esc(c.text.length > 90 ? c.text.slice(0, 90) + '…' : c.text)}</a>`).join('');
    }).join('') + '</div>';
  }

  // ---------- popup ----------
  function placePop(x, y) {
    const pop = popwrap.firstElementChild;
    if (!pop) return;
    const w = pop.offsetWidth, h = pop.offsetHeight;
    let left = x + 16, top = y - 10;
    if (left + w > innerWidth - 8) left = x - w - 16;
    if (left < 8) left = 8;
    if (top + h > innerHeight - 8) top = innerHeight - h - 8;
    if (top < 8) top = 8;
    pop.style.left = left + 'px';
    pop.style.top = top + 'px';
  }
  function closePop() { open = null; popwrap.innerHTML = ''; }

  function openNew(el, x, y) {
    const r = el.getBoundingClientRect();
    open = {
      kind: 'new',
      data: {
        page: page(),
        title: document.title,
        selector: cssPath(el),
        rx: r.width ? +((x - r.left) / r.width).toFixed(3) : 0.5,
        ry: r.height ? +((y - r.top) / r.height).toFixed(3) : 0.5,
        docX: Math.round(x + scrollX),
        docY: Math.round(y + scrollY),
        vw: innerWidth,
        device: innerWidth < 768 ? 'mobile' : innerWidth < 1024 ? 'tablet' : 'desktop',
        context: context(el),
      },
    };
    const ctx = open.data.context;
    popwrap.innerHTML = `<div class="pop">
      <div class="meta">&lt;${esc(ctx.tag)}&gt; ${esc(ctx.heading || '')}${ctx.snippet ? ' · “' + esc(ctx.snippet.slice(0, 60)) + '”' : ''}</div>
      <textarea placeholder="Tulis komentar…"></textarea>
      <div class="row"><button class="cancel">Batal</button><button class="main save">Simpan</button></div>
    </div>`;
    placePop(x, y);
    const ta = popwrap.querySelector('textarea');
    ta.focus();
    ta.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) save();
      if (e.key === 'Escape') closePop();
    });
    popwrap.querySelector('.cancel').onclick = closePop;
    popwrap.querySelector('.save').onclick = save;
    async function save() {
      const text = ta.value.trim();
      if (!text) { ta.focus(); return; }
      try {
        const item = await api('POST', '', { ...open.data, text });
        comments.push(item);
        closePop();
        render();
      } catch (err) { alert('Gagal menyimpan: ' + err.message); }
    }
  }

  function openView(id, editing = false) {
    const c = comments.find((x) => x.id === id);
    if (!c) return;
    open = { kind: 'view', id };
    const n = here().indexOf(c) + 1;
    const when = new Date(c.created).toLocaleString('id-ID', { dateStyle: 'medium', timeStyle: 'short' });
    popwrap.innerHTML = editing
      ? `<div class="pop"><div class="meta">#${n} · ubah</div><textarea>${esc(c.text)}</textarea>
          <div class="row"><button class="cancel">Batal</button><button class="main save">Simpan</button></div></div>`
      : `<div class="pop"><div class="meta">#${n} · ${esc(c.device || '')} ${c.vw ? c.vw + 'px' : ''} · ${esc(when)}</div>
          <div class="txt">${esc(c.text)}</div>
          <div class="row"><button class="danger del">Hapus</button><button class="edit">Ubah</button><button class="main close">Tutup</button></div></div>`;
    const p = pos(c) || { x: innerWidth / 2, y: innerHeight / 2 };
    placePop(p.x, p.y);
    if (editing) {
      const ta = popwrap.querySelector('textarea');
      ta.focus();
      ta.setSelectionRange(ta.value.length, ta.value.length);
      const save = async () => {
        const text = ta.value.trim();
        if (!text) return;
        Object.assign(c, await api('PATCH', '/' + id, { text }));
        render();
        openView(id);
      };
      ta.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && (e.ctrlKey || e.metaKey)) save();
        if (e.key === 'Escape') openView(id);
      });
      popwrap.querySelector('.cancel').onclick = () => openView(id);
      popwrap.querySelector('.save').onclick = save;
    } else {
      popwrap.querySelector('.close').onclick = closePop;
      popwrap.querySelector('.edit').onclick = () => openView(id, true);
      popwrap.querySelector('.del').onclick = async () => {
        await api('DELETE', '/' + id);
        comments = comments.filter((x) => x.id !== id);
        closePop();
        render();
      };
    }
  }

  // ---------- mode memilih ----------
  function setPicking(on) {
    picking = on;
    addBtn.classList.toggle('on', on);
    addBtn.textContent = on ? 'Batal' : '+ Komentar';
    tip.style.display = on ? 'block' : 'none';
    hl.style.display = 'none';
    document.documentElement.style.cursor = on ? 'crosshair' : '';
    if (on) { closePop(); listOpen = false; listwrap.innerHTML = ''; }
  }
  function targetAt(x, y) {
    const el = document.elementFromPoint(x, y);
    return el && el !== document.documentElement ? el : null;
  }
  const block = (e) => {
    if (!picking || isUi(e)) return;
    e.preventDefault();
    e.stopPropagation();
    e.stopImmediatePropagation();
  };
  ['pointerdown', 'mousedown', 'mouseup', 'pointerup', 'touchstart', 'touchend', 'dblclick', 'contextmenu', 'submit'].forEach((t) =>
    window.addEventListener(t, block, { capture: true, passive: false }));
  window.addEventListener('mousemove', (e) => {
    if (!picking || isUi(e)) { hl.style.display = 'none'; return; }
    const el = targetAt(e.clientX, e.clientY);
    if (!el) return;
    const r = el.getBoundingClientRect();
    Object.assign(hl.style, { display: 'block', left: r.left + 'px', top: r.top + 'px', width: r.width + 'px', height: r.height + 'px' });
  }, true);
  window.addEventListener('click', (e) => {
    if (!picking || isUi(e)) return;
    block(e);
    const el = targetAt(e.clientX, e.clientY);
    setPicking(false);
    if (el) openNew(el, e.clientX, e.clientY);
  }, true);

  // ---------- tombol & keyboard ----------
  addBtn.onclick = () => setPicking(!picking);
  countBtn.onclick = () => {
    listOpen = !listOpen;
    if (listOpen) { setPicking(false); renderList(); } else listwrap.innerHTML = '';
  };
  pinsEl.addEventListener('click', (e) => {
    const pin = e.target.closest('.pin');
    if (pin) openView(pin.dataset.id);
  });
  listwrap.addEventListener('click', (e) => {
    const a = e.target.closest('a[data-id]');
    if (!a) return;
    const c = comments.find((x) => x.id === a.dataset.id);
    if (c && c.page === page()) {
      e.preventDefault();
      listOpen = false;
      listwrap.innerHTML = '';
      jump(c);
    }
  });
  function jump(c) {
    const el = find(c.selector);
    if (el) el.scrollIntoView({ block: 'center' });
    else scrollTo({ top: (c.docY ?? 0) - innerHeight / 2 });
    setTimeout(() => openView(c.id), 350);
  }
  window.addEventListener('keydown', (e) => {
    if (e.altKey && (e.key === 'c' || e.key === 'C')) { e.preventDefault(); setPicking(!picking); }
    else if (e.key === 'Escape' && picking) setPicking(false);
  }, true);

  window.addEventListener('scroll', schedule, { passive: true, capture: true });
  window.addEventListener('resize', schedule);
  setInterval(placePins, 800);
  setInterval(load, 3000);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) load(); });

  function mount() {
    if (!host.isConnected) document.body.appendChild(host);
  }
  mount();
  new MutationObserver(mount).observe(document.body, { childList: true });
  load().then(() => {
    const m = location.hash.match(/^#review-(\w+)$/);
    const c = m && comments.find((x) => x.id === m[1]);
    if (c) jump(c);
  });
})();
