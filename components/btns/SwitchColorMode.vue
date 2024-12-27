<template>
  <MinButton :icon="isDark === 'dark' ? 'i-lucide-moon' : 'i-lucide-sun-medium'" variant="soft"
    @click="colorMode.preference = isDark" />
</template>

<script lang="ts" setup>
const colorMode = useColorMode()
const isDark = computed(() => {
  return colorMode.value === 'dark' ? 'light' : 'dark'
})
</script>
