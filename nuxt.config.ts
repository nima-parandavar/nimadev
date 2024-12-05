// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: true,
  // modules
  modules: [
    '@pinia/nuxt',
    'pinia-plugin-persistedstate/nuxt',
    '@nuxtjs/tailwindcss',
    '@nuxt/icon',
    '@nuxt/fonts',
    '@nuxtjs/color-mode',
    '@nuxtjs/html-validator',
    'radix-vue/nuxt',
    '@vueuse/nuxt',
  ],
  // fonts
  fonts: {
    provider: 'google',
    families: [
      { name: 'Quicksand' },
      { name: "Roboto Flex" }
    ]
  },
  // css
  css: [
    '~/assets/scss/style.css'
  ],
  // i18n
  // plugins
  plugins: [
    { mode: 'client', src: '~/plugins/initialValue.ts' }
  ],
  // icon
  icon: {
    size: '16',
    collections: ['lucide', 'line-md'],
  }

})