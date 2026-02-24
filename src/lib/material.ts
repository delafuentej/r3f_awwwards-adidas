import * as THREE from "three";

const createMaterials = (textures: Record<string, THREE.Texture>) => {
  const mats: Record<string, THREE.MeshBasicMaterial> = {};
  for (const [key, tex] of Object.entries(textures)) {
    mats[key] = new THREE.MeshBasicMaterial({ map: tex });
  }
  return mats;
};

export { createMaterials };
