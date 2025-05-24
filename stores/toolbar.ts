import { defineStore } from "pinia";

export const useToolbarStore = defineStore("toolbar", {
  state: () => ({
    toolbars: {
      main: true,
      color: false,
    } as Record<string, boolean>,
  }),
  actions: {
    toggleToolbar(from: string, to: string) {
      this.toolbars[from] = false;
      this.toolbars[to] = true;
    },
  },
});
