import type { ImageKey } from './images';

/* Wilayah Ingredients Map (13 Nov 2026), meniru Raw Materials Map Robertet:
 * satu titik per pulau/wilayah penghasil, kartu berisi bahan dari wilayah
 * itu. Pengecualian aturan "asal ditulis Indonesia saja" khusus untuk peta
 * ini (keputusan pemilik). Kartu tidak memuat tahun, luas, jumlah petani
 * atau klaim kemitraan. Koordinat = titik tengah wilayah, bukan lokasi
 * pemasok. Bahan per wilayah diatur di materials.ts (`regions`). */

export type Region = 'Sumatra' | 'Java' | 'Kalimantan' | 'Sulawesi' | 'Maluku' | 'Papua';

export type RegionInfo = {
  name: Region;
  /** [bujur, lintang] */
  coords: [number, number];
  /** Satu baris pendek; tidak menjelaskan. */
  note: string;
  image: ImageKey;
  /** Isi foto sebenarnya, untuk alt. */
  shot: string;
};

/* Urutan barat ke timur. */
export const REGIONS: RegionInfo[] = [
  {
    name: 'Sumatra',
    coords: [101.4, -0.4],
    note: 'Resins, bark and leaves from forest and highland.',
    image: 'toba-hills',
    shot: 'green hills on the shore of a large lake',
  },
  {
    name: 'Java',
    coords: [110.2, -7.3],
    note: 'Roots and spices from volcanic soil.',
    image: 'tea-hills-mist',
    shot: 'tea gardens on misty hills',
  },
  {
    name: 'Kalimantan',
    coords: [114.0, 0.3],
    note: 'Balsams and pepper from the lowland forest.',
    image: 'jungle-waterfall',
    shot: 'dense rainforest with a small waterfall',
  },
  {
    name: 'Sulawesi',
    coords: [120.3, -2.2],
    note: 'Leaves and buds from the hills.',
    image: 'plantation-rows',
    shot: 'rows of a hillside plantation',
  },
  {
    name: 'Maluku',
    coords: [129.2, -3.4],
    note: 'The spice islands.',
    image: 'nutmeg-on-tree',
    shot: 'nutmeg fruit on the tree',
  },
  {
    name: 'Papua',
    coords: [138.0, -4.2],
    note: 'Aromatic bark from the eastern forests.',
    image: 'misty-palm-forest',
    shot: 'misty forest with tall palms',
  },
];
