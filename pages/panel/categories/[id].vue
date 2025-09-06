<template>
  <min-form
    v-if="state"
    :state="state"
    class="container mx-auto my-10 flex flex-col gap-3"
    @submit="update"
  >
    <min-form-field label="نام دسته بندی" required name="name">
      <min-input v-model="state.name" name="name" />
    </min-form-field>
    <min-button
      type="submit"
      :loading="loading"
      class="w-fit self-end"
      color="orange"
      icon="lucide:edit"
      label="ویرایش"
    />
  </min-form>
</template>

<script lang="ts" setup>
const route = useRoute();

const { data: state } = await useFetch(`/api/categories/${route.params.id}`);

const loading = ref(false);
async function update() {
  loading.value = true;
  const { status } = await useFetch(`/api/categories/${route.params.id}`, {
    method: "PUT",
    body: state,
  });
  loading.value = false;
  if (status.value === "success") {
    console.log("SUCCESS");
  }
}
definePageMeta({
  layout: "panel",
  middleware: ["login-required", "admin-required"],
});
</script>
