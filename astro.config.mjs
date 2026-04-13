// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://imaginative-yeot-668b88.netlify.app', // <- вот сюда
  vite: {
    plugins: [tailwindcss()]
  }
});