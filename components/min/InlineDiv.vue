<template>
  <div class="inline-flex gap-3 justify-start" :class="[style, reverse ? 'flex-row-reverse' : 'flex-row']">
    <slot />
  </div>
</template>

<script setup lang="ts">
const props = withDefaults(defineProps<{
  mode?: 'center' | 'start' | 'end',
  reverse?: boolean
}>(), { mode: 'center', reverse: false })

const style = computed(() => {
  switch (props.mode) {
    case 'center':
      return "items-center"
    case 'end':
      return "items-end"
    case 'start':
      return 'items-start'
  }
})
</script>