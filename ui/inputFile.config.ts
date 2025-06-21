import { tv } from "tailwind-variants";

export default tv({
  slots: {
    root: "inline-flex items-center justify-start cursor-pointer w-full rounded",
    input: "hidden",
    trigger:
      "rounded-r-lg border px-3 py-1 inline-flex items-center justify-center gap-2 font-semibold",
  },
});
