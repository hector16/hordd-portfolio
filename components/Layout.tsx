import React from 'react'
import tw from 'twin.macro'

type LayoutProps = {
  children: React.ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  return <LayoutContainer>{children}</LayoutContainer>
}

export default Layout

const LayoutContainer = tw.div`h-screen w-screen bg-primaryPurple`
