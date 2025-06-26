import { definePerson } from "nuxt-schema-org/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
import RadixVueResolver from "radix-vue/resolver";

export default defineNuxtConfig({
  compatibilityDate: "2024-11-01",
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-i18n-micro",
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/html-validator",
    "@nuxt/fonts",
    "motion-v/nuxt",
    "pinia-plugin-persistedstate",
    "vue3-carousel-nuxt",
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@nuxtjs/seo",
  ],
  // i18n
  i18n: {
    locales: [
      { code: "en", iso: "en-US", dir: "ltr" },
      { code: "fa", iso: "fa-IR", dir: "ltr" },
    ],
    defaultLocale: "fa",
    translationDir: "locales",
    meta: true,
    debug: process.env.NODE_ENV === "production" ? false : true,
    autoDetectLanguage: true,
    strategy: "prefix_and_default",
  },
  // cdd
  css: ["~/assets/scss/main.css"],
  // color mode
  colorMode: {
    preference: "light",
    fallback: "light",
  },
  // fonts
  fonts: {
    families: [
      { name: "Quicksand", provider: "google" },
      { name: "Roboto Flex", provider: "google" },
    ],
  },
  // vite config
  vite: {
    plugins: [
      RadixVueResolver({
        prefix: "rdx",
      }),
    ],
  },
  components: {
    dirs: [
      {
        path: "~/components/elements",
        prefix: "min",
      },
      "~/components",
    ],
  },
  schemaOrg: {
    identity: definePerson({
      name: "Nima Parandavar",
      givenName: "Nima",
      familyName: "Parandavar",
      jobTitle: "Fullstack developer",
      email: "nimaparandavar2@gmail.com",
      image: "/profile.jpeg",
      description: "Fullstack developer and UI/UX designer",
      url: "https://nimadev.ir",
      sameAs: [
        "https://github.com/nima-parandavar",
        "https://www.linkedin.com/in/nima-parandavar/",
      ],
      worksFor: {
        "@type": "Organization",
        name: "Prata Technology",
        url: "https://prata-tech.com",
      },
      workTranslation: [
        {
          "@id": "https://nimadev.ir/fa",
        },
        {
          "@id": "https://nimadev.ir/en",
        },
      ],
    }),
  },
  seo: {
    meta: {
      titleTemplate: "NimaDev %separator %s",
      description: "Fullstack developer and UI/UX designer",
    },
  },
});
