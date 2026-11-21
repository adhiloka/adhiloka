// Baca dan selesaikan komentar review lokal.
//   node tools/review/comments.mjs            daftar semua komentar
//   node tools/review/comments.mjs done a1b2c3 d4e5f6   hapus yang sudah diperbaiki
import { STORE, readAll, writeAll } from './store.mjs';

const [cmd, ...ids] = process.argv.slice(2);
const list = readAll();

if (cmd === 'done') {
  if (!ids.length) {
    console.error('Sebutkan id komentar yang sudah diperbaiki.');
    process.exit(1);
  }
  const keep = list.filter((c) => !ids.includes(c.id));
  const missing = ids.filter((id) => !list.some((c) => c.id === id));
  writeAll(keep);
  console.log(`Dihapus ${list.length - keep.length}, sisa ${keep.length}.`);
  if (missing.length) console.log('Tidak ditemukan:', missing.join(', '));
} else {
  if (!list.length) {
    console.log(`Tidak ada komentar (${STORE}).`);
    process.exit(0);
  }
  const byPage = new Map();
  for (const c of list) {
    if (!byPage.has(c.page)) byPage.set(c.page, []);
    byPage.get(c.page).push(c);
  }
  for (const [page, items] of byPage) {
    console.log(`\n## ${page}`);
    for (const c of items) {
      const x = c.context || {};
      console.log(`\n[${c.id}] (${c.device || '?'}, lebar ${c.vw || '?'}px) ${c.text}`);
      console.log(`  elemen : <${x.tag || '?'}> ${c.selector || ''}`);
      if (x.heading) console.log(`  bagian : ${x.heading}`);
      if (x.classes) console.log(`  kelas  : ${x.classes}`);
      if (x.snippet) console.log(`  teks   : ${x.snippet}`);
      if (x.img) console.log(`  foto   : ${x.img}`);
      if (x.href) console.log(`  tautan : ${x.href}`);
    }
  }
  console.log(`\nTotal ${list.length} komentar.`);
}
