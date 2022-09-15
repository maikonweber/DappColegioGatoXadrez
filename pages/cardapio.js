import Image from 'next/image'
import {
    Flex
} from '@chakra-ui/react'  



export default function Index ()  {
    return   (
    <>  
    <Flex 
    direction="column"
    justify="center"
    align="center"
  
    >
    <Image width={1020} height={900} src={'/1.jpeg'} /> 
  </Flex>
  <Flex 
    direction="column"
    justify="center"
    align="center"
    
    >
      <Image width={1020} height={900} src={'/2.jpeg'} /> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"

    >
      <Image width={1020} height={900} src={'/3.jpeg'} /> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"
   
 
    >
      <Image width={1020} height={900} src={'/4.jpeg'} /> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"
    >
      <Image width={1020} height={900} src={'/5.jpeg'} /> 
    </Flex>
    </>
    )

}
