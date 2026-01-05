export const Cube = ({
  position,
  size,
  color,
}: {
  position: [number, number, number];
  size: [number, number, number];
  color: string;
}) => {
  return (
    <mesh position={position}>
      {/* everthing within the MESH is the cube */}
      <boxGeometry args={size} />
      <meshStandardMaterial color={color} />
    </mesh>
  );
};
