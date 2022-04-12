import { Box, Flex, Image } from '@chakra-ui/react'
import WalletBalance from './WalletBalance';



const Header = (props) => {
    return (   
        <> 
        <Flex
        width='100%'
        height={['110px', '110px', '110px', '110px', '110px']}
        alignItems='center'
        justifyContent='center'
        bg='white'
        boxShadow={'0px 0px 2px 2px rgba(0, 0, 0, 0.2)'}

        >
        <Image src='/logo.png' ></Image>
        </Flex>  
        <WalletBalance />
        </>
    )
       
}

export default Header;