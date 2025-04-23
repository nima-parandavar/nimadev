<template>
  <div>

  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['authenticated', 'only-admin'],
  layout: 'admin'
})
</script>
