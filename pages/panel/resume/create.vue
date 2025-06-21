<template>
  <div>
    <div class="flex flex-col gap-5">
      <ResumeSection
        v-for="(section, index) in sections"
        :key="section.id"
        :id="section.id"
        :index="index"
      />
    </div>
    <MinButton
      variant="outline"
      label="ایجاد بخش جدید"
      size="md"
      color="black"
      class="mt-5"
      icon="lucide:plus"
      @click="resume.addNewSection"
    />
  </div>
</template>

<script lang="ts" setup>
const resume = useResumeStore();
const { sections } = storeToRefs(resume);
definePageMeta({
  layout: "admin",
  middleware: ["authenticated"],
});
</script>
