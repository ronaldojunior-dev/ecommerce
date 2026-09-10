import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// GitHub Pages publica este projeto em /ecommerce/.
export default defineConfig({
  base: '/ecommerce/',
  plugins: [react()],
})
