
import { ChakraProvider } from '@chakra-ui/react';
import theme  from "../config/config";
import Headers from '../src/components/Header';
import Image from 'next/image';
import Linker from '../src/components/Link';
import Footer from '../src/components/Footer';

function MyApp({ Component, pageProps }) {
  return (<>

 <ChakraProvider theme={theme} >
  
  <Headers />
 <Component {...pageProps} />
  <Footer />
  </ChakraProvider >
 

  </>
  );
}

export default MyApp
