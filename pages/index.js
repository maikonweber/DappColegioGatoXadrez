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

function Box(props) {
    // This reference will give us direct access to the mesh
    const mesh = useRef()
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Rotate mesh every frame, this is outside of React without overhead
    useFrame(() => (mesh.current.rotation.x += 0.01))
  
    return (
      <mesh
        {...props}
        ref={mesh}
        scale={active ? 1.5 : 1}
        onClick={(event) => setActive(!active)}
        onPointerOver={(event) => setHover(true)}
        onPointerOut={(event) => setHover(false)}>
        <boxGeometry args={[1, 2, 3]} />
        <meshStandardMaterial color={hovered ? 'hotpink' : 'orange'} />
      </mesh>
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
                position: [55, 55, 10],
                fov: 48,
                near: 0.5,
            }}
            >
    <ambientLight />
    <pointLight position={[20, 55, 10]} />
    <Box position={[-1.5, 0, 15]} />
    <Box position={[1.2, 0, 0]} />

        </Canvas>
        </Flex>
    </>
    )
}


module.exports = Index;