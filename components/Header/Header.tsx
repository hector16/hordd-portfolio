import React, { useState } from 'react'
import tw, { styled, TwStyle } from 'twin.macro'
import { Icon } from 'elements'
import { Drawer, Input, useDisclosure } from '@chakra-ui/react'
import Search from './Search'

const Header = () => {
  return (
    <>
      <HeaderContainer>
        <HeaderTitle>PixelOpedia</HeaderTitle>
        <Search />
        <HeaderItems>
          <HeaderItem>
            <HeaderIcon color={tw`text-cyberPink-light`} type="home" />
            Home
          </HeaderItem>

          <HeaderItem>
            <HeaderIcon color={tw`text-cyberGreen`} type="bullChart" />
            Trending
          </HeaderItem>

          <HeaderItem>
            <HeaderIcon color={tw`text-blue-300`} type="bubble" />
            Genres
          </HeaderItem>
        </HeaderItems>
      </HeaderContainer>
    </>
  )
}

export default Header

const HeaderContainer = tw.div`flex flex-col absolute inset-x-0 top-0 bg-black h-24 text-white`

const HeaderTitle = tw.h1`text-4xl  self-start`

const HeaderItems = tw.div`flex flex-row gap-4 align-middle `

const HeaderItem = tw.div`flex text-2xl my-4 hover:cursor-pointer`

const HeaderIcon = styled(Icon)<{ color: TwStyle }>(({ color }) => [
  tw`flex w-6 h-6 mr-2`,
  color
])

const MenuIcon = tw(Icon)`text-cyberGreen h-10 w-10`
