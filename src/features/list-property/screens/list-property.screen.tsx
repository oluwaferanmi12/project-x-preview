"use client";
import { Container } from "@/components/common/container/container";
import { useListingScreen } from "../hooks/useListingScreen";
import { ListingNavigation } from "../components/listing-navigation";
import { Col, Row } from "antd";
import { StepWrapper } from "../components/step-wrapper";

function ListPropertyScreen() {
  // The step should be handled from the top of this screen
  // Based on the api call, make an api call to determine the step the user is on
  const { activeStep, handleNextStep, handlePrevStep, activeSubStep } =
    useListingScreen();
  return (
    <Row gutter={16} className="min-h-[90vh] pb-10 ">
      <Col xs={8}>
        <ListingNavigation active={activeStep} />
      </Col>
      <Col xs={16}>
        <Container className="relative flex flex-col py-12 bg-surface w-full h-full rounded-xl px-5">
          <StepWrapper
            activeSubStep={activeSubStep}
            handleNextStep={handleNextStep}
            handlePrevStep={handlePrevStep}
            step={activeStep}
          />
        </Container>
      </Col>
    </Row>
  );
}

export default ListPropertyScreen;
