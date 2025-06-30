import type React from 'react'

type Props = {
  text: string
  type: 'primary' | 'secondary'
  wiggle?: boolean
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

function Button({ ...props }: Props) {
  switch (props.type) {
    case 'primary':
      return (
        <button
          onClick={props.onClick}
          className={`${props.wiggle === true ? 'hover:animate-wiggle' : 'hover:none'} rounded border-2 border-blue-600 bg-blue-600 px-10 py-2 font-medium text-white duration-150 hover:border-blue-500 hover:bg-white hover:text-blue-500`}
        >
          {props.text}
        </button>
      )

    case 'secondary':
      return (
        <button
          onClick={props.onClick}
          className={`${props.wiggle === true ? 'hover:animate-wiggle' : 'hover:none'} rounded border-2 border-blue-500 px-10 py-2 font-medium text-blue-500 duration-150 hover:border-blue-600 hover:bg-blue-600 hover:text-white`}
        >
          {props.text}
        </button>
      )

    default:
      return (
        <button
          onClick={props.onClick}
          className={`${props.wiggle === true ? 'hover:animate-wiggle' : 'hover:none'} rounded border-2 border-blue-600 bg-blue-600 px-10 py-2 font-medium text-white duration-150 hover:border-blue-500 hover:bg-white hover:text-blue-500`}
        >
          {props.text}
        </button>
      )
  }
}

export default Button
