"use client";
import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuthStore } from "@/store/useAuthStore";

function AuthLoader() {
  return (
    <div className="flex h-screen w-full items-center justify-center bg-background">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-line border-t-p300" />
    </div>
  );
}

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const { isAuthenticated, _hasHydrated } = useAuthStore();
  const router = useRouter();

  useEffect(() => {
    if (_hasHydrated && !isAuthenticated) {
      router.replace("/login");
    }
  }, [_hasHydrated, isAuthenticated, router]);

  // Show loader until hydration is complete so we never flash a redirect
  // before the persisted auth state has been restored from localStorage
  if (!_hasHydrated) {
    return <AuthLoader />;
  }

  // Hydrated but not authenticated — useEffect above will redirect,
  // show loader in the meantime so the protected page never renders
  if (!isAuthenticated) {
    return <AuthLoader />;
  }

  return <>{children}</>;
}
