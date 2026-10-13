import { ChooseOptionScreen } from "@/features/auth/screens/choose-option.screen";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "Choose an Option" };

export default function Page() {
  return <ChooseOptionScreen />;
}
