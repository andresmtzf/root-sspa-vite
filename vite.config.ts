import react from '@vitejs/plugin-react'
//import * as path from 'path'
import { defineConfig } from 'vite'
import vitePluginSingleSpa from 'vite-plugin-single-spa'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginSingleSpa({ type: 'root', imo: '3.1.0' })],
  resolve: {
    alias: {
      '~bootstrap': path.resolve(__dirname, 'node_modules/bootstrap'),
    },
  },
})
