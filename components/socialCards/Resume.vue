<template>
  <div class="w-full h-full bg-[#EB8317] rounded-3xl flex items-center justify-between flex-col gap-7 p-10">
    <Icon name="i-akar-icons:book" class="text-6xl self-start text-white" />
    <div class="text-white text-xl font-semibold  text-justify p-4 bg-white/20 rounded-xl">
      <p>Hey there! 👋 I'm Nima, a web developer who loves building awesome websites!</p>
      <br>
      <p>I work with Django for the backend and Vue.js for the frontend—combining them to create smooth, dynamic web
        experiences.</p>
    </div>

    <NuxtLink to="#" class="inline-flex items-center justify-center gap-3 text-[#EB8317] self-end">
      <span class="bg-white px-12 py-2 rounded-full inline-flex items-center justify-center gap-1">Download CV</span>
      <span class="bg-white rounded-[50%] p-3 w-10 h-10 inline-flex items-center justify-center">
        <Icon name="i-lucide:download" />
      </span>
    </NuxtLink>
  </div>
</template>
