<template>
  <footer :class="style.base">
    <div :class="style.trigger">
      <div class="inline-flex items-center justify-start gap-3">
        <div>
          <Logo :width="60" />
        </div>
        <h3 class="font-normal text-xl"></h3>
      </div>
      <div class="inline-flex items-center justify-start">
        <MinButton
          variant="soft"
          to="http://instagram.com/nima_dev.ir"
          target="_blank"
          icon="lucide:instagram"
          size="sm"
        />
        <MinButton
          variant="soft"
          to="https://www.linkedin.com/in/nima-parandavar"
          target="_blank"
          icon="lucide:linkedin"
          size="sm"
        />
        <MinButton
          variant="soft"
          to="https://github.com/nima-parandavar"
          target="_blank"
          icon="lucide:github"
          size="sm"
        />
      </div>
    </div>
  </footer>
</template>

<script lang="ts" setup>
import { tv } from "tailwind-variants";

const componentStyle = tv({
  slots: {
    base: "w-full py-5 ",
    trigger:
      "w-[95%] sm:container mx-auto flex flex-row items-center justify-between mx-auto",
  },
});

const style = computed(() => {
  // @ts-ignore
  const cls = componentStyle();
  return {
    base: cls.base(),
    trigger: cls.trigger(),
  };
});
</script>
