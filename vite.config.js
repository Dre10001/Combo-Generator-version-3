import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // MUST match the path part of your URL
  base: '/Combo-Generator-version-3/',
  build: {
    outDir: 'docs',
  },
})
