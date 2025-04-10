import { tv } from "tailwind-variants"

export default tv({
  slots: {
    overlay: 'bg-mako-400/50 dark:bg-bombay-100/30 backdrop-blur-sm inset-0 fixed data-[state=open]:animate-overlayShow z-[998]',
    padding: 'px-5 py-8',
    rounded: '',
    content: ' bg-white fixed z-[999]',
  },
  variants: {
    side: {
      center: {
        content: 'top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[95%] sm:w-full sm:max-w-2xl data-[state=open]:animate-dialogCenterContent',
        rounded: 'rounded-[30px]'
      },
      right: {
        content: 'right-0 top-0 inset-y-0 w-[300px] sm:w-full sm:max-w-md translate-x-[0px] data-[state=open]:animate-dialogCenterLeft',
        rounded: 'rounded-l-[30px]'
      },
      top: {
        content: ''
      },
      bottom: {
        content: 'bottom-0 left-[50%] translate-x-[-50%] w-full sm:w-full sm:max-w-2xl data-[state=open]:animate-dialogCenterBottom',
        rounded: 'rounded-t-[30px]'
      },
      left: {
        content: 'left-0 top-0 inset-y-0 w-[300px] sm:w-full sm:max-w-md translate-x-[0%] data-[state=open]:animate-dialogCenterLeft',
        rounded: 'rounded-r-[30px]'
      },
    }
  }
})