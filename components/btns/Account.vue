<template>
  <div>
    <MinDropdown :items="items">
      <div class="inline-flex items-center justify-center gap-2 cursor-pointer">
        <p class="text-lg font-normal capitalize">
          {{ user?.firstName }} {{ user?.lastName }}
        </p>
        <MinAvatar :src="user?.image" :label="label" />
      </div>
    </MinDropdown>
  </div>
</template>

<script lang="ts" setup>
import type { Items } from "~/types/dropdown";

const { user, clear } = useUserSession();
const { $localeRoute, $t } = useI18n();

const label = computed(() => {
  return `${user.value?.firstName?.at(0).toUpperCase()}${user.value?.lastName?.at(0).toUpperCase()}`;
});
const logout = async () => {
  await clear();
  reloadNuxtApp($localeRoute("/"));
};
const items = ref<Items>([
  {
    items: [
      {
        key: "dashboard",
        label: $t("dashboard"),
        icon: "i-lucide:panels-right-bottom",
        click: () =>
          user.value?.role === "admin"
            ? navigateTo($localeRoute("/panel"))
            : undefined,
      },
      {
        key: "logout",
        label: $t("logout"),
        icon: "i-lucide:log-out",
        click: () => logout(),
      },
    ],
  },
]);
</script>
