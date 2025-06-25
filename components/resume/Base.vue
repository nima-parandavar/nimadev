<template>
  <motion.div
    class="flex flex-col md:flex-row md:justify-start md:items-start"
    v-bind="animation"
  >
    <h3
      class="text-4xl md:text-5xl w-fit md:w-full md:max-w-xs mb-5 opacity-50"
    >
      {{ title }}
    </h3>
    <div class="w-full">
      <slot></slot>
    </div>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
defineProps({
  title: { type: String },
});

const animation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
</script>
