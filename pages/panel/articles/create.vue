<template>
  <div>
    <label
      for="image"
      class="w-full h-96 bg-bombay-200 block rounded-xl max-w-5xl mx-auto cursor-pointer"
    >
      <input id="image" name="image" type="file" class="hidden" />
    </label>
    <Editor name="editor" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
  middleware: ["authenticated"],
});
</script>
