import { Canvas } from "@react-three/fiber";
import { Cube } from "../components/index";

export const Scene1 = () => {
  return (
    <>
      <h1>Cubes</h1>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        <ambientLight />
        <group position={[1, 1, 0]}>
          <Cube position={[0, 0, 0]} size={[1, 1, 1]} color={"green"} />
          <Cube position={[0, -2, 0]} size={[1, 1, 1]} color={"hotpink"} />
          <Cube position={[-2, 0, 0]} size={[1, 1, 1]} color={"blue"} />
          <Cube position={[-2, -2, 0]} size={[1, 1, 1]} color={"red"} />
        </group>
      </Canvas>
    </>
  );
};
