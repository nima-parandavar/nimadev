<template>
  <button :disabled="disabled" :class="[style.base(), style.textColor(), style.bgColor(), style.borderColor()]">

    <span :class="style.icon()">
      <Icon v-if="icon && !loading" :name="icon" :class="[style.iconSize()]" />
      <Icon v-if="loading" :name="loadingIconName"
        :class="[style.iconSize(), style.loadingAnimation(), style.icon()]" />
    </span>
    <span v-if="label" :class="[style.labelSize()]">{{ label }}</span>

  </button>
</template>

<script lang="ts" setup>
import type { Color, Size, Variant } from '~/types/theme';
import buttonConfig from '~/types/ui.config/button.config';
const { theme } = useAppConfig()


const props = defineProps({
  label: { type: String, required: false },
  icon: { type: String, required: false },
  loading: { type: Boolean, required: false },
  loadingIcon: { type: String, required: false },
  disabled: { type: Boolean, required: false, default: false },
  color: { type: String as PropType<Color | 'auto'>, required: false, defalt: 'auto' },
  variant: { type: String as PropType<Variant>, required: false, default: 'solid' },
  size: { type: String as PropType<Size>, required: false, default: 'sm' }
})

const style = computed(() => {
  const classes = buttonConfig({ size: props.size, variant: props.variant, disabled: props.disabled, color: buttonColor.value })

  return { ...classes }
})

const loadingIconName = computed(() => {
  return props.loadingIcon ? props.loadingIcon : theme.loadingIcon
})

const buttonColor = computed(() => {
  return props.color === 'auto' ? theme.primaryColor : props.color
})

</script>
