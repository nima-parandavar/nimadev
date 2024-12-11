<template>
  <AvatarRoot as="div" class="bg-white rounded-full inline-flex items-center justify-center" :class="[sizeStyle]">
    <AvatarImage :src="src" :alt="label" class="w-auto h-auto rounded-full " />
    <AvatarFallback class="to-center">
      <span class="text-black">{{ towLetterCombination }}</span>
    </AvatarFallback>
    <!-- <NuxtImg v-else  :src="src" /> -->
  </AvatarRoot>
</template>

<script lang="ts" setup>
import type { Color, size } from '~/interfaces/min';

const props = withDefaults(defineProps<{
  label?: string,
  src: string,
  color?: Color,
  size?: size
}>(), { size: 'xs' })

const sizeStyle = computed(() => {
  switch (props.size) {
    case 'xs':
      return 'h-7 w-7 text-xs'
    case 'sm':
      return 'h-9 w-9 text-xs'
    case 'lg':
      return 'h-11 w-11 text-sm'
    case 'xl':
      return 'h-14 w-14 text-md'
  }
})

const towLetterCombination = computed(() => {
  let twoLetter = ''
  if (props.label) {
    props.label.split(" ").forEach(word => {
      twoLetter = twoLetter + word.at(0)?.toUpperCase()
    })
    return twoLetter.slice(0, 2)
  }
  return null
})
</script>
