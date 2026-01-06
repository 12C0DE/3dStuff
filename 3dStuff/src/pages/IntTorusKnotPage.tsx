import { Canvas } from "@react-three/fiber";
import { IntTorusKnot } from "../components/index";
import { OrbitControls } from "@react-three/drei";

export const IntTorusKnotPage = () => {
  return (
    <>
      <h1>Interactive Torus Page</h1>
      <p>
        Using <code>OrbitControls</code> you can zoom in & out, and rotate the
        scene.
      </p>
      <p>
        <code>Leva</code> is used as a debugger tool to change several
        properites of the scene.
      </p>
      <p>
        I only have the <code>Position</code> & <code>Color</code> used right
        now.
      </p>
      <Canvas>
        <ambientLight intensity={0.1} />
        <directionalLight position={[0, 0, 2]} intensity={0.5} />
        <IntTorusKnot
          position={[0, 0, 0]}
          size={[0.5, 0.1, 1000, 50]}
          color="red"
        />
        <OrbitControls enableZoom={false} />
      </Canvas>
    </>
  );
};
