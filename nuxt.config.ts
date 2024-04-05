// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/supabase', '@unocss/nuxt'],
  supabase: {
    url: process.env.SUPABASE_URL,
    key: process.env.SUPABASE_KEY,
    redirectOptions: {
      login: '/',
      callback: '/confirm',
      exclude: [
        '/login',
      ]
    }
  },
  css: ['@unocss/reset/tailwind-compat.css'],
  build: {
    transpile: ['primevue'],
  },
  srcDir: 'src'
})
