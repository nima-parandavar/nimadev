<template>
  <motion.div
    :initial="{ scale: 0.8, opacity: 0 }"
    :animate="{ scale: 1, opacity: 1 }"
    :while-hover="{ scale: 1.1 }"
    :style="{ backgroundImage: `url('/api/images/${url}')` }"
    class="w-36 h-36 bg-bombay-200 rounded-md cursor-pointer bg-no-repeat bg-center"
  >
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";

defineProps({
  url: { type: String, required: true },
});
</script>
