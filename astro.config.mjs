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
  integrations: [sitemap({ filter: (page) => !page.includes('/under-construction/') })],

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
  // Situs meniru adani.com. Font "Adani" mereka sebenarnya Rubrik (Miles
  // Newlyn) yang diganti nama, berlisensi khusus Adani Group, jadi berkasnya
  // tidak boleh dipakai. Penggantinya Rubik, versi variabel: dari puluhan font
  // Google yang diuji piksel lawan glyph Rubrik, Rubik paling dekat (g satu
  // tingkat, sudut kotak-bulat, lebar sama). Rubik sedikit lebih gelap, jadi
  // bobotnya digeser di CSS: 400→360, 500→440, 600→530, 700→670 (hasil
  // pencocokan tinta), plus tracking +0,02em.
  fonts: [
    {
      name: 'Rubik',
      cssVariable: '--font-sans',
      provider: fontProviders.google(),
      weights: ['300 700'],
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
