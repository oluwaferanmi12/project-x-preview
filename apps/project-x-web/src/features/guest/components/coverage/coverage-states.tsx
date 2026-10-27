import { Button, Container, GeneralSpacer, Text } from "@repo/ui";
import React from "react";
import { HomePill } from "../homepage/home-pill";
import { Col, Row } from "antd";
import { NextIcon } from "@repo/icons";
import { useGetCoverage } from "../../hooks/guest.hooks";
import { CoverageStateSkeleton } from "./coverage-state-skeleton";

const SKELETON_COUNT = 8;

export const CoverageStates = () => {
  const { data, isLoading } = useGetCoverage();
  return (
    <Container className="py-28">
      <GeneralSpacer>
        <Container className="gap-4 flex flex-col">
          <HomePill text="Our Coverage" />
          <Text variant="h2" tone="primary">
            We are currently available in
          </Text>
        </Container>
        <Container className="mt-16">
          <Row gutter={[24, 24]}>
            {isLoading
              ? Array.from({ length: SKELETON_COUNT }).map((_, index) => (
                  <Col key={index} xs={6}>
                    <CoverageStateSkeleton />
                  </Col>
                ))
              : data && data.length
                ? data.map((item) => {
                    return (
                      <Col key={item.stateId} lg={6} md={12} xs={24}>
                        {/* A CSS background (not next/image) so a bad or unlisted image host
                        falls back to the dark card instead of throwing. */}
                        <Container
                          className="h-73.5 flex flex-col items-start justify-between rounded-2xl p-5 bg-background-dark bg-cover bg-center"
                          style={{
                            backgroundImage: `linear-gradient(rgb(18 18 18 / 50%), rgb(18 18 18 / 10%)), url("${item.imageUrl}")`,
                          }}
                        >
                          <Text variant="h3" tone="inverted">
                            {item.displayName}
                          </Text>
                          <Container className="px-3.5 py-1.5 rounded-lg bg-muted">
                            <NextIcon size={20} className="text-primary" />
                          </Container>
                        </Container>
                      </Col>
                    );
                  })
                : "No data found"}
          </Row>
        </Container>
        <Container className="mt-16 flex items-center justify-center">
          <Button
            title="View Propertie"
            variant="primary"
            rightIcon={<NextIcon size={20} className="text-inverted" />}
          >
            View all properties
          </Button>
        </Container>
      </GeneralSpacer>
    </Container>
  );
};
