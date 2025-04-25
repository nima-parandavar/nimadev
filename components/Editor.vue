<template>
  <div>
    <EditorMenu :editor="editor" />
    <editor-content :editor="editor"
      class="prose dark:prose-invert prose-headings:font-normal max-w-none prose-p:text-[20px] prose-a:cursor-pointer prose-code:text-left" />
  </div>
</template>

<script lang="ts" setup>
import { createLowlight, common } from 'lowlight'
import { EditorContent, Editor } from '@tiptap/vue-3'
import Blockquote from '@tiptap/extension-blockquote'
import BulletList from '@tiptap/extension-bullet-list'
import CodeBlockLowlight from '@tiptap/extension-code-block-lowlight'
import Paragraph from '@tiptap/extension-paragraph'
import TextAlign from '@tiptap/extension-text-align'
import StarterKit from '@tiptap/starter-kit'
import Heading from '@tiptap/extension-heading'
import Bold from '@tiptap/extension-bold'
import Italic from '@tiptap/extension-italic'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Typography from '@tiptap/extension-typography'

const lowlight = createLowlight(common)

const editor = new Editor({
  extensions: [
    StarterKit,
    TextAlign,
    Bold,
    Italic,
    Underline,
    Link,
    Blockquote,
    BulletList,
    Typography,
    CodeBlockLowlight.configure({
      lowlight,
      HTMLAttributes: {
        class: 'text-left',
        style: "direction:ltr"
      }
    }),
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
         یه چیزی بنویس ...
        </p>
      `,
})

onBeforeUnmount(() => {
  editor.destroy()
})
</script>
