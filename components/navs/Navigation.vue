<template>
  <nav
    class="flex flex-row items-center justify-between gap-5 h-auto w-full px-5 py-2 bg-[#fdfaf6] dark:bg-[#1a1a1d] transition-shadow"
    :class="{ 'shadow-sm': isScrolled }">
    <div class="inline-flex items-center justify-start">
      <h1 class="text-2xl font-semibold">LOGO</h1>
      <div class="inline-flex items-center justify-start gap-1 ml-5" v-if="isDesktop">
        <MinButton variant="link" color="black" to="/blog" :label="$t('blog')" icon="iconoir:post" size="md" />
        <!-- <MinButton variant="link" color="black" to="/courses" label="Courses" icon="iconoir:code" size="md" /> -->
        <MinButton variant="link" color="black" to="/contact" :label="$t('contact')" icon="iconoir:contactless"
          size="md" />
        <MinButton variant="link" color="black" to="/resume" :label="$t('aboutMe')" icon="iconoir:google-docs"
          size="md" />
        <MinButton variant="link" color="black" to="/projects" :label="$t('project')" icon="iconoir:box" size="md" />
      </div>
    </div>
    <div class="inline-flex items-center justify-start">
      <BtnsAccount class="mr-2" v-if="loggedIn" v-show="!isMobileOrTablet" />
      <BtnsSwitchColorMode />
      <BtnsChangeTheme />
      <BtnsSwitchLanguage />
      <MinDialog v-model="openSideBar" side="left" v-if="isMobileOrTablet">
        <MinButton variant="link" color="black" icon="i-lucide:menu" size="md" />
      </MinDialog>
    </div>
  </nav>
</template>

<script lang="ts" setup>
const { isMobileOrTablet, isDesktop } = useScreen()
const openSideBar = ref(false)
const isScrolled = ref(false)
const scrolledScreen = () => {
  isScrolled.value = window.scrollY > 50
}

const { loggedIn } = useUserSession()

onMounted(() => {
  window.addEventListener('scroll', scrolledScreen)
})
</script>
