import type { ReactNode } from "react";
import { ForceLightTheme } from "@/context/ForceLightTheme";
import { Navbar } from "@/features/guest/components/navbar";
import { Container, GeneralSpacer } from "@repo/ui";

// Landing page and guest views are always light, even if the visitor's
// saved or OS preference is dark.
export default function GuestLayout({ children }: { children: ReactNode }) {
  return (
    <Container className="bg-background h-full min-h-screen">
      <ForceLightTheme />
      <Navbar />
      <GeneralSpacer>{children}</GeneralSpacer>
    </Container>
  );
}
