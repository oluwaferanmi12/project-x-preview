import React from "react";
import { Navbar } from "@/components/common/navbar/navbar";
import { Container } from "@/components/common/container/container";
import { GeneralSpacer } from "@/components/common/wrapper/general-spacer";

export default function HouseOwnerlayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container as="div" className="bg-background h-full min-h-screen  pt-28">
      <Navbar />
      <Container as="div" >
        <GeneralSpacer>{children}</GeneralSpacer>
      </Container>
    </Container>
  );
}
