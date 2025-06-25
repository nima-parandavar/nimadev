import { tv } from "tailwind-variants";

export default tv({
  slots: {
    root: "w-full relative overflow-hidden rounded-full h-4",
    background: "bg-bombay-300",
    progress:
      "rounded-full w-full bg-white h-full transition-transform duration-[660ms] ease-[cubic-bezier(0.65, 0, 0.35, 1)]",
    progressColor: "",
  },
  variants: {
    color: {
      red: {
        progressColor: "bg-cabaret-400",
      },
      purple: {
        progressColor: "bg-vivid-violet-400",
      },
      blue: {
        progressColor: "bg-curious-blue-400",
      },
      green: {
        progressColor: "bg-keppel-400",
      },
      orange: {
        progressColor: "bg-pumpkin-400",
      },
    },
  },
});
