<template>
  <Separator
    :orientation="orientation"
    decorative
    lass="bg-black data-[orientation=horizontal]:h-px data-[orientation=horizontal]:w-full data-[orientation=vertical]:h-full data-[orientation=vertical]:w-px mx-[15px]"
  />
</template>

<script lang="ts" setup>
import { Separator } from "radix-vue";
defineProps({
  orientation: {
    type: String as PropType<"vertical" | "horizontal">,
    required: false,
    default: "vertical",
  },
});
</script>
