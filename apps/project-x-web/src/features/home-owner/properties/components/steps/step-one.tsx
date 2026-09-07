"use client";

import { Container } from "@repo/ui";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { ContentWrapper } from "../nuggets/content-wrapper";
import { useState } from "react";
import { Crown as CrownIcon, Briefcase as BriefcaseIcon } from "@repo/icons";
import { Text } from "@repo/ui";
import { Radio } from "@repo/ui";
import { DraftProperty } from "../../types/property.types";
import { useGetPropertyTypes } from "../../hooks/property.hook";

export const StepOne = ({
  payload,
  handleUpdateDraft,
}: {
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
}) => {
  const { data: propertyTypes } = useGetPropertyTypes();
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
              <Radio
                checked={payload?.relationshipType === "OWNER"}
                onChange={() =>
                  handleUpdateDraft({ relationshipType: "OWNER" })
                }
              />
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
              <Radio
                checked={payload?.relationshipType === "AGENT"}
                onChange={() =>
                  handleUpdateDraft({ relationshipType: "AGENT" })
                }
              />
            </Container>
          </Container>
        </ContentWrapper>
      </NumberWrapper>
      <NumberWrapper
        serialNo="ii"
        text="What type of property are you listing?"
      >
        <Container className="grid grid-cols-2 gap-4">
          {propertyTypes &&
            propertyTypes.map((item, key) => (
              <ContentWrapper key={item.id}>
                <Container className="flex items-center gap-3">
                  <Radio
                    onChange={() =>
                      handleUpdateDraft({ propertyTypeId: item.id })
                    }
                    checked={payload?.propertyTypeId === item.id}
                  />
                  <Text variant="action-label" tone="primary">
                    {item.name}
                  </Text>
                </Container>
              </ContentWrapper>
            ))}
        </Container>
      </NumberWrapper>
    </Container>
  );
};
