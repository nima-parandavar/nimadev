<template>
  <NumberFieldRoot :name="name" :id="name" :min="min" :max="max" :step="step" :required="required"
    class="inline-flex justify-center gap-3" v-model="model">
    <NumberFieldDecrement class="to-center p-2 text-lg rounded-full transition ease-linear" :class="[btnStyle]">
      <Icon name="i-lucide-minus" />
    </NumberFieldDecrement class="spin-input-red">
    <NumberFieldInput :class="[inputStyle]" />
    <NumberFieldIncrement class="to-center p-2 text-lg rounded-full transition ease-linear" :class="[btnStyle]">
      <Icon name="i-lucide-plus" />
    </NumberFieldIncrement>
  </NumberFieldRoot>
</template>

<script lang="ts" setup>
import type { Color } from '~/interfaces/min';
const { theme } = storeToRefs(useThemeStore())

const props = withDefaults(defineProps<{
  name: string,
  max?: number,
  min?: number,
  step?: number,
  required?: boolean,
  color?: Color,
}>(), { step: 1, required: false, min: 0 })

const model = defineModel({ required: false, type: Number })

const btnStyle = computed(() => {
  if (props.color) {
    return `spin-input-${props.color}-btn`
  }
  return `spin-input-${theme.value}-btn`
})

const inputStyle = computed(() => {
  if (!props.color) {
    return `spin-input-${theme.value}`
  }
  return `spin-input-${props.color}`
})
</script>
