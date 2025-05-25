import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/MANLIMPA/', // Nome exato do seu repositório
  build: {
    outDir: 'dist',
    assetsDir: 'assets'
  }
})