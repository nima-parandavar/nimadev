<template>
  <div
    class="w-full p-5 rounded-xl bg-bombay-100 grid grid-cols-10 grid-rows-1"
  >
    <div
      class="col-start-1 col-end-10 w-full h-full inline-flex items-center gap-2 font-normal"
    >
      <Icon name="i-lucide:user" size="45" />
      <span>
        <span class="text-lg block">{{ fullName }}</span>
        <small class="block">{{ user?.email }}</small>
      </span>
    </div>
    <div class="col-start-10 col-end-11 m-auto">
      <Icon name="i-lucide:arrow-left" />
    </div>
  </div>
</template>

<script lang="ts" setup>
const { user } = useUserSession();

const fullName = computed(
  () => `${user.value?.firstName} ${user.value?.lastName}`
);
</script>
