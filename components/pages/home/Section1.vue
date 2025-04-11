<template>
  <section class="grid grid-cols-1  lg:grid-cols-12 lg:grid-rows-2 h-auto lg:h-[1000px] gap-3">
    <motion.div :initial="{ scale: 0.9, opacity: 0 }" :whileInView="{ scale: 1, opacity: 1 }"
      :while-hover="{ scale: 0.97, transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] } }"
      class="hidden lg:block lg:col-start-1 lg:col-end-4 lg:row-start-1 lg:row-end-2">
      <SocialCardsMe />
    </motion.div>
    <div
      class="lg:col-start-4 lg:col-end-8 lg:row-start-1 lg:row-end-2 grid grid-cols-1 lg:grid-cols-2 grid-rows-2 gap-3">
      <motion.div :initial="{ scale: 0.9, opacity: 0 }" :whileInView="{ scale: 1, opacity: 1 }"
        :while-hover="{ scale: 0.97, transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] } }"
        class="col-start-1 col-end-2 lg:col-end-3 row-start-1 row-end-2">
        <SocialCardsDribbble />
      </motion.div>
      <motion.div :initial="{ scale: 0.9, opacity: 0 }" :whileInView="{ scale: 1, opacity: 1 }"
        :while-hover="{ scale: 0.97, transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] } }"
        class="col-start-1 col-end-2 lg:col-end-3 row-start-2 row-end-3">
        <SocialCardsLinkedin />
      </motion.div>
    </div>
    <motion.div :initial="{ scale: 0.9, opacity: 0 }" :whileInView="{ scale: 1, opacity: 1 }"
      :while-hover="{ scale: 0.97, transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] } }"
      class="lg:col-start-8 lg:col-end-13 lg:row-start-1 lg:row-end-2">
      <SocialCardsInstagram />
    </motion.div>
    <motion.div :initial="{ scale: 0.9, opacity: 0 }" :whileInView="{ scale: 1, opacity: 1 }"
      :while-hover="{ scale: 0.97, transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] } }"
      class="lg:col-start-1 lg:col-end-9 lg:row-start-2 lg:row-end-3">
      <SocialCardsGithub />
    </motion.div>
    <motion.div :initial="{ scale: 0.9, opacity: 0 }" :whileInView="{ scale: 1, opacity: 1 }"
      :while-hover="{ scale: 0.97, transition: { duration: 0.8, ease: [0, 0.71, 0.2, 1.01] } }"
      class="lg:col-start-9 lg:col-end-13 lg:row-start-2 lg:row-end-3">
      <SocialCardsResume />
    </motion.div>
  </section>
</template>

<script lang="ts" setup>
import { motion } from 'motion-v'

</script>
