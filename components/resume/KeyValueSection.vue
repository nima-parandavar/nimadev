<template>
  <ResumeBase :title="title">
    <div
      class="flex flex-col items-start justify-start gap-3 md:gap-5 flex-wrap"
    >
      <div
        v-for="item in items"
        class="inline-flex w-fit text-md items-center font-semibold"
      >
        <p
          class="uppercase inline-flex items-center justify-start gap-1 w-[140px] md:w-[150px]"
        >
          <Icon v-if="item.icon" :name="item.icon" size="20" />
          <span>{{ item.key }}:</span>
        </p>
        <address v-if="item.type === 'address'">
          {{ item.value }}
        </address>
        <a
          v-else-if="item.type === 'tel'"
          class="underline"
          :href="`tel:${item.value}`"
          >{{ item.value }}</a
        >
        <a
          v-else-if="item.type === 'email'"
          class="underline"
          :href="`mailto:${item.value}`"
          >{{ item.value }}</a
        >
        <a
          v-else-if="item.type === 'link'"
          target="_blank"
          :href="item.value"
          >{{ $t("openWebsite") }}</a
        >
      </div>
    </div>
  </ResumeBase>
</template>

<script lang="ts" setup>
import type { PropType } from "vue";

defineProps({
  title: { type: String },
  alignment: { type: String as PropType<"row" | "column">, default: "row" },
  items: {
    type: Array as PropType<
      {
        key: string;
        value: string;
        type: "address" | "link" | "tel" | "email";
        icon?: string;
      }[]
    >,
  },
});
</script>
