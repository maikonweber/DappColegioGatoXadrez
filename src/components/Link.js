
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
    Flex
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
        <ul className={Styles.container}
            display='flex'
            flexDirection='row'
        >
            <li>
                <Link href='/Home'>
                    <a> Marketplace </a>
                </Link>
            </li>
            <li>
                <Button 
                ref={btnRef}
                variant='ghost'
                colorScheme='ghost'
                marginLeft='1.2rem'
                onClick={onOpen}
                    >
                    <Text 
                    color='white'
                    > Criar seu NFT </Text>
                </Button>
            </li>
            <li>
                <Link href='/MyAssets'>
                    <a> MyAsset </a>
                </Link> 
            </li>
            <li>
                <Link href='/MyAssets'>
                    <a> Dashboard </a>
                </Link> 
            </li>
        </ul>
        
       </>
    )
}

export default Linker;