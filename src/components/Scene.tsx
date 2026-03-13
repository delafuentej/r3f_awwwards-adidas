"use client";

import { View } from "@react-three/drei";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

import {
  FirstWhiteModel,
  FirstSportModel,
  FirstGrayModel,
  SecondModel,
  ThirdModel,
} from "./sections";

import type { ShirtType } from "../lib/textures";

type Props = {
  shirtType: ShirtType;
};

gsap.registerPlugin(ScrollTrigger);

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
      <section id="second-section" className="h-screen">
        <View className="w-dvw h-dvh">
          <SecondModel shirtType={shirtType} />
        </View>
      </section>
      <section id="third-section" className="third-section">
        <View className="w-dvw h-dvh">
          <ThirdModel shirtType={shirtType} />
        </View>
      </section>
    </main>
  );
};

export default Scene;
