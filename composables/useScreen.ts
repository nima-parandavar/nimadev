type ScreenSize = 'sm' | 'md' | 'lg' | 'xl' | '2xl'

export const useScreen = () => {
  const state = ref<ScreenSize | undefined>(undefined)
  const isMobileOrTablet = ref<boolean>(false)
  const isDesktop = ref<boolean>(false)

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

    isMobileOrTablet.value = size <= 768 ? true : false
    isDesktop.value = size > 768 ? true : false
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

  return {
    screen: state,
    isMobileOrTablet,
    isDesktop
  }
}
