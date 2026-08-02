"use client";
import { Button, Container } from "@repo/ui";
import { useListingScreen } from "../hooks/useListingScreen";
import { ListingNavigation } from "../components/listing-navigation";
import { Col, Row } from "antd";
import { StepWrapper } from "../components/step-wrapper";
import { ArrowLeft } from "@repo/icons";
import { useRouter, useSearchParams } from "next/navigation";
import { MobileListingNavigation } from "../components/mobile-listing-navigation";
import { SpinIcon } from "@repo/icons";

function ListPropertyScreen() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const showDraftBack = searchParams.get("from") === "draft";
  // The step should be handled from the top of this screen
  // Based on the api call, make an api call to determine the step the user is on
  const {
    activeStep,
    handleNextStep,
    handlePrevStep,
    activeSubStep,
    payload,
    dropOffStep,
    handleUpdateDraft,
    handleSaveDraft,
    isPending,
    isDraftLoading,
  } = useListingScreen();

  const isCompleted = activeStep > 7;

  return (
    <Container>
      {showDraftBack && (
        <button
          type="button"
          onClick={() => router.push("/properties?status=draft")}
          className="mb-5 inline-flex cursor-pointer items-center gap-2 text-sm font-bold text-s500"
        >
          <ArrowLeft size={14} />
          Back
        </button>
      )}

      <Row gutter={16} className="lg:min-h-[90vh] py-8">
        {/* Mobile Navigation */}
        <Col xs={24} lg={0}>
          <MobileListingNavigation
            active={activeStep}
            dropOffStep={dropOffStep}
          />
        </Col>

        {/* Desktop Navigation */}
        <Col lg={8} xs={0}>
          <ListingNavigation active={activeStep} dropOffStep={dropOffStep} />
        </Col>
        <Col xs={24} lg={16}>
          <Container className="relative flex flex-col lg:py-12  lg:bg-surface w-full h-full rounded-xl">
            {isDraftLoading ? (
              <Row
                justify={"center"}
                align={"middle"}
                className="flex-1 items-center"
              >
                <Container className="inline-flex animate-spin [animation-duration:1.5s] text-p300">
                  <SpinIcon aria-hidden="true" size={32} />
                </Container>
              </Row>
            ) : isCompleted ? (
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
                handleUpdateDraft={handleUpdateDraft}
                handleSaveDraft={handleSaveDraft}
                isPending={isPending}
              />
            )}
          </Container>
        </Col>
      </Row>
    </Container>
  );
}

export default ListPropertyScreen;
