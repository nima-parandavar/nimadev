<template>
  <div
    class="bg-[#6633FF] h-full w-full rounded-3xl flex flex-col gap-7 p-5 lg:p-10 justify-between"
  >
    <div class="inline-flex justify-between items-center">
      <p class="text-white inline-flex items-center justify-center gap-2">
        <Icon name="i-ph:instagram-logo-light" class="text-4xl lg:text-6xl" />
        <span class="text-xl lg:text-2xl font-semibold">nima_dev.ir</span>
      </p>
      <NuxtLink
        to="http://instagram.com/nima_dev.ir"
        class="inline-flex items-center justify-center gap-3 text-[#6633FF]"
        target="_blank"
      >
        <span
          class="bg-white px-7 lg:px-12 py-2 rounded-full inline-flex items-center justify-center gap-1"
          >{{ $t("socialCard.instagram") }}</span
        >
      </NuxtLink>
    </div>

    <div
      class="bg-white/20 p-3 rounded-xl grid grid-cols-3 gap-5 overflow-hidden h-[150px] lg:h-[250px]"
    >
      <img alt="post" src="~/assets/images/post-1.png" />
      <img alt="post" src="~/assets/images/post-2.png" />
      <img alt="post" src="~/assets/images/post-3.png" />
      <img alt="post" src="~/assets/images/post-2.png" />
      <img alt="post" src="~/assets/images/post-3.png" />
      <img alt="post" src="~/assets/images/post-1.png" />
    </div>
  </div>
</template>
