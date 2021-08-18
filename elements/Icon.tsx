import React from 'react'
import { IconType as ReactIconType } from 'react-icons'
import {
  RiHome5Line,
  RiWindyLine,
  RiLineChartFill,
  RiBubbleChartLine,
  RiMenuLine,
  RiSearchLine
} from 'react-icons/ri'
import tw, { TwStyle } from 'twin.macro'
import clsx from 'clsx'

type IconProps = {
  type: IconType
  className?: string
  onClick?: () => void
}

const Icon = ({ type, className, onClick }: IconProps) => {
  let IconCom: ReactIconType

  switch (type) {
    case 'home':
      IconCom = RiHome5Line
      break
    case 'bullChart':
      IconCom = RiLineChartFill
      break
    case 'bubble':
      IconCom = RiBubbleChartLine
      break
    case 'menu':
      IconCom = RiMenuLine
      break
    case 'search':
      IconCom = RiSearchLine
      break
    default:
      IconCom = RiWindyLine
  }
  return onClick ? (
    <button className="inline-flex self-center outline-none" onClick={onClick}>
      <IconCom className={clsx('inline', className)} />
    </button>
  ) : (
    <IconCom
      className={clsx('inline-flex self-center outline-none', className)}
    />
  )
}

export default Icon
