import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';
import path from 'path';
import { fileURLToPath } from 'url';

// Emulate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/StaticWebsites_React_KitchenSink/',
  resolve: {
    alias: {
      '~': path.resolve(__dirname, './'), // Alias '~' points to the 'src' folder
    },
  },
})