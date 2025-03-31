<template>
  <nav class="flex flex-row items-center justify-between gap-5 h-auto w-full px-5 py-2">
    <div class="flex flex-row items-center justify-start gap-3">
      <h1 class="font-semibold text-2xl">LOGO</h1>
      <MinButton label="Blog" icon="i-iconoir:post" variant="link" size="md" />
      <MinButton label="Courses" icon="i-streamline:quality-education" variant="link" size="md" />
      <MinButton label="Resume" icon="i-lucide:container" variant="link" size="md" />
      <MinButton label="Contact" icon="i-lucide:contact-round" variant="link" size="md" />
    </div>
    <div class="flex flex-row items-center justify-start">
      <BtnsChangeTheme />
      <BtnsSwitchColorMode />
      <MinButton size="md" variant="soft" icon="i-lucide:languages" />
      <MinButton size="md" variant="solid" label="login" icon="i-lucide:log-in" />
    </div>
  </nav>
</template>

<script lang="ts" setup>

</script>
