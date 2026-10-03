import { LoginScreen } from "@/features/auth/screens/login.screen";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <LoginScreen />
    </Suspense>
  );
}
