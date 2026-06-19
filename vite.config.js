import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Project page served from https://emp-eter.github.io/szabadteri-mozi/
  base: '/szabadteri-mozi/',
  plugins: [react()],
})
