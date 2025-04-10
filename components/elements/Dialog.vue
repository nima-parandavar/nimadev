<template>
  <DialogRoot v-model="model">
    <DialogTrigger>
      <slot></slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay :class="style.overlay" />
      <DialogContent :class="style.content">
        <slot name="content">

        </slot>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script lang="ts" setup>
import {
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
  DialogTitle,
  DialogTrigger,
} from 'radix-vue'
import type { Side } from '~/types/theme';
import dialogConfig from '~/ui/dialog.config';
import { twMerge } from 'tailwind-merge';

const model = defineModel()

const props = defineProps({
  side: { type: String as PropType<Exclude<Side, 'top'>>, default: 'center' }
})

const style = computed(() => {
  const cls = dialogConfig({ side: props.side })

  return {
    overlay: cls.overlay(),
    content: twMerge(cls.padding(), cls.content(), cls.rounded())
  }
})
</script>
