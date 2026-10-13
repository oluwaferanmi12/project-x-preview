import { RegisterScreen } from "@/features/auth/screens/register.screen";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Create Account" };

export default function Page() {
  return <RegisterScreen />;
}
