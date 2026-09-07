import React from "react";
import { Container } from "@repo/ui"
import { GeneralSpacer } from "@repo/ui"
import { Footer } from "@/features/landing-pages/components/footer";
import { HouseOwnerNavigation } from "@/features/home-owner/navbar/house-owner-navigation";

export default function HouseOwnerlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container as="div" className="bg-background h-full pt-20">
      <HouseOwnerNavigation />
      <Container as="div">
        <GeneralSpacer>{children}</GeneralSpacer>
        <Footer />
      </Container>
    </Container>
  );
}
