import { Canvas } from '@react-three/fiber'
import { Physics, usePlane, useBox } from '@react-three/cannon'
import { useEffect, useState } from 'react'

function Cube({ state,setState, position, color }, ...props) {	
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

export default Cube;