// https://nuxt.com/docs/api/configuration/nuxt-config
import RadixVueResolver from 'radix-vue/resolver'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  runtimeConfig: {
    unsplashAPI: process.env.UNSPlASH_API_TOKEN
  },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-i18n-micro',
    'nuxt-mongoose',
    '@pinia/nuxt',
    '@nuxt/icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    '@nuxt/fonts',
    'motion-v/nuxt',
    'pinia-plugin-persistedstate',
    'vue3-carousel-nuxt',
    '@vee-validate/nuxt',
    'nuxt-auth-utils',
  ],
  // i18n
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'fa', iso: 'fa-IR', dir: 'ltr' }
    ],
    defaultLocale: 'fa',
    translationDir: 'locales',
    meta: true,
    debug: process.env.NODE_ENV === 'production' ? false : true,
    autoDetectLanguage: true,
    strategy: 'prefix_and_default'
  },
  // mongo
  mongoose: {
    // uri: process.env.MONGODB_URI,
    options: {
      auth: {
        password: 'admin',
        username: 'admin'
      },
      authSource: 'admin',
      dbName: 'test'
    }
  },
  // cdd
  css: [
    '~/assets/scss/main.css'
  ],
  // color mode
  colorMode: {
    preference: 'light',
    fallback: 'light'
  },
  // fonts
  fonts: {
    families: [
      { name: 'Quicksand', provider: 'google' },
      { name: 'Roboto Flex', provider: 'google' },
    ],
  },
  // vite config
  vite: {
    plugins: [
      RadixVueResolver({
        prefix: 'rdx'
      })
    ]
  },
  components: {
    dirs: [
      {
        path: '~/components/elements',
        prefix: 'min'
      },
      '~/components'
    ]
  },
})