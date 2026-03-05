import { create } from "zustand";

type StudioMaterial =
  | "defaultStudio"
  | "whiteStudio"
  | "redStudio"
  | "grayStudio";

interface StudioState {
  activeStudioMaterial: StudioMaterial;
  eventSource: HTMLElement | null;
  currentIndex: number;
  playMusic: boolean;
  scrolling: boolean;
  setStudioMaterial: (material: StudioMaterial) => void;
  setEventSource: (element: HTMLElement) => void;

  next: () => void;
  prev: () => void;
  setCurrentIndex: (index: number) => void;

  toggleMusic: (value: boolean) => void;
  setScrolling: (value: boolean) => void;
}

export const useStore = create<StudioState>((set, get) => ({
  activeStudioMaterial: "defaultStudio" as StudioMaterial,
  eventSource: null as unknown as HTMLElement,
  currentIndex: 1,
  maxIndex: 2,
  playMusic: false,
  scrolling: false,

  setStudioMaterial: (material: StudioMaterial) =>
    set({ activeStudioMaterial: material }),

  setEventSource: (element: HTMLElement) => set({ eventSource: element }),

  setCurrentIndex: (index) => set({ currentIndex: index }),

  next: () =>
    set((state) => ({
      currentIndex: Math.min(state.currentIndex + 1, state.maxIndex),
    })),

  prev: () =>
    set((state) => ({
      currentIndex: Math.max(state.currentIndex - 1, 0),
    })),

  toggleMusic: () =>
    set((state) => ({
      playMusic: !state.playMusic,
    })),

  setScrolling: () =>
    set((state) => ({
      scrolling: !state.scrolling,
    })),
}));
