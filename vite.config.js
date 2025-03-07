import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { quasar, transformAssetUrls } from '@quasar/vite-plugin'

export default defineConfig({
  plugins: [
    vue({
      template: { transformAssetUrls }
    }),
    quasar({
      sassVariables: '@/styles/quasar-variables.scss'
    })
  ],
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `
          @import "@/styles/variables";
          @import "@/styles/mixins";
        `
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src'
    }
  }
})