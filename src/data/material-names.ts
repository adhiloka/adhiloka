/* Nama asli tiap bahan, per slug. Mega-menu Ingredients, indeks pencarian dan
 * formulir kontak membaca nama dari sini, bukan dari MATERIALS, karena naskah
 * katalog sedang berupa lorem ipsum sementara menu bar harus tetap asli.
 * Begitu naskah sungguhan kembali, MATERIALS[].name boleh disamakan lagi. */
export const MATERIAL_NAMES: Record<string, string> = {
  'benzoin-sumatra': 'Benzoin Sumatra',
  patchouli: 'Patchouli',
  'vetiver-java': 'Vetiver Java',
  cananga: 'Cananga',
  'ylang-ylang': 'Ylang-Ylang',
  'clove-leaf': 'Clove Leaf',
  'clove-bud': 'Clove Bud',
  'nutmeg-mace': 'Nutmeg & Mace',
  'cassia-kerinci': 'Cassia Kerinci',
  'citronella-java': 'Citronella Java',
  'massoia-bark': 'Massoia Bark',
  agarwood: 'Agarwood',
  cajeput: 'Cajeput',
  vanilla: 'Vanilla',
  tuberose: 'Tuberose',
  ginger: 'Ginger',
  'kaffir-lime': 'Kaffir Lime',
  'sandalwood-timor': 'Sandalwood Timor',
};
