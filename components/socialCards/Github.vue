<template>
  <div class="bg-black h-full w-full rounded-3xl flex flex-col gap-7 p-5 lg:p-10 justify-between">
    <div class="inline-flex justify-between items-center">
      <p class="text-white inline-flex items-center justify-center gap-2">
        <Icon name="i-uit:github-alt" class="text-4xl lg:text-6xl" />
        <span class="text-xl lg:text-2xl font-semibold">nima-parandavar</span>
      </p>
      <NuxtLink to="#" class="inline-flex items-center justify-center gap-3 text-black">
        <span class="bg-white p-5 lg:px-12 py-2 rounded-full inline-flex items-center justify-center gap-1">{{
          $t('socialCard.github') }}</span>
      </NuxtLink>
    </div>

    <div
      class="w-full h-[180px] lg:h-[280px] p-4 rounded-2xl bg-white/20 flex flex-col items-center justify-center gap-1">
      <div class="inline-flex gap-1" v-for="(row, rowIndex) in grid" :key="rowIndex">
        <span v-for="(color, colIndex) in row" :key="colIndex" class="w-6 h-6 rounded-md"
          :class="color ? `sqr-${currentTheme}` : 'bg-white'"></span>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const { currentTheme } = storeToRefs(themeModeStore())
const { screen } = useScreen()

const grid = ref<Array<boolean[]>>()
const flag = ref(false)

const randomlyColorSquares = (_rows: number, _cols: number) => {
  // @ts-ignore
  grid.value = Array(_rows).fill().map(() => Array(_cols).fill(false))
  // Determine how many squares to color (e.g., 20% of them)
  const totalSquares = _rows * _cols;
  const squaresToColor = Math.floor(totalSquares * 0.4); // 20% of squares

  // Create a set to track which squares we've colored
  const coloredIndices = new Set();

  while (coloredIndices.size < squaresToColor) {
    const randomRow = Math.floor(Math.random() * _rows);
    const randomCol = Math.floor(Math.random() * _cols);
    const index = randomRow * _cols + randomCol;

    if (!coloredIndices.has(index)) {
      coloredIndices.add(index);
      grid.value[randomRow][randomCol] = true;
    }
  }
}

const changeRowsCols = () => {
  if (flag.value) {
    if (screen.value === 'sm') {
      randomlyColorSquares(5, 10)
    } else if (screen.value === 'md') {
      randomlyColorSquares(5, 20)
    } else if (screen.value === 'lg') {
      randomlyColorSquares(5, 23)
    } else if (screen.value === 'xl') {
      randomlyColorSquares(8, 20)
    } else {
      randomlyColorSquares(8, 27)
    }
    flag.value = false
  }
}

watch(screen, (newVal, oldVal) => {
  flag.value = newVal !== oldVal
})

onMounted(() => {
  changeRowsCols()
  window.addEventListener('resize', changeRowsCols)
})
</script>