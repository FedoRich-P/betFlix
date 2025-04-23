import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import path from 'path';
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      "@app": path.resolve(__dirname, './src/app'),
      "@common": path.resolve(__dirname, './src/common'),
      "@modules": path.resolve(__dirname, './src/modules'),
      "@users": path.resolve(__dirname, './src/users'),
      "@entities": path.resolve(__dirname, './src/entities'),
      "@features": path.resolve(__dirname, './src/features'),
      "@pages": path.resolve(__dirname, './src/pages'),
      "@shared": path.resolve(__dirname, './src/shared'),
      "@widgets": path.resolve(__dirname, './src/widgets'),
    },
  },
})
