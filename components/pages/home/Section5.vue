<template>
  <section>
    <div :class="{ 'text-right': dir === 'rtl' }">
      <h2 class="text-4xl md:text-6xl text-center">
        {{ $t("section5.title") }}
      </h2>
      <p class="text-lg md:text-xl text-center mt-3">
        {{ $t("section5.text") }}
      </p>
    </div>
    <div
      class="mt-14 flex flex-col-reverse lg:flex-row-reverse gap-10 justify-between items-center"
    >
      <div class="flex flex-col gap-3 w-full">
        <CardsGetInTouch
          icon="i-lucide:message-square-text"
          :title="$t('section5.cards.card1.title')"
          :text="$t('section5.cards.card1.text')"
        />
        <CardsGetInTouch
          icon="i-lucide:message-circle-question"
          :title="$t('section5.cards.card2.title')"
          :text="$t('section5.cards.card2.text')"
        />
        <CardsGetInTouch
          icon="i-lucide:handshake"
          :title="$t('section5.cards.card3.title')"
          :text="$t('section5.cards.card3.text')"
        />
        <CardsGetInTouch
          icon="i-lucide:rocket"
          :title="$t('section5.cards.card4.title')"
          :text="$t('section5.cards.card4.text')"
        />
      </div>
      <MinForm class="w-full flex flex-col gap-5">
        <div
          class="flex flex-col lg:flex-row items-center justify-stretch gap-5"
        >
          <MinFormField
            :label="$t('section5.form.firstName')"
            name="first_name"
            required
            class="w-full"
          >
            <MinInput name="first_name" />
          </MinFormField>
          <MinFormField
            :label="$t('section5.form.lastName')"
            name="last_name"
            required
            class="w-full"
          >
            <MinInput name="last_name" />
          </MinFormField>
        </div>
        <MinFormField
          :label="$t('section5.form.email')"
          name="email"
          required
          class="w-full"
        >
          <MinInput name="email" type="email" />
        </MinFormField>
        <MinTextarea name="test" :placeholder="$t('section5.form.textarea')" />

        <h4>{{ $t("section5.form.services") }}</h4>
        <div class="grid grid-cols-2 grid-rows-2 gap-5">
          <MinCheckbox
            name="full_stack"
            :label="$t('section5.form.fullStack')"
          />
          <MinCheckbox name="backend" :label="$t('section5.form.backend')" />
          <MinCheckbox name="frontend" :label="$t('section5.form.frontend')" />
          <MinCheckbox name="ui" :label="$t('section5.form.ui')" />
        </div>

        <MinButton
          :label="$t('section5.form.submit')"
          size="md"
          class="w-full"
          type="submit"
          icon="lucide:send"
        />
      </MinForm>
    </div>
  </section>
</template>

<script lang="ts" setup>
const dir = useLanguageDir();
</script>
