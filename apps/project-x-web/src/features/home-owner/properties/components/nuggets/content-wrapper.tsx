import { Container } from "@repo/ui";
import React, { ReactNode } from "react";

export const ContentWrapper = ({
  children,
  onClick,
}: {
  children: ReactNode;
  onClick?: () => void;
}) => {
  return (
    <Container
      onClick={onClick}
      className={`bg-background rounded-lg p-3 w-full ${onClick ? "cursor-pointer" : ""}`}
    >
      {children}
    </Container>
  );
};
