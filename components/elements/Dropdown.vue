<template>
  <DropdownMenuRoot>
    <DropdownMenuTrigger :as-child="true">
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <DropdownMenuContent :class="[style.rounded(), style.bgColor(), style.contentBase()]" :collision-padding="10">
        <template v-for="(group, index) in items" :key="index">

          <DropdownMenuGroup :class="[style.groupItem()]">
            <p v-if="group.label" :class="[style.groupLabel(), style.groupLabelColor()]">{{ group.label }}</p>

            <DropdownMenuItem v-for="item in group.items" :key="item.key" :class="[style.item()]"
              :disabled="item.disabled">

              <slot :name="item.slot ? item.slot : `item_${item.key}`" :item="item">

                <div :class="[style.label()]">
                  <Icon v-if="item.icon" :name="item.icon" :class="style.iconSize()" />
                  <DropdownMenuLabel :class="style.labelSize()">{{ item.label }}</DropdownMenuLabel>
                </div>


                <div :class="style.postfix()">
                  {{ item.postfix }}
                </div>

              </slot>
            </DropdownMenuItem>

          </DropdownMenuGroup>
          <hr :class="[style.spliter()]" v-if="index + 1 !== items.length" />
        </template>

      </DropdownMenuContent>
    </DropdownMenuPortal>
  </DropdownMenuRoot>
</template>


<script setup lang="ts">
import {
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuRoot,
  DropdownMenuTrigger,
} from 'radix-vue'
import type { PropType } from 'vue';
import type { Items } from '~/types/dropdown';
import type { Color, Size } from '~/types/theme';
import dropdownConfig from '~/types/ui.config/dropdown.config';
const { theme } = useAppConfig()

const props = defineProps({
  items: {
    type: Array as PropType<Items>,
    required: true
  },
  color: {
    type: String as PropType<Color | 'auto'>,
    default: 'auto'
  },
  size: {
    type: String as PropType<Size>,
    default: 'md'
  }
})

const style = computed(() => {
  const cls = dropdownConfig({
    color: dropdownColor.value,
    size: props.size
  })
  return { ...cls }
})

const dropdownColor = computed(() => {
  return props.color === 'auto' ? theme.primaryColor : props.color
})
</script>