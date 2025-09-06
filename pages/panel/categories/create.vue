<template>
  <min-form
    :state="state"
    class="container mx-auto my-10 flex flex-col gap-3"
    @submit="create"
  >
    <min-form-field label="نام دسته بندی" required name="name">
      <min-input v-model="state.name" name="name" />
    </min-form-field>
    <min-button
      type="submit"
      :loading="loading"
      class="w-fit self-end"
      color="green"
      icon="lucide:plus"
      label="ایجاد"
    />
  </min-form>
</template>

<script lang="ts" setup>
const { localePath } = useI18n();
const state = {
  name: undefined as string | undefined,
};

const loading = ref(false);
async function create() {
  loading.value = true;
  const { status } = await useFetch("/api/categories", {
    method: "POST",
    body: state,
  });
  loading.value = false;
  if (status.value === "success") {
    return await navigateTo(localePath("/panel/categories"));
  }
}
definePageMeta({
  layout: "panel",
  middleware: ["login-required", "admin-required"],
});
</script>
