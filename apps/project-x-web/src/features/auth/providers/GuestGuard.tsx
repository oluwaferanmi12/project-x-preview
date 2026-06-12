"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

function GuestLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-p300" />
    </div>
  );
}

export function GuestGuard({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, _hasHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (_hasHydrated && isAuthenticated) {
      router.replace("/list-property");
    }
  }, [_hasHydrated, isAuthenticated, router]);

  // Wait for Zustand to rehydrate — prevents the auth page from flashing
  // before the redirect fires for already-authenticated users
  if (!_hasHydrated || isAuthenticated) {
    return <GuestLoader />;
  }

  return <>{children}</>;
}
