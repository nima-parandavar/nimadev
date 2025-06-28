<template>
  <div>
    <NuxtImg
      v-if="currentTheme === 'blue'"
      alt="NimaDev Logo"
      src="/blue.svg"
      :width="`${width}px`"
    />
    <NuxtImg
      v-else-if="currentTheme === 'red'"
      alt="NimaDev Logo"
      src="/red.svg"
      :width="`${width}px`"
    />
    <NuxtImg
      v-else-if="currentTheme === 'green'"
      alt="NimaDev Logo"
      src="/green.svg"
      :width="`${width}px`"
    />
    <NuxtImg
      v-else-if="currentTheme === 'purple'"
      alt="NimaDev Logo"
      src="/purple.svg"
      :width="`${width}px`"
    />
    <NuxtImg
      v-else-if="currentTheme === 'orange'"
      alt="NimaDev Logo"
      src="/orange.svg"
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
