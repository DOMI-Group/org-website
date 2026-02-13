<<<<<<< HEAD
// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  vite: {
    plugins: [tailwindcss()]
  }
});
=======
import { defineConfig } from 'astro/config';

export default defineConfig({
  output: 'static',
  site: 'https://domi-group.github.io/org-website',
  base: '/org-website/',
});

>>>>>>> 25ed4092c79c637b3bb2eb04b7c355db85f0f650
