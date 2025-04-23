<template>
  <div>
    <EditorMenu :editor="editor" />
    <editor-content :editor="editor"
      class="prose dark:prose-invert prose-headings:font-normal max-w-none prose-p:text-[20px]" />
  </div>
</template>

<script lang="ts" setup>
import { EditorContent, Editor } from '@tiptap/vue-3'
import Paragraph from '@tiptap/extension-paragraph'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'


const editor = new Editor({
  extensions: [
    StarterKit,
    TextAlign,
    Bold,
    Italic,
    Underline,
    Link,
    Heading.configure({
      levels: [1, 2, 3],
      HTMLAttributes: {
        class: 'hover:bg-bombay-100 dark:hover:bg-bombay-400/30 transition-colors py-2 px-1 rounded-md',
      }
    }),
    Paragraph.configure({
      HTMLAttributes: {
        class: 'hover:bg-bombay-100 dark:hover:bg-bombay-400/30 transition-colors py-2 px-1 rounded-md'
      }
    }),
  ],
  editorProps: {
    attributes: {
      class: 'outline-none',
    }
  },
  content: `
        <p>
         سلام من نیما هستم
        </p>
      `,
})

onBeforeUnmount(() => {
  editor.destroy()
})
</script>
