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
  vite: {
    plugins: [tailwindcss()],
  },
});
