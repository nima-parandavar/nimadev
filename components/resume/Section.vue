<template>
  <motion.div
    v-if="sections"
    :initial="{ opacity: 0, scale: 0.8 }"
    :animate="{ opacity: 1, scale: 1 }"
    :exit="{ opacity: 0, scale: 0.8 }"
  >
    <div class="mb-3 inline-flex items-center justify-start">
      <MinButton
        class="cursor-move"
        icon="lucide:menu"
        variant="soft"
        color="blue"
      />
      <MinButton
        icon="lucide:trash"
        variant="soft"
        color="red"
        @click="resume.removeSection(id)"
      />
    </div>
    <div
      class="border-2 border-dashed p-5 border-bombay-200 hover:border-bombay-300 transition-colors rounded-3xl flex flex-row justify-between gap-5"
    >
      <div class="w-full">
        <MinFormField label="عنوان" name="faTitle" dir="ltr">
          <MinInput
            v-model="sections[index].title.fa"
            name="enTitle"
            color="auto"
            class="w-full"
            dir="rtl"
          />
        </MinFormField>
      </div>

      <div class="w-full">
        <MinFormField label="Title" name="enTitle" dir="ltr">
          <MinInput
            v-model="sections[index].title.en"
            name="enTitle"
            color="auto"
            class="w-full"
            dit="rtl"
          />
        </MinFormField>
      </div>
    </div>
  </motion.div>
</template>

<script lang="ts" setup>
import { motion } from "motion-v";
const resume = useResumeStore();
const { sections } = storeToRefs(resume);

defineProps({
  id: { type: String, required: true },
  index: { type: Number, required: true },
});
</script>
