"use client";

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";

import Rig from "./Rig";
import { View } from "@react-three/drei";
import { useStore } from "../store/useStore";

//https://www.youtube.com/watch?v=ARbZmlZR3Vo 16:50

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
    >
      {/* <OrbitControls /> */}
      <View.Port />
      {/* <Rig /> */}
      {/* <MainStudioModel /> */}
    </Canvas>
  );
};

export default ViewCanvas;
