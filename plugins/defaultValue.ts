export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const appConfig = useAppConfig()
    const theme_ = localStorage.getItem('theme')
    if (!theme_) {
      localStorage.setItem('theme', appConfig.theme.primaryColor)
    }

  }
})
