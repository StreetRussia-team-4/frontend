import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath, URL } from 'url';

const isProd = process.env.NODE_ENV === 'production';

const BASE_DEV_PATH = '/';
const BASE_PROD_PATH = '/frontend/';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: isProd ? BASE_PROD_PATH : BASE_DEV_PATH,
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@modules',
        replacement: fileURLToPath(new URL('./src/modules', import.meta.url)),
      },
      {
        find: '@components',
        replacement: fileURLToPath(
          new URL('./src/components', import.meta.url)
        ),
      },
      {
        find: '@assets',
        replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
      },
      {
        find: '@icon',
        replacement: fileURLToPath(
          new URL('./src/assets/icon', import.meta.url)
        ),
      },
      {
        find: '@video',
        replacement: fileURLToPath(
          new URL('./src/assets/video', import.meta.url)
        ),
      },
      {
        find: '@image',
        replacement: fileURLToPath(
          new URL('./src/assets/image', import.meta.url)
        ),
      },
    ],
  },
});
