import { defineStore } from 'pinia'
import type { Color } from '~/types/theme'


export const themeModeStore = defineStore('themeMode', {
  state: () => ({
    theme: '' as Color
  }),
  actions: {
    setTheme(color: Color) {
      this.theme = color
    }
  },
  getters: {
    currentTheme: (state) => {
      const appConfig = useAppConfig()
      if (!state.theme) {
        return appConfig.theme.primaryColor
      }
      return state.theme
    }
  },
  persist: {
    key: '__persist__theme',
    pick: ['theme'],
    debug: process.env.NODE_ENV === 'development'
  }
})

