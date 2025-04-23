<template>
  <BubbleMenu v-if="editor" :editor="editor">
    <ToolbarRoot
      class="w-full h-auto bg-bombay-400 dark:bg-bombay-100 rounded-md p-1 inline-flex items-center justify-start gap-2">
      <div class="inline-flex items-center justify-start gap-1">
        <BtnsToggle @click="editor.chain().focus().toggleHeading({ level: 1 }).run()"
          :active-class="editor.isActive('heading', { level: 1 })" icon="i-lucide:heading-1" />
        <BtnsToggle @click="editor.chain().focus().toggleHeading({ level: 2 }).run()"
          :active-class="editor.isActive('heading', { level: 2 })" icon="i-lucide:heading-2" />
        <BtnsToggle @click="editor.chain().focus().toggleHeading({ level: 3 }).run()"
          :active-class="editor.isActive('heading', { level: 3 })" icon="i-lucide:heading-3" />
      </div>
      <ToolbarSeparator />
      <div class="inline-flex items-center justify-start gap-1">
        <BtnsToggle @click="editor.chain().focus().toggleBold().run()" :active-class="editor.isActive('bold')"
          icon="i-lucide:bold" />
        <BtnsToggle @click="editor.chain().focus().toggleItalic().run()" :active-class="editor.isActive('italic')"
          icon="i-lucide:italic" />
        <BtnsToggle @click="editor.chain().focus().toggleUnderline().run()" :active-class="editor.isActive('underline')"
          icon="i-lucide:underline" />
      </div>
      <ToolbarSeparator />
      <div class="inline-flex items-center justify-start gap-1">
        <MinDialog side="bottom" v-model="openLinkDialog">
          <BtnsToggle @click="" :active-class="true" icon="i-lucide:link" />
          <template #content>
            <MinFormField label="لینک وب سایت" name="url">
              <MinInput type="url" name="url" placeholder="مثلا www.google.com" />
            </MinFormField>
            <MinButton size="md" label="اعمال" class="mt-10" />
          </template>
        </MinDialog>
      </div>
    </ToolbarRoot>
  </BubbleMenu>
</template>

<script lang="ts" setup>
import {
  ToolbarRoot,
  ToolbarSeparator,
} from 'radix-vue'
import { type Editor, BubbleMenu } from '@tiptap/vue-3'

const openLinkDialog = ref(false)

defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true
  }
})



</script>
