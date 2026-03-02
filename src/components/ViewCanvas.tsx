"use client";

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { View, OrbitControls } from "@react-three/drei";
import { useStore } from "../store/useStore";
import Rig from "./Rig";

// video 8-1 : 19:15https://www.youtube.com/watch?v=WRi6rMj1KI8

const ViewCanvas = () => {
  const eventSource = useStore((state) => state.eventSource);
  const setEventSource = useStore((state) => state.setEventSource);

  useEffect(() => {
    setEventSource(document.body);
  }, []);

  return (
    <Canvas
      style={{ position: "fixed", inset: 0, overflow: "hidden" }}
      camera={{ position: [0, 2, 5], fov: 25 }}
      eventSource={eventSource ?? undefined}
      eventPrefix="client"
      gl={{ stencil: true }}
    >
      {/* <OrbitControls /> */}
      <View.Port />
      <Rig />
      {/* <MainStudioModel /> */}
    </Canvas>
  );
};

export default ViewCanvas;
