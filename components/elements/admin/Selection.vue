<template>
  <SelectRoot
    v-model="model"
    :required="required"
    :disabled="disabled"
    :autocomplete="autocomplete ? 'autocomplete' : ''"
    :default-value="defaultValue"
  >
    <SelectTrigger :class="style.trigger">
      <SelectValue :class="style.selectValue" :placeholder="placeholder" />
      <SelectIcon as-child :class="style.icon">
        <Icon name="i-iconoir:nav-arrow-down" size="18" />
      </SelectIcon>
    </SelectTrigger>

    <SelectPortal>
      <SelectContent :class="style.content">
        <SelectViewport>
          <SelectItem
            v-for="item in items"
            :value="item[valueBy]"
            :class="style.item"
          >
            <SelectItemText>{{ item[textBy] }}</SelectItemText>
            <SelectItemIndicator as-child>
              <Icon name="i-iconoir:check" size="18" />
            </SelectItemIndicator>
          </SelectItem>
        </SelectViewport>
      </SelectContent>
    </SelectPortal>
  </SelectRoot>
</template>

<script lang="ts" setup>
import adminSelectionConfig from "~/ui/adminSelection.config";
import {
  SelectContent,
  SelectItem,
  SelectItemIndicator,
  SelectPortal,
  SelectRoot,
  SelectTrigger,
  SelectValue,
  SelectViewport,
  SelectIcon,
  SelectItemText,
} from "radix-vue";
import { twMerge } from "tailwind-merge";
import type { PropType } from "vue";

const props = defineProps({
  autocomplete: Boolean,
  defaultValue: String,
  disabled: Boolean,
  required: Boolean,
  placeholder: String,
  textBy: { type: String, required: false, default: "label" },
  valueBy: { type: String, required: false, default: "value" },
  items: {
    type: Array as PropType<{ value: any; label: string }[]>,
    required: true,
  },
});

const model = defineModel({ type: String });

const style = computed(() => {
  const cls = adminSelectionConfig({ disabled: props.disabled });
  return {
    trigger: twMerge(cls.trigger()),
    selectValue: twMerge(cls.placeholder()),
    icon: cls.icon(),
    content: cls.content(),
    item: cls.item(),
  };
});
</script>
