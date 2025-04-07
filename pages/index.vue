<template>
  <div>
    <MinDialog v-model="open" side="bottom">
      <MinButton label="open" size="md" @clicl="open = true" />
    </MinDialog>
  </div>
</template>

<script lang="ts" setup>
const open = ref(true)
</script>
