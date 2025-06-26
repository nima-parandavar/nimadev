<template>
  <Form
    :validation-schema="validations"
    @submit="submit"
    :method="method"
    ref="formHTML"
    :enctype="enctype"
  >
    <slot></slot>
  </Form>
</template>

<script lang="ts" setup>
defineProps({
  validations: { type: Object },
  method: {
    type: String as PropType<"GET" | "POST">,
    default: "GET",
    required: false,
  },
  enctype: {
    type: String as PropType<
      "application/x-www-form-urlencoded" | "multipart/form-data" | "text/plain"
    >,
    required: false,
  },
});

const emits = defineEmits<{
  (e: "submit", values: object): void;
}>();

const formHTML = ref<HTMLFormElement>();
const submit = (values: object) => {
  formHTML.value?.preventDefault;
  emits("submit", values);
};
</script>
