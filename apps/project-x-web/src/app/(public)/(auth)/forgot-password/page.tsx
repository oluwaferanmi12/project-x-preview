import { ForgotPasswordScreen } from "@/features/auth/screens/forgot-password.screen";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Forgot Password" };

export default function Page() {
  return <ForgotPasswordScreen />;
}
