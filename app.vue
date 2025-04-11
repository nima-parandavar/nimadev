<template>
  <NuxtLayout :class="[`${currentTheme}`]">
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { currentTheme } = storeToRefs(themeModeStore())
</script>