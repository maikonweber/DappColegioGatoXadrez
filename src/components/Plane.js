
import {  usePlane } from '@react-three/cannon'
import { useEffect,  } from 'react'


function Plane(props) {
    const [ref] = usePlane(() => ({ rotation: [-Math.PI / 2, 0, 0], ...props, onClick: props.onClick }))
    return (
      <mesh ref={ref} receiveShadow>
        <planeGeometry args={[1000, 1000]} />
        <shadowMaterial color="#171717" transparent opacity={0.4} />
      </mesh>
    )
  }

  export default Plane;