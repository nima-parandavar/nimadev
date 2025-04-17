import { tv } from "tailwind-variants";

export default tv({
  slots: {
    base: 'inline-flex w-fit gap-2 items-center ',
    checkbox: 'flex h-[25px] w-[25px] rounded-full appearance-none items-center justify-center outline-none transition-colors',
    icon: 'flex items-center justify-center'
  },
  variants: {
    color: {
      red: {
        checkbox: 'bg-cabaret-200/80 data-[state=checked]:bg-cabaret-200  hover:bg-cabaret-200 focus-within:outline-cabaret-400',
        icon: 'data-[state=checked]:text-cabaret-400'
      },
      orange: {
        checkbox: 'bg-pumpkin-200/80 hover:bg-pumpkin-200 focus-within:outline-pumpkin-400 data-[state=checked]:bg-pumpkin-200',
        icon: 'data-[state=checked]:text-pumpkin-400'
      },
      green: {
        checkbox: 'bg-keppel-200/80 hover:bg-keppel-200 focus-within:outline-keppel-400 data-[state=checked]:bg-keppel-200 ',
        icon: 'data-[state=checked]:text-keppel-400'
      },
      blue: {
        checkbox: 'bg-curious-blue-200/80 hover:bg-curious-blue-200 focus-within:outline-curious-blue-400 data-[state=checked]:bg-curious-blue-200',
        icon: 'data-[state=checked]:text-curious-blue-400'
      },
      purple: {
        checkbox: 'bg-vivid-violet-200/80 hover:bg-vivid-violet-200 focus-within:outline-vivid-violet-400 data-[state=checked]:bg-vivid-violet-200',
        icon: 'data-[state=checked]:text-vivid-violet-400'
      }
    }
  }
})