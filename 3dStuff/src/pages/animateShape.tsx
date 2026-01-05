import { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Mesh } from "three";
// import * as THREE from "three";

const Cube = ({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}) => {
  const ref = useRef<Mesh>(null!);

  useFrame((state, delta) => {
    ref.current.rotation.x += delta;
    ref.current.rotation.y += delta;
    ref.current.position.x = Math.sin(state.clock.elapsedTime);
    ref.current.position.z = Math.cos(state.clock.elapsedTime);
  });

  return (
    <mesh position={position} ref={ref}>
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};

export const AnimateShape = () => {
  return (
    <>
      <h1>Animated Shape</h1>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />
        <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"green"} />
      </Canvas>
    </>
  );
};
