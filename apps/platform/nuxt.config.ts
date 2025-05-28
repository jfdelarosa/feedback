import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts',
    'nuxt-shiki',
    "@vee-validate/nuxt",
    "@vueuse/nuxt",
    '@pinia/nuxt'
  ],
  vite: {
    plugins: [
      tailwindcss(),
    ],
  },
  css: ["~/assets/app.css"],
  fonts: {
    families: [
      { name: 'Lora Display', provider: 'google', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
      { name: 'Open Sans', provider: 'google', weights: [100, 200, 300, 400, 500, 600, 700, 800, 900] },
    ]
  },
  app: {
    head: {
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/logo.svg' }
      ],
      htmlAttrs: {
        'data-theme': 'caramellatte'
      },
      script: [
        {
          src: 'https://cdn.trypulsekit.com/widget.js'
        }
      ]
    }
  },
  nitro: {
    preset: "bun",
    routeRules: {
      "/api/**": {
        proxy: `${process.env.NUXT_PUBLIC_API_URL}/**`
      }
    },
  },
  vue: {
    compilerOptions: {
      isCustomElement: (tag) => tag.startsWith('pulsekit-')
    }
  },
  ssr: true,
  routeRules: {
    '/': {
      prerender: true,
      static: true
    },
    '/compare/**': {
      prerender: true,
      static: true
    },
    '/**': {
      ssr: false,
    }
  }
})