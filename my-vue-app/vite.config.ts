import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path' // Necesitas importar 'path' de Node

// https://vite.dev/config/
export default defineConfig({
  base: '/Portfolio/',
  plugins: [vue()],
  resolve: {
    alias: {
      // Esto permite usar '@' para referirte a la carpeta 'src'
      '@': path.resolve(__dirname, './src'),
    },
  },
})