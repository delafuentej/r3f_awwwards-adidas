"use client";
import { useParams } from "next/navigation";
import clsx from "clsx";

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
