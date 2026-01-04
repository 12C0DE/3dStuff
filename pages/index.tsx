import { Canvas, useFrame } from '@react-three/fiber'
import { OrbitControls, Box } from '@react-three/drei'
import { useRef } from 'react'
import { Mesh } from 'three'
import { new3 } from './new'

const RotatingBox = () => {
  const meshRef = useRef<Mesh>(null!)

  useFrame((state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta
      meshRef.current.rotation.y += delta
    }
  })

  return (
    <Box ref={meshRef} args={[1, 1, 1]} position={[0, 0, 0]}>
      <meshStandardMaterial color={'red'} />
    </Box>
  )
}

export default function Home() {
  return (
    <div style={{ height: '100vh' }}>
        <h1 style={{textAlign: 'center'}}>Box</h1>
      <Canvas>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <RotatingBox />
        <OrbitControls />
      </Canvas>
    </div>
  )
}