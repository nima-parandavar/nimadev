<script setup lang="ts">
import * as Yup from 'yup'

const formSchema = reactive({
  fields: [
    {
      label: 'Email',
      as: 'email',
      description: 'Enter your email address',
      required: true,
      rule: Yup.string().email().label("Your Email address").required(),
      name: 'email'
    },
    {
      label: 'Password',
      as: 'password',
      description: 'Enter your password',
      required: true,
      rule: Yup.string().min(8).required(),
      name: 'password',
      icon: 'i-lucide-lock'
    }
  ]
})
</script>

<template>
  <div class="m-20">
    <Form>
      <MinFormGroup v-for="field in formSchema.fields" :name="field.name" :description="field.description"
        :label="field.label" :required="field.required" class="mb-5">
        <MinInput :type="field.as" :name="field.name" :required="field.required" :icon="field.icon"
          :rules="field.rule" />
      </MinFormGroup>
    </Form>
  </div>
</template>
