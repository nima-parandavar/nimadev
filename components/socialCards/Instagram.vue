<template>
  <div class="bg-[#6633FF] h-full w-full rounded-3xl flex flex-col gap-7 p-10 justify-between">
    <div class="inline-flex justify-between items-center">
      <p class="text-white inline-flex items-center justify-center gap-2">
        <Icon name="i-ph:instagram-logo-light" class="text-6xl" />
        <span class="text-2xl font-semibold">nima_dev.ir</span>
      </p>
      <NuxtLink to="#" class="inline-flex items-center justify-center gap-3 text-[#6633FF]">
        <span class="bg-white px-12 py-2 rounded-full inline-flex items-center justify-center gap-1">Follow</span>
      </NuxtLink>
    </div>

    <div class="bg-white/20 p-3 rounded-xl grid grid-cols-3 gap-5 overflow-hidden h-[250px]">
      <img src="~/assets/images/post-1.png" />
      <img src="~/assets/images/post-2.png" />
      <img src="~/assets/images/post-3.png" />
      <img src="~/assets/images/post-2.png" />
      <img src="~/assets/images/post-3.png" />
      <img src="~/assets/images/post-1.png" />
    </div>
  </div>
</template>
