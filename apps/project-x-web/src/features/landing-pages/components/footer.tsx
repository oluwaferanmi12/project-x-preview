"use client";

import React from "react";
import { Container, GeneralSpacer, Text } from "@repo/ui";
import { Col, Row } from "antd";
import {
  FacebookIcon,
  LinkedinIcon,
  MediumIcon,
  TiktokIcon,
  InstagramIcon,
  LogoPlaceholderIcon,
  XIcon,
} from "@repo/icons";

export const Footer = () => {
  const quickLinks = [
    { name: "Renting", url: "" },
    { name: "Property listing", url: "" },
    { name: "About us", url: "" },
  ];
  const company = [
    { name: "Terms of Service", url: "" },
    { name: "Privacy Policy", url: "" },
    { name: "Cookie policy", url: "" },
  ];
  const resource = [
    { name: "Blog", url: "" },
    { name: "How it Works", url: "" },
    { name: "Support", url: "" },
    { name: "Pricing", url: "" },
  ];
  return (
    <>
      <Container className="bg-p300 py-4 pt-20 pb-32">
        <GeneralSpacer>
          <Row>
            <Col xs={24} lg={10}>
              <Container as="span">
                <LogoPlaceholderIcon className="text-inverted" />
              </Container>
              <Container className="mt-5">
                <Text variant="h2" tone="inverted">
                  Connecting every{" "}
                </Text>
                <Text variant="h2" className="text-s100">
                  house seekers
                </Text>
                <Text variant="h2" tone="inverted">
                  with all verified
                </Text>
                <Text variant="h2" className="text-p75">
                  house owners
                </Text>
              </Container>
            </Col>
            <Col xs={24} lg={14} className="lg:mt-0 mt-16">
              <Row className="w-full">
                <Col xs={12} lg={8} className="flex flex-col gap-4">
                  <Text variant="h5" tone="inverted">
                    Quick links
                  </Text>
                  <Container className="flex flex-col gap-3 mt-4">
                    {quickLinks.map((item) => (
                      <Text key={item.name} variant="body-sm" tone="line">
                        {item.name}
                      </Text>
                    ))}
                  </Container>
                </Col>
                <Col xs={12} lg={8} className="flex flex-col gap-4">
                  <Text variant="h5" tone="inverted">
                    Company
                  </Text>
                  <Container className="flex flex-col gap-3 mt-4">
                    {company.map((item) => (
                      <Text key={item.name} variant="body-sm" tone="line">
                        {item.name}
                      </Text>
                    ))}
                  </Container>
                </Col>
                <Col
                  xs={12}
                  lg={8}
                  className="flex flex-col gap-4 lg:mt-0 mt-16"
                >
                  <Text variant="h5" tone="inverted">
                    Resources
                  </Text>
                  <Container className="flex flex-col gap-3 mt-4">
                    {resource.map((item) => (
                      <Text key={item.name} tone="line" variant="body-sm">
                        {item.name}
                      </Text>
                    ))}
                  </Container>
                </Col>
              </Row>

              <Container className="flex  mx-auto mt-10">
                <Container className="flex gap-4">
                  <FacebookIcon className="text-inverted" />
                  <LinkedinIcon className="text-inverted" />
                  <XIcon className="text-inverted" />
                  <MediumIcon className="text-inverted" />
                  <TiktokIcon className="text-inverted" />
                </Container>
              </Container>
            </Col>
          </Row>
        </GeneralSpacer>
      </Container>
      <Container className="bg-p200 py-4">
        <GeneralSpacer>
          <Container>
            <Text variant="body-sm" tone="inverted" className="text-center">
              © 2026 Project X. All rights reserved.
            </Text>
          </Container>
        </GeneralSpacer>
      </Container>
    </>
  );
};
