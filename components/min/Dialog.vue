<template>
  <!-- TODO complete alert dialog -->
  <AlertDialogRoot :default-open="true">
    <AlertDialogTrigger>
      <slot></slot>
    </AlertDialogTrigger>
    <!-- content -->
    <AlertDialogPortal>
      <AlertDialogOverlay class="bg-[#22252a]/60 backdrop-blur fixed inset-1 " />
      <AlertDialogContent class="bg-white fixed z-[100] data-[state=open]:animate-contentShow p-10"
        :class="[contentSideStyle, dialogScreenSizeStyle]">
        <h1>This is dialog</h1>
      </AlertDialogContent>
    </AlertDialogPortal>
  </AlertDialogRoot>
</template>

<script lang="ts" setup>
import type { ScreenSize, Side } from '~/interfaces/min';

const props = withDefaults(defineProps<{
  side?: Side,
  dialogSize?: ScreenSize
}>(), { side: 'center', dialogSize: 'fit' })

const contentSideStyle = computed(() => {
  switch (props.side) {
    case 'center':
      return "top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2"
    case 'top':
      return "top-0 left-1/2 -translate-x-1/2"
    case 'bottom':
      return "bottom-0 left-1/2 -translate-x-1/2"
    case 'left':
      return "left-0 top-1/2 -translate-y-1/2"
    case 'right':
      return "right-0 top-1/2 -translate-y-1/2"
  }
})

const dialogScreenSizeStyle = computed(() => {
  if (props.dialogSize === 'fullscreen') {
    return 'h-screen w-screen'
  }
  else if (props.side === 'bottom' || props.side === 'top') {
    switch (props.dialogSize) {
      case 'fit':
        return "w-full max-w-xl"
      case 'wide':
        return 'w-screen'
    }
  }
  else if ((props.side === 'left' || props.side === 'right') && (props.dialogSize === 'fit' || props.dialogSize === 'wide')) {
    return "h-screen"

  } else if (props.side === 'center' && (props.dialogSize === 'fit' || props.dialogSize === 'wide')) {
    return 'w-full max-w-xl'
  }
})
</script>
