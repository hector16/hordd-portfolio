import React from 'react'
import { IconType } from 'react-icons'
import { RiHome5Line, RiWindyLine } from 'react-icons/ri'
import tw, { TwStyle } from 'twin.macro'
import clsx from 'clsx'

type IconProps = {
  type: string
  className?: string
}

const Icon = ({ type, className }: IconProps) => {
  console.log('className', className)
  let IconCom: IconType

  switch (type) {
    case 'home':
      IconCom = RiHome5Line
      break
    default:
      IconCom = RiWindyLine
  }
  return (
    <button type={'button'} className="inline-flex self-center outline-none">
      <IconCom className={clsx('inline', className)} />
    </button>
  )
}

export default Icon
