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
    '@nuxt/image',
    '@vee-validate/nuxt',
    'nuxt-i18n-micro'
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
    '~/assets/scss/style.css',
    '~/assets/scss/buttonStyle.css',
    '~/assets/scss/dropdownStyle.css',
    '~/assets/scss/badgeStyle.css',
    '~/assets/scss/inputStyle.css',

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
  },
  // vee validate
  veeValidate: {
    autoImports: true,
    componentNames: {
      Form: 'veeForm'
    },
    typedSchemaPackage: 'yup'
  },
  // i18n config
  i18n: {
    locales: [
      { code: 'fa', iso: 'fa-IR', dir: 'rtl' },
      { code: 'en', iso: 'en-US', dir: 'ltr' }
    ],
    defaultLocale: 'en',
    translationDir: 'locales',
    meta: true,
    debug: true,
    autoDetectLanguage: true,
    strategy: 'prefix'
  }

})