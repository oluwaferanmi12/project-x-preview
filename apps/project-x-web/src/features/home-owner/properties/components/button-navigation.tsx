import { Button } from "@repo/ui";
import { Container } from "@repo/ui";
import { ArrowRight, DraftIcon } from "@repo/icons";
import React from "react";

export const ButtonNavigation = ({
  handleNextStep,
  handleSaveAsDraft,
  isLoading,
  savingMode,
  nextLabel = "Continue",
}: {
  handleNextStep: () => void;
  handleSaveAsDraft: () => void;
  isLoading?: boolean;
  savingMode?: "continue" | "draft" | null;
  nextLabel?: string;
}) => {
  return (
    <Container className="mt-8 flex items-center justify-between border-t border-line pt-6">
      <Button
        disabled={isLoading}
        onClick={handleSaveAsDraft}
        rightIcon={<DraftIcon className="text-primary" size={20} />}
        variant="muted"
        loading={isLoading && savingMode === "draft"}
      >
        Save as Draft
      </Button>
      <Button
        disabled={isLoading}
        onClick={handleNextStep}
        rightIcon={<ArrowRight size={16} />}
        variant="primary"
        loading={isLoading && savingMode !== "draft"}
      >
        {nextLabel}
      </Button>
    </Container>
  );
};
