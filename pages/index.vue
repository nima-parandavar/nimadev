<template>
  <div class="flex flex-col gap-20">
    <header>
      <h1 class="text-5xl lg:text-7xl">Hi, I'm <span :class="`${currentTheme}-gradient`">Nima
          Parandavar</span></h1>
      <p class="text-2xl mt-5 lg:text-3xl lg:mt-7">A <b>full stack</b> developer and <b>UI/UX designer</b></p>
    </header>

    <section>
      <div class="grid grid-cols-12 grid-rows-2 h-[1000px] gap-3">
        <SocialCardsMe class="col-start-1 col-end-4 row-start-1 row-end-2" />
        <div class="col-start-4 col-end-8 row-start-1 row-end-2 grid grid-cols-2 grid-rows-2 gap-3">
          <SocialCardsDribbble class="col-start-1 col-end-3 row-start-1 row-end-2" />
          <SocialCardsLinkedin class="col-start-1 col-end-3 row-start-2 row-end-3" />
        </div>
        <SocialCardsInstagram class="col-start-8 col-end-13 row-start-1 row-end-2" />
        <SocialCardsGithub class="col-start-1 col-end-9 row-start-2 row-end-3" />
        <SocialCardsResume class="col-start-9 col-end-13 row-start-2 row-end-3" />
      </div>
    </section>

    <section></section>
  </div>
</template>

<script lang="ts" setup>
import { SocialCardsResume } from '#components';

const { currentTheme } = storeToRefs(themeModeStore())
</script>
