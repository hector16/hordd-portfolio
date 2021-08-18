import React from 'react'
import { Input as ChakraInput } from '@chakra-ui/react'
import tw, { styled } from 'twin.macro'

type InputProps = {
  className?: string
}

const Input = ({ className }: InputProps) => {
  return (
    <>
      <Input className={className} />
    </>
  )
}

export default Input
