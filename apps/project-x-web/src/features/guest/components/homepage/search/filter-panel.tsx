import { Button, Container, Text } from "@repo/ui";
import { CheckIcon } from "@repo/icons";
import { ReactNode } from "react";

export const FilterPanel = ({
  title,
  children,
  onApply,
}: {
  title: string;
  children: ReactNode;
  onApply: () => void;
}) => {
  return (
    <Container className="flex flex-col gap-4">
      <Text variant="action-label" tone="primary">
        {title}
      </Text>
      {children}
      <Button
        fullWidth
        rightIcon={<CheckIcon size={16} />}
        onClick={onApply}
      >
        Apply
      </Button>
    </Container>
  );
};
