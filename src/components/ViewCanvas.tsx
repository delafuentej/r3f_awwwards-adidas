"use client";

import { useEffect, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import { useStore } from "../store/useStore";
import Rig from "./Rig";
import { LoadingSkeleton } from "./ui";
import patchThreeLoadingManager from "../lib/patchThreeLoadingManager";
import AssetsPreload from "./ui/AssetsPreload";

// video 8-1 : 19:15https://www.youtube.com/watch?v=WRi6rMj1KI8

patchThreeLoadingManager();

const ViewCanvas = () => {
  const eventSource = useStore((state) => state.eventSource);
  const setEventSource = useStore((state) => state.setEventSource);

  useEffect(() => {
    setEventSource(document.body);
  }, []);

  return (
    <Canvas
      style={{ position: "fixed", inset: 0, overflow: "hidden" }}
      camera={{ position: [0, 0.7, 3], fov: 30 }}
      eventSource={eventSource ?? undefined}
      eventPrefix="client"
      gl={{ stencil: true }}
    >
      {/* <OrbitControls /> */}
      <AssetsPreload />
      <Suspense fallback={<LoadingSkeleton />}>
        <View.Port />
      </Suspense>
      <Rig />
    </Canvas>
  );
};

export default ViewCanvas;
