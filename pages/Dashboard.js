
import { useState, useEffect } from 'react';
import { Grid,Box, Flex, Text, Button, GridItem } from '@chakra-ui/react';
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
  
  
  return (
  <>
  <Grid
        templateColumns={['1fr', '1fr', '1fr', '1fr']}
        templateRows={['1fr', '1fr', '1fr', '1fr']}
        gap={1}
        width='90vw'
        height='100vh'
        bg='red.100'
        margin='40px'
     >
  <GridItem
    gridColumn={[1, 1, 1, 1, 1]}
    gridRow={[1, 1, 1, 1, 1]}
  
  >
  <StatGroup 
   m='5' >
  <Stat>
  <StatLabel>Numero de Entradas</StatLabel>
  <StatNumber>345,670</StatNumber>
  <StatHelpText>
  <StatArrow type='increase' />
      23.36%
  </StatHelpText>
  </Stat>
  <Stat>
  <StatLabel> Red </StatLabel>
  <StatNumber>45</StatNumber>
  <StatHelpText>
  <StatArrow type='decrease' />
      9.05%
  </StatHelpText>
  </Stat>
  <Stat>
  <StatLabel> Green </StatLabel>
  <StatNumber>45</StatNumber>
  <StatHelpText>
  <StatArrow type='decrease' />
      9.05%
  </StatHelpText>
  </Stat>
  </StatGroup>
  <StatGroup 
  m='4'>
  <Stat>
  <StatLabel>  Green 1 Martingale </StatLabel>
  <StatNumber>345,670</StatNumber>
  <StatHelpText>
  <StatArrow type='increase' />
      23.36%
  </StatHelpText>
  </Stat>
  <Stat>
  <StatLabel>  Green 2 Martingale </StatLabel>
  <StatNumber>345,670</StatNumber>
  <StatHelpText>
  <StatArrow type='increase' />
      23.36%
  </StatHelpText>
  </Stat>
  </StatGroup>
  </GridItem>
     </Grid>
        </>
  )
}

export default Dashboard;