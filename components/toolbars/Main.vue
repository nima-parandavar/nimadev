<template>
  <div class="inline-flex items-center gap-1">
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
    <BtnsToggle @click="toolbarStore.toggleToolbar('main', 'color')">
      <Icon name="i-lucide:paintbrush-vertical" class="text-2xl" />
      <Icon name="i-iconoir:nav-arrow-right" />
    </BtnsToggle>
    <MinDivider />
  </div>
</template>

<script lang="ts" setup>
import type { Editor } from "@tiptap/vue-3";
const toolbarStore = useToolbarStore();

defineProps({
  editor: Object as PropType<Editor>,
});
</script>
