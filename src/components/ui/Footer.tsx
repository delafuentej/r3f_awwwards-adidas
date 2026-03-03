"use client";

import clsx from "clsx";
import { useParams } from "next/navigation";

const Footer = () => {
  const color = useParams()?.slug === "white" ? "text-black" : "text-white";

  return (
    <div className={clsx("footer", color)}>
      <p className="hover-animation">© ADIDAS AG 2026</p>
      <p className="hover-animation">TERMS & CONDITIONS</p>
      <p className="hover-animation">PRIVACY</p>
      <p className="hover-animation">COOKIES</p>
    </div>
  );
};

export default Footer;
