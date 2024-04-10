// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  srcDir: 'src',
  modules: ['@nuxtjs/supabase', '@unocss/nuxt', '@vueuse/nuxt', "@nuxt/image"],
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
})