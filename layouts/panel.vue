<template>
  <div class="flex flex-row w-screen items-start justify-start" dir="rtl">
    <navs-admin-sidebar class="h-screen sticky right-0 top-0 shrink-0" />
    <div class="w-full">
      <navs-admin-navigation class="sticky top-0 left-0" />
      <main>
        <slot />
      </main>
    </div>
  </div>
</template>
