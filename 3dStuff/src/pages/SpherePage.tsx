import { Canvas } from "@react-three/fiber";
import { Sphere } from "../components/index";

export const SpherePage = () => {
    return (
        <>
            <h1>Sphere Page</h1>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Sphere position={[0, 0, 0]} size={[1, 30, 30]} color="orange"/>
            </Canvas>
        </>
    );
}