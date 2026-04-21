import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://emcasa.vet',
  vite: {
    build: {
      cssCodeSplit: false,
      assetsInlineLimit: 4096,
    }
  }
});