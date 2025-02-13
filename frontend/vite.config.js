import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  optimizeDeps: {
    include: ["lucide-react"],
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:5050",
        changeOrigin: true,
        secure: false
      }
    }
  },
})
