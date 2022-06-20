import { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { setblazeBotting } from '../src/services/services'
import { useDisclosure } from '@chakra-ui/react';
import { Grid,Box, Flex, Text, Button, GridItem } from '@chakra-ui/react';
import {
  getAllResult,
  getTable
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

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from '@chakra-ui/react'



import { Textarea } from '@chakra-ui/react'
import { Input } from '@chakra-ui/react'

function DashboardBlaze({ token }) {

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  const [data, setData] = useState([]);
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data4, setData4] = useState("");
  const [data5, setData5] = useState("");

  useEffect(() => {
    

  }, [])
  
  const handleChange4 = (e) => {
    setData4(e.target.value)
  }

  const handleChange5 = (e) => {
    setData5(e.target.value)
  }

  // Get a inputs and text area
  const handleChange = (e) => {
    const string = e.target.value;
    // Transforme string in array
    // split in /n map and push to array
    const arra = []
    string.split("\n").forEach(element => {
      arra.push(element)

    });
    console.log(arra)
    setData(arra);
  }

  const handleChange2 = (e) => {
    setData2(e.target.value)
  }

  const handleChange3 = (e) => {
    setData3(e.target.value)
  }

  const handleSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();
    const sendBlazeBot = await setblazeBotting(token, data4, data5, data, data2, data3)
    console.log(sendBlazeBot)
  
  }


  return (
  <>
  
    <Flex
      align="center"
     justify="center"
      direction="column"
      height="100vh"
      bg="red.100"
    >
      <Box
        as="h1"
        fontSize="1xl"
        fontWeight="extrabold"
        color="red.500"
        >

        Dashboard Blaze
        </Box>
        <Input 
        width="250px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Username da Blaze' 
        onChange={handleChange4}
        />
         <Input 
        width="250px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Password da Blaze' 
        onChange={handleChange5}
        />
        <Textarea
        mt="15px"
        placeholder="hh:mm - \n digite neste formato"
        bg="white"
        border="1px"
        borderColor="gray.200"
        borderRadius="md"
        color="gray.700"
        height="350px"
        width="150px"
        onChange={handleChange}
        >
        </Textarea>
        <Input 
        mt="10px"
        size="lg"
        color="red.700" 
        width="250px"
        backgroundColor="gray.100"
        placeholder='Valor da Entrada Inteiro' 
        onChange={handleChange2}
        />
        <Input 
        width="250px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Valor de Autoretira Ex : 1.90' 
        onChange={handleChange3}
        />
        <Button
        mt="3"
        variantColor="red"
        color="red.500"
        onClick={(e) => handleSubmit(e)}
        >
        Enviar </Button>
    </Flex>
  </>
  )
}

// get server side props


export default DashboardBlaze;