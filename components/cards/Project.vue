<template>
  <div class="flex flex-col-reverse lg:flex-row gap-3 w-full h-auto lg:h-[500px]">
    <div class="h-auto lg:w-[500px] lg:h-auto  rounded-3xl p-10 transition-colors duration-700"
      :class="{ 'bg-mako-400 ': !isSlideActive }" :style="{ backgroundColor: isSlideActive ? color : '' }">
      <div class="h-full flex flex-col justify-between gap-5">
        <h3 class="text-white text-4xl font-bold">{{ title }}</h3>

        <div class="text-white">
          <p>{{ description }}</p>
          <AnimatePresence>
            <motion.div v-show="isSlideActive" class="h-2 rounded-full mt-3 bg-white " :initial="{ width: 0 }"
              :animate="{ width: 410 }" :transition="{ duration: timeDuration / 1000 }" />
          </AnimatePresence>
        </div>
      </div>
    </div>
    <div class="h-[500px] lg:w-[450px] lg:h-auto rounded-3xl bg-mako-100">
      <img src="~/assets/images/post-test.png" class="h-full w-full rounded-3xl transition-all duration-700"
        :class="{ 'grayscale': !isSlideActive }" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { motion, AnimatePresence } from 'motion-v'
import type { Color } from '~/types/theme'


const activeSlide: any = inject('activeSlide')
const isSlideActive = computed(() => activeSlide.value === props.index)


const props = defineProps({
  index: Number,
  timeDuration: Number,
  title: String,
  description: String,
  image: String,
  color: String,
})



</script>
