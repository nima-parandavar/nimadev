<template>
  <div>
    <div :class="style.root">
      <input :type="type" :required="required" :disabled="disabled" :readonly="readonly" :id="`${name}__id`"
        :class="style.base" :placeholder="placeholder" v-model="value" v-on="validationListeners" />
      <span :class="style.icon">
        <Icon v-if="icon" :name="icon" />
      </span>
    </div>
    <p :class="style.error">{{ errorMessage }}</p>
  </div>
</template>

<script lang="ts" setup>
import type { Type } from '~/types/base';
import inputConfig from '~/ui/input.config';
import { twMerge } from 'tailwind-merge';
import type { Color } from '~/types/theme';

const { currentTheme } = storeToRefs(themeModeStore())

const props = defineProps({
  name: { type: String, required: true },
  type: { type: String as PropType<Type>, default: 'text', required: false },
  required: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false },
  readonly: { type: Boolean, required: false },
  color: { type: String as PropType<Color | 'auto'>, required: false, default: 'auto' },
  icon: { type: String, required: false },
  placeholder: { type: String, required: false },
  validations: { type: [Function, Object, undefined] as any, required: false, default: undefined },
  modelValue: String
})

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


const { value, errorMessage, handleChange, handleBlur } = useField<string>(() => props.name, props.validations, {
  syncVModel: true
})
const validationListeners = {
  blur: (evt: Event) => handleBlur(evt, true),
  change: handleChange,
  input: (evt: Event) => handleChange(evt, !!errorMessage.value),
}

const emit = defineEmits(['update:modelValue']);
</script>
