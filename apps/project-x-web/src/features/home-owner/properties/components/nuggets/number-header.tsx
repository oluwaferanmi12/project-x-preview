import { Container } from "@repo/ui";
import React from "react";
import { Text } from "@repo/ui";

export const NumberHeader = ({
  serialNo,
  text,
}: {
  serialNo: string;
  text: string;
}) => {
  return (
    <Container className="flex items-start  gap-3">
      <Text variant="h4" tone="secondary">
        {serialNo}.
      </Text>
      <Text variant="h4" tone="primary">
        {text}
      </Text>
    </Container>
  );
};
