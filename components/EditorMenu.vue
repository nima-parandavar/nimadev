<template>
  <div>
    <BubbleMenu
      pluginKey="main"
      dir="ltr"
      :editor="editor"
      class="border rounded-lg bg-white p-0.5 inline-flex items-center gap-1"
    >
      <ToolbarsMain :editor="editor" v-show="toolbars.main" />
      <ToolbarsColor :editor="editor" v-show="toolbars.color" />
    </BubbleMenu>
  </div>
</template>

<script lang="ts" setup>
import type { Editor } from "@tiptap/vue-3";
import { BubbleMenu } from "@tiptap/vue-3";

const toolbarStore = useToolbarStore();
const { toolbars } = storeToRefs(toolbarStore);

defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
});
</script>
