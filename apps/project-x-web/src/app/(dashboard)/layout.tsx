import React from "react";
import { Container } from "@repo/ui"
import { GeneralSpacer } from "@repo/ui"
import { Footer } from "@repo/ui"
import { HouseOwnerNavigation } from "@/features/house-owners/house-owner-navigation";

export default function HouseOwnerlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container as="div" className="bg-background h-full  pt-28">
      <HouseOwnerNavigation />
      <Container as="div">
        <GeneralSpacer>{children}</GeneralSpacer>
        <Footer />
      </Container>
    </Container>
  );
}
