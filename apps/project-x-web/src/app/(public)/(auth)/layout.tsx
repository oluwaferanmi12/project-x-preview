import { AuthLayoutWrapper } from "@/features/auth/auth-layout-wrapper";
import { GuestGuard } from "@/features/auth/providers/GuestGuard";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return (
    <GuestGuard>
      <AuthLayoutWrapper>{children}</AuthLayoutWrapper>
    </GuestGuard>
  );
}

export default layout;
