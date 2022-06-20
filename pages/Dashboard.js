
import { useState, useEffect } from 'react';
import { parseCookies, setCookie } from 'nookies';
import { Grid,Box, Flex, Text, Button, GridItem } from '@chakra-ui/react';
import {
  getAllResult,
  getTable
} from '../src/services/services';
import { useDisclosure } from '@chakra-ui/react';
import Image from 'next/image'
import {
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  StatArrow,
  StatGroup,
  Input,
} from '@chakra-ui/react'

import {
  FormControl,
  FormLabel,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormErrorMessage,
  FormHelperText,
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
  Textarea,
} from '@chakra-ui/react'


function DashboardBlaze({ token }) {

  const {
    isOpen: isVisible,
    onClose,
    onOpen,
  } = useDisclosure({ defaultIsOpen: true })

  const [data, setData] = useState([]);
  const [data2, setData2] = useState("");
  const [data3, setData3] = useState("");
  const [data0, setData0] = useState("");
  const [data5, setData5] = useState("");
  const [data6, setData6] = useState("");
  const [data7, setData7] = useState("");
  const [data8, setData8] = useState("");
  const [number, setNumber] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [number3, setNumber3] = useState(0);
  const [number4, setNumber4] = useState(0);
  const [number5, setNumber5] = useState(0);
  const [number6, setNumber6] = useState(0);
  const [number7, setNumber7] = useState(0);
  const [number8, setNumber8] = useState(0);
 

  useEffect(() => {
    

  }, [])

  const handleNumberMenores = (e) => {
    const repetição = ''
    setNumber(e.target.value)
  }

  const handleNumberMaiores = (e) => {
    setNumber2(e.target.value)
  }

  const handleNumberColunas = (e) => {
    setNumber3(e.target.value)
  }

  const handleNumberPar = (e) => {
    setNumber4(e.target.value)
  }

  const handleNumberBk = (e) => {
    setNumber5(e.target.value)
  }

  const handleNumberRd = (e) => {
    setNumber6(e.target.value)
  }

  const handleNumberImpar = (e) => {
    setNumber7(e.target.value)
  }

  const handleNumberBloco = (e) => {
    setNumber8(e.target.value)
  }



  const handleChange8 = (e) => {
    setData8(e.target.value)
  }

  const handleChange0 = (e) => {
    setData0(e.target.value)
  }

  const handleChange5 = (e) => {
    setData5(e.target.value)
  }

  const handleChange6 = (e) => {
    setData6(e.target.value)
  }

  const handleChange7 = (e) => {
    setData7(e.target.value)
  }

  // Get a inputs and text area
  const handleChange1 = (e) => {
    setData(e.target.value);
    // Transforme string in array
    // split in /n map and push to array
  }
88888888888888
  const handleChange2 = (e) => {
    setData2(e.target.value)
  }

  const handleChange3 = (e) => {
    setData3(e.target.value)
  }

  const handleSubmit = async (e) => {
    console.log('submit')
    e.preventDefault();
    console.log(data, data2, data3, data0, data5, data6, data7)
    const sendBlazeBot = await setblazeBotting(token, data0, data5, data, data2, data3)
    console.log(sendBlazeBot)
  
  }

  function union(string, number) {

  }

  


  return (
  <>
    <Flex
      align="center"
      justify="start"
      direction="column"
      height="200vh"
      bg="red.100"
    >
      <Box
        mt={8}
        as="h1"
        fontSize="1xl"
        fontWeight="extrabold"
        color="red.500"
        >

        Dashboard Blaze
        </Box>
        <Input 
        width="550px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Linha 1 - Entrada Confirmada'
        onChange={handleChange8}
        />
         <Input 
        width="550px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Linha 2 - Nome da Rolleta' 
        onChange={handleChange7}
        />
        <Input 
        width="550px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Linha 3 - Nome da Estrategia' 
        onChange={handleChange6}
        />
        <Input 
        mt="10px"
        size="lg"
        color="red.700" 
        width="550px"
        backgroundColor="gray.100"
        placeholder='Linha 0 - Ultimos Numeros' 
        onChange={handleChange5}
        />
        <Input 
        width="550px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Linha 5 - Entrada' 
        onChange={handleChange0}
        />
        <Input 
        width="550px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Linha 5 - Cobrir o Zero' 
        onChange={handleChange3}
        />
        <Input 
        width="550px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Linha GREEN - Linha Verde' 
        onChange={handleChange2}
        />
        <Input 
        width="550px"
        mt="10px"
        size="lg"
        backgroundColor="gray.100"
        color="red.500"
        placeholder='Linha Red - Linha Verde' 
        onChange={handleChange1}
        />
       
    <FormLabel 
    mt={2}
    htmlFor='amount'> Repetições  de Colunas </FormLabel>
    <NumberInput max={17} min={0}
      onChange={handleNumberColunas}
    >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
    <FormLabel 
     mt={2}
     htmlFor='amount'>Repetições  de Blocos </FormLabel>
    <NumberInput max={17} min={0}
      onChange={handleNumberBloco}
    >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
    <FormLabel 
    mt={2}
    htmlFor='amount'> Repetições  de Impars </FormLabel>
    <NumberInput max={17} min={0}
    onChange={handleNumberImpar}
    >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
    <FormLabel 
       mt={2}
       htmlFor='amount'>  Repetições  de Pares </FormLabel>
    <NumberInput max={17} min={0}
    onChange={handleNumberPar}
    >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
    <FormLabel 
      mt={2}
    htmlFor='amount'> Repetições  de Red </FormLabel>
    <NumberInput max={17} min={0}
    onChange={handleNumberRd}
    >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
    <FormLabel htmlFor='amount'>  Repetições  de Black </FormLabel>
    <NumberInput max={17} min={0}
    onChange={handleNumberBk}
    >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
    <FormLabel htmlFor='amount'> Repetições  de Maiores </FormLabel>
    <NumberInput max={17} min={0}
      onChange={handleNumberMaiores}
     >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>
    <FormLabel htmlFor='amount'> Repetições  de Menores </FormLabel>
    <NumberInput max={17} min={0}
    onChange={handleNumberMenores}
    >
    <NumberInputField id='amount' />
    <NumberInputStepper>
    <NumberIncrementStepper />
    <NumberDecrementStepper />
    </NumberInputStepper>
    </NumberInput>

    <Button
      mt="10px"
      size="lg"
      backgroundColor="red.500"
      color="white"
      onClick={handleSubmit}

    > Enviar </Button>
  
    </Flex>
  </>
  )
}

// get server side props
export async function getServerSideProps(ctx) {
  // get token of browser
  //const { 'nextauth.token': token } = parseCookies(ctx)
  //const datax = await getAllResult(token)
  //const datax2 = await getTable(token)
  // get token of server
  return {
    props: {
    //datax,
     // datax2
    }
  }
}


export default DashboardBlaze;