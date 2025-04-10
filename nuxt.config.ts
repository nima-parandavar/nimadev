// https://nuxt.com/docs/api/configuration/nuxt-config
import RadixVueResolver from 'radix-vue/resolver'

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
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
    'pinia-plugin-persistedstate'
  ],
  // i18n
  i18n: {
    locales: [
      { code: 'en', iso: 'en-US', dir: 'ltr' },
      { code: 'fa', iso: 'fa-IR', dir: 'rtl' }
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
    debug: process.env.NODE_ENV === 'production' ? false : true,
    autoDetectLanguage: true,
    strategy: 'prefix_and_default'
  },
  // mongo
  mongoose: {
    uri: process.env.MONGODB_URI
  },
  // plugins
  plugins: ['~/plugins/defaultValue.ts'],
  // cdd
  css: [
    '~/assets/scss/main.scss'
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
      { name: 'Roboto Flex', provider: 'google' }
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
  }
})