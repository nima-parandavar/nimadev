<template>
  <div>
    <div>
      <div :class="style.labelRoot">
        <div class="flex flex-row justify-between" :class="{ 'text-right flex-row-reverse': dir === 'rtl' }">
          <Label :for="`${name}__id`" :class="[style.label]">
            {{ label }}
            <Icon v-if="required" :class="style.required" name="mdi:required" />
          </Label>
          <small v-if="hint" :class="style.text">{{ hint }}</small>
        </div>
        <small v-if="description" :class="style.text">{{ description }}</small>
      </div>
      <slot></slot>
      <small v-if="help" :class="[style.help, { 'text-right': dir === 'rtl' }]">{{ help }}</small>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { Label } from 'radix-vue'
import { twMerge } from 'tailwind-merge';
import formGroupConfig from '~/ui/formGroup.config';

const dir = useLanguageDir()

defineProps({
  label: { type: [String, Object] as any, required: false },
  required: { type: Boolean, required: false },
  name: String,
  description: { type: [String, Object] as any, required: false },
  hint: { type: [String, Object] as any, required: false },
  help: { type: [String, Object] as any, required: false },
})

const style = computed(() => {
  const cls = formGroupConfig({})
  return {
    label: cls.label(),
    required: cls.required(),
    labelRoot: cls.labelRoot(),
    text: cls.text(),
    help: twMerge(cls.text(), cls.help())
  }
})

</script>
