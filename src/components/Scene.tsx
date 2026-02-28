"use client";
import { View } from "@react-three/drei";
import FirstWhiteModel from "./sections/FirstWhiteModel";
import FirstGrayModel from "./sections/FirstGrayModel";
import FirstSportModel from "./sections/FirstSportModel";
import type { ShirtType } from "../lib/textures";

type Props = {
  shirtType: ShirtType;
};

const Scene = ({ shirtType }: Props) => {
  return (
    <main className="scene">
      <section id="first-section" className="h-screen">
        <View className="w-dvw h-dvh">
          {shirtType === "white" && <FirstWhiteModel />}
          {shirtType === "gray" && <FirstGrayModel />}
          {shirtType === "sport" && <FirstSportModel />}
        </View>
      </section>
      {/* <section id="second-section" className="h-screen"> */}
      {/* <View className="w-dvw h-dvh">{}</View> */}
      {/* </section> */}
      {/* <section id="third-section" className="h-screen"> */}
      {/* <View className="w-dvw h-dvh">{}</View> */}
      {/* </section> */}
    </main>
  );
};

export default Scene;
