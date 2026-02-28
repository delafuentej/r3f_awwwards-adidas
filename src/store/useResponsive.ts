// stores/useResponsive.ts
import { create } from "zustand";

interface ResponsiveState {
  isMobile: boolean;
  isTablet: boolean;
  isDesktop: boolean;
  scale: number;
  setDevice: (device: {
    isMobile: boolean;
    isTablet: boolean;
    isDesktop: boolean;
    scale: number;
  }) => void;
}

export const useResponsive = create<ResponsiveState>((set) => ({
  isMobile: false,
  isTablet: false,
  isDesktop: true,
  scale: 1,

  setDevice: (device) => set(device),
}));
