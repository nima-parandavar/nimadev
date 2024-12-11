<template>
  <div class="w-full max-w-sm">

    <div class="mx-1 flex flex-row justify-between items-end">
      <span>
        <label v-if="label" :for="name" class="text-sm">{{ label }}
          <Icon v-if="required" name="i-mdi-required" size="10" class="text-[#d14d72]" />
        </label>
        <small class="block opacity-50 text-xs" v-if="description">{{ description }}</small>
      </span>
      <small v-if="optional" class="block text-xs opacity-50">{{ optional }}</small>
    </div>

    <div class="my-2">
      <slot></slot>
    </div>

    <div class="mx-1">
      <small v-if="helper" class="block text-xs opacity-50">{{ helper }}</small>
      <slot name="errorMessage">
        <ErrorMessage class="text-xs text-[#d14d72]" :name="name" as="small" />
      </slot>
    </div>
  </div>
</template>

<script lang="ts" setup>
withDefaults(defineProps<{
  name: string,
  label?: string,
  description?: string,
  optional?: string,
  helper?: string,
  required?: boolean,
}>(), { required: false })
</script>
