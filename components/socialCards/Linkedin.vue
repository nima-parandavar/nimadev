<template>
  <div class="w-full h-full bg-[#0A66C2] rounded-3xl flex items-center justify-center flex-col gap-7 p-5 py-10 lg:p-10">
    <p class="text-white inline-flex items-start leading-none gap-2">
      <span class="text-[48px] lg:text-7xl ">Linked</span>
      <Icon name="simple-line-icons:social-linkedin" class="text-[39px] lg:text-[55px]" />
    </p>
    <NuxtLink to="#" class="inline-flex items-center justify-center gap-3 text-[#0A66C2]">
      <span class="bg-white px-6 lg:px-12 py-2 rounded-full inline-flex items-center justify-center gap-1">{{
        $t('socialCard.linkedin') }}</span>
      <span class="bg-white rounded-[50%] p-3 w-10 h-10 inline-flex items-center justify-center">
        <Icon name="lucide:square-arrow-out-up-right" />
      </span>
    </NuxtLink>
  </div>
</template>
