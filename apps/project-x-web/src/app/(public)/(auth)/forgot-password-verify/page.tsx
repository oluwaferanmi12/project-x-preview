import { VerifyAccountScreen } from "@/features/auth/screens/verify-account.screen";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Verify Your Account" };

function ForgotPasswordVerify() {
  return (
    <Suspense fallback={null}>
      <VerifyAccountScreen forgotPassword />
    </Suspense>
  );
}

export default ForgotPasswordVerify;
