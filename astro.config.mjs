// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://www.boudoirphotographyauckland.co.nz',
  integrations: [
    sitemap({
      filter: (page) => page !== 'https://www.boudoirphotographyauckland.co.nz/contact-thanks/',
    }),
  ],
  redirects: {
    '/about': '/about-belinda-dunne',
    '/faq': '/faqs',
    '/gallery': '/boudoir-photoshoot-gallery-auckland',
    '/contact': '/contact-boudoir-photography-auckland',
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
