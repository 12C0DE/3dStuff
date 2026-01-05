import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import { Mesh } from "three";

export const TorusKnot = ({position, size, color}: {position: [number, number, number], size: [number, number, number, number], color: string}) => {
    const ref = useRef<Mesh>(null!);
    
      useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
        ref.current.position.x = Math.sin(state.clock.elapsedTime);
        ref.current.position.z = Math.cos(state.clock.elapsedTime);
      });

    return (
        <mesh position={position} ref={ref}>
            <torusKnotGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    )
}