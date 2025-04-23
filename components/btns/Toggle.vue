<template>
  <button :class="{ 'bg-keppel-100 text-keppel-400 dark:bg-keppel-400 dark:text-keppel-100': activeClass }"
    class="inline-flex items-center justify-center bg-bombay-100 dark:bg-bombay-400 w-9 h-9 rounded-sm  text-[20px]">
    <Icon :name="icon" />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  icon: String,
  activeClass: Boolean
})
</script>

<style lang="scss"></style>