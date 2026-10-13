import { CreateNewPasswordScreen } from "@/features/auth/screens/create-new-password.screen";
import { Suspense } from "react";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Create New Password" };

export default function Page() {
  return (
    <Suspense fallback={null}>
      <CreateNewPasswordScreen />
    </Suspense>
  );
}
