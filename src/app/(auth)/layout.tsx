import { AuthLayoutWrapper } from "@/components/features/auth/auth-layout-wrapper";
import React from "react";

function layout({ children }: { children: React.ReactNode }) {
  return <AuthLayoutWrapper>{children}</AuthLayoutWrapper>;
}

export default layout;
