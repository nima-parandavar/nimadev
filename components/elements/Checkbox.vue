<script setup lang="ts">
import { CheckboxRoot, CheckboxIndicator } from 'radix-vue';
import { useField } from 'vee-validate';
import type { PropType } from 'vue';
import type { Color } from '~/types/theme';
import checkboxConfig from '~/ui/checkbox.config';

const { currentTheme } = storeToRefs(themeModeStore())

const props = defineProps({
  name: { type: String, required: true },
  label: { type: String, required: false },
  color: { type: String as PropType<Color | 'auto'>, required: false, default: 'auto' },
  required: { type: Boolean, required: false }
});

const { value, errorMessage, handleChange, meta } = useField<boolean>(() => props.name);

const style = computed(() => {
  const cls = checkboxConfig({ color: props.color === 'auto' ? currentTheme.value : props.color })
  return {
    base: cls.base(),
    checkbox: cls.checkbox(),
    icon: cls.icon()
  }
})
</script>

<template>
  <label :class="style.base">
    <CheckboxRoot :checked="value" @update:checked="handleChange" :class="style.checkbox" :required="required">
      <CheckboxIndicator :class="style.icon">
        <Icon name="lucide:check" class="w-4 h-4" />
      </CheckboxIndicator>
    </CheckboxRoot>
    <span v-if="label" class="text-sm">
      {{ label }}
      <Icon v-if="required" name="mdi:required" class="text-cabaret-400" />
    </span>
    <span v-if="meta.touched && errorMessage" class="text-cabaret-400 text-xs ml-2">{{ errorMessage }}</span>
  </label>
</template>
