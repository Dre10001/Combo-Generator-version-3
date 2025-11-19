import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // MUST match your repo name exactly
  base: '/Combo-Generator-v3/',
  build: {
    outDir: 'docs', // this is what GitHub Pages will serve
  },
})
