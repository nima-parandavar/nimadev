<template>
  <div v-if="editor">
    {{ toolbar }}
    <EditorMenu :editor="editor" />
    <editor-content
      :editor="editor"
      class="prose dark:prose-invert prose-headings:font-normal prose-p:text-[20px] prose-a:cursor-pointer prose-code:text-left w-full max-w-5xl mx-auto p-3 rounded-md"
    />
  </div>
</template>

<script lang="ts" setup>
import { createLowlight, common } from "lowlight";
import { EditorContent, Editor } from "@tiptap/vue-3";
import Blockquote from "@tiptap/extension-blockquote";
import BulletList from "@tiptap/extension-bullet-list";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Paragraph from "@tiptap/extension-paragraph";
import TextAlign from "@tiptap/extension-text-align";
import StarterKit from "@tiptap/starter-kit";
import Heading from "@tiptap/extension-heading";
import Bold from "@tiptap/extension-bold";
import Italic from "@tiptap/extension-italic";
import Underline from "@tiptap/extension-underline";
import Link from "@tiptap/extension-link";
import Typography from "@tiptap/extension-typography";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";

const props = defineProps({
  name: { type: String, required: true },
  initialContext: { type: String, required: false },
});

const emit = defineEmits(["update:modelValue"]);
const lowlight = createLowlight(common);
const editor = ref<Editor>();
const { handleChange } = useField(() => props.name, undefined, {
  initialValue: props.initialContext,
});

onMounted(() => {
  editor.value = new Editor({
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
          class: "text-left",
          style: "direction:ltr",
        },
      }),
      Heading.configure({
        levels: [1, 2, 3],
        HTMLAttributes: {
          class:
            "hover:bg-bombay-100 dark:hover:bg-bombay-400/30 transition-colors py-2 px-1 rounded-md",
        },
      }),
      Paragraph.configure({
        HTMLAttributes: {
          class:
            "hover:bg-bombay-100 dark:hover:bg-bombay-400/30 transition-colors py-2 px-1 rounded-md",
        },
      }),
      TextStyle,
      Color,
    ],

    editorProps: {
      attributes: {
        class: "outline-none",
      },
    },
    onUpdate() {
      if (editor.value) {
        handleChange(editor.value.getHTML());
      }
    },
    content: props.initialContext
      ? props.initialContext
      : "<p>چیزی بنویس ...</p>",
  });
});

onBeforeUnmount(() => {
  editor.value?.destroy();
});
</script>
