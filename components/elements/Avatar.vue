<script setup lang="ts">
import { AvatarImage, AvatarRoot, AvatarFallback } from 'radix-vue'
import { twMerge } from 'tailwind-merge';
import avatarConfig from '~/ui/avatar.config';

defineProps({
  src: { type: String, required: true },
  label: { type: String, required: false }
})

type ImageLoadingStatus = 'idle' | 'loading' | 'loaded' | 'error'
const status = ref<ImageLoadingStatus>('idle')
const setStatus = (imageLoadingStatus: ImageLoadingStatus) => {
  status.value = imageLoadingStatus
}

const { currentTheme } = storeToRefs(themeModeStore())
const style = computed(() => {
  // @ts-expect-error
  const cls = avatarConfig({ color: currentTheme.value })

  return {
    base: twMerge(cls.base(), cls.rounded()),
    fallback: cls.fallback()
  }
})

</script>

<template>
  <AvatarRoot :class="style.base">
    <AvatarImage :src="src" @loading-status-change="setStatus" :class="style.base" />
    <p :class="style.fallback">
      <AvatarFallback v-if="status === 'loading' || status === 'error'" :delay-ms="1000">
        {{ label }}
      </AvatarFallback>
    </p>
  </AvatarRoot>
</template>