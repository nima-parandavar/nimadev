<template>
  <div>
    <SwitchRoot class="w-[50px] h-[25px] rounded-full relative transition-all delay-75 duration-100 ease-in-out"
      :class="[switchStyle]">
      <SwitchThumb
        class="h-[20px] w-[20px] absolute transition-all delay-75 duration-100 ease-in-out will-change-transform left-0.5 top-1/2 -translate-y-1/2 rounded-full data-[state=checked]:left-[28px]"
        :class="[`${switchStyle}-thumb`]">
        <Icon v-if="icon" :name="icon" />
      </SwitchThumb>
    </SwitchRoot>
  </div>
</template>

<script lang="ts" setup>
import type { Color } from '~/interfaces/min';
const { theme } = storeToRefs(useThemeStore())
const colorMode = useColorMode()

const props = withDefaults(defineProps<{
  color?: Color,
  icon?: string
}>(), {})

const switchStyle = computed(() => {
  return `switch-${props.color ? props.color : theme.value}-${colorMode.preference}`
})
</script>
