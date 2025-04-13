<template>
  <section>
    <h2 class="text-4xl md:text-6xl">Services</h2>
    <div class="mt-5 flex flex-col gap-3">
      <div class="flex flex-col md:flex-row items-center justify-center gap-3">
        <motion.div v-bind="animation">
          <CardsService class="w-full md:max-w-xl" icon="i-akar-icons:django-fill" title="Back-end" />
        </motion.div>
        <motion.div v-bind="animation">
          <CardsService class="w-full" icon="i-tabler:api-app" title="API" />
        </motion.div>
      </div>
      <div class="flex flex-col md:flex-row-reverse items-center justify-center gap-3">
        <motion.div v-bind="animation">
          <CardsService class="w-full md:max-w-xl" icon="i-akar-icons:vue-fill" title="Front-end" />
        </motion.div>
        <motion.div v-bind="animation">
          <CardsService class="w-full" icon="i-akar-icons:figma-fill" title="UI/UX Design" />
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'

const animation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}
</script>
