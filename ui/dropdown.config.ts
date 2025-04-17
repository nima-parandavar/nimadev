import { tv } from "tailwind-variants"

export default tv({
  slots: {
    contentBase: 'w-72 h-auto mt-2 p-2 shadow-sm',
    rounded: 'rounded-2xl',
    bgColor: '',
    spliter: 'w-[95%] mx-auto align-center self-center my-1',
    groupItem: 'flex flex-col rounded-[10px] px-2 py-1 gap-1 data-[disabled]:text-bombay-400',
    item: 'cursor-pointer w-full px-3 py-2 rounded-[5px] transition flex flex-row items-center justify-between data-[disabled]:cursor-not-allowed data-[disabled]:text-bombay-400 data-[disabled]:hover:bg-transparent',
    label: 'inline-flex items-center justify-start gap-1',
    labelSize: '',
    iconSize: '',
    groupLabel: 'text-sm mb-1 font-semibold',
    groupLabelColor: '',
    postfix: 'text-sm'
  },
  variants: {
    color: {
      red: {
        bgColor: 'bg-cabaret-100',
        item: 'hover:bg-cabaret-200',
        groupLabelColor: 'text-cabaret-400',

      },
      orange: {
        bgColor: 'bg-pumpkin-100',
        item: 'hover:bg-pumpkin-200',
        groupLabelColor: 'text-pumpkin-400',


      },
      green: {
        bgColor: 'bg-keppel-100',
        item: 'hover:bg-keppel-200',
        groupLabelColor: 'text-keppel-400',


      },
      blue: {
        bgColor: 'bg-curious-blue-100',
        item: 'hover:bg-curious-blue-200',
        groupLabelColor: 'text-curious-blue-400',


      },
      purple: {
        bgColor: 'bg-vivid-violet-100',
        item: 'hover:bg-vivid-violet-200',
        groupLabelColor: 'text-vivid-violet-400',
      }
    },
    size: {
      sm: {
        labelSize: 'text-[10px]',
        iconSize: 'text-[14px]',
      },
      md: {
        labelSize: 'text-[16px]',
        iconSize: 'text-[22px]'
      },
      lg: {
        labelSize: 'text-[24px]',
        iconSize: 'text-[30px]',
      },
      xl: {
        labelSize: 'text-[32px]',
        iconSize: 'text-[38px]',
      }
    },
  }
})