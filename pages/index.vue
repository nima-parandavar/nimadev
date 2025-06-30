<template>
  <div class="flex flex-col gap-10 lg:gap-28 font-">
    <PagesHomeHeader />
    <PagesHomeSection1 />
    <PagesHomeSection2 />
    <PagesHomeSection3 />
    <PagesHomeSection4 />
    <PagesHomeSection5 />
  </div>
</template>

<script setup lang="ts">
defineOgImageComponent("NuxtSeo", {
  title: "Nima Parandavar",
  description: "Fullstack developer and UI/UX designer",
  theme: "#008dda",
  colorMode: "dark",
  siteName: "nimadev.ir",
  siteLogo: "/blue.svg",
  icon: "i-lucide:square-dashed-bottom-code",
});

useHead({
  title: "صفحه اصلی",
  titleTemplate: "NimaDev %separator %s",

  meta: [
    {
      name: "description",
      content:
        "نیما پرندآور، برنامه‌نویس فول‌استک با مهارت در جنگو، Vue/Nuxt و طراحی رابط کاربری. نمونه‌کارها، رزومه و مطالب آموزشی او درباره توسعه وب را ببینید.",
    },
    {
      name: "keywords",
      content:
        "نیما پرندآور, برنامه‌نویس فول‌استک, توسعه‌دهنده وب, طراحی رابط کاربری, طراحی تجربه کاربری, برنامه‌نویس جنگو, توسعه‌دهنده Vue, توسعه‌دهنده Nuxt, طراحی UI/UX, نمونه‌کار برنامه‌نویسی, سایت شخصی برنامه‌نویس, رزومه آنلاین, Iranian developer, fullstack developer, Django developer, Vue developer, Nuxt developer, UI/UX designer, web developer, frontend developer, backend developer, personal portfolio, software engineer, full stack web developer, freelance developer",
    },
  ],
  link: [
    { rel: "alternate", href: "https://nimadev.ir/fa", hreflang: "fa" },
    { rel: "alternate", href: "https://nimadev.ir/en", hreflang: "en" },
  ],
});
</script>
