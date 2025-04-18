<template>
  <div class="w-full h-full bg-[#EB8317] rounded-3xl flex items-center justify-between flex-col gap-7 p-5 lg:p-10">
    <Icon name="i-akar-icons:book" class="text-5xl lg:text-6xl self-start text-white" />
    <div class="text-white text-xl font-normal  p-4 bg-white/20 rounded-xl" :class="{ 'text-right': dir === 'rtl' }">
      <p>{{ $t('socialCard.resume1') }}</p>
      <br>
      <p>{{ $t('socialCard.resume2') }}</p>
    </div>

    <NuxtLink to="#" class="inline-flex items-center justify-center gap-3 text-[#EB8317] self-end">
      <span class="bg-white px-6 lg:px-12 py-2 rounded-full inline-flex items-center justify-center gap-1">{{
        $t('socialCard.downloadCV') }}</span>
      <span class="bg-white rounded-[50%] p-3 w-10 h-10 inline-flex items-center justify-center">
        <Icon name="i-lucide:download" />
      </span>
    </NuxtLink>
  </div>
</template>

<script setup lang="ts">
const dir = useLanguageDir()
</script>