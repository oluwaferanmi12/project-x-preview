"use client";
import { Container } from "@repo/ui";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { HomeBanner } from "../components/homepage/home-banner";
import { AvailableProperties } from "../components/homepage/available-properties";
import { WhereWeOperate } from "../components/homepage/where-we-operate";
import { Faq } from "../components/homepage/faq";
import { HowItWorks } from "../components/homepage/how-it-works";

function HomePage() {
  return (
    <Container>
      <HomeBanner />
      <HowItWorks />
      <AvailableProperties />
      <WhereWeOperate />
      <Faq />
    </Container>
  );
}

export default HomePage;
