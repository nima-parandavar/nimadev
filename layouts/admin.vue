<template>
  <div class="flex flex-row items-stretch justify-start" dir="rtl">
    <NavsSidebar class="flex-shrink-0 sticky top-0 right-0" />
    <main class="w-full flex-shrink">
      <NavsAdminNav class="sticky top-0 left-0" />
      <div class="container mx-auto my-5 w-[90%]">
        <slot />
      </div>
    </main>
  </div>
</template>
