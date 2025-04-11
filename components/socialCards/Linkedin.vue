<template>
  <div class="w-full h-full bg-[#0A66C2] rounded-3xl flex items-center justify-center flex-col gap-7 p-10">
    <p class="text-white inline-flex items-start  gap-2">
      <span class="text-6xl ">Linked</span>
      <Icon name="simple-line-icons:social-linkedin" class="text-[55px]" />
    </p>
    <NuxtLink to="#" class="inline-flex items-center justify-center gap-3 text-[#0A66C2]">
      <span class="bg-white px-12 py-2 rounded-full inline-flex items-center justify-center gap-1">Connect to
        my Linkedin</span>
      <span class="bg-white rounded-[50%] p-3 w-10 h-10 inline-flex items-center justify-center">
        <Icon name="lucide:square-arrow-out-up-right" />
      </span>
    </NuxtLink>
  </div>
</template>
