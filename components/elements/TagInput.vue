<script setup lang="ts">
import { twMerge } from 'tailwind-merge'
import type { Color } from '~/types/theme'
import inputConfig from '~/ui/input.config'
import { motion } from 'motion-v'

const { letterToColor } = useLetterToColor()
const { currentTheme } = storeToRefs(themeModeStore())

const props = defineProps({
  name: { type: String, required: true },
  color: { type: String as PropType<Color | 'auto'>, required: false, default: 'auto' },
  icon: { type: String, required: false }

})
const text = ref<string>('')
const { push, remove, fields } = useFieldArray(() => props.name)

const pushItem = () => {
  const value = text.value?.trim()
  if (value) {
    push(value)
    text.value = ''
  }
}

const removeItem = (idx: number) => {
  remove(idx)
}

const style = computed(() => {
  // @ts-ignore
  const cls = inputConfig({ color: props.color === 'auto' ? currentTheme.value : props.color, disabled: props.disabled || props.readonly, icon: Boolean(props.icon) })

  return {
    root: cls.root(),
    base: twMerge(cls.base(), cls.rounded(), cls.background()),
    icon: twMerge(cls.icon(), cls.bgIcon()),
    error: cls.errorMessage()
  }
})

</script>

<template>
  <div>
    <div :class="style.root">
      <input :class="style.base" v-model="text" @keyup.enter="pushItem" />
      <span :class="style.icon">
        <Icon v-if="icon" :name="icon" />
      </span>
    </div>
    <div class="inline-flex gap-2 items-center mt-3 float-left" v-if="fields">
      <template v-for="item, idx in fields" :key="item.key">
        <motion.small :style="{ backgroundColor: letterToColor(item.value.at(0) as string) }" @click="removeItem(idx)"
          :initial="{ opacity: 0, scale: 0.9 }" :animate="{ opacity: 1, scale: 1 }" :exit="{ opacity: 0, scale: 0.8 }"
          class="px-4 py-2 font-normal rounded-full text-sm text-black inline-flex items-center justify-center gap-1 flex-row-reverse cursor-pointer">
          <span class="leading-none">{{ item.value }}</span>
          <Icon name="lucide:x" />
        </motion.small>
      </template>
    </div>
  </div>
</template>