<template>
  <div>
    <NavsNavigation class="sticky top-0 left-0 z-50" />
    <main class="w-[95%] sm:container mx-auto mt-10">
      <slot />
    </main>
    <NavsFooter class="mt-14" />
  </div>
</template>
