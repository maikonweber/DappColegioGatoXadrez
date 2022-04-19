
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
            bg='red.100'
        
        >
          <DrawerCloseButton />
          <DrawerHeader>Create your NFT</DrawerHeader>
        
          <DrawerBody
          >
              <Flex 
                width='100%'
                height={['100%', '100%', '100%', '100%', '100%']}
                >
            <CreateItem onClose={onClose} />
            </Flex>
          </DrawerBody>
          <DrawerFooter>
            <Button variant='outline' 
            bg='red.400'
            mr={3} 
            onClick={onClose}>
              Cancel
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
      <Stack direction='row'>
        <Badge 
        marginTop={3}   
        colorScheme='ghost'> 
        <Link href='/' >
          Martketplace 
          </Link>
          </Badge>
         <Badge colorScheme='ghost'> 
         <Button
          ref={btnRef}
          onClick={onOpen}
          variant='ghost'
          colorScheme='red.200'
          borderRadius={'2px'}
         > 
           Create NFT
           </Button>   
           </Badge>
           <Badge
            padding={2.5} 
            colorScheme='ghost'>
          
           <Link  
           href='/MyAssets' >
             My assets 
             </Link>
             </Badge>   
          </Stack>
       </>
    )
}

export default Linker;