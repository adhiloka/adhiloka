/** Peta Our Presence (Presence.astro): pemilih wilayah menyaring daftar
 *  radio, radio memilih titik peta dan panel data lokasi, klik titik memilih
 *  radionya. Sama perilakunya dengan `choosState` / `city-radio` Adani. */

import { fadeIn } from './tabs';

export function initPresence() {
  document.querySelectorAll<HTMLElement>('[data-presence]:not([data-ready])').forEach((root) => {
    root.dataset.ready = '';
    const area = root.querySelector<HTMLSelectElement>('[data-area]')!;
    const radios = [...root.querySelectorAll<HTMLInputElement>('input[type="radio"]')];
    const pins = [...root.querySelectorAll<SVGGElement>('[data-pin-for]')];
    const panels = [...root.querySelectorAll<HTMLElement>('[data-site]')];

    const show = (id: string) => {
      panels.forEach((p) => (p.hidden = p.dataset.site !== id));
      pins.forEach((g) => g.classList.toggle('is-active', g.dataset.pinFor === id));
      fadeIn(panels.find((p) => !p.hidden));
      window.dispatchEvent(new CustomEvent('fx:refresh'));
    };

    radios.forEach((r) => r.addEventListener('change', () => r.checked && show(r.value)));
    pins.forEach((g) =>
      g.addEventListener('click', () => {
        const r = radios.find((x) => x.value === g.dataset.pinFor);
        if (!r) return;
        if (area.value && r.closest<HTMLElement>('[data-area-of]')?.dataset.areaOf !== area.value) {
          area.value = '';
          filter();
        }
        r.checked = true;
        show(r.value);
      }),
    );

    const filter = () => {
      const labels = radios.map((r) => r.closest<HTMLElement>('[data-area-of]')!);
      labels.forEach((l) => (l.hidden = !!area.value && l.dataset.areaOf !== area.value));
      // Lokasi terpilih tersaring keluar: pilih lokasi pertama yang tampil.
      const checked = radios.find((r) => r.checked);
      if (!checked || checked.closest<HTMLElement>('[hidden]')) {
        const first = radios.find((r) => !r.closest<HTMLElement>('[hidden]'));
        if (first) {
          first.checked = true;
          show(first.value);
        }
      }
      pins.forEach((g) => {
        const r = radios.find((x) => x.value === g.dataset.pinFor);
        g.style.opacity = r?.closest('[hidden]') ? '0.25' : '';
      });
    };
    area.addEventListener('change', filter);
  });
}
