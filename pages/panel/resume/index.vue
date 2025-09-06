<template>
  <div class="container mx-auto my-10">
    <form
      enctype="multipart/form-data"
      class="flex flex-col gap-5"
      @submit.prevent="uploadResume"
    >
      <label for="uploadResume">آپلود رزومه</label>
      <input type="file" accept="application/pdf" name="resume" />
      <min-button
        type="submit"
        color="green"
        :loading="loading"
        label="آپلود رزومه"
        class="w-fit"
      />
    </form>

    <min-button
      type="submit"
      color="green"
      label="دریافت رزومه"
      download
      to="/api/resume/get-resume"
      target="_blank"
      class="w-fit mt-10"
    />
  </div>
</template>

<script lang="ts" setup>
// const { data } = await useFetch("/api/resume/get-resume");
const loading = ref(false);
const { localePath } = useI18n();
async function uploadResume(e: Event) {
  const form = e.target as HTMLFormElement;
  loading.value = true;
  const { status } = await useFetch("/api/resume/upload-file", {
    method: "POST",
    body: new FormData(form),
  });
  loading.value = false;
  if (status.value === "success") {
    return await navigateTo(localePath("/panel"));
  }
}

definePageMeta({
  layout: "panel",
  middleware: ["login-required", "admin-required"],
});
</script>
