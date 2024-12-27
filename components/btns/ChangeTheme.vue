<template>
  <MinDropdown :items="items">
    <MinButton icon="i-lucide-swatch-book" variant="soft" />
    <template #theme>
      <div class="grid grid-cols-1 grid-rows-6 gap-3">
        <span v-for="color in colors" class="w-6 h-6 rounded-full cursor-pointer" :class="[`min-bg-${color}-300`]"
          @click="theme.changeTheme(color)"></span>
      </div>
    </template>
  </MinDropdown>
</template>

<script lang="ts" setup>
import type { DropdownMenu } from '~/interfaces/min';
const theme = useThemeStore()
const colors = ['red', 'blue', 'green', 'yellow', 'cream', 'purple']
const items: DropdownMenu = [
  [
    { key: 'theme', slot: 'theme', label: 'change theme' }
  ]
]
</script>
