import { create } from "zustand";

interface ZustandState {
  count: number;
  increment: () => void;
  decrement: () => void;
}

const useStore = create<ZustandState>((set) => ({
  count: 0,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
}));

export default useStore;