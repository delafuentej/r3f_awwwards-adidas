"use client";

import { useParams, notFound } from "next/navigation";
import Scene from "@/src/components/Scene";
import type { ShirtType } from "@/src/lib/textures";

const page = () => {
  const params = useParams();
  const shirtType = params?.slug as ShirtType;
  if (!shirtType) notFound();
  return (
    <>
      <Scene shirtType={shirtType} />
    </>
  );
};

export default page;
