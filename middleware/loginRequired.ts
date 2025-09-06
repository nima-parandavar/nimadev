export default defineNuxtRouteMiddleware(async () => {
  const { loggedIn } = useUserSession();
  const { $localePath } = useI18n();
  if (!loggedIn.value) {
    return await navigateTo($localePath("/auth/login"));
  }
});
