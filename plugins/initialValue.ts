export default defineNuxtPlugin((nuxtApp) => {
  const themStore = useThemeStore()
  themStore.setDefaultThem()
})
