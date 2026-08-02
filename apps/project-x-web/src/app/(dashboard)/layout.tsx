import type { ReactNode } from "react";
import { Container, GeneralSpacer } from "@repo/ui";
import { Footer } from "@/features/landing-pages/components/footer";
import { HouseOwnerNavigation } from "@/features/home-owner/navbar/house-owner-navigation";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <Container as="div" className="min-h-screen bg-background pt-28">
      <HouseOwnerNavigation />
      <GeneralSpacer>{children}</GeneralSpacer>
      <Footer />
    </Container>
  );
}
