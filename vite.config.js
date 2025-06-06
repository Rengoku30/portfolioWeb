import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '',
  server: {
    historyApiFallback: true
  },
  build: {
    rollupOptions: {
      input: {
        main: 'src/main.jsx',
      },
    },
    copyPublicDir: true,
  },
})
