import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { crx } from '@crxjs/vite-plugin';
import manifest from './src/manifest.json';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crx({ manifest }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      '@/components': path.resolve(__dirname, './src/popup/components'),
      '@/hooks': path.resolve(__dirname, './src/popup/hooks'),
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
        popup: 'src/popup/index.html',
        content: 'src/content/index.ts',
        background: 'src/background/index.ts',
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // Keep content and background scripts in their original directories
          if (chunkInfo.name === 'content') {
            return 'src/content/index.js';
          }
          if (chunkInfo.name === 'background') {
            return 'src/background/index.js';
          }
          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
});
