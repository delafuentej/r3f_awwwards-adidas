import * as THREE from "three";
import { useTexture } from "@react-three/drei";
import { studioTextures } from "./textures";
import type { SectionType, ShirtType } from "./textures";

const useMofifierTextures = (
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
  return useMofifierTextures(studioTextures.main, true);
};

const useShirtSectionTextures = (
  shirtType: ShirtType,
  section: SectionType,
  setModifier: boolean = true,
) => {
  const paths = studioTextures.shirts[shirtType][section];

  return useMofifierTextures(paths, setModifier);
};

export { useMofifierTextures, useMainStudioTextures, useShirtSectionTextures };
