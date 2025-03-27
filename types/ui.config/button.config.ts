import { tv } from "tailwind-variants"

export default tv({
  slots: {
    base: "inline-flex justify-center items-center gap-1 px-6 py-2 transition",
    loadingAnimation: 'animation-spin',
    labelSize: '',
    iconSize: '',
    icon: 'inline-flex items-center justify-center',
    textColor: '',
    bgColor: '',
    borderColor: '',
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
    color: {
      red: {
        textColor: 'text-cabaret-400 hover:text-cabaret-400/90',
        bgColor: 'bg-cabaret-200 hover:bg-cabaret-200/80',
        borderColor: 'border-cabaret-200',
        icon: 'bg-cabaret-200'
      },
      orange: {
        textColor: 'text-pumpkin-400 hover:text-pumpkin-400/90',
        bgColor: 'bg-pumpkin-200 hover:bg-pumpkin-200/80',
        borderColor: 'border-pumpkin-200',
        icon: 'bg-pumpkin-200'
      },
      green: {
        textColor: 'text-keppel-400 hover:text-keppel-400/90',
        bgColor: 'bg-keppel-200 hover:bg-keppel-200/80',
        borderColor: 'border-keppel-200',
        icon: 'bg-keppel-200'
      },
      blue: {
        textColor: 'text-curious-blue-400 hover:text-curious-blue-400/90',
        bgColor: 'bg-curious-blue-200 hover:bg-curious-blue-200/80',
        borderColor: 'border-curious-blue-200',
        icon: 'bg-curious-blue-200'
      },
      purple: {
        textColor: 'text-vivid-violet-400 hover:text-vivid-violet-400/90',
        bgColor: 'bg-vivid-violet-200 hover:bg-vivid-violet-200/80',
        borderColor: 'border-vivid-violet-200',
        icon: 'bg-vivid-violet-200'
      }
    },
    variant: {
      link: {
        base: ''
      },
      outline: {
        base: 'rounded-full border'
      },
      solid: {
        base: 'rounded-full'
      },
      soft: {
        base: ''
      }
    }

  },
  compoundVariants: [
    {
      variant: 'link',
      class: {
        bgColor: 'bg-transparent hover:bg-transparent',
        borderColor: 'border-transparent',
        textColor: ''
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
    }
  ]

})
