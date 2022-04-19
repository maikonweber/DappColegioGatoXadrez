import { ethers } from 'ethers';
import WalletBalance  from '../src/components/WalletBalance';
import { useState, useEffect } from 'react';
import NFT from '../artifacts/contracts/nft.sol/gatoXadrezNFT.json';
import Market from '../artifacts/contracts/MarketXadrez.sol/gatoXadrezMarket.json';
import Web3Modal  from 'web3modal';
import { nftaddress, nftmarketaddres } from '../config/configWallet';
import axios from 'axios';
import { Grid, GridItem ,Box ,SimpleGrid, Flex, Text, Button } from '@chakra-ui/react';
import Image from 'next/image'


export default function MyAssets() {
    const [nfts, setNfts] = useState([])
    const [loadingState, setLoadingState] = useState('not-loaded')
  
    useEffect(() => {
      loadNFTs()
  
    }, [])	
  
    async function loadNFTs() {
      // const web3Modal = new Web3Modal({
      //   network: "mainnet",
      //   cacheProvider: true,
      // })
      const web3Modal = new Web3Modal()
      const connection = await web3Modal.connect()
      const provider = new ethers.providers.Web3Provider(connection)
      const signer = provider.getSigner()
      const marketContract = new ethers.Contract(nftmarketaddres, Market.abi, signer)
      const tokenContract = new ethers.Contract(nftaddress, NFT.abi, provider)
      const data = await marketContract.fetchmyNFTs()
      
      const items = await Promise.all(data.map(async i => {
        const tokenUri = await tokenContract.tokenURI(i.tokenId)
        const meta = await axios.get(tokenUri)
        let price = ethers.utils.formatUnits(i.price.toString(), 'ether')
        let item = {
          price,
          tokenId: i.tokenId.toNumber(),
          seller: i.seller,
          owner: i.owner,
          image: meta.config.url,
        }
        return item
      }))
      setNfts(items)
      setLoadingState('loaded') 
    }
    if (loadingState === 'loaded' && !nfts.length) return (<h1 className="py-10 px-20 text-3xl">No assets owned</h1>)
    return (
      <>
      {!nfts.length ?  (
                  <>
                  <Flex justifyContent="center" alignItems="center" height="80vh">
                  <Box
                      display="flex"
                      justifyContent="center"
                      alignItems="center"
                      as="span"
                      fontSize="5xl"
                      fontWeight="bold"
                      color="black.500"
                      bg='red.100'
                      w='70vw'
                      h='70vh'
                      borderRadius='10px'
                  >
                  <Box 
                      display="flex"
                      justifyContent="center" 
                      alignItems="center"
                      as="span"
                      flexDirection={'column'}
                  >
                  <Image src='/badRequest.png.png'
                      width='100%'
                      height='100%'
                  ></Image>
                  <Text 
                  color='gray.400'
                  fontSize="xg" fontWeight="bold"> Nenhum NFT Encontrado </Text>
                  </Box>
                  </Box>
                  </Flex>
                  </>
      ) : (
      <Flex
      width='100vw'
      height='100vh'
      alignItems='center'
      justifyContent='center'
      bg='red.100'
      >
      <Grid
      margin={'auto'}
      templateColumns='repeat(3, 1fr)'
      templateRows='repeat(3, 1fr)'
      gap={4}

      >
      {nfts.map((nft, i) => (
          <GridItem 
              bg='red.200'
              borderRadius='lg'
              boxShadow='lg'
              maxW={'400px'}
              maxH={'400px'}
              minH={'250px'}
              minW={'250px'}
              p={4}
              key={i}
          >
          <Box
          key={nft.tokenId}
          display='flex'
          flexDirection='column'
          >
          <Image 
          src={nft.image}
          width='250px'
          height='250px'
         ></Image>
          
          <Text fontSize='lg'
          fontWeight='bold'>{nft.name}</Text>
          <Text fontSize='lg'
           fontWeight='bold'>{nft.description}</Text>
           <Box 
           display='flex'
           flexDirection='row'
           p={2}
           marginLeft='auto'

          >
          <Image 
          width='30px'
          height='30px'
          src='/Matic.png.png'>
          </Image>
          <Text fontSize='lg'
          marginLeft='1rem'
          color='purple.700'
          fontWeight='bold'>{nft.price}</Text>
          </Box>
          </Box>
          </GridItem>
      ))}
       </Grid>
      </Flex>
          )}
      </>
    )
  }

  