// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },
  srcDir: 'src',
  modules: [
    '@nuxtjs/supabase',
    '@unocss/nuxt',
    '@vueuse/nuxt',
    "@nuxt/image",
    "@nuxtjs/color-mode",
  ],
  runtimeConfig: {
    supabase: {
      url: process.env.SUPABASE_URL || "",
      key: process.env.SUPABASE_KEY,
    },
    public: {
      supabase: {
        redirectOptions: {
          login: '/',
          callback: '/confirm',
          exclude: [
            '/login',
          ]
        }
      }
    }
  },
  css: ['@unocss/reset/tailwind.css'],
  colorMode: {
    classSuffix: '',
    preference: 'dark',
    fallback: 'light',
  },
  nitro: {
    devProxy: {
      host: '127.0.0.1',
    },
  },
  "workspaceDir": "src",
})