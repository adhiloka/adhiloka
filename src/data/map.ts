/* Peta "Our Presence" dirender saat build: garis negara Natural Earth 1:50m
 * (paket world-atlas, domain publik) diproyeksikan dengan d3-geo menjadi
 * path SVG biasa. Peramban tidak memuat pustaka peta apa pun. Hanya negara
 * yang menyentuh bingkai Indonesia yang ikut, supaya HTML-nya tetap kecil. */

import { readFileSync } from 'node:fs';
import { createRequire } from 'node:module';
import { geoMercator, geoPath, geoBounds } from 'd3-geo';
import { feature } from 'topojson-client';
import type { FeatureCollection, Geometry } from 'geojson';
import type { Topology } from 'topojson-specification';

const require = createRequire(import.meta.url);
const topo = JSON.parse(
  readFileSync(require.resolve('world-atlas/countries-50m.json'), 'utf8'),
) as Topology;

/** Kode negara ISO numerik Indonesia di world-atlas. */
const INDONESIA = '360';

export const MAP_W = 1000;
export const MAP_H = 420;

export type PresenceMap = {
  land: string;
  home: string;
  project: (lonLat: [number, number]) => [number, number] | null;
};

let cache: PresenceMap | undefined;

export function presenceMap(): PresenceMap {
  if (cache) return cache;
  const countries = feature(topo, topo.objects.countries) as unknown as FeatureCollection<Geometry, { name: string }>;
  const home = countries.features.find((f) => String(f.id) === INDONESIA)!;
  const projection = geoMercator().fitExtent(
    [
      [20, 20],
      [MAP_W - 20, MAP_H - 20],
    ],
    home,
  );
  // Geometri di luar bingkai dipotong d3, bukan hanya disembunyikan SVG.
  projection.clipExtent([
    [0, 0],
    [MAP_W, MAP_H],
  ]);
  const path = geoPath(projection).digits(1);

  // Batas tampilan dalam derajat, untuk memilih negara tetangga yang terlihat.
  const [[x0, y0], [x1, y1]] = [projection.invert!([0, 0])!, projection.invert!([MAP_W, MAP_H])!];
  const [west, east, north, south] = [x0, x1, y0, y1];
  const visible = countries.features.filter((f) => {
    if (f === home) return false;
    const [[w, s], [e, n]] = geoBounds(f);
    return e >= west && w <= east && n >= south && s <= north;
  });

  cache = {
    land: visible.map((f) => path(f) ?? '').join(''),
    home: path(home) ?? '',
    project: ([lon, lat]) => {
      if (lon < west || lon > east || lat > north || lat < south) return null;
      const p = projection([lon, lat]);
      return p ? [Math.round(p[0] * 10) / 10, Math.round(p[1] * 10) / 10] : null;
    },
  };
  return cache;
}
