import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import path from 'path'; // Модуль path должен работать после установки типов

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,  // можно изменить на нужный порт
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),  // алиас для более удобных путей
    },
  },
});
