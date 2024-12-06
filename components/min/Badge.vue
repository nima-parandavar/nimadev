<template>
  <small class="rounded-md px-2 py-1 text-xs" :class="[badgeStyle]">
    {{ label }}
  </small>
</template>


<script setup lang="ts">
import type { Color, Variant } from '~/interfaces/min';
const { theme } = storeToRefs(useThemeStore())

const props = withDefaults(defineProps<{
  label: number | string,
  color?: Color,
  variant?: Variant
}>(), { variant: 'solid' })

const badgeStyle = computed(() => {
  return props.color ? `badge-${props.color}-${props.variant}` : `badge-${theme.value}-${props.variant}`
})
</script>