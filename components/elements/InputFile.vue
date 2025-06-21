<template>
  <div>
    <label :for="`${name}__id`" :class="style.root">
      <span :class="style.trigger">
        <span v-if="label">{{ label }}</span>
        <Icon v-if="icon" :name="icon" size="24" />
      </span>
      <input
        type="file"
        :name="name"
        :id="`${name}__id`"
        class="hidden"
        :accept="acceptExtension"
        @input="imageAdd"
        :multiple="multiple"
      />
    </label>
  </div>
</template>

<script lang="ts" setup>
import { twMerge } from "tailwind-merge";
import inputFileConfig from "~/ui/inputFile.config";

const { files, handleFileInput } = useFileStorage({ clearOldFiles: true });

defineProps({
  name: { type: String, required: true },
  icon: String,
  label: String,
  acceptExtension: String,
  multiple: Boolean,
});

const emits = defineEmits(["onImageSelect"]);

const imageAdd = (event: Event) => {
  handleFileInput(event), emits("onImageSelect", files.value);
};

const style = computed(() => {
  const cls = inputFileConfig({});
  return {
    root: twMerge(cls.root()),
    input: cls.input(),
    trigger: cls.trigger(),
  };
});
</script>
