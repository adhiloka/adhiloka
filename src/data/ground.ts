/* Irama warna pita Band di halaman dalam, meniru pita bergantian di
   valeindonesia.com: putih, emas, teal, biru langit, lalu ulang. Nama lama
   dipertahankan supaya pemanggil tidak perlu berubah: paper = putih, sunk = emas,
   plate = biru langit; teal dan tint baru. */
export type Ground = 'paper' | 'sunk' | 'plate' | 'tint' | 'teal';

export const GROUND_CYCLE: Ground[] = ['paper', 'sunk', 'teal', 'plate'];

/** Latar pita ke-i; `offset` melanjutkan urutan setelah blok lain (mis. kutipan). */
export const groundAt = (i: number, offset = 0): Ground => GROUND_CYCLE[(i + offset) % GROUND_CYCLE.length];

/** Latar blok penutup (Interlude): putih, kecuali bagian di atasnya sudah putih. */
export const bridgeAfter = (g: Ground): string => (g === 'paper' ? 'var(--tint-teal)' : 'var(--paper)');
