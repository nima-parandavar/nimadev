<template>
  <ResumeBase v-if="body" :title="title">
    <p
      v-if="body.text"
      v-html="body.text"
      class="font-semibold text-lg text-justify"
    ></p>
  </ResumeBase>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  title: { type: String },
  alignment: { type: String as PropType<"row" | "column">, default: "row" },
  body: {
    type: Object as PropType<{
      title: string;
      subtitle: string;
      date: string;
      text: string;
    }>,
  },
});
</script>
