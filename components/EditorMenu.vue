<template>
  <div>
    <BubbleMenu
      dir="ltr"
      :editor="editor"
      class="border rounded-lg bg-white/50 backdrop-blur p-0.5 inline-flex items-center gap-1 transition-all w-auto"
    >
      <AnimatePresence>
        <ToolbarsMain
          v-show="toolbars.main"
          :editor="editor"
          key="main"
          :animation="animation"
        />
      </AnimatePresence>

      <AnimatePresence>
        <ToolbarsColor
          v-show="toolbars.color"
          :editor="editor"
          key="color"
          :animation="animation"
        />
      </AnimatePresence>
    </BubbleMenu>
  </div>
</template>

<script lang="ts" setup>
import { AnimatePresence } from "motion-v";
import type { Editor } from "@tiptap/vue-3";
import { BubbleMenu } from "@tiptap/vue-3";

const animation = {
  initial: { opacity: 0, x: -10 },
  animate: { opacity: 1, x: 0 },
  exit: { opacity: 0, x: 10 },
};

const toolbarStore = useToolbarStore();
const { toolbars } = storeToRefs(toolbarStore);

defineProps({
  editor: {
    type: Object as PropType<Editor>,
    required: true,
  },
});
</script>
