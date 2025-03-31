import type { Color } from "~/types/theme"

export default defineNuxtPlugin((nuxtApp) => {
  if (import.meta.client) {
    const appConfig = useAppConfig()
    const theme_ = localStorage.getItem('theme')
    const themeMode = themeModeStore()

    if (!theme_) {
      localStorage.setItem('theme', appConfig.theme.primaryColor)

    } else {
      // @ts-expect-error
      themeMode.theme = theme_ as Color
    }

  }
})
