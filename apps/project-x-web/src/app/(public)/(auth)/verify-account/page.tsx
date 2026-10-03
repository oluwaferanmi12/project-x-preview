import { VerifyAccountScreen } from "@/features/auth/screens/verify-account.screen";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <VerifyAccountScreen />
    </Suspense>
  );
}
