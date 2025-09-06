<template>
  <div>
    <img
      v-if="colorMode.value == 'dark'"
      alt="NimaDev Logo"
      src="/white.webp"
      :width="`${width}px`"
    />
    <img
      v-else-if="colorMode.value == 'light'"
      alt="NimaDev Logo"
      src="/black.webp"
      :width="`${width}px`"
    />
  </div>
</template>

<script lang="ts" setup>
import { color } from "motion-v";

const { currentTheme } = storeToRefs(themeModeStore());
const colorMode = useColorMode();
defineProps({
  width: { type: Number, default: 10 },
});
</script>
