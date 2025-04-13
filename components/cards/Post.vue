<template>
  <div class="w-full max-w-sm rounded-3xl p-2 transition-colors" :class="[hoverStyle]">
    <img src="~/assets/images/post-test.png" class="rounded-2xl w-full h-[200px]" />
    <div class="mt-3  px-1 flex flex-col justify-between items-start">
      <div>
        <h3 class="capitalize text-2xl">This is a Title</h3>

        <div class="mt-2 inline-flex gap-1 flex-wrap">
          <small class="inline px-3 py-1 text-xs font-normal rounded-full"
            :style="{ backgroundColor: bgColor, color: textColor }">figma</small>
          <small class="inline px-3 py-1 text-xs font-normal rounded-full"
            :style="{ backgroundColor: bgColor, color: textColor }">UI/UX</small>
          <small class="inline px-3 py-1 text-xs font-normal rounded-full"
            :style="{ backgroundColor: bgColor, color: textColor }">Tarfand</small>
        </div>
        <p class="mt-2 text-black/70 dark:text-white/60">Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          Laborum reiciendis
          assumenda delectus
          fugiat a alias
          nostrum sint rerum ad, qui animi fugit perferendis amet nemo quibusdam. Tempore ducimus quasi aliquam.</p>
      </div>

      <MinButton label="read more" size="md" variant="link" class="self-end mt-7" icon="lucide:circle-arrow-right"
        leading-icon to="#" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { letterToColor, getTextColor } = useLetterToColor()
const { currentTheme } = storeToRefs(themeModeStore())

const bgColor = computed(() => letterToColor('e'))
const textColor = computed(() => getTextColor(bgColor.value))

const hoverStyle = computed(() => {
  switch (currentTheme.value) {
    case 'blue': return 'hover:bg-curious-blue-100/80 dark:hover:bg-curious-blue-400/10'
    case 'green': return 'hover:bg-keppel-100/80 dark:hover:bg-keppel-400/10'
    case 'orange': return 'hover:bg-pumpkin-100/80 dark:hover:bg-pumpkin-400/10'
    case 'purple': return 'hover:bg-vivid-violet-100/30 dark:hover:bg-vivid-violet-400/10'
    case 'red': return 'hover:bg-cabaret-100/80 dark:hover:bg-cabaret-400/10'
  }
})

</script>
