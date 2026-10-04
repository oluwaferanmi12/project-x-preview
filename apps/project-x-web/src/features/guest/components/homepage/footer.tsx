import { LogoPlaceholderIcon } from "@repo/icons";
import { Container, GeneralSpacer, Text } from "@repo/ui";
import React from "react";

export const HomeFooter = () => {
  return (
    <Container className="pt-12">
      <GeneralSpacer>
        <Container>
          <LogoPlaceholderIcon />
          <Container className="mt-6">
            <Text tone="primary" variant="h1">
              Find dream{" "}
              <Text variant="h1" className="text-s300">
                properties{" "}
                <Text as="span" variant="h1" tone="primary">
                  {" "}
                  to
                </Text>
              </Text>{" "}
              rent.
            </Text>
          </Container>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
