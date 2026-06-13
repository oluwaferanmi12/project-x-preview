import { Container } from "@repo/ui";
import React, { ReactNode } from "react";

export const ContentWrapper = ({ children }: { children: ReactNode }) => {
  return (
    <Container className="bg-background rounded-lg p-3 w-full">
      {children}
    </Container>
  );
};
