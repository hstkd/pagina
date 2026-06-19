import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Rutas relativas: funciona igual servido en la raíz (Vercel/Netlify)
  // o en un subdirectorio (GitHub Pages: /pagina/).
  base: './',
  plugins: [react()],
})
