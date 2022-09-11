
import { ChakraProvider } from '@chakra-ui/react';
import theme  from "../config/config";
import Headers from '../src/components/Header';
import Image from 'next/image';
import Footer from '../src/components/Footer';
import { AuthProvider } from '../src/context/authContext';

function MyApp({ Component, pageProps }) {
  return (<>
 <AuthProvider> 
 <ChakraProvider>
  <Headers />
 <Component {...pageProps} />
  <Footer />
  </ChakraProvider >
  </AuthProvider>
  </>
  );
}

export default MyApp
