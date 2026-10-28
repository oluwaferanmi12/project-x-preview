import { Container, GeneralSpacer, Text } from "@repo/ui";
import React from "react";

export const FindingAHome = () => {
  return (
    <Container className="flex items-center justify-center py-32 bg-surface">
      <GeneralSpacer>
        <Text variant="h2" tone="secondary" className="lg:w-1/2 w-full">
          Finding a home shouldn’t mean chasing incomplete information. We bring
          important property details together so renters can understand what
          they&apos;re looking at before getting in touch.
        </Text>
      </GeneralSpacer>
    </Container>
  );
};
