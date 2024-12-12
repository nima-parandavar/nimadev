<template>
  <div class="inline-flex gap-3 justify-center">
    <Field :name="name" :id="name" :type="'checkbox'" :required="required"
      class="appearance-none w-6 h-6 rounded-full transition ease-linear cursor-pointer" :class="[checkboxStyle]"
      v-model="model" />
    <label :for="name">{{ label }}</label>
  </div>
</template>

<script lang="ts" setup>
import type { Color } from '~/interfaces/min';
const { theme } = storeToRefs(useThemeStore())
const colorMode = useColorMode()

const props = withDefaults(defineProps<{
  color?: Color,
  name: string,
  label?: string,
  required?: boolean,
  rules?: any,
}>(), { required: false })

const model = defineModel()

const checkboxStyle = computed(() => {
  return `checkbox-${props.color ? props.color : theme.value}-${colorMode.value}`
})

</script>
