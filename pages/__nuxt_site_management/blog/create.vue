<template>
  <MinForm class="w-full max-w-7xl mx-auto flex flex-col gap-5" @submit="create" method="POST"
    enctype="multipart/form-data" ref="form">
    <MinButton label="ذخیره پست" icon="lucide:save" size="md" class="w-fit" variant="soft" color="green"
      type="submit" />

    <BtnsImageField name="cover" />

    <MinFormField label="عنوان" required name="title">
      <MinInput name="title" required />
    </MinFormField>

    <MinFormField label="اسلاگ" required name="slug">
      <MinInput name="slug" required />
    </MinFormField>

    <MinFormField name="tags" label="کلامت کلیدی" help="حداقل سه کلمه کلیدی قرار دهید">
      <MinTagInput name="tags" />
    </MinFormField>

    <MinSwitch name="status" label="وضعیت انتشار" />

    <Editor name="body" />

  </MinForm>
</template>

<script lang="ts" setup>
definePageMeta({
  middleware: ['authenticated', 'only-admin'],
  layout: 'admin'
})

const form = ref<HTMLFormElement>()


const create = async (value: object) => {
  const formData = new FormData()
  Object.entries(value).forEach(([key, value_]) => {
    if (value_) {
      formData.append(key, value_)
    }
  })
  const { data } = await useFetch('/api/articles/create', {
    method: 'POST',
    body: formData
  })
}
</script>
