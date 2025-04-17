<template>
  <section>
    <div>
      <h2 class="text-4xl md:text-6xl text-center">Get In Touch</h2>
      <p class="text-lg md:text-xl text-center mt-3">Ready to help your company scale faster? let's chat about how we
        can help
      </p>
    </div>
    <div class="mt-10 flex flex-row-reverse gap-10 justify-between items-start">
      <div class="flex flex-col gap-3 w-full">
        <CardsGetInTouch />
        <CardsGetInTouch />
        <CardsGetInTouch />
        <CardsGetInTouch />
      </div>
      <MinForm class="w-full flex flex-col gap-5">
        <div class="flex flex-row items-center justify-stretch gap-5">
          <MinFormField label="First name" name="first_name" required class="w-full">
            <MinInput name="first_name" />
          </MinFormField>
          <MinFormField label="Last name" name="last_name" required class="w-full">
            <MinInput name="last_name" />
          </MinFormField>
        </div>
        <MinFormField label="Email Address" name="email" required class="w-full">
          <MinInput name="email" type="email" icon="lucide:mail" />
        </MinFormField>
        <MinTextarea name="test" placeholder="describe your request" />

        <h4>Select services</h4>
        <div class="grid grid-cols-2 grid-rows-2 gap-5">
          <MinCheckbox name="full_stack" label="Full stack developer" />
          <MinCheckbox name="backend" label="Back-end developer" />
          <MinCheckbox name="frontend" label="Front-end developer" />
          <MinCheckbox name="ui" label="UI/UX designer" />
        </div>

        <MinButton label="send request" size="md" class="w-full" type="submit" icon="lucide:send" />
      </MinForm>
    </div>
  </section>
</template>

<script lang="ts" setup>

</script>
