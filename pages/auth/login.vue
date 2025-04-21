<template>
  <div class="w-screen h-screen overflow-hidden flex flex-row-reverse items-stretch justify-start">
    <div class="w-full hidden relative lg:block m-3">
      <div class="w-full h-full rounded-3xl object-center bg-center bg-no-repeat relative p-3"
        :style="{ backgroundImage: `url('${dailyImage?.url}')` }">
        <NuxtLink :to="dailyImage?.copyright_link" :external="true" target="_blank"
          class="rounded-xl p-3 bg-white/90 text-black dark:bg-black/90 dark:text-white absolute w-full max-w-md bottom-3 right-3">
          {{ dailyImage?.copyright }}
        </NuxtLink>
      </div>

    </div>
    <div class=" w-full lg:max-w-xl flex-shrink-0 flex flex-col justify-center items-center m-3 relative">
      <MinButton icon="i-lucide:arrow-left" size="md" variant="soft" @click="navigateTo('/')"
        class="absolute top-3 left-3" />
      <MinForm class="w-full max-w-xl px-10 flex flex-col gap-5" method="POST" @submit="login">
        <MinFormField name="email" required :label="$t('email')">
          <MinInput type="email" name="email" icon="i-lucide:at-sign" autocomplete="email" />
        </MinFormField>
        <MinFormField name="password" required :label="$t('password')">
          <MinInput type="password" name="password" icon="i-lucide:lock" autocomplete="current-password" />
        </MinFormField>
        <MinButton variant="link" :label="$t('forgetPassword')" color="blue" size="md" class="w-fit" />
        <MinButton :label="$t('login')" icon="i-lucide:log-in" size="md" :loading="loading" type="submit" />
        <p class="text-lg text-center">{{ $t('or') }}</p>
        <MinButton :label="$t('githubLogin')" size="md" icon="i-lucide:github" color="black" />
      </MinForm>
      <BtnsSwitchLanguage class="absolute right-3 bottom-3" />
    </div>
  </div>

</template>

<script lang="ts" setup>
definePageMeta({
  layout: 'blank',
  middleware: ['authenticated']
})
const { $localeRoute } = useI18n()
const { fetch: refreshSession } = useUserSession()

const { data: dailyImage } = await useLazyFetch('/api/daily-wallpaper', {
  query: {
    format: 'json',
    index: 0,
    mkt: 'fa-IR',
    resolution: 1920
  }
})

const loading = ref(false)
const login = async (value: object) => {
  loading.value = true
  const { status } = await useLazyFetch('/api/auth/login', {
    method: 'POST',
    body: value
  })
  if (status.value === 'success') {
    await refreshSession()
    await navigateTo($localeRoute('/'))
  }
  loading.value = false
}
</script>
