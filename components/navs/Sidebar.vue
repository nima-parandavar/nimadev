<template>
  <aside
    class="w-full max-w-xs h-screen border-l dark:border-l-white/10 p-5 flex flex-col justify-between items-start gap-5">
    <div class="w-full ">
      <h1 class="text-2xl font-bold">LOGO</h1>
      <div class="w-full bg-white rounded-xl p-3 mt-10">
        <p>
          <MinAvatar :src="user?.profile" :label="label" />
          {{ user?.firstName }} {{ user?.lastName }}
        </p>
      </div>
      <div class="mt-10 w-full flex flex-col items-start justify-start">
        <NuxtLink :to="$localeRoute('/__nuxt_site_management/blog')"
          class="py-3 px-2 rounded-xl w-full inline-flex items-center gap-2">
          <Icon name="lucide:newspaper" size="25" />
          <span class="text-lg">مطالب وب سایت</span>
        </NuxtLink>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const { user } = useUserSession()

const label = computed(() => {
  return `${user.value?.firstName?.at(0).toUpperCase()}${user.value?.lastName?.at(0).toUpperCase()}`
})
</script>
