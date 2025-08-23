<template>
  <Form
    :validation-schema="validations"
    :method="method"
    ref="formHTML"
    :enctype="enctype"
  >
    <slot></slot>
  </Form>
</template>

<script lang="ts" setup>
const props = defineProps({
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
  state: { type: Object, required: true },
});

const formHTML = ref<HTMLFormElement>();
</script>
