import { Container, GeneralSpacer, Text } from "@repo/ui";
import React from "react";
import { HomePill } from "./home-pill";

export const AvailableProperties = () => {
  return (
    <GeneralSpacer>
      <Container className="mb-28">
        <HomePill text="Available Properties" />
        <Container className="lg:w-1/2 w-full mt-4 mb-16">
          <Text tone="primary" variant="h2">
            Explore different options for your dream home.
          </Text>
        </Container>
      </Container>
    </GeneralSpacer>
  );
};
