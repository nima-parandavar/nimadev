<template>
  <aside class="border-l border-bombay-200 px-5 py-5 h-screen w-full max-w-xs">
    <div class="flex flex-col items-stretch justify-between h-full">
      <div>
        <h1 class="font-semibold text-3xl">LOGO</h1>
      </div>
      <div class="flex flex-col items-start gap-3">
        <NuxtLink
          :to="$localeRoute('/panel')"
          class="inline-flex items-center gap-3 w-full py-3 px-4 rounded-md transition-colors text-mako-300 hover:bg-bombay-100/40"
          active-class="bg-bombay-100/60"
        >
          <Icon name="i-lucide:layout-dashboard" size="30" />
          <span class="text-xl font-semibold">داشبورد</span>
        </NuxtLink>
        <NuxtLink
          to="#"
          class="inline-flex items-center gap-3 w-full py-3 px-4 rounded-md transition-colors text-mako-300 hover:bg-bombay-100/40"
          active-class="bg-bombay-100/60"
        >
          <Icon name="i-lucide:badge-check" size="30" />
          <span class="text-xl font-semibold">تسک ها</span>
        </NuxtLink>
        <NuxtLink
          to="#"
          class="inline-flex items-center gap-3 w-full py-3 px-4 rounded-md transition-colors text-mako-300 hover:bg-bombay-100/40"
          active-class="bg-bombay-100/60"
        >
          <Icon name="i-lucide:gallery-horizontal" size="30" />
          <span class="text-xl font-semibold">گالری</span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="inline-flex items-center gap-3 w-full py-3 px-4 rounded-md transition-colors text-mako-300 hover:bg-bombay-100/40"
          active-class="bg-bombay-100/60"
        >
          <Icon name="i-lucide:newspaper" size="30" />
          <span class="text-xl font-semibold">مطالب وبسایت</span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="inline-flex items-center gap-3 w-full py-3 px-4 rounded-md transition-colors text-mako-300 hover:bg-bombay-100/40"
          active-class="bg-bombay-100/60"
        >
          <Icon name="i-lucide:scan-text" size="30" />
          <span class="text-xl font-semibold">مدیریت رزومه</span>
        </NuxtLink>

        <NuxtLink
          to="#"
          class="inline-flex items-center gap-3 w-full py-3 px-4 rounded-md transition-colors text-mako-300 hover:bg-bombay-100/40"
          active-class="bg-bombay-100/60"
        >
          <Icon name="i-lucide:form-input" size="30" />
          <span class="text-xl font-semibold">درخواست ها</span>
        </NuxtLink>
      </div>
      <div class="flex flex-col items-start gap-3">
        <button
          class="inline-flex items-center gap-3 w-full py-3 px-4 rounded-md transition-colors text-mako-300"
        >
          <Icon name="i-lucide:log-out" size="30" />
          <span class="text-xl font-semibold">خروج از حساب کاربری</span>
        </button>
        <BtnsProfile />
      </div>
    </div>
  </aside>
</template>
