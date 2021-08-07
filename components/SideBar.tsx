import React from 'react'
import tw, { styled } from 'twin.macro'
import { Icon } from 'elements'

const SideBar = () => {
  return (
    <SideBarContainer>
      <Icon type="home" className="w-10 h-10 mr-4 text-red-400" />
      <SideBarItem>Home</SideBarItem>
    </SideBarContainer>
  )
}

export default SideBar

const SideBarContainer = tw.div`absolute inset-y-0 left-0 bg-black w-64`

const SideBarItem = tw.div`flex ml-12 text-lg text-primaryPink-light`

const SideBarIcon = tw(Icon)``
