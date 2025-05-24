<template>
  <div>
    <Editor name="editor" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
  middleware: ["authenticated"],
});
</script>
