'use client'

import { Container } from "@repo/ui";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { ContentWrapper } from "../nuggets/content-wrapper";
import { Checkbox } from "@repo/ui";
import { useState } from "react";
import CrownIcon from "@/assets/svgs/crown.svg";
import BriefcaseIcon from "@/assets/svgs/briefcase.svg";
import { Text } from "@repo/ui";
import { Radio } from "@repo/ui";

export const StepOne = () => {
  const [checked, setChecked] = useState(false);
  const propertyTypes = [
    ["Apartment / Flat", "Duplex"],
    ["Bungalow", "Terrace House"],
    ["Semi-Detached House", "Detached House"],
  ];
  return (
    <Container>
      <NumberWrapper
        serialNo="i"
        text="What is your relationship to this property?"
      >
        <ContentWrapper>
          <Container as="div" className="flex items-center justify-between">
            <Container className="flex item-center gap-3">
              <CrownIcon className="text-s300" />
              <Text variant="action-label" tone="primary">
                I am the owner
              </Text>
            </Container>
            <Container>
              <Checkbox checked={checked} onChange={setChecked} />
            </Container>
          </Container>
        </ContentWrapper>
        <ContentWrapper>
          <Container as="div" className="flex items-center justify-between">
            <Container className="flex item-center gap-3">
              <BriefcaseIcon className="text-s300" />
              <Text variant="action-label" tone="primary">
                I am an agent
              </Text>
            </Container>
            <Container>
              <Checkbox checked={checked} onChange={setChecked} />
            </Container>
          </Container>
        </ContentWrapper>
      </NumberWrapper>
      <NumberWrapper
        serialNo="ii"
        text="What type of property are you listing?"
      >
        {propertyTypes.map((item, key) => {
          return (
            <Container key={key} className="flex items-center gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    onChange={() => {
                      setChecked((prev) => !prev);
                    }}
                    checked={checked}
                  />
                  <Text variant="action-label" tone="primary">
                    {item[0]}
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio onChange={setChecked} checked={checked} />
                  <Text variant="action-label" tone="primary">
                    {item[1]}
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
          );
        })}
      </NumberWrapper>
    </Container>
  );
};
