// Create Footer of Page with Chakra UI
//
// Language: javascript
// Path: src\components\Footer.js
// Compare this snippet from src\components\Header.js:
import { Box, Flex, Image, Text } from '@chakra-ui/react'

const Footer = (props) => {
    return (   
        <>
        <Flex 
        width='100vw'
        height={['150px', '150px', '150px', '150px', '150px']}
        alignItems='center'
        justifyContent='center'
        bgGradient={'linear-gradient(to right, #ffe7e6 20%, #FF6347 100%)'}
        boxShadow={'5px 3px 1px 1px rgba(255, 254, 253, 0.5)'}
        >
        <Image 
        width={['190px', '190px', '250px', '250px', '250px']}
        height={['100px', '100px', '100px', '100px', '100px']}
        margin={['0', '0', '65', '65', '65']}
        src='/MutterCorp2.png' ></Image>
        <Image
        margin={['auto', 'auto', '45', '45', '45']}
        width={['8rem', '9rem', '12rem', '15rem', '15rem']}
         src="Metamask-logo.png"
        >
        </Image>
        <Box 
        margin={[0, 'auto', 75, 75, 75]}
        textAlign='center'
        display='flex'
        flexDirection='column'
        >
        <Image 
        margin={[2, 'auto']}
        width={['6rem', '6rem', '10rem', '10rem', '10rem']}
        height={[20, 20, '5.5rem', '5.5rem', '5.5rem']}
        borderRadius='50%'
        src='/TopSupport.png' ></Image>
        </Box>
        </Flex>
        <Flex
        width='100vw'
        bottom={0}
        height={['250px', '250px', '250px', '250px', '250px']}
        bgGradient='linear-gradient(to right, #ffe7e6 0%, #FF6347 100%)'
        boxShadow={'0px 0px 1px 1px rgba(1, 1, 1, 0.1)'}
        >

        </Flex>
        </>
       
    )
       
}

export default Footer;
