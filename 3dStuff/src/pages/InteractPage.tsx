import { Canvas } from "@react-three/fiber";
import { InteractSphere } from "../components/index";

export const InteractPage = () => {
    return (
        <>
            <h1>Interact Page</h1>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <InteractSphere position={[0, 0, 0]} size={[1, 20, 10]} color="orange"/>                
            </Canvas>
        </>
    )
};