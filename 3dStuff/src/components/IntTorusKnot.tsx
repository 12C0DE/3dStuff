import { useRef } from "react";
// import { useFrame } from "@react-three/fiber";
import { useControls } from "leva";
import { Mesh } from "three";

export const IntTorusKnot = ({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number, number, number];
  color: string;
}) => {
  const ref = useRef<Mesh>(null!);
  const { positionX, positionY, positionZ, color1 } = useControls(
    "TorusKnot Position",
    {
      positionX: { value: position[0], min: -5, max: 5, step: 0.1 },
      positionY: { value: position[1], min: -5, max: 5, step: 0.1 },
      positionZ: { value: position[2], min: -5, max: 5, step: 0.1 },
      color1: { value: color },
    }
  );

  return (
    <mesh position={[positionX, positionY, positionZ]} ref={ref}>
      <torusKnotGeometry args={size} />
      <meshStandardMaterial color={color1} />
    </mesh>
  );
};
