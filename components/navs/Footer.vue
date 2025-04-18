<template>
  <footer :class="style.base">
    <div :class="style.trigger">
      <div class="inline-flex items-center justify-start gap-3">
        <div class="w-14 h-14 rounded-xl bg-black"></div>
        <h3 class="font-normal text-xl">NIMA DEV</h3>
      </div>
      <div class="inline-flex items-center justify-start">
        <MinButton variant="soft" icon="lucide:instagram" size="md" />
        <MinButton variant="soft" icon="lucide:linkedin" size="md" />
        <MinButton variant="soft" icon="lucide:github" size="md" />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { tv } from 'tailwind-variants';

const { currentTheme } = storeToRefs(themeModeStore())

const componentStyle = tv({
  slots: {
    base: 'w-full py-5 ',
    trigger: 'w-[95%] sm:container mx-auto flex flex-row items-center justify-between mx-auto'
  },

})

const style = computed(() => {
  // @ts-ignore
  const cls = componentStyle()
  return {
    base: cls.base(),
    trigger: cls.trigger()
  }
})
</script>
