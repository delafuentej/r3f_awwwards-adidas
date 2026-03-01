"use client";

import { useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { View, OrbitControls } from "@react-three/drei";
import { useStore } from "../store/useStore";
import Rig from "./Rig";

// video 6 : 9:00 https://www.youtube.com/watch?v=ec2CTmkjc0M

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
