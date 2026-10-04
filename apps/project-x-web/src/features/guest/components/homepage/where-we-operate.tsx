import { Container, GeneralSpacer, Text } from "@repo/ui";
import React from "react";
import { HomePill } from "./home-pill";
import { Col, Row } from "antd";
import OperationImage from "@/assets/images/operation-image.jpg";
import Image from "next/image";

export const WhereWeOperate = () => {
  return (
    <Container className="bg-primary py-28">
      <GeneralSpacer>
        <Container className="flex flex-col items-center justify-center">
          <HomePill purpleVariant text="Where you operate" />
          <Container className="mt-4 w-[60%] mb-16">
            <Text className="text-center" variant="h2" tone="inverted">
              We are available nationwide, with properties listed in various
              cities
            </Text>
          </Container>
        </Container>
        <Row gutter={24}>
          <Col xs={8}>
            <Container className="flex flex-col gap-6">
              <Container className="bg-[#2A2A2A] min-h-70 rounded-4xl p-8">
                <Container as="div" className="text-[64px]">
                  🇳🇬
                </Container>
                <Container className="mt-16.5 flex flex-col gap-4">
                  <Text variant="h4" tone="inverted">
                    Multiple States
                  </Text>
                  <Text variant="bodyRegular" tone="secondary">
                    We’re expanding across different states, bringing more
                    properties closer to you.
                  </Text>
                </Container>
              </Container>
              <Container className="bg-[#2A2A2A] min-h-70 rounded-4xl p-8">
                <Container as="div" className="text-[64px]">
                  📍
                </Container>
                <Container className="mt-16.5 flex flex-col gap-4">
                  <Text variant="h4" tone="inverted">
                    More Cities
                  </Text>
                  <Text variant="bodyRegular" tone="secondary">
                    Discover homes in growing cities and communities across
                    Nigeria.
                  </Text>
                </Container>
              </Container>
            </Container>
          </Col>
          <Col xs={8}>
            {/* The image fills the height the side columns give the row, instead
                of setting its own from its aspect ratio. */}

            <Container className="h-full relative overflow-hidden rounded-4xl">
              <Image
                src={OperationImage}
                alt=""
                fill
                className="object-cover"
              />
            </Container>
          </Col>
          <Col xs={8}>
            <Container className="flex flex-col gap-6">
              <Container className="bg-[#2A2A2A] min-h-70 rounded-4xl p-8">
                <Container as="div" className="text-[64px]">
                  🏠
                </Container>
                <Container className="mt-16.5 flex flex-col gap-4">
                  <Text variant="h4" tone="inverted">
                    More Properties
                  </Text>
                  <Text variant="bodyRegular" tone="secondary">
                    New homes and listings are being added regularly as we grow.
                  </Text>
                </Container>
              </Container>
              <Container className="bg-[#2A2A2A] min-h-70 rounded-4xl p-8">
                <Container as="div" className="text-[64px]">
                  🚀
                </Container>
                <Container className="mt-16.5 flex flex-col gap-4">
                  <Text variant="h4" tone="inverted">
                    Coming to more locations
                  </Text>
                  <Text variant="bodyRegular" tone="secondary">
                    We’re continuously expanding to make finding a home easier,
                    wherever you are.
                  </Text>
                </Container>
              </Container>
            </Container>
          </Col>
        </Row>
      </GeneralSpacer>
    </Container>
  );
};
