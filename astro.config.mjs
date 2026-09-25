// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti lewat variabel lingkungan saat deploy.
const site = process.env.SITE_URL || 'https://adhiloka.com';

export default defineConfig({
  site,
  trailingSlash: 'always',
  integrations: [sitemap()],

  // Tiga rute lama dari susunan menu sebelumnya. Tautan luar dan hasil telusur
  // masih menunjuk ke sini, jadi mereka diarahkan, bukan dibiarkan jadi 404.
  redirects: {
    '/our-story/': '/about/our-history/',
    '/fragrances/': '/perfumery/',
    '/raw-materials/': '/ingredients/catalog/',
  },
  build: { inlineStylesheets: 'auto' },

  // Font di-host sendiri dan di-preload lewat Fonts API. Tidak ada permintaan
  // ke fonts.googleapis.com saat runtime: satu request eksternal hilang,
  // dan fallback metrics menghilangkan layout shift.
  // Satu keluarga, Mukta 400/500/600, untuk judul dan isi (September 2026).
  // Situs meniru valeindonesia.com, yang memakai Vale Sans; font itu milik
  // Vale, jadi dipilih sans humanis gratis yang paling dekat rasanya.
  fonts: [
    {
      name: 'Mukta',
      cssVariable: '--font-display-family',
      provider: fontProviders.google(),
      weights: [400, 500, 600],
      styles: ['normal'],
      subsets: ['latin'],
      display: 'swap',
      fallbacks: ['system-ui', 'sans-serif'],
    },
  ],

  image: {
    responsiveStyles: true,
  },

  vite: {
    build: { cssMinify: 'lightningcss' },
  },
});
