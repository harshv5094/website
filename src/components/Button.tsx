import type React from 'react'

type Props = {
  text: string
  type: 'primary' | 'secondary'
  wiggle?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ ...props }: Props) {
  const wiggleClass =
    props.wiggle === true ? 'hover:animate-wiggle' : 'hover:animate-none'
  const commonClass = 'rounded px-3 py-1.5 font-medium duration-150'
  switch (props.type) {
    case 'primary':
      return (
        <button
          onClick={props.onClick}
          className={`${wiggleClass} ${commonClass} bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600`}
        >
          {props.text}
        </button>
      )

    case 'secondary':
      return (
        <button
          onClick={props.onClick}
          className={`${wiggleClass} ${commonClass} border-blue-500 text-blue-500 hover:border-blue-600 hover:bg-blue-600 hover:text-white`}
        >
          {props.text}
        </button>
      )

    default:
      return (
        <button
          onClick={props.onClick}
          className={`${wiggleClass} ${commonClass} bg-blue-600 text-white hover:bg-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600`}
        >
          {props.text}
        </button>
      )
  }
}

export default Button
