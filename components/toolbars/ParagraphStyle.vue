<template>
  <MinAdminSelection
    v-model="model"
    placeholder="paragraph style"
    :items="headings"
    text-by="label"
    value-by="value"
    :default-value="active"
  />
</template>

<script lang="ts" setup>
const props = defineProps({
  active: String,
});
const headings = [
  {
    value: 1,
    label: "Heading 1",
  },
  {
    value: 2,
    label: "Heading 2",
  },
  {
    value: 3,
    label: "Heading 3",
  },
  {
    value: "paragraph",
    label: "Paragraph",
  },
];

const model = defineModel({ type: String });

watch(
  () => props.active,
  (newVal) => {
    if (newVal !== model.value) {
      model.value = newVal;
    }
  },
  { immediate: true }
);
</script>
