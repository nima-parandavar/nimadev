<template>
  <div>
    <!-- dialogs -->
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

          <MinInputFile
            name="upload-file"
            icon="i-lucide:cloud-upload"
            label="یک تصویر انتخاب کنید"
            accept-extension=".jpg, .png, .webp"
            @on-image-select="setImage"
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
    <ModalsImagePreview
      v-if="images"
      v-model="imagePreview"
      v-model:index="currentImageIndex"
      :images="images"
    />
    <!-- end dialogs -->

    <div
      v-if="images"
      class="flex flex-row items-start justify-between gap-3 mt-7 flex-wrap"
    >
      <CardsImageGrid
        v-for="(image, index) in images"
        :key="image._id"
        :url="image.image"
        @click="openImagePreview(index)"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
const imagePreview = ref(false);
const currentImageIndex = ref<number>(0);
const openImagePreview = (index: number) => {
  currentImageIndex.value = index;
  imagePreview.value = true;
};

const { data: images, refresh: imagesRefresh } =
  await useLazyFetch("/api/images");

const imageFiles = ref([]);
const setImage = (files: any) => {
  imageFiles.value = files;
};

const loading = ref(false);
const uploadFile = async () => {
  loading.value = true;
  const { status } = await useFetch("/api/images/create", {
    method: "POST",
    body: { image: imageFiles.value[0] },
  });
  loading.value = false;
  if (status.value === "success") {
    await imagesRefresh();
  }
};

definePageMeta({
  layout: "admin",
  middleware: ["authenticated"],
});
</script>
