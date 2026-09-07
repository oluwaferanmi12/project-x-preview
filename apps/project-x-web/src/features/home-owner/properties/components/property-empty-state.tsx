import { Button, Container, Text } from "@repo/ui";
import { PropertyIcon, AddIcon } from "@repo/icons";
import React from "react";

export const PropertyEmptyState = ({
  onAddProperty,
}: {
  onAddProperty?: () => void;
}) => {
  return (
    <Container className="flex items-center justify-center flex-col">
      <PropertyIcon size={56} className="text-secondary" />
      <Container className="mt-4 mb-5">
        <Text tone="primary" variant="action-label">
          No property to show!
        </Text>
      </Container>
      <Button
        leftIcon={<AddIcon size={14} className="text-inverted" />}
        variant="primary"
        onClick={onAddProperty}
      >
        Add property
      </Button>
    </Container>
  );
};
