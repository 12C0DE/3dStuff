import { useRef } from "react";
import type { Mesh } from "three/src/objects/Mesh.js";
import { useFrame } from "@react-three/fiber";

export const Sphere = ({position, size, color}: {position: [number, number, number], size: [number, number, number], color: string}) => {
    const ref = useRef<Mesh>(null!);
    
      useFrame((state, delta) => {
        ref.current.rotation.x += delta;
        ref.current.rotation.y += delta;
        ref.current.position.x = Math.sin(state.clock.elapsedTime);
        ref.current.position.z = Math.cos(state.clock.elapsedTime);
      });

    return (
        <mesh position={position} ref={ref}>
            <sphereGeometry args={size} />
            <meshStandardMaterial color={color} wireframe/>
        </mesh>
    );
};
