import { NAV, type NavLink } from './site';

/* Isi mega-menu. Sejak 13 Nov 2026 (pemilik) tidak ada sub-menu, kepala
 * kolom atau label grup: panel hanya baris judul (menuju halaman induk) lalu
 * daftar tautan datar dari `NAV[].panel.links` di site.ts, satu-satunya
 * sumber isi menu. SiteHeader menyusunnya 3 ke bawah, sisanya ke kolom kanan.
 * Produk tidak pernah masuk menu; daftar lengkapnya hanya di katalog. */

/** Satu panel mega-menu: baris judul panel lalu tautan datar. */
export type MenuPanel = { heading: NavLink; links: NavLink[] };

export const MEGA: Record<string, MenuPanel> = Object.fromEntries(
  NAV.filter((item) => item.panel?.links.length).map((item) => [
    item.href,
    { heading: { label: item.label, href: item.href }, links: item.panel!.links },
  ]),
);

export const MENU = NAV.map((item) => ({ ...item, mega: MEGA[item.href] }));
