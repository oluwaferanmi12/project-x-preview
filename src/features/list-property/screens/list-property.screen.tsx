"use client";
import { Container } from "@/components/common/container/container";
import { useListingScreen } from "../hooks/useListingScreen";
import { ListingNavigation } from "../components/listing-navigation";
import { Col, Row } from "antd";
import { StepWrapper } from "../components/step-wrapper";
import Button from "@/components/common/button/button";
import { useRouter } from "next/navigation";

function ListPropertyScreen() {
  const router = useRouter();
  // The step should be handled from the top of this screen
  // Based on the api call, make an api call to determine the step the user is on
  const { activeStep, handleNextStep, handlePrevStep, activeSubStep } =
    useListingScreen();

  // Check if all steps are completed (step 7 is the last step)
  const isCompleted = activeStep > 7;

  return (
    <Row gutter={16} className="min-h-[90vh] pb-10 ">
      <Col xs={8}>
        <ListingNavigation active={activeStep} />
      </Col>
      <Col xs={16}>
        <Container className="relative flex flex-col py-12 bg-surface w-full h-full rounded-xl px-5">
          {isCompleted ? (
            <Row justify={"center"} align={'middle'} className="flex-1 items-center">
              <Col xs={12}>
                <Container className="flex flex-col items-center justify-between h-full">
                  <Container className="flex flex-col gap-16 items-center justify-center h-full">
                    <Container as="div">
                      <Container as="h1" className="text-2xl mb-2 text-center font-bold text-primary">Property Submitted</Container>
                      <Container as="p" className="text-center text-secondary">
                        Your property has been submitted for review. Once all details are facts checked property will be published to the public.
                      </Container>
                    </Container>

                    <Button variant="primary" fullWidth className="px-8 py-2 rounded-lg font-medium" onClick={() => router.replace('/')}>
                      Go to dashboard
                    </Button>
                  </Container>
                </Container>
              </Col>
            </Row>
          ) : (
            <StepWrapper
              activeSubStep={activeSubStep}
              handleNextStep={handleNextStep}
              handlePrevStep={handlePrevStep}
              step={activeStep}
            />
          )}
        </Container>

      </Col>
    </Row>
  );
}

export default ListPropertyScreen;
