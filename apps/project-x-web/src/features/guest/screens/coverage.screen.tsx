"use client";

import { Container } from "@repo/ui";
import { CoverageBanner } from "../components/coverage/coverage-banner";
import { CoverageMap } from "../components/coverage/coverage-map";
import { CoverageStates } from "../components/coverage/coverage-states";
import { HowItWorks } from "../components/homepage/how-it-works";

export const CoverageScreen = () => {
  
  return (
    <Container>
      <CoverageBanner />
      <CoverageMap />
      <CoverageStates />
      <HowItWorks noPadding />
    </Container>
  );
};
