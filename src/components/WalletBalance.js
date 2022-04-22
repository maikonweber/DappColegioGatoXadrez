import { useState } from 'react'
import { ethers } from 'ethers'
import { useEffect } from 'react';
import {
    Button,
    Box,
    Flex,
    Image,
    Badge,
    Avatar,
    Text
} from '@chakra-ui/react'
import { FaWallet } from 'react-icons/fa'
import Linker from './Link';



function WalletBalance() {
    const [balance, setBalance] = useState('')

 
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        const balance = await provider.getBalance(account)
        
        setBalance(ethers.utils.formatEther(balance))

    };

    useEffect(() => {
        console.log('useEffect', balance)
    }, [balance])



    return (
        <>
    <Flex 
        width='100%'
        marginBottom={5}
        alignItems='center'
        justifyContent='right'
        bgGradient= {`linear-gradient(to right, #D3D3D3 0%, #FF3131 100%)`}
        boxShadow={'0px 0px 0px 1px rgba(0, 0, 0, 0.02)'}
        >
        <Linker />
    <Button 
        margin={1}
        variant='ghost'
        onClick={() => getBalance()}
        colorScheme='red.100'
        borderRadius={'2px'}
    >
     <FaWallet 
        size='2rem'
        color='white'
         />
    </Button >
</Flex>
        </>
    ) 
};

export default WalletBalance;