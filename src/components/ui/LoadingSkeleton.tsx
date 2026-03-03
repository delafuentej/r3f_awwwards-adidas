"use client";

import { Html, useProgress } from "@react-three/drei";
import Bars from "./Bars";

const LoadingSkeleton = () => {
  const { progress } = useProgress();
  return (
    <Html position={[0, 0.7, 0]} center prepend>
      <div className="loading-skeleton">
        <div className="flex flex-col items-center w-40 md:w-3xs mt-5 gap-4">
          <Bars />
          <div className="w-full">
            <p className="text-loading">{Math.floor(progress)}% loaded</p>
            <div className="loading-bar" />
          </div>
        </div>
      </div>
    </Html>
  );
};

export default LoadingSkeleton;
