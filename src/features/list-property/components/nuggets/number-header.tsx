import { Container } from "@/components/common/container/container";
import React from "react";
import { Text } from "@/components/common/text/text";

export const NumberHeader = ({
  serialNo,
  text,
}: {
  serialNo: string;
  text: string;
}) => {
  return (
    <Container className="flex items-center mb-6 gap-3">
      <Text variant="h4" tone="secondary">
        {serialNo}.
      </Text>
      <Text variant="h4" tone="primary">
        {text}
      </Text>
    </Container>
  );
};
