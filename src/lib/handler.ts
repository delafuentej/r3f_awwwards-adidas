import type { MutableRefObject } from "react";

const enterHandler = (
  onEnter?: () => void,
  idx?: number,
  refs?: MutableRefObject<(GSAPTimeline | null)[]>,
) => {
  document.body.style.cursor = "pointer";
  onEnter?.();
  refs?.current[idx ?? -1]?.play(); // ✅ Safe call
};

const leaveHandler = (
  onLeave?: () => void,
  idx?: number,
  refs?: MutableRefObject<(GSAPTimeline | null)[]>,
) => {
  document.body.style.cursor = "auto";
  onLeave?.();
  refs?.current[idx ?? -1]?.reverse(); // ✅ Safe call
};

export { enterHandler, leaveHandler };
