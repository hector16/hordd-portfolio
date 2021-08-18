import React from 'react'
import tw from 'twin.macro'
import { Header } from 'components'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <LayoutContainer>
      <Header />
      {children}
    </LayoutContainer>
  )
}

export default Layout

const LayoutContainer = tw.div`h-screen w-screen `
