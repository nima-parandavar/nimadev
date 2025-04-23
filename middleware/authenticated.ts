export default defineNuxtRouteMiddleware((to) => {
  const { loggedIn } = useUserSession()
  const { $localeRoute } = useI18n()

  if (loggedIn.value && to.path === $localeRoute('/auth/login').path) {
    return navigateTo($localeRoute('/'))
  }

  if (!loggedIn.value && to.path !== $localeRoute('/auth/login').path) {
    return navigateTo($localeRoute('/auth/login'))
  }
})