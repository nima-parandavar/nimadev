<template>
  <section>
    <h2 class="text-4xl md:text-6xl" :class="{ 'text-right': dir === 'rtl' }">{{ $t('section2.title') }}</h2>
    <div class="mt-5 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 mx-auto gap-3">
      <CardsPost class="mx-auto" />
      <CardsPost class="mx-auto" />
      <CardsPost class="mx-auto" />
      <CardsPost class="mx-auto lg:col-start-2 lg:col-end-3 xl:col-start-auto xl:col-end-auto" />
    </div>
  </section>
</template>

<script setup lang="ts">
const dir = useLanguageDir()
</script>