<template>
  <MinButton icon="i-lucide-languages" variant="soft" @click="$switchLocale(lang)" />
</template>

<script lang="ts" setup>
const { $switchLocale, $getLocale } = useNuxtApp()
const lang = computed(() => {
  return $getLocale() === 'en' ? 'fa' : 'en'
})
</script>
