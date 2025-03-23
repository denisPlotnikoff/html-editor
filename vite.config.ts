import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'node:path';
// https://vite.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/components'),
      '@helpers': path.resolve(__dirname, 'src/helpers'),
      '@vars': path.resolve(__dirname, 'src/vars'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@src': path.resolve(__dirname, 'src'),
    },
  },
  plugins: [react()],
})
