<template>
  <header :class="{ 'text-right': isRtl }">
    <h1 class="text-5xl lg:text-7xl">{{ $t('greeting') }} <span :class="`${currentTheme}-gradient`">{{ $t('fullName')
        }}</span> {{ $t('verb') }}
    </h1>
    <p class="text-2xl mt-5 lg:text-3xl lg:mt-7">{{ $t('a') }} <b>{{ $t('fullStack') }}</b> {{ $t('and') }} <b>{{
      $t('uiUx') }}</b></p>
  </header>
</template>

<script lang="ts" setup>
const { currentTheme } = storeToRefs(themeModeStore())
const { getLocale } = useI18n()
const isRtl = computed(() => {
  return getLocale() === 'fa'
})
</script>
