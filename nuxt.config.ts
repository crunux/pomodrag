// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: false },
  srcDir: 'src',
  modules: ['@nuxtjs/supabase', '@unocss/nuxt', '@vueuse/nuxt', "@nuxt/image", "@nuxtjs/color-mode"],
  app:{
    head: {
      link: [{ rel: 'icon', type: 'image/png', href: '/favicon.png' }],
    }
  },
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
  css: ['@unocss/reset/tailwind.css'],
  colorMode: {
    classSuffix: '',
    preference: 'system',
    fallback: 'light',
  },
  nitro: {
    devProxy: {
      host: '127.0.0.1',
    },
  },
})