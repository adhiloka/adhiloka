// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// Ganti lewat variabel lingkungan saat deploy.
const site = process.env.SITE_URL || 'https://adhiloka.com';

export default defineConfig({
  site,
  trailingSlash: 'always',

  // Toolbar dev Astro menutupi kontrol slider hero di kanan bawah.
  devToolbar: { enabled: false },
  integrations: [sitemap()],

  // Tiga rute lama dari susunan menu sebelumnya. Tautan luar dan hasil telusur
  // masih menunjuk ke sini, jadi mereka diarahkan, bukan dibiarkan jadi 404.
  redirects: {
    '/our-story/': '/about/our-history/',
    '/fragrances/': '/perfumery/',
    '/raw-materials/': '/ingredients/catalog/',
  },
  build: { inlineStylesheets: 'auto' },

  // Font di-host sendiri dan di-preload lewat Fonts API; tidak ada permintaan
  // ke fonts.googleapis.com saat runtime.
  // Situs meniru adani.com (September 2026), yang memakai font "Adani" milik
  // mereka sendiri. Penggantinya Manrope: sans geometris gratis dengan rasa
  // yang paling dekat. Tulisan di lockup tetap Crimson Text, sudah jadi kurva.
  fonts: [
    {
      name: 'Manrope',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: [300, 400, 500, 600, 700],
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
