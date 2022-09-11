
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'

import Image from 'next/image'
import Cube from '../src/components/Vube';
import Plane from '../src/components/Plane';

import {
    Flex
} from '@chakra-ui/react'   


const Index = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    var width = window.innerWidth;
    var height = window.innerHeight;
    setWidth(width);
    setHeight(height);

    console.log(width, height);
}, [])

    return   (
    <>  
    <Flex 
    direction="column"
    justify="center"
    align="center"
    height={height}
    width={width}
    >
    <Image width={1020} height={900} src={'/1.jpeg'} /> 
   
 
  </Flex>
  <Flex 
    direction="column"
    justify="center"
    align="center"
    height={height}
    width={width}
    >
      <Image width={1020} height={900} src={'/2.jpeg'} /> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"
    height={height}
    width={width}
    >
      <Image width={1020} height={900} src={'/3.jpeg'} /> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"
    height={height}
    width={width}
    >
      <Image width={1020} height={900} src={'/4.jpeg'} /> 
    </Flex>
    <Flex 
    direction="column"
    justify="center"
    align="center"
    height={height}
    width={width}
    >
      <Image width={1020} height={900} src={'/5.jpeg'} /> 
    </Flex>
    </>
    )

}


module.exports = Index;