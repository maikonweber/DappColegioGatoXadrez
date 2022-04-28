
import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { useEffect, useState } from 'react'
import {
    Flex
} from '@chakra-ui/react'   

function Plane(props) {
  const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props, onClick: props.onClick }))
  return (
    <mesh ref={ref} receiveShadow>
      <planeGeometry args={[1000, 1000]} />
      <shadowMaterial color="#171717" transparent opacity={0.4} />
    </mesh>
  )
}

function Cube({ state,setState, position, color, name }, ...props) {	
    // Set Hover state to cube and pass then
    // use SetState to change state
  const [hover, setHover] = useState(false);
    
  const [ref] = useBox(() => ({ position: position, 
  
    mass: 1 , 
    rotation: [0.3, -0.4, 0.2],
    ...props }))


  return (
    <mesh receiveShadow castShadow
     onClick={() => setState(!state)}
     ref={ref}>
      <boxGeometry
       
      />
      <meshLambertMaterial 
      color={color} />
    </mesh>
  )
}


const Index = () => {
    const [width, setWidth] = useState(0);
    const [height, setHeight] = useState(0);
     // Set 3 ONClick state to cube and pass then 
    const [cube1, setCube1] = useState(false);
    const [cube2, setCube2] = useState(false);
    const [cube3, setCube3] = useState(false);
    
    useEffect(() => {
        var width = window.innerWidth;
        var height = window.innerHeight;
        setWidth(width);
        setHeight(height);

        console.log(width, height);
    }, [])

    useEffect(() => {
        console.log(cube1, cube2, cube3);

    }, [cube1, cube2, cube3])
    

    return   (
    <>  
    <Flex 
    direction="column"
    justify="center"
    align="center"
    height={height}
    width={width}
    >
    <Canvas 
    size= {[width, height]}
    shadows dpr={[1, 2]} 
    gl={{ alpha: false }} 
    camera={{ position: [-1, 5, 5], 
    fov: 45 }}>
    <color attach="background" args={[ 222, 23, 33 ]} />
    <ambientLight />
    <directionalLight position={[10, 10, 10]} castShadow shadow-mapSize={[2048, 2048]} />
    <Physics>
      <Plane position={[0, -2.0, 0]}  />
      <Cube position={[0.1, 5, 0]} name='Cubo1' state={cube1} setState={setCube1} color={'red'}  />
      <Cube position={[0.2, 10, -2.1]} name='Cubo1'state={cube2}  setState={setCube2} color={'yellow'}/>
      <Cube position={[0, 10, -1]} name='Cubo1' state={cube3}  setState={setCube3}  color={'blue'}/>
    </Physics>
  </Canvas>
  </Flex>,
    </>
    )
}


module.exports = Index;