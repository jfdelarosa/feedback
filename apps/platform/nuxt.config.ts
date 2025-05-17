import tailwindcss from '@tailwindcss/vite'

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true },
  modules: [
    '@nuxt/eslint',
    '@nuxt/fonts'
  ],
  ssr: false,
  vite: {
    plugins: [tailwindcss()],
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
      ]
    }
  },
  nitro: {
    preset: "bun",
  },
})