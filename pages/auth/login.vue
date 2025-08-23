<template>
  <div
    class="w-screen h-screen flex items-center justify-center container mx-auto"
  >
    <div class="w-full max-w-xl border border-neutral-300 rounded-3xl p-5">
      <h1 class="text-xl font-semibold text-right">ورود به حساب کاربری</h1>

      <min-form
        :state="state"
        class="my-10 flex flex-col gap-5"
        @submit="login"
      >
        <min-form-field label="ایمیل" name="email" required>
          <min-input
            v-model="state.email"
            type="email"
            name="email"
            autocomplete="username"
            icon="iconoir:mail"
            required
          />
        </min-form-field>

        <min-form-field label="رمز عبور" name="password" required>
          <min-input
            v-model="state.password"
            name="password"
            icon="iconoir:lock"
            type="password"
            required
          />
        </min-form-field>

        <min-button
          type="submit"
          variant="solid"
          icon="iconoir:log-in"
          label="ورود"
          class="w-full"
          :loading="loading"
        />

        <min-button
          label="بازگشت به صفحه اصلی"
          variant="link"
          color="black"
          class="w-full"
          icon="iconoir:arrow-left"
          :to="$localePath('/')"
        />
      </min-form>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { localePath } = useI18n();
const state = reactive({
  email: undefined as string | undefined,
  password: undefined as string | undefined,
});
const loading = ref(false);
async function login(e: any) {
  loading.value = true;
  const { status } = await useFetch("/api/auth/login", {
    method: "POST",
    body: state,
  });
  loading.value = false;
  if (status.value === "success") {
    return await navigateTo(localePath("/panel"));
  }
}
definePageMeta({
  layout: "blank",
});
</script>
