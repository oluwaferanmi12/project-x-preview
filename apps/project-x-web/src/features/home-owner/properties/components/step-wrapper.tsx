import { Col, Row } from "antd";
import { StepOne } from "./steps/step-one";
import { ButtonNavigation } from "./button-navigation";
import { Container } from "@repo/ui";
import { useStepWrapper } from "../hooks/useStepWrapper";
import { StepTwo } from "./steps/step-two";
import { StepThree } from "./steps/step-three";
import { StepFour } from "./steps/step-four";
import { StepFive } from "./steps/step-five";
import { StepSix } from "./steps/step-six";
import { StepSeven } from "./steps/step-seven";
import { DraftProperty } from "../types/property.types";

export const StepWrapper = ({
  step,
  activeSubStep,
  handleNextStep,
  handlePrevStep,
  payload,
}: {
  step: number;
  activeSubStep: number;
  handleNextStep: () => void;
  handlePrevStep: () => void;
  payload?: DraftProperty;
}) => {
  useStepWrapper();
  return (
    <Row justify={"center"} className="flex-1">
      <Col xs={24} lg={12}>
        <Container className="flex flex-col justify-between h-full">
          <Container>
            {step === 1 && <StepOne payload={payload} />}
            {step === 2 && <StepTwo activeSubStep={activeSubStep} payload={payload} />}
            {step === 3 && <StepThree activeSubstep={activeSubStep} payload={payload} />}
            {step === 4 && <StepFour activeSubstep={activeSubStep} payload={payload} />}
            {step === 5 && <StepFive activeSubstep={activeSubStep} payload={payload} />}
            {step === 6 && <StepSix activeSubstep={activeSubStep} payload={payload} />}
            {step === 7 && <StepSeven payload={payload} />}
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
