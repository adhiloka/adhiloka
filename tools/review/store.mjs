// Penyimpan komentar review lokal. Berkasnya di luar repo situs
// (website/review/comments.json di vault), jadi tidak ikut commit, build, atau unggah.
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
export const STORE = path.resolve(here, '../../../../review/comments.json');

export function readAll() {
  try {
    const data = JSON.parse(fs.readFileSync(STORE, 'utf8'));
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

export function writeAll(list) {
  fs.mkdirSync(path.dirname(STORE), { recursive: true });
  const tmp = STORE + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(list, null, 2) + '\n', 'utf8');
  fs.renameSync(tmp, STORE);
}
