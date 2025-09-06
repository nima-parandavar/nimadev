<template>
  <div>
    <img
      v-if="currentTheme === 'blue'"
      alt="NimaDev Logo"
      src="/blue.webp"
      :width="`${width}px`"
    />
    <img
      v-else-if="currentTheme === 'red'"
      alt="NimaDev Logo"
      src="/red.webp"
      :width="`${width}px`"
    />
    <img
      v-else-if="currentTheme === 'green'"
      alt="NimaDev Logo"
      src="/green.webp"
      :width="`${width}px`"
    />
    <img
      v-else-if="currentTheme === 'purple'"
      alt="NimaDev Logo"
      src="/purple.webp"
      :width="`${width}px`"
    />
    <img
      v-else-if="currentTheme === 'orange'"
      alt="NimaDev Logo"
      src="/orange.webp"
      :width="`${width}px`"
    />
  </div>
</template>

<script lang="ts" setup>
const { currentTheme } = storeToRefs(themeModeStore());
defineProps({
  width: { type: Number, default: 10 },
});
</script>
