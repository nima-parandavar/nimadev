import { tv } from "tailwind-variants";

export default tv({
  slots: {
    root: 'flex gap-2 items-center',
    label: 'select-none',
    base: 'w-[42px] h-[25px] focus-within:outline focus-within:outline-black flex bg-black/50 rounded-full relative  cursor-default ',
    thumb: 'absolute block w-[21px] h-[21px] bg-white rounded-full transition-transform duration-100 left-0.5 top-0.5 will-change-transform data-[state=checked]:translate-x-[18px]'
  },
  variants: {

  }
})