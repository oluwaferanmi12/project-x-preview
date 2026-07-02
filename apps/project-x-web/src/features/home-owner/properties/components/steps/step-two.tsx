import { Container } from "@repo/ui";
import React, { useState } from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { ContentWrapper } from "../nuggets/content-wrapper";
import { Radio } from "@repo/ui";
import { Text } from "@repo/ui";
import { Input } from "@repo/ui";
import { Switch } from "@repo/ui";
import { Textarea } from "@repo/ui";
import { DraftProperty } from "../../types/property.types";

export const StepTwo = ({ activeSubStep, payload }: { activeSubStep: number; payload?: DraftProperty }) => {
  const [propertyCondition, setPropertyCondition] = useState<"new" | "old">(
    "new",
  );
  const [switchActive, setSwitchActive] = useState(false);
  return (
    <Container>
      {activeSubStep === 1 && (
        <>
          <NumberWrapper
            serialNo="i"
            text="What is the condition of the property?"
          >
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    value="new"
                    checked={propertyCondition === "new"}
                    onChange={() => {
                      setPropertyCondition("new");
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    Newly built
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    value="new"
                    checked={propertyCondition === "old"}
                    onChange={() => {
                      setPropertyCondition("old");
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    Older property
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
          </NumberWrapper>
          {propertyCondition === "old" && (
            <NumberWrapper serialNo="" text="Is the property renovated?">
              <Container className="flex gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3 justify-between">
                    <Text tone="primary" variant="action-label">
                      Yes, it has been renovated
                    </Text>
                    <Switch
                      checked={switchActive}
                      onChange={() => {
                        setSwitchActive((prev) => !prev);
                      }}
                    />
                  </Container>
                </ContentWrapper>
              </Container>
            </NumberWrapper>
          )}

          <NumberWrapper
            showToolTip
            serialNo="ii"
            text="Is the property furnished?"
          >
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    Fully Furnished
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    Semi Furnished
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    Not Furnished
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
          </NumberWrapper>
        </>
      )}
      {activeSubStep === 2 && (
        <>
          <NumberWrapper
            serialNo="iii"
            text="Describes the size of the property."
          >
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    Studio
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    1 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    2 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    3 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    4 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    5 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container>
              <Input label="" placeholder="Enter number" />
            </Container>
          </NumberWrapper>
          <NumberWrapper serialNo="iv" text="How many bathroom?">
            <Input label="" placeholder="Enter number" />
          </NumberWrapper>
          <NumberWrapper serialNo="v" text="How many toilet?">
            <Input label="" placeholder="Enter number" />
          </NumberWrapper>
        </>
      )}

      {activeSubStep === 3 && (
        <>
          <NumberWrapper
            serialNo="vi"
            text="How many unit of this listing is available?"
          >
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    1
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    2
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    3
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    4
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    5
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio checked={false} onChange={() => {}} />
                  <Text tone="primary" variant="action-label">
                    6
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Input label="" placeholder="Others" />
          </NumberWrapper>

          <NumberWrapper serialNo="vii" text="Describe this property?">
            <Text variant="body-sm" tone="danger">
              Minimum of 100 words
            </Text>
            <Textarea label="" placeholder="Enter description" />
          </NumberWrapper>
        </>
      )}
    </Container>
  );
};
