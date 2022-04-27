import {
    Flex,
    Text,
    Image,
    Tr,

} from '@chakra-ui/react';
import Styles from '/styles/canvas.module.css'
import * as THREE from 'three'; 
import React, { useRef, useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { Canvas, useFrame } from '@react-three/fiber'
import { BoundingBoxHelper } from 'three';


function Modal(active) {


    return (
       <>
        <Flex 
            // Set visibility to hidden by default
            visibility={!active ? 'visible' : 'hidden'}
            position="relative"
            top={'-20px'}
            direction="column"
            height="10vh"
            width="10vw"
        >
            <Text
                fontSize="2xl"
                fontWeight="bold"
                color="red"
                textAlign="center"
            >
                <h1>
                    Hello
                </h1>
            </Text>
        </Flex>
        </>
    )
}

// Create Context



function Box(props, geo, Modal) {

    // Create context for the bo

    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x += 0.01))

    // When we hover, set the hovered state to true
    
    return (
        <>
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 0.2 : 0.9}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxBufferGeometry args={props.geo} />
        <meshStandardMaterial color={hovered ? `${props.color.onHover}` : `${props.color.onHover}` } />
      </mesh>
      </>
    )
  }

const Index = () => {


    useEffect(() => {

    }, [])

    return   (
    <>  
        <Flex 
            position="relative"
            top={'-20px'}
            direction="column"
            height="100vh"
            width="100vw"   
        >
        <Canvas 
            className={Styles.canvas}
            camera={{
                position: [0, 0, 0],
                fov: 48,
                near: 2.9,
            }}
            >
    <ambientLight />
    <pointLight position={[20, 55, 10]} />
    <Box position={[0, 0, -90]} geo={[20, 20 , 20]} color={
        {
            onHover: 'red',    
            hover: 'blue',
        }
    } />
    <Box position={[0, 0, 0.01]} geo={[20, 20, 20]} color= {{
        hover: 'green',
        onHover: 'yellow',
    }}
    />
    <Box position={[0, 0, -20]} geo={[20, 20, 20]} color= {{
        hover: 'green',
        onHover: 'blue', 
    }
        
}
modal={Modal}
/>
        </Canvas>
        </Flex>
    </>
    )
}


module.exports = Index;