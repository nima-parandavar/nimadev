<template>
  <div>
    <div :class="style.root">
      <Field :name="name" :rules="validations" :id="`${name}__id`" v-slot="{ field }">

        <textarea v-bind="field" :required="required" :class="style.base" :disabled="disabled" :readonly="readonly"
          :placeholder="placeholder"></textarea>
      </Field>
    </div>
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
  required: { type: Boolean, required: false },
  disabled: { type: Boolean, required: false },
  readonly: { type: Boolean, required: false },
  color: { type: String as PropType<Color | 'auto'>, required: false, default: 'auto' },
  placeholder: { type: String, required: false },
  validations: { type: [Function, Object] as any, required: false }
})

const style = computed(() => {
  // @ts-ignore
  const cls = inputConfig({ color: props.color === 'auto' ? currentTheme.value : props.color, disabled: props.disabled || props.readonly, icon: Boolean(props.icon) })

  return {
    root: cls.root(),
    base: twMerge(cls.base(), cls.rounded(), cls.background(), cls.textarea()),
    icon: twMerge(cls.icon(), cls.bgIcon()),
    error: cls.errorMessage()
  }
})

</script>
