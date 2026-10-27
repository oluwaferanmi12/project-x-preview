import { Container, Text } from "@repo/ui";
import React from "react";

export const FindingAHome = () => {
  return (
    <Container className="flex items-center justify-center py-32 bg-surface">
      <Text variant="h2" tone="secondary" className="w-1/2">
        Finding a home shouldn’t mean chasing incomplete information. We bring
        important property details together so renters can understand what
        they&apos;re looking at before getting in touch.
      </Text>
    </Container>
  );
};
