<template></template>

<script lang="ts" setup>
definePageMeta({
  layout: "panel",
  middleware: ["login-required", "admin-required"],
});
</script>
