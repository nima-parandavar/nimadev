<script setup lang="ts">
import {
  ToastAction,
  ToastDescription,
  ToastProvider,
  ToastRoot,
  ToastTitle,
  ToastViewport,
} from "radix-vue";
import type { PropType } from "vue";
import toastConfig from "~/ui/toast.config";
import type { Position } from "~/types/base";
import { twMerge } from "tailwind-merge";

const model = defineModel({ type: Boolean, default: false });

const props = defineProps({
  side: { type: String as PropType<Position>, default: "S" },
  duration: { type: Number, default: 5000 },
});

const style = computed(() => {
  const cls = toastConfig({});
  return {
    root: twMerge(cls.root(), cls.rounded(), cls.shadow()),
  };
});

const swipeDirection = computed(() => {
  if (props.side === "NW" || props.side === "SW") return "right";
  else if (props.side === "NE" || props.side === "SE") return "left";
  else if (props.side === "N") return "up";
  else if (props.side === "S") return "down";
});
</script>

<template>
  <ToastProvider :swipe-direction="swipeDirection" :duration="duration">
    <slot></slot>

    <ToastRoot v-model:open="model" :class="style.root">
      <ToastTitle> Scheduled: Catch up </ToastTitle>
      <ToastDescription as-child>
        <time
          class="[grid-area:_description] m-0 text-slate11 text-[13px] leading-[1.3]"
        >
        </time>
      </ToastDescription>
      <ToastAction
        class="[grid-area:_action]"
        as-child
        alt-text="Goto schedule to undo"
      >
        <button
          class="inline-flex items-center justify-center rounded font-medium text-xs px-[10px] leading-[25px] h-[25px] bg-green2 text-green11 shadow-[inset_0_0_0_1px] shadow-green7 hover:shadow-[inset_0_0_0_1px] hover:shadow-green8 focus:shadow-[0_0_0_2px] focus:shadow-green8"
        >
          Undo
        </button>
      </ToastAction>
    </ToastRoot>
    <ToastViewport
      class="[--viewport-padding:_25px] fixed bottom-0 right-0 flex flex-col p-[var(--viewport-padding)] gap-[10px] w-[390px] max-w-[100vw] m-0 list-none z-[2147483647] outline-none"
    />
  </ToastProvider>
</template>
