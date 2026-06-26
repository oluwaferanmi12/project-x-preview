"use client";
import { Container } from "@repo/ui";
import { useListingScreen } from "../hooks/useListingScreen";
import { ListingNavigation } from "../components/listing-navigation";
import { Col, Row } from "antd";
import { StepWrapper } from "../components/step-wrapper";
import { Button } from "@repo/ui";
import { useRouter } from "next/navigation";
import { MobileListingNavigation } from "../components/mobile-listing-navigation";

function ListPropertyScreen() {
  const router = useRouter();
  const {
    activeStep,
    handleNextStep,
    handlePrevStep,
    activeSubStep,
    payload,
    dropOffStep,
  } = useListingScreen();

  const isCompleted = activeStep > 7;

  return (
    <Row gutter={16} className="min-h-[90vh] pb-10 ">
      {/* Mobile Navigation */}
      <Col xs={24} lg={0} className="block lg:hidden">
        <MobileListingNavigation active={activeStep} dropOffStep={dropOffStep} />
        
      </Col>

      {/* Desktop Navigation */}
      <Col lg={8} xs={0} className="hidden lg:block">
        <ListingNavigation active={activeStep} dropOffStep={dropOffStep} />
      </Col>
      <Col xs={24} lg={16}>
        <Container className="relative flex flex-col py-12  lg:bg-surface w-full h-full rounded-xl px-5">
          {isCompleted ? (
            <Row
              justify={"center"}
              align={"middle"}
              className="flex-1 items-center"
            >
              <Col xs={24} lg={12}>
                <Container className="flex flex-col items-center justify-between h-full">
                  <Container className="flex flex-col gap-16 items-center justify-center h-full">
                    <Container as="div">
                      <Container
                        as="h1"
                        className="text-2xl mb-2 text-center font-bold text-primary"
                      >
                        Property Submitted
                      </Container>
                      <Container as="p" className="text-center text-secondary">
                        Your property has been submitted for review. Once all
                        details are facts checked property will be published to
                        the public.
                      </Container>
                    </Container>

                    <Button
                      variant="primary"
                      fullWidth
                      className="px-8 py-2 rounded-lg font-medium"
                      onClick={() => router.replace("/properties")}
                    >
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
              payload={payload}
            />
          )}
        </Container>
      </Col>
    </Row>
  );
}

export default ListPropertyScreen;
