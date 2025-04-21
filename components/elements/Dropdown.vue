<template>
  <DropdownMenuRoot v-model:open="toggleState">
    <DropdownMenuTrigger :as-child="true">
      <slot />
    </DropdownMenuTrigger>

    <DropdownMenuPortal>
      <AnimatePresence :initial="false">
        <motion v-show="toggleState" key="dropdown" :animate="{ opacity: 1, transform: 'translateY(0px)' }"
          :exit="{ opacity: 0, transform: 'translateY(-10px)' }"
          :initial="{ opacity: 0, transform: 'translateY(-10px)' }">

          <DropdownMenuContent :class="style.dropdownContent" :collision-padding="10" align="center">
            <template v-for="(group, index) in items" :key="index" as-child>

              <DropdownMenuGroup :class="style.dropdownGroup">
                <p v-if="group.label" :class="style.dropdownMenuGroupLabel">{{ group.label }}</p>

                <DropdownMenuItem v-for="item in group.items" :key="item.key" :class="style.dropdownMenuItem"
                  :disabled="item.disabled" @click="item.click">

                  <slot :name="item.slot ? item.slot : `item_${item.key}`" :item="item">

                    <div :class="style.dropdownMenuItemLabel.label">
                      <Icon v-if="item.icon" :name="item.icon" :class="style.dropdownMenuItemIcon.size" />
                      <DropdownMenuLabel :class="style.dropdownMenuItemLabel.size">{{ item.label }}</DropdownMenuLabel>
                    </div>


                    <div :class="style.dropdownMenuItemLabel.postfix">
                      {{ item.postfix }}
                    </div>

                  </slot>
                </DropdownMenuItem>

              </DropdownMenuGroup>
              <hr :class="style.dropdownSpliter" v-if="index + 1 !== items.length" />
            </template>

          </DropdownMenuContent>
        </motion>
      </AnimatePresence>
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
import dropdownConfig from '~/ui/dropdown.config';
import { twMerge } from 'tailwind-merge';

const themeMode = themeModeStore()
const toggleState = ref(false)
const { currentTheme } = storeToRefs(themeMode)

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
  return {
    dropdownContent: twMerge(cls.rounded(), cls.bgColor(), cls.contentBase()),
    dropdownGroup: cls.groupItem(),
    dropdownMenuGroupLabel: twMerge(cls.groupLabel(), cls.groupLabelColor()),
    dropdownMenuItem: cls.item(),
    dropdownMenuItemLabel: { label: cls.label(), size: cls.labelSize(), postfix: cls.postfix() },
    dropdownMenuItemIcon: { size: cls.iconSize() },
    dropdownSpliter: cls.spliter()
  }
})

const dropdownColor = computed(() => {
  return props.color === 'auto' ? currentTheme.value : props.color
})
</script>