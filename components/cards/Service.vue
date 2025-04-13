<template>
  <div :class="style.base" @mouseenter="isContentHover = true" @mouseleave="isContentHover = false">
    <h3 :class="style.title">
      <Icon :name="icon" :class="style.icon" />
      <span>{{ title }}</span>
    </h3>
    <p :class="style.body">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe adipisci libero ipsam assumenda recusandae esse
      earum in iure, ducimus, dolorem aliquam reiciendis rem consequuntur
    </p>
    <MinButton size="md" variant="soft" :color="isContentHover ? 'auto' : 'black'"
      icon="lucide:square-arrow-out-up-right" class="self-end" />

  </div>
</template>

<script lang="ts" setup>
import { tv } from 'tailwind-variants';
import { twMerge } from 'tailwind-merge';

const isContentHover = ref(false)

const { currentTheme } = storeToRefs(themeModeStore())

defineProps({
  icon: String,
  title: String
})

const componentStyle = tv({
  slots: {
    base: 'h-[25rem] border transition-colors text-black dark:text-white border-black/10 dark:border-white/10 flex flex-col justify-between items-start gap-5',
    rounded: 'rounded-3xl',
    padding: 'p-6 md:p-10',
    icon: 'text-4xl md:text-6xl',
    title: 'inline-flex items-center justify-center gap-3 text-xl md:text-3xl font-normal',
    body: 'text-black/80 mt-5 dark:text-white/50'
  },
  variants: {
    color: {
      red: {
        base: 'hover:border-cabaret-200 dark:hover:border-cabaret-400 hover:bg-cabaret-100 dark:hover:bg-cabaret-400/10 hover:text-cabaret-400'
      },
      blue: {
        base: 'hover:border-curious-blue-200 dark:hover:border-curious-blue-400 hover:bg-curious-blue-100 dark:hover:bg-curious-blue-400/10 hover:text-curious-blue-400'
      },
      purple: {
        base: 'hover:border-vivid-violet-100 dark:over:border-vivid-violet-300 hover:bg-vivid-violet-100 dark:hover:bg-vivid-violet-400/10 hover:text-vivid-violet-400'
      },
      green: {
        base: 'hover:border-keppel-200 dark:hover:border-keppel-400 hover:bg-keppel-100 dark:hover:bg-keppel-400/10 hover:text-keppel-400'
      },
      orange: {
        base: 'hover:border-pumpkin-200 dark:hover:border-pumpkin-400 hover:bg-pumpkin-100 dark:hover:bg-pumpkin-400/10 hover:text-pumpkin-400'
      }
    }
  }
})

const style = computed(() => {
  const cls = componentStyle({ color: currentTheme.value })
  return {
    base: twMerge(cls.base(), cls.rounded(), cls.padding()),
    icon: cls.icon(),
    title: cls.title(),
    body: cls.body()
  }
})

</script>
