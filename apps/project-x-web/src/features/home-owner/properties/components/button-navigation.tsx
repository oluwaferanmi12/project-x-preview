import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { ArrowRight, ArrowLeft } from "@repo/icons";
import React from "react";

export const ButtonNavigation = ({
  handleNextStep,
  handlePrevStep,
  isLoading,
}: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
  isLoading?: boolean;
}) => {
  return (
    <Container className="border-t border-line flex items-center justify-between pt-4">
      <Button
        disabled={isLoading}
        onClick={handlePrevStep}
        leftIcon={<ArrowLeft className="text-primary" />}
        variant="muted"
      >
        Previous
      </Button>
      <Button
        disabled={isLoading}
        onClick={handleNextStep}
        rightIcon={<ArrowRight />}
        variant="primary"
        loading={isLoading}
      >
        Continue
      </Button>
    </Container>
  );
};
