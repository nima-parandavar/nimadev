<template>
  <DialogRoot v-model:open="model" :modal="true">
    <DialogPortal>
      <DialogOverlay
        class="bg-[#000] opacity-80 fixed top-0 left-0 inset-0 z-30 border-none"
      />
      <DialogContent
        class="fixed z-50 top-0 left-0 inset-0 h-screen flex flex-col justify-between backdrop-blur"
      >
        <!-- top -->
        <div
          class="w-full h-10 inline-flex flex-row-reverse items-center justify-start gap-7"
        >
          <motion.button
            :initial="{ opacity: 0.3 }"
            :while-hover="{ opacity: 1 }"
            class="disabled:cursor-not-allowed text-bombay-100"
            @click="model = false"
          >
            <Icon name="lucide:x" size="35" />
          </motion.button>
          <motion.button
            :initial="{ opacity: 0.3 }"
            :while-hover="{ opacity: 1 }"
            class="disabled:cursor-not-allowed text-bombay-100"
          >
            <Icon name="lucide:trash" size="30" />
          </motion.button>
        </div>
        <!-- middle -->
        <div
          class="flex items-center flex-row justify-between h-screen inset-0 text-white"
        >
          <motion.button
            :initial="{ opacity: 0.3 }"
            :while-hover="{ opacity: 1 }"
            class="disabled:cursor-not-allowed"
            :disabled="index === 0"
            @click="index--"
          >
            <Icon name="iconoir:nav-arrow-left" size="100" />
          </motion.button>
          <motion.div
            :initial="{ opacity: 0 }"
            :animate="{ opacity: 1 }"
            v-if="images[index].image"
            class="w-full h-[80vh]"
          >
            <img
              :src="`/api/images/${images[index].image}`"
              class="w-fit h-[80vh] mx-auto"
            />
          </motion.div>
          <motion.button
            :initial="{ opacity: 0.3 }"
            :while-hover="{ opacity: 1 }"
            class="disabled:cursor-not-allowed"
            :disabled="index + 1 === images.length"
            @click="index++"
          >
            <Icon name="iconoir:nav-arrow-right" size="100" />
          </motion.button>
        </div>
        <!-- bottom -->
        <div class="w-full mx-auto h-24">
          <ImagePreviewSlider
            :images="images"
            v-model="index"
            class="w-full max-w-xl mx-auto pb-5"
          />
        </div>
      </DialogContent>
    </DialogPortal>
  </DialogRoot>
</template>

<script setup lang="ts">
import { motion } from "motion-v";
import {
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogRoot,
} from "radix-vue";

const props = defineProps({
  images: {
    type: Array as PropType<{ _id: string; image: string }[]>,
    required: true,
  },
});

const model = defineModel({ type: Boolean });
const index = defineModel("index", {
  type: Number,
  default: 0,
});

function keyboardImageSlider(e: KeyboardEvent) {
  if (e.code === "ArrowRight" && index.value + 1 !== props.images.length) {
    index.value++;
  } else if (e.code === "ArrowLeft" && index.value !== 0) {
    index.value--;
  }
}

watch(model, (value) => {
  if (!value) {
    removeEventListener("keyup", keyboardImageSlider);
  } else {
    addEventListener("keyup", keyboardImageSlider);
  }
});
</script>
