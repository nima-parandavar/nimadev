<template>
  <div>
    <MinButton
      icon="i-lucide:plus"
      color="black"
      size="xl"
      variant="soft"
      class="fixed bottom-10 left-10"
      :to="$localePath('/panel/articles/create')"
    />
    <div></div>
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  layout: "admin",
  middleware: ["authenticated"],
});
</script>
