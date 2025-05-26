import { tv } from "tailwind-variants";

export default tv({
  slots: {
    trigger:
      "inline-flex items-center justify-between gap-3 py-1 font-[500] hover:bg-bombay-100/80 rounded-md px-1 transition-colors cursor-pointer",
    placeholder: "data-[placeholder]:text-bombay-300",
    icon: "data-[state=open]:rotate-180 data-[state=close]:rotate-0 transition-transform",
    content:
      "p-2 rounded-md border border-bombay-300/50 bg-white/30 backdrop-blur w-full max-w-xl",
    item: "flex flex-row items-center justify-between w-full max-w-xs gap-10 cursor-pointer hover:bg-bombay-100/50 transition-colors rounded-sm px-3 py-1",
  },
  variants: {
    disabled: {
      true: {
        trigger: "text-bombay-300 cursor-not-allowed hover:bg-bombay-100/30",
      },
    },
  },
});
