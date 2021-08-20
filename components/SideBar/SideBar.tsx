import React from 'react'
import { Drawer, Input, useDisclosure } from '@chakra-ui/react'

const SideBar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <button onClick={onOpen}> Drawr</button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="top">
        sidebar
      </Drawer>
    </>
  )
}

export default SideBar
