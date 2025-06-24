<template>
  <div class="flex flex-col md:flex-row md:justify-start md:items-start">
    <h3
      class="text-4xl md:text-5xl w-fit md:w-full md:max-w-xs mb-5 opacity-50"
    >
      {{ title }}
    </h3>
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
defineProps({
  title: { type: String },
});
</script>
