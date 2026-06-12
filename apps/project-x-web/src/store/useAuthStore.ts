import { create } from "zustand";
import { persist } from "zustand/middleware";
import {  LoginResponse, UserResponse } from "@/features/auth/auth.types";

interface AuthState {
  user: UserResponse | null;
  accessToken: string | null;
  refreshToken: string | null;
  isAuthenticated: boolean;
  _hasHydrated: boolean;
  setHasHydrated: (state: boolean) => void;
  // Low-level setter — used internally by the interceptor
  setAuth: (
    user: UserResponse,
    accessToken: string,
    refreshToken?: string,
  ) => void;
  // High-level helpers — use these in your components
  login: (response: LoginResponse) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthState>()(
  persist(
    (set) => ({
      user: null,
      accessToken: null,
      refreshToken: null,
      isAuthenticated: false,
      _hasHydrated: false,

      setHasHydrated: (state) => set({ _hasHydrated: state }),

      setAuth: (user, accessToken, refreshToken) =>
        set({
          user,
          accessToken,
          refreshToken: refreshToken ?? null,
          isAuthenticated: true,
        }),

      login: (response) =>
        set({
          user: response.userResponse,
          accessToken: response.accessToken,
          refreshToken: response.refreshToken,
          isAuthenticated: true,
        }),

      logout: () => {
        // Wipe persisted storage so nothing survives a refresh
        useAuthStore.persist.clearStorage();
        set({
          user: null,
          accessToken: null,
          refreshToken: null,
          isAuthenticated: false,
        });
      },
    }),
    {
      name: "auth-storage",
      onRehydrateStorage: () => (state) => {
        state?.setHasHydrated(true);
      },
    },
  ),
);
