import { defineStore } from 'pinia'
import type { Color } from '~/types/theme'


export const themeModeStore = defineStore('themeMode', () => {
  const { theme: uiTheme } = useAppConfig()

  const theme = ref<Color>(uiTheme.primaryColor)
  const setTheme = (color: Color) => {
    theme.value = color
    localStorage.setItem('theme', color)
  }



  return { theme, setTheme }
})
