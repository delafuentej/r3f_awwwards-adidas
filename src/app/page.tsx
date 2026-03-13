"use client";

import { View } from "@react-three/drei";
import MainStudioModel from "../components/MainStudioModel";
import { useStore } from "../store/useStore";
import { useResponsive } from "../store/useResponsive";

export default function Home() {
  const next = useStore((state) => state.next);
  const prev = useStore((state) => state.prev);

  const { isMobile, isTablet } = useResponsive();

  return (
    <>
      <View className="w-full h-dvh">
        <MainStudioModel />
      </View>
      <p className="home-title">SELECT A PRODUCT TO BEGIN</p>
      {(isMobile || isTablet) && <div className="left-arrow" onClick={prev} />}
      {(isMobile || isTablet) && <div className="right-arrow" onClick={next} />}
    </>
  );
}
