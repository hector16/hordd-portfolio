import React from 'react'
import tw, { styled, TwStyle } from 'twin.macro'
import { Icon } from 'elements'

const SideBar = () => {
  return (
    <SideBarContainer>
      <SideBarTitle>PixelOpedia</SideBarTitle>
      <SideBarItems>
        <SideBarItem>
          <SideBarIcon color={tw`text-cyberPink-light`} type="home" />
          Home
        </SideBarItem>

        <SideBarItem>
          <SideBarIcon color={tw`text-cyberGreen`} type="bullChart" />
          Trending
        </SideBarItem>

        <SideBarItem>
          <SideBarIcon color={tw`text-blue-300`} type="bubble" />
          Genres
        </SideBarItem>
      </SideBarItems>
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = tw.div`flex flex-col absolute inset-y-0 left-0 bg-black w-56  text-white`

const SideBarTitle = tw.h1`text-4xl h-16 self-center`

const SideBarItem = tw.div`flex text-3xl hover:cursor-pointer`

const SideBarItems = tw.div`grid grid-flow-col grid-rows-3 gap-6`

const SideBarIcon = styled(Icon)<{ color: TwStyle }>(({ color }) => [
  tw`flex w-6 h-6 mr-2`,
  color
])
