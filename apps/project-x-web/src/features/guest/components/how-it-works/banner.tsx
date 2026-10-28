import { Container, GeneralSpacer, Text } from "@repo/ui";
import Image from "next/image";
import React from "react";

export const Banner = () => {
  return (
    <GeneralSpacer>
      <Container className="how-it-works rounded-2xl flex items-center flex-col justify-center">
        <Text variant="bodyRegular" tone="inverted">
          Simple from search to move-in
        </Text>
        <Container className="lg:w-1/2 w-full">
          <Text variant="h1" tone="inverted" className="mt-4 text-center">
            A better way to find and list a home or property.
          </Text>
        </Container>
      </Container>
    </GeneralSpacer>
  );
};
