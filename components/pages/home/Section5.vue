<template>
  <section>
    <div>
      <h2 class="text-4xl md:text-6xl text-center">Get In Touch</h2>
      <p class="text-lg md:text-xl text-center mt-3">Ready to help your company scale faster? let's chat about how we
        can help
      </p>
    </div>
    <div class="mt-14 flex flex-col-reverse lg:flex-row-reverse gap-10 justify-between items-start">
      <div class="flex flex-col gap-3 w-full">
        <CardsGetInTouch icon="i-lucide:message-square-text" title="Let's Talk About Your Project"
          text="Whether you have a full plan or just an idea, I’m here to help turn your vision into a reality. Share your goals and let’s find the best way forward—together." />
        <CardsGetInTouch icon="i-lucide:message-circle-question" title="Technical Questions or Collaborations?"
          text="Got a question about web development, UI/UX, or something more technical? I love solving problems—drop me a message and let’s build something great." />
        <CardsGetInTouch icon="i-lucide:handshake" title="Need a Reliable Developer on Your Team?"
          text="I specialize in full-stack development using Django, Vue, and Nuxt. If you're looking for someone who can handle both the frontend and backend—let’s talk." />
        <CardsGetInTouch icon="i-lucide:rocket" title="Want to Scale or Optimize Your Product?"
          text="If you’re building something big and want a developer who thinks long-term and builds with scale in mind, I’m your guy. Let’s build something robust, fast, and user-focused." />
      </div>
      <MinForm class="w-full flex flex-col gap-5">
        <div class="flex flex-col lg:flex-row items-center justify-stretch gap-5">
          <MinFormField label="First name" name="first_name" required class="w-full">
            <MinInput name="first_name" />
          </MinFormField>
          <MinFormField label="Last name" name="last_name" required class="w-full">
            <MinInput name="last_name" />
          </MinFormField>
        </div>
        <MinFormField label="Email Address" name="email" required class="w-full">
          <MinInput name="email" type="email" />
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
