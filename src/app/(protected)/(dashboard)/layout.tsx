import React from "react";
import { Navbar } from "@/components/common/navbar/navbar";
import { MobileNavbar } from "@/components/common/navbar/mobile-navbar";
import { Container } from "@/components/common/container/container";
import { GeneralSpacer } from "@/components/common/wrapper/general-spacer";
import { Footer } from "@/components/common/footer/footer";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Container as="div" className="bg-background h-full pt-28">
      <MobileNavbar />
      <Navbar />
      <Container as="div">
        <GeneralSpacer>{children}</GeneralSpacer>
        <Footer />
      </Container>
    </Container>
  );
}
