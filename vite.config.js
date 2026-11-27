import { defineConfig } from 'vite';
import tailwindcss from '@tailwindcss/vite';
import { resolve } from 'path';

export default defineConfig({
  plugins: [tailwindcss()],

  build: {
    rollupOptions: {
      input: {
        home: resolve(__dirname, 'index.html'),
        menu: resolve(__dirname, 'menu.html'),
        checkout: resolve(__dirname, 'checkout.html'),
        panel: resolve(__dirname, 'panel.html'),
      },
    },
  },
});