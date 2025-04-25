<template>
  <BubbleMenu v-if="editor" :editor="editor">
    <ToolbarRoot class=" bg-bombay-400 dark:bg-bombay-100 rounded-md p-1 inline-flex items-center justify-start gap-2">
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
        <BtnsToggle @click="editor.chain().focus().toggleBlockquote().run()"
          :active-class="editor.isActive('blockquote')" icon="lucide:text-quote" />
      </div>
      <ToolbarSeparator />
      <div class="inline-flex items-center justify-start gap-1">
        <BtnsToggle @click="editor.chain().toggleBulletList().run()" :active-class="editor.isActive('bulletList')"
          icon="lucide:list" />
        <BtnsToggle @click="editor.chain().toggleCodeBlock().run()" :active-class="editor.isActive('codeBlock')"
          icon="lucide:code" />
      </div>
      <ToolbarSeparator />
      <div class="inline-flex items-center justify-start gap-1">
        <MinDialog side="bottom" v-model="openLinkDialog">
          <BtnsToggle @click="openDialog" :active-class="editor.isActive('link')" icon="i-lucide:link" />
          <template #content>
            <MinFormField label="لینک وب سایت" name="url">
              <MinInput type="url" name="url" placeholder="مثلا www.google.com" v-model="url"
                :validations="yup.string().url('URL is not validate')" />
            </MinFormField>
            <MinButton size="md" label="اعمال" class="mt-10 float-end" @click="setLink" />
          </template>
        </MinDialog>
        <!-- TODO devlop it -->
        <BtnsToggle icon="lucide:image-plus" />
      </div>
    </ToolbarRoot>
  </BubbleMenu>
</template>

<script lang="ts" setup>
import * as yup from 'yup'
import {
  ToolbarRoot,
  ToolbarSeparator,
} from 'radix-vue'
import { type Editor, BubbleMenu } from '@tiptap/vue-3'



const props = defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true
  }
})

const url = ref<string>('')
const openLinkDialog = ref(false)

const openDialog = () => {
  const previousUrl = props.editor.getAttributes('link').href
  url.value = previousUrl
  openLinkDialog.value = true
}

function setLink() {
  console.log(url.value)
  if (url.value === null) {
    openLinkDialog.value = false
    return
  }

  if (url.value === '') {
    props.editor.chain().focus().extendMarkRange('link').unsetLink().run()
    openLinkDialog.value = false
    return
  }

  props.editor.chain().focus().extendMarkRange('link').setLink({ href: url.value }).run()
  url.value = ''
  openLinkDialog.value = false

}

</script>
