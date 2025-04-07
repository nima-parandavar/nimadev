type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const useScreen = () => {
  const state = ref<ScreenSize | undefined>(undefined)
  function checkSize() {
    const size = window.innerWidth
    if (size <= 640) {
      state.value = 'sm'
    } else if (size > 640 && size <= 768) {
      state.value = 'md'
    } else if (size > 768 && size <= 1024) {
      state.value = 'lg'
    } else if (size > 1024 && size <= 1280) {
      state.value = 'xl'
    } else if (size > 1280) {
      state.value = '2xl'
    } else {
      state.value = undefined
    }
  }

  onBeforeMount(() => {
    checkSize()
  })
  onMounted(() => {
    window.addEventListener('resize', checkSize)
  })
  onUnmounted(() => {
    window.removeEventListener('resize', checkSize)
  })

  return { screen: state }
}
