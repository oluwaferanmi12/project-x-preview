import { create } from "zustand";

interface SessionExpiredState {
  isOpen: boolean;
  show: () => void;
  hide: () => void;
}

// Lets non-React code (the axios interceptor) open the session-expired modal.
export const useSessionExpiredStore = create<SessionExpiredState>((set) => ({
  isOpen: false,
  show: () => set({ isOpen: true }),
  hide: () => set({ isOpen: false }),
}));
