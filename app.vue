<template>
  <div class="m-10 ">
    <ElementsDropdown :items="items" color="blue">
      <ElementsButton icon="i-lucide:cloud-upload" size="md" color="blue" label="this is a test" variant="solid" />

      <template #item_2="{ item }">
        <p>HI</p>
      </template>
      <template #item_2_postfix>
        #item_2_postfix
      </template>
    </ElementsDropdown>

  </div>
</template>


<script setup lang="ts">
import type { Items } from './types/dropdown';


const items: Items = [
  {
    label: 'first dropdown',
    items: [
      {
        key: 1,
        label: 'foo',
        icon: 'i-lucide:cloud-upload',
        disabled: true,
        postfix: 'disabled'
      },
      {
        key: 2,
        label: 'boo',
        icon: 'i-lucide:cloud-upload',
        postfix: '99+'
      }
    ]
  },
  {
    items: [
      {
        key: 3,
        label: 'bar',
        slot: 'bar'
      }
    ]
  },
  {
    label: '3rd dropdown',
    items: [
      {
        key: 4,
        label: 'moo',
        icon: 'i-lucide:cloud-upload'
      },
      {
        key: 5,
        label: 'hoo'
      }
    ]
  }
]
</script>