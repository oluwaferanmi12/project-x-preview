"use client";
import { Container } from "@repo/ui";
import { HomeBanner } from "../components/homepage/home-banner";
import { HowItWorks } from "../components/homepage/how-it-works";
import { AvailableProperties } from "../components/homepage/available-properties";
import { WhereWeOperate } from "../components/homepage/where-we-operate";

function HomePage() {
  return (
    <Container>
      <HomeBanner />
      <HowItWorks />
      <AvailableProperties />
      <WhereWeOperate />
    </Container>
  );
}

export default HomePage;
