<template>
  <MinDropdown :items="items">
    <MinButton :size="screen === 'sm' ? 'sm' : 'md'" variant="soft" icon="i-lucide:swatch-book" />
    <template #theme>
      <div class="flex flex-row items-center justify-between w-full">
        <span class="cursor-pointer w-8 h-8 rounded-full bg-cabaret-400" @click="theme.setTheme('red')"></span>
        <span class="cursor-pointer w-8 h-8 rounded-full bg-vivid-violet-400" @click="theme.setTheme('purple')"></span>
        <span class="cursor-pointer w-8 h-8 rounded-full bg-curious-blue-400" @click="theme.setTheme('blue')"></span>
        <span class="cursor-pointer w-8 h-8 rounded-full bg-keppel-400" @click="theme.setTheme('green')"></span>
        <span class="cursor-pointer w-8 h-8 rounded-full bg-pumpkin-400" @click="theme.setTheme('orange')"></span>
      </div>
    </template>

  </MinDropdown>
</template>

<script lang="ts" setup>
import type { Items } from '~/types/dropdown';

const theme = themeModeStore()
const { screen } = useScreen()

const items: Items = [
  {
    items: [
      {
        key: 1,
        slot: 'theme',
      }
    ]
  }
]


</script>
