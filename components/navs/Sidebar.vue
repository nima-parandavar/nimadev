<template>
  <aside class="flex flex-col justify-between gap-5 h-full">
    <div class="flex flex-col gap-3 items-start">
      <MinButton
        variant="link"
        color="black"
        to="/blog"
        :label="$t('blog')"
        icon="iconoir:post"
        size="md"
      />
      <MinButton
        variant="link"
        color="black"
        :to="$localePath('/resume')"
        :label="$t('aboutMe')"
        icon="iconoir:google-docs"
        size="md"
      />
    </div>
    <div>
      <BtnsSwitchColorMode />
      <BtnsChangeTheme />
      <BtnsSwitchLanguage />
    </div>
  </aside>
</template>

<script lang="ts" setup></script>
