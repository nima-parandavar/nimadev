<template>
  <MdEditor v-model="model" language="fa_ir" noUploadImg />
</template>

<script setup lang="ts">
import { MdEditor } from "md-editor-v3";
import "md-editor-v3/lib/style.css";
import { en_US } from "md-editor-v3";

const model = defineModel({ type: String, required: true });
</script>
