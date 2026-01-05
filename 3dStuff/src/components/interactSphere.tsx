import { useRef, useState } from "react";
import type { Mesh } from "three/src/objects/Mesh.js";
import { useFrame } from "@react-three/fiber";

export const InteractSphere = ({position, size, color}: {position: [number, number, number], size: [number, number, number], color: string}) => {
    const ref = useRef<Mesh>(null!);

    const [isHovered, setIsHovered] = useState(false);
    const [isClicked, setIsClicked] = useState(false);
    
      useFrame((state, delta) => {
        const speed = isHovered ? 1 : 0.5;
        ref.current.rotation.x += delta * speed;
        ref.current.rotation.y += delta * 0.2;
      });

    return (
        <mesh 
            position={position} ref={ref} 
            onPointerEnter={(e) => (e.stopPropagation(), setIsHovered(true))} onPointerLeave={() => setIsHovered(false)}
            onClick={() => setIsClicked(!isClicked)}
            scale={isClicked ? 1.5 : 1}
        >
            <sphereGeometry args={size} />
            <meshStandardMaterial color={isHovered ? "red" : color} wireframe/>
        </mesh>
    );
};
