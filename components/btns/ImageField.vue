<template>
  <div>
    <label class="w-full h-96 bg-bombay-300 dark:bg-black rounded-3xl flex items-center justify-center cursor-pointer"
      for="cover_id">
      <div class="flex flex-col items-center gap-3" v-show="!image">
        <Icon name="lucide:image-plus" size="70" />
        <p class="text-xl">برای انتخاب تصویر کلیک کنید</p>
      </div>
      <img v-show="image" :src="image" class="w-full h-96 rounded-3xl" />
      <input type="file" name="cover" id="cover_id" class="hidden" @change="setImage($event, $event.target?.files[0])"
        accept="image/png, image/webp, image/png" />
    </label>
    <p :class="style.error">{{ errorMessage }}</p>
    {{ value }}
  </div>
</template>

<script lang="ts" setup>
import inputConfig from '~/ui/input.config';

const props = defineProps({
  name: { type: String, required: true },
  validations: { type: [String, Object] as any, required: false }
})

const image = ref()
const previewImage = (file: File | Blob) => {
  image.value = URL.createObjectURL(file)
}

const { value, errorMessage, handleChange } = useField(() => props.name, props.validations, {})

const setImage = (e: Event, file: File | Blob) => {
  handleChange(e, true)
  previewImage(file)
  console.log(value.value)
}

const style = computed(() => {
  // @ts-ignore
  const cls = inputConfig({})

  return {
    error: cls.errorMessage()
  }
})
</script>
