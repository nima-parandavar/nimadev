<template>
  <div class="bg-black h-full w-full rounded-3xl flex flex-col gap-7 p-10 justify-between">
    <div class="inline-flex justify-between items-center">
      <p class="text-white inline-flex items-center justify-center gap-2">
        <Icon name="i-uit:github-alt" class="text-6xl" />
        <span class="text-2xl font-semibold">nima-parandavar</span>
      </p>
      <NuxtLink to="#" class="inline-flex items-center justify-center gap-3 text-black">
        <span class="bg-white px-12 py-2 rounded-full inline-flex items-center justify-center gap-1">Repositories</span>
      </NuxtLink>
    </div>

    <div class="w-full h-[280px] p-4 rounded-2xl bg-white/20 flex flex-col items-center justify-center gap-1">
      <div class="inline-flex gap-1" v-for="(row, rowIndex) in grid" :key="rowIndex">
        <span v-for="(color, colIndex) in row" :key="colIndex" class="w-6 h-6 rounded-md"
          :class="color ? `sqr-${currentTheme}` : 'bg-white'"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { currentTheme } = storeToRefs(themeModeStore())

// @ts-ignore
const grid = ref(Array(8).fill().map(() => Array(32).fill(false)))

const getRandomColor = () => {
  // Generate a random hex color
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

const randomlyColorSquares = () => {
  // Determine how many squares to color (e.g., 20% of them)
  const totalSquares = 8 * 32;
  const squaresToColor = Math.floor(totalSquares * 0.4); // 20% of squares

  // Create a set to track which squares we've colored
  const coloredIndices = new Set();

  while (coloredIndices.size < squaresToColor) {
    const randomRow = Math.floor(Math.random() * 8);
    const randomCol = Math.floor(Math.random() * 32);
    const index = randomRow * 32 + randomCol;

    if (!coloredIndices.has(index)) {
      coloredIndices.add(index);
      grid.value[randomRow][randomCol] = true;
    }
  }
}

onMounted(() => {
  randomlyColorSquares()
})
</script>