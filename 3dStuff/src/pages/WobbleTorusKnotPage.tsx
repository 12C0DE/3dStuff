import { Canvas } from "@react-three/fiber";
import { WobbleTorusKnot } from "../components/index";
import { OrbitControls } from "@react-three/drei";

export const WobbleTorusKnotPage = () => {
  return (
    <>
      <h1>Interactive Torus Page</h1>
      <p>
        Using <code>OrbitControls</code> you can zoom in & out, and rotate the
        scene.
      </p>
      <p>The material wobbles</p>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 2]} intensity={0.5} />
        <WobbleTorusKnot
          position={[0, 0, 0]}
          size={[0.5, 0.1, 1000, 50]}
          color="hotpink"
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};
