<template>
  <!-- TODO add avatar dropdown item -->
  <slot>
    <component :is="to ? NuxtLink : 'button'" :to="to" @click="click" :class="[itemStyle]"
      class="px-3 py-1 w-52 text-left rounded-lg transition ease-linear font-medium">
      <DropdownMenuItem class="inline-flex justify-between w-full">

        <DropdownMenuLabel class="to-center" as="p" v-if="icon && !avatar && label">
          <Icon :name="icon" size="19" />
          <span class="text-sm">{{ label }}</span>
        </DropdownMenuLabel>

        <DropdownMenuLabel class="to-center" as="p" v-else-if="!icon && avatar && label">
          <MinAvatar :label="avatar.label" :src="avatar.src" />
          <span class="text-sm">{{ label }}</span>
        </DropdownMenuLabel>

        <DropdownMenuLabel class="to-center" as="p" v-else-if="icon && avatar && label">
          <MinAvatar :label="avatar.label" :src="avatar.src" />
          <span class="text-sm">{{ label }}</span>
        </DropdownMenuLabel>

        <DropdownMenuLabel class="to-center" as="p" v-else>
          <span class="text-sm">{{ label }}</span>
        </DropdownMenuLabel>


        <MinBadge v-if="badge" :label="badge" variant="link" />
      </DropdownMenuItem>
    </component>
  </slot>
</template>

<script lang="ts" setup>
import type { Avatar, Color } from '~/interfaces/min';
import { NuxtLink } from '#components';

const { theme } = storeToRefs(useThemeStore())

interface DropdownItemProps {
  label: string;
  icon?: string;
  avatar?: Avatar,
  to?: string | object;
  click?: Function;
  badge?: string | number,
  color?: Color;
}

const props = withDefaults(defineProps<DropdownItemProps>(), {})

const itemStyle = computed(() => {
  return !props.color ? `dropdown-item-${theme.value}` : `dropdown-item-${props.color}`
})
</script>
