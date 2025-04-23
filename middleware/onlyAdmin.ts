export default defineNuxtRouteMiddleware((to, from) => {
  const { user } = useUserSession()
  const { $localeRoute } = useI18n()

  if (user.value && !user.value?.isSuperuser) {
    return navigateTo($localeRoute('/'))
  }
})
