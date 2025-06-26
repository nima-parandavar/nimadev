<template>
  <MinButton
    :size="'sm'"
    variant="soft"
    :icon="colorModeIcon"
    @click="switchColorMode"
  />
</template>

<script lang="ts" setup>
const colorMode = useColorMode();
const colorModeIcon = computed(() => {
  switch (colorMode.value) {
    case "dark":
      return "i-lucide:sun";
    case "light":
      return "i-lucide:moon";
    default:
      return "i-lucide:sun-moon";
  }
});

const switchColorMode = () => {
  if (colorMode.value === "light") {
    colorMode.preference = "dark";
  } else {
    colorMode.preference = "light";
  }
};
</script>
