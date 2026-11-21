// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // Off on purpose: squeezing the HTML deleted the space between a word and a link
  // that starts on the next line ("photographmaternity sessions"). Found 24 Oct 2026.
  compressHTML: false,
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
