import { tv } from "tailwind-variants";

export default tv({
  slots: {
    root: 'bg-bombay-100 dark:bg-bombay-400 rounded-md p-1 inline-flex items-center',
    base: 'w-9 h-9 inline-flex items-center justify-center data-[state=off]:bg-bombay-100 dark:data-[state=off]:bg-bombay-400 data-[state=off]:hover:bg-bombay-200 dark:data-[state=off]:hover:bg-mako-400 transition-colors',
    item: 'rounded-md',
    firstItem: 'rounded-l-md',
    lastItem: 'rounded-r-md',
    active: ''
  },
  variants: {
    color: {
      red: {
        active: 'data-[state=on]:bg-cabaret-200 data-[state=on]:text-cabaret-400 ',
      },
      orange: {
        active: 'data-[state=on]:bg-pumpkin-200 data-[state=on]:text-pumpkin-400 ',
      },
      green: {
        active: 'data-[state=on]:bg-keppel-200 data-[state=on]:text-keppel-400 ',
      },
      blue: {
        active: 'data-[state=on]:bg-curious-blue-200 data-[state=on]:text-curious-blue-400 ',
      },
      purple: {
        active: 'data-[state=on]:bg-vivid-violet-200 data-[state=on]:text-vivid-violet-400 ',
      },
    }
  }
})