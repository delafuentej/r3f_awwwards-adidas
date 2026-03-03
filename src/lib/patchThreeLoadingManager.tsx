import * as THREE from "three";

const patchThreeLoadingManager = () => {
  if (typeof window === undefined) return;

  const manager: any = THREE.DefaultLoadingManager;

  const origin = {
    onStart: manager.onStart,
    onLoad: manager.onLoad,
    onProgress: manager.onProgress,
    onError: manager.onError,
  };

  const defer =
    (fn?: Function) =>
    (...args: any[]) =>
      fn && setTimeout(() => fn(...args), 0);

  manager.onStart = defer(origin.onStart);
  manager.onLoad = defer(origin.onLoad);
  manager.onProgress = defer(origin.onProgress);
  manager.onError = defer(origin.onError);
};

export default patchThreeLoadingManager;
