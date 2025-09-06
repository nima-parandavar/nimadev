<template>
  <aside
    class="w-full max-w-xs border bg-white border-mako-100 py-3 px-5 flex flex-col justify-between h-full"
  >
    <div class="flex flex-col gap-3">
      <nuxt-link
        class="px-3 py-2 inline-flex items-center justify-start gap-3 rounded-md w-full text-right text-xl font-normal transition-colors hover:bg-bombay-100/50 cursor-pointer"
        active-class="bg-bombay-100"
        :to="$localePath('/panel/articles')"
      >
        <icon name="lucide:newspaper" />
        <span>مطالب وب سایت</span>
      </nuxt-link>

      <nuxt-link
        class="px-3 py-2 inline-flex items-center justify-start gap-3 rounded-md w-full text-right text-xl font-normal transition-colors hover:bg-bombay-100/50 cursor-pointer"
        active-class="bg-bombay-100"
        :to="$localePath('/panel/categories')"
      >
        <icon name="lucide:layout-dashboard" />
        <span>دسته بندی ها</span>
      </nuxt-link>

      <nuxt-link
        class="px-3 py-2 inline-flex items-center justify-start gap-3 rounded-md w-full text-right text-xl font-normal transition-colors hover:bg-bombay-100/50 cursor-pointer"
        active-class="bg-bombay-100"
        :to="$localePath('/panel/resume')"
      >
        <icon name="academicons:cv" />
        <span>رزومه</span>
      </nuxt-link>
    </div>

    <div>
      <div
        v-if="user"
        class="w-full bg-bombay-100 rounded-xl p-3 flex flex-row items-center justify-around gap-3"
      >
        <div>
          <p class="capitalize text-xl text-right">
            {{ user.firstName }} {{ user.lastName }}
          </p>
          <p class="text-sm">{{ user.email }}</p>
        </div>
      </div>
    </div>
  </aside>
</template>

<script lang="ts" setup>
const { user } = useUserSession();
</script>
