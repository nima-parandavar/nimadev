<template>
  <div class="container mx-auto my-5">
    <min-button
      color="black"
      label="ایجاد مطلب جدید"
      icon="i-lucide:plus"
      :to="$localePath('/panel/articles/create')"
    />

    <table class="table table-fixed w-full border mt-5">
      <thead>
        <tr>
          <th class="border">عنوان مطلب</th>
          <th class="border">عملیات ها</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="article in articles">
          <td class="border px-1">{{ article.title }}</td>
          <td class="border px-1">
            <min-button
              icon="lucide:edit"
              variant="soft"
              color="orange"
              :to="$localePath(`/panel/articles/${article.slug}`)"
            />
            <min-button icon="lucide:trash" variant="soft" color="red" />
            <!-- @click="deleteItem(category.id)" -->
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts" setup>
const { data: articles } = await useFetch("/api/articles");
definePageMeta({
  layout: "panel",
  middleware: ["login-required", "admin-required"],
});
</script>
