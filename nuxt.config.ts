import { definePerson } from "nuxt-schema-org/schema";

// https://nuxt.com/docs/api/configuration/nuxt-config
import RadixVueResolver from "radix-vue/resolver";

export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-i18n-micro",
    "@pinia/nuxt",
    "@nuxt/icon",
    "@nuxtjs/color-mode",
    "@nuxtjs/html-validator",
    "motion-v/nuxt",
    "pinia-plugin-persistedstate",
    "vue3-carousel-nuxt",
    "@nuxt/image",
    "@vee-validate/nuxt",
    "@nuxtjs/seo",
    "@nuxthub/core",
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
  // fonts: {
  //   families: [
  //     { name: "Quicksand", provider: "google" },
  //     { name: "Roboto Flex", provider: "google" },
  //   ],
  // },
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
      name: "نیما پرندآور،",
      givenName: "نیما",
      familyName: "پرندآور،",
      jobTitle: "توسعه دهنده فول‌استک",
      email: "nimaparandavar2@gmail.com",
      image: "/profile.jpeg",
      description:
        "نیما پرندآور، برنامه‌نویس فول‌استک با مهارت در جنگو، Vue/Nuxt و طراحی رابط کاربری. نمونه‌کارها، رزومه و مطالب آموزشی او درباره توسعه وب را ببینید.",
      url: "https://nimadev.ir",
      sameAs: [
        "https://github.com/nima-parandavar",
        "https://www.linkedin.com/in/nima-parandavar/",
      ],
      worksFor: {
        "@type": "Organization",
        name: "پراتا تکنولوژی",
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
      author: "Nima Parandavar",
    },
  },
  app: {
    head: {
      link: [
        { rel: "icon", href: "/favicon.ico", sizes: "any" },
        { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
        { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
        { rel: "manifest", href: "/site.webmanifest" },
      ],
      meta: [{ name: "theme-color", content: "#45474B" }],
      script: [
        {
          defer: true,
          src: "https://static.cloudflareinsights.com/beacon.min.js",
          "data-cf-beacon": '{"token": "2c7a17fcf62d4d19bcb903379f0f9dd4"}',
        },
      ],
    },
  },
  htmlValidator: {
    enabled: false,
  },
  nitro: {
    experimental: {
      openAPI: true,
    },
  },
  // hub: {
  //   analytics: true,
  // },
});
