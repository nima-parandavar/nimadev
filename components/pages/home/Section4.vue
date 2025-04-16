<template>
  <section>
    <h2 class="text-4xl md:text-6xl">Projects</h2>
    <div class="mt-5 flex flex-col gap-3">
      <Carousel :items-to-show="screen === 'sm' || screen === 'md' ? 1 : 1.5" :wrap-around="true" :transition="500"
        :gap="20" v-model="activeSlide" :pauseAutoplayOnHover="true" :autoplay="slideAutoPlay">

        <Slide v-for="slide in 10" :key="slide">
          <CardsProject :index="slide - 1" :time-duration="slideAutoPlay" color="red" />
        </Slide>
      </Carousel>
    </div>
  </section>
</template>

<script lang="ts" setup>
const { screen } = useScreen()
const activeSlide = ref()
provide('activeSlide', activeSlide)
const slideAutoPlay = ref(10000)

</script>
