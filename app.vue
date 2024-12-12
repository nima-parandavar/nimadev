<script setup lang="ts">
import * as Yup from 'yup'
import type { Field } from './interfaces/min';
const foo = ref()
const formSchema = reactive<Field[]>([
  {
    label: 'Email',
    as: 'email',
    description: 'Enter your email address',
    required: true,
    name: 'email',
    optional: 'login with google',
    helper: 'you can also login with google account',
    placeholder: "foo@example.com"
  },
  {
    label: 'Password',
    as: 'password',
    description: 'Enter your password',
    required: true,
    name: 'password',
    icon: 'i-lucide-lock'
  },
  {
    label: 'age',
    as: 'number',
    required: true,
    name: 'age',
    min: 0,
    step: 0.5
  }
])

const validationSchema = Yup.object({
  email: Yup.string().email().label("Your Email address").required(),
  password: Yup.string().min(8).required(),
})
</script>

<template>
  <div class="m-20">
    <!-- <MinForm method="post" :fields="formSchema" :validation-schema="validationSchema" color="purple" /> -->
    <MinSwitch color="yellow" icon="i-lucide-plus" />
  </div>
</template>
