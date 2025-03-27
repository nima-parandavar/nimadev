// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-headlessui',
    'nuxt-i18n-micro',
    'nuxt-mongoose',
    '@pinia/nuxt',
    '@nuxt/icon'
  ],
  // i18n
  i18n: {

  },
  // mongo
  mongoose: {
    uri: process.env.MONGODB_URI
  },
  // plugins
  plugins: ['~/plugins/defaultValue.ts']
})