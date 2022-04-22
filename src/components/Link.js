
import Link from 'next/link';
import Styles from './list.module.css';
import React from 'react';
import {
    useDisclosure,
    Button, 
    Text,
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton,
    Input,
    Stack,
    Badge,
    Flex,
  } from '@chakra-ui/react'
  import CreateItem from './CreateItem';

  // Import useDisclosure from @chakra-ui/react



const Linker = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const btnRef = React.useRef()
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
   
      >
        <DrawerOverlay 
        
        />
        <DrawerContent
            borderRadius='md'
            boxShadow='8px 8px 8px 8px rgba(0, 0, 0, 2.5)'
            bgGradient={`linear-gradient(to right, #f0dc82 0%, #eae0c8 100%)`}
        
        >
          <DrawerCloseButton />
          <DrawerHeader> Entre em Contato </DrawerHeader>
        
          <DrawerBody
          >
              <Flex 
                width='100%'
                height={['100%', '100%', '100%', '100%', '100%']}
                >
           
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' 
            bgGradient={`linear-gradient(to right, #D3D3D3 0%, #4682B4 100%)`}
            mr={3} 
            onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
       </>
    )
}

export default Linker;