/* Event analytics (Plausible, tanpa cookie; 28 Nov 2026, pemilik: "track event:
 * submit form, download katalog, klik WA, request sample per produk").
 * Skrip Plausible dimuat di BaseLayout hanya di build produksi; di sini cuma
 * pendengar klik dan event halaman yang meneruskan ke window.plausible
 * (antrean dibuat lebih dulu, jadi event tidak hilang sebelum skripnya siap).
 *
 * Nama event (dipakai sebagai Goal di dasbor Plausible):
 *   Form Submit        formulir kontak terkirim     props: kind, business
 *   Catalog Download   klik tautan PDF di /downloads/ props: file
 *   WhatsApp Click     klik tautan wa.me / whatsapp   props: page
 *   Sample Request     klik tombol ?kind=sample       props: product, page
 *   Quotation Request  klik tombol ?kind=quotation    props: product, page
 *   Compare            tabel perbandingan dibuka      props: items */

type Props = Record<string, string>;
type PlausibleFn = ((event: string, opts?: { props?: Props }) => void) & { q?: unknown[] };

declare global {
  interface Window {
    plausible?: PlausibleFn;
  }
}

const track = (event: string, props?: Props) => {
  const fn: PlausibleFn =
    window.plausible ??
    (window.plausible = Object.assign(
      function (...args: unknown[]) {
        (window.plausible!.q = window.plausible!.q || []).push(args);
      } as PlausibleFn,
      {},
    ));
  fn(event, props ? { props } : undefined);
};

export function initAnalytics() {
  document.addEventListener(
    'click',
    (e) => {
      const a = (e.target as HTMLElement | null)?.closest?.('a');
      if (!a) return;
      const href = a.getAttribute('href') || '';
      let url: URL;
      try {
        url = new URL(href, location.href);
      } catch {
        return;
      }
      const page = location.pathname;
      if (/\/downloads\/.+\.pdf$/i.test(url.pathname)) {
        track('Catalog Download', { file: url.pathname.split('/').pop() || url.pathname });
      } else if (/(^|\.)wa\.me$|whatsapp\.com$/i.test(url.hostname)) {
        track('WhatsApp Click', { page });
      } else if (url.origin === location.origin && url.pathname.startsWith('/contact/')) {
        const kind = url.searchParams.get('kind');
        const product = url.searchParams.get('material') || url.searchParams.get('product') || url.searchParams.get('business') || 'general';
        if (kind === 'sample') track('Sample Request', { product, page });
        else if (kind === 'quotation') track('Quotation Request', { product, page });
      }
    },
    { capture: true },
  );

  document.addEventListener('form:sent', (e) => {
    const d = (e as CustomEvent<Props>).detail || {};
    track('Form Submit', { kind: d.kind || '', business: d.business || '' });
  });
  document.addEventListener('compare:open', (e) => {
    const d = (e as CustomEvent<{ items: string[] }>).detail;
    track('Compare', { items: (d?.items || []).join(' | ') });
  });
}
