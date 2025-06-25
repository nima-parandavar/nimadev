<template>
  <ResumeBase v-if="items" :title="title">
    <div class="w-full grid md:grid-cols-2 gap-10">
      <motion.div
        v-bind="animation"
        v-for="(item, index) in items"
        :key="index"
      >
        <p class="mb-2 font-semibold text-xl">{{ item.key }}</p>
        <MinProgress v-model="item.rate" :max="100" color="auto" />
      </motion.div>
    </div>
  </ResumeBase>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
import type { PropType } from "vue";

defineProps({
  title: { type: String },
  items: { type: Array as PropType<{ key: string; rate: number }[]> },
});

const animation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5, delay: 0.3 } },
};
</script>
