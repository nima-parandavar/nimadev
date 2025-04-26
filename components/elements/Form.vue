<template>
  <Form :validation-schema="validations" @submit="submit" :method="method">
    <slot></slot>
    <!-- {{ values }} -->
  </Form>
</template>

<script lang="ts" setup>
import type { PropType } from 'vue';

defineProps({
  validations: { type: Object },
  method: { type: String as PropType<'GET' | 'POST'>, default: 'GET', required: false }
})

const emits = defineEmits<{
  (e: 'submit', values: object): void
}>()

const submit = (values: object) => {
  emits('submit', values)
}

</script>
