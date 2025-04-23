<template>
  <div>
    <MinButton label="ایجاد پست جدید" icon="i-lucide:plus" variant="soft" size="md" color="green"
      :to="$localeRoute('/__nuxt_site_management/blog/create')" />
  </div>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['authenticated', 'only-admin'],
  layout: 'admin'
})
const { } = await useFetch('/api/articles', {
  method: 'get',
})
</script>
