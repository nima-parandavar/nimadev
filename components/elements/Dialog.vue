<template>
  <DialogRoot v-model="model">
    <DialogTrigger>
      <slot></slot>
    </DialogTrigger>
    <DialogPortal>
      <DialogOverlay :class="style.overlay" />
      <DialogContent :class="style.content">
        <slot name="content">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa quas provident magni amet omnis molestias,
            inventore veniam quibusdam, sit alias dolores a! Laboriosam maiores exercitationem ratione temporibus
            laborum, ab sapiente dolor, labore sed quis voluptatum tenetur atque rerum mollitia, in quia cum delectus
            velit veritatis officiis? Minima asperiores nulla suscipit dolore eaque nostrum qui magni praesentium
            placeat, ex deleniti illum.</p>
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
  side: { type: String as PropType<Side>, default: 'center' }
})

const style = computed(() => {
  const cls = dialogConfig({ side: props.side })

  return {
    overlay: cls.overlay(),
    content: twMerge(cls.padding(), cls.content(), cls.rounded())
  }
})
</script>
