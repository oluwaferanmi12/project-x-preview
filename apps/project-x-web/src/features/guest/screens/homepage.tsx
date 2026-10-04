"use client";
import { Container } from "@repo/ui";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { HomeBanner } from "../components/homepage/home-banner";
import { AvailableProperties } from "../components/homepage/available-properties";
import { HowItWorks } from "../components/homepage/how-it-works";

function HomePage() {
  return (
    <Container>
      <HomeBanner />
      <HowItWorks />
      <AvailableProperties />
    </Container>
  );
}

export default HomePage;
