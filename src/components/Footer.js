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
        bottom={0}
        height={['250px', '250px', '250px', '250px', '250px']}
        bgGradient='linear-gradient(to right, #D3D3D3 0%, #FF3131 100%)'
        boxShadow={'0px 0px 1px 1px rgba(1, 1, 1, 0.1)'}
        >

        </Flex>
        </>
       
    )
       
}

export default Footer;
