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
    '@nuxt/fonts'
  ],
  // i18n
  i18n: {

  },
  // mongo
  mongoose: {
    uri: process.env.MONGODB_URI
  },
  // plugins
  plugins: ['~/plugins/defaultValue.ts'],
  // cdd
  css: [
    '~/assets/css/main.css'
  ],
  // color mode
  colorMode: {
    preference: 'system',
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
  }
})