<template>
  <MinButton :icon="localeIcon" color="auto" size="md" variant="soft" @click="switchLocale" />
</template>

<script lang="ts" setup>
const { $switchLocale, getLocale } = useI18n()
const switchLocale = () => {
  $switchLocale(getLocale() === 'en' ? 'fa' : 'en')
}
const localeIcon = computed(() => {
  return getLocale() === 'fa' ? 'mdi:alpha-e' : 'mdi:alpha-f'
})
</script>
