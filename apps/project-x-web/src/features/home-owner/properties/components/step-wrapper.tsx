import { Col, Row } from "antd";
import { StepOne } from "./steps/step-one";
import { ButtonNavigation } from "./button-navigation";
import { Container } from "@repo/ui";
import { StepTwo } from "./steps/step-two";
import { StepThree } from "./steps/step-three";
import { StepFour } from "./steps/step-four";
import { StepFive } from "./steps/step-five";
import { StepSix } from "./steps/step-six";
import { StepSeven } from "./steps/step-seven";
import { DraftProperty } from "../types/property.types";
import React from "react";

export const StepWrapper = ({
  step,
  activeSubStep,
  handleNextStep,
  handlePrevStep,
  payload,
  handleUpdateDraft,
  handleSaveDraft,
  handleSubmitListing,
  isPending,
  onVideoUploadingChange,
}: {
  step: number;
  activeSubStep: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
  handleSaveDraft: () => void;
  handleSubmitListing: () => void;
  isPending?: boolean;
  onVideoUploadingChange?: (isUploading: boolean) => void;
}) => {
  const isReviewStep = step === 7;
  const topRef = React.useRef<HTMLDivElement>(null);
  React.useEffect(() => {
    topRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [step, activeSubStep]);

  console.log(payload, "Payload in StepWrapper")

  return (
    <Row justify={"center"} className="flex-1">
      <Col xs={24} lg={12}>
        <Container className="flex flex-col justify-between h-full">
          <Container ref={topRef}>
            {step === 1 && (
              <StepOne
                payload={payload}
                handleUpdateDraft={handleUpdateDraft}
              />
            )}
            {step === 2 && (
              <StepTwo
                activeSubStep={activeSubStep}
                payload={payload}
                handleUpdateDraft={handleUpdateDraft}
              />
            )}
            {step === 3 && (
              <StepThree
                activeSubstep={activeSubStep}
                payload={payload}
                handleUpdateDraft={handleUpdateDraft}
              />
            )}
            {step === 4 && (
              <StepFour
                activeSubstep={activeSubStep}
                payload={payload}
                handleUpdateDraft={handleUpdateDraft}
              />
            )}
            {step === 5 && (
              <StepFive
                activeSubstep={activeSubStep}
                payload={payload}
                handleUpdateDraft={handleUpdateDraft}
              />
            )}
            {step === 6 && (
              <StepSix
                activeSubstep={activeSubStep}
                payload={payload}
                handleUpdateDraft={handleUpdateDraft}
                onVideoUploadingChange={onVideoUploadingChange}
              />
            )}
            {step === 7 && (
              <StepSeven
                payload={payload}
                handleUpdateDraft={handleUpdateDraft}
              />
            )}
          </Container>
          <ButtonNavigation
            isLoading={isPending}
            handleNextStep={isReviewStep ? handleSubmitListing : handleSaveDraft}
            handlePrevStep={handlePrevStep}
            nextLabel={isReviewStep ? "Publish" : "Continue"}
          />
        </Container>
      </Col>
    </Row>
  );
};
