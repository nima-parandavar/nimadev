<template>
  <div class="flex flex-row items-stretch justify-start" dir="rtl">
    <NavsSidebar />
    <main class="w-full">
      <NavsAdminNav />
      <div class="container mx-auto my-5">
        <slot />
      </div>
    </main>
  </div>
</template>
