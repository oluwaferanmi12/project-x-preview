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

export const StepTwo = ({
  activeSubStep,
  payload,
  handleUpdateDraft,
}: {
  activeSubStep: number;
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
}) => {
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
                    checked={payload?.propertyCondition === "NEWLY_BUILT"}
                    onChange={() => {
                      // setPropertyCondition("new");
                      handleUpdateDraft({ propertyCondition: "NEWLY_BUILT" });
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
                    checked={payload?.propertyCondition === "OLDER_PROPERTY"}
                    onChange={() => {
                      handleUpdateDraft({
                        propertyCondition: "OLDER_PROPERTY",
                      });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    Older property
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
          </NumberWrapper>
          {payload?.propertyCondition === "OLDER_PROPERTY" && (
            <NumberWrapper serialNo="" text="Is the property renovated?">
              <Container className="flex gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3 justify-between">
                    <Text tone="primary" variant="action-label">
                      Yes, it has been renovated
                    </Text>
                    <Switch
                      checked={!!payload.renovated!}
                      onChange={(value: boolean) => {
                        if (value) {
                          handleUpdateDraft({ renovated: true });
                          return;
                        }
                        handleUpdateDraft({ renovated: false });
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
                  <Radio
                    checked={payload?.furnishingStatus === "FULLY_FURNISHED"}
                    onChange={() => {
                      handleUpdateDraft({
                        furnishingStatus: "FULLY_FURNISHED",
                      });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    Fully Furnished
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.furnishingStatus === "SEMI_FURNISHED"}
                    onChange={() => {
                      handleUpdateDraft({ furnishingStatus: "SEMI_FURNISHED" });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    Semi Furnished
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.furnishingStatus === "NOT_FURNISHED"}
                    onChange={() => {
                      handleUpdateDraft({ furnishingStatus: "NOT_FURNISHED" });
                    }}
                  />
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
          <NumberWrapper serialNo="iii" text="How many bedrooms">
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.bedroomCount === 1}
                    onChange={() => {
                      handleUpdateDraft({ bedroomCount: 1 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    1 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.bedroomCount === 2}
                    onChange={() => {
                      handleUpdateDraft({ bedroomCount: 2 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    2 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.bedroomCount === 3}
                    onChange={() => {
                      handleUpdateDraft({ bedroomCount: 3 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    3 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.bedroomCount === 4}
                    onChange={() => {
                      handleUpdateDraft({ bedroomCount: 4 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    4 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.bedroomCount === 5}
                    onChange={() => {
                      handleUpdateDraft({ bedroomCount: 5 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    5 bedroom
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container>
              <Input
                label=""
                value={
                  payload?.bedroomCount && payload.bedroomCount > 5
                    ? payload.bedroomCount
                    : ""
                }
                onChange={(val) => {
                  handleUpdateDraft({ bedroomCount: +val.target.value });
                }}
                placeholder="Enter number"
              />
            </Container>
          </NumberWrapper>
          <NumberWrapper serialNo="iv" text="How many bathroom?">
            <Input
              label=""
              placeholder="Enter number"
              value={payload?.bathroomCount ? payload?.bathroomCount : ""}
              onChange={({ target }) => {
                handleUpdateDraft({ bathroomCount: +target.value });
              }}
            />
          </NumberWrapper>
          <NumberWrapper serialNo="v" text="How many toilet?">
            <Input
              label=""
              value={payload?.toiletCount ? payload?.toiletCount : ""}
              onChange={({ target }) => {
                handleUpdateDraft({ toiletCount: +target.value });
              }}
              placeholder="Enter number"
            />
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
                  <Radio
                    checked={payload?.unitCount === 1}
                    onChange={() => {
                      handleUpdateDraft({ unitCount: 1 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    1
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.unitCount === 2}
                    onChange={() => {
                      handleUpdateDraft({ unitCount: 2 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    2
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.unitCount === 3}
                    onChange={() => {
                      handleUpdateDraft({ unitCount: 3 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    3
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.unitCount === 4}
                    onChange={() => {
                      handleUpdateDraft({ unitCount: 4 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    4
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Container className="flex gap-4">
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.unitCount === 5}
                    onChange={() => {
                      handleUpdateDraft({ unitCount: 5 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    5
                  </Text>
                </Container>
              </ContentWrapper>
              <ContentWrapper>
                <Container className="flex items-center gap-3">
                  <Radio
                    checked={payload?.unitCount === 6}
                    onChange={() => {
                      handleUpdateDraft({ unitCount: 6 });
                    }}
                  />
                  <Text tone="primary" variant="action-label">
                    6
                  </Text>
                </Container>
              </ContentWrapper>
            </Container>
            <Input
              label=""
              placeholder="Others"
              value={
                payload?.unitCount && payload.unitCount > 6
                  ? payload?.unitCount
                  : ""
              }
              onChange={({ target }) => {
                handleUpdateDraft({ unitCount: +target.value });
              }}
            />
          </NumberWrapper>

          
        </>
      )}
    </Container>
  );
};
