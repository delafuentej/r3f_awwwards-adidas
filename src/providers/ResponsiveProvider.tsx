// providers/ResponsiveProvider.tsx
"use client";
import { useEffect, ReactNode } from "react";
import { useMediaQuery } from "react-responsive";
import { useResponsive } from "../store/useResponsive";

interface ResponsiveProviderProps {
  children: ReactNode;
}

export const ResponsiveProvider = ({ children }: ResponsiveProviderProps) => {
  const setDevice = useResponsive((state) => state.setDevice);

  const isMobile = useMediaQuery({ maxWidth: 767 });
  const isTablet = useMediaQuery({ maxWidth: 1023 });
  const isDesktop = useMediaQuery({ minWidth: 1024 });

  useEffect(() => {
    const scale = isMobile ? 0.6 : isTablet ? 0.8 : 1.0;

    setDevice({ isMobile, isTablet, isDesktop, scale });
  }, [isMobile, isTablet, isDesktop, setDevice]);

  return children;
};
