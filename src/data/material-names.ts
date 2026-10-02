import { MATERIALS } from './materials';

/* Nama tiap bahan per slug, untuk indeks pencarian dan formulir kontak
 * (?material=slug mengisi kolom pesan). Sejak katalog dipangkas ke enam bahan
 * inti (2 Okt 2026) nama di MATERIALS sudah asli, jadi peta ini diturunkan
 * dari sana, tidak lagi ditulis terpisah. */
export const MATERIAL_NAMES: Record<string, string> = Object.fromEntries(
  MATERIALS.map((m) => [m.slug, m.name]),
);
