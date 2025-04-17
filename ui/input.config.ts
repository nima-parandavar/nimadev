import { tv } from "tailwind-variants";
export default tv({
  slots: {
    root: '',
    base: 'appreance-none w-full h-10  px-5 border transition-all outline-none',
    background: '',
    rounded: 'rounded-3xl',
    icon: '',
    bgIcon: '',
    errorMessage: 'text-cabaret-400 text-[14px] ml-2 mt-2',
    textarea: 'h-44 py-4 resize-none'
  },
  variants: {
    color: {
      red: {
        background: 'bg-cabaret-100/50 hover:bg-cabaret-100 focus:bg-cabaret-100 border-cabaret-300/50 focus:border-cabaret-300 dark:bg-cabaret-400/5 dark:hover:bg-cabaret-400/10 dark:focus:bg-cabaret-400/10 dark:focus:border-cabaret-200',
        bgIcon: 'bg-cabaret-200 dark:bg-cabaret-400/20'
      },
      orange: {
        background: 'bg-pumpkin-100/50 hover:bg-pumpkin-100 focus:bg-pumpkin-100 border-pumpkin-300/50 focus:border-pumpkin-300 dark:bg-pumpkin-400/5 dark:hover:bg-pumpkin-400/10 dark:focus:bg-pumpkin-400/10 dark:focus:border-pumpkin-200',
        bgIcon: 'bg-pumpkin-200 dark:bg-pumpkin-400/20'

      },
      green: {
        background: 'bg-keppel-100/50 hover:bg-keppel-100 focus:bg-keppel-100 border-keppel-300/50 focus:border-keppel-300 dark:bg-keppel-400/5 dark:hover:bg-keppel-400/10 dark:focus:bg-keppel-400/10 dark:focus:border-keppel-200',
        bgIcon: 'bg-keppel-200 dark:bg-keppel-400/20'
      },
      blue: {
        background: 'bg-curious-blue-100/50 hover:bg-curious-blue-100 focus:bg-curious-blue-100 border-curious-blue-300/50 focus:border-curious-blue-300 dark:bg-curious-blue-400/5 dark:hover:bg-curious-blue-400/10 dark:focus:bg-curious-blue-400/10 dark:focus:border-curious-blue-200',
        bgIcon: 'bg-curious-blue-200 dark:bg-curious-blue-400/20'
      },
      purple: {
        background: 'bg-vivid-violet-100/50 hover:bg-vivid-violet-100 focus:bg-vivid-violet-100 border-vivid-violet-300/50 focus:border-vivid-violet-300 dark:bg-vivid-violet-400/5 dark:hover:bg-vivid-violet-400/10 dark:focus:bg-vivid-violet-400/10 dark:focus:border-vivid-violet-200',
        bgIcon: 'bg-vivid-violet-200 dark:bg-vivid-violet-400/20'
      }
    },
    disabled: {
      true: {
        base: 'cursor-not-allowed',
        background: 'bg-bombay-100/50 hover:bg-bombay-100 focus:bg-bombay-100 border-bombay-300/50 focus:border-bombay-300 dark:bg-bombay-400/5 dark:hover:bg-bombay-400/10 dark:focus:bg-bombay-400/10 dark:focus:border-bombay-200'
      }
    },
    icon: {
      true: {
        root: 'relative',
        base: 'px-10 relative',
        icon: 'absolute left-1 top-1/2 -translate-y-1/2 w-8 h-8 rounded-[50%] inline-flex items-center justify-center'
      }
    }
  }
})