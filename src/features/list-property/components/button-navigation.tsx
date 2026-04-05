import Button from "@/components/common/button/button";
import { Container } from "@/components/common/container/container";
import ArrowRight from "@/assets/svgs/arrow-right.svg";
import ArrowLeft from "@/assets/svgs/arrow-left.svg";
import React from "react";

export const ButtonNavigation = ({
  handleNextStep,
  handlePrevStep,
}: {
  handleNextStep: () => void;
  handlePrevStep: () => void;
}) => {
  return (
    <Container className="border-t border-line flex items-center justify-between pt-4">
      <Button
        onClick={handlePrevStep}
        leftIcon={<ArrowLeft className="text-primary" />}
        variant="muted"
      >
        Previous
      </Button>
      <Button
        onClick={handleNextStep}
        rightIcon={<ArrowRight />}
        variant="primary"
      >
        Continue
      </Button>
    </Container>
  );
};
