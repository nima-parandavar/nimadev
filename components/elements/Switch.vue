<template>
  <div :style="style.root">
    <Label :for="`${name}__id`" :class="style.label"> {{ label }}</Label>

    <SwitchRoot :id="`${name}__id`" :class="style.base" :checked="checked" @update:checked="handleChange"
      v-on="validationListeners" @change="$emit('update:modelValue', checked)">
      <SwitchThumb :class="style.thumb" />
    </SwitchRoot>
  </div>

</template>

<script lang="ts" setup>
import { SwitchRoot, SwitchThumb, Label } from 'radix-vue'
import { twMerge } from 'tailwind-merge'
import switchConfig from '~/ui/switch.config'

const props = defineProps({
  name: { type: String, required: true },
  label: String,
  icon: String,
  modelValue: { type: null },
  validations: {
    type: [Function, Object] as any,
    default: undefined
  }
})

const { checked, handleChange, handleBlur, errorMessage } = useField<boolean>(() => props.name, props.validations, {
  type: 'checkbox',
  checkedValue: true,
  uncheckedValue: false,
  syncVModel: true
})

const validationListeners = {
  blur: (evt: Event) => handleBlur(evt, true),
  change: handleChange,
  input: (evt: Event) => handleChange(evt, !!errorMessage.value),
}

const style = computed(() => {
  const cls = switchConfig({})
  return {
    root: cls.root(),
    label: cls.label(),
    base: twMerge(cls.base()),
    thumb: cls.thumb()
  }
})

defineEmits(['update:modelValue'])

</script>
