<template>
  <div :class="style.root">
    <Field :type="type" :name="name" :required="required" :disabled="disabled" :readonly="readonly"
      :class="style.base" />
    <span :class="style.icon">
      <Icon v-if="icon" :name="icon" />
    </span>
  </div>
  <!-- <input  -->
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
  icon: { type: String, required: false }
})

const style = computed(() => {
  // @ts-ignore
  const cls = inputConfig({ color: props.color === 'auto' ? currentTheme.value : props.color, disabled: props.disabled || props.readonly, icon: Boolean(props.icon) })

  return {
    root: cls.root(),
    base: twMerge(cls.base(), cls.rounded(), cls.background()),
    icon: twMerge(cls.icon(), cls.bgIcon())
  }
})

</script>
