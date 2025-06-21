<template>
  <Carousel :autoplay="false" :items-to-show="6" :gap="7" v-model="model">
    <Slide v-for="slide of images.length" :key="slide">
      <div
        class="w-20 h-20 rounded-md flex items-center justify-center cursor-pointer"
        :class="{
          'bg-blue-400': slide === model,
          'bg-blue-200': slide !== model,
        }"
        @click="model = slide"
      >
        <p>{{ slide }}</p>
        <p>/</p>
        <p>{{ images.length }}</p>
      </div>
    </Slide>
  </Carousel>
</template>

<script lang="ts" setup>
defineProps({
  images: {
    type: Array as PropType<{ _id: string; image: string }[]>,
    required: true,
  },
});

const model = defineModel({ type: Number, required: true });
</script>
