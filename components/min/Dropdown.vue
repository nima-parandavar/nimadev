<template>
  <!-- TODO add transition to dropdown content -->
  <DropdownMenuRoot v-model:open="toggleDropdown">
    <div>
      <DropdownMenuTrigger :disabled="disabled">
        <slot></slot>
      </DropdownMenuTrigger>
    </div>

    <DropdownMenuPortal>
      <DropdownMenuContent v-if="items.length" class="p-3 w-full max-w-xs rounded-xl mt-3"
        :class="[dropdownContentStyle]">
        <slot name="dropdown" :items="items">

          <DropdownMenuGroup v-for="(group, index) in items" class="grid grid-rows-1 gap-1">

            <MinDropdownItem v-for="item in group" :key="item.key" :label="item.label" :icon="item.icon" :to="item.to"
              :click="item.click" :badge="item.badge" :avatar="item.avatar">
              <slot :name="item.slot" :item="item"></slot>
            </MinDropdownItem>

            <DropdownMenuSeparator class="w-full h-[0.5px] my-3 bg-stone-300 dark:bg-stone-700"
              v-if="index + 1 !== items.length" />
          </DropdownMenuGroup>
        </slot>
      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>

<script lang="ts" setup>
import type { Color, DropdownMenu } from '~/interfaces/min';
const { theme } = storeToRefs(useThemeStore())
const colorMode = useColorMode()

const props = withDefaults(defineProps<{
  disabled?: boolean,
  items: DropdownMenu,
  color?: Color,
}>(), { disabled: false })


const toggleDropdown = ref(false)

const dropdownContentStyle = computed(() => {
  return !props.color ? `dropdown-content-${theme.value}-${colorMode.value}` : `dropdown-content-${props.color}-${colorMode.value}`
})
</script>
