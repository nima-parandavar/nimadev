<template>
  <MinForm class="w-full max-w-7xl mx-auto flex flex-col gap-5">
    <label class="w-full h-96 bg-dark rounded-3xl block" for="cover_id">
      <input type="file" name="cover" id="cover_id" class="hidden" />
    </label>

    <MinFormField label="عنوان" required name="title">
      <MinInput name="title" required />
    </MinFormField>

    <MinFormField label="اسلاگ" required name="slug">
      <MinInput name="slug" required />
    </MinFormField>

    <ClientOnly>
      <Editor />
    </ClientOnly>
  </MinForm>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['authenticated', 'only-admin'],
  layout: 'admin'
})
</script>
