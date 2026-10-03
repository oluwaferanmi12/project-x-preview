import { CreateNewPasswordScreen } from "@/features/auth/screens/create-new-password.screen";
import { Suspense } from "react";

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CreateNewPasswordScreen />
    </Suspense>
  );
}
