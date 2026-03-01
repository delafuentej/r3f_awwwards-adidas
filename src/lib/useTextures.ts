import { useMemo } from "react";
import * as THREE from "three";
import { useTexture, useVideoTexture } from "@react-three/drei";
import { environmentPaths, studioTextures, videoTextures } from "./textures";
import type { SectionType, ShirtType } from "./textures";

const useModifierTextures = (
  paths: Record<string, string>,
  setModifier: boolean,
) => {
  const textures = useTexture(paths);
  if (setModifier) {
    Object.values(textures).forEach((tex) => {
      tex.flipY = false;
      tex.colorSpace = THREE.SRGBColorSpace;
    });
    return textures;
  }
};

const useMainStudioTextures = () => {
  return useModifierTextures(studioTextures.main, true);
};

const useShirtSectionTextures = (
  shirtType: ShirtType,
  section: SectionType,
  setModifier: boolean = true,
) => {
  const paths = studioTextures.shirts[shirtType][section];

  return useModifierTextures(paths, setModifier);
};

const useShirtEnvironmentCube = (shirtType: ShirtType) => {
  const path = environmentPaths[shirtType];
  // return useCubeTexture(
  //   ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
  //   { path }
  // );
  const env = useMemo(() => {
    const tex = new THREE.CubeTextureLoader()
      .setPath(path)
      .load(["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"]);
    tex.colorSpace = THREE.SRGBColorSpace;
    return tex;
  }, [path]);
  return env;

  // const path = environmentPaths[shirtType];

  // return useCubeTexture(
  // ["px.png", "nx.png", "py.png", "ny.png", "pz.png", "nz.png"],
  // { path },
  // );
};

const useShirtVideoTexture = (shirtType: ShirtType) => {
  const path = videoTextures[shirtType];

  return useVideoTexture(path);
};

export {
  useModifierTextures,
  useMainStudioTextures,
  useShirtSectionTextures,
  useShirtEnvironmentCube,
  useShirtVideoTexture,
};
