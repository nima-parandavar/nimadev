export default defineNuxtRouteMiddleware(async (to, from) => {
  const { user } = useUserSession();
  const { $localePath } = useI18n();
  if (user.value && user.value.role === "user") {
    return await navigateTo($localePath("/"));
  }
});
