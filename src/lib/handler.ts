import * as THREE from "three";

const enterHandler = (
  onEnter?: () => void,
  idx?: number,
  refs?: MutableRefObject<(THREE.Mesh | null)[]>,
) => {
  document.body.style.cursor = "pointer";
  onEnter?.();
  refs.current[idx].play();
};

const leaveHandler = (
  onLeave?: () => void,
  idx?: number,
  refs?: MutableRefObject<(THREE.Mesh | null)[]>,
) => {
  document.body.style.cursor = "auto";
  onLeave?.();
  refs.current[idx].reverse();
};

export { enterHandler, leaveHandler };
