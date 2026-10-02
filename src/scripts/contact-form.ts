/** Formulir kontak: validasi di sisi klien, kirim lewat fetch ke penyedia
 *  formulir, dan keadaan "terkirim" seperti pada desain. Tanpa access key,
 *  tombolnya jatuh ke mailto alih-alih berpura-pura sudah mengirim. */

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
  const configured = form.dataset.configured === 'true';
  const endpoint = form.dataset.endpoint!;

  /* Tombol di katalog dan halaman bahan membawa ?material=slug dan
     ?kind=sample|specification|quotation: jenis permintaan dipilih dan kolom
     pesan diisi awal supaya pengguna tidak mengetik ulang. */
  const params = new URL(window.location.href).searchParams;
  const material = params.get('material');
  const KINDS: Record<string, string> = {
    sample: 'Sample request',
    specification: 'Specification & documents',
    quotation: 'Quotation',
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

    // Tanpa access key situs ini tidak bisa mengirim apa pun. Alih-alih
    // menampilkan keberhasilan palsu, kita serahkan ke klien email pengguna.
    if (!configured) {
      const body = [
        `Name: ${data.get('name')}`,
        `Company: ${data.get('company')}`,
        `Email: ${data.get('email')}`,
        `Enquiry: ${data.get('kind')}`,
        '',
        String(data.get('message') ?? ''),
      ].join('\n');
      window.location.href =
        `mailto:${MAIL_TO}?subject=${encodeURIComponent(String(data.get('kind') ?? 'Enquiry'))}` +
        `&body=${encodeURIComponent(body)}`;
      status.textContent = 'Opening your email client.';
      return;
    }

    submit.dataset.busy = 'true';
    submitLabel.textContent = 'Sending';

    try {
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: data,
      });
      const payload = (await res.json().catch(() => ({}))) as { success?: boolean; message?: string };

      if (res.ok && payload.success !== false) {
        showSent();
      } else {
        throw new Error(payload.message || `Request failed (${res.status})`);
      }
    } catch (err) {
      status.dataset.tone = 'error';
      status.textContent =
        `We could not send that — ${(err as Error).message}. ` +
        `Please try again, or email ${MAIL_TO} directly.`;
    } finally {
      submit.dataset.busy = 'false';
      submitLabel.textContent = 'Send enquiry';
    }
  });
}
