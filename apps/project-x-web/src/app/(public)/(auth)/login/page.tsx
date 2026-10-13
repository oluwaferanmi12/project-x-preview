import { LoginScreen } from "@/features/auth/screens/login.screen";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Login" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginScreen />
    </Suspense>
  );
}
