<template>
  <div :class="style.base">
    <h3 :class="style.header">
      <Icon :name="icon" :class="style.icon" />
      <span :class="style.title">{{ title }}</span>
    </h3>
    <p class="opacity-80 mt-3">{{ text }}</p>
  </div>
</template>

<script lang="ts" setup>
import { tv } from 'tailwind-variants';
const { currentTheme } = storeToRefs(themeModeStore())

const componentConfig = tv({
  slots: {
    base: 'w-full p-5 rounded-3xl border dark:border-bombay-400/20',
    icon: 'text-4xl',
    title: 'text-2xl',
    header: 'inline-flex items-center justify-start gap-3'
  },
  variants: {
    color: {
      red: {
        header: 'text-cabaret-400 dark:text-cabaret-300'
      },
      orange: {
        header: 'text-pumpkin-400 dark:text-pumpkin-300'
      },
      green: {
        header: 'text-keppel-400 dark:text-keppel-300'
      },
      blue: {
        header: 'text-curious-blue-400 dark:text-curious-blue-300'
      },
      purple: {
        header: 'text-vivid-violet-400 dark:text-vivid-violet-300'
      },

    },
  }
})

const style = computed(() => {
  const cls = componentConfig({ color: currentTheme.value })
  return {
    base: cls.base(),
    icon: cls.icon(),
    title: cls.title(),
    header: cls.header()
  }
})

defineProps({
  title: { type: String, required: true },
  text: { type: String, required: true },
  icon: { type: String, required: true },
})
</script>
