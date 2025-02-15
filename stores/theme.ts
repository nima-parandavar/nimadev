import { defineStore } from 'pinia'
import type { Color } from '~/interfaces/min'

export const useThemeStore = defineStore({
  id: 'themeStore',
  state: () => ({
    theme: null as Color | null
  }),
  actions: {
    setDefaultThem() {
      if (!this.theme) {
        this.theme = 'blue'
      }
    },
    changeTheme(color: Color) {
      this.theme = color
    }
  },
  persist: true
})
