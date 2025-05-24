<template>
  <Toggle :class="style.root">
    <slot>
      <Icon v-if="icon" :name="icon" :class="style.icon" />
      <span v-if="label" :class="style.text">{{ label }}</span>
    </slot>
  </Toggle>
</template>

<script lang="ts" setup>
import { Toggle } from "radix-vue";
import { twMerge } from "tailwind-merge";
import { tv } from "tailwind-variants";

const props = defineProps({
  icon: { type: String, required: false },
  label: { type: String, required: false },
  state: Boolean,
});

const model = defineModel({ type: Boolean });

const config = tv({
  slots: {
    root: "flex items-center justify-center gap-1 hover:bg-bombay-100/80   p-1 rounded-md",
    icon: "text-2xl",
    text: "text-lg font-normal",
  },
  variants: {
    state: {
      true: {
        root: "bg-bombay-100",
      },
      false: {
        root: "bg-transparent hover:bg-bombay-100/80",
      },
    },
  },
});

const style = computed(() => {
  const cls = config({ state: props.state });
  return {
    root: twMerge(cls.root()),
    icon: cls.icon(),
    text: cls.text(),
  };
});
</script>
