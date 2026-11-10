/* Templat HTML untuk PDF unduhan: katalog (semua bahan, 10 halaman) dan
 * lembar spesifikasi produk (satu bahan, 2 halaman). Isi diambil dari
 * src/data/materials.ts; label sudah asli, isinya ikut lorem selama data
 * di sana masih lorem. Teks yang hanya ada di PDF (pembuka katalog,
 * penyimpanan, regulasi) juga lorem, ditandai komentar DATA. */

const SITE = 'https://adhiloka.com';
export const EDITION = '2026';
export const ISSUED = 'October 2026';
export const REVISION = '00';

/** Kode dua huruf per bahan untuk nomor dokumen ADH-PS-<kode>. */
export const CODES = {
  'benzoin-sumatra': 'BZ',
  patchouli: 'PC',
  'cinnamon-kerinci': 'CN',
  'vetiver-java': 'VT',
  clove: 'CL',
  'nutmeg-mace': 'NM',
};
export const docNo = (slug) => `ADH-PS-${CODES[slug] ?? 'XX'}`;

const esc = (s) =>
  String(s ?? '').replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' })[c]);
const pad = (n) => String(n).padStart(2, '0');
const pageUrl = (slug) => `${SITE}/ingredients/catalog/${slug}/`;
const shortUrl = (url) => url.replace(/^https:\/\//, '').replace(/\/$/, '');

/* Lorem deterministik: kalimat yang sama setiap kali dibangun, supaya PDF
 * tidak berubah tanpa alasan di antara dua build. */
const WORDS =
  'lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim minim veniam quis nostrud exercitation ullamco laboris nisi aliquip ex ea commodo consequat duis aute irure in reprehenderit voluptate velit esse cillum fugiat nulla pariatur excepteur sint occaecat cupidatat non proident sunt culpa qui officia deserunt mollit anim id est laborum'.split(
    ' ',
  );
export function lorem(seed, words) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  const out = [];
  for (let i = 0; i < words; i++) {
    h = Math.imul(h ^ (h >>> 15), 2246822507) >>> 0;
    out.push(WORDS[h % WORDS.length]);
  }
  const s = out.join(' ');
  return s.charAt(0).toUpperCase() + s.slice(1) + '.';
}

const chips = (m) =>
  (m.notes?.split(' · ') ?? []).map((n) => `<span>${esc(n)}</span>`).join('');

const facts = (rows) =>
  `<dl class="facts">${rows.map(([k, v, cls]) => `<dt>${esc(k)}</dt><dd${cls ? ` class="${cls}"` : ''}>${esc(v)}</dd>`).join('')}</dl>`;

const doc = (title, css, body) => `<!doctype html>
<html lang="en">
<head>
<meta charset="utf-8">
<title>${esc(title)}</title>
<link rel="stylesheet" href="pdf.css">
<style>${css}</style>
</head>
<body>
${body}
</body>
</html>`;

const CHECK = '<svg viewBox="0 0 16 16" width="9" height="9"><path d="M3 8.5 6.5 12 13 4.5" fill="none" stroke="currentColor" stroke-width="2"/></svg>';

/* ── Katalog ─────────────────────────────────────────────────────────── */

const CATALOG_CSS = `
.cv { background: #0b2420; color: #fff; }
.cv__shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgb(2 30 27 / .55) 0%, rgb(2 30 27 / 0) 30%, rgb(2 30 27 / .2) 52%, rgb(2 30 27 / .92) 100%); }
.cv__lockup { position: absolute; top: 18mm; left: 18mm; width: 52mm; }
.cv__ed { position: absolute; top: 20mm; right: 18mm; text-align: right; font-size: 7.5pt; letter-spacing: .16em; text-transform: uppercase; color: var(--cream); }
.cv__ed b { display: block; margin-top: 1mm; font-family: 'Crimson', serif; font-size: 22pt; font-weight: 400; letter-spacing: 0; color: #fff; }
.cv__text { position: absolute; left: 18mm; right: 18mm; bottom: 30mm; }
.cv__text .eyebrow { color: var(--gold); }
.cv__title { margin-top: 5mm; font-family: 'Crimson', serif; font-weight: 400; font-size: 52pt; line-height: .98; letter-spacing: -.01em; }
.cv__list { margin-top: 9mm; padding-top: 5mm; border-top: .3mm solid rgb(255 255 255 / .35); font-size: 9pt; letter-spacing: .04em; color: rgb(255 255 255 / .85); }
.cv .bar { position: absolute; left: 0; right: 0; bottom: 0; height: 4mm; }

.in { padding: 18mm 16mm 0; }
.in__top { display: flex; justify-content: space-between; align-items: center; }
.in__top img { width: 40mm; }
.in__top span { font-size: 7.5pt; letter-spacing: .14em; text-transform: uppercase; color: var(--muted); }
.in__grid { display: grid; grid-template-columns: 1fr 62mm; gap: 14mm; margin-top: 20mm; }
.in__h { margin-top: 4mm; font-family: 'Crimson', serif; font-weight: 400; font-size: 30pt; line-height: 1.04; color: var(--green-deep); }
.in__p { margin-top: 6mm; font-size: 9.6pt; line-height: 1.65; }
.in__p + .in__p { margin-top: 3mm; }
.toc { margin-top: 4mm; border-top: .35mm solid var(--green-deep); }
.toc li { display: flex; align-items: baseline; gap: 3mm; padding: 2.4mm 0; border-bottom: .25mm solid var(--line-soft); list-style: none; font-size: 9pt; }
.toc li em { font-style: normal; font-size: 7pt; color: var(--amber); font-weight: 500; letter-spacing: .08em; }
.toc li span { flex: 1; }
.toc li b { font-weight: 400; color: var(--muted); font-variant-numeric: tabular-nums; }
.range { margin-top: 16mm; }
.range__grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 6mm 5mm; margin-top: 5mm; }
.range__item img { width: 100%; height: 30mm; object-fit: cover; }
.range__item p { margin-top: 2.4mm; font-family: 'Crimson', serif; font-size: 12.5pt; font-weight: 600; line-height: 1.15; color: var(--green-deep); }
.range__item small { display: block; font-size: 7.4pt; color: var(--muted); }
.range__item small i { font-family: 'Crimson', serif; font-size: 8.6pt; }

.mt__hero { position: relative; height: 112mm; overflow: hidden; background: #1d2b28; }
.mt__shade { position: absolute; inset: 0; background: linear-gradient(180deg, rgb(2 30 27 / .45) 0%, rgb(2 30 27 / 0) 28%, rgb(2 30 27 / 0) 55%, rgb(2 30 27 / .7) 100%); }
.mt__run { position: absolute; top: 12mm; left: 16mm; font-size: 7pt; letter-spacing: .16em; text-transform: uppercase; color: rgb(255 255 255 / .85); }
.mt__fam { position: absolute; top: 10.5mm; right: 16mm; padding: 1mm 3.4mm; border: .3mm solid rgb(255 255 255 / .7); border-radius: 10mm; font-size: 7.4pt; letter-spacing: .08em; color: #fff; }
.mt__idx { position: absolute; left: 14.5mm; bottom: 4mm; font-family: 'Crimson', serif; font-size: 64pt; line-height: 1; color: #fff; }
.mt__idx small { font-size: 14pt; color: var(--cream); }
.mt .bar { height: 1.6mm; }
.mt__body { padding: 9mm 16mm 0; }
.mt__head { display: flex; justify-content: space-between; align-items: flex-end; gap: 10mm; padding-bottom: 6mm; border-bottom: .3mm solid var(--line); }
.mt__name { font-family: 'Crimson', serif; font-weight: 400; font-size: 34pt; line-height: 1; color: var(--green-deep); }
.mt__latin { margin-top: 2mm; font-size: 13pt; color: var(--sage); }
.mt__odour { max-width: 72mm; text-align: right; }
.mt__odour .eyebrow { margin-bottom: 2mm; }
.mt__odour .chips { justify-content: flex-end; }
.mt__cols { display: grid; grid-template-columns: 1fr 66mm; gap: 11mm; margin-top: 7mm; }
.mt__note { font-size: 9.6pt; line-height: 1.65; }
.mt__note::first-letter { float: left; margin: .6mm 1.6mm 0 0; font-family: 'Crimson', serif; font-size: 30pt; line-height: .8; color: var(--amber); }
.mt__cols .h-sec { margin-top: 7mm; }
.mt__cols > div:last-child .h-sec:first-child { margin-top: 0; }
.mt__link { position: absolute; left: 16mm; right: 16mm; bottom: 20mm; display: flex; justify-content: space-between; align-items: center; padding: 3.6mm 5mm; background: var(--tint); color: var(--ink); text-decoration: none; font-size: 8pt; }
.mt__link b { font-weight: 500; color: var(--green-deep); }
.mt__link span:last-child { color: var(--green); }

.or { padding: 18mm 16mm 0; }
.or__h { margin-top: 4mm; font-family: 'Crimson', serif; font-weight: 400; font-size: 30pt; line-height: 1.04; color: var(--green-deep); }
.steps { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0 6mm; margin-top: 9mm; }
.steps li { list-style: none; padding: 4mm 0 5mm; border-top: .3mm solid var(--line); }
.steps li em { font-family: 'Crimson', serif; font-style: normal; font-size: 20pt; line-height: 1; color: var(--amber); }
.steps li b { display: block; margin-top: 2mm; font-weight: 500; font-size: 9.4pt; color: var(--green-deep); }
.steps li p { margin-top: 1.4mm; font-size: 8.2pt; line-height: 1.5; color: var(--muted); }
.or__supply { margin-top: 9mm; }
.or__supply .tbl td:first-child { font-weight: 500; }
.or__cta { position: absolute; left: 16mm; right: 16mm; bottom: 22mm; display: flex; justify-content: space-between; align-items: center; padding: 7mm 8mm; background: var(--green-deep); color: #fff; }
.or__cta p { font-family: 'Crimson', serif; font-size: 17pt; line-height: 1.15; }
.or__cta p small { display: block; margin-top: 1mm; font-family: 'Rubik', sans-serif; font-size: 8pt; color: rgb(255 255 255 / .75); }
.or__cta a { padding: 2.6mm 5mm; border: .3mm solid var(--gold); border-radius: 2mm; color: #fff; text-decoration: none; font-size: 9pt; letter-spacing: .02em; }

.bk { background: var(--green-deep); color: #fff; }
.bk__mid { position: absolute; top: 96mm; left: 0; right: 0; text-align: center; }
.bk__mid img { width: 74mm; margin: 0 auto; }
.bk__mid p { margin-top: 10mm; font-family: 'Crimson', serif; font-style: italic; font-size: 14pt; color: var(--cream); }
.bk__info { position: absolute; left: 18mm; right: 18mm; bottom: 26mm; display: flex; justify-content: space-between; align-items: flex-end; padding-top: 6mm; border-top: .3mm solid rgb(255 255 255 / .3); font-size: 8.4pt; }
.bk__info a { color: #fff; text-decoration: none; }
.bk__info span { display: block; font-size: 6.8pt; letter-spacing: .14em; text-transform: uppercase; color: var(--gold); margin-bottom: 1.2mm; }
.bk__legal { max-width: 80mm; text-align: right; font-size: 6.8pt; line-height: 1.5; color: rgb(255 255 255 / .6); }
.bk .bar { position: absolute; left: 0; right: 0; bottom: 0; height: 4mm; }
`;

/**
 * @param {{ materials: any[], steps: {n:string,title:string,body:string}[], img: (m:any)=>string, cover: string, assets: {lockup:string, lockupDark:string} }} o
 */
export function catalogHtml(o) {
  const { materials: ms, steps, img, assets } = o;
  const total = ms.length + 4;
  const foot = (n) =>
    `<footer class="foot"><span><b>Adhiloka</b> · Ingredients Catalog ${EDITION}</span><span>${pad(n)} / ${pad(total)}</span></footer>`;

  // DATA: pembuka katalog — lorem sampai naskah halaman Ingredients disetujui.
  const intro = [lorem('cat-intro-1', 46), lorem('cat-intro-2', 38)];

  const cover = `
<section class="page cv">
  <img class="cover-img" src="${o.cover}" alt="">
  <div class="cv__shade"></div>
  <img class="cv__lockup" src="${assets.lockupDark}" alt="Adhiloka">
  <p class="cv__ed">Edition<b>${EDITION}</b></p>
  <div class="cv__text">
    <p class="eyebrow">Ingredients Catalog</p>
    <h1 class="cv__title">Natural aromatic<br>materials from<br>Indonesia</h1>
    <p class="cv__list">${ms.map((m) => esc(m.name)).join('&ensp;·&ensp;')}</p>
  </div>
  <div class="bar"></div>
</section>`;

  const toc = [
    ...ms.map((m, i) => [pad(i + 1), m.name, i + 3]),
    ['—', 'Ordering & Documents', ms.length + 3],
  ];
  const contents = `
<section class="page">
  <div class="in">
    <div class="in__top"><img src="${assets.lockup}" alt="Adhiloka"><span>Ingredients Catalog · ${EDITION}</span></div>
    <div class="in__grid">
      <div>
        <p class="eyebrow">Introduction</p>
        <h2 class="in__h">Six natural materials, grown and processed in Indonesia.</h2>
        ${intro.map((p) => `<p class="in__p">${esc(p)}</p>`).join('')}
      </div>
      <div>
        <p class="eyebrow">Contents</p>
        <ul class="toc">${toc.map(([n, t, p]) => `<li><em>${n}</em><span>${esc(t)}</span><b>${pad(p)}</b></li>`).join('')}</ul>
      </div>
    </div>
    <div class="range">
      <p class="eyebrow">The range</p>
      <div class="range__grid">
        ${ms
          .map(
            (m, i) => `<div class="range__item"><img src="${img(m)}" alt=""><p>${esc(m.name)}</p><small>${pad(i + 1)} · ${esc(m.family)} · <i>${esc(m.latin)}</i></small></div>`,
          )
          .join('')}
      </div>
    </div>
  </div>
  ${foot(2)}
</section>`;

  const matPages = ms
    .map(
      (m, i) => `
<section class="page mt">
  <div class="mt__hero">
    <img class="cover-img" src="${img(m)}" alt="">
    <div class="mt__shade"></div>
    <span class="mt__run">Ingredients Catalog · ${EDITION}</span>
    <span class="mt__fam">${esc(m.family)}</span>
    <span class="mt__idx">${pad(i + 1)}<small> / ${pad(ms.length)}</small></span>
  </div>
  <div class="bar"></div>
  <div class="mt__body">
    <header class="mt__head">
      <div>
        <h2 class="mt__name">${esc(m.name)}</h2>
        <p class="latin mt__latin">${esc(m.latin)}</p>
      </div>
      <div class="mt__odour"><p class="eyebrow">Odour profile</p><div class="chips">${chips(m)}</div></div>
    </header>
    <div class="mt__cols">
      <div>
        <p class="mt__note">${esc(m.note)}</p>
        <h3 class="h-sec">Grades &amp; forms</h3>
        <table class="tbl">
          <thead><tr><th>Grade</th><th>Form</th><th>Typical use</th></tr></thead>
          <tbody>${m.grades.map((g) => `<tr><th>${esc(g.name)}</th><td>${esc(g.form)}</td><td>${esc(g.use)}</td></tr>`).join('')}</tbody>
        </table>
      </div>
      <div>
        <h3 class="h-sec">Profile</h3>
        ${facts([
          ['Origin', m.origin],
          ['Production', m.method],
          ['Harvest', m.harvest],
          ['Uses', m.uses],
        ])}
        <h3 class="h-sec">Key specification</h3>
        ${facts(m.spec.slice(0, 3).map((r) => [r.parameter, r.range]))}
      </div>
    </div>
  </div>
  <a class="mt__link" href="${pageUrl(m.slug)}"><span>Full specification &nbsp;<b>${docNo(m.slug)}</b></span><span>${shortUrl(pageUrl(m.slug))} →</span></a>
  ${foot(i + 3)}
</section>`,
    )
    .join('');

  const ordering = `
<section class="page">
  <div class="or">
    <p class="eyebrow">Ordering &amp; Documents</p>
    <h2 class="or__h">From enquiry to shipment</h2>
    <ul class="steps">${steps.map((s) => `<li><em>${esc(s.n)}</em><b>${esc(s.title)}</b><p>${esc(s.body)}</p></li>`).join('')}</ul>
    <div class="or__supply">
      <h3 class="h-sec">Supply at a glance</h3>
      <table class="tbl">
        <thead><tr><th>Material</th><th>Packaging</th><th>Minimum order</th><th>Lead time</th><th>Spec. sheet</th></tr></thead>
        <tbody>${ms
          .map(
            (m) => `<tr><td>${esc(m.name)}</td><td>${esc(m.ordering.packaging)}</td><td>${esc(m.ordering.moq)}</td><td>${esc(m.ordering.leadTime)}</td><td>${docNo(m.slug)}</td></tr>`,
          )
          .join('')}</tbody>
      </table>
    </div>
  </div>
  <div class="or__cta">
    <p>Samples, specifications and quotations<small>Tell us the material, grade and quantity you need.</small></p>
    <a href="mailto:info@adhiloka.com">info@adhiloka.com</a>
  </div>
  ${foot(ms.length + 3)}
</section>`;

  const back = `
<section class="page bk">
  <div class="bk__mid">
    <img src="${assets.lockupDark}" alt="Adhiloka">
    <p>Natural aromatic materials from Indonesia</p>
  </div>
  <div class="bk__info">
    <div><span>Enquiries</span><a href="mailto:info@adhiloka.com">info@adhiloka.com</a></div>
    <div><span>Online</span><a href="${SITE}/ingredients/catalog/">adhiloka.com/ingredients/catalog</a></div>
    <p class="bk__legal">© ${EDITION} Adhiloka Group. Values in this catalog are indicative. The Certificate of Analysis issued with each lot prevails.</p>
  </div>
  <div class="bar"></div>
</section>`;

  return doc(`Adhiloka · Ingredients Catalog ${EDITION}`, CATALOG_CSS, cover + contents + matPages + ordering + back);
}

/* ── Lembar spesifikasi produk ───────────────────────────────────────── */

const SPEC_CSS = `
.ps { padding: 0 16mm; }
.ps > .bar { margin: 0 -16mm; height: 2.2mm; }
.ps__top { display: flex; justify-content: space-between; align-items: center; padding: 9mm 0 6mm; border-bottom: .3mm solid var(--line); }
.ps__top img { width: 38mm; }
.ps__doc { text-align: right; font-size: 7.6pt; color: var(--muted); }
.ps__doc .eyebrow { margin-bottom: .8mm; }
.ps__doc b { font-weight: 500; color: var(--ink); }
.ps__draft { display: inline-block; margin-left: 1.6mm; padding: .2mm 2mm; border-radius: 10mm; background: #fbf1df; color: #8a5404; font-weight: 500; font-size: 6.8pt; letter-spacing: .08em; text-transform: uppercase; }
.ps__title { display: grid; grid-template-columns: 1fr 60mm; gap: 10mm; margin-top: 9mm; }
.ps__name { margin-top: 2.6mm; font-family: 'Crimson', serif; font-weight: 400; font-size: 36pt; line-height: 1; color: var(--green-deep); }
.ps__latin { margin-top: 1.8mm; font-size: 13pt; color: var(--sage); }
.ps__note { margin-top: 5mm; font-size: 9pt; line-height: 1.6; }
.ps__title .chips { margin-top: 5mm; }
.ps__img { position: relative; height: 66mm; overflow: hidden; }
.ps__img img { width: 100%; height: 100%; object-fit: cover; }
.ps__img span { position: absolute; left: 0; bottom: 0; padding: 1.2mm 3mm; background: rgb(255 255 255 / .92); font-size: 6.8pt; letter-spacing: .1em; text-transform: uppercase; color: var(--green-deep); }
.ps__sec { margin-top: 9mm; }
.ps__two { display: grid; grid-template-columns: 1fr 1fr; gap: 0 10mm; }
.ps__docs { display: grid; grid-template-columns: 1fr 1fr; gap: 0 10mm; }
.ps__docs li { display: flex; gap: 2.6mm; align-items: center; padding: 2.2mm 0; border-bottom: .25mm solid var(--line-soft); list-style: none; font-size: 8.4pt; }
.ps__docs svg { flex: none; color: var(--green-light); }
.ps__para { font-size: 8.6pt; line-height: 1.6; margin-bottom: 3mm; }
.ps__sign { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8mm; margin-top: 4mm; }
.ps__sign span { display: block; height: 13mm; border-bottom: .3mm solid var(--ink); }
.ps__sign p { margin-top: 1.6mm; font-size: 7.2pt; color: var(--muted); }
.ps__note-box { position: absolute; left: 16mm; right: 16mm; bottom: 21mm; display: grid; grid-template-columns: 1fr auto; gap: 8mm; align-items: center; padding: 5mm 6mm; background: var(--tint); font-size: 7.8pt; line-height: 1.55; }
.ps__note-box a { color: var(--green-deep); font-weight: 500; text-decoration: none; }
.ps__note-box div:last-child { text-align: right; }
`;

/**
 * @param {any} m bahan
 * @param {{ index:number, count:number, img:string, assets:{lockup:string} }} o
 */
export function specHtml(m, o) {
  const no = docNo(m.slug);
  const foot = (n) =>
    `<footer class="foot"><span><b>${esc(m.name)}</b> · Product Specification ${no} · Rev. ${REVISION}</span><span>Page ${n} of 2</span></footer>`;
  const top = `
  <div class="bar"></div>
  <header class="ps__top">
    <img src="${o.assets.lockup}" alt="Adhiloka">
    <div class="ps__doc"><p class="eyebrow">Product Specification</p><b>${no}</b> · Rev. ${REVISION} · ${ISSUED}<span class="ps__draft">Draft</span></div>
  </header>`;

  const p1 = `
<section class="page ps">
  ${top}
  <div class="ps__title">
    <div>
      <p class="eyebrow">${esc(m.family)} · Ingredient ${pad(o.index + 1)} of ${pad(o.count)}</p>
      <h1 class="ps__name">${esc(m.name)}</h1>
      <p class="latin ps__latin">${esc(m.latin)}</p>
      <p class="ps__note">${esc(m.note)}</p>
      <div class="chips">${chips(m)}</div>
    </div>
    <figure class="ps__img"><img src="${o.img}" alt=""><span>${esc(m.family)}</span></figure>
  </div>

  <section class="ps__sec">
    <h2 class="h-sec"><i>01</i>Product identification</h2>
    <div class="ps__two">
      ${facts([
        ['Product name', m.name],
        ['Botanical name', m.latin, 'latin'],
        ['Family', m.family],
        ['Country of origin', 'Indonesia'],
      ])}
      ${facts([
        ['Origin', m.origin],
        ['Production', m.method],
        ['Harvest', m.harvest],
        ['Uses', m.uses],
      ])}
    </div>
  </section>

  <section class="ps__sec">
    <h2 class="h-sec"><i>02</i>Grades &amp; forms</h2>
    <table class="tbl">
      <thead><tr><th>Grade</th><th>Form</th><th>Key marker</th><th>Typical use</th></tr></thead>
      <tbody>${m.grades.map((g) => `<tr><th>${esc(g.name)}</th><td>${esc(g.form)}</td><td>${esc(g.marker)}</td><td>${esc(g.use)}</td></tr>`).join('')}</tbody>
    </table>
  </section>

  <section class="ps__sec">
    <h2 class="h-sec"><i>03</i>Specification</h2>
    <table class="tbl">
      <thead><tr><th style="width:30%">Parameter</th><th style="width:35%">Method</th><th>Typical value</th></tr></thead>
      <tbody>${m.spec.map((r) => `<tr><th>${esc(r.parameter)}</th><td>${esc(r.method)}</td><td>${esc(r.range)}</td></tr>`).join('')}</tbody>
    </table>
  </section>
  ${foot(1)}
</section>`;

  // DATA: penyimpanan, umur simpan, kode HS/CAS — lorem sampai formulir K/D terisi.
  const s = m.slug;
  const p2 = `
<section class="page ps">
  ${top}
  <section class="ps__sec">
    <h2 class="h-sec"><i>04</i>Documents supplied</h2>
    <ul class="ps__docs">${m.documents.map((d) => `<li>${CHECK}${esc(d)}</li>`).join('')}</ul>
  </section>

  <section class="ps__sec">
    <div class="ps__two">
      <div>
        <h2 class="h-sec"><i>05</i>Packaging &amp; ordering</h2>
        ${facts([
          ['Packaging', m.ordering.packaging],
          ['Minimum order', m.ordering.moq],
          ['Lead time', m.ordering.leadTime],
          ['Incoterms', m.ordering.incoterms],
        ])}
      </div>
      <div>
        <h2 class="h-sec"><i>06</i>Storage &amp; handling</h2>
        <p class="ps__para">${esc(lorem(`${s}-storage`, 24))}</p>
        ${facts([
          ['Storage', lorem(`${s}-st`, 5).slice(0, -1)],
          ['Shelf life', lorem(`${s}-sl`, 3).slice(0, -1)],
        ])}
      </div>
    </div>
  </section>

  <section class="ps__sec">
    <div class="ps__two">
      <div>
        <h2 class="h-sec"><i>07</i>Regulatory information</h2>
        ${facts([
          ['HS code', lorem(`${s}-hs`, 2).slice(0, -1)],
          ['CAS number', lorem(`${s}-cas`, 2).slice(0, -1)],
          ['IFRA', lorem(`${s}-ifra`, 4).slice(0, -1)],
          ['Allergens', lorem(`${s}-al`, 4).slice(0, -1)],
        ])}
      </div>
      <div>
        <h2 class="h-sec"><i>08</i>Revision history</h2>
        <table class="tbl">
          <thead><tr><th>Rev.</th><th>Date</th><th>Change</th></tr></thead>
          <tbody><tr><th>${REVISION}</th><td>${ISSUED}</td><td>First issue (draft)</td></tr></tbody>
        </table>
      </div>
    </div>
  </section>

  <section class="ps__sec">
    <h2 class="h-sec"><i>09</i>Approval</h2>
    <div class="ps__sign">
      <div><span></span><p>Prepared by · Quality control</p></div>
      <div><span></span><p>Checked by · Production</p></div>
      <div><span></span><p>Approved by · Management</p></div>
    </div>
  </section>

  <div class="ps__note-box">
    <div>Values in this specification are typical and given for guidance. The Certificate of Analysis issued with each lot is the binding document.</div>
    <div><a href="mailto:info@adhiloka.com">info@adhiloka.com</a><br><a href="${pageUrl(m.slug)}">${shortUrl(pageUrl(m.slug))}</a></div>
  </div>
  ${foot(2)}
</section>`;

  return doc(`${m.name} · Product Specification ${no}`, SPEC_CSS, p1 + p2);
}
