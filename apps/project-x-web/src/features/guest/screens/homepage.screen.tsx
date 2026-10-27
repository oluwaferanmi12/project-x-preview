"use client";
import { Container } from "@repo/ui";
import { HomeBanner } from "../components/homepage/home-banner";
import { HowItWorks } from "../components/homepage/how-it-works";
import { AvailableProperties } from "../components/homepage/available-properties";
import { WhereWeOperate } from "../components/homepage/where-we-operate";
import { Faq } from "../components/homepage/faq";
import { EverythingYouNeed } from "../components/homepage/everything-you-need";


function HomePage() {
  return (
    <Container>
      <HomeBanner />
      <HowItWorks />
      <AvailableProperties />
      <WhereWeOperate />
      <Faq />
      <EverythingYouNeed />
    </Container>
  );
}

export default HomePage;
