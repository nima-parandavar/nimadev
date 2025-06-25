<template>
  <div v-if="data" :dir="$getLocale() === 'en' ? 'ltr' : 'rtl'">
    <div class="h-[400px]">
      <header class="w-full mt-4 bg-bombay-300 h-64 rounded-3xl relative">
        <div
          class="absolute left-1/2 -translate-x-1/2 -bottom-28 md:-bottom-36 w-fit flex flex-col items-center gap-2"
        >
          <div class="w-28 h-28 md:w-40 md:h-40 rounded-full bg-blue-100"></div>
          <h1 class="text-xl md:text-3xl">{{ data.fullName }}</h1>
          <h2 class="text-md md:text-lg">{{ data.jobTitle }}</h2>
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
</script>
