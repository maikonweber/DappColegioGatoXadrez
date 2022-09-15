import Image from 'next/image'
import {
    Flex, Box
} from '@chakra-ui/react'  



export default function Index ()  {

     const sendtoUrl = () => {
         
     }


    return   (
    <>  
    <Flex 
    direction="column"
    justify="center"
    align="center"
    >
    <Image width={1020} height={900} src={'/1.jpeg'}  alt="Cardapio"/> 
  </Flex>
  <Flex 
    direction="column"
    justify="center"
    align="center"
    
    >
      <Image width={1020} height={900} src={'/2.jpeg'}  alt="Cardapio"/> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"

    >
   
      <Image width={1020} height={900} src={'/3.jpeg'} alt="Cardapio"/> 
      
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"
   
 
    >
      <Image width={1020} height={900} src={'/4.jpeg'} alt="Cardapio"/> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"
    >
      <Image width={1020} height={900} src={'/5.jpeg'}  alt="Cardapio"/> 
    </Flex>
    <Box 
       className='whats'
       position='absolute'
       left='47%'
       top='95%'
       z-index='1000'
    
       > 
     <a href='https://api.whatsapp.com/send?phone=5511939617778'>
     <Image width={50} height={50} src={'/pngwing.com.png'} alt="Cardapio" />
     </a>
    </Box>
    </>
    )

}
