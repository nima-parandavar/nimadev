<template>
  <ProgressRoot
    v-model="model"
    :class="style.root"
    style="transform: translateZ(0)"
    :max="max"
  >
    <ProgressIndicator
      :class="style.progress"
      :style="`transform: translateX(-${max - model}%)`"
    />
  </ProgressRoot>
</template>

<script lang="ts" setup>
import { ProgressIndicator, ProgressRoot } from "radix-vue";
import { twMerge } from "tailwind-merge";
import type { Color } from "~/types/theme";
import progressConfig from "~/ui/progress.config";

const { currentTheme } = storeToRefs(themeModeStore());

const model = defineModel({ type: Number, default: 1 });
const props = defineProps({
  max: { type: Number, default: 100 },
  color: {
    type: String as PropType<Color | "auto">,
    required: false,
    default: "auto",
  },
});

const style = computed(() => {
  const cls = progressConfig({
    color: props.color === "auto" ? currentTheme.value : props.color,
  });
  return {
    root: twMerge(cls.root(), cls.background()),
    progress: twMerge(cls.progress(), cls.progressColor()),
  };
});

onMounted(() => {
  const timer = setTimeout(() => (model.value = model.value), 500);
  return () => clearTimeout(timer);
});
</script>
