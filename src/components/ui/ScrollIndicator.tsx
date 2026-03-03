"use client";

import { useRef, useEffect } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap/all";
import clsx from "clsx";
import { useStore } from "@/src/store/useStore";
import type { ShirtType } from "@/src/lib/textures";

const ScrollIndicator = ({ shirtType }: { shirtType: ShirtType }) => {
  const colourBg = shirtType === "white" ? "bg-black" : "bg-white";
  const colourText = shirtType === "white" ? "text-black" : "text-white";

  const circleRef = useRef<HTMLDivElement>(null);

  const scrolling = useStore((state) => state.scrolling);
  console.log("scrolling", scrolling);
  const setScrolling = useStore((state) => state.setScrolling);

  //scrolling
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useGSAP(() => {
    if (!circleRef.current) return;
    gsap.to(circleRef.current, {
      y: 50,
      duration: 1,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });
  }, []);
  useEffect(() => {
    const handleScroll = () => {
      setScrolling(true);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);

      timeoutRef.current = setTimeout(() => {
        setScrolling(false);
      }, 2000);
    };

    window.addEventListener("scroll", handleScroll);
    // to clean
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);
  return (
    <div
      className={clsx(
        "scroll-indicator",
        scrolling ? "opacity-0" : "opacity-100",
      )}
    >
      <div className="relative w-10 h-16">
        <div className="flex justify-between opacity-50">
          {/* line */}
          <div className={clsx("line-scroll-indicator", colourBg)} />
          <div className={clsx("line-scroll-indicator", colourBg)} />
        </div>

        {/* circle */}
        <div
          ref={circleRef}
          className={clsx("circle-scroll-indicator", colourText)}
        />
      </div>
      <div className={clsx("text-scroll-indicator", colourText)}>
        Scroll to Explore
      </div>
    </div>
  );
};

export default ScrollIndicator;
