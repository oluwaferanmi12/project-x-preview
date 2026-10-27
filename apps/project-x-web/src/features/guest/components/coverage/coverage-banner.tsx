import { Container, GeneralSpacer, Text } from "@repo/ui";
import React from "react";

export const CoverageBanner = () => {
  return (
    <Container className="lg:pt-30 pt-20">
      <GeneralSpacer>
        <Container className="flex flex-col gap-4 items-center">
          <Text tone="primary" variant="bodyRegular">
            Where we’re available
          </Text>
          <Text
            variant="h1"
            tone="primary"
            className="text-center lg:w-[60%] w-full"
          >
            We’re growing our coverage across cities and states in Nigeria.
          </Text>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
