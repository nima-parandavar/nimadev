<template>
  <VeeForm :method="method" :autocomplete="autoComplete" :validation-schema="validationSchema"
    @submit.prevent="$emit('onSubmit')">
    <slot>
      <div v-if="fields?.length" class="flex flex-col gap-3">

        <MinFormGroup v-for="field in fields" :name="field.name" :label="field.label" :optional="field.optional"
          :description="field.description" :helper="field.helper" :required="field.required">

          <MinInput v-if="field.as && stringFields.includes(field.as)" :type="field.as" :name="field.name"
            :rules="field.rules" :required="field.required" :placeholder="field.placeholder" :color="color"
            :icon="field.icon" :min="field.min" :max="field.max" :step="field.step" />


        </MinFormGroup>


      </div>
    </slot>
  </VeeForm>
</template>

<script lang="ts" setup>
import type { FormHTMLAttributes } from 'vue';
import type { Color, Field } from '~/interfaces/min';
const stringFields = ['text', 'password', 'search', 'url', 'email', 'number']

withDefaults(defineProps<{
  method: FormHTMLAttributes['method'],
  autoComplete?: FormHTMLAttributes['autocomplete'],
  validationSchema?: object,
  fields?: Field[],
  color?: Color,
}>(), {})

defineEmits(['onSubmit'])
</script>
