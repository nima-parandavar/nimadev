<template>
  <section>
    <h2 class="text-4xl md:text-6xl" :class="{ 'text-right': dir === 'rtl' }">{{ $t('section3.title') }}</h2>
    <div class="mt-5 flex flex-col gap-3">
      <div class="flex flex-col md:flex-row items-center justify-center gap-3">
        <motion.div v-bind="animation">
          <CardsService class="w-full md:max-w-xl" icon="i-akar-icons:django-fill" :title="$t('section3.backend.title')"
            :text="$t('section3.backend.text')" />
        </motion.div>
        <motion.div v-bind="animation">
          <CardsService class="w-full" icon="i-tabler:api-app" :title="$t('section3.api.title')"
            :text="$t('section3.api.text')" />
        </motion.div>
      </div>
      <div class="flex flex-col md:flex-row-reverse items-center justify-center gap-3">
        <motion.div v-bind="animation">
          <CardsService class="w-full md:max-w-xl" icon="i-akar-icons:figma-fill" :title="$t('section3.frontend.title')"
            :text="$t('section3.frontend.text')" />
        </motion.div>
        <motion.div v-bind="animation">
          <CardsService icon="i-akar-icons:vue-fill" class="w-full" :title="$t('section3.ui.title')"
            :text="$t('section3.ui.text')" />
        </motion.div>
      </div>
    </div>
  </section>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'
const dir = useLanguageDir()
const animation = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0, transition: { duration: 0.5 } }
}
</script>
