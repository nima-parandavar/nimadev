<template>
  <div>
    <MinDialog side="center">
      <MinButton
        color="black"
        variant="outline"
        label="آپلود تصویر"
        size="md"
        icon="i-lucide:upload"
      />
      <template #content>
        <div class="flex flex-col items-start gap-5">
          <h1 class="text-right text-2xl self-end">آپلود تصویر جدید</h1>
          <input
            type="file"
            accept="png, jpeg, jpg, webp"
            @change="handleFileInput"
          />
          <MinButton
            label="آپلود"
            class="w-full"
            size="md"
            color="black"
            :loading="loading"
            @click="uploadFile"
          />
        </div>
      </template>
    </MinDialog>
  </div>
</template>

<script lang="ts" setup>
import type { ImageDocument } from "~/server/types/image";

const { files, handleFileInput } = useFileStorage({ clearOldFiles: true });
const loading = ref(false);
const uploadFile = async () => {
  loading.value = true;
  const { status, data } = await useFetch("/api/images/create", {
    method: "POST",
    body: { image: files.value[0] },
  });
  loading.value = false;
  if (status.value === "success") {
    console.log((data.value as ImageDocument)?._id);
  }
};

definePageMeta({
  layout: "admin",
  middleware: ["authenticated"],
});
</script>
