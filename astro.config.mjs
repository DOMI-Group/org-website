import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  site: 'https://www.domi.or.id',
  vite: {
    plugins: [tailwindcss()],
  },
});