<template>
  <div>
    <div>
      <div :class="style.labelRoot">
        <div class="flex flex-row justify-between">
          <label :for="`${name}__id`" :class="style.label">
            {{ label }}
            <Icon v-if="required" :class="style.required" name="mdi:required" />
          </label>
          <small v-if="hint" :class="style.text">{{ hint }}</small>
        </div>
        <small v-if="description" :class="style.text">{{ description }}</small>
      </div>
      <slot></slot>
      <small v-if="help" :class="style.help">{{ help }}</small>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from 'tailwind-merge';
import formGroupConfig from '~/ui/formGroup.config';

defineProps({
  label: { type: String, required: false },
  required: { type: Boolean, required: false },
  name: String,
  description: { type: String, required: false },
  hint: { type: String, required: false },
  help: { type: String, required: false },
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
