import React,{useState} from "react";
import Style from "../styles/login.module.css";
import { RiEyeCloseLine,RiEyeLine } from "react-icons/ri"
import {setCookie} from 'nookies';
import { useRouter } from 'next/router'
import { loginIn } from '../src/services/services';
import Head from 'next/head';
import { Select } from '@chakra-ui/react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Flex, Spacer } from '@chakra-ui/react'


const exports = () => {
    const array = [
     'Turkish_Roulette',
     'UK_Roulette',
     'Roulette',
     'Football_French_Roulette',
     'Spread_Bet_Roulette',
     'Greek_Quantum_Roulette',
     'Deutsches_Roulette',
     'Speed_Roulette',
     'Prestige_Roulette',
     'Mega_Fire_Blaze_Roulette_Live',
     'Football_Roulette',
     'Quantum_Roulette_Live',
     'Greek_Roulette',
     'Roleta_Brasileira',
     'Auto_Roulette',
     'French_Roulette',
     'Hindi_Roulette',
     'Roulette_Italiana',
     'Bucharest_Roulette',
     'American_Roulette',
     ]    
     const fetchCsv = () => {
          fetch(NEXT_PUBLIC_API_URL + '/exportcsv', {
               method : 'POST',
               headers : {
                    'Content-Type' : 'application/pdf'
               },
          }).then((response) => response.blob())
          .then((blob) => {
               const url = windown.URL.createObjectURl(
                    new Blob([blob])
               );
          })
          const link = document.createElement('a')
          link.href = url;
          link.setAttribute(
               'download',
               `Roleta.csv`,
          );

          document.body.appendChild(link);
          link.click();
          link.parentNode.removeChild(link);
     }

     function getButtonFetch () {
          document.querySelectorAll()
     }


     
     return (
          <Flex>
               <Select className='select' placeholder='Selecione  Roleta' >
               <option value='option1'> `{array[0]}` </option>
               <option value='option2'> `{array[1]}`</option>
               <option value='option3'>`{array[2]}`</option>
               <option value='option4'> `{array[3]}` </option>
               <option value='option5'>`{array[4]}`</option>
               <option value='option6'>`{array[5]}`</option>
               <option value='option7'>`{array[6]}`</option>
               <option value='option8'>`{array[7]}`</option>
               <option value='option9'> `{array[8]}` </option>
               <option value='option10'>`{array[9]}`</option>
               <option value='option11'>`{array[10]}`</option>
               <option value='option12'>`{array[11]}`</option>
               <option value='option13'>`{array[12]}`</option>
               <option value='option14'>`{array[13]}`</option>
               <option value='option15'>`{array[14]}`</option>
               <option value='option16'>`{array[15]}`</option>
               <option value='option17'>`{array[16]}`</option>
               <option value='option18'>`{array[17]}`</option>
               <option value='option18'>`{array[18]}`</option>
               <option value='option18'>`{array[19]}`</option>
               </Select>
               <Button className='button' onClick={getButtonFetch} colorScheme='blue'>Button</Button>
          </Flex>
     )

}

export default exports;