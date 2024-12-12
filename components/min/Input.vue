<template>
  <div :class="{ 'relative': icon }">
    <Field :name="name" :type="type" class="w-full appearance-none py-1 rounded-full transition ease-linear"
      :class="[inputStyle, { 'ps-9 pe-4': icon, 'px-4': !icon }]" :placeholder="placeholder" v-model="model"
      @blur="$emit('blur')" :id="name" :required="required" :rules="rules" :min="min" :max="max" :step="step" />

    <span v-if="icon" class="absolute top-1/2 left-1 -translate-y-1/2 p-3 h-7 w-7 rounded-[50%] "
      :class="[`${inputStyle}-icon`]">
      <span class="bg-transparent w-full h-full">
        <Icon size="17" :name="icon" class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      </span>
    </span>

  </div>
</template>

<script lang="ts" setup>
import type { Color, fieldTypes } from '~/interfaces/min';
const colorMode = useColorMode()
const { theme } = storeToRefs(useThemeStore())

const props = withDefaults(defineProps<{
  type?: fieldTypes,
  color?: Color,
  name: string;
  placeholder?: string,
  icon?: string,
  required?: boolean,
  rules?: any,
  min?: number,
  max?: number,
  step?: number,
}>(), { type: 'text', required: false })

const inputStyle = computed(() => {
  if (!props.color) {
    return `input-${theme.value}`
  }
  return `input-${props.color}`
})

const model = defineModel({ required: false, type: String })
defineEmits(['blur'])

</script>
