import { VerifyAccountScreen } from "@/features/auth/screens/verify-account.screen";
import { Suspense } from "react";

function ForgotPasswordVerify() {
  return (
    <Suspense fallback={null}>
      <VerifyAccountScreen forgotPassword />
    </Suspense>
  );
}

export default ForgotPasswordVerify;
