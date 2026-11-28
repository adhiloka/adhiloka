/* Tabel perbandingan katalog (pemilik, 28 Nov 2026: "khusus ingredients dan
 * plastik bisa dibuat fitur tabel perbandingan"). Pola pembanding produk situs
 * pabrik: centang "Compare" di kartu, bilah bawah berisi pilihan, tombol
 * Compare membuka tabel berdampingan (baris = sifat, kolom = item).
 *
 * Markup yang dibaca:
 *   [data-compare-root]                 pembungkus katalog
 *     script[type=application/json][data-compare-data]
 *         { rows: string[], items: { [id]: { name, href, img, sub, values: string[] } } }
 *     input[type=checkbox][data-compare]  value = id item, di dalam kartu
 *     [data-compare-bar]                  bilah bawah (lihat CompareBar.astro)
 *     dialog[data-compare-dialog]
 * Paling banyak 4 item; tanpa hitungan yang tampil (aturan situs). Pilihan
 * disimpan di sessionStorage per katalog supaya bertahan saat pindah tab. */

type Item = { name: string; href: string; img: string; sub: string; values: string[] };
type Data = { rows: string[]; items: Record<string, Item> };

const MAX = 4;

const esc = (s: string) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]!);

export function initCompare() {
  document.querySelectorAll<HTMLElement>('[data-compare-root]').forEach((root) => {
    const dataEl = root.querySelector<HTMLScriptElement>('[data-compare-data]');
    const bar = root.querySelector<HTMLElement>('[data-compare-bar]');
    const dialog = root.querySelector<HTMLDialogElement>('[data-compare-dialog]');
    if (!dataEl || !bar || !dialog) return;
    /* Isi halaman ada di dalam ScrollSmoother (transform), jadi position:
       fixed di dalamnya tidak menempel ke layar: bilah dipindah ke body. */
    document.body.appendChild(bar);
    const data = JSON.parse(dataEl.textContent || '{}') as Data;
    const boxes = [...root.querySelectorAll<HTMLInputElement>('input[data-compare]')];
    const list = bar.querySelector<HTMLElement>('[data-compare-list]')!;
    const go = bar.querySelector<HTMLButtonElement>('[data-compare-go]')!;
    const clear = bar.querySelector<HTMLButtonElement>('[data-compare-clear]')!;
    const table = dialog.querySelector<HTMLElement>('[data-compare-table]')!;
    const key = `compare:${root.dataset.compareRoot || location.pathname}`;

    let picked: string[] = [];
    try {
      picked = (JSON.parse(sessionStorage.getItem(key) || '[]') as string[]).filter((id) => data.items[id]);
    } catch {
      picked = [];
    }

    const save = () => {
      try {
        sessionStorage.setItem(key, JSON.stringify(picked));
      } catch {
        /* penyimpanan tidak tersedia: pilihan hanya bertahan di halaman ini */
      }
    };

    const render = () => {
      boxes.forEach((b) => {
        b.checked = picked.includes(b.value);
        b.disabled = !b.checked && picked.length >= MAX;
        b.closest('[data-compare-pick]')?.classList.toggle('is-on', b.checked);
      });
      list.innerHTML = picked
        .map((id) => {
          const it = data.items[id];
          return `<li><img src="${esc(it.img)}" alt="" width="40" height="40" loading="lazy"><span>${esc(it.name)}</span><button type="button" data-compare-remove="${esc(id)}" aria-label="Remove ${esc(it.name)}"><svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="m1 1 10 10M11 1 1 11" stroke="currentColor" stroke-width="1.5"/></svg></button></li>`;
        })
        .join('');
      bar.hidden = picked.length === 0;
      go.disabled = picked.length < 2;
      document.body.classList.toggle('has-compare', picked.length > 0);
    };

    const toggle = (id: string, on: boolean) => {
      picked = on ? [...new Set([...picked, id])].slice(0, MAX) : picked.filter((x) => x !== id);
      save();
      render();
    };

    boxes.forEach((b) => b.addEventListener('change', () => toggle(b.value, b.checked)));
    list.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-compare-remove]');
      if (btn) toggle(btn.dataset.compareRemove!, false);
    });
    clear.addEventListener('click', () => {
      picked = [];
      save();
      render();
    });

    const build = () => {
      const items = picked.map((id) => data.items[id]);
      const head = items
        .map(
          (it, i) =>
            `<th scope="col"><a href="${esc(it.href)}"><img src="${esc(it.img)}" alt="" width="160" height="120" loading="lazy"><span class="cmp__name">${esc(it.name)}</span>${it.sub ? `<span class="cmp__sub">${esc(it.sub)}</span>` : ''}</a><button type="button" class="cmp__drop" data-compare-drop="${esc(picked[i])}" aria-label="Remove ${esc(it.name)}"><svg viewBox="0 0 12 12" width="10" height="10" aria-hidden="true"><path d="m1 1 10 10M11 1 1 11" stroke="currentColor" stroke-width="1.5"/></svg></button></th>`,
        )
        .join('');
      const body = data.rows
        .map((row, r) => {
          const vals = items.map((it) => it.values[r] || '—');
          if (vals.every((v) => v === '—')) return '';
          const same = vals.every((v) => v === vals[0]);
          return `<tr class="${same ? 'is-same' : ''}"><th scope="row">${esc(row)}</th>${vals.map((v) => `<td>${esc(v)}</td>`).join('')}</tr>`;
        })
        .join('');
      table.innerHTML = `<table><thead><tr><td class="cmp__corner"></td>${head}</tr></thead><tbody>${body}</tbody></table>`;
    };

    go.addEventListener('click', () => {
      if (picked.length < 2) return;
      build();
      dialog.showModal();
      document.dispatchEvent(new CustomEvent('compare:open', { detail: { items: picked.map((id) => data.items[id].name) } }));
    });
    table.addEventListener('click', (e) => {
      const btn = (e.target as HTMLElement).closest<HTMLButtonElement>('[data-compare-drop]');
      if (!btn) return;
      toggle(btn.dataset.compareDrop!, false);
      if (picked.length < 2) dialog.close();
      else build();
    });
    dialog.querySelector('[data-compare-close]')?.addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', (e) => {
      if (e.target === dialog) dialog.close();
    });

    render();
  });
}
