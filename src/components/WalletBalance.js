import { useState } from 'react'
import { ethers } from 'ethers'
import { useEffect } from 'react';
import Styles from './wallet.module.css'
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



function WalletBalance() {
    const [balance, setBalance] = useState('')
 
    const getBalance = async () => {
        const [account] = await window.ethereum.request({ method: 'eth_requestAccounts' })
        const provider = new ethers.providers.Web3Provider(window.ethereum)

        const balance = await provider.getBalance(account)
        
        setBalance(ethers.utils.formatEther(balance))

    };

    return (
    <>
        <Flex 
        width='100%'
        marginBottom={5}
        alignItems='center'
        justifyContent='left'
        bgGradient= {`linear-gradient(to left, #D3D3D3 0%, #FF3131 100%)`}
        height={`50px`}
        boxShadow={'0px 0px 0px 1px rgba(0, 0, 0, 0.02)'}
        >
        <div className={Styles.list}> 
            <a> Home </a>
            <a> Blog  </a>
            <a> Produtos </a>
            <a> Contatos </a>
            </div>
        </Flex>
        </>
    ) 
};

export default WalletBalance;