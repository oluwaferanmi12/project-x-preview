import { Col, Row } from "antd";
import React from "react";
import { StepOne } from "./steps/step-one";
import { ButtonNavigation } from "./button-navigation";
import { Container } from "@/components/common/container/container";
import { useStepWrapper } from "../hooks/useStepWrapper";
import { StepTwo } from "./steps/step-two";
import { StepThree } from "./steps/step-three";

// The step the user is ideally passed down to this component
// Also once the user makes the first call to the api , we have to append the id of the property that has been created to the url

// if no step is found , pass -1 to this component
export const StepWrapper = ({
  step,
  activeSubStep,
  handleNextStep,
  handlePrevStep,
}: {
  step: number;
  activeSubStep: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
}) => {
  useStepWrapper();
  return (
    <Row justify={"center"} className="flex-1">
      <Col xs={12}>
        <Container className="flex flex-col justify-between h-full">
          <Container>
            {step === 1 && <StepOne />}
            {step === 2 && <StepTwo activeSubStep={activeSubStep} />}
            {step === 3 && <StepThree activeSubstep={activeSubStep} />}
          </Container>
          <ButtonNavigation
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
          />
        </Container>
      </Col>
    </Row>
  );
};
