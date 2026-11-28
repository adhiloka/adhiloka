/** Teks alt dari keterangan isi foto (`shot`, `caption`, `alt`) atau, bila
 *  kosong, dari judul di dekatnya. Huruf pertama dikapitalkan.
 *  28 Nov 2026: audit SEO menemukan banyak gambar ber-alt kosong, termasuk
 *  thumbnail katalog; foto yang membawa isi kini selalu punya alt. */
export const altText = (...candidates: (string | undefined | null)[]) => {
  const t = (candidates.find((c) => c && c.trim()) ?? '').trim();
  return t ? t[0].toUpperCase() + t.slice(1) : '';
};
