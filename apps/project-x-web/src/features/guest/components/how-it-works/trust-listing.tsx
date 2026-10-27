import { Container, GeneralSpacer, Text } from "@repo/ui";
import { Col, Row } from "antd";
import React from "react";

export const TrustListing = () => {
  return (
    <Container className="bg-primary py-28">
      <GeneralSpacer>
        <Container className="flex flex-col items-center gap-4">
          <Container className="bg-pink-back-dark px-2 rounded-lg py-[2.5px]">
            <Text variant="body-xs" className="text-pink-fore-dark">
              Measures we take
            </Text>
          </Container>
          <Text variant="h2" tone="inverted">
            Trust starts with better listings
          </Text>
          <Text
            className="w-1/2 text-center"
            variant="bodyRegular"
            tone="secondary"
          >
            We review property listings and submitted information to help
            maintain a more reliable marketplace for everyone.
          </Text>
        </Container>
        <Container className="pt-16">
          <Row justify={"center"}>
            <Col xs={20}>
              <Row justify={"center"} gutter={[24, 24]}>
                <Col xs={12}>
                  <Container className="bg-background-dark rounded-4xl p-8 min-h-70 flex flex-col gap-16">
                    <Container className="text-[64px]">🏠</Container>
                    <Container className="flex flex-col gap-4">
                      <Text variant="h4" tone="inverted">
                        Property Information
                      </Text>
                      <Text variant="bodyRegular" tone="secondary">
                        We check and verify all details submitted with each
                        property.
                      </Text>
                    </Container>
                  </Container>
                </Col>
                <Col xs={12}>
                  <Container className="bg-background-dark rounded-4xl p-8 min-h-70 flex flex-col gap-16">
                    <Container className="text-[64px]">🗺️</Container>
                    <Container className="flex flex-col gap-4">
                      <Text variant="h4" tone="inverted">
                        Location Checks
                      </Text>
                      <Text variant="bodyRegular" tone="secondary">
                        Property locations and address information are reviewed
                        as part of the listing process.
                      </Text>
                    </Container>
                  </Container>
                </Col>
                <Col xs={12}>
                  <Container className="bg-background-dark rounded-4xl p-8 min-h-70 flex flex-col gap-16">
                    <Container className="text-[64px]">🗂️</Container>
                    <Container className="flex flex-col gap-4">
                      <Text variant="h4" tone="inverted">
                        Documentation
                      </Text>
                      <Text variant="bodyRegular" tone="secondary">
                        Required ownership or authorisation documents may be
                        requested depending on who is listing the property.
                      </Text>
                    </Container>
                  </Container>
                </Col>
                <Col xs={12}>
                  <Container className="bg-background-dark rounded-4xl p-8 min-h-70 flex flex-col gap-16">
                    <Container className="text-[64px]">✅</Container>
                    <Container className="flex flex-col gap-4">
                      <Text variant="h4" tone="inverted">
                        Listing checks
                      </Text>
                      <Text variant="bodyRegular" tone="secondary">
                        Listings are reviewed before they’re published on the
                        platform.
                      </Text>
                    </Container>
                  </Container>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>

        <Container className="pt-16">
          <Text className="text-center" tone="secondary" variant="bodyRegular">
            ⚠️ This does not replace your own checks before renting, paying, or
            signing an agreement.
          </Text>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
