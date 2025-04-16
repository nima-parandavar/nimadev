<template>
  <div class="flex flex-col gap-10 lg:gap-28">
    <header>
      <h1 class="text-5xl lg:text-7xl">Hi, I'm <span :class="`${currentTheme}-gradient`">Nima
          Parandavar</span></h1>
      <p class="text-2xl mt-5 lg:text-3xl lg:mt-7">A <b>full stack</b> developer and <b>UI/UX designer</b></p>
    </header>
    <PagesHomeSection1 />
    <PagesHomeSection2 />
    <PagesHomeSection3 />
    <PagesHomeSection4 />

    <section></section>

  </div>
</template>

<script lang="ts" setup>
const { currentTheme } = storeToRefs(themeModeStore())
</script>
