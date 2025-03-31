import { defineStore } from 'pinia'
import type { Color } from '~/types/theme'


export const themeModeStore = defineStore('themeMode', () => {
  let themeStorage: unknown
  let theme = ref<Color>()

  const setTheme = (color: Color) => {
    theme.value = color
    localStorage.setItem('theme', color)
  }

  if (import.meta.client) {
    themeStorage = localStorage.getItem('theme')
    theme.value = themeStorage as Color
    return { theme, setTheme }

  }

})
