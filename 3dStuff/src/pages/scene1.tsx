import { Canvas } from "@react-three/fiber";
import { Cube } from "../components/index";

export const Scene1 = () => {
  return (
    <>
      <h1>Scene 1 </h1>
      <Canvas>
        <directionalLight position={[0, 0, 2]} />
        {/* everthing within the MESH is the cube */}
        <Cube position={[1, 0, 0]} size={[1, 1, 1]} color={"green"} />
        {/* <mesh position={[-1, 0, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[-1, 2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh>
        <mesh position={[1, 2, 0]}>
          <boxGeometry />
          <meshStandardMaterial color="orange" />
        </mesh> */}
      </Canvas>
    </>
  );
};
