import { AuthProvider } from "@/features/auth/providers/AuthProvider";
import { Container } from "@repo/ui";
import React from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <Container>{children}</Container>;
}
