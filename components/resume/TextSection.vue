<template>
  <ResumeBase v-if="items" :title="title">
    <div class="flex flex-col gap-10 md:gap-16">
      <motion.div
        v-bind="animation"
        v-for="(body, index) in items"
        :key="index"
      >
        <div class="flex flex-col md:flex-row justify-between items-start">
          <div>
            <h4 v-if="body.title" class="text-3xl md:text-4xl capitalize">
              {{ body.title }}
            </h4>
            <p v-if="body.subtitle" class="mt-3">{{ body.subtitle }}</p>
          </div>
          <p v-if="body.date">{{ body.date }}</p>
        </div>

        <div
          v-if="body.text"
          v-html="body.text"
          class="font-semibold text-lg leading-9 text-justify mt-4"
        ></div>
      </motion.div>
    </div>
  </ResumeBase>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import type { PropType } from "vue";

defineProps({
  title: { type: String },
  alignment: { type: String as PropType<"row" | "column">, default: "row" },
  items: {
    type: Object as PropType<
      {
        title?: string;
        subtitle?: string;
        date?: string;
        text: string;
      }[]
    >,
  },
});

const animation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};
</script>
