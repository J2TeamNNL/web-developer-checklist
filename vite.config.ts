import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.json';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/app/components'),
      '@/hooks': path.resolve(__dirname, './src/app/hooks'),
      '@/shared': path.resolve(__dirname, './src/shared'),
      '@/types': path.resolve(__dirname, './src/shared/types'),
      '@/utils': path.resolve(__dirname, './src/shared/utils'),
      '@/constants': path.resolve(__dirname, './src/shared/constants'),
      '@/rules': path.resolve(__dirname, './src/shared/rules'),
    },
  },
  build: {
    rollupOptions: {
      input: {
        app: path.resolve(__dirname, 'index.html'),
      },
    },
  },
});
