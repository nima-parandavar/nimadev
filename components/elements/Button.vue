<template>
  <component :is="to ? NuxtLink : 'button'" :to="to" :disabled="disabled || loading" :class="style.root" :type="type"
    :exact-active-class="exactActiveClass">

    <span :class="style.iconRoot" v-if="icon || loading">
      <Icon v-if="icon && !loading" :name="icon" :class="[style.iconSize]" />
      <Icon v-if="loading" :name="loadingIconName" :class="[style.iconSize, style.animation]" />
    </span>
    <span v-if="label" :class="style.labelSize">{{ label }}</span>

  </component>
</template>

<script lang="ts" setup>
import type { Color, Size, Variant } from '~/types/theme';
import buttonConfig from '~/ui/button.config';
import { twMerge } from 'tailwind-merge';
import { NuxtLink } from '#components';

const { theme } = useAppConfig()
const { currentTheme } = storeToRefs(themeModeStore())

const props = defineProps({
  label: { type: String, required: false },
  icon: { type: String, required: false },
  loading: { type: Boolean, required: false },
  loadingIcon: { type: String, required: false },
  disabled: { type: Boolean, required: false, default: false },
  color: { type: String as PropType<Color | 'auto'>, required: false, default: 'auto' },
  variant: { type: String as PropType<Variant>, required: false, default: 'solid' },
  size: { type: String as PropType<Size>, required: false, default: 'sm' },
  type: { type: String as PropType<HTMLButtonElement['type']>, default: 'button' },
  to: { type: String, required: false },
  activeClass: { type: String as PropType<string | 'currentTheme'>, required: false, default: 'currentTheme' }
})

const style = computed(() => {
  const cls = buttonConfig({ size: props.size, variant: props.variant, disabled: props.disabled || props.loading, color: buttonColor.value })

  return {
    root: twMerge(cls.base(), cls.textColor(), cls.bgColor(), cls.borderColor()),
    iconRoot: cls.icon(),
    iconSize: cls.iconSize(),
    animation: cls.loadingAnimation(),
    labelSize: cls.labelSize(),
  }
})

const loadingIconName = computed(() => {
  return props.loadingIcon ? props.loadingIcon : theme.loadingIcon
})

const buttonColor = computed(() => {
  return props.color === 'auto' ? currentTheme.value : props.color
})

const exactActiveClass = computed(() => {
  if (props.activeClass === 'currentTheme') {
    const cls = buttonConfig({ color: currentTheme.value })
    console.log(cls.activeClass())
    return cls.activeClass()
  }
  return props.activeClass
})

</script>
