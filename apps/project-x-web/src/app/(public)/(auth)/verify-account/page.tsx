import { VerifyAccountScreen } from "@/features/auth/screens/verify-account.screen";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Verify Your Account" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <VerifyAccountScreen />
    </Suspense>
  );
}
