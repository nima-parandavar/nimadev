<template>
  <NuxtLayout :class="[`${currentTheme}-theme`]">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { currentTheme } = storeToRefs(themeModeStore())
</script>