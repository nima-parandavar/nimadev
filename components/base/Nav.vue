<template>
  <nav class="w-full h-16 flex flex-row items-center justify-between px-6">
    <MinInlineDiv>

    </MinInlineDiv>

    <MinInlineDiv reverse>
      <MinButton :label="t('menu.login')" icon="i-lucide-log-in" />
      <BtnsSwitchLang />
      <BtnsSwitchColorMode />
      <BtnsChangeTheme />
      <MinButton :label="t('menu.blog')" icon="i-lucide-newspaper" variant="soft" />
      <MinButton :label="t('menu.courses')" icon="i-lucide-square-dashed-bottom-code" variant="soft" />
    </MinInlineDiv>


  </nav>
</template>

<script lang="ts" setup>
const { $t: t, $tc: tc } = useNuxtApp()

</script>
