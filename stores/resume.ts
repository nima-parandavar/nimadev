import { defineStore } from "pinia";
import { v4 as uuid4 } from "uuid";

interface Section {
  id: string;
  title: { en: string; fa: string };
  order: number;
}

export const useResumeStore = defineStore("resumeStore", {
  state() {
    return {
      sections: [] as Section[],
    };
  },
  actions: {
    addNewSection() {
      const section = {
        id: uuid4(),
        title: { en: "", fa: "" },
        order: this.length + 1,
      };
      this.sections?.push(section);
    },
    removeSection(id: string) {
      const index = this.sections?.findIndex((section) => section.id === id);
      this.sections?.splice(index, 1);
    },
    getSection(id: string) {
      return this.sections?.find((section) => section.id === id);
    },
  },
  getters: {
    length: (state) => state.sections?.length || 0,
  },
});
