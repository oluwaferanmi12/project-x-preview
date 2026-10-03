import { Container, Text } from "@repo/ui";
import React from "react";

export const HomeBanner = () => {
  return (
    <Container className="flex flex-col justify-center items-center">
      <Container className="my-30 w-[60%]  flex items-center flex-col justify-center">
        <Text variant="h1" tone="primary" className="text-center">
          A better way to find your next home. Skip the usual hassle!
        </Text>
        <Text variant="bodyRegular" tone="primary" className="mt-4">
          Search through to find a property of your choice
        </Text>
      </Container>
    </Container>
  );
};
