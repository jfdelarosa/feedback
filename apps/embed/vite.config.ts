import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    vue({
      template: {
        compilerOptions: {
          // This ensures styles are properly scoped within shadow DOM
          isCustomElement: (tag) => tag.includes('pulse-kit')
        }
      },
      customElement: true, // Enable Vue custom element support
    }),
    vueDevTools(),
    tailwindcss()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
  define: {
    // Handle Node.js environment variables in browser context
    'process.env': '{}',
    // Prevent "global is not defined" errors in browser
    global: '{}',
  },
  build: {
    // Target browser environments only
    target: 'esnext',
    lib: {
      entry: 'src/entry.ts',
      name: 'PulseKit',
      formats: ['iife', 'es'],
      fileName: (format) => format === 'iife' ? 'widget.js' : 'widget.esm.js',
    },
    rollupOptions: {
      output: {
        inlineDynamicImports: true,
        // Remove the globals mapping for Vue since we're bundling it
      }
      // Remove external: ['vue'] to include Vue in the bundle
    }
  }
})
