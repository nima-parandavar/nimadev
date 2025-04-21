import { tv } from "tailwind-variants";

export default tv({
  slots: {
    base: "w-[47px] h-[47px] select-none",
    rounded: 'rounded-[50%]',
    fallback: 'flex items-center justify-center w-full h-full text-lg font-semibold'
  },
  variants: {
    color: {
      red: {
        fallback: 'text-cabaret-400',
        base: 'bg-cabaret-200 ',
      },
      orange: {
        fallback: 'text-pumpkin-400 ',
        base: 'bg-pumpkin-200 ',
      },
      green: {
        fallback: 'text-keppel-400 ',
        base: 'bg-keppel-200 ',
      },
      blue: {
        fallback: 'text-curious-blue-400 ',
        base: 'bg-curious-blue-200 ',
      },
      purple: {
        fallback: 'text-vivid-violet-400 ',
        base: 'bg-vivid-violet-200 ',
      },
    }
  }
})