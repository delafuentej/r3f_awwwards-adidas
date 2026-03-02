"use client";

import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";

const Test = () => {
  return (
    <Canvas>
      {/* <Environment preset="sunset" /> */}
      <OrbitControls />

      <mesh scale={2} position={[0, 0, 0]}>
        <boxGeometry />
        <meshStandardMaterial color={"green"} />
      </mesh>
    </Canvas>
  );
};

export default Test;
