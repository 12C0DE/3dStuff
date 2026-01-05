import { Canvas } from "@react-three/fiber"
import { Torus } from "../components/index";

export const TorusPage = () => {
    return (
        <>
            <h1>Torus Page</h1>
            <Canvas>
                <ambientLight />
                <pointLight position={[10, 10, 10]} />
                <Torus position={[0, 0, 0]} size={[1, 0.1, 2, 30]} color="red"/>
            </Canvas>
        </>
    )
}