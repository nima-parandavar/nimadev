<template>
  <motion.div
    class="inline-flex items-center gap-1"
    :animate="animation.animate"
    :exit="animation.exit"
    :initial="animation.initial"
  >
    <BtnsToggle
      icon="i-iconoir:nav-arrow-left"
      @click="toolbarStore.toggleToolbar('color', 'main')"
    />

    <BtnsToggle
      @click="setColor('#45474b')"
      :state="editor.isActive('textStyle', { color: '#45474b' })"
      ><span class="rounded-full bg-black w-6 h-6"></span
    ></BtnsToggle>
    <BtnsToggle
      @click="setColor('#008dda')"
      :state="editor.isActive('textStyle', { color: '#008dda' })"
      ><span class="rounded-full bg-blue-400 w-6 h-6"></span
    ></BtnsToggle>
    <BtnsToggle
      @click="setColor('#d14d72')"
      :state="editor.isActive('textStyle', { color: '#d14d72' })"
      ><span class="rounded-full bg-red-400 w-6 h-6"></span
    ></BtnsToggle>
    <BtnsToggle
      @click="setColor('#55ad9b')"
      :state="editor.isActive('textStyle', { color: '#55ad9b' })"
      ><span class="rounded-full bg-green-400 w-6 h-6"></span
    ></BtnsToggle>
    <BtnsToggle
      @click="setColor('#ff7d29')"
      :state="editor.isActive('textStyle', { color: '#ff7d29' })"
      ><span class="rounded-full bg-yellow-400 w-6 h-6"></span
    ></BtnsToggle>
    <BtnsToggle
      @click="setColor('#86469c')"
      :state="editor.isActive('textStyle', { color: '#86469c' })"
      ><span class="rounded-full bg-purple-400 w-6 h-6"></span
    ></BtnsToggle>
  </motion.div>
</template>

<script lang="ts" setup>
import type { Editor } from "@tiptap/vue-3";
import { motion } from "motion-v";
const toolbarStore = useToolbarStore();

const props = defineProps({
  editor: { type: Object as PropType<Editor>, required: true },
  animation: { type: Object, required: true },
});

const setColor = (color: string) => {
  props.editor.chain().focus().setColor(color).run();
  toolbarStore.toggleToolbar("color", "main");
};
</script>
