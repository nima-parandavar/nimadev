import { tv } from "tailwind-variants"

export default tv({
  slots: {
    base: "inline-flex justify-center items-center gap-1 px-6 py-2 transition font-[500]",
    loadingAnimation: 'animate-spin',
    labelSize: '',
    iconSize: '',
    icon: 'inline-flex items-center justify-center',
    textColor: '',
    bgColor: '',
    borderColor: '',
    activeClass: '',
  },

  variants: {
    size: {
      sm: {
        labelSize: 'text-[10px]',
        iconSize: 'text-[16px]',
      },
      md: {
        labelSize: 'text-[16px]',
        iconSize: 'text-[24px]'
      },
      lg: {
        labelSize: 'text-[24px]',
        iconSize: 'text-[32px]',
      },
      xl: {
        labelSize: 'text-[32px]',
        iconSize: 'text-[40px]',
      }
    },
    disabled: {
      true: 'disabled:cursor-not-allowed',
      false: 'cursor-pointer'
    },
    reverse: {
      true: 'flex-row-reverse'
    },
    color: {
      red: {
        textColor: 'text-cabaret-400 hover:text-cabaret-400/90',
        bgColor: 'bg-cabaret-200 hover:bg-cabaret-200/80',
        borderColor: 'border-cabaret-200',
        icon: 'bg-cabaret-200',
        activeClass: 'text-red-500 hover:text-red-500/90 dark:text-red-400 dark:hover:text-red-400/90'
      },
      orange: {
        textColor: 'text-pumpkin-400 hover:text-pumpkin-400/90',
        bgColor: 'bg-pumpkin-200 hover:bg-pumpkin-200/80',
        borderColor: 'border-pumpkin-200',
        icon: 'bg-pumpkin-200',
        activeClass: 'text-orange-500 hover:text-orange-500/90 dark:text-orange-400 dark:hover:text-orange-400/90',
      },
      green: {
        textColor: 'text-keppel-400 hover:text-keppel-400/90',
        bgColor: 'bg-keppel-200 hover:bg-keppel-200/80',
        borderColor: 'border-keppel-200',
        icon: 'bg-keppel-200',
        activeClass: 'text-green-500 hover:text-green-500/90 dark:text-green-400 dark:hover:text-green-400/90'
      },
      blue: {
        textColor: 'text-curious-blue-400 hover:text-curious-blue-400/90',
        bgColor: 'bg-curious-blue-200 hover:bg-curious-blue-200/80',
        borderColor: 'border-curious-blue-200',
        icon: 'bg-curious-blue-200',
        activeClass: 'text-blue-500 hover:text-blue-500/90 dark:text-blue-400 dark:hover:text-blue-400/90',
      },
      purple: {
        textColor: 'text-vivid-violet-400 hover:text-vivid-violet-400/90 ',
        bgColor: 'bg-vivid-violet-200 hover:bg-vivid-violet-200/80',
        borderColor: 'border-vivid-violet-200',
        icon: 'bg-vivid-violet-200',
        activeClass: 'text-purple-500 hover:text-purple-500/90 dark:text-purple-400 dark:hover:text-purple-400/90',
      },
      black: {
        textColor: 'text-mako-400 hover:text-mako-400/90 dark:text-[#fdfaf6] dark:hover:text-[#fdfaf6]/90 ',
        bgColor: 'bg-mako-200 hover:bg-mako-200/80',
        borderColor: 'border-mako-200',
        icon: 'bg-mako-200',
      }
    },
    variant: {
      link: {
        base: 'px-2 py-1'
      },
      outline: {
        base: 'rounded-full border disabled:text-bombay disabled:border-bombay-300/20 disabled:hover:bg-bombay-300/10',
        icon: 'bg-transparent',
      },
      solid: {
        base: 'rounded-full disabled:bg-bombay-300/20 disabled:hover:bg-bombay-300/10 px-10 py-3',
        icon: 'bg-transparent disabled:bg-transparent'
      },
      soft: {
        base: 'px-2 py-1',
      }
    }

  },
  compoundVariants: [
    {
      variant: 'link',
      class: {
        bgColor: 'bg-transparent hover:bg-transparent',
        borderColor: 'border-transparent',
        textColor: '',
        icon: 'bg-transparent'
      },
    },
    {
      variant: 'outline',
      class: {
        bgColor: 'bg-transparent'
      }
    },
    {
      variant: 'solid',
      class: {
        borderColor: 'border-transparent'
      }
    },
    {
      variant: 'soft',
      class: {
        bgColor: 'bg-transparent hover:bg-transparent',
        borderColor: 'border-transparent',
        icon: 'p-3 mx-0.5 rounded-[50%]'
      }
    },
    {
      variant: 'outline',
      disabled: true,
      class: {
        bgColor: 'disabled:bg-transparent disabled:hover:text-bombay-300 bg-red-500',
        textColor: 'bg-red-400'
      }
    },
    {
      variant: ['link', 'outline', 'soft', 'solid'],
      disabled: true,
      class: {
        textColor: 'disabled:text-bombay-400 disabled:hover:text-bombay-400/90'
      }
    },
    {
      variant: 'soft',
      disabled: true,
      class: {
        icon: 'bg-bombay-300/20'
      }
    }

  ]

})
