export const Torus = ({position, size, color}: {position: [number, number, number], size: [number, number, number, number], color: string}) => {
    return (
        <mesh position={position}>
            <torusGeometry args={size} />
            <meshStandardMaterial color={color} />
        </mesh>
    );
};
