import { Container, GeneralSpacer, Text } from "@repo/ui";
import { Col, Row } from "antd";
import React from "react";

const TRUST_MEASURES = [
  {
    emoji: "🏠",
    title: "Property Information",
    description:
      "We check and verify all details submitted with each property.",
  },
  {
    emoji: "🗺️",
    title: "Location Checks",
    description:
      "Property locations and address information are reviewed as part of the listing process.",
  },
  {
    emoji: "🗂️",
    title: "Documentation",
    description:
      "Required ownership or authorisation documents may be requested depending on who is listing the property.",
  },
  {
    emoji: "✅",
    title: "Listing checks",
    description:
      "Listings are reviewed before they’re published on the platform.",
  },
];

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
            className="lg:w-1/2 text-center"
            variant="bodyRegular"
            tone="secondary"
          >
            We review property listings and submitted information to help
            maintain a more reliable marketplace for everyone.
          </Text>
        </Container>
        <Container className="pt-16">
          <Row justify={"center"}>
            <Col lg={20} xs={24}>
              <Row justify={"center"} gutter={[24, 24]}>
                {TRUST_MEASURES.map((item) => (
                  <Col key={item.title} lg={12} xs={24}>
                    <Container className="bg-background-dark rounded-4xl p-8 lg:min-h-70 flex flex-col gap-10 lg:gap-16">
                      <Container className="text-[64px]">
                        {item.emoji}
                      </Container>
                      <Container className="flex flex-col gap-4">
                        <Text variant="h4" tone="inverted">
                          {item.title}
                        </Text>
                        <Text variant="bodyRegular" tone="secondary">
                          {item.description}
                        </Text>
                      </Container>
                    </Container>
                  </Col>
                ))}
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
