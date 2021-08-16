import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle`
  body {
    ${tw`antialiased bg-cyberPurple! text-white overflow-hidden`}
    --primary-color: ${tw`text-white`}
  }
  button, a {
    ${tw`focus:outline-none`}
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles

// -webkit-tap-highlight-color: ${theme`colors.emerald.500`}; for mobile view?
