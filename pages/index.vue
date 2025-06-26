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
const { t } = useI18n();

defineOgImage({
  renderer: "satori",
  url: "https://nimadev.ir",
});

useHead({
  title: "Home",
  titleTemplate: "NimaDev %separator %s",
});
</script>
