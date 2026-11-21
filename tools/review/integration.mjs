// Komentar review khusus lokal: klik satu titik di halaman, tulis catatan.
// Hanya aktif di `astro dev`. Saat build/preview integrasi ini tidak menyuntik
// apa pun, jadi tidak ada sisa di dist/ dan tidak ada yang terunggah.
import fs from 'node:fs';
import path from 'node:path';
import crypto from 'node:crypto';
import { fileURLToPath } from 'node:url';
import { readAll, writeAll } from './store.mjs';

const here = path.dirname(fileURLToPath(import.meta.url));
const BASE = '/__review/comments';

function send(res, code, body) {
  res.statusCode = code;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.setHeader('Cache-Control', 'no-store');
  res.end(JSON.stringify(body));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let raw = '';
    req.on('data', (c) => {
      raw += c;
      if (raw.length > 200_000) reject(new Error('too large'));
    });
    req.on('end', () => {
      try {
        resolve(raw ? JSON.parse(raw) : {});
      } catch (e) {
        reject(e);
      }
    });
    req.on('error', reject);
  });
}

// Semua kolom dari klien diterima kecuali yang diatur server, supaya kolom baru
// di client.js tidak perlu restart server.
function pick(src) {
  const { id, created, updated, ...rest } = src || {};
  return rest;
}

function middleware() {
  return async (req, res, next) => {
    if (!req.url || !req.url.startsWith(BASE)) return next();
    const id = decodeURIComponent(req.url.slice(BASE.length).split('?')[0].replace(/^\//, ''));
    try {
      const list = readAll();
      if (req.method === 'GET') return send(res, 200, list);
      if (req.method === 'POST' && !id) {
        const body = await readBody(req);
        if (!body.text || !String(body.text).trim()) return send(res, 400, { error: 'text kosong' });
        const item = { id: crypto.randomBytes(3).toString('hex'), created: new Date().toISOString(), ...pick(body) };
        list.push(item);
        writeAll(list);
        return send(res, 201, item);
      }
      const i = list.findIndex((c) => c.id === id);
      if (i < 0) return send(res, 404, { error: 'tidak ada' });
      if (req.method === 'PATCH') {
        const body = await readBody(req);
        list[i] = { ...list[i], ...pick(body), updated: new Date().toISOString() };
        writeAll(list);
        return send(res, 200, list[i]);
      }
      if (req.method === 'DELETE') {
        list.splice(i, 1);
        writeAll(list);
        return send(res, 200, { ok: true });
      }
      return send(res, 405, { error: 'method' });
    } catch (e) {
      return send(res, 500, { error: String(e.message || e) });
    }
  };
}

export default function reviewComments() {
  return {
    name: 'adhiloka-review-comments',
    hooks: {
      'astro:config:setup': ({ command, injectScript, updateConfig }) => {
        if (command !== 'dev') return;
        injectScript('page', fs.readFileSync(path.join(here, 'client.js'), 'utf8'));
        updateConfig({
          vite: {
            plugins: [
              {
                name: 'adhiloka-review-api',
                apply: 'serve',
                configureServer(server) {
                  server.middlewares.use(middleware());
                },
              },
            ],
          },
        });
      },
    },
  };
}
