<template>

  <div :class="style.base">
    <h3 :class="style.header">
      <Icon name="lucide:form-input" :class="style.icon" />
      <span :class="style.title">Fill and Send Your Request</span>
    </h3>
    <p class="opacity-70">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic eveniet similique eum optio
      rerum quibusdam.</p>
  </div>
</template>

<script lang="ts" setup>
import { tv } from 'tailwind-variants';
const { currentTheme } = storeToRefs(themeModeStore())

const componentConfig = tv({
  slots: {
    base: 'w-full p-5 rounded-3xl border',
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
</script>
