<template>
  <div v-if="data" :dir="$getLocale() === 'en' ? 'ltr' : 'rtl'">
    <div class="h-[400px]">
      <header class="w-full mt-4 bg-bombay-300 h-64 rounded-3xl relative">
        <div
          class="absolute left-1/2 -translate-x-1/2 -bottom-40 md:-bottom-48 w-fit flex flex-col items-center gap-2"
        >
          <div class="w-28 h-28 md:w-40 md:h-40 rounded-full bg-blue-100">
            <NuxtImg
              src="/profile.jpeg"
              class="w-full rounded-full"
              alt="Nima Parandavar"
            />
          </div>
          <h1 class="text-xl md:text-3xl">{{ data.fullName }}</h1>
          <h2 class="text-md md:text-lg">{{ data.jobTitle }}</h2>
          <MinButton
            size="sm"
            icon="iconoir:cloud-download"
            variant="soft"
            download
            color="green"
            to="/api/resume/get-resume"
            target="_blank"
          />
        </div>
      </header>
    </div>
    <div class="mt-5 md:mt-16 flex flex-col gap-10 md:gap-24">
      <template v-for="(section, index) in data.sections" :key="index">
        <ResumeKeyValueSection
          v-if="section.type === 'keyValue'"
          :title="section.title"
          :alignment="section.alignment"
          :items="section.content.items"
        />
        <ResumeTextSection
          v-else-if="section.type === 'text'"
          :title="section.title"
          :alignment="section.alignment"
          :items="section.content.items"
        />
        <ResumeKeyRate
          v-else-if="section.type === 'keyRate'"
          :title="section.title"
          :items="section.content.items"
        />
      </template>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { getLocale } = useI18n();
const query = reactive({ lang: getLocale() });
const { data } = await useFetch("/api/resume", { query: query });

defineOgImageComponent("NuxtSeo", {
  title: "Nima Parandavar",
  description: "Resume",
  theme: "#008dda",
  colorMode: "dark",
  siteName: "nimadev.ir",
  siteLogo: "/blue.svg",
  icon: "i-lucide:square-dashed-bottom-code",
});

useHead({
  title: "رزومه نیما پرندآور",
  titleTemplate: "NimaDev %separator %s",
  meta: [
    {
      name: "description",
      content:
        "رزومه نیما پرندآور شامل سوابق کاری، مهارت‌های فنی، نمونه‌پروژه‌ها و تجربه برنامه‌نویسی با Django، Vue و Nuxt.",
    },
    {
      name: "keywords",
      content:
        "رزومه فرانت‌اند, رزومه بک‌اند, رزومه طراحی رابط کاربری, استخدام برنامه‌نویس, fullstack developer resume, Django CV, Vue developer resume, Nuxt JS resume, software engineer resume, frontend developer CV, backend developer portfolio, UI/UX designer resume, programming skills, developer experience, freelance developer profile",
    },
  ],
  link: [
    { rel: "alternate", href: "https://nimadev.ir/fa/resume", hreflang: "fa" },
    { rel: "alternate", href: "https://nimadev.ir/en/resume", hreflang: "en" },
  ],
});
</script>
