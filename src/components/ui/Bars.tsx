import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import clsx from "clsx";

const Bars = () => {
  const divRef = useRef<HTMLDivElement>(null);
  useGSAP(() => {
    if (!divRef.current) return;
    const tl = gsap.timeline({
      repeat: -1,
      repeatDelay: 1,
      defaults: { stagger: 0.5, ease: "back.out" },
    });
    tl.to(divRef.current.children, {
      clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    }).to(divRef.current.children, {
      clipPath: "polygon(0 0, 100% 0, 100% 0, 0 0)",
    });
  }, []);
  return (
    <div ref={divRef} className="bars">
      <Bar bgColor="bg-gray-500" />
      <Bar bgColor="bg-red-500" />
      <Bar bgColor="bg-white" />
    </div>
  );
};

export default Bars;

const Bar = ({ bgColor }: { bgColor: string }) => {
  return (
    <div
      className={clsx("bar", bgColor)}
      style={{ clipPath: "polygon(0 100%, 100% 100%, 100% 100%, 0% 100%)" }}
    />
  );
};
