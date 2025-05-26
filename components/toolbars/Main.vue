<template>
  <motion.div
    class="inline-flex items-center gap-1 w-full"
    :animate="animation.animate"
    :exit="animation.exit"
    :initial="animation.initial"
  >
    <BtnsToggle
      icon="i-lucide:italic"
      @click="editor.chain().focus().toggleItalic().run()"
      :state="editor.isActive('italic')"
    />
    <BtnsToggle
      icon="i-lucide:underline"
      @click="editor.chain().focus().toggleUnderline().run()"
      :state="editor.isActive('underline')"
    />
    <BtnsToggle
      icon="i-lucide:bold"
      @click="editor.chain().focus().toggleBold().run()"
      :state="editor.isActive('bold')"
    />

    <BtnsToggle
      icon="i-lucide:quote"
      @click="editor.chain().focus().toggleBlockquote().run()"
      :state="editor.isActive('blockquote')"
    />
    <BtnsToggle
      icon="i-lucide:code-xml"
      @click="editor.chain().focus().toggleCode().run()"
      :state="editor.isActive('code')"
    />
    <BtnsToggle @click="toolbarStore.toggleToolbar('main', 'color')">
      <Icon name="i-lucide:paintbrush-vertical" class="text-[19px]" />
      <Icon name="i-iconoir:nav-arrow-right" class="text-[19px]" />
    </BtnsToggle>
    <MinDivider />
    <ToolbarsParagraphStyle
      v-model="selectedParagraph"
      :active="activeParagraph"
    />
    <MinDivider />
    <BtnsToggle
      icon="i-lucide:list"
      @click="editor.chain().focus().toggleBulletList().run()"
      :state="editor.isActive('bulletList')"
    />
    <BtnsToggle
      icon="i-lucide:list-ordered"
      @click="editor.chain().focus().toggleOrderedList().run()"
      :state="editor.isActive('orderedList')"
    />
    <MinDivider />
  </motion.div>
</template>

<script lang="ts" setup>
import type { Editor } from "@tiptap/vue-3";
import { motion } from "motion-v";
const selectedParagraph = ref();
const props = defineProps({
  editor: { type: Object as PropType<Editor>, required: true },
  animation: { type: Object, required: true },
});

const toolbarStore = useToolbarStore();

watch(selectedParagraph, (value) => {
  if ([1, 2, 3].includes(value)) {
    props.editor.chain().focus().setHeading({ level: value }).run();
  } else {
    props.editor.chain().focus().setParagraph().run();
  }
});

const activeParagraph = computed(() => {
  const editor = props.editor;
  return editor.isActive("heading", { level: 1 })
    ? 1
    : editor.isActive("heading", { level: 2 })
      ? 2
      : editor.isActive("heading", { level: 3 })
        ? 3
        : editor.isActive("paragraph")
          ? "paragraph"
          : null;
});
</script>
