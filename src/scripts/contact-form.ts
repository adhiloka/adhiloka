/** Formulir kontak: validasi di sisi klien, kirim lewat fetch, lalu keadaan
 *  "terkirim". Penyedia (28 Nov 2026): Netlify Forms (POST url-encoded ke "/",
 *  dicatat Netlify dan diteruskan ke email), atau Web3Forms bila access key
 *  diisi. Gagal kirim = pesan galat dengan alamat email, bukan sukses palsu.
 *  Event "Form Submit" dikirim ke analytics (scripts/analytics.ts). */

const MAIL_TO = 'info@adhiloka.com';

type Rule = { test: (v: string) => boolean; message: string };

const RULES: Record<string, Rule> = {
  name: {
    test: (v) => v.trim().length >= 2,
    message: 'Please give us a name we can reply to.',
  },
  email: {
    test: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim()),
    message: 'That email address does not look complete.',
  },
  message: {
    test: (v) => v.trim().length >= 12,
    message: 'A sentence or two about the brief helps us answer properly.',
  },
};

export function initContactForm() {
  const form = document.querySelector<HTMLFormElement>('[data-form]');
  if (!form) return;

  const sent = document.querySelector<HTMLElement>('[data-sent]');
  const status = form.querySelector<HTMLElement>('[data-status]')!;
  const submit = form.querySelector<HTMLButtonElement>('[data-submit]')!;
  const submitLabel = form.querySelector<HTMLElement>('[data-submit-label]')!;
  const provider = form.dataset.provider ?? 'netlify';
  const endpoint = form.dataset.endpoint!;

  /* Tombol di katalog dan halaman bahan membawa ?material=slug dan
     ?kind=sample|specification|quotation: jenis permintaan dipilih dan kolom
     pesan diisi awal supaya pengguna tidak mengetik ulang. Tombol "Start a
     brief" di Perfumery membawa ?kind=bespoke. */
  const params = new URL(window.location.href).searchParams;
  // Situs grup (26 Nov 2026): ?product= dari halaman produk seafood/plastik,
  // ?business=naturals|seafood|packaging memilih lini di kolom Business.
  const material = params.get('material') ?? params.get('product');
  const business = params.get('business');
  const businessEl = form.querySelector<HTMLSelectElement>('[data-business]');
  const bizOpt = businessEl && business ? [...businessEl.options].find((o) => o.dataset.key === business) : undefined;
  if (businessEl && bizOpt) businessEl.value = bizOpt.value;
  const KINDS: Record<string, string> = {
    sample: 'Sample request',
    specification: 'Specification & documents',
    quotation: 'Quotation',
    bespoke: 'Bespoke fragrance',
    supplier: 'Supplier registration',
    partnership: 'Partnership',
    careers: 'Careers',
  };
  const kind = KINDS[params.get('kind') ?? ''] ?? (material ? KINDS.sample : null);
  const messageEl = form.querySelector<HTMLTextAreaElement>('[name="message"]')!;
  const kindEl = form.querySelector<HTMLSelectElement>('[data-kind]');
  if (kind && kindEl) kindEl.value = kind;
  if (material && !messageEl.value) {
    let names: Record<string, string> = {};
    try {
      names = JSON.parse(form.dataset.materials || '{}');
    } catch {
      names = {};
    }
    const readable =
      names[material] ?? material.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());
    messageEl.value = `${kind}: ${readable}. `;
  }

  const setError = (field: string, message: string) => {
    const input = form.querySelector<HTMLElement>(`[name="${field}"]`);
    const slot = form.querySelector<HTMLElement>(`[data-error-for="${field}"]`);
    if (slot) slot.textContent = message;
    input?.setAttribute('aria-invalid', message ? 'true' : 'false');
  };

  const validate = (): boolean => {
    let firstBad: HTMLElement | null = null;

    for (const [field, rule] of Object.entries(RULES)) {
      const input = form.querySelector<HTMLInputElement | HTMLTextAreaElement>(`[name="${field}"]`);
      if (!input) continue;
      const ok = rule.test(input.value);
      setError(field, ok ? '' : rule.message);
      if (!ok && !firstBad) firstBad = input;
    }

    firstBad?.focus();
    return !firstBad;
  };

  // Kesalahan dibersihkan begitu pengguna mulai memperbaiki kolomnya.
  Object.keys(RULES).forEach((field) => {
    form
      .querySelector(`[name="${field}"]`)
      ?.addEventListener('input', () => setError(field, ''));
  });

  // Tinggi halaman berubah: posisi pemicu gerak gulir (scroll-fx.ts) dihitung ulang.
  const refresh = () => window.dispatchEvent(new CustomEvent('fx:refresh'));

  const showSent = () => {
    form.hidden = true;
    if (sent) sent.hidden = false;
    refresh();
    sent?.querySelector<HTMLElement>('[data-reset]')?.focus();
  };

  document.querySelector('[data-reset]')?.addEventListener('click', () => {
    form.reset();
    form.hidden = false;
    if (sent) sent.hidden = true;
    refresh();
    status.textContent = '';
    status.removeAttribute('data-tone');
    form.querySelector<HTMLInputElement>('[name="name"]')?.focus();
  });

  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    status.textContent = '';
    status.removeAttribute('data-tone');

    if (!validate()) return;

    const data = new FormData(form);
    submit.dataset.busy = 'true';
    submitLabel.textContent = 'Sending';

    try {
      let ok = false;
      let message = '';
      if (provider === 'web3forms') {
        const res = await fetch(endpoint, { method: 'POST', headers: { Accept: 'application/json' }, body: data });
        const payload = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };
        ok = res.ok && payload.success !== false;
        message = payload.message || `Request failed (${res.status})`;
      } else {
        const body = new URLSearchParams();
        data.forEach((v, k) => body.append(k, String(v)));
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
          body: body.toString(),
        });
        ok = res.ok;
        message = `Request failed (${res.status})`;
      }
      if (!ok) throw new Error(message);
      document.dispatchEvent(
        new CustomEvent('form:sent', { detail: { kind: String(data.get('kind') ?? ''), business: String(data.get('business') || 'Adhiloka Group') } }),
      );
      showSent();
    } catch (err) {
      status.dataset.tone = 'error';
      status.innerHTML = '';
      status.append(
        `We could not send that (${(err as Error).message}). Please try again, or email `,
        Object.assign(document.createElement('a'), { href: `mailto:${MAIL_TO}`, textContent: MAIL_TO }),
        '.',
      );
    } finally {
      submit.dataset.busy = 'false';
      submitLabel.textContent = 'Send enquiry';
    }
  });
}
