<template>
  <NuxtLayout :class="[`${currentTheme}`]">
    <!-- This font is considered a proprietary software. To gain information about the laws regarding the use of these fonts, please visit www.fontiran.com            --------------------------------------------------------------------------------------            This set of fonts are used in this project under the license: (P931KWUC)            --------------------------------------------------------------------------------------            ...-->
    <!-- <a target="_blank" href="https://fontiran.com/license/P931KWUC">
      <div style="width: 123px;font-size: 10px;"> <img
          src="https://fontiran.com/storage/uploads/images/2023/1/badge1-minDN14Uj.png" width="100" height="100"
          alt="فونت کوک"> <br> <span style="text-align: justify;">این وبسایت به صورت قانونی از فونت فونت کوک استفاده
          میکند. </span> </div>
    </a> -->
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
const { currentTheme } = storeToRefs(themeModeStore())
</script>