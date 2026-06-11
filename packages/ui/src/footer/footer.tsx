import React from "react";
import { Container } from "../container/container";
import { GeneralSpacer } from "../wrapper/general-spacer";
import { Text } from "../text/text";
import { Col, Row } from "antd";
import {
  BrandLogo,
  FacebookIcon,
  LinkedinIcon,
  MediumIcon,
  TiktokIcon,
  InstagramIcon,
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
            <Col xs={8}>
              <BrandLogo className="text-inverted" />
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
            <Col xs={16}>
              <Container className="">
                <Container className="flex items-center max-w-3xl mx-auto justify-between">
                  <Container className="flex flex-col gap-4">
                    <Text variant="h5" tone="inverted">
                      Quick links
                    </Text>
                    <Container className="flex flex-col gap-3">
                      {quickLinks.map((item) => {
                        return (
                          <Text
                            key={item.name}
                            variant="body-sm"
                            tone="line"
                          >
                            {item.name}
                          </Text>
                        );
                      })}
                    </Container>
                  </Container>
                  <Container className="flex  flex-col gap-4">
                    <Text variant="h5" tone="inverted">
                      Company
                    </Text>
                    <Container className="flex flex-col gap-3">
                      {company.map((item) => {
                        return (
                          <Text
                            key={item.name}
                            variant="body-sm"
                            tone="line"
                          >
                            {item.name}
                          </Text>
                        );
                      })}
                    </Container>
                  </Container>
                  <Container className="flex  flex-col gap-4">
                    <Text variant="h5" tone="inverted">
                      Resources
                    </Text>
                    <Container className="flex flex-col gap-3">
                      {resource.map((item) => {
                        return (
                          <Text
                            key={item.name}
                            tone="line"
                            variant="body-sm"
                          >
                            {item.name}
                          </Text>
                        );
                      })}
                    </Container>
                  </Container>
                </Container>
                {/* Socials */}
                <Container className="flex items-center max-w-3xl mx-auto  mt-10">
                  <Container className="flex gap-4">
                    <FacebookIcon className="text-inverted" />
                    <LinkedinIcon className="text-inverted" />
                    <XIcon className="text-inverted" />
                    <MediumIcon className="text-inverted" />
                    <TiktokIcon className="text-inverted" />
                  </Container>
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
