<template>
  <div class="container mx-auto my-5">
    <min-button
      color="black"
      label="ایجاد دسته بندی جدید"
      icon="i-lucide:plus"
      :to="$localePath('/panel/categories/create')"
    />

    <table class="table table-fixed w-full border mt-5">
      <thead>
        <tr>
          <th class="border">نام دسته بندی</th>
          <th class="border">عملیات ها</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="category in categories">
          <td class="border px-1">{{ category.name }}</td>
          <td class="border px-1">
            <min-button
              icon="lucide:edit"
              variant="soft"
              color="orange"
              :to="$localePath(`/panel/categories/${category.id}`)"
            />
            <min-button
              icon="lucide:trash"
              variant="soft"
              color="red"
              @click="deleteItem(category.id)"
            />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const { data: categories, refresh } = await useFetch("/api/categories", {
  method: "get",
});

async function deleteItem(id: number) {
  const { status } = await useLazyFetch(`/api/categories/${id}`, {
    method: "DELETE",
  });
  if (status.value === "success") {
    return await refresh();
  } else if (status.value === "error") {
    return console.error("ERROR");
  }
}
definePageMeta({
  layout: "panel",
});
</script>
