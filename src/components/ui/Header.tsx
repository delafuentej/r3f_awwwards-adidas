"use client";

import { useParams, useRouter } from "next/navigation";
import clsx from "clsx";
import MusicStreamLine from "./MusicStreamLine";

const Header = () => {
  const color = useParams()?.slug === "white" ? "bg-black" : "bg-white";
  const { replace } = useRouter();
  return (
    <div className="header">
      <div className={clsx("logo-fl", color)} onClick={() => replace("/")} />
      <MusicStreamLine color={color} />
    </div>
  );
};

export default Header;
