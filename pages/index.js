import {
    Flex,
    Box,
    Text,
    Image,

} from '@chakra-ui/react';
import { Parallax, ParallaxContext, ParallaxBanner, useParallax } from 'react-scroll-parallax';
import { useRef } from 'react';
import ParalaxBanner from '../src/components/ParalaxBanner';

const Index = () => {
    const ref = useRef()
    
    return   (
    <>  
        <Flex 
            direction="column"
            height="100vh"
            width="100vw"

        >
        <ParalaxBanner>
        </ParalaxBanner>
        </Flex>
    </>




    )
}


module.exports = Index;