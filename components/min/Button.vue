<template>
  <button :type="type" :disabled="disabled">

    <span v-if="varaint === 'solid'" class="rounded-full to-center px-5 py-1 transition ease-linear text-center "
      :class="[buttonStyle]">
      <span v-if="label">{{ label }}</span>
      <Icon v-if="icon && !loading" :name="icon" />
      <Icon v-else :name="loadingIcon" />
    </span>

    <span v-else-if="varaint === 'link'" class="to-center px-5 py-1 transition ease-linear text-center"
      :class="[buttonStyle]">
      <span v-if="label">{{ label }}</span>
      <Icon v-if="icon && !loading" :name="icon" />
      <Icon v-else :name="loadingIcon" />
    </span>

    <span v-else-if="varaint === 'soft'" class="to-center" :class="[buttonStyle]">
      <span :class="[`${buttonStyle}-label`]">{{ label }}</span>
      <span class="rounded-[50%] p-3 to-center transition ease-linear" :class="[`${buttonStyle}-icon`]">
        <Icon v-if="icon && !loading" :name="icon" />
        <Icon v-else :name="loadingIcon" />
      </span>
    </span>
  </button>
</template>

<script lang="ts" setup>
import type { ButtonHTMLAttributes } from 'vue';
import type { Variant, Color } from '~/interfaces/min';

const { theme } = storeToRefs(useThemeStore())

const props = withDefaults(defineProps<{
  label?: string | number,
  icon?: string,
  varaint?: Variant,
  type?: ButtonHTMLAttributes['type'],
  color?: Color,
  loading?: boolean,
  loadingIcon?: string,
  disabled?: ButtonHTMLAttributes['disabled']

}>(), { varaint: 'solid', type: 'button', loading: false, loadingIcon: 'i-line-md-loading-loop', disabled: 'false' })

const buttonStyle = computed(() => {
  return !props.color ? `btn-${theme.value}-${props.varaint}` : `btn-${props.color}-${props.varaint}`
})
</script>
