"use client";

import { useCallback } from "react";
import * as THREE from "three";
import { MeshReflectorMaterial, useMask, Text } from "@react-three/drei";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useShirtSectionTextures } from "@/src/lib/useTextures";
import type { ShirtType, TextureKey } from "@/src/lib/textures";
import { shirtTextColors } from "@/src/lib/colors";
import {
  useShirtEnvironmentCube,
  useShirtVideoTexture,
} from "@/src/lib/useTextures";
import { ThreeEvent } from "@react-three/fiber";
import { useResponsive } from "@/src/store/useResponsive";

type GLTFResult = GLTF & { nodes: { [name: string]: THREE.Mesh } };

function ThirdModel({ shirtType }: { shirtType: ShirtType }) {
  const textures = useShirtSectionTextures(shirtType, "third") as Record<
    TextureKey<typeof shirtType, "third">,
    THREE.Texture
  >;

  const { isMobile } = useResponsive();

  const icon = textures.icon;
  icon.flipY = true;

  const stencil = useMask(1);
  const envMap = useShirtEnvironmentCube(shirtType);
  const videoTexture = useShirtVideoTexture(shirtType);

  const getWallColor = () => shirtTextColors[shirtType].wall || 0x000000;
  const getTextColor = () => shirtTextColors[shirtType].text || 0xffffff;

  const handleButtonClick = useCallback((ev: ThreeEvent<MouseEvent>) => {
    ev.stopPropagation();
    window.open("https://www.adidas.es/", "_blank");
  }, []);

  return (
    <group>
      {/* TV */}
      <mesh
        scale={isMobile ? 0.06 : 0.1}
        rotation={[0, -Math.PI / 8, 0]}
        position={isMobile ? [0, 0.45, 0] : [0.2, 0.65, 0]}
      >
        <planeGeometry args={[16, 9]} />
        <meshBasicMaterial map={videoTexture} {...stencil} />
      </mesh>
      {/* TB */}
      <mesh position={[0, 0, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[10, 3]} />
        [-Math.PI / 2, 0, 0]
        <MeshReflectorMaterial
          envMap={envMap}
          normalMap={textures.normal}
          map={textures.overlay}
          blur={[300, 30]}
          resolution={1024}
          mixBlur={1}
          mixStrength={10}
          roughness={0.8}
          depthScale={1.2}
          minDepthThreshold={0.4}
          maxDepthThreshold={1.4}
          metalness={0}
          {...stencil}
        />
      </mesh>
      {/* WLL */}
      <mesh position={[0, 0.5, -1.3]}>
        <planeGeometry args={[10, 10]} />
        <meshBasicMaterial
          color={getWallColor()}
          // map={textures.overlay}
          //      {...stencil}
        />
      </mesh>

      {/* LG */}
      <group
        position={isMobile ? [0, 0.9, 0] : [-0.8, 0.9, 0]}
        rotation={isMobile ? [0, -Math.PI / 9, 0] : [0, Math.PI / 9, 0]}
      >
        <mesh
          position={[0, 0.1, 0]}

          //scale={[-1, 1, 1]}
        >
          <planeGeometry args={[0.5, 0.2]} />
          <meshBasicMaterial
            map={icon}
            color={getTextColor()}
            side={THREE.DoubleSide}
            transparent
            //{...stencil}
          />
        </mesh>

        {/* BT */}

        <group
          onClick={handleButtonClick}
          onPointerEnter={() => {
            document.body.style.cursor = "pointer";
          }}
          onPointerLeave={() => {
            document.body.style.cursor = "auto";
          }}
        >
          <mesh>
            <boxGeometry args={[0.5, 0.12, 0.02]} />
            <meshBasicMaterial
              color={getTextColor()}

              //   {...stencil}
            />
          </mesh>
          <Text
            fontSize={0.035}
            anchorX={"center"}
            anchorY={"middle"}
            position={[0, 0, 0.03]}
            //scale={[-1, 1, 1]}
          >
            SHOP THE COLLECTION
            <meshBasicMaterial
              color={getTextColor() === 0x000000 ? 0xffffff : 0x000000}
              side={THREE.DoubleSide}
            />
          </Text>
        </group>
      </group>
    </group>
  );
}

export default ThirdModel;
