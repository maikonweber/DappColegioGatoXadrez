
import { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { Grid,Box, Flex, Text, Button, GridItem } from '@chakra-ui/react';
import {
  getAllResult,
} from '../src/services/services';
import Image from 'next/image'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
} from '@chakra-ui/react'

function Dashboard() {
  const [nfts, setNfts] = useState([])
  const [sold, setSold] = useState([])
  const [loadingState, setLoadingState] = useState('not-loaded')

  return (
  <>
   <Flex 
     width='100vw'
     height={['100vh', '100vh', '100vh', '100vh', '100vh']}
     alignItems='center'
     justifyContent='center'
     bg='white'
   >
      <Box
        width={['100%', '100%', '100%', '100%', '100%']}
        height={['100%', '100%', '100%', '100%', '100%']}
        display='flex'
        flexDirection='column'
        alignItems='center'
        justifyContent='start'
        bg='white'
        p={4}
      >
        <Text fontSize='2xl' fontWeight='bold' color='red.500'>
          Dashboard
        </Text>
        
        </Box>
        <Stat>
  <StatLabel>Collected Fees</StatLabel>
  <StatNumber>£0.00</StatNumber>
  <StatHelpText>Feb 12 - Feb 28</StatHelpText>
</Stat>
  
        </Flex>
        </>
  )
}

// get server side props
export async function getServerSideProps(ctx) {
  // get token of browser
  const { 'nextauth.token': token } = parseCookies(ctx)
  const datax = await getAllResult(token)
  // get token of server
  return {
    props: {
      datax
    }
  }
}


export default Dashboard;