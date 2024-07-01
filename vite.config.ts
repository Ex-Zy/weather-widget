import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "./src/styles/variables.scss";
          @import "./src/styles/mixins.scss";
        `,
      },
    },
  },
})
