import * as THREE from "three";

type LoadingHandler = (...args: unknown[]) => void;

const patchThreeLoadingManager = () => {
  if (typeof window === "undefined") return;

  const manager = THREE.DefaultLoadingManager;

  const origin = {
    onStart: manager.onStart as LoadingHandler | null,
    onLoad: manager.onLoad as LoadingHandler | null,
    onProgress: manager.onProgress as LoadingHandler | null,
    onError: manager.onError as LoadingHandler | null,
  };

  const defer =
    (fn?: LoadingHandler | null) =>
    (...args: unknown[]) =>
      fn && setTimeout(() => fn(...args), 0);

  manager.onStart = defer(origin.onStart);
  manager.onLoad = defer(origin.onLoad);
  manager.onProgress = defer(origin.onProgress);
  manager.onError = defer(origin.onError);
};

export default patchThreeLoadingManager;
