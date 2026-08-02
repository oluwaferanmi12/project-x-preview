import { Container } from "@repo/ui";
import { useState } from "react";
import { NumberWrapper } from "../nuggets/number-wrapper";
import { ContentWrapper } from "../nuggets/content-wrapper";
import { Radio } from "@repo/ui";
import { Text } from "@repo/ui";
import { Checkbox } from "@repo/ui";
import { MultiSelect } from "@repo/ui";
import { DraftProperty } from "../../types/property.types";
import { useGetAmenities, useGetWaterSources } from "../../hooks/property.hook";

export const StepFive = ({
  activeSubstep,
  payload,
  handleUpdateDraft,
}: {
  activeSubstep: number;
  payload?: DraftProperty;
  handleUpdateDraft: (updates: Partial<DraftProperty>) => void;
}) => {
  const { data } = useGetWaterSources();
  const { data: amenities } = useGetAmenities();

  return (
    <>
      <Container>
        {activeSubstep === 1 && (
          <>
            <NumberWrapper serialNo="i" text="What is the water source?">
              <Container className="grid grid-cols-2 gap-4">
                {data &&
                  data.length &&
                  data.map((item) => {
                    return (
                      <ContentWrapper key={item.id}>
                        <Container className="flex items-center gap-3">
                          <Checkbox
                            checked={
                              !!payload?.waterSourceId?.includes(item.id)
                            }
                            onChange={(val) => {
                              handleUpdateDraft({
                                waterSourceId: [
                                  ...(payload?.waterSourceId ?? []),
                                  item.id,
                                ],
                              });
                            }}
                          />
                          <Text tone="primary" variant="action-label">
                            {item.name}
                          </Text>
                        </Container>
                      </ContentWrapper>
                    );
                  })}
              </Container>
            </NumberWrapper>
            <NumberWrapper
              serialNo="iii"
              text="Is the compound fenced or gated?"
            >
              <Container className="flex gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={!!payload?.fencedOrGated}
                      onChange={() => {
                        handleUpdateDraft({ fencedOrGated: true });
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      Yes, it is
                    </Text>
                  </Container>
                </ContentWrapper>
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={!payload?.fencedOrGated}
                      onChange={() => {
                        handleUpdateDraft({ fencedOrGated: false });
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      No, it&apos;s not
                    </Text>
                  </Container>
                </ContentWrapper>
              </Container>
            </NumberWrapper>
            <NumberWrapper serialNo="ii" text="Is parking available">
              <Container className="flex gap-4">
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={!!payload?.parkingAvailable}
                      onChange={() => {
                        handleUpdateDraft({ parkingAvailable: true });
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      Yes, it is
                    </Text>
                  </Container>
                </ContentWrapper>
                <ContentWrapper>
                  <Container className="flex items-center gap-3">
                    <Radio
                      value="new"
                      checked={!payload?.parkingAvailable}
                      onChange={() => {
                        handleUpdateDraft({ parkingAvailable: false });
                      }}
                    />
                    <Text tone="primary" variant="action-label">
                      No, not provided
                    </Text>
                  </Container>
                </ContentWrapper>
              </Container>
            </NumberWrapper>
          </>
        )}
        {activeSubstep === 2 && (
          <>
            <NumberWrapper
              serialNo="iv"
              text="Select amenities available in your property"
            >
              <Container className="">
                <MultiSelect
                  options={
                    amenities
                      ? amenities?.map((item) => ({
                          label: item.name,
                          value: item.id,
                          icon: item.imageUrl,
                        }))
                      : []
                  }
                  value={payload?.amenityIds ?? []}
                  onChange={(val) => {
                    handleUpdateDraft({ amenityIds: val });
                  }}
                />
              </Container>
            </NumberWrapper>
          </>
        )}
      </Container>
    </>
  );
};
