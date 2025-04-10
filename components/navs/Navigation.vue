<template>
  <nav class="flex flex-row items-center justify-between gap-5 h-auto w-full px-5 py-2">
    <div class="inline-flex items-center justify-start">
      <h1 class="text-2xl font-semibold">LOGO</h1>
      <div class="inline-flex items-center justify-start gap-1 ml-5" v-if="isDesktop">
        <MinButton variant="link" color="black" to="/blog" label="Blog" icon="iconoir:post" size="md" />
        <!-- <MinButton variant="link" color="black" to="/courses" label="Courses" icon="iconoir:code" size="md" /> -->
        <MinButton variant="link" color="black" to="/contact" label="Contact" icon="iconoir:contactless" size="md" />
        <MinButton variant="link" color="black" to="/resume" label="About me" icon="iconoir:google-docs" size="md" />
        <MinButton variant="link" color="black" to="/projects" label="Projects" icon="iconoir:box" size="md" />
      </div>
    </div>
    <div class="inline-flex items-center justify-start">
      <BtnsSwitchColorMode />
      <BtnsChangeTheme />
      <MinButton icon="lucide:languages" color="auto" size="md" variant="soft" v-if="isDesktop" />
      <MinButton label="Log in" icon="lucide:log-in" color="auto" size="md" v-if="isDesktop" />
      <MinDialog v-model="openSideBar" side="left" v-if="isMobileOrTablet">
        <MinButton variant="link" color="black" icon="i-lucide:menu" size="md" />
      </MinDialog>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { isMobileOrTablet, isDesktop } = useScreen()
const openSideBar = ref(false)
</script>
