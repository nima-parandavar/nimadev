<template>
  <div class="container mx-auto my-10">
    <min-form
      v-if="state"
      :state="state"
      class="flex flex-col gap-5"
      @submit="update"
    >
      <min-form-field label="عنوان مطلب" required name="title">
        <min-input v-model="state.title" required name="title" />
      </min-form-field>

      <min-form-field label="اسلاگ" required name="slug">
        <min-input v-model="state.slug" required name="slug" />
      </min-form-field>

      <min-form-field label="انتخاب دسته بندی" name="category">
        <select v-model="state.categoryId" name="category">
          <option v-for="cat in categories" :value="cat.id">
            {{ cat.name }}
          </option>
        </select>
      </min-form-field>

      <min-form-field label="متن" required name="content">
        <editor v-model="state.content" name="content" />
      </min-form-field>

      <min-form-field label="تصویر اصلی" required name="coverImage">
        <min-input
          v-model="state.coverImage"
          type="url"
          required
          name="coverImage"
        />
      </min-form-field>

      <min-form-field label="تگ ها" required name="tags">
        <min-input v-model="state.tags" required name="tags" />
      </min-form-field>

      <min-form-field label="کلمات کلید" required name="metaKeywords">
        <min-input v-model="state.metaKeywords" required name="metaKeywords" />
      </min-form-field>

      <min-form-field label="خلاصه مطلب" required name="metaDescription">
        <min-textarea
          v-model="state.metaDescription"
          required
          name="metaDescription"
        />
      </min-form-field>

      <min-button
        type="submit"
        color="orange"
        label="ویرایش مطلب"
        icon="i-lucide:edit"
        class="w-fit self-end"
        :loading="loading"
      />
    </min-form>
  </div>
</template>

<script lang="ts" setup>
const { localePath } = useI18n();
const route = useRoute();

const { data: categories } = await useLazyFetch("/api/categories");
const { data: state } = await useFetch(`/api/articles/${route.params.slug}`);

const loading = ref(false);
async function update() {
  loading.value = true;
  const { status } = await useFetch(`/api/articles/${route.params.slug}`, {
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
